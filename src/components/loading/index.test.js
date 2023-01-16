import * as React from "react";
import { render } from "@testing-library/react";
import Loading from ".";

describe("Loading animation", () => {
  it("should have loading text", () => {
    const { getByAltText, getByText } = render(<Loading />);

    // Assert
    const text = getByText("Loading...");
    expect(text).not.toBeNull();
    expect(text.tagName).toEqual("P");

    const img = getByAltText("Loading spinner");
    expect(img).not.toBeNull();
    expect(img.src).toEqual(
      "https://www.tempo.io/hubfs/Tempo%20Logo%20512px-1.svg"
    );
  });
});
