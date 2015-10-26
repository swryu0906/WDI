

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
    @operation = params['splat'][0].chomp.downcase
    @num_1 = params['splat'][1].chomp.to_f
    @num_2 = params['splat'][2].chomp.to_f
    @result = parse_operation(@operation, @num_1, @num_2)
    erb :result
  end

  get '/calc/*/*/*/' do
    @operation = params['splat'][0].chomp.downcase
    @num_1 = params['splat'][1].chomp.to_f
    @num_2 = params['splat'][2].chomp.to_f
    @result = parse_operation(@operation, @num_1, @num_2)
    erb :result
  end


  def parse_operation(operation, num_1, num_2)
    case operation
    when 'add'
      add(num_1, num_2)
    when 'subtract'
      subtract(num_1, num_2)
    when 'multiply'
      multiply(num_1, num_2)
    when 'divide'
      divide(num_1, num_2)
    else
    end
  end

  def add(num_1, num_2)
    num_1 + num_2
  end

  def subtract(num_1, num_2)
    num_1 - num_2
  end

  def multiply(num_1, num_2)
    num_1 * num_2
  end

  def divide(num_1, num_2)
    num_1 / num_2
  end
end
