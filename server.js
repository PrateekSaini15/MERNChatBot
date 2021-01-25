import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

const port = 5000;

app.listen(port, () => console.log("Server started at 5000"));
