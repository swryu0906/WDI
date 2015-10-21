n = ['ts', '34th-n', '28th-n', '23rd-n', 'us']
l = ['8th', '6th', 'us', '3rd', '1st']
s = ['gc', '33rd', '28th-s', '23rd-s', 'us']
o = ["59th", "50th", "ts", "34th-o", "28th-o"]

@mta = Hash.new
@mta[:n] = n
@mta[:l] = l
@mta[:s] = s
@mta[:o] = o

@hash_to_line = {
  n: "N",
  l: "L",
  s: "6",
  o: "1"
}


# display the list of all stops on the given line
def display_stops(line)
  puts "Line #{@hash_to_line[line.to_sym]} : #{@mta[line.to_sym].join(" - ")}"
end


# display the list of lines with their stops on the given lines
def display_lines(lines)
  puts "\nSubway Lines\n"
  lines.each do |line|
    puts "Line #{@hash_to_line[line.to_sym]} : #{@mta[line.to_sym].join(" - ")}"
  end
end


# ask a user the line which they like to get on or get off at
def ask_line(line_type)
  print "\nWhich line would you like to get #{line_type === :origin ? "on" : "off"} at : "
  user_response = gets.chomp.upcase

  # when the user input is not correct,
  # print an error message and ask the same question
  until @hash_to_line.has_value?(user_response)
    puts "\nError! You entered a wrong subway line!"
    print "Which line would you like to get #{line_type === :origin ? "on" : "off"} at : "
    user_response = gets.chomp.upcase
  end
  @hash_to_line.key(user_response)
end


# ask a user the stop which they like to get on or get off at
def ask_stop(line, stop_type)
  print "\nWhich stop would you like to get #{stop_type === :origin ? "on" : "off" } at : "
  user_response = gets.chomp.downcase

  # when the user input is not correct,
  # print an error message and ask the same question
  until @mta[line.to_sym].include?(user_response)
    puts "\nError! You entered a wrong stop name!"
    print "Which stop would you like to get #{stop_type === :origin ? "on" : "off" } at : "
    user_response = gets.chomp.downcase
  end until @mta[line.to_sym].include?(user_response)
  user_response
end


# get the number of stops for the trip on the same line
def get_num_of_stops(line, origin_stop, dest_stop)
  origin_index = @mta[line.to_sym].index(origin_stop).to_i
  dest_index = @mta[line.to_sym].index(dest_stop).to_i
  return (origin_index - dest_index).abs
end

def display_one_line_trip(info)
  num_of_total_stops = get_num_of_stops(info[:origin_line], info[:origin_stop], info[:dest_stop])
  puts "\nYour origin stop is #{info[:origin_stop]} and your destination stop is #{info[:dest_stop]}"
  puts "You need #{num_of_total_stops} stops on #{@hash_to_line[info[:origin_line].to_sym]} line."
end


# display the two line trip and return the sum of stops for the trip
def display_two_line_trip(info)
  if (info[:origin_line] === 'n' && info[:dest_line] === 'o')|| (info[:origin_line] === 'o' && info[:dest_line] === 'n')
    transfer_stop = "ts"
  else
    transfer_stop = "us"
  end

  num_of_stops_1 = get_num_of_stops(info[:origin_line], info[:origin_stop], transfer_stop)
  num_of_stops_2 = get_num_of_stops(info[:dest_line], transfer_stop, info[:dest_stop])
  num_of_total_stops = num_of_stops_1 + num_of_stops_2

  puts "\nYou need #{num_of_stops_1} stops on #{info[:origin_line].upcase} line."
  puts "You need to transfer at #{transfer_stop}."
  puts "You need #{num_of_stops_2} stops on #{info[:dest_line].upcase} line."

  num_of_total_stops
end

# display the number of stops result calculated
def display_result(info)
  num_of_total_stops = 0
  info_1 = {}
  info_2 = {}
  if info[:origin_line] === info[:dest_line]
    display_one_line_trip(info)
  else
    if (info[:origin_line] === "o" && (info[:dest_line] === 'l' || info[:dest_line] === 's')) || (info[:dest_line] === "o" && (info[:origin_line] === 'l' || info[:origin_line] === "s"))

      info_1[:origin_line] = info[:origin_line]
      info_1[:dest_line] = "n"
      info_1[:origin_stop] = info[origin_line]
      info_1[:dest_stop] = "ts"
      info_2[:origin_line] = "n"
      info_2[:dest_line] = info[:origin_line]
      info_1[:origin_stop] = "ts"
      info_1[:dest_stop] = info[dest_stop]

      num_of_total_stops += display_two_line_trip(info_1)
      num_of_total_stops += display_two_line_trip(info_2)
    else
      num_of_total_stops = display_two_line_trip(info)
    end
  end

  puts "\nYou need total #{num_of_total_stops} stops."
