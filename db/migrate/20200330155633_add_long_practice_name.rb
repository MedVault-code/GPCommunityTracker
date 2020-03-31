class AddLongPracticeName < ActiveRecord::Migration[6.0]
  def change
    add_column :practices, :practice_full_name, :string, default: '', null: false
  end
end
