# frozen_string_literal: true

class PracticeFormsController < ApplicationController
  def new
    @practice = Practice.friendly.find(params[:practice])
    @practice_form = @practice.practice_forms.build
  end

  def create
    @practice = Practice.friendly.find(params[:practice])
    @practice_form = @practice.practice_forms.create(practice_form_params)

    if @practice_form.persisted?
      PracticeMailer.with(practice_form: @practice_form).notify_practice.deliver_now!
      PracticeMailer.with(practice_form: @practice_form).notify_patient.deliver_now!

      redirect_to practice_form_complete_path(practice: @practice.slug), flash: {
        notice: 'Form submitted successfully.'
      }
    else
      flash[:alert] = @practice_form.errors.full_messages.join('. ')
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
            :care_facility_staff,
            :fever,
            :cough,
            :shortness_of_breath,
            :sore_throat,
            :runny_nose,
            :diarrhoea,
            :aches_pains,
            :vomiting,
            :fatigue,
            :sudden_loss_of_sense_of_smell,
            :headache
          )
  end
end
