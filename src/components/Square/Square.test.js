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
  });

  it("renders X when X is passed in", () => {
    const wrapper = shallow(<Square value={"X"} />);
    expect(wrapper.text()).toBe("X");
  });

  it("is clickable", () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Square onClick={onClick} />);
    wrapper.simulate("click");
    expect(onClick).toBeCalledTimes(1);
  });

  it("changes styles when value is X or O", () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Square value="X" onClick={onClick} />);
    expect(wrapper.find(".squares").props().className).toEqual("squares X");

    const wrapper1 = shallow(<Square value="O" onClick={onClick} />);
    expect(wrapper1.find(".squares").props().className).toEqual("squares O");
  });
});
