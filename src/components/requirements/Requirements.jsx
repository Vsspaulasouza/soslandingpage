import React from "react";
import Styles from "./Requirements.module.scss";
import { Subtitle, Title, Text } from "../PageComponents";
import Table from "../../images/table.svg";

function Requirements() {
  return (
    <section className={Styles.requirements}>
      <Subtitle styledClass={Styles.requirements__subtitle}>
        Can My Computer Run this game?
      </Subtitle>
      <Title styledClass={Styles.requirements__title}>
        system requirements
      </Title>
      <div className={Styles.requirements__table}>
        <img
          src={Table}
          alt="Table"
          className={Styles.requirements__tableBackground}
        />
        <div className={Styles.requirements__requirement}>
          <Subtitle styledClass={Styles.requirements__requirementSubtitle}>
            Os:
          </Subtitle>
          <Text styledClass={Styles.requirements__requirementText}>
            Windows 7 64-bit only <br />
            (No OSX support at this time)
          </Text>
        </div>
        <div className={Styles.requirements__requirement}>
          <Subtitle styledClass={Styles.requirements__requirementSubtitle}>
            Processor:
          </Subtitle>
          <Text styledClass={Styles.requirements__requirementText}>
            Intel Core 2 Duo @ 2.4 GHZ or <br /> AMD Athlon X2 @ 2.8 GHZ
          </Text>
        </div>
        <div className={Styles.requirements__requirement}>
          <Subtitle styledClass={Styles.requirements__requirementSubtitle}>
            Memory:
          </Subtitle>
          <Text styledClass={Styles.requirements__requirementText}>
            8 GB RAM
          </Text>
        </div>
        <div className={Styles.requirements__requirement}>
          <Subtitle styledClass={Styles.requirements__requirementSubtitle}>
            Storage:
          </Subtitle>
          <Text styledClass={Styles.requirements__requirementText}>
            8 GB available space
          </Text>
        </div>
        <div className={Styles.requirements__requirement}>
          <Subtitle styledClass={Styles.requirements__requirementSubtitle}>
            Graphics:
          </Subtitle>
          <Text styledClass={Styles.requirements__requirementText}>
            NVIDIA GeForce GTX 660 2GB or <br />
            AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)
          </Text>
        </div>
      </div>
    </section>
  );
}

export default Requirements;

// requirement
