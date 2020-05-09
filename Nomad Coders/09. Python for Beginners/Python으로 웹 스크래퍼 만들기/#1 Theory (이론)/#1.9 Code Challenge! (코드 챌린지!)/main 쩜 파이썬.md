# FIXME:TODO: #1.9 Code Challenge! (코드 챌린지!)

def plus(a, b):
  int_a = int(a);
  int_b = int(b);
  return int_a + int_b;

def minus(a, b):
  return int(a) - int(b);

def times(a, b):
  return int(a) * int(b);

def division(a, b):
  return int(a) / int(b)

def remainder(a, b):
  return int(a) % int(b);

def squared(a, b):
  return int(a) ** int(b);

result = plus(5, "1");
print(result) # 6
result = minus(5, "2");
print(result) # 3
result = times(5, "3");
print(result) # 15
result = division(5, "4");
print(result) # 1.25
result = remainder(5, "5");
print(result) # 0
result = squared(5, "6");
print(result) # 15625