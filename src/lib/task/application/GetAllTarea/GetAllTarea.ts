import type { TareaRepository } from "../../domain/TareaRepository";

export class GetAllTarea{

    constructor(private repository:TareaRepository){}
    async handler(){ 
        return this.repository.getAll() 
    }
    

}