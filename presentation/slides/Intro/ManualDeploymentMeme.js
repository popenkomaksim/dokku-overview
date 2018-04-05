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

const memeTextCSS = {
  fontFamily: `Impact, Haettenschweiler, "Franklin Gothic Bold", Charcoal, "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", "sans serif"`,
  fontWeight: 'bold',
  textTransform: 'uppercase',
  textShadow:
    `-1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000`
}

export default (
  <Slide
    transition={["fade"]}
    bgColor="blue"
    bgImage={images.elder.replace("/", "")}
    bgDarken={0.1}
    notes={`
          `}
  >
    <Text textColor="white" style={memeTextCSS}>
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
    <Text textColor="white" style={memeTextCSS}>
      I'm 27, and I feel great!
    </Text>
  </Slide>
);
