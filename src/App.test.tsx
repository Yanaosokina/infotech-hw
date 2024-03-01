import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./reduxApi/store";
import { fireEvent, render, screen } from "@testing-library/react";
import { productsApi } from "reduxApi/api/products";
import App from "./App";

function renderApp(url: string) {
  window.history.pushState({}, "", url);
  render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </React.StrictMode>
  );
}

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


const FAKE_PRODUCT = {
  id: 1,
  title: "Tesla model X",
  description: "The best car in the world",
  price: 30000,
  discountPercentage: 5,
  rating: 4.99,
  stock: 100,
  brand: "Tesla",
  category: "cars",
  thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/1/1.jpg",
    "https://cdn.dummyjson.com/product-images/1/2.jpg",
    "https://cdn.dummyjson.com/product-images/1/3.jpg",
    "https://cdn.dummyjson.com/product-images/1/4.jpg",
    "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  ],
};

describe("Product page", () => {
  beforeEach(() => {
    fetchMock.mockOnceIf("https://dummyjson.com/products/1", () =>
      Promise.resolve({
        status: 200,
        body: JSON.stringify(FAKE_PRODUCT),
      })
    );
  });

  it("should render product page correctly", async () => {
    renderApp("/product/1");
    expect(await screen.findByText(/Tesla model X/i)).toBeInTheDocument();
  });

  it('should open form when Edit button is clicked', async () => {
    renderApp("/product/1");
    expect(await screen.findByText(/Tesla model X/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', {
      name: /Edit/i
    }))

    expect(await screen.findByRole('button', {
      name: 'Save'
    })).toBeInTheDocument()
  })
});
