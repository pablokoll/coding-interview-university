def leap_year(year):
    if year % 4 != 0:
        return False
    if year % 400 != 0 and year % 100 == 0:
        return False    
    
    return True
