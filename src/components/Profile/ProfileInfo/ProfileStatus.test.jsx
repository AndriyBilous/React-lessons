import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("Status from props should be in state", () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("SUBSCRIBE TO BASIC")
  });

  test("After creation <span> with status should be displayed with correct status", () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull()
  });

  test("After creation <input> shouldn`t be displayed", () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
    const root = component.root;

    expect(() => {
      let input = root.findByType("input");
    }).toThrow();
  });

  test("After creation <span> with status should contain correct status", () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("SUBSCRIBE TO BASIC")
  });

  test("<input> should be displayed in editMode instead of <span>", () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe("SUBSCRIBE TO BASIC")
  });

  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" updateStatus={mockCallback}/>);
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1)
  })
})