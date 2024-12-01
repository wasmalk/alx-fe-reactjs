import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("allows deleting a todo", () => {
    render(<TodoList />);

    // Find a demo todo (e.g., "Learn React")
    const todoElement = screen.getByText(/learn react/i);

    // Ensure the todo is initially in the document
    expect(todoElement).toBeInTheDocument();

    // Find the delete button for the todo (assuming it's a button with text "Delete")
    const deleteButton = screen.getAllByText(/delete/i)[0]; // If multiple delete buttons, we can use [0] for the first one

    // Simulate clicking the delete button
    fireEvent.click(deleteButton);

    // After clicking delete, ensure the todo is no longer in the document
    expect(todoElement).not.toBeInTheDocument();
  });
});
