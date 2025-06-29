export class StartDate{
    value:Date;

    constructor(value:Date){
        this.value=value;
        this.isValidDate();
    }
    
    private isValidDate = () => {
        if(this.value < new Date()){
            throw new Error("startDate is less than today's date");       
        }
    }

    public getValue = () =>{
        return this.value;
    }

  

}