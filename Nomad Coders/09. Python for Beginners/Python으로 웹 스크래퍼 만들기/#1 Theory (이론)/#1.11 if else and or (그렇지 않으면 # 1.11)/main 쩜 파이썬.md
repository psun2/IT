# FIXME:TODO: #1.11 if else and or (그렇지 않으면 # 1.11)

def age_check(age):
  print(f"you are {age}");
  if age < 18:
    print("you cant drink");
  else:
    print("enjoy your drink");

age_check(18);
# you are 18
# enjoy your drink

# and 연산자는 and를 기준으로 좌항 과 우항이 모두 true 일때 실행됩니다.
def age_check(age):
  print(f"you are {age}");
  if age < 18:
    print("you cant drink");
  elif age == 18:
    print("you are new to this!");
  elif age > 20 and age < 25:
    print("you are still kind of young");
  else:
    print("enjoy your drink");

age_check(18);
# you are 18
# you are new to this!

age_check(23);
# you are 23
# you are still kind of young

age_check(29);
# you are 29
# enjoy your drink

# or 연산자는 or을 기준으로 좌항 과 우항중 한 곳이라도 true 면 실행됩니다.
def age_check(age):
  print(f"you are {age}");
  if age < 18:
    print("you cant drink");
  elif age == 18 or age == 19:
    print("you are new to this!");
  elif age > 20 and age < 25:
    print("you are still kind of young");
  else:
    print("enjoy your drink");

age_check(19);
# you are 19
# you are new to this!