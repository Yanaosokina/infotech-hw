import { render, screen } from '@testing-library/react';
import { Button } from "./Button";

describe('Button', () => {
    it('should render', () => {
        render(<Button text="Click Me" onClick={() => {}} />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    })

    it('should render text', () => {
        render(<Button text="Click Me" onClick={() => {}} />);
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    })

    it('should render primary', () => {
        render(<Button text="Click Me" onClick={() => {}} type="primary" />);
        expect(screen.getByRole('button')).toHaveClass('button_primary');
    })

    it('should render secondary', () => {
        render(<Button text="Click Me" onClick={() => {}} type="secondary" />);
        expect(screen.getByRole('button')).toHaveClass('button_secondary');
    })

    it('should call onClick', () => {
        const onClick = jest.fn();
        render(<Button text="Click Me" onClick={onClick} />);
        screen.getByRole('button').click();
        expect(onClick).toHaveBeenCalled();
    })
})