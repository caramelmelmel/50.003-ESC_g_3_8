from selenium import webdriver
import time

driver = webdriver.Chrome()

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
    "/home-log-reg",
    "/"
]

for route in routes:
    route = "http://localhost:3000" + route
    print(route)
    driver.get(route)
    time.sleep(2)