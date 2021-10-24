import { StepLogger } from '../../../../core/logger/step-logger';
import { TextBoxHelper } from '../../../components/html/textbox-helper';
import { WaitHelper } from '../../../components/html/wait-helper';
import { EndpointHelper } from '../../../components/misc-utils/endpoint-helper';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { BasePageHelper } from '../base-page.helper';

import defaultConfig = require('./../../../../core/config-setup/default-config-setup');
import { GetTempUtils } from './../../../api/get-temp-utils';
import { HomePage } from './home-page.po';

export class HomePageHelper extends BasePageHelper {
  private static vInstance: HomePageHelper;

  private constructor() {
    super();
  }

  public static getInstance(): HomePageHelper {
    return this.vInstance || (this.vInstance = new this());
  }

  static async enterCityName(city = defaultConfig.params.city) {
    await TextBoxHelper.typeSlowly(HomePage.home.searchInput, city, 50);

  }

  static async clickSearchResult(cityName = defaultConfig.params.city) {
    await WaitHelper.waitForElementToBeDisplayed(HomePage.home.resultContainer.item);
    const fcityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
    await HomePage.home.searchBarResult(fcityName).item.first().click();
  }

  static async getTemp() {
    await WaitHelper.waitForElementToBeDisplayed(HomePage.home.temperature.item.first());
    return await HomePage.home.temperature.item.first().getText();
  }

  static async compareTemp(uiTemp: number, range = defaultConfig.params.variation) {
    const apiTemp = await GetTempUtils.getTemp();
    const apiTempCel = apiTemp.content.main.temp - 273.15;
    StepLogger.subVerification(`API temp is ${apiTempCel}, ${apiTempCel + range}, ${apiTempCel - range}, ${range}`);
    if (uiTemp <= (apiTempCel + range) && uiTemp >= (apiTempCel - range)) {
      return true;
    } else {
      return false;
    }
  }

  static async verifyTempUIandApi(uiTemp: number, range = defaultConfig.params.variation) {
    await ExpectationHelper.verifyValueIsTrue(await this.compareTemp(uiTemp, range));
  }

  url(): string {
    return EndpointHelper.home;
  }
}
