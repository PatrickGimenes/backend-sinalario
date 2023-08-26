export class Category {
  public category: String;
  public slug: String;

  //Omit<Signal, "id">, id?:String
  constructor(props: Category) {
    Object.assign(this, props);
  }
}
