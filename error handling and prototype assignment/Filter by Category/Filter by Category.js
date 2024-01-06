function filterByCategory(productsArray) {
  return function(category) {
    // Convert both category and product category to lowercase for case-insensitive comparison
    var lowercaseCategory = category.toLowerCase();

    return productsArray.filter(product => product.catagory.toLowerCase() === lowercaseCategory);
  };
}

// Example usage:
var products = [
  { name: "Shirt", catagory: "clothing" },
  { name: "Pants", catagory: "clothing" },
  { name: "Hat", catagory: "Accessories" },
  { name: "Sunglasses", catagory: "Accessories" },
];

var filterProducts = filterByCategory(products);
var clothingProducts = filterProducts("clothing");

console.log(clothingProducts);
