import { render, fireEvent, screen } from "@testing-library/react";
import { ProductDetail } from "./ProductDetail";

describe("ProductDetail", () => {
  const handleChangeMock = jest.fn();

  beforeEach(() => {
    handleChangeMock.mockClear();
  });

  it("renders label and value correctly", () => {
    render(<ProductDetail label="Test Label" value="Test Value" />);

    expect(screen.getByText("Test Label")).toBeInTheDocument();
    expect(screen.getByText("Test Value")).toBeInTheDocument();
  });

  it("renders input field when isEditable is true", () => {
    render(<ProductDetail label="Test Label" isEditable={true} />);

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("calls handleChange when input value changes", () => {
    render(
      <ProductDetail
        label="Test Label"
        isEditable={true}
        handleChange={handleChangeMock}
      />
    );

    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "New Value" } });

    expect(handleChangeMock).toHaveBeenCalledWith("New Value");
  });

  it("renders children when provided", () => {
    render(
      <ProductDetail label="Test Label">
        <div>Child Component</div>
      </ProductDetail>
    );

    expect(screen.getByText("Child Component")).toBeInTheDocument();
  });
});
