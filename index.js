//패키지 호출
var webdriver = require("selenium-webdriver");
var By = require("selenium-webdriver").By;
var cheerio = require("cheerio");
var request = require("request");

var driver = new webdriver.Builder()
  .withCapabilities(webdriver.Capabilities.chrome())
  .build();

var url = "https://www.google.com/";
driver.get(url);
driver.quit();
