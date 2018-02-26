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
import images from '../../images';

export default (
  <Slide
    bgColor="white"
    notes={`
          <ul>
            <li>Technology Consultancy & Solution Desing</li>
          </ul>
        `}
  >
    <Link
      alt="DataArt"
      href="http://dataart.com/"
      style={{ display: "block" }}
      target="__blank"
    >
      <Image width="70%" src={images.dataart.replace("/", "")} />
    </Link>
  </Slide>
);


