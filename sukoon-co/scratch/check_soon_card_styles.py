file_path = r"c:\Users\asomith\OneDrive - RealPage\Desktop\Web developent\sai workk\sukoon-latest.html"

with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
    text = f.read()

import re

matches = re.findall(r'\.soon-card[^\}]*\}', text, re.IGNORECASE)
for m in matches:
    print(m.strip())
    print("-" * 20)
