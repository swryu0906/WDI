class TeamsController < ApplicationController
  before_action :set_team, only: [:show, :edit, :update, :destroy]

  def index
    @teams = Team.all
  end

  def new
    @team = Team.new
  end

  def create
    @team = Team.new(team_params)
    if @team.save
      redirect_to :index, notice: 'Team was created successfully!'
    else
      render :new
    end
  end

  def show
    # @team = Team.find(params[:id])
  end

  def edit
    # @team = Team.find(params[:id])
  end

  def update
    # @team = Team.find(params[:id])
    if @team.update(team_params)
      redirect_to @team, notice: 'Team was updated successfully!'
    else
      render :edit, notice: 'Error! Team was not updated successfully!'
    end
  end

  def destroy
    # @team = Team.find(params[:id])
    if @team.destroy
      flash[:notice] = 'Team was deleted successfully!'
    else
      flash[:notice] = 'Error! Team was not deleted successfully!'
    end
      redirect_to teams_path
  end

  private

  def set_team
    @team = Team.find(params[:id])
  end

  def team_params
    params.require(:team).permit(:name, :photo_url, :hometown, :num_of_championships)
  end
end
