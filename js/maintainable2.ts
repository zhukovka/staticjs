import {Product, Category} from './maintainable';

function searchProductsByCategory(products:Product[], category:Category){
  return products.filter(product=>{
    return product.category.id == category.id;
  })
}
