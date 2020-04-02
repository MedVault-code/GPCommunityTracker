class AddFieldsToPracticeForms < ActiveRecord::Migration[6.0]
  def change
    add_column :practice_forms, :fever, :boolean, default: false
    add_column :practice_forms, :cough, :boolean, default: false
    add_column :practice_forms, :shortness_of_breath, :boolean, default: false
    add_column :practice_forms, :sore_throat, :boolean, default: false
    add_column :practice_forms, :runny_nose, :boolean, default: false
    add_column :practice_forms, :diarrhoea, :boolean, default: false
    add_column :practice_forms, :aches_pains, :boolean, default: false
    add_column :practice_forms, :vomiting, :boolean, default: false
    add_column :practice_forms, :fatigue, :boolean, default: false
    add_column :practice_forms, :sudden_loss_of_sense_of_smell, :boolean, default: false
    add_column :practice_forms, :headache, :boolean, default: false
  end
end
