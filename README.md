# Personal Academic Homepage

A clean, responsive static site for showcasing academic work.

## Project Structure

```
PersonalPage/
├── index.html          # Homepage — bio, news, selected publications
├── publications.html   # Full publication list with filters
├── projects.html       # Research & open-source projects
├── cv.html             # Curriculum vitae
├── gallery.html        # Photo gallery
├── css/style.css       # All styles (single file)
├── js/main.js          # Navigation, filters, lightbox
├── images/             # Put all images here
│   └── profile.jpg     # Your profile photo
└── files/
    └── cv.pdf          # PDF version of your CV
```

---

## How to Update Content

### Change personal info
Edit the top section of `index.html`:
- Name, title, affiliation
- Contact links (email, GitHub, Scholar, LinkedIn, Twitter)
- Bio paragraphs

### Add a news item
Open `index.html`, find `<ul id="news-list">`, add at the **top**:
```html
<li>
  <span class="news-date">Mar 2026</span>
  <span class="news-badge badge-paper">Paper</span>
  <span>Your news text here.</span>
</li>
```
Badge types: `badge-paper` `badge-award` `badge-talk` `badge-service` `badge-misc`

### Add a publication
Open `publications.html`, find the correct year section, copy an existing `<li class="pub-item">` block and edit:
- `data-type`: `conference` / `journal` / `workshop` / `preprint`
- `data-venue`: used for filtering (e.g. `cvpr`, `neurips`, `icml`)
- Title, authors, venue, links
- Optional tags: `<span class="pub-tag oral">Oral</span>` or `<span class="pub-tag best">Best Paper</span>`

Wrap **your own name** with: `<span class="author-me">Your Name</span>`

Also add a summary entry to the Selected Publications on `index.html`.

### Add a project
Open `projects.html`, copy a `<div class="project-card">` block and fill in title, description, tags, links.

### Add a photo to gallery
1. Copy your image to `images/`
2. Open `gallery.html`, find the right section
3. Replace the placeholder:
```html
<div class="gallery-item" data-src="images/photo.jpg">
  <img src="images/photo.jpg" alt="Description">
  <div class="gallery-caption">Your caption</div>
</div>
```

### Add your profile photo
Replace the placeholder div in `index.html`:
```html
<!-- Remove this: -->
<div class="profile-photo-placeholder">YN</div>

<!-- Add this: -->
<img src="images/profile.jpg" alt="Your Name" class="profile-photo">
```

### Update CV PDF
Place your PDF at `files/cv.pdf`. The download button in `cv.html` already links there.

---

## Deploy to GitHub Pages

### First-time setup

1. **Create a GitHub repo** named exactly `<yourusername>.github.io`

2. **Initialize and push** from this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: personal homepage"
   git branch -M main
   git remote add origin https://github.com/<yourusername>/<yourusername>.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages** (usually auto-enabled for `<username>.github.io` repos):
   - Go to repo → Settings → Pages
   - Source: Deploy from branch → `main` → `/ (root)`
   - Save

4. Your site will be live at `https://<yourusername>.github.io` within a few minutes.

### Updating the site after changes

```bash
git add .
git commit -m "Update: add new paper / news / etc."
git push
```

GitHub Pages rebuilds automatically on every push.

### Custom domain (optional)
1. Add a file named `CNAME` in the root with your domain:
   ```
   yourname.com
   ```
2. Configure DNS with your registrar to point to GitHub Pages.
3. In repo Settings → Pages → Custom domain, enter your domain.

---

## Customization

| What | Where |
|------|-------|
| Color scheme | `css/style.css` — edit the `:root` variables at the top |
| Fonts | Add a Google Fonts `<link>` in each HTML `<head>` and update `font-family` in CSS |
| Nav brand name | All HTML files — the `<a class="nav-brand">` element |
| Footer text | All HTML files — the `<footer>` element |
| Number of visible news items | `js/main.js` — `initShowMore('news-list', 'news-show-more', 5)` (change `5`) |
