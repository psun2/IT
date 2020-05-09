# FIXME:TODO: #1.6 Returns (반품)

def p_plus(a, b):
  print(a + b);

def r_plus(a, b):
  return a + b;

p_result = p_plus(2, 3); # 5
r_result = r_plus(2, 3);

print(p_result); # None
print(r_result); # 5

# return 키워드는 value에 값을 저장 할 수 있습니다.
# function 에서 return 키워드를 만나면 function 을 종료합니다.

def plus(a, b):
  return a + b;
  print("somthing here", True);

result = plus(2, 4);
print(result); # 6