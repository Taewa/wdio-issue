const chai = require('chai');

exports.config = {
  testEnv: 'local', // local OR ipc
  specs: [
    './test/e2e/features/test-1.feature',
  ],
  exclude: [],
  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
      metadata: {
        device: '',
        platform: {
          name: '',
          version: '',
        },
      },
      chromeOptions: {
        args: [
          'disable-web-security',
          '--no-sandbox',
        ],
        mobileEmulation: {
          deviceName: 'iPhone X',
        },
      },
    },
  ],
  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  deprecationWarnings: true,
  bail: 0,
  screenshotPath: './test/e2e/errorShots',
  baseUrl: 'http://127.0.0.1:8000/',
  waitforTimeout: 20000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  plugins: {
    'wdio-webcomponents': {},
  },
  services: ['selenium-standalone'],
  seleniumLogs: './test/selenium-logs',
  framework: 'cucumber',
  reporters: ['dot', 'spec', 'multiple-cucumber-html'],
  reporterOptions: {
    htmlReporter: {
      jsonFolder: './test/e2e/reports/multiple',
      reportFolder: './test/e2e/reports/multiple/html',
    },
  },
  cucumberOpts: {
    require: [
      './test/e2e/step-definitions/steps.js'
    ],
    backtrace: false,
    dryRun: false,
    failFast: false,
    format: ['pretty'],
    colors: true,
    snippets: true,
    source: true,
    profile: [],
    strict: false,
    tags: [],
    timeout: 1200000,
    ignoreUndefinedDefinitions: false,
  },

  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  onPrepare(config, capabilities) { // eslint-disable-line no-unused-vars
    config.skipSeleniumInstall = true; // eslint-disable-line no-param-reassign
    // process.env.BABEL_CACHE_PATH = `${process.env.HOME}/Documents/.babel.json`;
  },
  /**
   * Gets executed just before initialising the webdriver session and test framework.
   * It allows you to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  // beforeSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  before(capabilities, specs) { // eslint-disable-line no-unused-vars
    global.expect = chai.expect;
    global.assert = chai.assert;
    global.should = chai.should(); // eslint-disable-line global-require
  },
  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // beforeCommand: function (commandName, args) {
  // },

  /**
   * Runs before a Cucumber feature
   * @param {Object} feature feature details
   */
  // beforeFeature: function (feature) {
  // },
  /**
   * Runs before a Cucumber scenario
   * @param {Object} scenario scenario details
   */
  // beforeScenario: function (scenario) {
  // },
  /**
   * Runs before a Cucumber step
   * @param {Object} step step details
   */
  // beforeStep: function (step) {
  // },
  /**
   * Runs after a Cucumber step
   * @param {Object} stepResult step result
   */
  // afterStep: function (stepResult) {
  // },
  /**
   * Runs after a Cucumber scenario
   * @param {Object} scenario scenario details
   */
  // afterScenario: function (scenario) {
  // },
  /**
   * Runs after a Cucumber feature
   * @param {Object} feature feature details
   */
  // afterFeature: function (feature) {
  // },

  /**
   * Runs after a WebdriverIO command gets executed
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // after: function (result, capabilities, specs) {
  // },
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed after all workers got shut down and the process is about to exit.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  // onComplete: function(exitCode, config, capabilities) {
  // }
};
