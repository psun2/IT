# FIXME:TODO: #1.12 for in (에 대한 # 1.12)

days = ("Mon", "Tue", "Wed", "Thu", "Fri");

for x in days:
  print(x);
  
# Mon
# Tue
# Wed
# Thu
# Fri

# x는 변수 이름입니다.
# x는 Tuple에 있는 item을 하나씩 가집니다.
# x 변수는 for문이 실행될때 생성됩니다.
# 변수는 작업에 요구되는 list의 item을 가집니다.

for potato in days:
  print(potato);

# Mon
# Tue
# Wed
# Thu
# Fri

for day in [1, 2, 3, 4, 5]:
  print(day);

# 1
# 2
# 3
# 4
# 5

for day in days:
  if day == "Wed":
    break;
  else:
    print(day);

# Mon
# Tue

for day in days:
  if day is "Wed":
    break;
  else:
    print(day);

# Mon
# Tue

# TODO: String 도 list 입니다.
for letter in "nicolas":
  print(letter);

# n
# i
# c
# o
# l
# a
# s