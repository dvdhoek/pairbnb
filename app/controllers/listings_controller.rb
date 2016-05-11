class ListingsController < ApplicationController
	protect_from_forgery :except => [:update]
	def new 
		@listing = Listing.new
	end 

	def create
		@listing = current_user.listings.new(listing_params)	 #it doesn't store the user id somehow??
		@listing.save
		byebug
		redirect_to root_path
	end 

	def show
		@listings = Listing.all
	end 

	def edit
		@listing = Listing.find(params[:id])
	end

	def update
		@listing = Listing.find(params[:listingid])
		byebug
		if params[:method] == "title"
			@listing.name = params[:newval]
		elsif params[:method] == "description"
			@listing.description = params[:newval]
		elsif params[:method] == "country"
			@listing.country = params[:newval]
		elsif params[:method] == "address"
			@listing.address = params[:newval]
		elsif params[:method] == "room_type"
			@listing.room_type = params[:newval]
		elsif params[:method] == "accomodates"
			@listing.accomodates = params[:newval]
		elsif params[:method] == "beds"
			@listing.number_of_beds = params[:newval]
		elsif params[:method] == "bathrooms"
			@listing.number_of_bathrooms = params[:newval]
		end
		@listing.save
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
		params.require(:listing).permit(:name, :description, :country, :address, :room_type, :accomodates, :number_of_beds, :number_of_bathrooms, {images: []})
	end 

end

