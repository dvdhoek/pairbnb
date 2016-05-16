class ReservationsController < ApplicationController

	# before_action :set_variables
	def new
		@listing = Listing.find(params[:listing_id])
		@reservation = @listing.reservations.new
	end

	def create
		@listing = Listing.find(params[:listing_id])
		@r = current_user.reservations.new(start_date: params[:reservation][:start_date], end_date: params[:reservation][:end_date], listing_id: @listing.id)
		@r.save
		@number_of_days = @r.end_date.to_date - @r.start_date.to_date
		@number_of_days = @number_of_days.to_i
		@amount_due = @number_of_days * @listing.price
		@r.price = @amount_due
		@r.save
		current_user.amount_due += @amount_due
		current_user.save
		redirect_to profile_show_path
	end
end
