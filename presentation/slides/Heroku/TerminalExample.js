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
import Typist from "react-typist";
import Terminal from "spectacle-terminal";
import colors from "../../theme/colors";

export default (
  <Slide
    transition={["fade"]}
    bgColor="blue"
    notes={`
          `}
  >
    <Terminal
      showFirstEntry
      title="1. maksym@popenko: ~(zsh)"
      output={[
        <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 100 }}>
          $ git push heroku master
        </Typist>,
        <div>
          > git pushes code as is into heroku repo
        </div>,
        <div>
          > Create an optimized production build...
        </div>,
        <div>
          > Install and cache dependencies (npm node node_modules etc.)
        </div>,
        <div>
          > Set env variables inside Docker container
        </div>,
        <div>
          > do NGINX hot-port switch between old and new container
        </div>,
        <div>
          > Drain connection from old container
        </div>,
        <div>
          Deployed https://tickets.example.com
        </div>
      ]}
    />
  </Slide>
);
