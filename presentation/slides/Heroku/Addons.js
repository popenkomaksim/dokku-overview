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
          `}
  >
    <Heading size={1} textColor="white">
      Add-ons
    </Heading>
    <Image src={images.herokuAddons.replace("/", "")} width="100%"/>
  </Slide>
);
