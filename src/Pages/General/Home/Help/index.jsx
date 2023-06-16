import React from "react";
import { Card } from "./Card";
import { Container, SimpleGrid, Title } from "@mantine/core";

const Help = () => {
  return (
    <Container fluid w={"80%"} p="xl" style={{ overflow: "hidden" }}>
      <Title align="center" mb="xl">
        How We Help You
      </Title>
      <SimpleGrid
        spacing={"xl"}
        breakpoints={[
          { minWidth: "sm", cols: 2 },
          { minWidth: "md", cols: 3 },
          { minWidth: "lg", cols: 4 },
        ]}
      >
        <Card
          icon={"help1"}
          title={"Messages"}
          description={
            "Receive messages from employers while managing and tracking your applications"
          }
        />
        <Card
          icon={"help2"}
          title={"Profile"}
          description={
            "Create your live interactive profile and be viewed by employers"
          }
        />
        <Card
          icon={"help3"}
          title={"Resume Syndication"}
          description={
            "Direct exposure through our Applicant Tracking Software partners with the ability to receive job offers"
          }
        />
        <Card
          icon={"help4"}
          title={"Connect"}
          description={
            "Instantly apply to jobs while connecting with job seekers and employers on faces2hire"
          }
        />
        <Card
          icon={"help5"}
          title={"Employer"}
          description={
            "Receive job alerts from employers and directly message them to schedule an interview"
          }
        />
        <Card
          icon={"help6"}
          title={"Video"}
          description={
            "Record a personal introduction video to express your personality and tone of voice. Speak about your skill sets and stand out in the crowd"
          }
        />
        <Card
          icon={"help7"}
          title={"Stealth Mode"}
          description={
            "Protect your identity while marketing yourself and searching for opportunities"
          }
        />
        <Card
          icon={"help8"}
          title={"Analytics"}
          description={
            "Instantly apply to jobs while connecting with job seekers and employers on faces2hire"
          }
        />
      </SimpleGrid>
    </Container>
  );
};
export default Help;
