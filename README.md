# hive-frontend

Welcome my repo! This project is designed to showcase  single and multi-select functionalities within dropdown menus, making it a perfect addition to any application requiring dynamic user input options.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before running this project, you need to have Node.js and npm installed on your machine. Node.js 12.x or newer is recommended. You can download and install Node.js from https://nodejs.org/.

### Installing

1. First, clone the project repository to your local machine using Git:

   ```
   git clone https://github.com/jinhuih/hive-frontend
   ```

2. Navigate into the project directory:

   ```
   cd hive-frontend
   ```

3. Install the project dependencies using npm:

   ```
   npm install
   ```

4. Running the Project:

   ```
   npm start
   ```

5. You can now view hive-frontend in the browser.

    ```
    Local:            http://localhost:3000
    On Your Network:  http://10.0.0.45:3000
    ```

## Features
1. Customizable: Supports single and multi-select options.
2. Reusable: Designed with a flexible API for easy integration.
3. User Interaction: 
    1. Open/Close Transitions: Smooth transition effects for dropdown open/close actions.
    2. Continuous Selection: Allows continuous selection in single-select mode, closing only on external click.
    3. Select/Deselect All: Facilitates bulk selection or deselection in multi-select mode.
    4. Checkbox for Multi-Select: Implements checkboxes for clear selection indicators in multi-select mode.
    5. Persistent Dropdown: Remains open for single selections until an external click.
    6. Scrollable Options: Integrates a scrollbar for navigating through numerous options.
    7. Animated Arrow Indicator: Features a smoothly animated arrow for open/close visual cues.

4. Display Selected Options: Clearly shows selected options when the dropdown is closed.

## Technology Stack

1. React: Utilizes React hooks such as useState, useEffect, and useRef for state management and lifecycle events.

2. CSS: Custom styles for the dropdown's appearance and responsiveness.

## Project Structure

1. [src/App.js](src/App.js): Contains the main application logic and demonstrates usage of the Dropdown component.

2. [src/components/Dropdown.js](src/components/Dropdown.js): The reusable dropdown component.

3. [src/styles/Dropdown.css](src/styles/Dropdown.css): Styles specific to the dropdown component.

## API
The component should support both single select and multi select:

Single select example:
```
<Dropdown
    title="Age"
    options={["Twenty", "Twenty one", "Twenty one and a half"]}
    multiSelect={false}
    width="300px"
    placeHolder="Select Age"
/>
```
![alt text](image.png)

Multi select example:
```
<Dropdown
    title="Tag"
    options={["Oliver Hansen", "Van Henry", "April Tucker", "Ralph Hubbard", "Steve Jobs", "Andy Jassy", "Jeff Bezos"]}
    multiSelect={true}
    width="600px"
    placeHolder="Select name(s)"
/>
```
![alt text](image-1.png)


The component should have a flexible API, making it reusable across different parts of one or more applications:

As above example, you can set the `title`, `options`, `multiSelect`, `width`, and `placeHolder`.

