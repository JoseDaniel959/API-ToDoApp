import express from "express";
import taskRouter from "./infraestructure/ExpressTareaRouter";

const app = express();

app.use(express.json())
app.use(taskRouter);

app.listen(3000, () =>{
    console.log("server is running")
})