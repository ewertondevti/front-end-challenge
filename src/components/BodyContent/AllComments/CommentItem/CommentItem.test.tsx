import { render, screen } from "@testing-library/react";
import { CommentModelType } from "../../../../data/types";
import CommentItem from "./CommentItem";

const mockItem: CommentModelType = {
  actions: [],
  author: "Amelia",
  avatar: "https://joeschmoe.io/api/v1/1",
  children: [],
  content: "Nulla in nulla vel nisi faucibus scelerisque. Donec quis tortor.",
  datetime: "2021-10-25",
  id: 1,
  parentId: null,
  postId: 1,
};

describe("CommentItem Component", () => {
  test("Should check if CommentItem is rendered", () => {
    render(<CommentItem item={mockItem} />);

    expect(screen.getByText(/Amelia/i)).toBeInTheDocument();
  });
});
