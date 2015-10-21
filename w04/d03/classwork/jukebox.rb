class Song
  @@plays = 0

  def initialize(name, artist, duration)
    @name = name
    @artist = artist
    @duration = duration
    @plays = 0
  end

  # # getter
  # def name
  #   @name
  # end
  #
  # def artist
  #   @artist
  # end
  #
  # def duration
  #   @duration
  # end
  #
  # # setter
  # def duration=(duration)
  #   @duration = duration
  # end

  # getter
  attr_reader :name, :artist, :duration
  # setter
  attr_writer :duration

  def duration_in_minutes
    @duration / 60.0    #float
  end

  def duration_in_minutes= (value)
    @duration = (value * 60).to_i
  end

  def play
    @plays += 1
    @@plays += 1
    "This song: #{@plays} plays, total #{@@plays} plays"
  end
end


a_song = Song.new("Ruby", "Apples in Stores", 3000)
# a_sSong = Song.new
puts a_song.inspect
# a_song.name = "Hi"
puts "a_song.name = #{a_song.name}"
puts "a_song.name = #{a_song.artist}"
puts "a_song.duration = #{a_song.duration}"
a_song.duration = 200
puts a_song.duration

puts "a_song.duration_in_minutes = #{a_song.duration_in_minutes}"


# a_song.play
puts a_song.play
puts a_song.play
another_song = Song.new("Help!", "", 400)
puts another_song.play
