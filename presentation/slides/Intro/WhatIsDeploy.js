import React from "react";
import {Appear, Heading, List, ListItem, Slide, Text, S} from "spectacle";
import images from "../../images";

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
      What's code deploy?
    </Heading>
    <Heading
      size={1}
      textColor="white"
      style={{ marginTop: "0.5em", fontSize: "2em" }}
    >
      🤔
    </Heading>
    <Heading style={{ marginTop: "0.5em", fontSize: "1.5em" }}>
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
  </Slide>
);
