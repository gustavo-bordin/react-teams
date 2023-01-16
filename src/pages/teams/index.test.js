import * as React from "react";
import {
  findAllByTestId,
  fireEvent,
  render,
  within,
} from "@testing-library/react";
import Teams from ".";
import { MemoryRouter } from "react-router-dom";

function assertItemsCount(fn, count) {
  const items = fn("list-item");
  expect(items.length).toBe(count);
}

describe("Main page", () => {
  it("should have list of teams", () => {
    const teams = [
      {
        id: 1,
        name: "Ordinary",
      },
    ];
    const { getByTestId } = render(<Teams teams={teams} />, {
      wrapper: MemoryRouter,
    });
    const teamItems = getByTestId("list-item");
    expect(teamItems).not.toBeNull();
    expect(teamItems.href).toContain("/teams/1");
  });

  it("should filter teams when searching", () => {
    const teams = [
      {
        id: 1,
        name: "Ordinary",
      },
      {
        id: 2,
        name: "Uncle bob cries",
      },
    ];
    const { queryAllByTestId, getByPlaceholderText } = render(
      <Teams teams={teams} />,
      {
        wrapper: MemoryRouter,
      }
    );

    assertItemsCount(queryAllByTestId, 2);

    const input = getByPlaceholderText("Filter by team name");
    expect(input).not.toBeNull();

    fireEvent.change(input, { target: { value: "Ordinary" } });

    assertItemsCount(queryAllByTestId, 1);

    fireEvent.change(input, { target: { value: "123" } });

    assertItemsCount(queryAllByTestId, 0);

    // this time test case insensitive
    fireEvent.change(input, { target: { value: "ordinary" } });
    assertItemsCount(queryAllByTestId, 1);
  });
});
