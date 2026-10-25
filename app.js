const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
res.send(`         <h1>Mini DevOps Pipeline</h1>         <p>Application is running successfully!</p>         <p>Built with Node.js and Express.</p>
    `);
});

app.get("/api/health", (req, res) => {
res.status(200).json({
status: "healthy",
application: "mini-devops-pipeline"
});
});

if (require.main === module) {
app.listen(PORT, "0.0.0.0", () => {
console.log(`Application running on port ${PORT}`);
});
}

module.exports = app;
