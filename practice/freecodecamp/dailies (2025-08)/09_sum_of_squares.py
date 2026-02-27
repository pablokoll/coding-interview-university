# Given a positive integer up to 1,000, return the sum of all the integers squared from 1 up to the number.


def sum_of_squares(n: int):
    acc = 0
    for num in range(1, n + 1):
        acc += num**2
    return acc


print(sum_of_squares(5))  # should return 55.
print(sum_of_squares(10))  # should return 385.
print(sum_of_squares(25))  # should return 5525.
print(sum_of_squares(500))  # should return 41791750.
print(sum_of_squares(1000))  # should return 333833500.
