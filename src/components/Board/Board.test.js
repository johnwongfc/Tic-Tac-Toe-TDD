import React from "react";
import { shallow } from "enzyme";
import Board from "./Board";

describe("Board Testing", () => {
  it("renders Board", () => {
    const wrapper = shallow(<Board />);
    expect(wrapper).toHaveLength(1);
  });
});