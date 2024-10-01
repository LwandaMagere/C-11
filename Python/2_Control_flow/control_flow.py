# Conditional Statements
temperature = 15
if temperature > 30:
    print("It's warm")
    print("Drink water")
elif temperature > 20:
    print("It's nice")
else:
    print("It's cold")
print("Done")

# Ternary Operator
age = 22
message = "Eligible" if age >= 18 else "Not Eligible"
print(message)

# Logical Operator
high_income = True
good_credit = True
student = False

if (high_income or good_credit) and not student:
    print("Eligible") 
else:
    print("Not eligible")


# For Loops
for number in range(3):
    print("Attempt!", number)

# For Else
successful = False
for number in range(3):
    print("Attempt")
    if successful:
        print("Successful")
        break
else:
    print("Attempted 3 times and failed")

# Nested Loops
for x in range(5):
    for y in range(3):
        print(f"({x}, {y})")

# Iterables
for x in [1,2,3,4,5,6]:
    print(x)


# While Loops
number = 100
while number > 0:
    print(number)
    number //= 2

command = ""
while command.lower() != "quit":
    command = input(">")
    print("ECHO", command)