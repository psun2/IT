# FIXME:TODO: #1.5 Function Arguments (함수 인자)

def sya_hello(who):
  print("hello", who);
# sya_hello();
# TypeError: sya_hello() missing 1 required positional argument: 'who'
# TypeError : sya_hello ()에 필수 위치 인수 1 개가 없습니다 : 'who'

sya_hello("Nicolas"); # hello Nicolas
sya_hello(True); # hello True

def plus(a, b):
  print(a + b);
plus(2, 5); # 7

def minus(a, b):
  print(a - b);
minus(2, 5); # -3
# minus(2); 
# TypeError: minus() missing 1 required positional argument: 'b'
# TypeError : 빼기 ()에 필수 위치 인수 1 개가 없습니다 : 'b'

# TODO: default argument
# default 값을 설정해주면 argument를 주지 않았을때,
# type error이 발생하지 않습니다.
def default_argument(a, b=0):
  print(a + b);
default_argument(3); # 3

def sya_hello(name="anonymous"):
  # anonymous : 익명
  print("hello", name);
sya_hello(); # hello anonymous
sya_hello("Nicolas"); # hello Nicolas