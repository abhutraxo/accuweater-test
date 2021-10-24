import { deserialize } from 'json-typescript-mapper';

import defaultConfig = require('./../../core/config-setup/default-config-setup');
import { WeatherData } from './models/weather-data/weather-data';
import { RestWrapper } from './rest-wrapper';

export class GetTempUtils {
  static async getTemp(cityName = defaultConfig.params.city) {
    const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7fe67bf08c80ded756e598d6f8fedaea`;

    const response = await new RestWrapper()
      .get(requestUrl)
      .headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
      .type('json')
      .end();

    const content = deserialize(WeatherData, response.body);
    return {
      content,
      statusCode: response.status,
    };
  }
}
