class PracticeFormsController < ApplicationController
  def new
    @practice = Practice.friendly.find(params[:practice])
    @practice_form = @practice.practice_forms.build
  end

  def create
  end
end
