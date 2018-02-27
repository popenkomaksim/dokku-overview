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
              <li>https://martinfowler.com/bliki/PhoenixServer.html</li>
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
        🙆🏻 Play with Dokku (DigitalOcean One Click Apps)
      </ListItem>
      <ListItem style={{ textAlign: "left" }}>
        👌 Ensure that environments can be created and destroyed quickly and on demand.
      </ListItem>
      <ListItem style={{ textAlign: "left" }}>
        👍 Do not share any infrastructure between environments.
      </ListItem>
      <ListItem style={{ textAlign: "left" }}>
        💛 Minimize the difference between environments.
      </ListItem>
      <ListItem style={{ textAlign: "left" }}>
        😊 PhoenixServer: machines are simply thrown away rather than upgraded
      </ListItem>
      <ListItem style={{ textAlign: "left" }}>
        😊 split your architecture into layers: Visible  Volatile Persistent
      </ListItem>
      <ListItem style={{ textAlign: "left" }}>
        😍 And make development great again
      </ListItem>
    </List>
  </Slide>
);
