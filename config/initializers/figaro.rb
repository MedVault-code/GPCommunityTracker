# frozen_string_literal: true

required_keys = []
required_keys << 'DOMAIN_ROOT' if ENV['HEROKU_APP_NAME'].nil?

# Please add your keys below with the template `required_keys << 'key_name'`
required_keys << 'no_reply_email'

# Do not modify
Figaro.require_keys(required_keys)
