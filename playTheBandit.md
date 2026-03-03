# 🛡️ Backend Learning Journey – Bandit (OverTheWire)
**Log Entry by:** `Gibson-1` (Hacking & Security Culture Geek)

This repository serves as a technical log of my journey through the Bandit wargame, focusing on Linux terminal mastery and connecting CLI logic with programming patterns.

---

## 🔐 How to Connect

To reconnect to the game server:
ssh bandit0@bandit.labs.overthewire.org -p 2220
# Replace 'bandit0' with your current level (e.g., bandit6)

**Initial Password:** bandit0

---

# 🧠 Level Walkthrough Notes

## 🟢 Level 0 → 1
**Password:** ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If

**Concept: Using mktemp -d**
Creates a temporary directory with a random name (e.g., tmp.aX83jKz).
- **Why?** Harder to guess, prevents progress loss, and follows security best practices.

---

## 🟢 Level 1 → 2
**Password:** 263JGJPfgU6LtdEvgfWU1XP5yac29mFx

**Concept: Special Filenames**
The file name `-` is interpreted as an option flag by cat.
- **Solution:** Use the relative path ./ to treat it as a file string.
Command: cat ./-

---

## 🟢 Level 2 → 3
**Password:** MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx

**Concept: Filenames With Spaces**
The file name was "--spaces in this filename--".
- **Solution:** Wrap the name in quotes and specify the path.
Command: cat ./"--spaces in this filename--"

---

## 🟢 Level 3 → 4
**Password:** 2WmrDFRmJIq3IPxneAaMGhap0pFhF3NJ

**Concept: Hidden Files & Directories**
If ls shows nothing, files might be hidden (starting with .).
- **Solution:** Use ls -a (All) to reveal the "invisible".
Commands:
cd inhere
ls -a
cat ...Hiding-From-You

---

## 🟢 Level 4 → 5
**Password:** 4oQYVPkxZOOEOO5pTW81FB8j8lxXGUQw

**Concept: The file Command (The typeof of Linux)**
Analyzes the real content/DNA of a file regardless of its name.
- **Solution:** Scan all files in the directory to find the "ASCII text".
Command: file ./*
# Output: ./-file07: ASCII text
cat ./-file07

---

## 🟢 Level 5 → 6
**Password:** HWasnPhtq9AVKe0dmk45nxy20cvUa6EG

**Concept: The find Query (The .filter() approach)**
Used to find a specific file based on metadata: Human-readable, 1033 bytes, Not executable.

Command: find . -type f -size 1033c ! -executable

### 🛠️ Breakdown:
1. find .: Search starting here (current dir + subdirs).
2. -type f: Only files (ignores directories). if (item.type === "file").
3. -size 1033c: Exactly 1033 bytes (c = bytes). if (file.length === 1033).
4. ! -executable: ! is the NOT operator. Excludes programs. if (!file.executable).

Result: cat ./maybehere07/.file2

---

## 🟢 Level 6 → 7
**Password:** HWasnPhtq9AVKe0dmk45nxy20cvUa6EG

**Concept: Global Search & Permissions**
Searching the entire server (/) for a file owned by user bandit7, group bandit6, and size 33 bytes.
Command: find / -user bandit7 -group bandit6 -size 33c 2>/dev/null
*Note: 2>/dev/null hides "Permission Denied" errors.*

---

## 🛠️ Essential Toolset (Dev Logic)

| Linux Command | Programming Analogy | Description |
| :--- | :--- | :--- |
| ls -la | Object.keys(dir) | Lists all files, including hidden ones. |
| file | typeof variable | Identifies the file type (text, data, dir). |
| cd | Entering an object | Change directory. |
| find | array.filter() | Searches files based on specific attributes. |
| ./ | this | Refers to the current relative path. |

---

# 💻 Why This Matters
- Backend Fundamentals: Understanding how systems handle data.
- Security Awareness: Learning how to hide/find info.
- Problem-Solving: Using logic instead of brute force.

🚀 Still learning. Still exploring.