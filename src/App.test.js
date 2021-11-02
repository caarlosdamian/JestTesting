import { render, screen } from "@testing-library/react";
import App from "./App";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test("renders the title of counter", () => {
    expect(wrapper.find("h1").text()).toContain("This is counter app");
  });
  test("render button with text 'Increment'", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });
  test("render button with text 'Decrement'", () => {
    expect(wrapper.find("#decrement-btn").text()).toBe("Decrement");
  });
  test("render the initial value of state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
  test("render the click event of increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });
  test("render the click event of decrement button and decrement counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
  test("render the click event of decrement button and decrement counter value not -1", () => {
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
});
