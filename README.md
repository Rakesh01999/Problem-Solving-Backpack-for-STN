
```markdown
# 🧠 TypeScript Problem Solving Tasks

This repository contains a collection of TypeScript problem-solving tasks focused on core JavaScript/TypeScript concepts such as array manipulation, object handling, functional composition, sorting, reduction, and more. Each task demonstrates clean, well-commented, and practical examples for mastering TypeScript fundamentals.

---

## 📁 File Structure

```

tasks.ts         // Main TypeScript file containing all task implementations
tsconfig.json    // TypeScript configuration file
README.md        // Project documentation

````

---

## 📦 Prerequisites

Ensure the following are installed:

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [TypeScript](https://www.typescriptlang.org/)
- [ts-node](https://typestrong.org/ts-node/)

Install TypeScript and ts-node globally if not already:

```bash
npm install -g typescript ts-node
````

---

## 🚀 Running the Project

### Compile with TypeScript:

```bash
tsc tasks.ts
node tasks.js
```

### Or Run Directly with ts-node:

```bash
ts-node tasks.ts
```

---

## ✅ Tasks Overview

| #  | Task                      | Description                                            |
| -- | ------------------------- | ------------------------------------------------------ |
| 1  | Array Filtering & Mapping | Filters all females and maps the rest to a names array |
| 2  | Object Manipulation       | Extracts book titles from a list of books              |
| 3  | Function Composition      | Composes 3 simple math functions                       |
| 4  | Sorting Objects           | Sorts a list of cars by manufacturing year             |
| 5  | Find and Modify           | Searches and updates a person’s age by name            |
| 6  | Array Reduction           | Uses `reduce` to sum all even numbers                  |
| 7  | Leap Year Checker         | Checks if a given year is a leap year                  |
| 8  | Unique Values             | Filters duplicate values using `Set`                   |
| 9  | Advanced Sorting          | Sorts students by their average grades                 |
| 10 | Reduce with Objects       | Calculates total value from quantity × price           |

---

## 🧪 Sample Output

```bash
Male Names: [ 'Zahed', 'Akash' ]
Book Titles: [ 'The Hobbit', '1984', 'Clean Code' ]
Composed Result: 23
Sorted Cars: [
  { make: 'Honda', model: 'Civic', year: 2015 },
  { make: 'Toyota', model: 'Camry', year: 2018 },
  { make: 'Tesla', model: 'Model 3', year: 2021 }
]
Updated People: [
  { name: 'Faria', age: 25, gender: 'female' },
  { name: 'Zahed', age: 30, gender: 'male' },
  { name: 'Anupama', age: 22, gender: 'female' },
Unique Values: [ 1, 2, 3, 4, 5 ]
Sorted Students by Grade: [
  { name: 'Nafis', grades: [ 95, 92, 89 ] },
  { name: 'Rakesh', grades: [ 85, 90, 78 ] },
  { name: 'Tamim', grades: [ 70, 75, 80 ] }
]
Total Value of Items: 290
```

---

## ✍️ Author

**Rakesh Biswas**
🔗 [Portfolio](https://rakesh-biswas-portfolio.netlify.app/)
---


---
