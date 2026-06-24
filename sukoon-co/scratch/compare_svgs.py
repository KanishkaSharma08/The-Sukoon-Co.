import base64
import os

html_path = r"c:\Users\asomith\OneDrive - RealPage\Desktop\Web developent\sai workk\sukoon-latest.html"
svg_path = r"c:\Users\asomith\OneDrive - RealPage\Desktop\Web developent\sai workk\sukoon-co\src\assets\logo-map.svg"

# Extract base64 logo string
logo_b64 = ""
with open(html_path, "r", encoding="utf-8", errors="ignore") as f:
    for line in f:
        if "window.SUKOON_LOGO_B64" in line:
            # Extract string between double quotes
            parts = line.split('"')
            if len(parts) >= 2:
                logo_b64 = parts[1]
                # Strip prefix "data:image/svg+xml;base64,"
                if "," in logo_b64:
                    logo_b64 = logo_b64.split(",")[1]
            break

if not logo_b64:
    print("Could not find window.SUKOON_LOGO_B64 in HTML.")
    exit(1)

decoded_bytes = base64.b64decode(logo_b64)

# Read current logo-map.svg
with open(svg_path, "rb") as f:
    current_bytes = f.read()

print(f"Decoded SVG size: {len(decoded_bytes)} bytes")
print(f"Current SVG size: {len(current_bytes)} bytes")

if decoded_bytes == current_bytes:
    print("The files are identical! No SVG update needed.")
else:
    print("The files are DIFFERENT. We should update logo-map.svg with the decoded bytes.")
    # Let's save the decoded SVG to scratch for validation
    scratch_svg = r"C:\Users\asomith\.gemini\antigravity-ide\brain\cd5642fc-87c0-46e7-a2b9-d43efdf4ee08\scratch\decoded_logo.svg"
    with open(scratch_svg, "wb") as f:
        f.write(decoded_bytes)
    print(f"Decoded SVG saved to {scratch_svg} for verification.")
