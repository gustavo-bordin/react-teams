import * as React from "react";
import { render, within } from "@testing-library/react";
import Loading from ".";
import { MemoryRouter } from "react-router-dom";

describe("Navbar", () => {
  it("should have logo", () => {
    const { getByTestId } = render(<Loading />, { wrapper: MemoryRouter });

    // Assert
    const logo = getByTestId("link-logo");
    expect(logo).not.toBeNull();
    expect(logo.tagName).toEqual("A");

    expect(logo.href).toContain("/");
    const img = within(logo).getByAltText("Tempo Logo Full 512px");
    expect(img).not.toBeNull();
    expect(img.src).toContain(
      "https://www.tempo.io/hubfs/Imported%20images/Tempo%20Logo%20Full%20512px-1.svg"
    );
  });
});
