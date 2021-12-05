import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "../../../pages/App/App";

describe("AllComments Component", () => {
  test("Should render all avatars from comments", () => {
    render(<App />);

    act(async () => {
      const elements = await screen.findAllByAltText(/avatar/i);
      expect(elements.length).toBeGreaterThan(0);
    });
  });
});
