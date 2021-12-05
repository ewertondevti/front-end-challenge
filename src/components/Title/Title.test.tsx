import { render, screen } from "@testing-library/react";
import Title from "./Title";

const mockProps = {
  title: "Blog post #10",
  author: "Tandy Thiem",
  publishedDate: "2016-11-29",
};

describe("Title Component", () => {
  test("Should render title, author and date", () => {
    render(<Title {...mockProps} />);

    expect(screen.getByText(/blog/i)).toBeInTheDocument();
    expect(screen.getByText(/thiem/i)).toBeInTheDocument();
    expect(screen.getByText("2016-11-29")).toBeInTheDocument();
  });
});
