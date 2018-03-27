import React from "react";
import {Appear, Heading, List, ListItem, Slide, Text} from "spectacle";

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
      Instead of Conclusion. "Yes" Part
    </Heading>
    <List
      style={{listStyle: "none", textAlign: "left"}}
    >
      <ListItem>
        😊 PhoenixServer: machines are simply thrown away rather than upgraded.
      </ListItem>
      <ListItem>
        😇 split your architecture into layers:
      </ListItem>
      <ListItem style={{listStyle: "none", textAlign: "center"}}>
        Visible 👉🏻 Volatile 🤜🏻 Persistent
      </ListItem>
    </List>
    <Appear>
      <List
        style={{listStyle: "none", textAlign: "left"}}
      >
        <ListItem>
          👌 Ensure that environments can be created and destroyed quickly and on demand.
        </ListItem>
        <ListItem>
          👍 Do not share any infrastructure between environments.
        </ListItem>
        <ListItem>
          💛 Minimize the difference between environments.
        </ListItem>
      </List>
    </Appear>
    <Appear>
      <Text textColor="lightGray">
        😍 And make development great again
      </Text>
    </Appear>
  </Slide>
);
