# Assignment 2 – Applied JavaScript  
**Course:** Dynamiska Webbapplikationer 1 (Dynamic Web Applications 1)  
**University:** University of Borås  
**Type:** Group assignment (Group 45)

This repository contains Assignment 2 from the course *Dynamiska Webbapplikationer 1* at the University of Borås.  
The task was to build a small dynamic shopping list application using **JavaScript**, **DOM manipulation**, and a **data-driven structure**.

The purpose of the assignment was to demonstrate:
- creating scripts using JavaScript  
- applying core programming concepts (variables, data types, loops, functions, conditions)  
- generating HTML content dynamically from a data source  
- using external libraries (Bootstrap & Bootstrap Icons)  
- documenting the solution so that others can understand the application  

---

## 🚀 Features

- Displays a product catalog generated entirely from a JavaScript data source (`listItems`)
- “Add to list” buttons update the shopping list dynamically
- Shopping list is stored in an object and rendered from JS
- “Calculate” button shows a summary including:
  - total number of items
  - total price based on product quantities
- Uses Bootstrap and optional custom CSS
- Functional DOM rendering flow:
  - `renderItems()` → generate product catalog
  - `initShoppingList()` → initialize quantities
  - `renderShoppingList()` → update the list view

---

## 📦 Technologies Used
 ● HTML5  
 ● CSS3  
 ● JavaScript (vanilla ES5/ES6)  
 ● Bootstrap CSS  
 ● Bootstrap Icons  

---

## 📁 Project Structure
- index.html
- styles.css
- script.js
  
---

## 📚 Data Source

The application is fully driven by a JavaScript array of objects:

```js
const listItems = [
  {
    name: "",
    id: "",
    description: "",
    price: 0,
    unit: ""
  },
  // …
];
```
**Each item is rendered with:**
- product name
- description
- price
- unit
- a button to add it to the shopping list
Nothing is hardcoded in the HTML - the interface is generated from this data.

🎯 **Implementation Summary**
To complete this assignment, we implemented:
- generating product elements using DOM methods
- event listeners for add buttons
- a shopping list object to track quantities
- a calculation function that multiplies product price by quantity
- dynamic output of total items and cost

👥 **Group Work**
This project was completed collaboratively as part of Assignment 2 in the course Dynamiska Webbapplikationer 1.
All group members contributed to the planning, functionality, structure, and documentation of the application.

📝 **Educational Purpose**
This repository is published for educational and portfolio purposes, demonstrating early experience with:
- DOM-based rendering
- data-driven web interfaces
- basic interaction design
