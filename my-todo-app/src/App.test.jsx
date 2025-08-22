import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("сторінка має заголовок TODO", () => {
  render(<App />);
  expect(screen.getByText(/my todo list/i)).toBeInTheDocument();
});

test("у поле можна ввести текст", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/enter the task/i);
  fireEvent.change(input, { target: { value: "hello123" } });
  expect(input.value).toBe("hello123");
});

test("помилка, якщо текст коротший ніж 5 символів", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/enter the task/i);
  fireEvent.change(input, { target: { value: "hi" } });
  fireEvent.blur(input);
  expect(screen.getByText(/minimum 5 characters/i)).toBeInTheDocument();
});
test("після додавання з'являється новий елемент у списку", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/enter the task/i);
  const button = screen.getByText(/add/i);

  fireEvent.change(input, { target: { value: "Learn testing" } });
  fireEvent.click(button);

  expect(screen.getByText("Learn testing")).toBeInTheDocument();
});
