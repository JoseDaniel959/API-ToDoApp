//This is a value Object
export class FinalDate{
    value:Date;

    constructor(value:Date){
        this.value=value;
        this.isValidDate();
    }
    
    private isValidDate = () => {
        if(this.value < new Date()){
            throw new Error("finalDate is less than today's date");
            
        }
    }
 
    public getValue = () =>{
        return this.value;
    }

}