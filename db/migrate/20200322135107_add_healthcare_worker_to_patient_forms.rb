class AddHealthcareWorkerToPatientForms < ActiveRecord::Migration[5.2]
  def change
    add_column :practice_forms, :healthcare_worker, :boolean
    add_column :practice_forms, :coronavirus_contact, :boolean
  end
end
