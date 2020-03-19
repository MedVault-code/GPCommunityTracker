module Admins
  class SessionsController < Devise::SessionsController
    protected

    def after_sign_in_path_for(resource)
      stored_location_for(resource) || :admins_root
    end
  end
end
