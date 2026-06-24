import sys
from html.parser import HTMLParser

sys.stdout.reconfigure(encoding='utf-8')

file_old = r"c:\Users\asomith\OneDrive - RealPage\Desktop\Web developent\sai workk\sukoon-co-prototype.html"
file_new = r"c:\Users\asomith\OneDrive - RealPage\Desktop\Web developent\sai workk\sukoon-latest.html"

class ContentExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags = []
        self.current_tag = None
        self.current_attrs = {}
        self.path = []

    def handle_starttag(self, tag, attrs):
        self.current_tag = tag
        self.current_attrs = dict(attrs)
        self.path.append(tag)
        
        # We only care about layout elements and text containers
        if tag in ['section', 'div', 'p', 'h1', 'h2', 'h3', 'span', 'a', 'button']:
            id_val = self.current_attrs.get('id', '')
            class_val = self.current_attrs.get('class', '')
            href_val = self.current_attrs.get('href', '')
            onclick_val = self.current_attrs.get('onclick', '')
            self.tags.append({
                'tag': tag,
                'path': '/'.join(self.path),
                'id': id_val,
                'class': class_val,
                'href': href_val,
                'onclick': onclick_val,
                'text': ''
            })

    def handle_endtag(self, tag):
        if self.path:
            self.path.pop()
        self.current_tag = None
        self.current_attrs = {}

    def handle_data(self, data):
        if self.current_tag and data.strip():
            # append text to last matching tag if it is text container
            if self.tags:
                self.tags[-1]['text'] += data.strip() + ' '

def get_clean_tags(file_path):
    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
        html_content = f.read()
    
    # Exclude massive stylesheet
    if "</style>" in html_content:
        html_content = html_content.split("</style>", 1)[1]
    
    parser = ContentExtractor()
    parser.feed(html_content)
    
    # Normalize text strings
    for item in parser.tags:
        item['text'] = ' '.join(item['text'].split()).strip()
    return parser.tags

tags_old = get_clean_tags(file_old)
tags_new = get_clean_tags(file_new)

print(f"Old file tags count: {len(tags_old)}")
print(f"New file tags count: {len(tags_new)}")

# Find differences in text by mapping items by tag path and index, or matching by ID
old_by_id = {t['id']: t for t in tags_old if t['id']}
new_by_id = {t['id']: t for t in tags_new if t['id']}

print("\n--- Differences in sections with IDs ---")
for id_val, new_tag in new_by_id.items():
    if id_val not in old_by_id:
        print(f"[Added section] ID: {id_val}, Tag: {new_tag['tag']}, Class: {new_tag['class']}")
    else:
        old_tag = old_by_id[id_val]
        if old_tag['text'] != new_tag['text']:
            print(f"[Modified Text] ID: {id_val}")
            print(f"  Old: {old_tag['text'][:120]}...")
            print(f"  New: {new_tag['text'][:120]}...")
        if old_tag['class'] != new_tag['class']:
            print(f"[Modified Class] ID: {id_val}: Old: '{old_tag['class']}', New: '{new_tag['class']}'")

for id_val in old_by_id:
    if id_val not in new_by_id:
        print(f"[Removed section] ID: {id_val}")

# Also compare general text tags in sequence
print("\n--- Sequence Comparison of major texts ---")
max_len = min(len(tags_old), len(tags_new))
diff_count = 0
for i in range(max_len):
    t_old = tags_old[i]
    t_new = tags_new[i]
    if t_old['tag'] in ['p', 'h1', 'h2', 'h3'] or t_old['id'] or t_new['id']:
        if t_old['text'] != t_new['text'] or t_old['tag'] != t_new['tag']:
            print(f"Diff at index {i}:")
            print(f"  Old: <{t_old['tag']} id='{t_old['id']}' class='{t_old['class']}'> Text: {t_old['text'][:100]}")
            print(f"  New: <{t_new['tag']} id='{t_new['id']}' class='{t_new['class']}'> Text: {t_new['text'][:100]}")
            diff_count += 1
            if diff_count > 30:
                print("Too many differences, stopping sequence diff.")
                break
