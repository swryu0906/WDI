class CreateGrowls < ActiveRecord::Migration
  def change
    create_table :growls do |t|
      t.string :author
      t.string :body
      # t.integer :bleat_id
      t.references :bleat, index: true, foreign_key: true

      t.timestamps
    end
  end
end
