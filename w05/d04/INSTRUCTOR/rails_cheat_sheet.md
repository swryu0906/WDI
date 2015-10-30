# rails commmands / generators
---
* rails server 
	*  starts server
* rails console
	* interactive console (let us touch database) 
* rails new <name> --database=postgresql
* rails generate migraition <name> 
	* CreateMigrationName or action_migration_name
	* be descriptive
	
# rake commands
---
* rake db:create
	* creates database 
* rake db:migrate
	* runs our migrations 
* rake db:drop
	 * deletes our db
* rake db:rollback
	* your *ONE* undo
* rake -T
	* shows all of our rake commands
* rake routes
	* shows all of our existing routes
 * rake db:seed
 	* runs our seed file

# directories
---
*	app/controllers
*	db
	* db/migrate
*	config
*	app/views
*	app/models


# files
---
* routes.rb
* schema.rb
* seeds.rb
*  our view files
*  our model files
*  our controller files
*  Gemfile