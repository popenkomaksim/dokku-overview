import React from "react";
import {Appear, Heading, Link, S, Slide, Text} from "spectacle";

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
        Highlighted Factors
      </Link>
    </Heading>

      <Text textColor="lightGray" lineHeight={10}>
        <S type="bold">I. Codebase</S> One codebase tracked in revision control, many deploys
      </Text>

    <Appear>
      <Text textColor="lightGray" lineHeight={1000000}>
        <S type="bold">II. Dependencies</S> Explicitly declare and isolate dependencies
      </Text>
    </Appear>
    <Appear>
      <Text textColor="lightGray" lineHeight={10}>
        <S type="bold">III. Config</S> Store config in the environment
      </Text>
    </Appear>
    <Appear>
      <Text textColor="lightGray" lineHeight={10}>
        <S type="bold">VI. Processes</S> Execute the app as one or more stateless processes
      </Text>
    </Appear>
    <Appear>
      <Text textColor="lightGray" lineHeight={10}>
        <S type="bold">X. Dev/prod parity</S> Keep development, staging, and production as similar as possible
      </Text>
    </Appear>
  </Slide>
);
