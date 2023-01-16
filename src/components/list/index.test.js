import * as React from "react";
import { getAllByTestId, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import List from ".";

describe("List of teams / users", () => {
  it("should display the person name and id", () => {
    const items = [
      {
        id: 1,
        name: "My",
      },
    ];
    const { getByText } = render(<List items={items} />, {
      wrapper: MemoryRouter,
    });

    // Assert
    const name = getByText("My");
    expect(name).not.toBeNull();
    expect(name.tagName).toEqual("H1");

    const id = getByText("1");
    expect(id).not.toBeNull();
    expect(id.tagName).toEqual("H2");
  });

  it("should display the person name and id with users' object key", () => {
    const items = [
      {
        id: 1,
        displayName: "My",
      },
    ];
    const { getByText } = render(<List items={items} />, {
      wrapper: MemoryRouter,
    });

    // Assert
    const name = getByText("My");
    expect(name).not.toBeNull();
    expect(name.tagName).toEqual("H1");

    const id = getByText("1");
    expect(id).not.toBeNull();
    expect(id.tagName).toEqual("H2");
  });

  it("should contain 3 elements", () => {
    const items = [
      {
        id: 1,
        name: "Oh",
      },
      {
        id: 2,
        name: "My",
      },
      {
        id: 3,
        name: "God",
      },
    ];
    const { getAllByTestId } = render(<List items={items} />, {
      wrapper: MemoryRouter,
    });

    // Assert
    const list = getAllByTestId("list-item");
    expect(list).not.toBeNull();
    expect(list.length).toEqual(3);
  });

  it("should contain correct href string", () => {
    const items = [
      {
        id: 1,
        name: "Oh",
      },
    ];

    const { getByTestId } = render(<List items={items} root="teams" />, {
      wrapper: MemoryRouter,
    });

    // Assert
    const listItem = getByTestId("list-item");
    expect(listItem).not.toBeNull();
    expect(listItem.href).toContain("/teams/1");
  });
});
