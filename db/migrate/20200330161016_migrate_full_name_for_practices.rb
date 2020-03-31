class MigrateFullNameForPractices < ActiveRecord::Migration[6.0]
  def up
    execute 'UPDATE practices p
            SET practice_full_name = p.practice_name;'
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
