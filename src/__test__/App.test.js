import { unmountComponentAtNode } from "react-dom";
import App from "../App";

describe("App()", () => {
  it("should print hello world", () => {
    const consoleSpy = jest.spyOn(console, "log");

    App();

    expect(consoleSpy).toHaveBeenCalledWith("Hello world!");
  });
});

// describe("App", () => {
//   test("renders App component", () => {
//     render(<App />);
//     screen.debug();
//   });
// });

// let container = null;

// beforeEach(() => {
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });
