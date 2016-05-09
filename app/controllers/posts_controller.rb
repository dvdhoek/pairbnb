class PostsController < ApplicationController
	def index
		@listings = Listing.all

		respond_to do |format|
	    	format.html  # index.html.erb
	    	format.json  { render :json => @posts }
		end	
	end
end

