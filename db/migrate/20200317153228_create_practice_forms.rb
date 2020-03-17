class CreatePracticeForms < ActiveRecord::Migration[5.2]
  def change
    create_table :practice_forms do |t|
      t.references :practice

      t.string :first_name
      t.string :last_name
      t.date :dob

      t.string :address_1
      t.string :address_2
      t.string :city
      t.string :county
      t.string :postcode
      t.string :country

      t.string :email
      t.text :message

      t.text :symptoms
      t.string :symptoms_duration
      t.boolean :recent_travel
      t.boolean :self_isolating
      t.text :symptoms_outline
      t.text :pre_existing_medical_conditions

      t.timestamps
    end
  end
end
