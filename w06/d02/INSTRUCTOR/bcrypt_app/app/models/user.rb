class User < ActiveRecord::Base
  has_secure_password

  validates :email, presence: true
  validates :password, length: {in: 6..20 }
  validates :password_confirmation, presence: true
end
