from typing import List

# Given an array of numbers and an integer target, find two unique numbers in the array that add up to the target value. Return an array with the indices of those two numbers, or "Target not found" if no two numbers sum up to the target.

# The returned array should have the indices in ascending order.


def find_target(arr: List[int], target: int):
    # two for loops
    print(f"original len {(len(arr))}")
    print(f"range {range(len(arr) - 1)}")
    print(f"range listed {list(range(len(arr) - 1))}")

    for i in range(len(arr) - 1):
        if arr[i] + arr[i + 1] == target:
            return [
                i,
                i + 1,
            ]
    # iterate in everything positions and check the sums if i found the sum i push the i and J and return this array
    # if not found return string Target not found
    return "Target not found"


# Tests
print(find_target([2, 7, 11, 15], 9))  # should return [0, 1].
print(find_target([3, 2, 4, 5], 6))  # should return [1, 2].
print(find_target([1, 3, 5, 6, 7, 8], 15))  # should return [4, 5].
print(find_target([1, 3, 5, 7], 14))  # should return 'Target not found'.
