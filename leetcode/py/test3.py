obj = { 'name': '张三', 'age': 123 }
key = 'name'
print(key in obj)
obj[key] = '李四'
print(obj)
obj.pop('age')
print(obj)


obj2 = { (key): '王五' }
print(obj2)
print(key in obj2)

print(obj['name'])
