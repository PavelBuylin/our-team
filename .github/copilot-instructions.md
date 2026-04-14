# Copilot Instructions for our-team Repository

## Repository Overview

**our-team** is a lightweight static portfolio website showcasing a team of three developers (Pavel Buylin, Dmitry Voitkov, and Volodymyr Chornobuk). The site consists of:
- A main team landing page (`index.html` with `style.css`)
- Individual profile pages for each team member (`{name}-about.html` with `{name}-about.css`)

This is a **pure HTML and CSS project** with **no build process, no dependencies, and no CI/CD pipeline**. Total repository size: 17 KB.

**Language Composition**: HTML (42.5%), CSS (57.5%)

## Project Type & Architecture

- **Type**: Static website (front-end only)
- **Languages**: HTML5, CSS3
- **Frameworks/Libraries**: None (vanilla HTML and CSS)
- **Build Tool**: None required
- **Package Manager**: Not applicable
- **Testing Framework**: Not applicable
- **Hosting/Deployment**: GitHub Pages-ready

### Directory Structure

The repository has a flat structure with all files in the root directory:

```
/
├── index.html                 # Main team page (team overview cards)
├── style.css                  # Styles for index.html
├── dmitry-about.html          # Dmitry's individual profile page
├── dmitry-about.css           # Styles for dmitry-about.html
├── volodymyr-about.html       # Volodymyr's individual profile page
├── volodymyr-about.css        # Styles for volodymyr-about.html
└── .github/
    └── copilot-instructions.md (this file)
```

**Note**: There are currently no configuration files (package.json, webpack.config.js, etc.), no build scripts, no tests, and no GitHub Actions workflows. The repository is maintained through direct pull requests to HTML/CSS files.

## Building and Validation

### No Build Step Required

This project requires **no compilation or build process**. HTML and CSS files are used directly by browsers.

### Viewing the Site Locally

1. **Using Python (if available)**:
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.

2. **Using Node.js (if available)**:
   ```bash
   npx http-server
   ```

3. **Direct File Access**:
   Simply open any `.html` file directly in a browser (e.g., double-click `index.html`).

### Validation Steps

**No automated tests exist** in this repository. Manual validation is performed by:

1. **Visual inspection**: Open the HTML files in a modern browser (Chrome, Firefox, Safari, Edge)
2. **Responsive design check**: Test at multiple viewport widths (mobile, tablet, desktop)
3. **HTML validation**: Check for proper HTML structure (no unclosed tags, valid nesting)
4. **CSS validation**: Ensure styles are applied correctly and animations work smoothly
5. **Link verification**: Confirm all internal links work correctly

### Known Patterns & Standards

**HTML Structure**:
- Files use UTF-8 encoding with `<meta charset="UTF-8" />`
- Viewport meta tag for responsive design: `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`
- Google Fonts are imported for typography: Playfair Display (headings) and DM Sans (body text)

**CSS Patterns**:
- CSS custom properties (variables) for consistent theming:
  - `--bg`: Dark background (#0e0e0e)
  - `--surface`: Card/container background (#161616)
  - `--border`: Border color (#2a2a2a)
  - `--accent`: Gold accent color (#c8a96e)
  - `--accent-dim`: Transparent accent (#c8a96e with 0.12 alpha)
  - `--text`: Light text color (#f0ede8)
  - `--muted`: Muted text color (#7a7570)

- **Animations**: CSS keyframes for fade-in effects:
  - `fadeDown`: Fades in from top
  - `fadeUp`: Fades in from bottom

- **Responsive design**: Mobile-first approach with `@media (max-width: 600px)` breakpoint
- **Grid layout**: CSS Grid for card/section layouts with `grid-template-columns: repeat(auto-fill, minmax(...))`
- **Hover effects**: Border color and transform changes on card hover

## Critical Information for Making Changes

### When Adding Team Member Profiles

Follow the established pattern:
1. Create `{firstname}-about.html` with the structure matching `dmitry-about.html` or `volodymyr-about.html`
2. Create corresponding `{firstname}-about.css` with the same CSS variables and structure
3. Import fonts from Google Fonts: `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap`
4. Update `index.html` to add a new `.card` entry in the `.grid` container
5. **Important**: Do NOT add HTML structure issues (unclosed tags). The current `index.html` has a nesting error at line 46 (nested `.grid` inside `.grid`) that should be avoided in new profile cards.

### When Modifying Styles

- Always update the CSS custom properties `:root` section if changing colors or theme
- Test animations at different speeds (currently 0.3s-0.8s)
- Ensure responsive design still works at 600px breakpoint
- Check that color contrast remains accessible (current: gold on dark background)

### Common File Dependencies

- `index.html` → `style.css` (linked on line 11)
- `dmitry-about.html` → `dmitry-about.css` (linked on line 11)
- `volodymyr-about.html` → `volodymyr-about.css` (linked on line 11)

**Important**: File names are case-sensitive. Ensure CSS file paths in `<link>` tags match the actual file names exactly.

### Verification Checklist for PRs

Before submitting changes:
1. ✅ Open the modified HTML file(s) in a browser
2. ✅ Verify all visual changes render correctly
3. ✅ Test responsiveness by resizing the browser window
4. ✅ Check for HTML syntax errors (no missing closing tags)
5. ✅ Verify all CSS classes referenced in HTML files exist in the corresponding CSS file
6. ✅ Confirm Google Fonts load correctly (text displays in Playfair Display and DM Sans)
7. ✅ Test animations play smoothly on page load
8. ✅ Ensure all links work correctly (internal and external)

## No Additional Tools Needed

This project requires **no setup**. You can work with HTML and CSS files directly:
- No npm/yarn packages to install
- No build command to run
- No linting configuration
- No testing framework
- No pre-commit hooks
- No Docker containers

Simply edit HTML and CSS files, test in a browser, and submit changes via pull request.

## Contact & Contribution Guidelines

The repository is maintained by the three team members. When making changes:
- Keep commit messages in English or Ukrainian (matching the project's language usage)
- Follow the established HTML/CSS patterns
- Test changes locally before submitting a PR
- Submit PRs to the `main` branch (default branch)