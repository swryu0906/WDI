# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

t1 = Team.create(name: "Baltimore Orioles", photo_url: "https://cartoonbird.files.wordpress.com/2014/01/john-adsit-orioles-logo1.png", hometown: "Baltimore, MD", num_of_championships: 1)
t2 = Team.create(name: "New York Mets", photo_url: "http://toddradom.com/wp-content/uploads/2014/09/21st-CENTURY-METS_01.png", hometown: "Corona, NY", num_of_championships: 2)
t3 = Team.create(name: "New York Yankees", photo_url: "http://vignette1.wikia.nocookie.net/logopedia/images/9/98/7204.gif/revision/latest?cb=20110801033253", hometown: "Bronx, NY", num_of_championships: 23)
t4 = Team.create(name: "Seattle Mariners", photo_url: "http://www.logoshak.com/~asgsport/images/Seattle_Mariners.gif", hometown: "Seattle, WA", num_of_championships: 3)
t5 = Team.create(name: "San Diego Padres", photo_url: "http://logonoid.com/images/san-diego-padres-logo.png", hometown: "San Diego, CA", num_of_championships: 4)
t6 = Team.create(name: "Arizona Diamondbacks", photo_url: "http://content.fathead.com/products/63/63-63237.jpg", hometown: "Phoenix, AZ", num_of_championships: 2)
t7 = Team.create(name: "Los Angeles Dodgers", photo_url: "http://dodgersnationcom.c.presscdn.com/wp-content/uploads/2013/11/6gwdfu3zzbrkedgh6ielhq06e.gif", hometown: "Los Angeles, CA", num_of_championships: 7)
t8 = Team.create(name: "Cleveland Indians", photo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Cleveland_Indians_logo.svg/791px-Cleveland_Indians_logo.svg.png", hometown: "Cleveland, OH", num_of_championships: 2)
