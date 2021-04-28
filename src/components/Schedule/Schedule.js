import React, { useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import SingleScheduleMatch from "./SingleScheduleMatch";

const Schedule = ({ match, week }) => {
  const [key, setKey] = useState("week1");
  const weekData = Array.from(week);

  return (
    <Container>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        {week &&
          weekData.map((singleWeek) => (
            <Tab
              key={singleWeek.nameWeek}
              eventKey={singleWeek.nameWeek}
              title={singleWeek.nameWeek}
            >
              {match.map(
                (singleMatch) =>
                  singleMatch.date === singleWeek.dateWeek && (
                    <SingleScheduleMatch
                      key={singleMatch.idMatch}
                      host={singleMatch.host}
                      guest={singleMatch.guest}
                      time={singleMatch.time}
                      date={singleMatch.date}
                      dateWeek={singleWeek.dateWeek}
                      singleMatch={singleMatch}
                    />
                  )
              )}
            </Tab>
          ))}
      </Tabs>
    </Container>
  );
};

export default Schedule;
