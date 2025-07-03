## 🛠️ Setup and Run Instructions

Follow these steps to set up and run the project:

---

### 1. ✅ Prerequisites

Make sure **Python** is installed on your system. You can verify it by running:

```bash
python --version
```

---

### 2. 📦 Initialize the Virtual Environment

Set up your environment and install dependencies with:

```bash
python setup_env.py initialize
```

This will:

* Create a virtual environment (default: `venv`)
* Install all packages listed in `requirements.txt`
* Output the command to activate the virtual environment

---

### 3. 🚀 Activate the Virtual Environment

Use the command printed after initialization to activate the environment:

* On **Windows** (use **Git Bash** for compatibility — PowerShell/CMD may not work):

  ```bash
  source venv/Scripts/activate
  ```

* On **macOS/Linux**:

  ```bash
  source venv/bin/activate
  ```

---

### 4. 🔧 Start the Development Server

Once the virtual environment is active, start the MkDocs server:

```bash
mkdocs serve
```

This will launch a local server at:
👉 `http://127.0.0.1:8000`

---

### 5. 🧹 Clean Up (Optional)

To remove the virtual environment and temporary files, run:

```bash
python setup_env.py clean
```

This will delete the environment and clean the project directory.