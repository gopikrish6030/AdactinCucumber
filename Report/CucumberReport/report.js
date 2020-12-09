$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactin/feautre/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Booking functionality of Adactin application",
  "description": "",
  "id": "booking-functionality-of-adactin-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1740306,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Verify the user is able to login the application",
  "description": "",
  "id": "booking-functionality-of-adactin-application;verify-the-user-is-able-to-login-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters the valid \"gopikrish6030\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters the valid \"santhisekar30\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User verifies whether Homepage navigates to search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launches_the_application()"
});
formatter.result({
  "duration": 28523725791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gopikrish6030",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_in_the_username_field(String)"
});
formatter.result({
  "duration": 463927854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "santhisekar30",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_in_the_password_field(String)"
});
formatter.result({
  "duration": 308946721,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 5501053421,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verifies_whether_Homepage_navigates_to_search_hotel_page()"
});
formatter.result({
  "duration": 36165,
  "status": "passed"
});
formatter.after({
  "duration": 217477,
  "status": "passed"
});
formatter.before({
  "duration": 105562,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "To check User can update all the fields in Search Hotel page",
  "description": "",
  "id": "booking-functionality-of-adactin-application;to-check-user-can-update-all-the-fields-in-search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User select the location from the \"index\" as \"1\" drop down option",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User select the hotel from the \"index\" as \"1\" drop down option",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User select the room type from \"index\" as \"1\" drop down option",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User select the number of rooms from the \"index\" as \"2\" drop down option",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters the valid check in date in the \"10/12/2020\" Date field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters the valid check out date in the \"12/12/2020\" Date field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User select the adults per room from the \"index\" as \"2\" drop down option",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User select the children per room from the \"index\" as \"2\" drop down option",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User verifies whether search hotel page navigates to select hotel page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "index",
      "offset": 35
    },
    {
      "val": "1",
      "offset": 46
    }
  ],
  "location": "StepDefinition.user_select_the_location_from_the_as_drop_down_option(String,String)"
});
formatter.result({
  "duration": 311325286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "index",
      "offset": 32
    },
    {
      "val": "1",
      "offset": 43
    }
  ],
  "location": "StepDefinition.user_select_the_hotel_from_the_as_drop_down_option(String,String)"
});
formatter.result({
  "duration": 387172068,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "index",
      "offset": 32
    },
    {
      "val": "1",
      "offset": 43
    }
  ],
  "location": "StepDefinition.user_select_the_room_type_from_as_drop_down_option(String,String)"
});
formatter.result({
  "duration": 415981695,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "index",
      "offset": 42
    },
    {
      "val": "2",
      "offset": 53
    }
  ],
  "location": "StepDefinition.user_select_the_number_of_rooms_from_the_as_drop_down_option(String,String)"
});
formatter.result({
  "duration": 318562148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10/12/2020",
      "offset": 44
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_check_in_date_in_the_Date_field(String)"
});
formatter.result({
  "duration": 844693384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12/12/2020",
      "offset": 45
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_check_out_date_in_the_Date_field(String)"
});
formatter.result({
  "duration": 333711271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "index",
      "offset": 42
    },
    {
      "val": "2",
      "offset": 53
    }
  ],
  "location": "StepDefinition.user_select_the_adults_per_room_from_the_as_drop_down_option(String,String)"
});
formatter.result({
  "duration": 356695441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "index",
      "offset": 44
    },
    {
      "val": "2",
      "offset": 55
    }
  ],
  "location": "StepDefinition.user_select_the_children_per_room_from_the_as_drop_down_option(String,String)"
});
formatter.result({
  "duration": 481130550,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_on_the_search_button()"
});
formatter.result({
  "duration": 1566383099,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verifies_whether_search_hotel_page_navigates_to_select_hotel_page()"
});
formatter.result({
  "duration": 51315,
  "status": "passed"
});
formatter.after({
  "duration": 169584,
  "status": "passed"
});
formatter.before({
  "duration": 178380,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "To check User can Select the Hotel name to continue the booking",
  "description": "",
  "id": "booking-functionality-of-adactin-application;to-check-user-can-select-the-hotel-name-to-continue-the-booking",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "User select the hotel on radio button in select field",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User verifies whether select hotel page navigates to Book A Hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_select_the_hotel_on_radio_button_in_select_field()"
});
formatter.result({
  "duration": 236054699,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 4780812740,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verifies_whether_select_hotel_page_navigates_to_Book_A_Hotel_page()"
});
formatter.result({
  "duration": 37142,
  "status": "passed"
});
formatter.after({
  "duration": 99698,
  "status": "passed"
});
formatter.before({
  "duration": 101164,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify user can able to book a hotel with payment option",
  "description": "",
  "id": "booking-functionality-of-adactin-application;verify-user-can-able-to-book-a-hotel-with-payment-option",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "User enters the valid first name as \"Gopi\" in the First Name field",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User enters the valid last name as \"Sekar\" in the Last Name field",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User enters the valid billing address as \"No. Braminar St. Cheyyar\" in the Billing Address field",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User enters the valid sixteen digit credit card number as \"2456897894152314\" in the Credit Card No. field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User select the credit card type \"index\" as \"2\" from the Credit Card Type drop down option",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User select the expiry month as \"index\" and \"2\" in the Expiry Date option",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User select the expiry year as \"value\" and \"2021\" in the Expiry Date option",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User enters the valid CVV number as \"456\" in the CVV number field",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click on the book now button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User verifies book now page navigates into Booking confirmation",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gopi",
      "offset": 37
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_first_name_as_in_the_First_Name_field(String)"
});
formatter.result({
  "duration": 272232651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sekar",
      "offset": 36
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_last_name_as_in_the_Last_Name_field(String)"
});
formatter.result({
  "duration": 433637916,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No. Braminar St. Cheyyar",
      "offset": 42
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_billing_address_as_in_the_Billing_Address_field(String)"
});
formatter.result({
  "duration": 268862486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2456897894152314",
      "offset": 59
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_sixteen_digit_credit_card_number_as_in_the_Credit_Card_No_field(String)"
});
formatter.result({
  "duration": 225822027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "index",
      "offset": 34
    },
    {
      "val": "2",
      "offset": 45
    }
  ],
  "location": "StepDefinition.user_select_the_credit_card_type_as_from_the_Credit_Card_Type_drop_down_option(String,String)"
});
formatter.result({
  "duration": 450495580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "index",
      "offset": 33
    },
    {
      "val": "2",
      "offset": 45
    }
  ],
  "location": "StepDefinition.user_select_the_expiry_month_as_and_in_the_Expiry_Date_option(String,String)"
});
formatter.result({
  "duration": 498670945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "value",
      "offset": 32
    },
    {
      "val": "2021",
      "offset": 44
    }
  ],
  "location": "StepDefinition.user_select_the_expiry_year_as_and_in_the_Expiry_Date_option(String,String)"
});
formatter.result({
  "duration": 414300034,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "456",
      "offset": 37
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_CVV_number_as_in_the_CVV_number_field(String)"
});
formatter.result({
  "duration": 242780366,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_on_the_book_now_button()"
});
formatter.result({
  "duration": 375141910,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verifies_book_now_page_navigates_into_Booking_confirmation()"
});
formatter.result({
  "duration": 142215,
  "status": "passed"
});
formatter.after({
  "duration": 167140,
  "status": "passed"
});
formatter.before({
  "duration": 147592,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Verify user booking confirmation with Order ID",
  "description": "",
  "id": "booking-functionality-of-adactin-application;verify-user-booking-confirmation-with-order-id",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "User click on myItinerary button.",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User Verifies Booking confirmation page navigates to Booked Itinerary",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_click_on_myItinerary_button()"
});
formatter.result({
  "duration": 8537725462,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Verifies_Booking_confirmation_page_navigates_to_Booked_Itinerary()"
});
formatter.result({
  "duration": 46916,
  "status": "passed"
});
formatter.after({
  "duration": 598185,
  "status": "passed"
});
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           formatter.result({
  "duration": 65653919404,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //input[@id\u003d\u0027first_name\u0027]\u0027 (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.adactin.baseclass.BaseClass.waitForElement(BaseClass.java:48)\r\n\tat com.adactin.baseclass.BaseClass.inputValueToElement(BaseClass.java:61)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_enters_the_valid_first_name_as_in_the_First_Name_field(StepDefinition.java:298)\r\n\tat ✽.And User enters the valid first name as \"Gopi\" in the First Name field(src/test/java/com/adactin/feautre/Adactin.feature:28)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027first_name\u0027]\"}\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GOPI\u0027, ip: \u0027192.168.43.26\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\GOPIS~1\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:49500}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 4a90d81d36602b8491a896553a62e840\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027first_name\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor16.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.adactin.baseclass.BaseClass.waitForElement(BaseClass.java:48)\r\n\tat com.adactin.baseclass.BaseClass.inputValueToElement(BaseClass.java:61)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_enters_the_valid_first_name_as_in_the_First_Name_field(StepDefinition.java:298)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sekar",
      "offset": 36
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_last_name_as_in_the_Last_Name_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No. Braminar St. Cheyyar",
      "offset": 42
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_billing_address_as_in_the_Billing_Address_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2456897894152314",
      "offset": 59
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_sixteen_digit_credit_card_number_as_in_the_Credit_Card_No_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "index",
      "offset": 34
    },
    {
      "val": "2",
      "offset": 45
    }
  ],
  "location": "StepDefinition.user_select_the_credit_card_type_as_from_the_Credit_Card_Type_drop_down_option(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "index",
      "offset": 33
    },
    {
      "val": "2",
      "offset": 45
    }
  ],
  "location": "StepDefinition.user_select_the_expiry_month_as_and_in_the_Expiry_Date_option(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "value",
      "offset": 32
    },
    {
      "val": "2021",
      "offset": 44
    }
  ],
  "location": "StepDefinition.user_select_the_expiry_year_as_and_in_the_Expiry_Date_option(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "456",
      "offset": 37
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_CVV_number_as_in_the_CVV_number_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_click_on_the_book_now_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_verifies_book_now_page_navigates_into_Booking_confirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 97742,
  "status": "passed"
});
formatter.before({
  "duration": 108005,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Verify user booking confirmation with Order ID",
  "description": "",
  "id": "booking-functionality-of-adactin-application;verify-user-booking-confirmation-with-order-id",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "User click on myItinerary button.",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User Verifies Booking confirmation page navigates to Booked Itinerary",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_click_on_myItinerary_button()"
});
formatter.result({
  "duration": 65855694312,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //input[@id\u003d\u0027my_itinerary\u0027]\u0027 (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.adactin.baseclass.BaseClass.waitForElement(BaseClass.java:48)\r\n\tat com.adactin.baseclass.BaseClass.clickElement(BaseClass.java:70)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_click_on_myItinerary_button(StepDefinition.java:361)\r\n\tat ✽.And User click on myItinerary button.(src/test/java/com/adactin/feautre/Adactin.feature:40)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027my_itinerary\u0027]\"}\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GOPI\u0027, ip: \u0027192.168.43.26\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\GOPIS~1\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:49500}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 4a90d81d36602b8491a896553a62e840\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027my_itinerary\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor16.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.adactin.baseclass.BaseClass.waitForElement(BaseClass.java:48)\r\n\tat com.adactin.baseclass.BaseClass.clickElement(BaseClass.java:70)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_click_on_myItinerary_button(StepDefinition.java:361)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_Verifies_Booking_confirmation_page_navigates_to_Booked_Itinerary()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 227252,
  "status": "passed"
});
});