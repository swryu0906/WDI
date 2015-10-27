require_relative('calculator')

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
    @calc = Calculator.new
    case operation
    when 'add'
      @calc.add(num_1, num_2)
    when 'subtract'
      @calc.subtract(num_1, num_2)
    when 'multiply'
      @calc.multiply(num_1, num_2)
    when 'divide'
      @calc.divide(num_1, num_2)
    when 'root'
      @calc.root(num_1, num_2)
    when 'power'
      @calc.power(num_1, num_2)
    else
    end
  end


end
