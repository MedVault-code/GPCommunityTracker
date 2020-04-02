# frozen_string_literal: true

class PracticeMailer < ApplicationMailer
  add_template_helper(SymptomHelper)

  def notify_practice
    @practice_form = params[:practice_form]

    make_bootstrap_mail(
      to: @practice_form.practice.email,
      from: "Screening Form <#{Figaro.env.no_reply_email}>",
      subject: 'Screening Form Submission',
      reply_to: @practice_form.email
    )
  end

  def notify_patient
    @practice_form = params[:practice_form]

    make_bootstrap_mail(
      to: @practice_form.email,
      from: "Screening Form <#{Figaro.env.no_reply_email}>",
      subject: 'COVID-19 Screening Form Submission'
    )
  end

  def welcome_message
    @practice = params[:practice]

    make_bootstrap_mail(
      to: @practice.email,
      bcc: 'support@gpbuddy.ie',
      from: "Screening Form <#{Figaro.env.no_reply_email}>",
      subject: 'Account Created'
    )
  end
end
