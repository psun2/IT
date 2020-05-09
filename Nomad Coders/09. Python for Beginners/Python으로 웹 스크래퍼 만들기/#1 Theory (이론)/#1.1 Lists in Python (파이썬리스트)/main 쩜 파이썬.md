# TODO: Lists in Python (파이썬리스트)

days = "Mon", "Tue", "Wed", "Thur", "Fri", "Sat";
print(days);
# ('Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat')

# 원하는 요일의 출력은 어떻게 하나요?
day_one = "Mon";
print(day_one);
# 위와 같은 방법은 않좋은 방법입니다.

days_list = ["Mon", "Tue", "Wed", "Thur", "Fri"];
print(type(days_list)); # <class 'list'>
print(days_list); 
# ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
# 이제 days_list 는 더이상 string이 아닙니다.
# list 입니다.

# TODO: 해당인자가 list 안에 포함 되어있는지 알아보는 방법
print("Mon" in days_list); # True
print("Man" in days_list); # False

print(days_list[3]); # Thur
# TODO: 왜 3번이 Wed 가 아니고, Thur 인가요?
# 컴퓨터는 숫자를 0 번부터 카운트를 합니다.
# "Mon" 이 list 의 0번이 되기때문에 3번은 "Thur"이 됩니다.
print(days_list[2]); # Web

# TODO: list의 길이(length) 를 알아보는 방법
print(len(days_list)); # 5

# TODO: s.append(x) => list를 추가하는 function (append : 덧 붙이다)
print(days_list);
# ['Mon', 'Tue', 'Wed', 'Thur', 'Fri']
days_list.append("Sat");
print(days_list);
# ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']

# TODO: reverse() function
days_list.reverse();
print(days_list);
# ['Sat', 'Fri', 'Thur', 'Wed', 'Tue', 'Mon']
