class ReservationsController < ApplicationController

	# before_action :set_variables
	def new
		@listing = Listing.find(params[:listing_id])
		@reservation = @listing.reservations.new
	end

	def create
		@listing = Listing.find(params[:listing_id])
		@r = current_user.reservations.new(start_date: params[:reservation][:start_date], end_date: params[:reservation][:end_date], listing_id: @listing.id)
		byebug
		@r.save
		redirect_to profile_show_path
	end
end
