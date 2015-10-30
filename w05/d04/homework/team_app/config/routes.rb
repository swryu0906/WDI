Rails.application.routes.draw do

  root 'teams#index'
  # resources :teams


  # GET	/teams	index	display a list of all teams
  # POST	/teams	create	create a new team
  # GET	/teams/new	new	return an HTML form for creating a new team
  # GET	/teams/:id/edit	edit	return an HTML form for editing a team
  # GET	/teams/:id	show	display a specific team
  # PUT	/teams/:id	update	update a specific team
  # DELETE	/teams/:id	destroy	delete a specific team

  get 'teams' => 'teams#index'
  post 'teams' => 'teams#create'
  get 'teams/new' => 'teams#new', as: 'new_team'
  get 'teams/:id/edit' => 'teams#edit', as: 'edit_team'
  get 'teams/:id' => 'teams#show', as: 'team'
  put 'teams/:id' => 'teams#update'
  patch 'teams/:id' => 'teams#update'
  delete 'teams/:id' => 'teams#destroy'

end
