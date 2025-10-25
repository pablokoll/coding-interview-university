# Given a string, remove all spaces from the string, insert two spaces between every character, convert all alphabetical letters to uppercase, and return the result.
# Non-alphabetical characters should remain unchanged (except for spaces).


def space_jam(s):
    spaced_string = ""
    cleaned_string = s.upper().replace(" ", "")
    for index, character in enumerate(s.upper().replace(" ", "")):
        if index != len(cleaned_string) - 1:
            spaced_string += f"{character}  "
        else:
            spaced_string += f"{character}"
    return spaced_string


#                                          "F  R  E  E  C  O  D  E  C  A  M  P"
print(space_jam("freeCodeCamp"))  # should return "F  R  E  E  C  O  D  E  C  A  M  P".
space_jam(
    "   free   Code   Camp   "
)  # should return "F  R  E  E  C  O  D  E  C  A  M  P".
space_jam("Hello World?!")  # should return "H  E  L  L  O  W  O  R  L  D  ?  !".
space_jam("C@t$ & D0g$")  # should return "C  @  T  $  &  D  0  G  $".
space_jam("allyourbase")  # should return "A  L  L  Y  O  U  R  B  A  S  E".