end



# Commit 1
# One line functionality

def one_line(line)
  info = Hash.new
  info[:origin_line] = line
  info[:dest_line] = line

  # display the list of all stops on the given line
  display_lines([line])

  # ask the stop the user wants to get on at
  info[:origin_stop] = ask_stop(info[:origin_line], :origin)

  # ask the stop the user wants to get off at
  info[:dest_stop] = ask_stop(info[:dest_line], :dest)

  # The user should be told the number of stops for their trip
  display_result(info)
end


# Commit 2
# Two lines functionality (N and L)
# Commit 3
# Three lines functionality (N, L and 6)
# Commit 4 (Bonus)
# Add functionality for a fourth line, the 1 line


def multiple_lines(lines)
  info = Hash.new
  display_lines(lines)

  # The user should be asked what line they want to get on
  info[:origin_line] = ask_line(:origin)

  # The user should be given a list of all the stops on that line
  display_stops(info[:origin_line])

  # The user should be able to enter the stop that they want to get on at
  info[:origin_stop] = ask_stop(info[:origin_line], :origin)

  display_lines(lines)

  # The user should be asked what line they want to get off
  info[:dest_line] = ask_line(:dest)

  # The user should be given a list of all the stops on that line
  display_stops(info[:dest_line])

  # The user should be able to enter the stop that they want to get off at
  info[:dest_stop] = ask_stop(info[:dest_line], :dest)

  # The user should be told the number of stops for their trip
  display_result(info)
end


# display the tile of program
def display_title
  print "" +
    "\n              ███╗   ███╗████████╗ █████╗     ███████╗██╗   ██╗██████╗ ██╗    ██╗ █████╗ ██╗   ██╗" +
    "\n              ████╗ ████║╚══██╔══╝██╔══██╗    ██╔════╝██║   ██║██╔══██╗██║    ██║██╔══██╗╚██╗ ██╔╝" +
    "\n              ██╔████╔██║   ██║   ███████║    ███████╗██║   ██║██████╔╝██║ █╗ ██║███████║ ╚████╔╝" +
    "\n              ██║╚██╔╝██║   ██║   ██╔══██║    ╚════██║██║   ██║██╔══██╗██║███╗██║██╔══██║  ╚██╔╝" +
    "\n              ██║ ╚═╝ ██║   ██║   ██║  ██║    ███████║╚██████╔╝██████╔╝╚███╔███╔╝██║  ██║   ██║" +
    "\n              ╚═╝     ╚═╝   ╚═╝   ╚═╝  ╚═╝    ╚══════╝ ╚═════╝ ╚═════╝  ╚══╝╚══╝ ╚═╝  ╚═╝   ╚═╝" +
    "\n" +
    "\n                                                                                   By Sungwon Ryu" +
    "\n\n"
end


# display the main menu
def display_main_menu
  print "" +
    "\n1. One line functionality ( N line )" +
    "\n2. Two lines functionality ( N and L )" +
    "\n3. Three lines functionality (N, L and 6)" +
    "\n4. Four lines functionality (N, L, 6 and 1)" +
    "\n5. Quit" +
    "\n\n"

  menu = (1..5).collect { |x| x.to_s }

  print "Please choose one of the above menu : "
  user_response = gets.chomp
  menu = (1..5).collect { |x| x.to_s }

  unless menu.include?(user_response)
    puts "\nError! You entered a wrong number!"
    print "Please choose one of the above menu : "
    user_response = gets.chomp
  end

  user_response
end


# main app
def subway
  display_title()
  all_lines = Array.new
  @mta.each_key do |key|
    all_lines.push(key.to_s)
  end

  begin
    user_choice = display_main_menu()

    case user_choice
    when "1"
      one_line("n")
    when "2"
      multiple_lines(["n", "l"])
    when "3"
      multiple_lines(["n", "l", "s"])
    when "4"
      multiple_lines(all_lines)
    end
  end while user_choice != "5"

  puts "\nBye!\n"
end


subway()
