play with these routes. you'll notice sometimes i use function expressions
explanation coming soon!

# curl commands
curl -i -H "Content-Type: application/json" -d '{ "user" :{ "name" : "Drake", "email" : "drake@drake.com", "password" : "password" }}' http://localhost:3000/user/signup

curl -i -H "Content-Type: application/json" -d '{ "user" :{ "email" : "drake@drake.com", "password" : "password" }}' http://localhost:3000/user/auth

curl -i -H "Content-Type: application/json" -d '{ "user" :{ "email" : "drake@drake.com", "password" : "password" }}' http://localhost:3000/user/auth
curl http://localhost:3000/user --header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NjUwMDQwN2Q3NjY4NDI1MzFjYzhlYTEiLCJuYW1lIjoiRHJha2UiLCJlbWFpbCI6ImRyYWtlQGRyYWtlLmNvbSIsInBhc3N3b3JkIjoiJDJhJDA1JG9ZVjJBWFFPeDNnbTVNbm1YdWJLNS53ZFRPTDZvU1F0Q2t2ZW10N21SdmNGeE1uSWY0N0QyIiwiX192IjowfQ.udodYoD3eWcw9Xpk3_-HrAChN39qeDmU4gm6_2mQa4E"
