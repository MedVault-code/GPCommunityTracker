# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: "Screening Form <#{Figaro.env.no_reply_email}>"
  layout 'bootstrap-mailer'
end
