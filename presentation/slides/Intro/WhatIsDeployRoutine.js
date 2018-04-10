import React from "react";
import {Appear, Heading, Slide, Text, Image} from "spectacle";

export default (
  <Slide
    textColor="white"
    transition={["fade"]}
    notes={`
            <ul>
              <li>Большая рутина</li>
              <li>+ fetch dependencies (thanks package-lock.json)</li>
              <li>build step (webpack/gulp/grunt related tasks)</li>
              <li>Minification, Compression, and Source Maps Are Not Optional</li>
              <li></li>
            </ul>
`}
  >
    <Heading size={1} textColor="white">
      Even SPA has routine to do
    </Heading>
    <Text textColor="white">
      source code (<Image style={{ display: 'inline-block', margin: '-0.5rem auto', height: "1em" }} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Git-logo-white.svg/240px-Git-logo-white.svg.png'}/>)
    </Text>
    <Text textColor="white">
      + install node/npm/etc
    </Text>
    <Text textColor="white">
      + fetch and cache dependencies
    </Text>
    <Text textColor="white">
      + do build step
    </Text>
    <Text textColor="white">
      + ... do I need to copy/paste dist folder or what?
    </Text>
    <Appear>
      <div>
      <Text textColor="white">
        + transfer artefact to server
      </Text>
      <Text textColor="white">
        + switch old/new, aka "redeploy"
      </Text>
      <Text textColor="white">
        + supervisor server-side renderer
      </Text>
      </div>
    </Appear>
    <Appear>
      <Text textColor="white">
        Just to change CSS... 👿 Deployment is hell.
      </Text>
    </Appear>
    <Appear>
      <Text textColor="white">
        HTTPS? We need Senior DevOps to do it.
      </Text>
    </Appear>
  </Slide>
);
