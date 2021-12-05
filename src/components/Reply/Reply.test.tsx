import { render, screen } from "@testing-library/react";
import Reply from "./Reply";

const mockProps = {
  postId: 1,
  onCancel: () => {},
};

describe("Reply Component", () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: () => {},
        removeListener: () => {},
      };
    };

  test("Should render input text from author name", () => {
    render(<Reply {...mockProps} />);

    expect(screen.getByPlaceholderText(/Enter/i)).toBeInTheDocument();
  });
});
