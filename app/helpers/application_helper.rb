module ApplicationHelper
	def user_payment
		if user.id == session[:user_id]
			@current_user ||= User.find(session[:user_id])
		end
	end
end
