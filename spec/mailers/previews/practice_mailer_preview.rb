# frozen_string_literal: true

# Preview all emails at http://localhost:5000/rails/mailers/practice_mailer
class PracticeMailerPreview < ActionMailer::Preview
  def notify_practice
    practice = FactoryBot.create(:practice)
    PracticeMailer
      .with(practice_form: FactoryBot.create(:practice_form, practice: practice))
      .notify_practice
  end

  def notify_patient
    practice = FactoryBot.create(:practice)
    PracticeMailer
      .with(practice_form: FactoryBot.create(:practice_form, practice: practice))
      .notify_patient
  end

  def welcome_message
    PracticeMailer.with(practice_form: FactoryBot.create(:practice))
                  .welcome_message
  end
end
