class Student < ActiveRecord::Base
  validates :fname, :lname, :avatar, presence: true
  has_many :awards, dependent: :destroy
  has_many :badges, through: :awards, source: :badge, dependent: :destroy


  def getBadges

    self.badges.collect do |badge|
      badge.id
    end
  end

  def safe_show
    {
      id: self.id,
      fname: self.fname,
      lname: self.lname,
      avatar: self.avatar,
      badges: self.getBadges
    }
  end
end
