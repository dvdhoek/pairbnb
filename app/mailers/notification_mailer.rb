class NotificationMailer < ActionMailer::Base 
	default from: "devamsterdam@gmail.com"

	def signup_email(email)
		mail(to: email, subject: "Signup successful")
	end

end
