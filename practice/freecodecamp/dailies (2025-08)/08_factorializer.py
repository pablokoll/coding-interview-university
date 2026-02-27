# Given an integer from zero to 20, return the factorial of that number. The factorial of a number is the product of all the numbers between 1 and the given number.
# The factorial of zero is 1.


def factorial(n: int):
    fact: int = 1
    for i, number in enumerate(range(n)):
        fact = fact * (number + 1)
    return fact


print(factorial(0))  # should return 1.
print(factorial(5))  # should return 120.
print(factorial(20))  # should return 2432902008176640000.
