import React from "react";
import Header from "../components/Layout/Header";
import EventCard from "../components/Events/EventCard";
import EventCardOptional from "../components/Events/EventCardOptional";
import Footer from "../components/Layout/Footer";

function EventsPage() {
  return (
    <div>
      <Header activeHeading={3} />;
      <EventCard active={true} />
      <EventCardOptional active={true} />
      <Footer />
    </div>
  );
}

export default EventsPage;
