export interface Category{
  name: string;
  id: string;
}

export class Product{
  categories:Category[];
  setCategory(categories:Category[]){
    this.categories = categories;
  }
}
