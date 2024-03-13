import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

describe("Test app", () => {
  test('get', () => {
    render(<App />);
    const helloWorldElem = screen.getByText(/hello world/i);
    const btn = screen.getByRole("button")
    const input = screen.getByPlaceholderText(/input value/i)

    expect(helloWorldElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test('query', () => {
    render(<App />);
    const helloWorldElem2 = screen.queryByText(/hello2/i);

    expect(helloWorldElem2).toBeNull();
  });

  test('find', async () => {
    render(<App />);

    screen.debug()

    const elem = await screen.findByText(/data/i);
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveStyle({color: "red"})

    screen.debug()
  });

  test('click event', async () => {
    render(<App />);

    const btn = screen.getByTestId("toggle-btn");

    expect(screen.queryByTestId("toggle-elem")).toBeNull()
    fireEvent.click(btn)
    expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument()
    fireEvent.click(btn)
    expect(screen.queryByTestId("toggle-elem")).toBeNull()
  });

  test('input event', async () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/input value/i)

    expect(screen.getByTestId("value-elem")).toContainHTML("")
    // искуственное событие

    // fireEvent.input(input, {
    //   target: {
    //     value: "123"
    //   }
    // })

    // близко к поведению пользователя, обрабатываются события нажатия клавиш и т.п.
    userEvent.type(input, "123")

    expect(screen.getByTestId("value-elem")).toContainHTML("123")
  });
})
