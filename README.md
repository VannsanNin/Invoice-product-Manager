# Invoice Manager

[![jQuery](https://img.shields.io/badge/jQuery-3.7.1-blue)](https://jquery.com/)
[![HTML5](https://img.shields.io/badge/HTML-5-orange)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS-3-blue)](https://developer.mozilla.org/en-US/docs/Web/CSS)

A lightweight, web-based **Invoice Manager** application for creating and managing invoices. Users can add items, calculate totals with discounts, delete items, and view a running grand total. Built with HTML, CSS, and JavaScript/jQuery, this client-side app is simple to use and deploy, with a clean and responsive interface.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Add Items**: Input item code, title, quantity, unit price, and optional discount percentage.
- **Dynamic Calculations**: Automatically compute subtotal, discount, and final amount per item.
- **Grand Total**: Display a running total of all items, updated in real-time.
- **Delete Items**: Remove items from the invoice with automatic total recalculation.
- **Input Validation**: Ensure valid inputs (e.g., positive quantities, non-negative prices, 0–100% discounts).
- **Responsive Design**: Clean, mobile-friendly UI with hover effects and intuitive layout.
- **Empty State Handling**: Show a friendly message when no items are added.
- **XSS Protection**: Sanitize user inputs to prevent cross-site scripting attacks.

## Demo

Try the live demo [here](#) (replace with a hosted link, e.g., GitHub Pages: `https://github.com/VannsanNin/Invoice-product-Manager`).

![Invoice Manager Screenshot](/asset/image.png)

_Note_: To add a screenshot, capture your application in action, save it as `assets/screenshot.png` in your repository, and update the path above.

## Installation

Follow these steps to run the project locally:

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Edge).
- No additional software is required, as jQuery is loaded via CDN.

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/VannsanNin/Invoice-product-Manager
   cd invoice-manager
   ```
