import { by } from 'protractor';

import { $, $$ } from '../../../components/misc-utils/df-elements-helper';

import { HomePageConstants } from './home-page.constants';

const { attributes: { classes }, elementNames: eNames } = HomePageConstants;
export class HomePage {
  static readonly home = Object.freeze({
    get searchInput() {
      return $(by.css(`[class*='${classes.searchInput}']`), eNames.searchInput);
    },

    searchBarResult(cityName: string) {
      return $$(by.cssContainingText(`[class*='${classes.searchBarResult}']`, `${cityName}`), eNames.searchBarResult);
    },

    get temperature() {
      return $$(by.css(`[class='${classes.temp}']`), eNames.temp);
    },

    get resultContainer() {
      return $(by.css(`[class*='${classes.resultContainer}']`), eNames.resultContainer);
    }
  });
}
