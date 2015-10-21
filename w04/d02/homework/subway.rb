# n = [
#   "Times Square",
#   "34th",
#   "28th",
#   "23rd",
#   "Union Square",
#   "8th"
# ]
#
# l = [
#   "8th Ave",
#   "6th Ave",
#   "Union Square",
#   "3rd Ave",
#   "1st Ave"
# ]
#
# six = [
#   "Grand Central",
#   "33rd",
#   "28th",
#   "23rd",
#   "Union Square",
#   "Astor Place"
# ]



n = ['ts', '34th-n', '28th-n', '23rd-n', 'us']
l = ['8th', '6th', 'us', '3rd', '1st']
s = ['gc', '33rd', '28th-s', '23rd-s', 'us']
o = ["59th", "50th", "ts", "34th-o", "28th-o"]

@mta = Hash.new
@mta[:n] = n
@mta[:l] = l
@mta[:s] = s



def display_stops(line)
  # display the list of all stops on the given line
  puts "Line #{line.upcase} : #{@mta[line.to_sym].join(" - ")}"
end

def display_lines(lines)
  lines.each do |line|
    display_stops(line)
  end
end

# def ask_origin_stop
#   print "Which stop would you like to get on at : "
#   origin = gets.chomp
# end
#
# def ask_dest_stop
#   print "Which stop would you like to get off at : "
#   dest = gets.chomp
# end

def ask_stop(stop_type)
  print "Which stop would you like to get #{stop_type === :origin ? "on" : "off" } at : "
  stop = gets.chomp.downcase
end

# def get_stop_index(line, stop)
#   stop_index = @mta[line.to_sym].index(stop)
# end

# def get_num_of_stops(info)
#   origin_index = @mta[info[:origin_line].to_sym].index(info[:origin_stop])
#   dest_index = @mta[info[:origin_line].to_sym].index(info[:dest_stop])
#   return (origin_index - dest_index).abs
# end

def get_num_of_stops(line, origin_stop, dest_stop)
  origin_index = @mta[line.to_sym].index(origin_stop)
  dest_index = @mta[line.to_sym].index(dest_stop)
  return (origin_index - dest_index).abs
end

def ask_line(line_type)
  print "Which line would you like to get #{line_type === :origin ? "on" : "off"} at : "
  line = gets.chomp.downcase
end

def display_result(info)
  if(info[:origin_line] === info[:dest_line])
    num_of_total_stops = get_num_of_stops(info[:origin_line], info[:origin_stop], info[:dest_stop])
    puts "You need #{num_of_total_stops} stops."
  else
    num_of_stops_1 = get_num_of_stops(info[:origin_line], info[:origin_stop], "us")
    num_of_stops_2 = get_num_of_stops(info[:dest_line], info[:dest_stop], "us")
    num_of_total_stops = num_of_stops_1 + num_of_stops_2

    puts "You need #{num_of_stops_1} stops on #{info[:origin_line].upcase} line."
    puts "You need to transfer at us."
    puts "You need #{num_of_stops_2} stops on #{info[:dest_line].upcase} line."
    puts "You need total #{num_of_total_stops} stops."
  end
end

# def get_transfer_stop(info)
#   case info[:origin_line]
#
# end

# Commit 1
# One line functionality

def one_line(line)
  info = Hash.new
  info[:origin_line] = line
  info[:dest_line] = line
  # display the list of all stops on the given line

  # puts "Line #{line.upcase} : #{@mta[line_sym].join(" - ")}"
  display_stops(line)
  # ask the stop the user wants to get on at

  # print "Which stop would you like to get on at : "
  # origin = gets.chomp
  info[:origin_stop] = ask_stop(:origin)
  # origin_index = @mta[line_sym].index(start)
  # ask the stop the user wants to get off at


  # print "Which stop would you like to get off at : "
  # dest = gets.chomp
  info[:dest_stop] = ask_stop(:dest)



  # dest_index = @mta[line_sym].index(dest)

  # The user should be told the number of stops for their trip
  display_result(info)

end


# Commit 2
# Two lines functionality (N and L)

def two_lines(lines)
  info = Hash.new

  display_lines(lines)

  # The user should be asked what line they want to get on
  info[:origin_line] = ask_line(:origin)

  # The user should be given a list of all the stops on that line
  display_stops(info[:origin_line])

  # The user should be able to enter the stop that they want to get on at
  info[:origin_stop] = ask_stop(:origin)

  # The user should be asked what line they want to get off
  info[:dest_line] = ask_line(:dest)

  # The user should be given a list of all the stops on that line
  display_stops(info[:dest_line])

  # The user should be able to enter the stop that they want to get off at
  info[:dest_stop] = ask_stop(:dest)

  # The user should be told the number of stops for their trip
  display_result(info)
end


# Commit 3
# Three lines functionality (N, L and 6)

def three_lines(lines) {

  # Add functionality for the 6 line

}

lines = Array.new
@mta.each_key do |key|
  lines.push(key.to_s)
end
two_lines(lines)
# one_line("n")
