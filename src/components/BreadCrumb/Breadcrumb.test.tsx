import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BreadCrumb from "./Breadcrumb";

const mockItem = ["Posts", "6"];

describe("Breadcrumb Component", () => {
  test("Should render last item from Breadcrumb Component", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BreadCrumb items={mockItem} />} />
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getByText("6")).toBeInTheDocument();
  });
});
