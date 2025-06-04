# Getting Started with OSIPI Centralized Documentation ( *This is just a Dummy Page* )

The [Open-Source Initiative for Perfusion Imaging (OSIPI)][OSIPI] is dedicated to advancing medical imaging research by providing open-source tools, pipelines, and documentation for quantitative MRI, particularly in perfusion imaging techniques such as Arterial Spin Labeling (ASL), Dynamic Contrast-Enhanced (DCE), Dynamic Susceptibility Contrast (DSC), and Intravoxel Incoherent Motion (IVIM). To streamline access to OSIPI’s resources, we are unifying documentation from multiple repositories into a centralized, standardized framework using [MkDocs][MkDocs] with the [Material for MkDocs][Material for MkDocs] theme. This guide will help you set up and contribute to the OSIPI centralized documentation hub.

  [OSIPI]: https://osipi.github.io/
  [MkDocs]: https://www.mkdocs.org
  [Material for MkDocs]: https://squidfunk.github.io/mkdocs-material/

## Overview

OSIPI’s documentation is currently scattered across various repositories, each with its own structure, styling, and format, including static Markdown files, GitHub wikis, and dynamically generated HTML pages. This inconsistency makes navigation and maintenance challenging. The centralized documentation hub addresses these issues by:

- **Standardizing documentation**: Creating a uniform structure and style across all OSIPI projects.
- **Improving accessibility**: Enhancing navigation and searchability for researchers, developers, and clinicians.
- **Simplifying maintenance**: Using automation-friendly tools like MkDocs and GitHub Actions to streamline updates.
- **Ensuring scalability**: Building a framework that supports future growth and integration of new documentation.

This guide outlines how to set up the centralized documentation environment using [MkDocs][MkDocs] with [Material for MkDocs][Material for MkDocs], either via Python’s `pip` or Docker, to contribute to or deploy the OSIPI documentation hub.

!!! tip
    If you’re new to MkDocs or Python, we recommend following the `pip` installation method for simplicity. For a quick setup with all dependencies pre-installed, use the Docker approach.

## Installation

### with pip <small>recommended</small> { #with-pip data-toc-label="with pip" }

Material for MkDocs is published as a [Python package][Python package] and can be installed using `pip`, ideally within a [virtual environment][virtual environment] to manage dependencies effectively. Follow these steps to set up the OSIPI documentation environment:

