file_path = r"c:\Users\asomith\OneDrive - RealPage\Desktop\Web developent\sai workk\sukoon-latest.html"

with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
    text = f.read()

import re

# find all css properties containing grid-template-columns
grids = re.findall(r'grid-template-columns:[^;\}]+', text)
print("Grid columns properties found in CSS:")
for g in set(grids):
    print(g.strip())
