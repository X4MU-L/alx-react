import {
  screen,
  cleanup,
  render,
  fireEvent,
  getByLabelText,
  getByRole,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import userEvents from "@testing-library/user-event";
import Notification from "../Notifications";
jest.mock("axios");

const mainConsoleError = console.error;

beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return;
    }
    mainConsoleError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = mainConsoleError;
});
describe("tests from Navigation", () => {
  it("Checks for Navigation render", () => {
    render(<Notification />);

    expect(screen.getByTestId("notification")).toBeInTheDocument();
  });
  it("fetches data from api", async () => {
    const data = [
      { id: "jkdjjk0", name: "Micheal Okpara" },
      { id: "jkdjj0", name: "Micheal Okene" },
    ];
    const onChange = jest.fn();
    axios.get.mockImplementationOnce(() => {
      return Promise.resolve({ data: { data } });
    });

    render(<Notification value="this value" onChange={onChange} />);

    // expect(screen.getByDisplayValue(""))
    await fireEvent.change(screen.getByLabelText(/search/i), {
      target: { value: "javascript" },
    });
    await userEvents.click(screen.getByRole("button"));
    const items = await screen.findAllByRole("listitem");

    expect(items.length).toBe(2);
  });
});
