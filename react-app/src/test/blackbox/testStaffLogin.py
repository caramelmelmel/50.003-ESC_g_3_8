from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

staff_email = "staff@singhealth.com.sg"

# go to /login-tenant
driver = webdriver.Chrome()
driver.get("http://localhost:3000/login-staff")

login = driver.find_element_by_xpath("/html/body/div/div/form/button")

# don't fill any entry + click login
time.sleep(2)
login.click()

# error message of invalid email and password is shown here
time.sleep(2)

# password field is empty here

# fill in a valid email
email = driver.find_element_by_xpath("/html/body/div/div/form/div[4]/input")
email.click()
email.send_keys(staff_email)
time.sleep(1)
login.click()

# error message of invalid password is shown here
time.sleep(2)

# clear email field
email.click()
for i in range(len(staff_email)):
    email.send_keys(Keys.BACK_SPACE)

# fill in a valid password
password = driver.find_element_by_xpath("/html/body/div/div/form/div[6]/input")
password.click()
password.send_keys("123qwe!@#QWE")
time.sleep(1)
login.click()

# error message of invalid email is shown here
time.sleep(2)

# fill in valid email 
email.click()
email.send_keys(staff_email)
time.sleep(1)
login.click()

# error message of empty field is shown here
time.sleep(2)

# fill in valid name
name = driver.find_element_by_xpath("/html/body/div/div/form/div[2]/input")
name.send_keys("Staff")

# show staff home page if all details are correct
time.sleep(2)
login.click()