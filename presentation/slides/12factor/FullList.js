import React from "react";
import {Appear, Heading, Link, Slide, Text,} from "spectacle";

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
    <Appear>
      <Text textColor="lightGray" style={{lineHeight: 0.1}}>
        I. Codebase
      </Text>
    </Appear>
    <Appear>
      <Text textColor="lightGray" lineHeight={1000000}>
        II. Dependencies
      </Text>
    </Appear>
    <Appear>
      <Text textColor="lightGray" style={{lineHeight: 0.1}}>
        III. Config
      </Text>
    </Appear>
    <Appear>
      <Text textColor="lightGray" style={{lineHeight: 0.8}}>
        IV. Backing services
      </Text>
    </Appear>
    <Appear>
      <Text textColor="lightGray" style={{lineHeight: 0.8}}>
        V. Build, release, run
      </Text>
    </Appear>
    <Appear>
      <Text textColor="lightGray" style={{lineHeight: 0.8}}>
        VI. Processes
      </Text>
    </Appear>
    <Appear>
      <Text textColor="lightGray" style={{lineHeight: 0.8}}>
        VII. Port binding
      </Text>
    </Appear>
    <Appear>
      <Text textColor="lightGray" style={{lineHeight: 0.8}}>
        VIII. Concurrency
      </Text>
    </Appear>
    <Appear>
      <Text textColor="lightGray" style={{lineHeight: 0.8}}>
        IX. Disposability
      </Text>
    </Appear>
    <Appear>
      <Text textColor="lightGray" style={{lineHeight: 0.8}}>
        X. Dev/prod parity
      </Text>
    </Appear>
    <Appear>
      <Text textColor="lightGray" style={{lineHeight: 0.8}}>
        XI. Logs
      </Text>
    </Appear>
    <Appear>
      <Text textColor="lightGray" style={{lineHeight: 0.8}}>
        XII. Admin processes
      </Text>
    </Appear>
  </Slide>
);
