# Homepage pixel fonts

The homepage uses two self-hosted OFL 1.1 fonts. The Latin and Chinese assets together total 9,860 bytes. Body text stays in the regular site font.

| Asset | CSS family | Source | Coverage | Size |
| --- | --- | --- | --- | --- |
| `pixelify-sans-latin.woff2` | `Pixelify Sans` | Pixelify Sans v1.000 | Printable ASCII (`U+0020–U+007E`), variable weight 400–700 | 7,612 bytes |
| `homepage-pixel-cjk.woff2` | `Homepage Pixel CJK` | 正格点黑 16 / ZhengGeDianHei 16 v1.1.0 | `论文发表教育经历荣誉奖励许佳鑫`, regular weight 400 | 2,248 bytes |

Pixelify Sans has no reserved font name. The Chinese subset has been renamed throughout its internal family and PostScript metadata to avoid the upstream reserved names. Both retain copyright and license metadata. The Chinese asset uses vector outlines; legacy bitmap and Apple layout tables that FontTools cannot subset are omitted.

Sources and full licenses:

- [Pixelify Sans in Google Fonts](https://github.com/google/fonts/tree/67bc647ce1910e92f461bcc82aae30f21d21a9cc/ofl/pixelifysans); [bundled license](../../../public/licenses/pixelify-sans.txt). Source SHA-256: `9ba86cd010a4de309d263ceff8e8044092c9db7efda869620cb9ff1c4389e8a5`.
- [ZhengGeDianHei 16](https://github.com/yzdnn/ZhengGeDianHei-16/tree/ac81e4b58c34fd38ad1ab7ffe3cae9e0cd3ccd5f); [bundled license](../../../public/licenses/homepage-pixel-cjk.txt). Source SHA-256: `6ad8293221be772e8eb778a9ba1eb7f45327c8956de892ce35fedf40cdae7269`.

To regenerate from the repository root, use Python with `fonttools[woff]==4.60.2`, `brotli==1.2.0`, and `zopfli==0.2.3.post1` installed in a temporary virtual environment, then run:

```python
import hashlib
import urllib.request
from io import BytesIO
from pathlib import Path
from fontTools import subset
from fontTools.ttLib import TTFont

fonts = [
    {
        "base": "https://raw.githubusercontent.com/google/fonts/67bc647ce1910e92f461bcc82aae30f21d21a9cc/ofl/pixelifysans/",
        "source": "PixelifySans%5Bwght%5D.ttf",
        "sha256": "9ba86cd010a4de309d263ceff8e8044092c9db7efda869620cb9ff1c4389e8a5",
        "asset": "pixelify-sans-latin.woff2",
        "license": "pixelify-sans.txt",
        "chars": set(range(0x20, 0x7f)),
        "family": None,
    },
    {
        "base": "https://raw.githubusercontent.com/yzdnn/ZhengGeDianHei-16/ac81e4b58c34fd38ad1ab7ffe3cae9e0cd3ccd5f/",
        "source": "Fonts/ZhengGeDianHei-16.ttf",
        "sha256": "6ad8293221be772e8eb778a9ba1eb7f45327c8956de892ce35fedf40cdae7269",
        "asset": "homepage-pixel-cjk.woff2",
        "license": "homepage-pixel-cjk.txt",
        "chars": set(map(ord, "论文发表教育经历荣誉奖励许佳鑫")),
        "family": "Homepage Pixel CJK",
    },
]
for item in fonts:
    with urllib.request.urlopen(item["base"] + item["source"]) as response:
        data = response.read()
    assert hashlib.sha256(data).hexdigest() == item["sha256"]
    font = TTFont(BytesIO(data), recalcTimestamp=False)
    if item["family"]:
        family = item["family"]
        names = {
            1: family, 2: "Regular",
            3: "Homepage-Pixel-CJK-Regular;1.1.0;subset-1.0",
            4: family + " Regular", 6: "Homepage-Pixel-CJK-Regular",
            16: family, 17: "Regular",
        }
        for record in font["name"].names:
            if record.nameID in names:
                record.string = names[record.nameID].encode(record.getEncoding())
    options = subset.Options()
    options.flavor = "woff2"
    options.name_IDs = ["*"]
    options.name_languages = ["*"]
    options.name_legacy = True
    subsetter = subset.Subsetter(options=options)
    subsetter.populate(unicodes=item["chars"])
    subsetter.subset(font)
    font.flavor = "woff2"
    output = Path("src/assets/fonts") / item["asset"]
    font.save(output)
    assert item["chars"] <= set(TTFont(output).getBestCmap())
    with urllib.request.urlopen(item["base"] + "OFL.txt") as response:
        license_text = response.read().decode("utf-8")
        normalized = "\n".join(line.rstrip() for line in license_text.splitlines()) + "\n"
        (Path("public/licenses") / item["license"]).write_text(normalized, encoding="utf-8")
```
