class CreateDistanceTable < ActiveRecord::Migration[5.0]
    def change
        create_table :distances do |t|
            t.string :name
            t.integer :lightyears
            t.integer :combination_id

            t.timestamps 
        end
    end
end
