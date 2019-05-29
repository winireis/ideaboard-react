class CreateIdeas < ActiveRecord::Migration[5.2]
  def change
    create_table :ideas do |t|
      t.references :user, foreign_key: true
      t.string :title
      t.text :description
      t.timestamps
    end
  end
end
