# Given two strings, determine if they are anagrams of each other (contain the same characters in any order).
# - Ignore casing and white space.


def are_anagrams(str1: str, str2: str) -> bool:
    str1 = str1.lower()
    str2 = str2.lower().replace(" ", "")

    # Split the str1
    for index, char1 in enumerate(str1.replace(" ", "")):
        pos = str2.find(char1)
        print(f"char1 {char1} Str2 {str2} - pos {pos}")
        if pos != -1:
            first = str2[:pos]
            last = str2[pos + 1 :]
            str2 = f"{first}{last}"
            # print(f"first {first} last {last} - pos {pos}")
        else:
            print(f"im false! char1 {char1} str {str2} pos {pos}")
            return False

    print(f"LEN STR2 {str2} {len(str2)} {len(str2) == 0}")
    return len(str2) == 0


# ### Tests
# print(are_anagrams("listen", "silent"))  # should return `true`.
print(are_anagrams("School master", "The classroom"))  # should return `true`.
# are_anagrams("A gentleman", "Elegant man") # should return `true`.
# are_anagrams("Hello", "World") # should return `false`.
# are_anagrams("apple", "banana") # should return `false`.
# are_anagrams("cat", "dog") # should return `false`.
