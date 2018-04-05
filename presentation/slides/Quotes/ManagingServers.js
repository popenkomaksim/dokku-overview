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
  Cite
} from "spectacle";

export default (
  <Slide
    transition={["fade"]}
    bgColor="white"
    textColor="blue"
    notes={`
            <ul>
              <li>1</li>
              <li>2</li>
            </ul>
          `}
  >
    <BlockQuote>
      <Quote>
        Nobody said that managing own applications and servers is easy.
      </Quote>
      <Cite>
        Gregory Skovoroda
      </Cite>
    </BlockQuote>
  </Slide>
);
