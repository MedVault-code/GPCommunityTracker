class ApplicationMailer < ActionMailer::Base
  default from: 'Screening Form <no-reply@screeningform.com>'
  layout 'bootstrap-mailer'
end
