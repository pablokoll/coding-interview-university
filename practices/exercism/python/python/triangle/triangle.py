def equilateral(sides):
    print(f"equilateral {sides}")
    
    if(sides[0] == sides[1] and sides[0] == sides[2] and sides[0] != 0):
        return True

    return False


def isosceles(sides):
    print(f"isosceles {sides}")
    if(sides[0] == sides[1] and sides[0] != sides[2]):
        return True
    if(sides[1] == sides[2] and sides[1] != sides[0]):
        return True
    if(sides[0] == sides[2] and sides[0] != sides[1]):
        return True
    
    return False


def scalene(sides):
    print(f"scalene {sides}")
    if sides[0] != sides[1] and sides[1] != sides[2] and sides[0] != sides[2]:
        return True

    return False
