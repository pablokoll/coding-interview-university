# Given a number of miles ran, and a time in "MM:SS" (minutes:seconds) it took to run those miles, return a string for the average time it took to run each mile in the format "MM:SS".
# Add leading zeros when needed.


def mile_pace(miles: int | float, duration: str):
    # 24:00 = 24 * 60 * 60 + 00 * 60
    hours = duration.split(":")[0]
    minutes = duration.split(":")[1]

    time = (int(hours) * 60 + int(minutes)) / miles
    result = f"{str(int(time / 60)).zfill(2)}:{str(int(time % 60)).zfill(2)}"
    print(f"Hours {hours} - Minutes {minutes} - Time {time} - Result {result}")
    return result


print(mile_pace(3, "24:00"))  # should return "08:00".
print(mile_pace(1, "06:45"))  # should return "06:45".
print(mile_pace(2, "07:00"))  # should return "03:30".
print(mile_pace(26.2, "120:35"))  # should return "04:36".
