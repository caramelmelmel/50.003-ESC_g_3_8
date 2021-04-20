import random
import string
import re

# This test allows us to check if the passwords that we expect to fail will actually fail the regex

def fuzz(valid):
    # Use various methods to fuzz randomly
    for i in range(3):
        trim_bool = random.randint(0, 1)
        duplicate_bool = random.randint(0, 1)
        swap_bool = random.randint(0, 1)
        temp_valid = valid
        if (trim_bool == 1):
            valid = trim(valid)
        if (len(valid) == 0):
            choices = ["badskjabsdjk", "051288324969", "USABASKDAU", "&*!#*!^*@&"]
            valid = random.choice(choices)
            valid = duplicate(valid)
            valid = swap(valid)
        if (duplicate_bool == 1):
            valid = duplicate(valid)
        if (swap_bool == 1):
            valid = swap(valid)
    return valid

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

def duplicate(valid):
    # Duplicate substrings in valid and add to the end of valid
    first_index = random.randint(0, len(valid)-1)
    if (first_index == len(valid)-1):
        return valid
    else:
        second_index = random.randint(first_index, len(valid)-1)
    if (first_index != second_index):
        substring = valid[first_index:second_index]
        valid = valid + substring
    return valid

def verify_regex(input):
    # Verify if the input passes the regex
    regex = r"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
    regex_obj = re.compile(regex)
    check = (regex_obj.search(input) != None)
    return check

# This test allows us to check if the passwords that we expect to fail will actually fail the regex
check = False
while (check == False):
    valid_passwords = ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'my spaced password', 'CapitalAndSmallButNoSymbol', 'C@PIT@L@NDSYMBOL!', '$mall$mbol@', '1234567890', 'CapitalAndSmallButNoSymbol123456789', 'C@PIT@L@NDSYMBOL!0987654321', '$mall$mbol@0192837465',
    'abcde456fg213hijklmno987pqrst0uvwxyz', 'ABCD4EFGH583IJKLM62NOP1QRS70TUVW9XYZ']
    valid = random.choice(valid_passwords)
    output = fuzz(valid)
    check = verify_regex(output)
    print("Output:")
    print(output)