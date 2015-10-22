require 'pry'

class Clock
  attr_accessor :current_time, :alarms

  def initialize
    @current_time = "00:00:00"
    @alarms = []
  end

  # This might be better in an interface object
  def set_time(hr, min)
    time = self.current_time.split(":")
    time[0] = hr
    time[1] = min
    self.current_time = time.join(":")
  end

  # same as above
  def set_alarm(hr, min)
    self.alarms << Alarm.new(hr, min)
  end

  def start_clock
    # extract into method
    time = self.current_time.split(":")
    sec = time[2].to_i
    min = time[1].to_i
    hr = time[0].to_i

    loop do
      if sec < 59
        sec += 1
        time[2] = sec
        merge_time_bits(time, alarm: false)
      elsif min < 59 && sec == 59
        sec = 0
        min += 1
        time[2] = sec
        time[1] = min
        merge_time_bits(time, alarm: true)
      elsif min == 59 && sec == 59 && hr < 23
        sec = 0
        min = 0
        hr += 1
        time[0] = hr
        time[1] = min
        time[2] = sec
        merge_time_bits(time, alarm: true)
      end
      sleep(1)
      puts current_time
    end
  end

  def merge_time_bits(time_bits, alarm: false)
    self.current_time = time_bits.join(":")
    check_for_alarm if alarm
  end

  def check_for_alarm
    alarm = self.alarms.detect do |alarm|
      alarm.time == self.current_time.slice(0, 5)
    end
    puts "BRRINNNGGG"
  end
end

class Alarm
  attr_reader :time
  def initialize(hr, min, snooze_length=10)
    @hr = hr
    @min = min
    @time = "#{@hr}:#{@min}"
    @snooze_length = snooze_length
  end


end


c = Clock.new
c.set_time(10, 0)
c.set_alarm(10,1)
c.set_alarm(10,2)



c.start_clock
puts c.current_time
