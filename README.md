# xe-app
XE challenge application

Application has been developed using ReactJS library along with these modules :

1) axios - for Promise based HTTP requests
2) bootstrap - for some basic visual enchantments
3) react-loader-spinner - for the loader while requesting locations from the service

All challenge's objectives have been met, bonuses too:

1) Location service is called if user stops typing for 1 second
2) Search button is enabled only if a location is selected from the dropdown list
3) Application is fully responsive
4) Aggressive timeout for the call to the location service is 3 seconds.
5) Results of the location service are stored in localStorage for 5 mins. 

### Installation

Clone or download the project, and then run `$npm start` in directory folder

Application is also published on https://constantinelias.github.io/xe-app/ (note that you have to allow loading unsafe scripts
since publish url runs on HTTPS but location service is HTTP. If you don't do that you will get a `Mix content` error every time
location service is called)

