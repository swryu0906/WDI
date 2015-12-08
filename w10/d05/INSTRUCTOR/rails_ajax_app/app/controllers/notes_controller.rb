class NotesController < ApplicationController

	def index
		render json: Note.all
	end

	def show
		render json: Note.find(params[:id])
	end

	def create
		note = Note.create(note_params)
		render json: note
	end

	def update
		note = Note.find(params[:id])
		note.update(note_params)
		render json: note
	end

	def delete
		note = Note.find(params[:id])
		note.destroy
		render json: Note.all
	end

	private

	def note_params
		params.require(:note).permit(:title, :content)
	end

end