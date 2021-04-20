from selenium import webdriver
import time
import random

# 6 items
first_num = [2, 3, 4, 6, 7, 8]
# 12 items
second_num = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
# 16 items
third_num = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 16, 17, 18, 19]

score = (len(first_num)/6)*20 + (len(second_num)/12)*40 + (len(third_num)/16)*40 
print("Expected total score: " + str(score))

# Test performance score if ALL item from each checklist are selected. (100%)
driver = webdriver.Chrome()
driver.get("http://localhost:3000/textfield-staff")
time.sleep(1)    

# Select institution
driver.find_element_by_xpath("/html/body/div/div/div/div[4]/button").click()
driver.find_element_by_xpath("/html/body/div/div/div/div[4]/div/a[1]").click()
time.sleep(1)    
# Select tenant
driver.find_element_by_xpath("/html/body/div/div/div/div[6]/button").click()
driver.find_element_by_xpath("/html/body/div/div/div/div[6]/div/a[1]").click()
time.sleep(1)    
# Select category
driver.find_element_by_xpath("/html/body/div/div/div/div[8]/button").click()
driver.find_element_by_xpath("/html/body/div/div/div/div[8]/div/a[2]").click()
time.sleep(1)    
# Select create audit
driver.find_element_by_xpath("/html/body/div/div/div/div[10]/button").click()
time.sleep(1)    

for i in first_num:
    print(i)
    driver.find_element_by_xpath("/html/body/div/div/div/div[2]/div/div[2]/table/tbody/tr[{}]/td[2]/input".format(i)).click()

time.sleep(2)
driver.find_element_by_xpath("/html/body/div/div/div/div[2]/div/div[2]/a/button").click()
time.sleep(1)

for i in second_num:
    print(i)
    driver.find_element_by_xpath("/html/body/div/div/div/div[2]/div/div[2]/table/tbody/tr[{}]/td[2]/input".format(i)).click()

time.sleep(2)
driver.find_element_by_xpath("/html/body/div/div/div/div[2]/div/div[2]/a/button").click()
time.sleep(1)

for i in third_num:
    print(i)
    driver.find_element_by_xpath("/html/body/div/div/div/div[2]/div/div[2]/table/tbody/tr[{}]/td[2]/input".format(i)).click()

time.sleep(2)
driver.find_element_by_xpath("/html/body/div/div/div/div[2]/div/div[2]/a/button").click()