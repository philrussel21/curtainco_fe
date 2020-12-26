function sortProducts(filteredProducts, filterSortBy, sortFields) {
    // const sortFields = [
    //     "Price: Low to High",
    //     "Price: High to Low",
    //     "Name: A to Z",
    //     "Name: Z to A",
    //     "Featured",
    // ];

    switch (filterSortBy) {
        case "Price: Low to High":
            // sort the list by price low -> high
            filteredProducts.sort((a, b) => a.amount - b.amount);
            break;
        case "Price: High to Low":
            // sort the list by price high -> low
            filteredProducts.sort((a, b) => b.amount - a.amount);
            break;
        case "Name: A to Z":
            // sort the list a -> z
            filteredProducts.sort((a, b) =>
                a.name.toLowerCase().localeCompare(b.name.toLowerCase())
            );
            break;
        case "Name: Z to A":
            // sort the list z -> a
            filteredProducts.sort((a, b) =>
                b.name.toLowerCase().localeCompare(a.name.toLowerCase())
            );
            break;
        case "Featured":
            // sort the list by 'featured'
            alert("feature not yet built");
            break;
        default:
            // if nothing is selected, sort the list alphabetically a -> z
            filteredProducts.sort((a, b) =>
                a.name.toLowerCase().localeCompare(b.name.toLowerCase())
            );
            break;
    }

    return filteredProducts;
}

function filterByType(filteredProducts, types) {
    // types = {
    //     fabric: false,
    //     rod: false,
    //     accessory: false,
    //     inStock: false,
    // }
    let arr = [];

    // LOOP THROUGH AND ONLY GET THE KEYS THAT ARE TRUE
    for (const key in types) {
        if (types.hasOwnProperty(key)) {
            const value = types[key];
            if (value) arr.push(key);
        }
    }

    if (arr.length > 0) {
        filteredProducts = filteredProducts.filter((element) =>
            arr.includes(element.type)
        );
    }

    return filteredProducts;
}

function searchProducts(filteredProducts, searchText) {
    if (searchText !== "") {
        filteredProducts = filteredProducts.filter(
            (element) =>
                element.name.toLowerCase().indexOf(searchText.toLowerCase()) !==
                -1
        );
    }

    return filteredProducts;
}

function getOneProduct(allProducts, id) {
    const product = allProducts.filter((prod) => prod._id === id)[0];
    return product;
}

module.exports = {
    sortProducts,
    filterByType,
    searchProducts,
    getOneProduct,
};
