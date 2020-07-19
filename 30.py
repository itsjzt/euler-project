def pow_5(n):
    return int(n) ** 5 

def check_fifth_power_number(n):
    digits = list(str(n))
    fifth_power_of_digits = map(pow_5, digits)
    sum_of_fifth_power = sum(fifth_power_of_digits)
    if sum_of_fifth_power == n:
        return True
    else:
        return False

def find_fifth_powers(start, end):
    fifth_power_numbers = []
    for i in range(start, end): 
        if check_fifth_power_number(i):
            fifth_power_numbers.append(i)
    return fifth_power_numbers

print(sum(find_fifth_powers(2, 10_00_000)))
