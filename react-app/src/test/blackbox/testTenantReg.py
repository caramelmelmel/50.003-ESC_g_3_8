from selenium import webdriver
import time

# go to /register-tenant
driver = webdriver.Chrome()
driver.get("http://localhost:3000/register-tenant")

register = driver.find_element_by_xpath("/html/body/div/div/form/button")

# don't fill any entry + click register
time.sleep(2)
register.click()

# error message of invalid email is shown here
time.sleep(2)

# fill in a valid email
email = driver.find_element_by_xpath("/html/body/div/div/form/div[12]/input")
email.click()
email.send_keys("tenant@singhealth.com.sg")
time.sleep(1)
register.click()

# error message of invalid password is shown here
time.sleep(2)

# fill in a valid password
password = driver.find_element_by_xpath("/html/body/div/div/form/div[14]/input")
password.click()
password.send_keys("123qwe!@#QWE")
time.sleep(1)
register.click()

# error message of invalid expiry date is shown here
time.sleep(2)

# fill in a valid expiry date
expiry = driver.find_element_by_xpath("/html/body/div/div/form/div[16]/input")
expiry.click()
expiry.send_keys("31/12/2021")
time.sleep(1)
register.click()

# error message of empty fields is shown here
time.sleep(2)

# fill in rest of details
# institution
driver.find_element_by_xpath("/html/body/div/div/form/div[2]/button").click()
driver.find_element_by_xpath("/html/body/div/div/form/div[2]/div/a[1]").click()

# tenant
driver.find_element_by_xpath("/html/body/div/div/form/div[4]/button").click()
driver.find_element_by_xpath("/html/body/div/div/form/div[4]/div/a[1]").click()

# category
driver.find_element_by_xpath("/html/body/div/div/form/div[6]/button").click()
driver.find_element_by_xpath("/html/body/div/div/form/div[6]/div/a[1]").click()

# name
name = driver.find_element_by_xpath("/html/body/div/div/form/div[8]/input")
name.send_keys("Tenant")

# description
description = driver.find_element_by_xpath("/html/body/div/div/form/div[10]/input")
description.send_keys("Example Description...")

# show tenant registration successful if all details are correct
time.sleep(2)
register.click()