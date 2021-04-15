from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

staff_email = "staff@singhealth.com.sg"

# go to /register-tenant
driver = webdriver.Chrome()
driver.get("http://localhost:3000/register-staff")

register = driver.find_element_by_xpath("/html/body/div/div/form/button")

# don't fill any entry + click register
time.sleep(2)
register.click()

# error message of invalid email is shown here
time.sleep(2)

# password field is empty here

# fill in a valid email
email = driver.find_element_by_xpath("/html/body/div/div/form/div[6]/input")
email.click()
email.send_keys(staff_email)
time.sleep(1)
register.click()

# error message of invalid password is shown here
time.sleep(2)

# clear email field
email.click()
for i in range(len(staff_email)):
    email.send_keys(Keys.BACK_SPACE)

# fill in a valid password
password = driver.find_element_by_xpath("/html/body/div/div/form/div[8]/input")
password.click()
password.send_keys("123qwe!@#QWE")
time.sleep(1)
register.click()

# error message of invalid email is shown here
time.sleep(2)

# fill in valid email 
email.click()
email.send_keys(staff_email)
time.sleep(1)
register.click()

# error message of empty field is shown here
time.sleep(2)

# select valid institution
driver.find_element_by_xpath("/html/body/div/div/form/div[2]/button").click()
driver.find_element_by_xpath("/html/body/div/div/form/div[2]/div/a[1]").click()

# fill in valid name
name = driver.find_element_by_xpath("/html/body/div/div/form/div[4]/input")
name.send_keys("Staff")

# show staff registration successful if all details are correct
time.sleep(2)
register.click()