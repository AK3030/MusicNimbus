require 'rails_helper'

RSpec.describe User, type: :model do

  # What to test?
  # Validations
  # Associations
  # Class Methods

  describe 'validations' do
    it 'should validate presence of username' do
      user = User.new(password:'bladerunner')
      expect(user.valid?).to be false
    end 

  end

  # describe 'associations'
  #
  # describe 'class methods'
end
