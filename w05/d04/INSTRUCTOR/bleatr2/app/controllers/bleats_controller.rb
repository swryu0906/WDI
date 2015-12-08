class BleatsController < ApplicationController

  def index
    @bleats = Bleat.all
  end

  def show
    @bleat = Bleat.find(params[:id])
  end

  def new
    @bleat = Bleat.new
  end

  def create
    @bleat = Bleat.new(bleat_params)

    if @bleat.save
      redirect_to("/bleats")
    else
      render :new
    end
  end

  private

  def bleat_params
    params.require(:bleat).permit(
      :author,
      :body
    )
  end
end
