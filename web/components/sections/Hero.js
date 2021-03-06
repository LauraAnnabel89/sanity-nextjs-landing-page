import React from "react";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./Hero.module.css";
import client from "../../client";
import SimpleBlockContent from "../SimpleBlockContent";
import Cta from "../Cta";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function Hero(props) {
  const { heading, backgroundImage, tagline, ctas } = props;

  console.log(backgroundImage);

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h1 className={styles.title}>{heading}</h1>
        {backgroundImage.map((background) => (
          <img src={`${urlFor(backgroundImage).width(2000).auto("format").url()}`} />
        ))}
        <div className={styles.tagline}>{tagline && <SimpleBlockContent blocks={tagline} />}</div>
        {ctas && (
          <div className={styles.ctas}>
            {ctas.map((cta) => (
              <Cta {...cta} key={cta._key} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

Hero.propTypes = {
  heading: PropTypes.string,
  backgroundImage: PropTypes.object,
  tagline: PropTypes.array,
  ctas: PropTypes.arrayOf(PropTypes.object),
};

export default Hero;
