class Badge < ActiveRecord::Base
  validates :title, :description, presence: true
  has_many :awards
  has_many :students, through: :awards, source: :students

  def safe_show
    {
      id: self.id,
      title: self.title,
      description: self.description,
    }
  end

end
