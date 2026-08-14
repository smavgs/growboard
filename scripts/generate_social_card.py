from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "public" / "assets"
OUT = ASSETS / "cvai-growboard-social-v3.jpg"
W, H = 1200, 630

img = Image.new("RGB", (W, H), "white")
draw = ImageDraw.Draw(img)

def font(size: int, bold: bool = False):
    candidates = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf",
    ]
    for p in candidates:
        if Path(p).exists():
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()

# Subtle lower-left tech halftone accent.
for row in range(15):
    for col in range(35):
        x = 20 + col * 9
        y = 535 + row * 7
        radius = max(1, 3 - row // 6)
        alpha_factor = max(0.12, 1 - (col / 42) - (row / 22))
        c = (167, 139, 250) if (row + col) % 2 else (59, 130, 246)
        blend = tuple(int(255 - (255 - v) * alpha_factor * .45) for v in c)
        draw.ellipse((x-radius, y-radius, x+radius, y+radius), fill=blend)

# Approved cultivation imagery from the existing camera asset.
sprite = Image.open(ASSETS / "camera-sprite.jpg").convert("RGB")
sw, sh = sprite.size
hero = sprite.crop((0, 0, max(1, sw // 2), max(1, sh // 2)))
hero = hero.resize((620, 620), Image.Resampling.LANCZOS)
hero = hero.filter(ImageFilter.UnsharpMask(radius=1.0, percent=110, threshold=3))
mask = Image.new("L", (620, 620), 0)
ImageDraw.Draw(mask).ellipse((0, 0, 619, 619), fill=255)
img.paste(hero, (655, -18), mask)

# Purple-blue orbital arcs around hero image.
draw.arc((633, -40, 1297, 624), 75, 285, fill=(219, 203, 255), width=3)
draw.arc((602, -72, 1328, 654), 75, 285, fill=(210, 222, 255), width=2)
draw.arc((570, -104, 1360, 686), 75, 285, fill=(232, 224, 255), width=1)
for x, y, c in [(573, 94, (168, 85, 247)), (640, 368, (129, 140, 248)), (696, 543, (59, 130, 246))]:
    draw.ellipse((x-6, y-6, x+6, y+6), fill=c)

# Official CVAi master logo.
logo = Image.open(ASSETS / "cvai-logo.webp").convert("RGBA")
logo.thumbnail((175, 175), Image.Resampling.LANCZOS)
img.paste(logo, (67, 52), logo)

navy = (5, 20, 55)
purple = (116, 72, 235)
muted = (68, 78, 98)
draw.text((67, 280), "CVAi Growboard", font=font(68, True), fill=navy)
draw.text((69, 382), "Manufacturer Operating Intelligence", font=font(27, True), fill=purple)

# Purple-blue accent rule.
for i in range(175):
    t = i / 174
    c = (int(59*(1-t)+147*t), int(130*(1-t)+51*t), int(246*(1-t)+234*t))
    draw.line((69+i, 446, 69+i, 449), fill=c, width=4)

support = "Cultivation operations, crop performance,\nfacility health, interventions, KPIs and verified value."
draw.multiline_text((69, 478), support, font=font(20, False), fill=muted, spacing=8)

# Small CVAi signature retained at bottom-right.
small = Image.open(ASSETS / "cvai-logo.webp").convert("RGBA")
small.thumbnail((54, 54), Image.Resampling.LANCZOS)
img.paste(small, (1022, 550), small)
draw.text((1082, 555), "CVAi", font=font(34, True), fill=navy)

# Standard baseline JPEG for robust WhatsApp/Slack/iMessage unfurling.
img.save(OUT, "JPEG", quality=88, optimize=True, progressive=False, subsampling=2, dpi=(72, 72))
print(f"Generated {OUT} ({OUT.stat().st_size} bytes)")
