class Badge < ActiveRecord::Base
  validates :title, :description, presence: true
  has_many :awards, dependent: :destroy
  has_many :students, through: :awards, source: :students, dependent: :destroy

  def safe_show
    {
      id: self.id,
      title: self.title,
      description: self.description,
    }
  end

end
