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
            Hands up who knows about Heroku?
            Who have ever used it in apps?
          `}
  >
    <Terminal
      showFirstEntry
      title="1. maksym@popenko: ~(zsh)"
      output={[
        <div>create-react-app just-few-dependencies</div>,
        <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 100 }}>
          yarn build
        </Typist>,
        <div>
          <div> </div>
          <div>Creating an optimized production build...</div>
          <div style={{ color: colors.green }}>
            Compiled successfully.
          </div>
          <div> </div>
          <div>File sizes after gzip:</div>
          <div>
            47.09 KB (151 KB) build/static/js/<span
            style={{ color: colors.green }}
          >
                    main.8b0e51a6.js
                  </span>
          </div>
          <div>
            289 B build/static/css/<span style={{ color: colors.green }}>
                    main.9a0fe4f1.css
                  </span>
          </div>
        </div>
      ]}
    />
  </Slide>
);
