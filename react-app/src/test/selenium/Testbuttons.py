
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from random import choice
import time
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import StaleElementReferenceException
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait as wait 
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome(ChromeDriverManager().install())
driver.get("http://localhost:3000/tenant-staff")


#http://localhost:3000/audits-staff

#links = driver.find_elements_by_class_name('tenantstaff')
#institution = driver.find_element_by_id('controlled-tab-example')
# #driver.find_elements_by_xpath("//link") #//link[@name='username']

#institution = driver.find_element_by_name('KKH')

#driver.execute_script("document.getElementsByClassName('tenantstaff')[0].click()")  #click on button

#links = driver.find_elements_by_id("dropdown-type")

#driver.execute_script("arguments[0].click()", institution)
#links = driver.find_elements_by_class('react-tabs__tab-panel react-tabs__tab-panel--selected')
links = driver.find_elements_by_xpath("//a[@href]")
print(links)
time.sleep(5) 

#for link in links:
while (links):
    
    link = choice(links)
    #for link in links: 
    print(link.get_attribute("href"))
    time.sleep(5)
    
    if (link.get_attribute("href") == "http://localhost:3000/tenant-staff"):
        continue

    #if ("http://localhost:3000/see-updates" in link.get_attribute("href")):
    #    continue

    #if ("http://localhost:3000/tenant-profile" in link.get_attribute("href")):
    #    continue
    
    else:

        time.sleep(5)
        # random_link.click() # raises element not interactable
        driver.get(link.get_attribute("href"))
        time.sleep(5) 

        driver.execute_script("window.history.go(-1)")
        time.sleep(5)
        wait(driver, 10).until(
        EC.presence_of_all_elements_located((By.XPATH, '//a[@href]')))

        links = driver.find_elements_by_xpath("//a[@href]")
        


        
    
      

driver.close()
