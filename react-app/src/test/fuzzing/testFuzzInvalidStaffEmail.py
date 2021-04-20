import random
import string
import re

# This test allows us to check if the staff emails that we expect to fail will actually fail the regex

def fuzz(valid):
    # Use various methods to fuzz randomly
    count_random = random.randint(0, 5)
    for i in range(count_random):
        trim_bool = random.randint(0, 1)
        insert_bool = random.randint(0, 1)
        swap_bool = random.randint(0, 1)
        if (trim_bool == 1):
            valid = trim(valid)
        if (insert_bool == 1):
            valid = insert(valid)
        if (swap_bool == 1):
            valid = swap(valid)
    end_choices = [".com.sg", ".com", ".net", ".org", ".edu", ".gov.sg", ".gov"]
    end = random.choice(end_choices)
    return "validfront@" + valid + end

def trim(valid):
    # Trim front or back of random length
    length_valid = len(valid)
    random_length = random.randint(1, int(length_valid/2)+1)
    trim_bool = random.randint(0, 1)
    if (trim_bool == 1):
        output = valid[random_length:]
    else:
        output = valid[:random_length]
    return output

def insert(valid):
    # Insert front or back of random ascii letters
    random_length = random.randint(1, 10)
    insert = ""
    for i in range(random_length):
        insert += random.choice(string.ascii_letters)

    insert_bool = random.randint(0, 1)
    if (insert_bool == 0):
        output = insert + valid
    else:
        output = valid + insert
    return output

def swap(valid):
    # Swap characters at random
    for i in range(len(valid)):
        char = valid[i]
        random_index = random.randint(0, len(valid)-1)
        swap_char = valid[random_index]
        if (random_index > i):
            start = valid[0:i]
            middle = valid[i+1:random_index]
            end = valid[random_index+1:]
            valid = start + swap_char + middle + char + end
        elif (random_index < i):
            start = valid[0:random_index]
            middle = valid[random_index+1:i]
            end = valid[i+1:]
            valid = start + char + middle + swap_char + end
        else:
            continue
    output = valid
    return output

def verify_regex(input):
    # Verify if the input passes the regex
    regex = r"^\w{0,}@singhealth\.com\.sg$"
    regex_obj = re.compile(regex)
    check = (regex_obj.search(input) != None)
    return check

# This test allows us to check if the staff emails that we expect to fail will actually fail the regex
check = False
while (check == False):
    invalid_back = ["gmail", "yahoo", "outlook"]
    valid = random.choice(invalid_back)
    output = fuzz(valid)
    check = verify_regex(output)
    print("Output:")
    print(output)