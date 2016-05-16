class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|

      t.timestamps null: false
      t.string :start_date
      t.string :end_date
      t.integer :listing_id
      t.integer :user_id
      t.integer :price, default: 0
    end
  end
end
