# require 'pg'
require_relative 'spike'

module Hogwarts
  class Server < Sinatra::Base
    get '/' do
      @houses = $db.exec("SELECT * FROM houses ORDER BY id")
      erb :index
    end

    get '/students' do
      # conn = PGconn.open(dbname: "hogwarts_crud_test")
      @students = $db.exec("SELECT * FROM students ORDER BY id")
      erb :students
    end

    get '/students/:id' do
      @student = $db.exec("SELECT * FROM students WHERE id = #{params["id"]}")[0]
      @houses = $db.exec("SELECT * FROM houses")
      erb :student
    end

    post '/students/new' do
      if params["lname"] && params["fname"] && params["image"] && params["house_id"]
        # @student = $db.exec("INSERT INTO students(fname, lname, image, house_id) VALUES(#{params["fname"]}, #{params["lname"]}, #{params["image"]}, #{params["house_id"].to_i}) returning *")
        @student = $db.exec_params("INSERT INTO students(fname, lname, image, house_id) VALUES($1, $2, $3, $4) returning *", [params["fname"], params["lname"], params["image"], params["house_id"].to_i])

        redirect "/students/#{@student[0]['id']}"
      else
        @message = "Your input was not correct!"
        redirect "/"
      end
    end

    delete '/students/:id' do
      @student = $db.exec("DELETE FROM students WHERE id = #{params["id"]} RETURNING *")[0]
      @message = "Student #{@student["fname"]} #{@student["lname"]} was deleted."
      redirect "/"
    end

    put '/students/:id' do
      # @student = $db.exec("UPDATE students SET fname = #{params["fname"]}, lname = #{params["lname"]}, image = #{params["image"]}  WHERE id = #{params["id"]}")[0]
      @student = $db.exec_params("UPDATE students SET fname = $1, lname= $2 image= $3 house_id = $4 WHERE id = $5 returning *", [params["fname"], params["lname"], params["image"], params["house_id"].to_i, params["id"].to_i])
      @message = "Student #{@student["fname"]} #{@student["lname"]} was updated."
      redirect "/students/#{@student["id"]}"
    end

    get '/houses' do
      @houses = $db.exec("SELECT * FROM houses ORDER BY id")
      erb :houses
    end

    get '/houses/:id' do
      @house = $db.exec("SELECT * FROM houses WHERE id = #{params["id"]}")[0]
      @students = $db.exec("SELECT * FROM students WHERE house_id = #{params["id"]}")
      erb :house
    end
  end #server
end #hogwarts
