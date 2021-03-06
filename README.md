# Luma Front End Engineering Interview

## Interview Task

Build the Patient Referral Form using this [design spec](https://www.figma.com/file/XIHFNbIXykq8KosWEIryhoRJ/Patient-Referral-Form-interview?node-id=0%3A1).

There is no need to build any backend (api layer, server, database). For simulating form submission, you can do a POST to /api/referrals


## Duration

Up to 8 hours. We do not expect you to complete the assessment in this time.

## Submission
1.  Fork this repo
2.  Build Patient Referral Form. Suggested libraries
    -  Material UI components - [https://material-ui.com/](https://material-ui.com/)
    -  Address lookup - [https://www.npmjs.com/package/react-places-autocomplete](https://www.npmjs.com/package/react-places-autocomplete)
4.  Submit a Pull Request (PR)
5.  In the PR, include a README that includes the following:
    -  If you made any assumptions, what are they
    - Outline what else needs to be done if given more time

## Note
  - index.html need an api key to work for google places api
  - The current structure that I built of the list array state is not as performant as it coult be. When you get to the 4-5th form you start to see some imput lag.
    - A possible fix would be to manage a "current expanded form" state that is not part of the list state. We would then push the form data to the list state array on Click of the add or submit button.
    This is to stop the array being minipulated after every keystroke (The current structure is doing this). So if a User wishes to edit a previous form, when expanded, that particular form 
    has its own individual instance of that form again with the current data and only update the array list once instead of every keystroke
    - Another possible fix would be to "Throttle" the setState of the list. Instead of updating after every keystroke we can update every 500ms-1sec


## Things that still need to be done
  - Check for Required Fields and make alert
  - animation css
  - Break down ListItem.js into smaller components
  - break down App.js into smaller components
  - apply the correct coloring and css
  - add the form header
  - fix map functions in referralList to not use index for the key 
  - apply css so address drop down does not move the entire component down
  - add more babel and web pack preferences to insure cross browser compatibility
  - make mobile friendly
  - prop type checking (coudl use "prop-types" library for this)
  - split address the the event that there is an apt or suite address
  - add icons to inputs representing their value
  - find how library or api returns zip code for autocomplete
  - ask about contacts and patient Referral id data
  - ask how to handle an array of Patient data to the server
  - ask how server handles responses after api hit
  - make it so the collapse icon is the only way to expand the form
  - create error components to handle api responses
  - make loading component for autocorrect and submission button so that the user has a visually representation of items being processed
  - look more into the data-sns library for formating to fix the problem where i need to format default value from datepicker when changing state of the input
  - possible refactor of list state. lists inputs are slowing down as you progress more forms. by referral 5 you notice a slight delay.
    - possible refactor would be to manage all 5 forms individually instead of and array of objects
    - manage the current expanpanded form state individually and push data to list when clicking add new referral or submit button
  - A library I would like to learn and use if given more time would be formik.  From medium articles and reviewing the docs at a glance it comes with alot of stuff out of the box like validating inputs,
  more effecient array list management, error messaging and support for react-native. A third party repo appears to have a material-ui wrapper around formik (formik-material-ui) which could have saved me more time.
  - alert or remove the (add patient) button to tell the user they have reached the max referrals (the button does not let them add more than 5 but there is no gesture showing why currently)
  - need to fix the problem where when sending the form data the default form is sometimes not rendered in its non expanded state
  
    

## Assumptions
  - I am currently assuming the api can handle an array of patients.
  - how the server responds back
  - from the spec I assumed you wanted a delete function, list x amount of referrals sent etc...

