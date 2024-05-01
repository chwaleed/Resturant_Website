import React from "react";
import Page from "../compnents/Page";
import Booking from "../pages/Book Us/Booking";

function BookingPage() {
  return (
    <>
      <Page text1={"Pages / "} text2={"Booking"} title={"Booking"} />
      <Booking />
    </>
  );
}

export default BookingPage;
