from selenium import webdriver
import time
import random

# 13 items
first_num = [2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
# 18 items
second_num = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20]
# 37 items
third_num = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
             21, 22, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
# 12 items
fourth_num = [2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14]
# 18 items
fifth_num = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 18, 19, 20, 21]

score = (1/13)*10 + (1/18)*20 + (1/37)*35 + (1/12)*15 + (1/18)*20
print("Expected total score: " + str(score))

# Test performance score if ALL item from each checklist are selected. (100%)
driver = webdriver.Chrome()
driver.get("http://localhost:3000/checklist-fb-staff-professionalism-and-staff-hygiene")
time.sleep(1)

# first page
i = random.choice(first_num)
print(i)
driver.find_element_by_xpath("/html/body/div/div/div[2]/div/div[2]/table/tbody/tr[{}]/td[2]/input".format(i)).click()
time.sleep(2)
driver.find_element_by_xpath("/html/body/div/div/div[2]/div/div[2]/a/button").click()
time.sleep(1)

# second page
i = random.choice(second_num)
print(i)
driver.find_element_by_xpath("/html/body/div/div/div[2]/div/div[2]/table/tbody/tr[{}]/td[2]/input".format(i)).click()
time.sleep(2)
driver.find_element_by_xpath("/html/body/div/div/div[2]/div/div[2]/a/button").click()
time.sleep(1)

# third page
i = random.choice(third_num)
print(i)
driver.find_element_by_xpath("/html/body/div/div/div[2]/div/div[2]/table/tbody/tr[{}]/td[2]/input".format(i)).click()
time.sleep(2)
driver.find_element_by_xpath("/html/body/div/div/div[2]/div/div[2]/a/button").click()
time.sleep(1)

# fourth page
i = random.choice(first_num)
print(i)
driver.find_element_by_xpath("/html/body/div/div/div[2]/div/div[2]/table/tbody/tr[{}]/td[2]/input".format(i)).click()
time.sleep(2)
driver.find_element_by_xpath("/html/body/div/div/div[2]/div/div[2]/a/button").click()
time.sleep(1)

# fifth page
i = random.choice(first_num)
print(i)
driver.find_element_by_xpath("/html/body/div/div/div[2]/div/div[2]/table/tbody/tr[{}]/td[2]/input".format(i)).click()
time.sleep(2)
driver.find_element_by_xpath("/html/body/div/div/div[2]/div/div[2]/a/button").click()