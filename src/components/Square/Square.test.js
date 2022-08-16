import React from "react";
import { shallow } from "enzyme";
import Square from "./Square";

describe("Square Testing", () => {
  it("renders square", () => {
    const wrapper = shallow(<Square />);
    console.log(wrapper.debug())
    expect(wrapper).toHaveLength(1);
  });
});
