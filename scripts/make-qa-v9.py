from pathlib import Path

from PIL import Image, ImageDraw


ROOT = Path(__file__).resolve().parent.parent


def comparison() -> None:
    before = Image.open(ROOT / "qa-v8-timeline-playing.png").convert("RGB")
    after = Image.open(ROOT / "qa-v9-simulator-desktop.png").convert("RGB")
    header = 52
    canvas = Image.new("RGB", (before.width + after.width, max(before.height, after.height) + header), "#10251f")
    canvas.paste(before, (0, header))
    canvas.paste(after, (before.width, header))
    draw = ImageDraw.Draw(canvas)
    draw.text((20, 18), "BEFORE / repeated steering-wheel symbol", fill="#f6f4ec")
    draw.text((before.width + 20, 18), "AFTER / scenario-specific cockpit scene", fill="#62b6ae")
    canvas.save(ROOT / "qa-v9-comparison.png", optimize=True)


def contact_sheet() -> None:
    files = [
        ("HANDS OFF", "hands-off.png"),
        ("GAZE OFF", "gaze-off.png"),
        ("HANDS + GAZE", "hands-eyes-off.png"),
        ("FATIGUE", "fatigue.png"),
        ("ASLEEP", "sleep.png"),
        ("INCAPACITATED", "incapacity.png"),
    ]
    thumb_w, thumb_h, label_h = 480, 320, 42
    canvas = Image.new("RGB", (thumb_w * 3, (thumb_h + label_h) * 2), "#10251f")
    draw = ImageDraw.Draw(canvas)
    for index, (label, filename) in enumerate(files):
        image = Image.open(ROOT / "public/assets/dms/simulator" / filename).convert("RGB")
        image.thumbnail((thumb_w, thumb_h))
        col, row = index % 3, index // 3
        x, y = col * thumb_w, row * (thumb_h + label_h)
        canvas.paste(image, (x, y))
        draw.text((x + 16, y + thumb_h + 13), label, fill="#f6f4ec")
    canvas.save(ROOT / "qa-v9-scenes-contact-sheet.png", optimize=True)


if __name__ == "__main__":
    comparison()
    contact_sheet()
