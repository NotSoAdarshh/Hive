import dotenv from "dotenv";

dotenv.config();

console.log('Starting express backend server...');

const [{ default: connectDB }, { default: app }] = await Promise.all([
    import("./db/index.js"),
    import("./app.js"),
]);

const PORT = process.env.PORT || 5000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Failed to connect to the database:", err);
        process.exit(1); // Exit with failure code
    });