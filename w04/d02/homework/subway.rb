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



n = ['ts', '34th', '28th-n', '23rd-n', 'us']
l = ['8th', '6th', 'us', '3rd', '1st']
s = ['gc', '33rd', '28th-s', '23rd-s', 'us']
@mta = {}
@mta[:n] = n
@mta[:l] = l
@mta[:s] = s



# Commit 1
# One line functionality

def one_line(line)

  line_sym = line.to_sym
  # display the list of all stops on the given line
  puts "Line #{line.upcase} : #{@mta[line_sym].join(" - ")}"
  # ask the stop the user wants to get on at
  print "Which stop would you like to get on at : "
  start = gets.chomp
  start_index = @mta[line_sym].index(start)
  # ask the stop the user wants to get off at
  print "Which stop would you like to get off at : "
  dest = gets.chomp
  dest_index = @mta[line_sym].index(dest)
  # The user should be told the number of stops for their trip
  puts "You need #{(dest_index - start_index).abs} stops."
end


one_line("n")
