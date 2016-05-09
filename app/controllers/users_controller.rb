class UsersController < ApplicationController
	protect_from_forgery :except => [:update]

	def show

		@user = User.find(params[:userid])
	end

	def update

		@user = User.find(params[:userid])
		byebug
		if params[:method] == "email"
			@user.email = params[:newval]
		elsif params[:method] == "first_name"
			@user.first_name = params[:newval]
		elsif params[:method] == "last_name"
			@user.last_name = params[:newval]
		elsif params[:method] == "date_of_birth"
			@user.date_of_birth = params[:newval]
		end
		@user.save
		redirect_to profile_show_path
	end
end