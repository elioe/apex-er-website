# Apex ER Consulting LLC — local website v1

Bilingual static website with no dependencies, build step, or external services.

## Open on Ubuntu or macOS

1. Unzip the archive.
2. Open a terminal in the `apex-er` folder.
3. Run:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

4. Visit http://localhost:8000 in your browser.
5. Stop the server with Ctrl+C.

If Python 3 is not available on Ubuntu, run `sudo apt install python3`.
On macOS, you can install Python 3 from python.org.
You can also open `index.html` directly in your browser. The local server is recommended for testing.

## Files

- `index.html`: structure and text. The `data-en` and `data-es` attributes contain the translations.
- `style.css`: responsive layout and colors.
- `script.js`: language selector, local preference, and year.

## Before publishing

- Confirm the acquisition and final domain (`apexer.io` is a candidate, not a confirmed purchase).
- Add a real business email address and scheduling link in the `#contact` section.
- Review the copy, services, and founder bio.
- Set social metadata and a canonical URL once the domain is confirmed.
- Assess privacy requirements based on any contact or analytics tools that are added.

There is no form that simulates submissions: the contact and scheduling sections display a transparent notice that they are awaiting configuration. No data is collected, and no third-party fonts, scripts, analytics, or images are used. The language preference is stored only in the browser.

The founder's previous roles are presented as personal experience; no past clients or projects are attributed to Apex ER.
