class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name
      t.text :short_description
      t.text :long_description
      t.string :live_link
      t.string :code_link

      t.timestamps
    end
  end
end
