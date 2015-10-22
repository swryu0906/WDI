require 'pry'

class Clock

  attr_accessor :current_time, :alarms

  def initialize
    @current_time = "00:00:00"
  end

  # attr_accessor usage, bad practice
  def current_time=(current_time)
    @current_time = current_time
  end

  # def set_time(option)
  #   # @current_time = option[:hour].to_s.rjust(2, "0") + option[:min].to_s(2, "0") + option[:sec].to_s(2, "0")
  #
  #   binding.pry
  #   time = @current_time.split(":")
  #   time[0] = option[:hour]
  #   time[1] = option[:hour]
  #   @current_time.join(":")
  # end

  def set_time(time_setting)
    # binding.pry
    time = self.current_time.split(":")
    time[0] = time_setting[:hour]
    time[1] = time_setting[:min]
    self.current_time = time.join(":")
  end

  def set_alarm(alarm_setting)
    self.alarms << Alarm.new(alarm_setting)
  end

  def start_clock
    time = self.current_time.split(":")
    sec = time[2].to_i
    min = time[1].to_i
    hour = time[0].to_i

    loop do

      sleep(1)

      if sec < 59
        sec += 1
        time[2] = sec
        merge_time_tobits(time)
        # self.current_time = time.join(":")
      elsif min < 59 && sec == 59
        sec = 0
        min += 1
        time[2] = sec
        time[1] = min
        merge_time_tobits(time)
        # self.current_time = time.join(":")
      elsif min == 59 && sec == 59 && hour < 23
        sec = 0
        min = 0
        hour += 1
        time[2] = sec
        time[1] = min
        time[0] = hour
        merge_time_tobits(time)
      elsif hour == 23 && min == 59 && sec == 59
        sec = 0
        min = 0
        hour = 0
        time[2] = sec
        time[1] = min
        time[0] = hour
        merge_time_tobits(time)
      end
      puts current_time
    end
  end

  def merge_time_tobits(time_bits, alarm: false)
    self.current_time = time_bits.join(":")
    check_for_alarm if alarm
  end


  def check_for_alarm
    alarm = self.alarms.detect do |alarm|
      alarm

  end

  def display_time
    puts @current_time
  end
end



class Alarm
  attr_reader :time
  def initialize(alarm_setting)
    @hour = alarm_setting[:hour]
    @min = alarm_setting[:min]
    @time = "#{@hour}:#{@min}"
    @length = alarm_setting[:length] || 10
  end
end

clock = Clock.new
clock.display_time

option = { hour: 2, min: 10, sec: 0}
clock.set_time(option)

clock.start_clock
