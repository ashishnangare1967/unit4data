import {
  fireEvent,
  getAllByTestId,
  getByTestId,
  render,
  screen,
} from "@testing-library/react";
import App from "../App";
import { Counter } from "../components/Counter";
import { Button } from "../components/Button";

// button test cases
describe("Testing Button Component", () => {
  it("button should render", () => {
    // we catch the element
    // document.getElementById(); general syntax we use in WEB101||HTML
    // we need to render/call our component to catch.
    render(<App />);
    // once we call/render the component, it will be present in an object called screen.
    // we catch the element using screen.getBy method.
    const button = screen.getAllByTestId("custom-button");
    // we check for the test case using the caught element.
    expect(button[0]).toBeInTheDocument();
    // screen.debug() is a method which will show us or render the component for us.
    // screen.debug();
  });
  it("checking if the parameters (children) is getting passed properly or not", () => {
    render(<App />);
    const button = screen.getAllByTestId("custom-button");
    expect(button[0]).toHaveTextContent("Bye");
    // screen.debug();
  });
  it("check if multiple buttons are getting created and getting proper children", () => {
    render(<App />);
    // catch all the components with test-id
    const buttons = screen.getAllByTestId("custom-button");
    // it returns an array of all the elements.
    expect(buttons[0]).toHaveTextContent("Bye");
    expect(buttons[1]).toHaveTextContent("Hello");
    expect(buttons[2]).toHaveTextContent("RCT211");
    screen.debug();
  });
});

// Test case scenarios
// 1. We check if the button is getting rendered.
// 2. We check if the parameters are getting passed properly. (text content)
// 3. we check for functionality (whether function is getting called)
// 4. we check if correct function is getting called.

// Syntax of test cases.
// 1. we wrap all the test cases in one container called describe('name of the testcases', ()=>{we write our test cases here})
// 2. we catch the element with getBy methods.
// we write a syntax of it('test case name',()=>{expect(component or element to test).method = value;})
// 3. we check if they  are rendered or meeting certain requirements.
// expect(component or element to test).method = value;

// counter test cases
// 1.we check if the component renders properly. passed
// 2.We check the default count value if its 0
// 3.We check for the button if its rendered
// 4.Check if "Add" is the text content.
// 5.We check if a function is called after clicking event happens.
// 6.We check if the text is getting changed or not.

describe("Testing Counter Component", () => {
  it("counter should render", () => {
    render(<App />);
    const counter = screen.getByTestId("counter");
    expect(counter).toBeInTheDocument();
  });
  it("should have a default value of 0 in the count or H2", () => {
    render(<App />);
    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent("Count: 0");
  });
  it("button should render", () => {
    render(<App />);
    const buttons = screen.getAllByTestId("custom-button");
    buttons.forEach((el) => {
      expect(el).toBeInTheDocument();
    });
  });
  it("add button should have a default text of 'Add'", () => {
    render(<App />);
    const buttons = screen.getAllByTestId("custom-button");
    expect(buttons[3]).toHaveTextContent("Add");
  });
  it("add button should have a default text of 'Add' using component", () => {
    render(<Counter />);
    const button = screen.getByTestId("custom-button");
    expect(button).toHaveTextContent("Add");
  });
  it("add button should call a function when it is clicked.", () => {
    // The below line creates a dummy function which we can use to test events.
    const mockFunc = jest.fn();
    render(<Button func={mockFunc} />);
    const button = screen.getByTestId("custom-button");
    // we use fireEvent.eventType(elementName) to cause events
    fireEvent.click(button);
    // we use the below line to check if a funct is called.
    expect(mockFunc).toBeCalled();
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(mockFunc).toBeCalledTimes(4);
  });
  it("should call handleAdd and update the value of count", () => {
    render(<Counter />);
    const button = screen.getByTestId("custom-button");
    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent("Count: 0");
    fireEvent.click(button);
    expect(count).toHaveTextContent("Count: 1");
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(count).toHaveTextContent("Count: 5");
  });
});
