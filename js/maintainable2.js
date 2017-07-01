function searchProductsByCategory(products, category) {
  return products.filter(product=>{
    return product.category.id == category.id;
  })
}
