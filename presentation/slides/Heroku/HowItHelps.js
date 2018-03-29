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
        Happy Developers
      </ListItem>
      <ListItem style={{listStyle: "none", textAlign: "center"}}>
        Poor and hungry DevOps
      </ListItem>
    </List>
    <Appear>
      <List
        style={{listStyle: "none", textAlign: "left"}}
      >
        <ListItem>
          👌 Fast deploys
        </ListItem>
        <ListItem>
          👍 It's ok to deploy changes on Friday
        </ListItem>
        <ListItem>
          💛 Dramatically reduce time of deploy (open – click - go drink coffee)
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
