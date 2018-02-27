import React from "react";
import {Appear, Heading, Link, S, Slide, Text,} from "spectacle";

export default (
  <Slide
    transition={["fade"]}
    notes={`
            <ul>
              <li>Introduce yourself</li>
              <li>Development process could be tricky</li>
            </ul>
`}
    bgDarken={0.7}
  >
    <Heading>
      <Link
        textColor="white"
        href="https://12factor.net/"
        target="__blank"
      >
        The Twelve-Factor App
      </Link>
    </Heading>
    <Appear><Text textColor="lightGray" style={{lineHeight: 0.1}}>
      <S type="bold">I. Codebase</S> //One codebase tracked in revision control, many deploys
    </Text></Appear>
    <Appear><Text textColor="lightGray" lineHeight={1000000}>
      <S type="bold">II. Dependencies</S> /*Explicitly declare and isolate dependencies*/
    </Text></Appear>
    <Appear><Text textColor="lightGray" style={{lineHeight: 0.1}}>
      <S type="bold">III. Config</S> /*Store config in the environment*/
    </Text></Appear>
    <Appear><Text textColor="lightGray" style={{lineHeight: 0.8}}>
      <S type="bold">IV. Backing services</S> /*Treat backing services as attached resources*/
    </Text></Appear>
    <Appear><Text textColor="lightGray" style={{lineHeight: 0.8}}>
      <S type="bold">V. Build, release, run</S> /*Strictly separate build and run stages*/
    </Text></Appear>
    <Appear><Text textColor="lightGray" style={{lineHeight: 0.8}}>
      <S type="bold">VI. Processes</S> /*Execute the app as one or more stateless processes*/
    </Text></Appear>
    <Appear><Text textColor="lightGray" style={{lineHeight: 0.8}}>
      <S type="bold">VII. Port binding</S> /*Export services via port binding*/
    </Text></Appear>
    <Appear><Text textColor="lightGray" style={{lineHeight: 0.8}}>
      <S type="bold">VIII. Concurrency</S> /*Scale out via the process model*/
    </Text></Appear>
    <Appear><Text textColor="lightGray" style={{lineHeight: 0.8}}>
      <S type="bold">IX. Disposability</S> /*Maximize robustness with fast startup and graceful shutdown*/
    </Text></Appear>
    <Appear><Text textColor="lightGray" style={{lineHeight: 0.8}}>
      <S type="bold">X. Dev/prod parity</S> /*Keep development, staging, and production as similar as possible*/
    </Text></Appear>
    <Appear><Text textColor="lightGray" style={{lineHeight: 0.8}}>
      <S type="bold">XI. Logs</S> /*Treat logs as event streams*/
    </Text></Appear>
    <Appear><Text textColor="lightGray" style={{lineHeight: 0.8}}>
      <S type="bold">XII. Admin processes</S> /*Run admin/management tasks as one-off processes*/
    </Text></Appear>
  </Slide>
);
