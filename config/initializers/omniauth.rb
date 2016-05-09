Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, ENV["app_id"], ENV["app_secret"],
  scope: 'public_profile, email', info_fields: 'email, first_name, last_name, gender, birthday'
end