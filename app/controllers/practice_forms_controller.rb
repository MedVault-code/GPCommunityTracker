class PracticeFormsController < ApplicationController
  def new
    @practice = Practice.friendly.find(params[:practice])
    @practice_form = @practice.practice_forms.build
  end

  def create
    @practice = Practice.friendly.find(params[:practice])
    @practice_form = @practice.practice_forms.create(practice_form_params)

    if @practice_form.persisted?
      redirect_to practice_form_complete_path(practice: @practice.slug), flash: {
          notice: "Form submitted successfully.",
        }
    else
      flash[:alert] = @practice_form.errors.full_messages.join(". ")
      render action: :new
    end
  end

  def complete
    @practice = Practice.friendly.find(params[:practice])
  end

  private

  def practice_form_params
    params.require(:practice_form)
      .permit(
        :practice_id,
        :first_name,
        :last_name,
        :dob,
        :address_1,
        :address_2,
        :city,
        :county,
        :postcode,
        :country,
        :email,
        :message,
        :symptoms,
        :symptoms_duration,
        :severity,
        :recent_travel,
        :self_isolating,
        :symptoms_outline,
        :pre_existing_medical_conditions,
        :ppsn,
        :phone,
        :existing_patient
      )
  end
end
