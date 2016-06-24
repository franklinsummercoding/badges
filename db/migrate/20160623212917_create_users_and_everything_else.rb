class CreateUsersAndEverythingElse < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.timestamps
    end

    create_table :students do |t|
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :avatar, null: false
      t.timestamps
    end

    create_table :badges do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.timestamps
    end

    create_table :awards do |t|
      t.integer :student_id, null: false
      t.integer :badge_id, null: false
      t.timestamps
    end

    add_index :awards, [:student_id, :badge_id], unique: true
  end
end
