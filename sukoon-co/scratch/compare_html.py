import re
from bs4 import BeautifulSoup

def analyze_file(filename):
    print(f"\n=== Analyzing {filename} ===")
    with open(filename, 'r', encoding='utf-8') as f:
        html = f.read()
    
    soup = BeautifulSoup(html, 'html.parser')
    
    # 1. Look for emails, whatsapp numbers
    emails = set(re.findall(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', html))
    print(f"Emails found: {emails}")
    
    whatsapp = set(re.findall(r'wa\.me/\d+|7032394455|\+91\d+', html))
    print(f"WhatsApp / Phone patterns found: {whatsapp}")
    
    # 2. Logo map zones
    logo_map = soup.find(id='logoMap')
    if logo_map:
        print(f"LogoMap zones: {[z.get('class') for z in logo_map.find_all(class_=re.compile('zone|panel|connector'))]}")
    else:
        print("No logoMap found")
        
    # 3. Signature itineraries
    itineraries_section = soup.find(id='itineraries')
    if itineraries_section:
        cards = itineraries_section.find_all(class_='iti-card')
        print(f"Homepage itineraries ({len(cards)}):")
        for card in cards:
            name = card.find(class_='iti-name')
            region = card.find(class_='iti-region')
            meta = card.find(class_='iti-meta')
            price_meta = card.find(style=lambda s: s and 'var(--gold)' in s)
            name_text = name.text.strip() if name else "None"
            region_text = region.text.strip() if region else "None"
            meta_text = [s.text.strip() for s in meta.find_all('span')] if meta else []
            price_text = price_meta.text.strip() if price_meta else "No Price"
            print(f"  - [{region_text}] {name_text} | {meta_text} | {price_text}")
    else:
        print("No itineraries section found")
        
    # 4. Destinations page sections
    dest_page = soup.find(id='page-destinations')
    if dest_page:
        regions = dest_page.find_all(class_='dest-region')
        print(f"Destinations page regions ({len(regions)}):")
        for r in regions:
            title = r.find(class_='dest-region-title')
            title_text = title.text.strip() if title else "None"
            live_badge = r.find(class_='dest-live-badge')
            badge_text = live_badge.text.strip() if live_badge else "None"
            print(f"  * Region: {title_text} ({badge_text})")
            # Print card titles
            cards = r.find_all(class_='dest-iti-card')
            for card in cards:
                cname = card.find(class_='dest-card-name')
                cregion = card.find(class_='iti-region')
                cmeta = card.find(class_='dest-card-meta')
                cprice = card.find(class_='dest-card-price')
                cname_t = cname.text.strip() if cname else "None"
                cregion_t = cregion.text.strip() if cregion else "None"
                cmeta_t = [s.text.strip() for s in cmeta.find_all('span')] if cmeta else []
                cprice_t = cprice.text.strip() if cprice else "No Price"
                print(f"    - [{cregion_t}] {cname_t} | {cmeta_t} | {cprice_t}")
    else:
        print("No page-destinations found")

    # 5. Enquiry Form / Forms
    enquiry_form = soup.find(id='enquiryForm')
    if enquiry_form:
        print("Enquiry form fields:")
        for input_tag in enquiry_form.find_all(['input', 'select', 'textarea']):
            print(f"  - {input_tag.get('name')} | req={input_tag.has_attr('required')}")
    else:
        # Check other forms
        forms = soup.find_all('form')
        print(f"Forms found: {len(forms)}")
        for i, form in enumerate(forms):
            print(f"  Form {i} fields:")
            for input_tag in form.find_all(['input', 'select', 'textarea']):
                print(f"    - {input_tag.get('name')} | req={input_tag.has_attr('required')}")

analyze_file('../sukoon-co-prototype.html')
analyze_file('../sukoon-latest.html')
