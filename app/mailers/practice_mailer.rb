class PracticeMailer < ApplicationMailer
  def notify_practice
    @practice_form = params[:practice_form]
    mail(to: @practice_form.practice.email, subject: 'Screening Form Submission')

    make_bootstrap_mail(
      to: @practice_form.practice.email,
      from: 'Screening Form <no-reply@screeningform.com>',
      bcc: 'brian@minicorphq.com',
      subject: 'Screening Form Submission'
    )
  end
end
