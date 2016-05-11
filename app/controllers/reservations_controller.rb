class ReservationsController < ApplicationController

	# before_action :set_variables
	def new
		@listing = Listing.find(params[:listing_id])
		@reservation = @listing.reservations.new
	end

	def create
		byebug
		@listing = Listing.find(params[:listing_id])
		@start_date, @end_date = params[:datefilter].split(' - ')
		@r = current_user.reservations.new(start_date: @start_date, end_date: @end_date, listing_id: @listing.id)
		@r.save
		redirect_to profile_show_path
	end
end
