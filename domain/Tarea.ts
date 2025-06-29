//Esto es una entidad ¿Cómo yo represento una Tarea?

import { FinalDate } from "./finalDate";
import { StartDate } from "./StarDate";
import { TareaID } from "./TareaID";

export class Tarea {
    id: TareaID;
    name: string;
    startDate: StartDate;
    finalDate: FinalDate;

    constructor(id: TareaID, name: string, startDate: StartDate, finalDate: FinalDate) {
        this.id = id;
        this.name = name;
        this.startDate = startDate
        this.finalDate = finalDate

    };
    public getID = () => {
        return this.id;
    }
    public getName = () => {
        return this.name;
    }
    public getStarDate = () => {
        return this.startDate;
    }
    public getFinalDate = () => {
        return this.finalDate;
    }
};