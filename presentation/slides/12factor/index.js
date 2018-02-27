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
    // bgImage={images.factorHomepage.replace("/", "")}
    // bgDarken={0.1}
    notes={`
            Hands up who knows about Heroku?
            Who have ever used it in apps?
          `}
  >
    <Heading size={1} textColor="white">
      The Twelve-Factor App
    </Heading>
    <Fill>
      <Image src={images.factorHomepage.replace("/", "")} width="100%"/>
    </Fill>
  </Slide>
);
