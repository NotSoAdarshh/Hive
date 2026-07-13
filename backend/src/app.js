import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { auth } from "./lib/auth.js";
import { toNodeHandler } from "better-auth/node";

const app = express();

const authHandler = toNodeHandler(auth);

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use("/api/auth", authHandler);



console.log('CORS_ORIGIN:', process.env.CORS_ORIGIN); // Log the CORS_ORIGIN value for debugging

app.use(express.json({ 
    limit: "16kb"
})); //for forms

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
})); //for url params

//limit is set to 16kb to prevent large payloads, which can help mitigate certain types of attacks and reduce server load.

app.use(express.static("public")); //for static files ie serve files from backend/public

app.use(cookieParser()); //for cookies


//example
app.get("/", (req, res) => {
    res.send("Hello World!");
});

//routes import 


//routes declaration


//error handling middleware

export default app;