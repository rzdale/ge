class CreateDonations < ActiveRecord::Migration
  def change
    create_table :donations do |t|
      t.float :amount, null:false
      t.timestamps null:false
    end
  end
end
