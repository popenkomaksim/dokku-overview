import React from "react";
import {Heading, List, ListItem, Slide, Text, S} from "spectacle";

export default (
  <Slide
    textColor="white"
    transition={["fade"]}
    notes={`
            <ul>
              <li>Introduce yourself</li>
              <li>Development process could be tricky</li>
            </ul>
`}
  >
    <Heading size={1}>
      No-man
    </Heading>
    <List
      style={{listStyle: "none", textAlign: "center"}}
    >
      <ListItem style={{ textAlign: "left" }}>
        ⚠ Warning
      </ListItem>
      <ListItem style={{ textAlign: "left" }}>
        🚸 Document all the things
      </ListItem>
      <ListItem style={{ textAlign: "left" }}>
        ⛔ No NO NO NO NOOOOO
      </ListItem>
      <ListItem style={{ textAlign: "left" }}>
        🚫 No local server's changes
      </ListItem>
      <ListItem style={{ textAlign: "left" }}>
        🚳 No Bicycles
      </ListItem>
    </List>
  </Slide>
);
