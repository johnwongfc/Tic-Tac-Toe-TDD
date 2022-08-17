import React from "react";
import { shallow, mount } from "enzyme";
import Game from "./Game";
import Board from "../Board/Board";

describe("Game Testing", () => {
  it("renders Game", () => {
    const wrapper = shallow(<Game />);
    expect(wrapper).toHaveLength(1);
  });

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Game />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders Board", () => {
    // const wrapper = mount(<Game />);
    expect(wrapper.containsMatchingElement(<Board />)).toEqual(true);
  });

  it("renders player's turn", () => {
    // const wrapper = mount(<Game />);
    const xO = "X";
    expect(wrapper.find(".player-display").text()).toBe(`Next player: ${xO}`);
  });

  it("renders X and O when clicked", () => {
    // const wrapper = mount(<Game />);
    wrapper.find(".squares").first().simulate("click");
    expect(wrapper.find(".squares").first().text()).toBe("X");
    wrapper.find(".squares").last().simulate("click");
    expect(wrapper.find(".squares").last().text()).toBe("O");
  });

  it("shows X wins", () => {
    const steps = [0, 1, 3, 4, 6];
    const winner = "X";

    steps.forEach((step) => {
      wrapper.find(".squares").at(step).simulate("click");
    });
    expect(wrapper.find(".player-display").text()).toBe(`Winner: ${winner}`);
  });

  it("should tell you if its a draw", () => {
    const step = [0, 1, 2, 6, 7, 8, 3, 4, 5];

    step.forEach((index) => {
      wrapper.find(".squares").at(index).simulate("click");
    });

    expect(wrapper.find(".player-display").text()).toBe("It's a Draw!");
  });
});
