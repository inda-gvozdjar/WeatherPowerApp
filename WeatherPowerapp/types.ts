export interface IWeatherData {
  date: Date;
  temperature: number;
  weatherType: WeatherType;
}
export enum WeatherType {
  CLOUDY = "Cloudy",
  SUNNY = "Sunny",
  SNOW = "Snow",
  RAINSNOW = "RainSnow",
  PARTLYCLOUDYDAY = "Partly cloudy day",
}
