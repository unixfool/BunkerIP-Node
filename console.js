import express from ("express");
import dotenv from ("dotenv");
import { config } from ("dotenv").config();

const PORT = process.env.PORT 

const app = express();
//This is just for console log

app.get("/", async (req, res) => {
    try {
        console.log("Bunker-IP Console Log System");
    } catch (error) {
        console.log(error);
    }
})

app.listen(3000);