# Restaurant-Recommendation


1. What is your project idea?

Our project idea is to create a program that recommends a restaurant based on certain things that you input. For example, you can input your location, the kind of food you want, and your price range, and our website will recommend a restaurant given the parameters that one enters. 

2. What are your motivations for this idea?

We like going to restaurants and trying new places, but there wasn’t an easy way to search.

3. What new computer science topics outside of what we’ve learned / going to learn will you need to learn to complete your project?

Web app design, and any specific type of code and syntax 

4. What do you need to code for your front-end application? (All projects need some front-end unless you get teacher permission otherwise!)

We need to create a web page that looks appealing. Once filtering your search, you should be able to click buttons to view images of the restaurant and reviews. 

5. What do you need to code for a back-end application / storage? (All projects need some back-end)

There should be a database that includes information about each restaurant. Endpoints should retrieve that information (reviews, website link, menu, images, etc.).
https://www.kaggle.com/datasets/popoandrew/restaurant-week-2018

6. What other ideas did you consider but didn’t end up doing? (you can provide a link to a live collab)
* Restaurant recommendation
* sport ranking
* recipes based on what ingredients you have
* outfit recommender

MVP (Minimum Viable Product) 
* Has a search functionality that returns recommended restaurants based on the user’s preferences and location.

Extra functionality #1 
* A way to add restaurants and reviews as a user.

Extra functionality #2 
* A way for users to add images

## Get all restaurants that serve a certain cuisine:
The url is: localhost:4000/cuisine (get endpoint)
Write cuisine in body in JSON (ex. {"cuisine":"Seafood"})

## Get all restaurants in a certain zipcode:
The url is: localhost:4000/zipcode (get endpoint)
Write zipcode in body in JSON (ex. {"zipcode":"10021"})

## Get all restaurants with a certain name:
The url is: localhost:4000/restaurant (get endpoint)
Write name is body in JSON (ex. {"name":"Tavern on the Green"})







