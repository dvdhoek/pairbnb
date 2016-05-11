class Listing < ActiveRecord::Base
	mount_uploaders :images, AvatarUploader
	has_many :reservations
	belongs_to :user
end
