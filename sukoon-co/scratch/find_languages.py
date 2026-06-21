import re

with open('../sukoon-co-prototype.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

with open('scratch/languages_output.txt', 'w', encoding='utf-8') as out:
    for i, line in enumerate(lines):
        non_ascii = re.findall(r'[^\x00-\x7F]', line)
        if non_ascii:
            out.write(f"Line {i+1}: {''.join(non_ascii)} | {line.strip()[:100]}\n")
