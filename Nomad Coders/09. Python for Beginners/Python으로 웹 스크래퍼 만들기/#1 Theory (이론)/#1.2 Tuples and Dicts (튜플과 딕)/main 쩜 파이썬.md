# FIXME:TODO: Tuples and Dicts (튜플과 딕)

# TODO: Tuples

days_list = ["Mon", "Tue", "Web", "Thur", "Fri"]

# Tuples 는 list(배열) 과는 다르게 변경이 불가능 합니다.
days_tuples = ("Mon", "Tue", "Web", "Thur", "Fri")
# list(배열) 은 [] 로 감싸주는 반면 tuples 는 () 로 감싸 줍니다.
print(type(days_list)); # <class 'list'>
print(type(days_tuples)); # <class 'tuple'>

# Tuples은 값의 변경이 불가능한 list 입니다.
# 즉 변수 가 아닌 상수 입니다.

# TODO: dictionary = js의 Object

name= "Nico";
age = 29;
korean = True;
fav_Food = ["kimchi", "Sashimi"]

nico = {
  "name": "Nico",
  "age" : 29,
  "korean" : True,
  "fav_Food" : ["kimchi", "Sashimi"]
}

print(type(nico)); # <class 'dict'>
print(nico);
# {'name': 'Nico', 'age': 29, 'korean': True, 'fav_Food': ['kimchi', 'Sashimi']}
print(nico["name"]); # Nico
print(nico["fav_Food"]); # ['kimchi', 'Sashimi']
nico["handsome"] = True;
print(nico);
# ['kimchi', 'Sashimi']
# {'name': 'Nico', 'age': 29, 'korean': True, 'fav_Food': ['kimchi', 'Sashimi'], 'handsome': True}
print(nico["handsome"]); # True

