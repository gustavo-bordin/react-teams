import * as React from "react";
import { render, within } from "@testing-library/react";
import Loading from ".";
import { MemoryRouter } from "react-router-dom";
import SearchBar from ".";

describe("Search bar", () => {
  it("should render title and input", () => {
    const { getByPlaceholderText, getByText } = render(
      <SearchBar title="Abc" placeholder="fake-place" />
    );

    const logo = getByPlaceholderText("fake-place");
    expect(logo).not.toBeNull();

    const text = getByText("Abc");
    expect(text).not.toBeNull();
    expect(text.tagName).toEqual("H1");
  });
});
