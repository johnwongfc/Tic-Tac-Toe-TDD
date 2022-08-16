import React from "react";
import { shallow } from "enzyme";
import Square from "./Square";

describe("Square Testing", () => {
  it("renders square", () => {
    const wrapper = shallow(<Square />);
    expect(wrapper).toHaveLength(1);
  });

  it("renders button", () => {
    const wrapper = shallow(<Square />);
    expect(wrapper.find("button")).toHaveLength(1);
  })

  it("renders X when X is passed in", () => {
    const wrapper = shallow(<Square value={"X"}/>);
    expect(wrapper.text()).toBe("X");
  })

  it("is clickable", () => {
    const onClick = jest.fn()
    const wrapper = shallow(<Square onClick={onClick}/>);
    wrapper.simulate("click")
    expect(onClick).toBeCalledTimes(1);

  })
});
