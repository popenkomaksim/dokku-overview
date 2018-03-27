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
  Fit,
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
            Hands up who knows about Heroku?
            http://www.jancarloviray.com/blog/paas-comparison-2017-dokku-flynn-deis-kubernetes-docker-swarm/
            Who have ever used it in apps?
          `}
  >
    <Heading size={1} textColor="white">
      Projects to discover
    </Heading>
    <Image src={images.heads.replace("/", "")} width="34%"/>
    {/*<Text textColor="white">*/}
      {/*Flynn*/}
    {/*</Text>*/}
    {/*<Text textColor="white">*/}
      {/*Kubernetes*/}
    {/*</Text>*/}
    {/*<Text textColor="white">*/}
      {/*Deis Workflow*/}
    {/*</Text>*/}
    {/*<Text textColor="white">*/}
      {/*Docker Swarm*/}
    {/*</Text>*/}
  </Slide>
);
