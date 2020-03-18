class AddAdditionalFieldsToPracticeForm < ActiveRecord::Migration[5.2]
  def change
    add_column :practice_forms, :ppsn, :string
    add_column :practice_forms, :phone, :string

    add_column :practice_forms, :existing_patient, :boolean
  end
end
