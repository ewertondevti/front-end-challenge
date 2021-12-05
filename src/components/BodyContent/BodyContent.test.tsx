import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BodyContent from "./BodyContent";

describe("BodyContent Component", () => {
  test("Should render Header and BreadCrumbs", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BodyContent />} />
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getByText("Front-end Challange")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
