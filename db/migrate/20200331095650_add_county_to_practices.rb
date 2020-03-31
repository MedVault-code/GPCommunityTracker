class AddCountyToPractices < ActiveRecord::Migration[5.2]
  def change
    add_column :practices, :county, :string

    #Update for exist practices
    Practice.update_all(county: "Other")
  end
end
