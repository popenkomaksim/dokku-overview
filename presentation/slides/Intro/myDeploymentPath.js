import React from "react";
import {Heading, List, ListItem, Slide, Text, S} from "spectacle";
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
    <Heading size={4}>
      My Deployment Tool Evolution Path
    </Heading>
    <Text textColor="white">
      FTP/SFTP on PHP site hosting
    </Text>
    <Text textColor="white">
      ... then start manage own server
    </Text>
    <Text textColor="white">
      manual git pull deployment on server
    </Text>
    <Text textColor="white">
      ... using external CI/CD tool
    </Text>
    <Text textColor="white">
      Docker.
    </Text>
    <Text textColor="white">
      Heroku, Dokku
    </Text>
  </Slide>
);
