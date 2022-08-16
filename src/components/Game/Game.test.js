import React from "react";
import { shallow } from "enzyme";
import Game from "./Game";

describe("Game Testing", () => {
  it("renders Game", () => {
    const wrapper = shallow(<Game />);
    expect(wrapper).toHaveLength(1);
  });
});
