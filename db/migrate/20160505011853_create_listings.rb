class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|

      t.timestamps null: false
      t.integer :user_id
      t.string :name
      t.string :description
      t.string :country
      t.string :address
      t.string :room_type
      t.string :accomodates
      t.integer :number_of_beds
      t.integer :number_of_bathrooms
      t.integer :price, default: 0
      t.json :images

      
    end
  end
end
