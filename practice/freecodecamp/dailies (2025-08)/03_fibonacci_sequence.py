# Length is going to be the max laps for loop
# Each lap sum the start sequence and push in an array
# The start sequence counts for the length see the example 2
def fibonacci_sequence(start_sequence, length):
    if length <= 0:
        return []

    sequenceLength = len(start_sequence)
    if sequenceLength >= length:
        return start_sequence[0:length]
    else:
        loops = length - sequenceLength
        # Idk how to made a simple number loop
        for loop in range(loops):
            # idk if im access correctly into the array
            num = start_sequence[-2] + start_sequence[-1]
            start_sequence.append(num)

    return start_sequence


print(
    fibonacci_sequence([0, 1], 20)
)  # ` should return `[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]`.
print(fibonacci_sequence([21, 32], 1))  # ` should return `[21]`.
print(fibonacci_sequence([0, 1], 0))  # ` should return `[]`.
print(fibonacci_sequence([10, 20], 2))  # ` should return `[10, 20]`.
print(
    fibonacci_sequence([123456789, 987654321], 5)
)  # ` should return `[123456789, 987654321, 1111111110, 2098765431, 3209876541]`.
