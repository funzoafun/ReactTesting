import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("async test ", () => {
  test("async post are visible or not", async () => {
    render(<Async />);
    const listElement = await screen.findAllByRole("listitem");
    expect(listElement).not.toHaveLength(0);
  });
});
