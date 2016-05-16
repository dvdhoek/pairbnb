class PostmanWorker

  include Sidekiq::Worker
  require 'byebug'
  def perform(email)
  	NotificationMailer.signup_email(email).deliver_now
  end
end
