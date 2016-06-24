class User < ActiveRecord::Base

  attr_reader :password

    validates :name, :session_token, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  def self.find_by_credentials(user_params)
    user = User.find_by_name(user_params[:name])
    user.try(:is_password?, user_params[:password]) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def self.safe_show
    badges = Badge.all.collect do |badge|
      badge.safe_show
    end

    students = Student.all.collect do |student|
      student.safe_show
    end

    {
      badges: badges,
      students: students
    }
  end
end
