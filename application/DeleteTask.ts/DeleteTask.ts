import { TareaID } from "../../domain/TareaID";
import type { TareaRepository } from "../../domain/TareaRepository";

export class DeleteTask{
    constructor(private repository: TareaRepository){}
    
    async handler(id:number){ 
        this.repository.delete(new TareaID(id)); 
    }
}