import React from "react";
import { shallow, mount } from "enzyme";
import Board from "./Board";
import Square from "../Square/Square";

describe("Board Testing", () => {
  let component;
  let onClick;
  let squares;

  beforeEach(() => {
    onClick = jest.fn();
    squares = Array(9).fill(null);
    component = mount(<Board squares={squares} onClick={onClick} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders Board", () => {
    // const wrapper = shallow(<Board />);
    expect(component).toHaveLength(1);
  });

  it("squares are class square", () => {
    expect(component.containsAllMatchingElements([<Square />])).toEqual(true);
  });
  it("renders 9 squares", () => {
    expect(component.props().squares).toHaveLength(9);
  })
});
