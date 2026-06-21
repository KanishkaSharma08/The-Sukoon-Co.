import re

html_path = r"c:\Users\asomith\OneDrive - RealPage\Desktop\Web developent\sai workk\sukoon-co-prototype.html"
with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

# Substring extraction of Destinations Page
start_idx = html.find('id="page-destinations"')
if start_idx != -1:
    # Find the next page container to bound our search
    end_idx = html.find('id="page-stories"', start_idx)
    dest_html = html[start_idx:end_idx]
    
    # Let's find all section tags
    sections = dest_html.split('<section class="region-section">')
    print(f"Found {len(sections)-1} region sections in HTML:")
    for idx, sec in enumerate(sections[1:]):
        # Extract title, label, status, cards, etc.
        num = re.search(r'<span class="region-num">(.*?)</span>', sec)
        label = re.search(r'<p class="sec-label">(.*?)</p>', sec)
        title = re.search(r'<h2 class="sec-title">(.*?)</h2>', sec)
        status = re.search(r'<span class="region-status.*?">(.*?)</span>', sec)
        
        num_val = num.group(1).strip() if num else "N/A"
        label_val = label.group(1).strip() if label else "N/A"
        title_val = title.group(1).strip() if title else "N/A"
        status_val = status.group(1).strip() if status else "N/A"
        
        print(f"\n======================================")
        print(f"Region {num_val} | Label: '{label_val}' | Title: '{title_val}' | Status: '{status_val}'")
        
        # Parse all dest-cards in this region section
        card_blocks = sec.split('<div class="dest-card')
        for c_idx, cb in enumerate(card_blocks[1:]):
            # parse card details
            c_name_m = re.search(r'<div class="dest-name">(.*?)</div>', cb)
            c_tagline_m = re.search(r'<div class="dest-tagline">(.*?)</div>', cb)
            c_pill_m = re.search(r'<div class="dest-pill.*?">(.*?)</div>', cb)
            
            c_name = c_name_m.group(1).strip() if c_name_m else "N/A"
            c_tagline = c_tagline_m.group(1).strip() if c_tagline_m else "N/A"
            c_pill = c_pill_m.group(1).strip() if c_pill_m else ""
            
            print(f"  * Card {c_idx+1}: Name: '{c_name}' | Tagline: '{c_tagline}' | Pill: '{c_pill}'")
            
        # Parse soon-chips
        chip_blocks = sec.split('<div class="soon-chip">')
        for chip_idx, cb in enumerate(chip_blocks[1:]):
            cname_m = re.search(r'<div class="soon-chip-name">(.*?)</div>', cb)
            ctag_m = re.search(r'<div class="soon-chip-tag">(.*?)</div>', cb)
            cname = cname_m.group(1).strip() if cname_m else "N/A"
            ctag = ctag_m.group(1).strip() if ctag_m else "N/A"
            print(f"  - Soon Chip {chip_idx+1}: Name: '{cname}' | Tag: '{ctag}'")
else:
    print("Could not find destinations section in HTML")
