import React from "react";
import {Appear, Heading, Link, S, Slide, Text} from "spectacle";

export default (
  <Slide
    transition={["fade"]}
    notes={`
            <ul>
              <li>Introduce yourself</li>
              <li>Development process could be tricky</li>
            </ul>
`}
    bgImage='https://community-cdn-digitalocean-com.global.ssl.fastly.net/assets/tutorials/images/large/ImmutableInfrastructure_mostov_v1.3_twitter-_-facebook.png?1510869417'
    bgDarken={0.7}
  >
    <Heading>
      <Link
        textColor="white"
        href="https://12factor.net/"
        target="__blank"
      >
        What Is Immutable Infrastructure?
      </Link>
    </Heading>

      <Text textColor="lightGray" lineHeight={10}>
        Servers in a virtualized environment
      </Text>

    <Appear>
      <Text textColor="lightGray" lineHeight={1000000}>
        Full <S type="italic">automation</S> of your entire deployment pipeline
      </Text>
    </Appear>
    <Appear>
      <Text textColor="lightGray" lineHeight={10}>
        A service-oriented architecture
      </Text>
    </Appear>
    <Appear>
      <Text textColor="lightGray" lineHeight={10}>
        A stateless, volatile application layer
      </Text>
    </Appear>
    <Appear>
      <Text textColor="lightGray" lineHeight={10}>
        A persistent data layer: Centralized logging & External data stores
      </Text>
    </Appear>
  </Slide>
);
