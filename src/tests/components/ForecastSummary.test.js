import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 1525046400000,
    description: "Stub description",
    icon: "stubIcon",
    temperature: {
      min: 12,
      max: 22,
    },
    onSelect: jest.fn(),
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature.max}
        onSelect={validProps.onSelect}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        date="Mon Apr 30 2018"
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature.max}
      />,
    );

    expect(getByTestId("forecast-summary")).toHaveClass("forecast-summary");
    expect(getByText("Mon Apr 30 2018")).toHaveClass("forecast-summary_date");
    expect(getByText("Stub description")).toHaveClass("forecast-summary_description");
    expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary_icon");
    expect(getByText("22°C")).toHaveClass("forecast-summary_temperature");
  });
});
