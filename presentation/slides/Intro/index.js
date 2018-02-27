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
import MaksymPopenko from "../../components/MaksymPopenko";
import images from '../../images';

export default (
  <Slide
    transition={["fade"]}
    notes={`
            <ul>
              <li>Introduce yourself</li>
              <li>Development process could be tricky</li>
            </ul>
`}
    bgImage={images.deploy.replace("/", "")}
    bgDarken={0.7}
  >
    <Heading size={1} textSize="2em" textColor="white">
      Code, Deployment, and You
    </Heading>
    <Heading
      size={6}
      style={{ marginTop: 50, marginBottom: 30 }}
      textColor="white"
    >
      Some cool meetup, DataArt, Kyiv
    </Heading>
    <div style={{ marginBottom: 20 }}>
      <MaksymPopenko photo={images.me.replace("/", "")} />
    </div>
    <Link
      textColor="white"
      href="http://deployment.popenko.pp.ua/"
      target="__blank"
    >
      http://deployment.popenko.pp.ua/
    </Link>
  </Slide>
);
