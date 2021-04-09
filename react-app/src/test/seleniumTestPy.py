from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
import time

driver = webdriver.Chrome()

# test register + login (staff)
# driver.get("http://localhost:3000/register-staff")
# institution_entry = driver.find_element_by_class_name("instDropDown")
# institution_entry.select

routes = [
    "/dashboard-staff",
    "/audits-staff",
    "/tenant-staff",
    "/see-updates",
    "/resolved-audits",
    "/ongoing-audits",
    "/checklist-fb-staff-professionalism-and-staff-hygiene",
    "/checklist-fb-staff-housekeeping-and-cleanliness",
    "/checklist-fb-staff-food-hygiene",
    "/checklist-fb-food-and-beverages",
    "/checklist-fb-safety-and-health",
    "/submit-checklist-staff",
    "/textfield-staff",
    "/register-first-tenant",
    "/success-tenant",
    "/login-tenant",
    "/register-staff",
    "/success-staff",
    "/login-staff",
]

# driver = webdriver.Chrome()
# driver.maximize_window
# # driver.get("https://www.google.com")

for route in routes:
    route = "http://localhost:3000" + route
    print(route)
    driver.get(route)
    # WebDriverWait(driver, 5).until(staleness_of(route))
    time.sleep(2)

