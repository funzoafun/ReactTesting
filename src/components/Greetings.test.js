import { screen, render } from "@testing-library/react";
import Hooks from "./Hooks";
import Greetings from "./Greetings";
import userEvent from "@testing-library/user-event";

describe("Greeting and Hooks component", () => {
  test("This is to test my greetings component!", () => {
    render(<Greetings />);
    const goodelement = screen.getByText(/I hope its good/i);
    expect(goodelement).toBeInTheDocument();
  });

  test("When the button is not clicked", () => {
    render(<Hooks />);
    const secondText = screen.getByText(/second text/i);
    expect(secondText).toBeInTheDocument();
  });

  test("When the button is clicked", () => {
    render(<Hooks />);

    const buttonElement = screen.getByText(/Change the text/i);
    userEvent.click(buttonElement);

    const textElement = screen.queryByText(/This is my second text/i);
    expect(textElement).not.toBeInTheDocument();
  });
});
