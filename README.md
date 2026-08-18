# Hafiza Sultana — Portfolio

## Folder structure
```
portfolio/
├── index.html          → main page
├── css/
│   └── style.css        → all styling
├── js/
│   └── script.js        → theme toggle, animations, form, etc.
└── images/
    └── profile.jpeg      → add your real photo here (optional)
```

## How to run in VS Code
1. Open the `portfolio` folder in VS Code (`File → Open Folder…`).
2. Install the **Live Server** extension (search "Live Server" by Ritwick Dey in the Extensions panel).
3. Right-click `index.html` → **Open with Live Server**. It opens in your browser and auto-refreshes on save.
   - Or just double-click `index.html` in File Explorer to open it directly in a browser (works too, just no auto-refresh).

## To add your real photo
1. Put your photo in `images/` and name it `profile.jpeg`.
2. In `index.html`, find the comment `<!-- To use your real photo... -->` inside the hero section and replace the `<button class="avatar-circle" id="profileOpen">HS</button>` line with:
   ```html
   <button class="avatar-circle" id="profileOpen"><img src="images/profile.jpeg" alt="Hafiza Sultana"></button>
   ```

## To add real projects / certificates
- `index.html` has HTML comments right above `id="projectGrid"` showing the card markup to copy/paste and edit.
- Delete the `<div class="empty-card">…</div>` placeholder once you add real cards.

## Notes
- Contact form is front-end only right now (shows a demo message). To make it actually send emails, connect it to a free service like [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/) — set the form's `action` attribute or wire up their JS snippet in `js/script.js`.
- Fonts (Fraunces, Inter, IBM Plex Mono) and icons (Font Awesome, Devicon) load from CDNs, so you need an internet connection for them to show correctly.
