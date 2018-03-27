import React from "react";
import {Image, Slide} from "spectacle";
import images from '../../images';

export default (
  <Slide transition={[]}>
    <Image src={images.ci.replace("/", "")}/>
  </Slide>
);
