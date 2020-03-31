# frozen_string_literal: true

module ApplicationHelper
  def self.domain_root
    ENV['DOMAIN_ROOT'] || "https://#{ENV.fetch('HEROKU_APP_NAME')}.herokuapp.com/"
  end

  def flash_class(level)
    case level
    when 'notice' then 'alert alert-primary'
    when 'success' then 'alert alert-primary'
    when 'alert' then 'alert alert-danger'
    when 'error' then 'alert alert-danger'
    end
  end
end
