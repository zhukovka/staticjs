interface Category{
  name: string;
  id: string;
}

class Product{
  private category:Category;
  setCategory(category:Category){
    this.category = category;
  }
}
