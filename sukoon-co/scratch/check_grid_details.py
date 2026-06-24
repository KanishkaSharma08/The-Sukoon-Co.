file_path = r"c:\Users\asomith\OneDrive - RealPage\Desktop\Web developent\sai workk\sukoon-latest.html"

with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
    text = f.read()

import re

# find selectors and their style blocks for soon-grid, story-grid, testi-grid
for selector in ['soon-grid', 'story-grid', 'testi-grid', 'dest-card-grid', 'iti-grid', 'logo-stage']:
    matches = re.findall(r'\.' + selector + r'\s*\{[^\}]*\}', text, re.IGNORECASE)
    print(f"Selector '.{selector}':")
    for m in matches:
        print(m.strip())
        print("-" * 20)
