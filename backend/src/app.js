import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { auth } from "./lib/auth.js";
import { toNodeHandler } from "better-auth/node";

// Routes
import memberRoutes from "./routes/member.routes.js";
import inventoryRoutes from "./routes/inventory.routes.js";
import storageRoutes from "./routes/storage.routes.js";
import transactionRoutes from "./routes/transaction.routes.js";

const app = express();

const authHandler = toNodeHandler(auth);

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

// Better-auth handler must come before express.json()
app.use("/api/auth", authHandler);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// ─── Routes ──────────────────────────────────────────────────────────────────
app.use("/api/v1/members", memberRoutes);
app.use("/api/v1/inventory", inventoryRoutes);
app.use("/api/v1/storage", storageRoutes);
app.use("/api/v1/transactions", transactionRoutes);

// ─── Health check ─────────────────────────────────────────────────────────────
app.get("/", (req, res) => {
    res.json({ status: "ok", message: "Hive-ERS API is running" });
});

// ─── Global error handler ─────────────────────────────────────────────────────
app.use((err, req, res, next) => {
    const statusCode = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    return res.status(statusCode).json({
        success: false,
        status: statusCode,
        message,
        errors: err.errors || [],
        ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    });
});

export default app;