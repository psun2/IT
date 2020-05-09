# FIXME:TODO: # 1.10 Conditionals part One (조건부 1 부)

def plus(a, b):
  # if user gave me a string
  # 사용자가 나에게 문자열을 주면
  #   error
  #   오류
  # else
  # 그밖에
  #   return a + b;
  #   a + b를 반환;
 
  # if CONDITION:
  # 조건 인 경우 :
  #   error
  #   오류
  # else:
  # 그밖에:
  #   return a + b;
  #   a + b를 반환;
  
  # if type(b) is str:
  #   return None;
  # else:
  #   return a + b;

  if type(b) is int or type(b) is float:
    return a + b;
  else:
    return None;

print(plus(12, 1.2)); # 13.2

def plus(a, b):
  if type(a) is int or type(a) is float or type(b) is int or type(b) is float:
    return a + b;
  else:
    return None;

# print(plus("3", 3));
# TypeError: can only concatenate str (not "int") to str
# TypeError : str ( "int"아님) 만 str에 연결할 수 있습니다
# print(plus(3, "3"));
# TypeError: unsupported operand type(s) for +: 'int' and 'str'
# TypeError : +에 대해 지원되지 않는 피연산자 유형 : 'int'및 'str'
print(plus(3, 3)); # 6
print(plus(3.3, 3)); # 6.3
print(plus(3, 3.5)); # 6.5
print(plus(3.3, 3.5)); # 6.8