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
      FTP/SFTP on PHP site hosting (HumanFactor 1)
    </Text>
    <Text textColor="white">
      ... then start manage own server (HumanFactor 0.9)
    </Text>
    <Text textColor="white">
      Manual git pull deployment on server (HumanFactor 0.7)
    </Text>
    <Text textColor="white">
      ... then start to use external CI/CD tool (HumanFactor 0.65)
    </Text>
    <Text textColor="white">
      Docker. Heroku. Dokku. (HumanFactor 0.5)
    </Text>
  </Slide>
);
