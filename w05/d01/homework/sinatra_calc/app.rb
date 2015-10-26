class SinatraCalc < Sinatra::Base
  get '/' do
    redirect '/calc'
  end

  get '/calc' do
    erb :calc
  end

  get '/calc/' do
    erb :calc
  end

  get '/calc/*/*/*' do
    @args = params['splat']
    erb :result
  end

  get '/calc/*/*/*/' do
    @args = params['splat']
    erb :result
  end
end
