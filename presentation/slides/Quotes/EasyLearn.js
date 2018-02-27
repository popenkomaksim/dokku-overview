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
        All the best games are easy to learn and difficult to master.
      </Quote>
      <Cite>
        Nolan Bushnell
      </Cite>
    </BlockQuote>
  </Slide>
);
