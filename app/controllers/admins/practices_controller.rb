# frozen_string_literal: true

module Admins
  class PracticesController < AdminController
    def index
      @practices = Practice.all.order('created_at desc')
    end

    def edit
      @practice = Practice.friendly.find(params[:id])
    end

    def update
      @practice = Practice.friendly.find(params[:id])

      if @practice.update(practice_params)
        redirect_to admins_practices_path, notice: 'Practice successfully updated'
      else
        flash[:alert] = @practice.errors.full_messages.to_sentence
        render action: :edit
      end
    end

    def destroy
      @practice = Practice.friendly.find(params[:id])

      @message = if @practice.destroy
                   'Practice successfully deleted'
                 else
                   @practice.errors.full_messages.to_sentence
                 end

      redirect_to admins_practices_path(@building), notice: @message
    end

    private

    def practice_params
      params.require(:practice)
            .permit(
              :first_name,
              :last_name,
              :practice_name,
              :practice_full_name,
              :email,
              :practice_phone,
              :address,
              :slug
            )
    end
  end
end
