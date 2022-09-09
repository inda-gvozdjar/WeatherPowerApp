import * as React from "react";
import { IWeatherData } from "../types";
import {
  RainSnowIcon,
  SnowflakeIcon,
  CloudyIcon,
  PartlyCloudyDayIcon,
  SunnyIcon,
} from "@fluentui/react-icons-mdl2";
import { mergeStyles } from "@fluentui/react/lib/Styling";
import {
  DocumentCard,
  DocumentCardTitle,
  IDocumentCardStyles,
} from "@fluentui/react/lib/DocumentCard";

const WeatherBox = ({ date, temperature, weatherType }: IWeatherData) => {
  const getIcon = () => {
    switch (weatherType) {
      case "RainSnow":
        return <RainSnowIcon />;
      case "Snow":
        return <SnowflakeIcon />;
      case "Cloudy":
        return <CloudyIcon />;
      case "Partly cloudy day":
        return <PartlyCloudyDayIcon />;
      case "Sunny":
        return <SunnyIcon />;
        break;
      default:
        break;
    }
  };

  const cardStyles: IDocumentCardStyles = {
    root: { display: "inline-block", marginRight: 20, width: 230 },
  };
  const conversationTileClass = mergeStyles({ height: 220 });

  return (
    <DocumentCard styles={cardStyles}>
      <h1>{getIcon()}</h1>
      <div className={conversationTileClass}>
        <DocumentCardTitle
          title={new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
            date
          )}
          shouldTruncate
        />
        <DocumentCardTitle
          title={temperature.toString() + " °C"}
          shouldTruncate
          showAsSecondaryTitle
        />
        <DocumentCardTitle
          title={weatherType}
          shouldTruncate
          showAsSecondaryTitle
        />
        <DocumentCardTitle
          title={new Intl.DateTimeFormat("en-US").format(date)}
          shouldTruncate
          showAsSecondaryTitle
        />
      </div>
    </DocumentCard>
  );
};

export default WeatherBox;
