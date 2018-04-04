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
    bgImage={images.elder.replace("/", "")}
    bgDarken={0.1}
    notes={`
          `}
  >
    <Text textColor="black" style={{ fontWeight: 'bold', marginTop: "0.5em",}}>
      Who says manual deployment is stressful?
    </Text>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Text textColor="black" style={{ fontWeight: 'bold', marginTop: "0.5em",}}>
      I'm 27, and I fell great!
    </Text>
  </Slide>
);
