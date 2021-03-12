import ProductList from "./ProductList";
import {render, screen} from "@testing-library/react";

test("displays a product list", async () => {
    const expectedProducts = [
        "Imaginative Product 1",
        "Innovative Product 2",
        "Blow-your-mind Product 3",
        "Synergistic Product 4",
    ];

    render(<ProductList />);
    const productList = await screen.findAllByAltText("product");
    expect(productList.map(product => product.textContent)).toEqual(expectedProducts);
});