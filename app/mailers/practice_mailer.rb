class PracticeMailer < ApplicationMailer
  def notify_practice
    @practice_form = params[:practice_form]

    make_bootstrap_mail(
      to: @practice_form.practice.email,
      from: 'Screening Form <no-reply@screeningform.com>',
      subject: 'Screening Form Submission'
    )
  end

  def welcome_message
    @practice = params[:practice]

    make_bootstrap_mail(
      to: @practice.email,
      bcc: 'support@gpbuddy.ie',
      from: 'Screening Form <no-reply@screeningform.com>',
      subject: 'Account Created'
    )
  end
end
