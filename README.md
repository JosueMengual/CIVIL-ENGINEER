# CIVIL-ENGINEER
CONSTRUCTION TOOLS
# Concrete Mix Calculator

A professional, minimalist web tool designed for construction workers. It provides instant calculation of required materials (cement, sand, stone, and water) based on the total concrete volume and selected mix ratio.

## Features

- **Precise Calculation:** Based on standard dosage requirements per cubic meter ($m^3$).
- **Neumorphic Interface:** Professional "Dark Neumorphism" design, optimized for work environments.
- **Responsive Design:** Fully functional on mobile and desktop devices.
- **Input Validation:** Error handling for empty or negative values.
- **Zero Refresh:** Results update via DOM manipulation without reloading the page.

## Technology Stack

- **HTML5:** Semantic structure.
- **CSS3:** Flexbox, CSS Grid, and CSS Variables for theming.
- **JavaScript (ES6+):** Logic based on arrow functions, constants, and dynamic DOM manipulation.

## Engineering Specifications

The calculator uses the following base dosages per $1 m^3$:

| Ratio | Common Use | Cement | Sand | Stone | Water |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1:2:3** | Beams & Columns | 350 kg | 0.56 $m^3$ | 0.84 $m^3$ | 180 L |
| **1:2:4** | Foundations | 300 kg | 0.45 $m^3$ | 0.90 $m^3$ | 170 L |
| **1:3:3** | Floors & Slabs | 280 kg | 0.60 $m^3$ | 0.60 $m^3$ | 170 L |

## Installation and Setup

1. Clone this repository or download `index.html`, `style.css`, and `script.js`.
2. Ensure all three files are in the same directory.
3. Open `index.html` in any modern web browser.
4. Input the volume in cubic meters, select your mix, and click **Calculate Materials**.
