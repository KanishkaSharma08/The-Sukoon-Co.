import re
import sys

def analyze_file(filename):
    print(f"\n=== Analyzing {filename} ===")
    
    # Try different encodings just in case
    html = None
    for enc in ['utf-8', 'utf-16', 'latin-1']:
        try:
            with open(filename, 'r', encoding=enc) as f:
                html = f.read()
            print(f"Successfully read with encoding: {enc}")
            break
        except Exception as e:
            print(f"Failed read with encoding {enc}: {e}")
            
    if not html:
        print("Failed to read file with any encoding!")
        return

    # Count lines and chars
    print(f"File lines: {len(html.splitlines())}, chars: {len(html)}")

    # 1. Emails
    emails = re.findall(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', html)
    print(f"Emails found: {set(emails)}")
    
    # 2. WhatsApp / Phone
    wa = re.findall(r'wa\.me/\d+|7032394455|\+91\d+', html)
    print(f"WhatsApp / Phones: {set(wa)}")

    # 3. Instagram
    insta = re.findall(r'instagram\.com/\S+|@\w+|thesukoonco', html)
    print(f"Instagram/Sukoon strings: {set(insta[:15])}")

    # 4. Find all sections or headings
    headings = re.findall(r'<h[1-6][^>]*>(.*?)</h[1-6]>', html, re.DOTALL)
    print(f"Headings found: {headings[:20]}")

    # 5. Let's dump all occurrences of signature journeys
    iti_names = re.findall(r'class="iti-name"[^>]*>(.*?)</div>', html)
    print(f"Signature Itineraries (Homepage): {iti_names}")
    
    # 6. Destinations page cards
    dest_names = re.findall(r'class="dest-card-name"[^>]*>(.*?)</div>', html)
    print(f"Destinations Itineraries: {dest_names}")

    # 7. Coming soon regions
    soon_names = re.findall(r'class="soon-name"[^>]*>(.*?)</div>', html)
    print(f"Coming Soon Regions: {soon_names}")

analyze_file('../sukoon-co-prototype.html')
analyze_file('../sukoon-latest.html')
