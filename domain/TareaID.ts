export class TareaID {
    value: number;

    constructor(value: number) {
        this.value = value;
        this.isValidID();
    }

    //Here i can make validation as below

    private isValidID = () => {
        if (this.value < 0) {
            throw new Error("ID negativo");

        }
    }

    public getValue = () => {
        return this.value;
    }


    //This validations are made in validation time
}