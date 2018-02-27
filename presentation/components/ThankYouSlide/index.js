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
  transition={["fade"]}
  bgImage={images.LeonardoDicaprioCheersMeme.replace("/", "")}
  bgDarken={0.55}
>
  <Heading size={1} textColor="white" style={{ fontSize: "2.5em" }}>
    Thank you!
  </Heading>
  <List
  style={{ listStyle: "none", textAlign: "center" }}
  textColor="white"
  >
  <ListItem>
  <Link
  href="http://github.com/popenkomaksim"
  target="__blank"
  textColor="white"
  >
  Maksym Popenko
  </Link>
  </ListItem>
  <ListItem>
  <Link
    href="https://twitter.com/popenkomaksim"
    target="__blank"
    textColor="white"
  >
    @popenkomaksim
  </Link>
  </ListItem>
  <ListItem style={{ marginTop: 40 }}>
    <Link
      href="http://dataart.com"
      target="__blank"
      textColor="white"
    >
      <Image
        width="40%"
        src={images.dataart.replace("/", "")}
        style={{ backgroundColor: "white" }}
      />
    </Link>
  </ListItem>
  </List>
</Slide>
);
