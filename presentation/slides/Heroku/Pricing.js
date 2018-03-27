import React from "react";
import {Heading, Image, Slide} from "spectacle";
import images from '../../images';

export default (
  <Slide transition={[]}>
    <Heading textColor="white" size={1}>
      Pricing
    </Heading>
    <Image src={images.herokuPricing.replace("/", "")} width="100%"/>
  </Slide>
);
