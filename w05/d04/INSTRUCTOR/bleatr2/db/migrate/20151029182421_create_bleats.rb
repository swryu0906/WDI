class CreateBleats < ActiveRecord::Migration
  def change
    create_table :bleats do |t|
      t.string :author
      t.string :body

      t.timestamps
    end
  end
end
