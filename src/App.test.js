import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Counter Testing", () => {
  test("renders the title of counter", () => {
   const {getByText} = render(<App />);
    const linkElement = getByText("This is counter app");
    expect(linkElement).toBeInTheDocument();
  });
});
