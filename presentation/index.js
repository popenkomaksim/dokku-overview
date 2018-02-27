import React from "react";
import {Deck, Slide, Magic} from "spectacle";
import colors from "./theme/colors";
import createTheme from "./theme";
import fonts from "./theme/fonts";

import('./images');

// import createTheme from "spectacle/lib/themes/default";
// require("spectacle/lib/themes/default/index.css");

require("normalize.css");
require("./theme/index.css");

const theme = createTheme(
  {
    primary: colors.blue,
    secondary: colors.dark,
    tertiary: colors.lightBlue,
    quartenary: colors.lightGray,
    white: colors.white,
    blue: colors.blue,
    green: colors.green,
    lightGray: colors.lightGray,
    bar: colors.green,
    text: colors.dark,
    dark: colors.dark,
    lightBlue: colors.lightBlue,
    red: colors.red,
    violet: colors.violet,
    yellow: colors.yellow
  },
  {
    primary: fonts.Lato,
    secondary: fonts.Lato,
    tertiary: fonts.Monospace
  }
);


const slidesImports = [
  import("./slides/Intro/"),
  import("./components/DataArtSlide"),

  import("./slides/Intro/TheStoryOfDeploy"),
  import("./slides/Intro/MemeHead"),

  import("./slides/Quotes/ManagingServers"),
  import("./slides/12factor"),
  import("./slides/12factor/KeyList"),

  import("./slides/Heroku"),
  import("./slides/Heroku/Intro"),
  import("./slides/Heroku/Buildpacks"),
  import("./slides/Heroku/Addons"),
  import("./slides/Heroku/AddPostgre"),
  import("./slides/Quotes/AsEasyAs"),

  import("./slides/Dokku"),
  import("./slides/Dokku/Intro"),
  import("./slides/Dokku/GithubPrntSrc"),

  import("./components/ThankYouSlide")
];

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: Array(slidesImports.length).fill(<Slide key="loading"/>)
    };
  }

  componentDidMount() {
    const importedSlides = [];
    Promise.all(slidesImports).then((slidesImportsResolved) => {
      slidesImportsResolved.forEach((slide) => {
        importedSlides.push(slide.default);
      });
      this.setState({slides: importedSlides});
    });
  }

  render() {
    const {slides} = this.state;
    return (
      <Deck
        progress="bar"
        theme={theme}
        transition={["fade"]}
        transitionDuration={244}
      >
        {
          slides.map((slide, index) => {
            return React.cloneElement(slide, {key: index});
          })
        }
      </Deck>
    );
  }
}
