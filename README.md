<h1 style="font-weight:bold; text-align:center;">Ravenous</h1>

[![](https://img.shields.io/badge/Chrome%20(CORS)-0.1.6-orange)](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)
[![](https://img.shields.io/badge/Mozilla%20(CORS)-18.11.13.2043-brightgreen)](https://addons.mozilla.org/en-CA/firefox/addon/cors-everywhere/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)
[![](https://img.shields.io/badge/Edge%20(CORS)-0.1.6-blue)](https://microsoftedge.microsoft.com/addons/detail/allow-cors-accesscontro/bhjepjpgngghppolkjdhckmnfphffdag)

Ravenous is a Codecademy Project of a React app that allows a user to search for restaurants at a location and sort the result (returned by Yelp API) by best match, highest rated, and most reviewed. 

## Demo
Note: The Ravenous app relies on data from the [Yelp Fusion API](https://www.yelp.com/fusion). Unfortunately, the API does not support [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). In order for the Ravenous app to work properly, you will be prompted to navigate to this [link](https://cors-anywhere.herokuapp.com/corsdemo) and click the button to "request temporary access to the demo server".

Alternatively, you can install extensions to allow CORS on your browser: [Chrome](https://chrome.google.com/webstore/search/cors?hl=en-US), [Mozilla](https://addons.mozilla.org/en-CA/firefox/search/?q=cors), [Edge](https://microsoftedge.microsoft.com/addons/search/cors?hl=en-US), etc. 

Online: https://ravenous-yelp-like-clone.netlify.app/

### Installation

In the project directory, you can run:

#### `npm start`

The command runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to use

Once CORS is enabled in your browser, the app should work properly. You, can go ahead and input the name or type of a restaurant in the 'Search Business' input field. Then, input a location to search for these restaurants.

Examples of a valid Business include: Bread, Pizza, Mexican, KFC, Burgers, etc. 

Examples of a valid location include: Cancun, Toronto, Etobicoke, United States, Pembina Hwy etc.

You can also sort the result by best match, highest rated, and most reviewed. Don't forget to click on the "Let's Go" button after selecting the sorting criteria.

## Credits
- The project instructions where provided by Codecademy. However, instead of using class components, functional components where used to construct the entire app. Also, instead of using plain react, typescript was injected to make it easier to debug.

- Most of the data is retrieve from [Yelp API](https://www.yelp.com/developers/documentation/v3)



