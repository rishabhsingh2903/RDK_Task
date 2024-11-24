# RDK_Tasks

This repository contains two distinct projects:

1. **Weather App** - A Node.js-based CLI application for fetching and managing weather details and favorite cities.
2. **PseudoToCode** - A C++ program to sort an array and find its median.

---

## Weather App

### Overview

A Command Line Interface (CLI) application that allows users to:

- Fetch weather details for a given city.
- Add up to 3 favorite cities.
- Retrieve weather information for favorite cities.
- Update the list of favorite cities.
- Exit the application.

### Technologies Used

- **Node.js**
- **Inquirer.js** (for CLI interaction)
- **Axios** (for API calls)
- **Chalk** (for colorful console output)
- **Figlet** (for styled text in the CLI)

### Setup

1. Navigate to the `weather-app` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run Application:
   ```bash
   node app.js
   ```

## PseudoToCode

1. **Sorting**: Sorts an array of integers in ascending order using a simple sorting algorithm.
2. **Median Calculation**: Calculates and displays the median of the sorted array.

## Technologies Used

- **C++**

### How to Run

1. Compile:
   ```bash
   g++ -o Algo Algo.cpp
   ```
2. Run:
   Mac/Linux
   ```bash
   ./Algo
   ```
   Windows
   ```bash
   Algo.exe
   ```
