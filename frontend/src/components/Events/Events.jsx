import React from "react";
import styles from "../../styles/styles";
import EventCard from "./EventCard";

function Events() {
  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Event</h1>
        </div>

        <div className="w-full grid">
          <EventCard />
          {/* {allEvents.length !== 0 && (
              <EventCard data={allEvents && allEvents[0]} />
            )}
            <h4>{allEvents?.length === 0 && "No Events have!"}</h4> */}
        </div>
      </div>
    </div>
  );
}

export default Events;
