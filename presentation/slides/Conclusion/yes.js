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
      Yes-man
    </Heading>
    <List
      style={{listStyle: "none", textAlign: "center"}}
    >
      <ListItem style={{ textAlign: "left" }}>
        👍 Learn
      </ListItem>
      <ListItem style={{ textAlign: "left" }}>
        👌 Try
      </ListItem>
      <ListItem style={{ textAlign: "left" }}>
        🙆🏻 New projects try to use Dokku
      </ListItem>
      <ListItem style={{ textAlign: "left" }}>
        💛
      </ListItem>
      <ListItem style={{ textAlign: "left" }}>
        😊 Hit and Run
      </ListItem>
      <ListItem style={{ textAlign: "left" }}>
        😍 And make development great again
      </ListItem>
    </List>
  </Slide>
);
