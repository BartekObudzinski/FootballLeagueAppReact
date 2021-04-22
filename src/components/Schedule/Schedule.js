import React, { useState } from "react";
import { Container, Tab, Tabs, Button } from "react-bootstrap";
import SingleScheduleMatch from "./SingleScheduleMatch";

const Schedule = ({ match, week }) => {
  const [key, setKey] = useState("week1");
  const weekData = Array.from(week);
  const matchData = Array.from(match);
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
              {matchData.map(
                (singleMatch) =>
                  singleMatch.date === singleWeek.dateWeek && (
                    <SingleScheduleMatch
                      key={singleMatch.idMatch}
                      host={singleMatch.host}
                      guest={singleMatch.guest}
                      time={singleMatch.time}
                      date={singleMatch.date}
                      dateWeek={singleWeek.dateWeek}
                    />
                  )
              )}
              <Button
                onClick={() => {
                  console.log(`liczba meczy ${match.length} `);
                }}
              >
                saads
              </Button>
            </Tab>
          ))}
        {/* <Tab eventKey="week1" title="Week 1">
          <Button onClick={() => console.log(...match, match)}>adfsfda</Button>
        </Tab>
        <Tab eventKey="week2" title="Week 2">
          <SingleScheduleMatch />
        </Tab>
        <Tab eventKey="week3" title="Week 3">
          <SingleScheduleMatch />
        </Tab>
        <Tab eventKey="week4" title="Week 4">
          <SingleScheduleMatch />
        </Tab>
        <Tab eventKey="week5" title="Week 5">
          <SingleScheduleMatch />
        </Tab>
        <Tab eventKey="week6" title="Week 6">
          <SingleScheduleMatch />
        </Tab>
        <Tab eventKey="week7" title="Week 7">
          <SingleScheduleMatch />
        </Tab>
        <Tab eventKey="week8" title="Week 8">
          <SingleScheduleMatch />
        </Tab> */}
      </Tabs>
    </Container>
  );
};

export default Schedule;
