## Default Value of City is Indore
## Default variation of temperature is 2
## Precondition - Install following
```Latest version of chrome```
```Node js```

## Setup - Before running test
```npm install```

## How to run the test with default values
```npm run e2e```

## How to run test with different values
Ex
```npm run e2e -- --params.city=pune --params.variation=3```

## *Important note*
If you are working on angular app automation then don't forget to remove
browser.waitForAngularEnabled(false); e2e\page-objects\pages\base-page.ts Line-10


## Code organization

For integration tests the folder structure should be similar to this as our spec files are going to utilize multiple page objects for completing a test
```
─e2e
    │   tsconfig.e2e.json
    │
    ├───components
    │   ├───devfactory
    │   │   ├───component-helpers
    │   │   │       component-helpers.ts
    │   │   │
    │   │   └───component-types
    │   │       └───(component-name)-component
    │   │    breadcrumbs-component-selectors.ts
    │   │
    │   ├───html
    │   │       (type)-helper.ts
    │   │
    │   ├───misc-utils
    │   │       common-label.ts
    │   │       constants.ts
    │   │       html-helper.ts
    │   │
    │   └───vendor
    │       └───vendor-name
    │    vendor-name.ts
    │
    ├───page-objects
    │   ├───contracts
    │   │       page.ts
    │   │
    │   └───pages
    │       │   base-page.ts
    │       │
    │       └───(page-name)
    │               (page-name)-page.constants.ts
    │               (page-name)-page.helper.ts
    │               (page-name)-page.validations.ts
    │               (page-name).po.ts
    │
    └───test-suites
        ├───api-test-suite
        │   └───(after-suite)
        ├───ui-test-suite
        │   └───(after-suite)
        │
        └───helpers
     suite-names.ts
```

If you guys are following these things then great otherwise if you have a better approach then please suggest

For Api Urls and Data They are supposed to be organized like
```
End point  
Customer/Orders/Create

Directory structure
--Customer
----Orders
----ApiObjects (Similar to Page Objects) - Where you keep all the Derived data and data constructions
----Constant file and so on
```
## Framework components


### Contracts


e2e\modules\Contracts are basically a kind of interface, like those things which are compulsory to be implemented by every page object file. Right now we have it for Page, so whatever is declared in it is a unified requirement for all the components that should be put in here. So this `Page` contract has to be inherited by all the page objects


### Base Page

e2e\page-objects\base-page it's basically a utility for all the tricky selectors so this page has to be inherited by all the page objects

### Naming convention


We are using default conventions which are suggested by angular team on top of that we are also using some more configuration parameters to produce high quality code.
https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines


### Spec files

We must post fix `.e2e-spec.ts` for all the ui test files
We must post fix `.api-spec.ts` for all the api test files


### Api Instructions

- Use strongly typed models for assertions and posting the data eg. [swagger-ts-generator](https://www.npmjs.com/package/swagger-ts-generator)
- Structure all the endpoints properly in separate them in each file
- All the session related repetitive code must be controlled from api invoker 
- Use ObjectBuilder for setting up specific properties

#### General instructions
- Create the item - POST
- Retrieve the created item (Step 1) with the same attributes which we sent in post-  GET
- Update the same item (Step 2) - PUT (To make it strong, Do GET again and assert it)
- Delete newly created item (Step 1) - DELETE  (To make it strong, Do GET again and assert not found)  


## Reporting component

Allure reporting is integrated. For configuration please visit https://github.com/allure-framework/allure-jasmine

on local machine it can be generated via command line

```
npm install -g allure-commandline --save-dev
```

allure serve <path of artifacts>, example

```
allure serve allure-results
```


## Running parallel tests execution

Following keys are defined in [default-config-setup.js](https://github.com/trilogy-group/common-automation-framework-protractor/blob/develop/core/config-setup/default-config-setup.js)

multiCapabilities.maxInstances: 5  Default max instances for selenium grid

bsMultiCapabilities.maxInstances: 5 Default max instances for browser stack


3 Ways to pass the max instances

1. Using environment variable MAX_INSTANCES

2. Using command line param --params.maxInstances

3. Default is 5



## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Customization switches

Almost all the switches are configurable using Environment variable, Check the respective section for more details

### Passing parameters to NPM

NPM scripts can have parameters passed by command line.  E.g.:

```
// Notice extra -- with cmd line args
npm run e2e -- --baseUrl=<URL>

OR

protractor <conf-file> --baseUrl=<URL>
```

* Test writing instructions - Please make sure that `suite name` in test rail and in *-specs.ts is same and test case has an id append to name with bracket, Here `suite name` is defined in describe and `test id` is defined as [1].
Example

```javascript
describe("This should be the suite name", function() {
  it("Mind the id at the end of this with bracket - [1]", function() {
    expect(true).toBe(true);
  });
});

### Misc. Switches

You might want to have some misc info to be passed from command line that can be specified using an object under param section of object in config
For example we have 2 switches right now like
--params.login.user = [XXXX]
--params.login.password = [XXXX]


### Product version switch
--params.testrail.versionName Or process.env.VERSION

Default - as Required

### Selenium hub switch
--params.selenium.hub Or process.env.SELENIUM_URL

Default - as Required

## Thumb rules to be followed for organizing the code -

* `*.constant.ts`, can have field/objects/properties but not methods
* `*.po.ts` can have objects/properties but not methods
* `*.validation.ts` can have everything
* `*.helper.ts` can only have methods
