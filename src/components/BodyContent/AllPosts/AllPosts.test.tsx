import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AllPosts from "./AllPosts";

describe("PostCard Component", () => {
  test("Should render the avatar image", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="posts" />} />
          <Route path="posts" element={<AllPosts />} />
        </Routes>
      </BrowserRouter>
    );

    act(async () => {
      const elements = await screen.findAllByAltText(/avatar/i);

      expect(elements.length).toBeGreaterThan(0);
    });
  });
});
