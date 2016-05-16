class PaymentsController < ApplicationController
	protect_from_forgery :except => [:create]
	def new
		gon.client_token = generate_client_token
		 # @client_token = Braintree::ClientToken.generate
    # @reservation = Reservation.find(params[:id])
	end

	def create

		@current_user = current_user
		@result = Braintree::Transaction.sale(
              amount: @current_user.amount_due,
              payment_method_nonce: "fake-valid-nonce")
		if @result.success?
      @current_user.amount_due = 0
      @current_user.save
      redirect_to root_url, notice: "Congraulations! Your transaction has been successfully!"
    else
      redirect_to root_url, notice: "Your transaction has failed"
    end
	end


	private

	def generate_client_token
		Braintree::ClientToken.generate
	end

end
