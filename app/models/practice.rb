# frozen_string_literal: true

class Practice < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  extend FriendlyId
  friendly_id :practice_name, use: :slugged

  validates :practice_name, uniqueness: { case_sensitive: false }

  has_many :practice_forms

  after_create :send_welcome_email

  def send_welcome_email
    PracticeMailer.with(practice: self).welcome_message.deliver_now!
  end
end
