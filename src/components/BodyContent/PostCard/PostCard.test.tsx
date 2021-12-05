import { render, screen } from "@testing-library/react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PostCard from "./PostCard";

const mockItem = {
  id: 3,
  title: "Blog post #3",
  author: "Annemarie Axelrod",
  publish_date: "2016-03-28",
  slug: "blog-post-3",
  description: "Sea ne harum reformidans conclusionemque.",
  content:
    "<p>Sea ne harum reformidans conclusionemque. Eu eirmod adversarium definitiones pri, id brute option convenire sed.</p> <p>Id per porro tritani, mei ut assum persius prompta. Nominavi eligendi cu mea. Utinam consul theophrastus te sit, denique platonem assentior te pri. Nam id enim case iracundia.</p>",
};

describe("PostCard Component", () => {
  test("Should render the post's title", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="posts/3" />} />
          <Route path="posts/:postId" element={<PostCard post={mockItem} />} />
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getByText(/blog post/i)).toBeInTheDocument();
  });
});
