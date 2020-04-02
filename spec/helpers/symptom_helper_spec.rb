# frozen_string_literal: true

require 'rails_helper'

RSpec.describe SymptomHelper, type: :helper do
  it 'should get a list of symptoms' do
    practice_form = FactoryBot.build(:practice_form,
                                     practice: FactoryBot.build(:practice),
                                     fever: true,
                                     cough: false,
                                     shortness_of_breath: false,
                                     sore_throat: false,
                                     runny_nose: false,
                                     diarrhoea: false,
                                     aches_pains: false,
                                     vomiting: true,
                                     fatigue: false,
                                     sudden_loss_of_sense_of_smell: true,
                                     headache: true)
    symptoms = symptoms_description(practice_form)
    expect(symptoms).to eq('Fever, Vomiting, Sudden loss of sense of smell, Headache')

    practice_form = FactoryBot.build(:practice_form,
                                     practice: FactoryBot.build(:practice),
                                     fever: false,
                                     cough: false,
                                     shortness_of_breath: false,
                                     sore_throat: false,
                                     runny_nose: false,
                                     diarrhoea: false,
                                     aches_pains: false,
                                     vomiting: false,
                                     fatigue: false,
                                     sudden_loss_of_sense_of_smell: false,
                                     headache: false)
    symptoms = symptoms_description(practice_form)
    expect(symptoms).to eq('No Symptoms')
  end
end
