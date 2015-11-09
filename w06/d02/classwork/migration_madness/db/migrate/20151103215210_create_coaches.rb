class CreateCoaches < ActiveRecord::Migration
  def change
    create_table :coaches do |t|
      t.string    :name
      t.string    :coach_type

      t.timestamps
    end
  end
end
