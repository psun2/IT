# FIXME:TODO: #1.8 Keyworded Arguments (키워드 인수)

def minus(a, b):
  return a - b;

result = minus(b = 30, a=1); 
print(result); # -29
result = minus(30, 1); 
print(result); # 29

def say_hello(name, age):
  return "Hello name you are age years old";

hello = say_hello("nico", "12");
print(hello);
# Hello name you are age years old

def say_hello(name, age):
  return f"Hello {name} you are {age} years old";

hello = say_hello("nico", "12");
print(hello);
# Hello nicom you are 12 years old

def say_hello(name, age):
  return "Hello " + name + " you are " + age +  " years old";

hello = say_hello("nico", "12");
print(hello);
# Hello nicom you are 12 years old

hello = say_hello(age="12", name="nico");
print(hello);
# Hello nicom you are 12 years old

def say_hello(name, age, are_from, fav_food):
  return f"Hello {name} you are {age} years old you are from {are_from} you like {fav_food}";

hello = say_hello("nico", "12", "colombia", "kimchi");
print(hello);
# Hello nico you are 12 years old you are from colombia you like kimchi

hello = say_hello("nico", "12","kimchi","colombia");
print(hello);
# Hello nico you are 12 years old you are from kimchi you like colombia

hello = say_hello(name="nico", age="12",fav_food="kimchi",are_from="colombia");
print(hello);
# Hello nico you are 12 years old you are from colombia you like kimchi