class ListingsController < ApplicationController
	def new 
		@listing = Listing.new
	end 

	def create
		@listing = current_user.listings.new(listing_params)	 #it doesn't store the user id somehow??
		@listing.save
		redirect_to root_path
	end 

	def show
		@listings = Listing.all
	end 

	def edit
		@listing = Listing.find(params[:id])
	end

	def update
		redirect_to root_path
	end

	def destroy
		@listing = Listing.find(params[:id])
		@listing.delete
		redirect_to root_path
	end

	def index
	end

	private
	def listing_params
		params.require(:listing).permit(:name, :description, :country, :address, :room_type, :accomodates, :number_of_beds, :number_of_bathrooms)
	end 

end

