# Given a secret message string, and an integer representing the number of letters that were used to shift the message to encode it, return the decoded string.

# A positive number means the message was shifted forward in the alphabet.
# A negative number means the message was shifted backward in the alphabet.
# Case matters, decoded characters should retain the case of their encoded counterparts.
# Non-alphabetical characters should not get decoded.


def decode(message: str, shift: int):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    alphabetReversed = alphabet[::-1]
    decoded = ""
    for char in message:
        isUpper = char.isupper()
        pos = (
            alphabet.find(char.lower())
            if shift > 0
            else alphabetReversed.find(char.lower())
        )
        print(f"char: {char} - pos: {pos} - shift: {shift}")
        if pos >= 0:
            if shift > 0:
                decoded += (
                    alphabet[pos - shift].upper() if isUpper else alphabet[pos - shift]
                )
            else:
                decoded += (
                    alphabetReversed[pos + shift].upper()
                    if isUpper
                    else alphabetReversed[pos + shift]
                )
        else:
            decoded += char

    return decoded


print(
    decode("Xlmw mw e wigvix qiwweki.", 4)
)  # should return "This is a secret message."
print(decode("Byffi Qilfx!", 20))  # should return "Hello World!"
print(decode("Zqd xnt njzx?", -1))  # should return "Are you okay?"
print(decode("oannLxmnLjvy", 9))  # should return "freeCodeCamp"
