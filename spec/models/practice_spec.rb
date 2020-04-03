require 'rails_helper'

RSpec.describe Practice, type: :model do
  describe "Validation" do
    it { should validate_presence_of(:county) }
  end
end
