# OSIPI Documentation Hub

This repository centralizes the documentation of OSIPI’s open-source tools for quantitative MRI into a single, consistent hub.
It uses **MkDocs + Material** along with the **[multirepo plugin](https://github.com/jdoiro3/mkdocs-multirepo-plugin)** to combine documentation scattered across different OSIPI repositories.

---

## Why centralize documentation?

Historically, OSIPI documentation has been spread across many projects, each with its own structure and style. Some sites are static Markdown, others generate pages dynamically (e.g., from galleries or Python docstrings).

A unified hub ensures:

* **One entry point** for all OSIPI docs.
* **Consistent theme and navigation**.
* **Lower maintenance burden**.

---

## Design decisions

### 1. `!import` (via multirepo plugin)

We use `!import` when the target MkDocs site is **simple** — meaning:

* It consists only of Markdown files.
* No dynamic generation of pages (e.g., galleries, API docs from docstrings).
* No additional pre-rendering steps required.

Example:

```yaml
- "(TF4.2) Caplex – Contrast-agent based perfusion MRI": '!import https://github.com/OSIPI/OSIPI_CAPLEX?branch=main&docs_dir=docs&multi_docs=True&config=mkdocs.yml&keep_docs_dir=true'
```

This lets us pull in the **entire navigation** from another repo’s `mkdocs.yml`.

---

### 2. Hyperlinks only

If the site generates pages dynamically or relies on docstrings, importing would miss content. In these cases, we just link to the published site instead:

```yaml
- "(TF2.3) DCE/DSC repository":
    - Documentation: https://osipi.github.io/DCE-DSC-MRI_CodeCollection/
```

This ensures the external site can still evolve independently without breaking our hub.

---

### 3. Mixed approach (possible, but avoided here)

It’s possible to **combine the two approaches**:

* Import static Markdown from a repo.
* Link out to the dynamically generated sections.

Example:

```yaml
- multirepo:
    nav_repos:
      - name: osipi-python-package
        import_url: https://github.com/OSIPI/osipi?branch=main
        imports: [
          docs/index.md, docs/user-guide/*, docs/about/index.md
        ]

nav:
  - OSIPI Python package:
      # here we are not redirecting, but pulling the markdowns
      - Overview: osipi-python-package/docs/index.md
      - User Guide: osipi-python-package/docs/user-guide/index.md
      # below we are redirecting with hyperlink
      - References: https://osipi.github.io/osipi/references/
      - Examples: https://osipi.github.io/osipi/generated/gallery/
```

This works, but it **clutters `mkdocs.yml`** and introduces complexity. For now, we keep it simple:

* Use `!import` for simple MkDocs sites.
* Use links for complex sites.

---

## Running locally

### 1. Create a Virtual Environment

```bash
python -m venv venv
```

### 2. Activate the Virtual Environment

* **macOS/Linux**:

  ```bash
  source venv/bin/activate
  ```
* **Windows (Git Bash)**:

  ```bash
  source venv/Scripts/activate
  ```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Serve the Documentation

```bash
mkdocs serve
```

The site will be available at **[http://127.0.0.1:8000](http://127.0.0.1:8000)**

### 5. (Optional) Deactivate

```bash
deactivate
```