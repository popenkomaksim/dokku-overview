import React from "react";
import MaksymPopenko from "../../components/MaksymPopenko";
import images from '../../images';
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
  S,
  Image,
  BlockQuote,
  Quote,
  Cite,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Typeface,
  Table,
} from "spectacle";

export default (
  <Slide
    transition={["fade"]}
    notes={`
            <ul>
              <li>Introduce yourself</li>
              <li>Development process could be tricky</li>
            </ul>
`}
    bgDarken={0.7}
  >
    <Heading>
      <Link
        textColor="white"
        href="https://12factor.net/"
        target="__blank"
      >
        The Twelve-Factor App
      </Link>
    </Heading>
    <Text textColor="lightGray" lineHeight={10}>
      <S type="bold">I. Codebase</S> One codebase tracked in revision control, many deploys
    </Text>
    <Text textColor="lightGray" lineHeight={1000000}>
      <S type="bold">II. Dependencies</S> Explicitly declare and isolate dependencies
    </Text>
    <Text textColor="lightGray" lineHeight={10}>
      <S type="bold">III. Config</S> Store config in the environment
    </Text>
    <Text textColor="lightGray" lineHeight={10}>
      <S type="bold">VI. Processes</S> Execute the app as one or more stateless processes
    </Text>
    <Text textColor="lightGray" lineHeight={10}>
      <S type="bold">X. Dev/prod parity</S> Keep development, staging, and production as similar as possible
    </Text>
  </Slide>
);
