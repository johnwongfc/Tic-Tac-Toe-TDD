import React, { Component } from "react";
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

  it("renders player's turn", () => {
    const wrapper = mount(<Game />);
    const xO = "X";
    expect(wrapper.find(".player-display").text()).toBe(`Next player: ${xO}`);
  });

  it("renders X when clicked", () => {
    const wrapper = mount(<Game />);
    wrapper.find(".Square").first().simulate("click");
    expect(wrapper.find(".Square").first().text()).toBe("X");
  });
});
