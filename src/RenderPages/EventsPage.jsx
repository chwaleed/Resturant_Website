import React from "react";
import Events from "../pages/Events/Events";
import Booking from "../pages/Book Us/Booking";
import Page from "../compnents/Page";

function EventsPage() {
  return (
    <>
      <Page text2={"Events"} title={"Events"} />
      <Events />
      <Booking />
    </>
  );
}

export default EventsPage;
