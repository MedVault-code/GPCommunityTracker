# frozen_string_literal: true

module SymptomHelper
  def symptom_checkbox(symptom)
    "[#{symptom ? '<b>X</b>' : ' '}]".html_safe
  end

  def symptoms_description(practice_form)
    # symptom_methods = %i[
    #   fever
    #   cough
    #   shortness_of_breath
    #   sore_throat
    #   runny_nose
    #   diarrhoea
    #   aches_pains
    #   vomiting
    #   fatigue
    #   sudden_loss_of_sense_of_smell
    #   headache
    # ]

    possible_symptoms = {
      fever: 'Fever',
      cough: 'Cough',
      shortness_of_breath: 'Shortness of Breath',
      sore_throat: 'Sore throat',
      runny_nose: 'Runny nose',
      diarrhoea: 'Diarrhoea',
      aches_pains: 'Aches & Pains',
      vomiting: 'Vomiting',
      fatigue: 'Fatigue',
      sudden_loss_of_sense_of_smell: 'Sudden loss of sense of smell',
      headache: 'Headache'
    }
    symptoms = []

    possible_symptoms.each do |symptom_method, symptom_description|
      if practice_form.public_send(symptom_method)
        symptoms << symptom_description
      end
    end

    if symptoms.empty?
      'No Symptoms'
    else
      symptoms.join(', ')
    end
  end
end
