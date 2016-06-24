class Award < ActiveRecord::Base
  validates :student_id, :badge_id, presence: true
  belongs_to :student
  belongs_to :badge
end
