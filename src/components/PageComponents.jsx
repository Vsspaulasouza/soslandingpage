import React from "react";
import Styles from "./PageComponents.module.scss";

export function Title({ styledClass, children }) {
  return <h2 className={`${Styles.title} ${styledClass}`}>{children}</h2>;
}

export function FeatureTitle({ styledClass, children }) {
  return (
    <h3 className={`${Styles.featureTitle} ${styledClass}`}>{children}</h3>
  );
}

export function Subtitle({ styledClass, children }) {
  return <p className={`${Styles.subtitle} ${styledClass}`}>{children}</p>;
}

export function Button({ href, styledClass, children }) {
  return (
    <a href={href} className={`${Styles.button} ${styledClass}`}>
      {children}
    </a>
  );
}

export function Text({ styledClass, children }) {
  return <p className={`${Styles.text} ${styledClass}`}>{children}</p>;
}

export function BoldText({ children }) {
  return <span className={Styles.boldText}>{children}</span>;
}

export function HighlightedText({ children }) {
  return <span className={Styles.highlightedText}>{children}</span>;
}
