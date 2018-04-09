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
        Really working solution of PaaS
      </ListItem>
      <ListItem>
        Happy Developers: fast, easy and right-here right-now deployments
      </ListItem>
      <ListItem style={{listStyle: "none", textAlign: "center"}}>
        Poor and hungry in-house DevOps team (Joke)
      </ListItem>
    </List>
  </Slide>
);
