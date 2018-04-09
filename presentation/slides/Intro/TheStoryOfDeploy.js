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
  Appear,
  S,
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
    <Heading>
      <Link
        textColor="white"
        href="https://12factor.net/"
        target="__blank"
      >
        Legacy deployment
      </Link>
    </Heading>
    <Text textColor="lightGray" lineHeight={10}>
      Badly designed infrastructure
    </Text>
    <Appear>
      <Text textColor="lightGray" lineHeight={1000000}>
        + Unclear dependencies
      </Text>
    </Appear>
    <Appear>
      <Text textColor="lightGray" lineHeight={10}>
        + "git checkout" local config on server
      </Text>
    </Appear>
    <Appear>
      <Text textColor="lightGray" lineHeight={10}>
        + Production differs from staging
      </Text>
    </Appear>
    <Appear>
      <div>
      <Text textColor="lightGray" lineHeight={10}>
        + Friday Deploy =
      </Text>,
      <Image src={images.partyhard.replace("/", "")}/>
      </div>
    </Appear>
  </Slide>
);
