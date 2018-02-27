import React from "react";
import {
  CodePane,
  Deck,
  Heading,
  Link,
  ListItem,
  List,
  Fit,
  Slide,
  S,
  Layout,
  Text,
  Fill,
  Image,
  BlockQuote,
  Quote,
  Markdown,
  Cite,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table
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
    <Heading size={1} textColor="white">
      Heroku Intro
    </Heading>
    <Text textColor="white">
      Cloud platform as a service (PaaS) that is used as a web application deployment model.
    </Text>
    <br/>
    <Table>
      <TableBody>
        <TableRow>
          <TableItem>
            <Text textColor="white">
              😀<br/>Buildpacks<br/>No need to manage Servers, Dockerfile, Images, free space ...
            </Text>
          </TableItem>
          <TableItem>
            <Text textColor="white">
              😁<br/>Add-ons<br/>Add MongoDB by to your app just clicking several buttons
            </Text>
          </TableItem>
          <TableItem>
            <Text textColor="white">
              😂<br/>Buttons<br/>One click apps installation. TestFlight boarding page? Plug&Play!
            </Text>
          </TableItem>
        </TableRow>
      </TableBody>
    </Table>
    <br/>
    <Text textColor="white">
      😐 Costs as much as <S type='strikethrough'>Heroin</S> x4 Amazon EC2
    </Text>
  </Slide>
);
