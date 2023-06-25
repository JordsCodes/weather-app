import axios from "axios";

const getForecast = async (
  setSelectedDate,
  setForecasts,
  setLocation,
  searchText,
  setErrorMessage,
) => {
  let response;
  try {
    if (!searchText) {
      response = await axios.get(
        `https://cmd-shift-weather-app.onrender.com/forecast?city=London`,
      );
    } else {
      setErrorMessage("");
      response = await axios.get(
        `https://cmd-shift-weather-app.onrender.com/forecast?city=${searchText}`,
      );
    }
    setSelectedDate(response.data.forecasts[0].date);
    setForecasts(response.data.forecasts);
    setLocation(response.data.location);
  } catch (error) {
    if (error.response.status === 404) {
      setErrorMessage(
        `Sorry, " ${searchText} "  is not a valid town or city in the UK. Try again.`,
      );
    } else {
      setErrorMessage("Server error, try again later!");
    }
  }
};

export default getForecast;
