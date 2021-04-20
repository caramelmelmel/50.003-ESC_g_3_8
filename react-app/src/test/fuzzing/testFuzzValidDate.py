import random
import string
import re

# This test allows us to check if the dates that we expect to pass will actually pass the regex

def fuzz(valid):
    # Use various methods to fuzz randomly
    day_bool = random.randint(0, 1)
    month_bool = random.randint(0, 1)
    year_bool = random.randint(0, 1)
    if (day_bool == 1):
        valid = fuzz_day(valid)
    if (month_bool == 1):
        valid = fuzz_month(valid)
    if (year_bool == 1):
        valid = fuzz_year(valid)
    return valid

def fuzz_day(valid):
    # Fuzz a random day value and modify the input
    first_digit = str(random.randint(0, 3))
    if (first_digit == "3"):
        second_digit = str(random.randint(0, 1))
    elif (first_digit == "0"):
        second_digit = str(random.randint(1, 9))
    else:
        second_digit = str(random.randint(0, 9))
    return valid[0:8] + first_digit + second_digit

def fuzz_month(valid):
    # Fuzz a random month value and modify the input
    first_digit = str(random.randint(0, 1))
    if (first_digit == "1"):
        second_digit = str(random.randint(0, 2))
    else:
        second_digit = str(random.randint(1, 9))
    return valid[0:5] + first_digit + second_digit + valid[7:]

def fuzz_year(valid):
    # Fuzz a random year value and modify the input
    first_digit = str(random.randint(0, 9))
    second_digit = str(random.randint(0, 9))
    return valid[0:2] + first_digit + second_digit + valid[4:]

def verify_regex(input):
    # Verify if the input passes the regex
    regex = r"^(20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$"
    regex_obj = re.compile(regex)
    check = (regex_obj.search(input) != None)
    return check

# This test allows us to check if the staff emails that we expect to pass will actually pass the regex
check = True
while (check):
    valid_dates = ["2021-12-31", "2078-01-01", "2099-05-23", "2043-10-28"]
    valid = random.choice(valid_dates)
    output = fuzz(valid)
    check = verify_regex(output)
    print("Output:")
    print(output)