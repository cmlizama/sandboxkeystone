## Hey Jenny

## Live demo
  http://sandboxkeystone.herokuapp.com/


## To Start
* `npm install`
* `sudo mongod`
* `mongo`
* `supervisor keystone`


##To add a page

-A view, a js file in the views, a models.js, an app.get route in routes/index.js, and add the route in the nav bar if needed.


## Light deployment rundown:
  `heroku create`
  `heroku apps:rename yourName`
  `heroku addons:add mongolab:sandbox`
  `git commit "commit message" `
  `git push heroku master`

## views to add
    about
    events
    get involved
    apply

## to do
	alphabetize members bullet nav and main views
	add text to home page over member images
	li: a.fa.fa-facebook(href="https://sandboxcenter.eventbrite.com", target="_blank")


