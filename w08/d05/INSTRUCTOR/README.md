# authtoken examples
play with these routes. you'll notice sometimes i use function expressions
explanation coming soon!

***BY THE WAY ARROW FUNCTIONS MESSUP MONGOOSE WATCH OUT*** 


# curl commands

signup

    curl -i -H "Content-Type: application/json" -d '{ "user" :{ "name" : "Enya", "email" : "enya@enya.com", "password" : "password" }}' http://localhost:3000/user/signup

signin / authenticate user

    curl -i -H "Content-Type: application/json" -d '{ "user" :{ "email" : "drake@drake.com", "password" : "password" }}' http://localhost:3000/user/auth

get users (use token)

    curl http://localhost:3000/user -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NjUwMDQwN2Q3NjY4NDI1MzFjYzhlYTEiLCJuYW1lIjoiRHJha2UiLCJlbWFpbCI6ImRyYWtlQGRyYWtlLmNvbSIsInBhc3N3b3JkIjoiJDJhJDA1JG9ZVjJBWFFPeDNnbTVNbm1YdWJLNS53ZFRPTDZvU1F0Q2t2ZW10N21SdmNGeE1uSWY0N0QyIiwiX192IjowfQ.udodYoD3eWcw9Xpk3_-HrAChN39qeDmU4gm6_2mQa4E"

update user (use token)

    curl -i -X PUT -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NjUwMDQwN2Q3NjY4NDI1MzFjYzhlYTEiLCJuYW1lIjoiRHJha2UiLCJlbWFpbCI6ImRyYWtlQGRyYWtlLmNvbSIsInBhc3N3b3JkIjoiJDJhJDA1JG9ZVjJBWFFPeDNnbTVNbm1YdWJLNS53ZFRPTDZvU1F0Q2t2ZW10N21SdmNGeE1uSWY0N0QyIiwiX192IjowfQ.udodYoD3eWcw9Xpk3_-HrAChN39qeDmU4gm6_2mQa4E" -H "Content-Type: application/json" -d '{ "user" :{ "email" : "drake@drake.com", "newEmail" : "meow@meow.com", "newName" : "syed" }}' http://localhost:3000/user/

delete!

    curl -i -X DELETE -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NjUwMDQwN2Q3NjY4NDI1MzFjYzhlYTEiLCJuYW1lIjoiRHJha2UiLCJlbWFpbCI6ImRyYWtlQGRyYWtlLmNvbSIsInBhc3N3b3JkIjoiJDJhJDA1JG9ZVjJBWFFPeDNnbTVNbm1YdWJLNS53ZFRPTDZvU1F0Q2t2ZW10N21SdmNGeE1uSWY0N0QyIiwiX192IjowfQ.udodYoD3eWcw9Xpk3_-HrAChN39qeDmU4gm6_2mQa4E" -H "Content-Type: application/json" -d '{ "user" :{ "email" : "drake@drake.com" }}' http://localhost:3000/user/
