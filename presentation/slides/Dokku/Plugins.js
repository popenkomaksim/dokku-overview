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
    notes={`
            Hands up who knows about Heroku?
            Who have ever used it in apps?
          `}
  >
    <Heading size={1} textColor="white">
      Dokku Plugins
    </Heading>
    <Text textColor="white">
      Redis, MongoDB, Postgre, MySQL/MariaDB, Grafana/Graphite/Statsd
    </Text>
    <Text textColor="white">
      Let's Encrypt, Slack Notifications, Tor, Dokku Wordpress
    </Text>
    <Text textColor="white">
      and counting
    </Text>
  </Slide>
);
