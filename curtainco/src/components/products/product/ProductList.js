import React from "react";
import { Grid } from "@material-ui/core";
import ProductItem from "./ProductItem";
import {
    filterByType,
    searchProducts,
    sortProducts,
} from "../../../helpers/productHelpers";

function ProductList({
    products,
    filterText,
    filterTypes,
    filterSortBy,
    sortFields,
    inStockOnly,
}) {
    let filteredProducts = products;

    // FILTER BY SEARCH TEXT
    filteredProducts = searchProducts(filteredProducts, filterText);

    // FILTER BY TYPE
    filteredProducts = filterByType(filteredProducts, filterTypes);

    // filter by inStockOnly
    // filteredProducts = filteredProducts.filter(element => filterTypes.includes(element.type))

    // SORT THE PRODUCTS
    // FIELDS THAT ARE BEING USED TO SORT BY, THESE ARE CURRENTLY HARD CODED INTO THE
    // sortPRODUCTS FUNCTION, I NEED A BETTER WAY TO IMPLEMENT THEM
    filteredProducts = sortProducts(filteredProducts, filterSortBy, sortFields);

    const list = filteredProducts.map((item, index) => (
        <Grid item key={`product-${index}`} xs={12} sm={6} md={4}>
            <ProductItem productData={item} />
        </Grid>
    ));

    return list;
}

export default ProductList;
