import { render, screen } from "@testing-library/react";
import ActionButtons from "./ActionButtons";

describe("ActionButtons Component", () => {
  test("Should render buttons ReplyAction and EditAction", () => {
    render(<ActionButtons id={1} postId={1} />);

    const replyButton = screen.getByRole("button", { name: "Reply" });
    const editButton = screen.getByRole("button", { name: "Edit" });

    expect(replyButton).toBeInTheDocument();
    expect(editButton).toBeInTheDocument();
  });

  test("Should render only two buttons", () => {
    render(<ActionButtons id={1} postId={1} />);

    const buttons = screen.getAllByRole("button");

    expect(buttons.length).toEqual(2);
  });
});
