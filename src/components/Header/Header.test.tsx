import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";

describe("Header Component", () => {
  test("Should render logo content", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getByText(/Front-end/i)).toBeInTheDocument();
  });
});
