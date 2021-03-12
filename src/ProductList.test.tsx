import ProductList from "./ProductList";
import {render, screen} from "@testing-library/react";

test("displays a product list", async () => {
    const expectedProducts = [
        "Imaginative Product 1",
        "Innovative Product 2",
        "Blow-your-mind Product 3",
        "Synergistic Product 4",
    ];

    const expectedLinks = {
        "Imaginative Product 1": "https://letmegooglethat.com/?q=Imaginative+Product+1",
        "Innovative Product 2": "",
        "Blow-your-mind Product 3": "",
        "Synergistic Product 4": ""
    };

    render(<ProductList />);
    for (const productName of expectedProducts) {
        expect(await screen.getByText(productName)).toBeTruthy();
      //  expect(await screen.getByText(productName).attributes.getNamedItem('href').textContent).toEqual(expectedLinks[productName]);

    }
});

it('links out to the expected product links', () => {

});

