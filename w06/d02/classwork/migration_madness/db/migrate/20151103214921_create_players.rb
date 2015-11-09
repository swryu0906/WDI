class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string      :name
      t.string      :sneaker_type
      t.string      :sneaker_name
      t.string      :bio
      t.references  :team

      t.timestamps
    end
  end
end
