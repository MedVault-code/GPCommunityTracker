class AddNewFieldsToPatientForms < ActiveRecord::Migration[5.2]
  def change
    add_column :practice_forms, :risk_group, :boolean
    add_column :practice_forms, :household_risk_group, :boolean
    add_column :practice_forms, :prison_service_worker, :boolean
    add_column :practice_forms, :pregnant, :boolean
    add_column :practice_forms, :care_facility_staff, :boolean
  end
end
