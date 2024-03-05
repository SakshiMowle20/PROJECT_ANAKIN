Restaurant URL Scraper

Welcome to the Restaurant URL Scraper documentation! This tool is designed to automate the process of extracting restaurant URLs from the Grab Food website using Selenium WebDriver.
It's a straightforward script that navigates through the website, dynamically loads the content, and collects valuable links for you.

Preconditions
Before you begin, ensure you have the following installed on your system:

Node.js: The runtime environment to run JavaScript on the server-side.
Chrome Browser: The script uses ChromeDriver to interact with the web content.
Selenium WebDriver: A suite of tools for automating web browsers.

Installation

Install Node.js: Download and install Node.js from nodejs.org.

Install Selenium WebDriver: Run the following command in your terminal or command prompt to install Selenium WebDriver:

      " npm install selenium-webdriver"

Download ChromeDriver:
 Make sure you have ChromeDriver downloaded and set up in your system's PATH. ChromeDriver is needed for Selenium to interact with the Chrome browser. 
 Download it from ChromeDriver - WebDriver for Chrome.


 Use:

Clone or Download the Script: Get a copy of the script  onto your local machine.

Run the Script: Navigate to the directory containing the script file and run it using Node.js:

    "node filename.js"

Observe:

The script will automatically launch the Chrome browser, navigate to the Grab Food restaurant listings page, and begin the scraping process. 
As it scrolls through the page to dynamically load all content, it will collect and print out the URLs of the restaurants listed.

Results:
Once the script has finished running, it will output the collected restaurant URLs to your console. You can then use this data for your specific needs.

Notes
The script is configured to wait for elements to be visible and dynamically loaded content.
Depending on your internet speed and the website's response time, you might need to adjust the sleep intervals.
Always ensure you're using the script responsibly and ethically, respecting the website's terms of service and rate limits.


Conclusion

The Restaurant URL Scraper streamlines the process of collecting restaurant details from Grab Food. It's designed to save you both time and effort. Happy scraping!



