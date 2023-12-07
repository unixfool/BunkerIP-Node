import express from ("express");
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