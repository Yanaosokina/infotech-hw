import { render, screen, fireEvent } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("Checkbox renders correctly", () => {
    render(<Checkbox>Text</Checkbox>);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  })

  it('handles onChange event', () => {
    const handleChange = jest.fn();
    render(<Checkbox onChange={handleChange}>Text</Checkbox>);
    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalled();
  });
})