# Function
def greet():
    print("Hello there!")
    print("Welcome aboard")


greet()

# Return function
def get_greeting(name):
    return f"Hi {name}"

message = get_greeting("Dado")
print(message)

def multiply(*numbers):
    for number in numbers:
        print(number)

multiply(2, 3, 4, 5)

# Key word argument
def save_user(**user):
    print(user)

save_user(id=1, name='Dado', age=22)