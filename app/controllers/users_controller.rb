class UsersController < ApplicationController
	protect_from_forgery :except => [:update]

	def show
		@user = User.find(params[:userid])
	end

	def update
		@user = User.find(current_user.id)
		@user.update(params[:method] => params[:newval])
		@user.save
	end
end
