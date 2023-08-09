# Recipe App

This app was created using flutter and firebase and I designed it using Figma.

![image](https://github.com/dionnek83/recipe-app/assets/42995303/86c307da-f787-4b57-9493-3d8fc09f05bd)

## Onboarding screens
The onboarding screens are only displayed once which happens when the user installs and runs the app for the first time. 

![image](https://github.com/dionnek83/recipe-app/assets/42995303/9d0e2250-84ed-4c84-bf3f-6a29ec5c6f23)

Once the user selects the get started button they are directed to the login page. 

## Authentication 

Users can login/ sign up with google or their username and password. 

![image](https://github.com/dionnek83/recipe-app/assets/42995303/63d0e140-cb02-40af-bc08-bb66d346f123)

## Homepage 
Displays all the recipes for the currently logged in user and if the user has no recipes the message "You dont have any recipes yet" is displayed. Users can also search for a specific recipe by entering the recipe name. 

![image](https://github.com/dionnek83/recipe-app/assets/42995303/954ad50d-d3dc-47c1-8505-ab9d131d3dd1)



## Add a recipe

There are 3 steps to add a recipe which are the following:
- Basics which requires information such as the recipe name, meal type, description etc.
- Ingredients and once an ingredient is entered it is displayed at the bottom of the page. The image for the recipe is also required in this section. 
- Instructions which takes in the procedures for the recipe and has the same functionality as the ingredients page.

Once all the fields are entered the recipe is pushed to Firebase. 

![image](https://github.com/dionnek83/recipe-app/assets/42995303/f78cc4bc-d177-4dcc-82e6-8964ca4faa1f)

## Favourites 

Users can also favourite a recipe by clicking on the heart icon. Once a recipe has a colored heart it will be displayed in the Favourites page. 

![image](https://github.com/dionnek83/recipe-app/assets/42995303/538545ca-a1ce-43d0-8f00-c7768e45ad33)

## Recipe Page

Once a recipe is selected the user will be directed to a page with the recipe's information like the pages below. This page will display the instructions, ingredients, meal type etc. 

![image](https://github.com/dionnek83/recipe-app/assets/42995303/a571a209-e7c9-4b13-94ea-9a2c98c61c36)

## Account 
This page has a logout button which signs out the currently logged in user and the user is directed to the Sign in page. 

![image](https://github.com/dionnek83/recipe-app/assets/42995303/164d37c7-c2c7-4e6e-a05b-0b785f69c8b4)




