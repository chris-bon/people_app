Rails.application.routes.draw do
  root 'api/v1/people#index'
  namespace :api do
    namespace :v1 do
      get '/people' => 'people#index'
    end
  end
end
