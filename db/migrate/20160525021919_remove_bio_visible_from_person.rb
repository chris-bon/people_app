class RemoveBioVisibleFromPerson < ActiveRecord::Migration
  def change
    remove_column :people, :bioVisible
  end
end
