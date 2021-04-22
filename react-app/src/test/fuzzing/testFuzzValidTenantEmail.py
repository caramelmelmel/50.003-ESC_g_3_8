import random
import string
import re

# This test allows us to check if the tenant emails that we expect to pass will actually pass the regex

def fuzz(valid):
    # Use various methods to fuzz randomly
    for i in range(5):
        trim_bool = random.randint(0, 1)
        insert_bool = random.randint(0, 1)
        swap_bool = random.randint(0, 1)
        if (trim_bool == 1):
            valid = trim(valid)
        if (insert_bool == 1):
            valid = insert(valid)
        if (swap_bool == 1):
            valid = swap(valid)
    output = valid
    valid_back = ["@gmail.com.sg", "@gmail.com", "@yahoo.com.sg", "@yahoo.com"]
    back = random.choice(valid_back)
    return output + back

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
        insert += random.choice(string.ascii_letters + string.digits + '_')

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
    regex = r"^\w{0,}@(gmail|yahoo)\.com(\.sg)?$"
    regex_obj = re.compile(regex)
    check = (regex_obj.search(input) != None)
    return check

# This test allows us to check if the tenant emails that we expect to pass will actually pass the regex
check = True
while (check):
    valid_front = ["example", "myemailisthis", "my_email_id", "123456789"]
    valid = random.choice(valid_front)
    output = fuzz(valid)
    check = verify_regex(output)
    print("Output:")
    print(output)