class Alarm
  # initialize method should create an alarm object
  # If sec is not given, @sec is assigned to 0 by default
  # If alarm_length is not given, @length is assigned to 10 by default
  def initialize(option)
    @hour = option[:hour]
    @min = option[:min]
    @sec = option[:sec] || 0
    @length = option[:length] || 5
  end

  def ring
    condition = true
    time = 0
    while condition && time < @length do
      print "Wake up! Wake up! (if you want to snooze, press Y/y) :"
      # snooze if gets.chomp.upcase == "Y"
      response = gets.chomp.upcase
      if response === "Y" then
        condition = false
        snooze
      end
    end
  end

  def serialize
    {
      hour: @hour,
      min: @min,
      sec: @sec
    }
  end

  # snooze method allows a user to snooze his or her alarm
  def snooze
    # puts "inside snooze"
    @min += 1
  end
end




class Clock

  # initialize method should create a clock object with a default time set to 00:00:00
  # and no alrams
  def initialize
    @hour = 0
    @min = 0
    @sec = 0
    @alarm_list = []
  end

  # set_current_time method allows a user to set the current time
  def set_current_time(option)
    @hour = option[:hour]
    @min = option[:min]
    @sec = option[:sec] || 0
  end

  # set_alarm method allows a user to set multiple alarms
  def set_alarm(option)
    @alarm_list.push(Alarm.new(option))
  end

  # start_clock method allows a user to start the clock
  def start_clock
    condition = true
    while condition do
      puts "current time :  #{@hour.to_s.rjust(2, "0")}:#{@min.to_s.rjust(2, "0")}:#{@sec.to_s.rjust(2, "0")}"
      sleep 1.0

      increment_sec

      check_alarm
    end
  end

  def increment_sec
    @sec += 1
    if @sec === 6
      @sec = 0
      @min += 1
      if @min === 6
        @min = 0
        @hour += 1
        if @hour === 24
          @hour = 0
        end
      end
    end
  end

  def check_alarm
    @alarm_list.each do |alarm|
      if (alarm.serialize[:hour] === @hour && alarm.serialize[:min] === @min && alarm.serialize[:sec] === @sec) then
        alarm.ring
      end
    end
  end
end




def display_title

  print "\n" +
"\n             █████╗ ██╗      █████╗ ██████╗ ███╗   ███╗     ██████╗██╗      ██████╗  ██████╗██╗  ██╗" +
"\n            ██╔══██╗██║     ██╔══██╗██╔══██╗████╗ ████║    ██╔════╝██║     ██╔═══██╗██╔════╝██║ ██╔╝" +
"\n            ███████║██║     ███████║██████╔╝██╔████╔██║    ██║     ██║     ██║   ██║██║     █████╔╝ " +
"\n            ██╔══██║██║     ██╔══██║██╔══██╗██║╚██╔╝██║    ██║     ██║     ██║   ██║██║     ██╔═██╗ " +
"\n            ██║  ██║███████╗██║  ██║██║  ██║██║ ╚═╝ ██║    ╚██████╗███████╗╚██████╔╝╚██████╗██║  ██╗" +
"\n            ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝     ╚═════╝╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝" +
"\n" +
"\n                                                                                      By Sungwon Ryu" +
"\n"
end

display_title


new_clock = Clock.new


current_time_option = { hour: 1, min: 1 }
new_clock.set_current_time(current_time_option)

alarm_option = { hour: 1, min: 2 }
new_clock.set_alarm(alarm_option)

new_clock.start_clock
