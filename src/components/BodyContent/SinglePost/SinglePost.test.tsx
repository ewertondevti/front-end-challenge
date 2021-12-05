import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SinglePost from "./SinglePost";

describe("PostCard Component", () => {
  test("Should render only one post", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="posts/5" />} />
          <Route path="posts/:postId" element={<SinglePost />} />
        </Routes>
      </BrowserRouter>
    );

    act(async () => {
      const posts = await screen.findAllByText(/Blog post/i);
      expect(posts.length).toEqual(1);
    });
  });
});
