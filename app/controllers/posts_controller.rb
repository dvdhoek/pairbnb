class PostsController < ApplicationController
	def index
		@listings = Listing.all
		@header = Listing.last
	end
end

