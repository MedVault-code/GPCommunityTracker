class AdminController < ApplicationController
  before_action :authenticate_admin!

  private

  def sort_column
    sortables = User.column_names
    sortables.include?(params[:sort]) ? params[:sort] : "id"
  end

  def sort_direction
    %w[asc desc].include?(params[:direction]) ? params[:direction] : "desc"
  end
end
