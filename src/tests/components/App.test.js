import React from "react";
import axios from "axios";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../../components/App";

describe("App", () => {
  const forecast = {
    location: {
      city: "Manchester",
      country: "UK",
    },
    forecasts: [
      {
        date: 1525046400000,
        temperature: {
          max: 11,
          min: 4,
        },
        wind: {
          speed: 13,
          direction: "s",
        },
        humidity: 30,
        description: "Clear",
        icon: "800",
      }],
  };

  it("renders correctly", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({ data: forecast });
    const { asFragment } = render(
      <App />,
    );
    await waitFor(() => {
      const h1Element = screen.getByText(/Manchester, UK/i);

      expect(h1Element).toBeInTheDocument();
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
