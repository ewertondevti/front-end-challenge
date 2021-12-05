import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuBar from "./MenuBar";

describe("MenuBar Component", () => {
  test("Should render Post and About Me options", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MenuBar />} />
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getByText(/Posts/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
  });
});
