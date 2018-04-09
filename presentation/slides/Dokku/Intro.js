import React from "react";
import {Heading, List, ListItem, Slide, Text, S} from "spectacle";
import images from "../../images";

export default (
  <Slide
    textColor="white"
    bgImage={images.dokkuGithub.replace("/", "")}
    bgDarken={0.75}
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

      </ListItem>
      <ListItem style={{ textAlign: "left" }}>
        MIT Licensed Docker Deployment Software
      </ListItem>
      <ListItem style={{ textAlign: "left" }}>
        First commit dated to Jun 8, 2013
      </ListItem>
      <ListItem style={{ textAlign: "left" }}>
        Originally written in just 100 lines of Bash
      </ListItem>
      <ListItem style={{ textAlign: "left" }}>
        👨‍👨‍👧‍👦&nbsp;4 sponsors, 30 backers and 100 contributors
      </ListItem>
      <ListItem style={{ textAlign: "left" }}>
        ⭐&nbsp;15 000+ on GitHub
      </ListItem>
      <ListItem style={{ textAlign: "left" }}>
        🚀&nbsp;90 releases, current v0.12
      </ListItem>
    </List>
    <Text textColor="white">
      Cost as low as own server
    </Text>
  </Slide>
);
