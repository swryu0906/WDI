class BlueEyes < Sinatra::Base
  get '/' do
    erb "Hi, it's Sinatra server.... Random no: #{Random.new.rand(10)}"
  end

  get '/songs' do
    @songs = ["Fly me to the moon", "New York", "New York, My Way"]
    erb :songs
  end

  get '/moresongs' do
    @moresongs = ["It\'s Raining Men", "Mack the Knife", "Moster Mash"]
    erb :moresongs
  end

  get '/listsongs/:song' do
    @song = params[:song]
    erb :listsongs
  end

  get '/tweets' do
    @tweets = [{ name: "Steve", comment: "Hi, there!" }, { name: "Steve", comment: "I hate Ruby!"}, { name: "Anthony", comment: "I am a Ruby zombie!"}]
    erb :tweets
  end




  get '/hello/:name' do |n|
    "Hello #{n}"
  end

  get '/download/*.*' do |path, ext|
    params['splat']
  end

  get '/say/*/to/*' do
    # e.g.) /say/hello/to/world  => ["hello", "world"]
    "Say #{params['splat'][0]} to #{params['splat'][1]}"
  end

  get '/whattherequest' do
    "#{request.inspect}"
  end

  get '/posts/' do
    title = params['title']
    author = params['author']
    "#{title}, #{author}"
  end

  get '/madlib' do
    "A #{params['person']} in #{params['city']} was arrested this morning after he #{params['verb']} in front of #{params['location']}, no one saw #{params['adjective']} scene."

  end

end
