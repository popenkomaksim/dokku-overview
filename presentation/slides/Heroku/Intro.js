import React from "react";
import {
  CodePane,
  Deck,
  Heading,
  Link,
  ListItem,
  List,
  Slide,
  Layout,
  Text,
  Fill,
  Image,
  BlockQuote,
  Quote,
  Markdown,
  Cite
} from "spectacle";
import images from '../../images';

export default (
  <Slide
    transition={["fade"]}
    bgColor="blue"
    notes={`
            Hands up who knows about Heroku?
            Who have ever used it in apps?
          `}
  >
    <Heading size={1} textColor="white">
      heroku overview
    </Heading>
    <Heading
      size={1}
      textColor="white"
      style={{ marginTop: "0.5em", fontSize: "2em" }}
    >
      🤔
    </Heading>
    <Image src={images.herokuLogo.replace("/", "")}  width="100%"/>
    <Text>
      Buildpacks && Add-ons && Buttons
    </Text>
    <Image src={images.heroku.replace("/", "")} width="100%"/>
  </Slide>
);
