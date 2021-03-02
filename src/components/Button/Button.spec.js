import React from "react";
import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  it("renders the anchor version of the button", () => {
    render(
      <Button asAnchor href="#">
        Button
      </Button>
    );

    expect(screen.getByRole("link")).toBeInTheDocument();
  });
});
