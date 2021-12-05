import { render, screen } from "@testing-library/react";
import AboutMe from "./AboutMe";

describe("AboutME Component", () => {
  test("Should render the image", () => {
    render(<AboutMe />);

    const profileImage = screen.getByAltText("me");

    expect(profileImage).toBeInTheDocument();
  });
});
