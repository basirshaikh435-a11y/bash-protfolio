# Bashir Shaikh – Portfolio

A responsive, single-page portfolio built with plain HTML, CSS and JavaScript. No build step or dependencies.

## Files
- `index.html` – content and structure
- `style.css` – design, layout, responsive rules
- `script.js` – menu, scroll highlighting, skill filter, project details, contact form
- `assets/Bashir_Shaikh_Resume.pdf` – file used by the Download Resume button

## 1. Set your GitHub link (required)
Your resume does not include a GitHub username, so GitHub links point to `https://github.com/` for now.
Open `script.js` and change the first line:

```js
const CONFIG = { github: "https://github.com/YOUR-USERNAME" };
```
Every GitHub link on the site updates from this one value. To link each project card to its own repository, edit the `href` of the "View on GitHub" links in `index.html`, or remove those links if you don't have repos yet.

## 2. Preview locally
Open `index.html` in your browser, or run `python -m http.server 8000` in this folder and visit http://localhost:8000.

## 3. Deploy on GitHub Pages
1. Create a new public repository on GitHub, e.g. `portfolio` (or `YOUR-USERNAME.github.io` for a root URL).
2. Upload everything in this folder (`index.html`, `style.css`, `script.js`, `assets/`, `README.md`) to the repository root.
   With Git:
   ```bash
   git init
   git add .
   git commit -m "Add portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```
3. In the repository go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose **main** and **/ (root)**, then **Save**.
5. Wait 1–2 minutes. Your site will be live at `https://YOUR-USERNAME.github.io/portfolio/` (or `https://YOUR-USERNAME.github.io/` for a user site).

## Updating your resume
Replace `assets/Bashir_Shaikh_Resume.pdf` with the new file, keeping the same name.

## Notes
- The contact form opens the visitor's email app addressed to your email. For direct submissions without an email app, connect a service such as Formspree.
- The site follows the visitor's light/dark system setting and respects reduced-motion preferences.
