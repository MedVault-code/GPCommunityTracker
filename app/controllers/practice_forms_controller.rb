class PracticeFormsController < ApplicationController
  def new
    @practice = Practice.friendly.find(params[:practice])
    @practice_form = @practice.practice_forms.build
  end

  def create
    @practice = Practice.friendly.find(params[:practice])
    @practice_form = @practice.practice_forms.create(practice_form_params)

    symptoms_array = params[:practice_form][:symptoms].to_a
    symptoms_array.reject! {|x| x == "0"}

    @practice_form.symptoms = symptoms_array.to_json
    @practice_form.save

    if @practice_form.persisted?
      PracticeMailer.with(practice_form: @practice_form).notify_practice.deliver_now!
      PracticeMailer.with(practice_form: @practice_form).notify_patient.deliver_now!

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
        :existing_patient,
        :healthcare_worker,
        :coronavirus_contact,
        :risk_group,
        :household_risk_group,
        :prison_service_worker,
        :pregnant,
        :care_facility_staff
      )
  end
end
