import '@testing-library/jest-dom/extend-expect';
import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

const App = (props: any) => {
    return (
        <div>satoshi</div>
    );
}

test("fpl.1.1: work?", () => {
    const { queryByText, getByLabelText, getByText } = render(<App />);
    expect(getByText("satoshi")).toBeInTheDocument();
});



