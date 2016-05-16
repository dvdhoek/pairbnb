# Preview all emails at http://localhost:3000/rails/mailers/notification_mailer
class NotificationMailerPreview < ActionMailer::Preview
	def signup_email_preview
		NotificationMailer.signup_email
	end
end
