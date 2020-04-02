# frozen_string_literal: true

FactoryBot.define do
  factory :practice_form do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    dob { 50.years.ago }
    email { Faker::Internet.email }
    address_1 { Faker::Address.full_address }
    city { 'Dublin' }
    county { 'Dublin' }
    postcode { 'D08 A3456' }
    country { 'Ireland' }
    message { 'Lorem Ipsum.' }
    symptoms_duration { 'Today' }
    recent_travel { false }
    self_isolating { true }
    symptoms_outline { 'I have a very bad headache and chesty cough.' }
    pre_existing_medical_conditions { 'Asthma and diabetic' }
    severity { 'Mild' }
    ppsn { '82564747J' }
    phone { '01 364 5860' }
    existing_patient { true }
    healthcare_worker { false }
    coronavirus_contact { false }
    risk_group { true }
    household_risk_group { true }
    prison_service_worker { false }
    pregnant { false }
    care_facility_staff { false }
    fever { true }
    cough { true }
    shortness_of_breath { false }
    sore_throat { false }
    runny_nose { false }
    diarrhoea { true }
    aches_pains { false }
    vomiting { false }
    fatigue { true }
    sudden_loss_of_sense_of_smell { false }
    headache { true }
    symptoms {}
  end
end
