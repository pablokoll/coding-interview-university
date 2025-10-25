def is_armstrong_number(number):
    original_number = number
    number_length = len(str(number))
    digits_sum = sum(int(d) ** number_length for d in str(number))
    return digits_sum == original_number
