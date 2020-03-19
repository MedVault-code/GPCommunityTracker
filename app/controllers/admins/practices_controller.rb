module Admins
  class PracticesController < AdminController
    def index
      @practices = Practice.all.order('created_at desc')
    end
  end
end
