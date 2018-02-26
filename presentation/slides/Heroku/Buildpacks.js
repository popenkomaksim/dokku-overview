import React from "react";
import {Heading, Image, Slide} from "spectacle";
import images from '../../images';

export default (
  <Slide transition={[]}>
    <Heading textColor="white" size={1}>
      Officially supported buildpacks
    </Heading>
    <Image src={images.herokuBuildpacks.replace("/", "")} width="80%"/>
  </Slide>
);
