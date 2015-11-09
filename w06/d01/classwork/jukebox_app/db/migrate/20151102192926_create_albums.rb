class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string    :title
      t.poster    :string

    end
  end
end
