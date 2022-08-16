import React from "react";
import { shallow, mount } from "enzyme";
import Game from "./Game";
import Board from "../Board/Board";

describe("Game Testing", () => {
  it("renders Game", () => {
    const wrapper = shallow(<Game />);
    expect(wrapper).toHaveLength(1);
  });

  it("renders Board", () => {
    const wrapper = mount(<Game />);
    expect(wrapper.containsMatchingElement(<Board />)).toEqual(true);
  });
});
