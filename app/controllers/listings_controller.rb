class ListingsController < ApplicationController
	protect_from_forgery :except => [:update]
	def new 
		@listing = Listing.new
	end 

	def create
		@listing = current_user.listings.new(listing_params)	 
		@listing.save
		redirect_to root_path
	end 

	def show
		@listing = Listing.find(params[:id])
		@reservation = @listing.reservations.new
	end 

	def edit
		@listing = Listing.find(params[:id])
	end

	def update
		@listing = Listing.find(params[:id])
		@listing.update(params[:method] => params[:newval])
		@listing.save
	end

	def destroy
		@listing = Listing.find(params[:id])
		@listing.delete
		redirect_to root_path
	end

	private
	def listing_params
		params.require(:listing).permit(:name, :description, :country, :address, :room_type, :accomodates, :number_of_beds, :number_of_bathrooms, :price, {images: []})
	end 

end