1. **Install Python**: Ensure Python 3.8+ is installed on your system. You can download it from [python.org](https://www.python.org/downloads/).

2. **Create a virtual environment** (optional but recommended):
   ``` sh
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Material for MkDocs**:
   === "Latest"
       ``` sh
       pip install mkdocs-material
       ```

   === "9.x (stable)"
       ``` sh
       pip install mkdocs-material=="9.*"
       ```
       > This ensures compatibility by locking to the current major version, avoiding potential breaking changes. You can also create a reproducible build with:
       ``` sh
       pip freeze > requirements.txt
       pip install -r requirements.txt
       ```

This will install [MkDocs][MkDocs], [Markdown][Markdown], [Pygments][Pygments], and [Python Markdown Extensions][Python Markdown Extensions], ensuring all dependencies are compatible.

!!! info
    For a comprehensive guide on Python package management, check out [Using Python’s pip to Manage Your Projects’ Dependencies][Using Python’s pip].

  [Python package]: https://pypi.org/project/mkdocs-material/
  [virtual environment]: https://realpython.com/what-is-pip/#using-pip-in-a-python-virtual-environment
  [Markdown]: https://python-markdown.github.io/
  [Pygments]: https://pygments.org/
  [Python Markdown Extensions]: https://facelessuser.github.io/pymdown-extensions/
  [Using Python’s pip]: https://realpython.com/what-is-pip/

### with docker

The official [Material for MkDocs Docker image][Docker image] provides a quick setup with all dependencies pre-installed. To use it:

1. **Install Docker**: Ensure Docker is installed. Download it from [docker.com](https://www.docker.com/get-started).

2. **Pull the Material for MkDocs image**:
   === "Latest"
       ``` sh
       docker pull squidfunk/mkdocs-material
       ```

   === "9.x (stable)"
       ``` sh
       docker pull squidfunk/mkdocs-material:9
       ```

3. **Run the container**:
   ``` sh
   docker run --rm -it -p 8000:8000 -v ${PWD}:/docs squidfunk/mkdocs-material
   ```
   This maps your local directory to the container’s `/docs` folder and starts the MkDocs development server at `http://localhost:8000`.

The Docker image includes plugins like [mkdocs-minify-plugin][mkdocs-minify-plugin] and [mkdocs-redirects][mkdocs-redirects] for optimized builds.

!!! warning
    The Docker container is intended for local previewing only and is not suitable for production deployment due to potential security vulnerabilities in the MkDocs development server.

??? question "How to add plugins to the Docker image?"
    To include additional plugins, create a `Dockerfile` to extend the official image:
    ``` Dockerfile
    FROM squidfunk/mkdocs-material
    RUN pip install mkdocs-macros-plugin mkdocs-glightbox
    ```
    Build the custom image:
    ``` sh
    docker build -t squidfunk/mkdocs-material .
    ```

  [Docker image]: https://hub.docker.com/r/squidfunk/mkdocs-material/
  [mkdocs-minify-plugin]: https://github.com/byrnereese/mkdocs-minify-plugin
  [mkdocs-redirects]: https://github.com/datarobot/mkdocs-redirects

### with git

For the latest development version, clone the [Material for MkDocs repository][GitHub] and install it locally:

``` sh
git clone https://github Bonaparte Docs Centralization Project
cd mkdocs-material
pip install -e .
```

This approach is useful for testing cutting-edge features but may include unstable changes.

  [GitHub]: https://github.com/squidfunk/mkdocs-material

## Setting Up the OSIPI Documentation Hub

The OSIPI centralized documentation hub is built using MkDocs with Material for MkDocs to consolidate documentation from repositories like [OSIPI DCE-DSC Code Collection][DCE-DSC], [ASL Lexicon][ASL Lexicon], and [IVIM-MRI Code Collection][IVIM-MRI]. Follow these steps to set up the project locally:

1. **Clone the central documentation repository**:
   ``` sh
   git clone https://github.com/OSIPI/OSIPI_DOCS.git
   cd OSIPI_DOCS
   ```

2. **Install dependencies**:
   ``` sh
   pip install -r requirements.txt
   ```
   This installs Material for MkDocs and additional plugins like `mkdocs-macros-plugin` for dynamic content.

3. **Run the development server**:
   ``` sh
   mkdocs serve
   ```
   Open `http://localhost:8000` to preview the site.

4. **Explore the structure**:
   - **Home Page**: Categorizes all documentation and includes a flowchart for navigation.
   - **Repository Overview Page**: Summarizes each repository’s purpose with direct links and update logs.
   - **Dynamic Sidebar & Table of Contents**: Enhances navigation with collapsible menus and section links.
   - **Search Functionality**: Allows quick access to content across repositories.

!!! tip
    To contribute, check the `README.md` in the [OSIPI_DOCS][OSIPI_DOCS] repository for detailed instructions on repository structure, dependencies, and contribution guidelines.

  [DCE-DSC]: https://github.com/OSIPI/DCE-DSC-MRI_CodeCollection/wiki
  [ASL Lexicon]: https://github.com/OSIPI/ASL-Lexicon
  [IVIM-MRI]: https://osipi.github.io/TF2.4_IVIM-MRI_CodeCollection/
  [OSIPI_DOCS]: https://github.com/OSIPI/OSIPI_DOCS

## Contributing to the Documentation

To contribute to the OSIPI centralized documentation:

1. **Fetch documentation**: Documentation is pulled from individual repositories (e.g., [ASL Parameter Reporter][ASL Parameter Reporter]) and displayed in categorized sections to avoid duplication.
2. **Follow the contributor’s guide**: The `README.md` includes instructions for adding new documentation, updating content, and maintaining consistency.
3. **Use GitHub Actions**: Automated workflows handle builds and deployment to [GitHub Pages][GitHub Pages].
4. **Test locally**: Use `mkdocs serve` to preview changes before submitting a pull request.

!!! note
    Ensure your contributions align with the standardized structure and styling defined in the `mkdocs.yml` configuration file to maintain consistency.

  [ASL Parameter Reporter]: https://github.com/OSIPI/asl-parameter-reporter
  [GitHub Pages]: https://pages.github.com/

## Automation and Deployment

The documentation hub uses GitHub Actions for automated builds and deployment to GitHub Pages. Key features include:

- **Automated Updates**: Changes in individual repositories trigger updates in the central hub.
- **Search Functionality**: Enabled via the `mkdocs` built-in search plugin for efficient content discovery.
- **Responsive Design**: Material for MkDocs ensures compatibility across devices.

To deploy the site:
``` sh
mkdocs gh-deploy
```
This pushes the built site to the `gh-pages` branch of the [OSIPI_DOCS][OSIPI_DOCS] repository.
