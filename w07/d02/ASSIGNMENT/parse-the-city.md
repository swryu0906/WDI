# parse the city

So we're going to be to be **parsing** JSON data sets for all NYC Wi-Fi Hotspot Locations with the data set given. (see the repo)

Just `require` it in your app:

      var dataset = require('./dataset.json')

Make a express app that walks through the data set which is just a javascript
object. So look into using `for ... in`, `while`, and `for` loops to iterate
through all the rows.


### NYC Wi-Fi Hotspot Locations

the dataset is provided but you can also download a more recent one here:

    curl -O https://nycopendata.socrata.com/api/views/h9gi-nx95/rows.json



create an `end points`/`routes` for:

- total wifi hotspots `total/hotspots`
- search for wifi by zip code `/zipcode/`
- by type `/type/free` or `type/limited`
- by provider with most hot spots in the city `/provider`
