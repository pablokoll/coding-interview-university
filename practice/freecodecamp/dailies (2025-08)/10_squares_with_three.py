# Given an integer between 1 and 10,000, return a count of how many numbers from 1 up to that integer whose square contains at least one digit 3.


def squares_with_three(n: int):
    counter = 0

    for num in range(1, n + 1):
        if str(num**2).find("3") > -1:
            counter += 1

    return counter


print(squares_with_three(1))  # should return 0.
print(squares_with_three(10))  # should return 1.
print(squares_with_three(100))  # should return 19.
print(squares_with_three(1000))  # should return 326.
print(squares_with_three(10000))  # should return 4531.
