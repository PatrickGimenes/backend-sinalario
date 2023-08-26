import { Category } from "./category";

export class Signal{    
    public name: String;
    public slug: String;
    public description: String;
    public categories: Category[];
    public handConfiguration: String;
    public url: String;
    

    //Omit<Signal, "id">, id?:String
    constructor(props: Signal){
        Object.assign(this, props);

    }


}