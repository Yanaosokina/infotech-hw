import { NavBlock } from "./NavBlock";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("NavBlock", () => {
  it("should render correctly", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <NavBlock isHeader={true} />
      </MemoryRouter>
    );

    expect(screen.getByText("Catalog")).toBeInTheDocument();
    expect(screen.getByText("About us")).toBeInTheDocument();
    expect(screen.getByText("Product selection")).toBeInTheDocument();
    expect(screen.getByText("Our team")).toBeInTheDocument();
    expect(screen.getByText("FAQ")).toBeInTheDocument();
    expect(screen.getByText("For staff")).toBeInTheDocument();
    expect(screen.getByAltText('Burger')).toBeInTheDocument();

    expect(screen.queryByText("Back to site")).toBeNull();
  });

  it('renders "Burger" element when isHeader is true and location is main page' , () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <NavBlock isHeader={true} />
      </MemoryRouter>
    );
    expect(screen.getByAltText('Burger')).toBeInTheDocument();
  })

  it('renders "Back to site" link when location is not main page', () => {
    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <NavBlock isHeader={true} />
      </MemoryRouter>
    );
    expect(screen.getByText('Back to site')).toBeInTheDocument();
  })
});
