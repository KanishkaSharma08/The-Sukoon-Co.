file_path = r"c:\Users\asomith\OneDrive - RealPage\Desktop\Web developent\sai workk\sukoon-latest.html"

with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
    text = f.read()

import re

targets = ['zanskar', 'himachal', 'uttarakhand', 'dest-south', 'dest-ladakh']

for target in targets:
    pattern_id = f'id="{target}"'
    pattern_class = f'class="{target}"'
    id_count = len(re.findall(pattern_id, text))
    class_count = len(re.findall(pattern_class, text))
    print(f"Target '{target}': found as ID {id_count} times, as Class {class_count} times")
