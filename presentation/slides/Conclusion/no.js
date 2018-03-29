import React from "react";
import {Heading, List, ListItem, Slide, Text, S} from "spectacle";

export default (
  <Slide
    textColor="white"
    transition={["fade"]}
    notes={`
            <ul>
              <li>⚠ Erosion-resistance</li>
              <li>Explicit Contracts</li>
              <li>🚫</li>
            </ul>
`}
  >
    <Heading size={1}>
      Instead of Conclusion. "No" Part
    </Heading>
    <List
      style={{listStyle: "none", textAlign: "left"}}
    >
      <ListItem>
        ⛔ Over Engineered Environment
      </ListItem>
      <ListItem>
        🚸 Leave "clever hacks" undocumented
      </ListItem>
      <ListItem>
        🚳 Re-implement best practices
      </ListItem>
    </List>
  </Slide>
);
