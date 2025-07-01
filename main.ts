import express from "express";
import taskRouter from "./src/lib/task/infraestructure/ExpressTareaRouter";

const app = express();

app.use(express.json())
app.use(taskRouter);

app.listen(3000, () =>{
    console.log("server is running")
})