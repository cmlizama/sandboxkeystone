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

