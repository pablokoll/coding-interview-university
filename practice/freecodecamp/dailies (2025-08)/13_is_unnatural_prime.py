# Given an integer, determine if that number is a prime number or a negative prime number.

# A prime number is a positive integer greater than 1 that is only divisible by 1 and itself.
# A negative prime number is the negative version of a positive prime number.
# 1 and 0 are not considered prime numbers.


def is_unnatural_prime(n: int):
    for i, num in enumerate(range(n)):
        if num % i:
            

    return n

print(is_unnatural_prime(1)) # should return False.
print(is_unnatural_prime(-1)) # should return False.
print(is_unnatural_prime(19)) # should return True.
print(is_unnatural_prime(-23)) # should return True.
print(is_unnatural_prime(0)) # should return False.
print(is_unnatural_prime(97)) # should return True.
print(is_unnatural_prime(-61)) # should return True.
print(is_unnatural_prime(99)) # should return False.
print(is_unnatural_prime(-44)) # should return False.
