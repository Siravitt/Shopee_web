import axios from "axios";

export const shippingPriceCal = async (totalWeight, origins, destinations) => {
  try {
    const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
    let distance = await axios.get(
      `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origins}&destinations=${destinations}&key=${apiKey}`
    );

    let unit = distance.data.rows[0].elements[0].distance.text.split(" ");
    if (unit[1] === "m") {
      distance = 1;
    } else {
      distance = unit[0];
    }

    let rateKg = 0;
    if (totalWeight <= 1) {
      rateKg = 10;
    } else if (totalWeight <= 5) {
      rateKg = 5;
    } else if (totalWeight <= 10) {
      rateKg = 4;
    } else {
      rateKg = 7;
    }

    let rateKm = 0;
    if (distance <= 5) {
      rateKm = 4;
    } else if (distance <= 30) {
      rateKm = 3;
    } else if (distance <= 100) {
      rateKm = 2;
    } else {
      rateKm = 1.5;
    }
    return totalWeight * rateKg + distance * rateKm;
  } catch (err) {
    console.log(err);
  }
};
