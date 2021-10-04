<h1 style="font-weight:bold;">Ravenous</h1>

[![](https://img.shields.io/badge/Chrome%20(CORS)-0.1.6-orange)](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)
[![](https://img.shields.io/badge/Mozilla%20(CORS)-18.11.13.2043-blueviolet)](https://addons.mozilla.org/en-CA/firefox/addon/cors-everywhere/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)
[![](https://img.shields.io/badge/Edge%20(CORS)-0.1.6-blue)](https://microsoftedge.microsoft.com/addons/detail/allow-cors-accesscontro/bhjepjpgngghppolkjdhckmnfphffdag)
[![](https://img.shields.io/badge/Codecademy-PRO-brightgreen)](https://www.codecademy.com/pro/membership?g_network=g&g_device=c&g_adid=528849219352&g_keyword=codecademy%20pro&g_acctid=243-039-7011&g_adtype=search&g_adgroupid=128133970788&g_keywordid=kwd-373216718809&g_campaign=INTL_Brand_Exact&g_campaignid=1726903838&utm_id=t_kwd-373216718809:ag_128133970788:cp_1726903838:n_g:d_c&utm_term=codecademy%20pro&utm_campaign=INTL_Brand_Exact&utm_source=google&utm_medium=paid-search&utm_content=528849219352&hsa_acc=2430397011&hsa_cam=1726903838&hsa_grp=128133970788&hsa_ad=528849219352&hsa_src=g&hsa_tgt=kwd-373216718809&hsa_kw=codecademy%20pro&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=EAIaIQobChMIuoznwrqq8wIVCWpvBB0ZigBvEAAYASABEgIn3vD_BwE)

## Table of contents
* [Demo](#demo)
  * [Installation](#installation)
* [How to use](#how-to-use)
* [Other Information](#other-information)
* [Credits](#credits)

Ravenous is a Codecademy Project of a React app that allows a user to search for businesses in a general location and sort the result (returned by Yelp API) by best match, highest rated, and most reviewed. 

## Demo
Note: The Ravenous app relies on data from the [Yelp Fusion API](https://www.yelp.com/fusion). Unfortunately, the API does not support [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). In order for the Ravenous app to work properly, you will be prompted to navigate to this [link](https://cors-anywhere.herokuapp.com/corsdemo) and click the button to "request temporary access to the demo server".

Alternatively, you can install extensions to allow CORS on your browser: [Chrome](https://chrome.google.com/webstore/search/cors?hl=en-US), [Mozilla](https://addons.mozilla.org/en-CA/firefox/search/?q=cors), [Edge](https://microsoftedge.microsoft.com/addons/search/cors?hl=en-US), etc. 

Online: https://ravenous-yelp-like-clone.netlify.app/

### Installation

- `Clone` the app.
- Navigate to the app directory.
- Run the command `npm start` 

The command runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your favorite browser.

## How to use

Once CORS is enabled in your browser, the app should work properly. You, can go ahead and input the name or type of a business in the 'Search Business' input field. Then, input a location to search for these businesses.

Examples of a valid Business include: Hair Salon, Pizza, Mexican, KFC, Mall, etc. 

Examples of a valid location include: Cancun, Toronto, Etobicoke, United States, Pembina Hwy etc.

You can also sort the result by best match, highest rated, and most reviewed. Don't forget to click on the "Let's Go" button after selecting the sorting criteria.

## Other Information
Due to [bayesian inference](https://en.wikipedia.org/wiki/Bayesian_inference), sorting by 'highest rated' does not work as a user would expect. This is so that a [business with 1 rating of 5 starts does not immediately jump to the top](https://github.com/Yelp/yelp-fusion/issues/24). 

## Credits
- The project instructions where provided by Codecademy. However, instead of using class components, functional components where used to construct the entire app. Instead of using plain react, typescript was injected to make it easier to debug. Most css file while convert to Sass files. Also, Error messages where included to warn the user about CORS issues or some invalid inputs. 

- Most of the data is retrieve from [Yelp API](https://www.yelp.com/developers/documentation/v3)
