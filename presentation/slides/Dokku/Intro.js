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
      Dokku is Docker powered mini-Heroku.
    </Heading>
    <List
      style={{listStyle: "none", textAlign: "center"}}
    >
      <ListItem style={{ textAlign: "left" }}>
        Open Sourced Project – MIT License
      </ListItem>
      <ListItem style={{ textAlign: "left" }}>
        First commit dated to Jun 8, 2013
      </ListItem>
      <ListItem style={{ textAlign: "left" }}>
        4 sponsors and 30 backers
      </ListItem>
      <ListItem style={{ textAlign: "left" }}>
        ⭐&nbsp;15 000+ on GitHub
      </ListItem>
      <ListItem style={{ textAlign: "left" }}>
        👨‍👨‍👧‍👦&nbsp;100 contributors
      </ListItem>
      <ListItem style={{ textAlign: "left" }}>
        🎊&nbsp;4 000+ commits
      </ListItem>
      <ListItem style={{ textAlign: "left" }}>
        🚀&nbsp;90 releases, current v0.11.4
      </ListItem>
    </List>
    <Text textColor="white">
      Cost as low as own server
    </Text>
  </Slide>
);
