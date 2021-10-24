import { JsonProperty } from 'json-typescript-mapper';

export class MainData {
  @JsonProperty()
  temp: number;
  @JsonProperty()
  feels_like: number;
  @JsonProperty()
  temp_min: number;
  @JsonProperty()
  temp_max: number;
  @JsonProperty()
  pressure: number;
  @JsonProperty()
  humidity: number;

  constructor() {
    this.temp = undefined;
    this.feels_like = undefined;
    this.temp_min = undefined;
    this.temp_max = undefined;
    this.pressure = undefined;
    this.humidity = undefined;
  }
}
