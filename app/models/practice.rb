class Practice < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable


   extend FriendlyId
   friendly_id :practice_name, use: :slugged

   has_many :practice_forms
end
