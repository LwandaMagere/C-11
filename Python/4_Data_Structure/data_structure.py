# List
numbers = list(range(20))
print(numbers)

# Looping over list
letters = ["a", "b", "c", "d"]
for letter in letters:
    print(letter)

# Unpacking
lettas = ["a", "b", "c", "d"]
items = (0, "a")
index, letta = items
for index, letta in enumerate(lettas):
    print(index, letta)

# Removing and Adding
letters.append("z")
letters.insert(0, "-")
print(letters)

# Finding index
letters1 = ["a", "b", "c", "d"]
if "d" in letters1:
    print(letters1.index("d"))

# Sorting
numbers = [3, 51, 2, 6, 6]
numbers.sort(reverse=True)
print(numbers)

items = [
    ("Product1", 10),
     ("Product2", 9),
      ("Product3", 12)
]

def sort_item(item):
    return item[0]

items.sort(key=sort_item)
print(items)

# Lambda one line anonimous function
items.sort(key=lambda item: item[1])

# Map Function
prices = []
for item in items:
    prices.append(item[0])

print(prices)

# Same as the top code
x = map(lambda item: item[1], items)
print(x)
for item in x:
    print(item)


from collections import deque
queue = deque([])
queue.append(1)
queue.append(2)
queue.append(3)
queue.append(4)
queue.popleft()
print(queue)
if not queue:
    print("Empty")