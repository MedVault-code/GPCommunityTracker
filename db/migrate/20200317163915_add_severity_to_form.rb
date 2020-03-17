class AddSeverityToForm < ActiveRecord::Migration[5.2]
  def change
    add_column :practice_forms, :severity, :string
  end
end
