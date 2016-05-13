class PostsController < ApplicationController
	def index
		@listings = Listing.all
	end
end

