import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { WaitHelper } from '../../../components/html/wait-helper';
import { HomePageHelper } from '../../../page-objects/pages/home-page/home-page.helper';
import { SuiteNames } from '../../helpers/suite-names';

describe(SuiteNames.eTwoESuite, () => {
  let homeHelper: HomePageHelper;

  beforeAll(async () => {
    homeHelper = HomePageHelper.getInstance();
    await PageHelper.maximizeBrowser();
  });

  it('Compare the Weather data', async () => {
    StepLogger.caseId = 1;
    StepLogger.stepId(1);
    StepLogger.step('Navigate to accuweather.com');
    await homeHelper.goTo();
    StepLogger.verification ('Verify page is loaded');
    await WaitHelper.waitForPageToStable();

    StepLogger.stepId(2);
    StepLogger.step('Enter city name in Search box');
    await HomePageHelper.enterCityName();
    StepLogger.verification('Click on first search result');
    await HomePageHelper.clickSearchResult();

    StepLogger.stepId(3);
    StepLogger.step('Get the Temp of the city');
    const temp = await HomePageHelper.getTemp();
    const tempValue = temp.substr(0, (temp.length - 2));
    StepLogger.step(`UI temperature is: ${tempValue}`);
    StepLogger.verification('Verify the temp from comparator');
    await HomePageHelper.verifyTempUIandApi(Number(tempValue));
  });
});
