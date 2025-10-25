# Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.
# The string can contain any characters.
# The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
# If there's an odd number of characters in the string, ignore the center character.
import math


def is_balanced(s):
    # split the string in two middles if are odd ignore the center character
    chars = list(s.lower())
    vowels = "aeiou"
    firstVowels = 0
    secondVowels = 0
    print(str(chars) + " " + str(len(chars)))
    isOdd = len(chars) % 2 == 0
    middleIndex = math.ceil((len(chars) / 2) - 1)
    print("isOdd " + str(isOdd))
    print("Middle index " + str(middleIndex))
    for index, char in enumerate(chars):
        if char in vowels and index != middleIndex:
            if index < middleIndex:
                firstVowels += 1
            else:
                secondVowels += 1
    print(f"First Vowels Half: {firstVowels}")
    print(f"Second Vowels Half: {secondVowels}")
    print(f"Vowels equal {firstVowels == secondVowels}")
    return firstVowels == secondVowels


if __name__ == "__main__":
    is_balanced("Lorem Ipsum")
