# frozen_string_literal: true

module SymptomHelper
  def symptom_checkbox(symptom)
    "[#{symptom ? '<b>X</b>' : ' '}]".html_safe
  end
end
