import React from "react";
import {Appear, Heading, Slide, Text} from "spectacle";

export default (
  <Slide
    textColor="white"
    transition={["fade"]}
    notes={`
            <ul>
              <li></li>
              <li></li>
            </ul>
`}
  >
    <Heading size={1} textColor="white">
      What's deploy?
    </Heading>
    <Heading
      size={1}
      textColor="white"
      style={{ marginTop: "0.5em", fontSize: "2em" }}
    >
      🤔
    </Heading>
    <Heading style={{ marginTop: "0.5em", fontSize: "1.2em", fontFamily: 'monospace' }}>
      App&nbsp;:=&nbsp;deploy(
      <Appear>
          <span>
            Server,&nbsp;
          </span>
      </Appear>
      <Appear>
          <span>
            Code,&nbsp;
          </span>
      </Appear>
      <Appear>
          <span>
            HumanFactor,&nbsp;
          </span>
      </Appear>
      <Appear>
          <span>
            Magic
          </span>
      </Appear>
      );
    </Heading>
    <Appear>
      <Text textColor="white">
        <span style={{ marginTop: "0.5em", fontSize: "2em" }}>🤷</span> HumanFactor has bad impact
      </Text>
    </Appear>
    <Appear>
      <Text textColor="white">
        <span style={{ marginTop: "0.5em", fontSize: "2em" }}>💫</span> We need to take care about magic
      </Text>
    </Appear>
  </Slide>
);
