class Clock
  def initialize
    @current_time = "00:00:00"
    @alarms = []
  end

  def set_time(hr, min)
    time = @current_time.split(":")
    time[0] = hr
    time[1] = min
    @current_time = time.join(":")
  end

  def set_alarm(hr, min)
   @alarms << Alarm.new(hr, min)
  end

  def start_clock
    time = @current_time.split(":")
    sec = time[2].to_i
    min = time[1].to_i
    hr = time[0].to_i
    loop do
      if sec < 59
        sec += 1
        time[2] = sec
        merge_time_bits(time)
      elsif min < 59 && sec == 59
        sec = 0
        min += 1
        time[1] = min
        time[2] = sec
        merge_time_bits(time, true)
      elsif min == 59 && sec == 59 && hr < 23
        sec = 0
        min = 0
        hr += 1
        time[0] = hr
        time[1] = min
        time[2] = sec
        merge_time_bits(time, true)
      elsif hr == 23 && min == 59
        sec = 0
        min = 0
        hr = 0
        time[0] = hr
        time[1] = min
        time[2] = sec
        merge_time_bits(time, true)
      end
    end
  end

  def merge_time_bits(time_bits, alarm=false)
    @current_time = formatted_time_bits(time_bits).join(":")
    check_for_alarm if alarm
    sleep(1)
    puts @current_time
  end

  def formatted_time_bits(time_bits)
    time_bits.map do |bit|
       if bit.to_s.length < 2
         bit.to_s.rjust(2, '0')
       else
         bit
       end
    end
  end

  def check_for_alarm
    alarm = @alarms.detect do |alarm|
       alarm.time == @current_time.slice(0, 5)
    end
    puts "wake up! wake up!".upcase!
    snooze(alarm)
  end

  def snooze(alarm)
    puts "wake up in ten minutes? (Yn)"
    ans = gets.chomp.downcase
    if ans == "y"
      alarm.snooze
    elsif ans == "n"
      puts @alarms
      @alarms.delete(alarm) unless alarm.daily
      puts @alarms
    end
  end
end


class Alarm
  attr_reader :time, :daily, :snooze_length
  def initialize(hr, min, snooze_length=10, daily=false)
    @hr = hr
    @min = min
    @time = "#{@hr}:#{@min}"
    # BONUS: dynamic snooze length
    @snooze_length = snooze_length
    @daily = daily
  end

  def 

  def snooze
    @min += snooze_length
  end
end



# c = Clock.new
# c.set_time(12, 30)
# c.set_alarm(12, 31)
# c.set_alarm(12, 32)
# c.start_clock
