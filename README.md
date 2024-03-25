# AI Insights Dashboard Documentation

check out:
https://ai-insights-dashboard-delta.vercel.app/

## Introduction

Welcome to the documentation for the AI Insights Dashboard! This React application serves as a platform for visualizing insights derived from AI services. It provides a visually appealing and interactive interface for users to explore AI-generated data through various charts and graphs.

### Features

- **Data Visualization:** The dashboard utilizes the Recharts library to display AI data through interactive charts and graphs.
- **User-Friendly Design:** The frontend design prioritizes user interaction and aesthetics, maintaining a consistent theme throughout the application.
- **Mock AI Service Integration:** The application fetches mock AI data to provide insights, which are then presented in the dashboard.

## Getting Started

To get started with the AI Insights Dashboard, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/pushsontakke/AI-Insights-Dashboard.git
   ```

2. Navigate to the `Dashboard-AI-insights` folder.

3. Install dependencies:
   ```
   npm install
   ```

4. Run the project locally:
   ```
   npm start
   ```

## Usage

Once the application is running locally, you can access the AI Insights Dashboard through your web browser. Here are some key points regarding the usage:

- **Navigation:** The dashboard is a single-page application, allowing users to navigate between different insights seamlessly.
- **Charts and Graphs:** Explore AI data through various types of visualizations, including bar charts for category distribution, line charts for trends over time, and area charts for user statistics.
- **Interactivity:** Charts and graphs are interactive, allowing users to hover over data points for additional information or zoom in/out for closer examination.

## Folder Structure

The project's folder structure is organized for ease of development and maintenance. Here's a brief overview:

- **`src` Directory:** Contains all the source code for the React application.
  - **`components` Directory:** Houses reusable components used throughout the application, such as chart components and UI elements.
  - **`Data` Directory:** Contains mock AI data in JSON file.
  - **`App.css` :** Stores CSS files for styling and layout. The theme colour `#FFF5EA` is maintained throughout.
  - **`App.js`:** Entry point of the application, routing is managed here.
  - **`index.js`:** Renders the root component (`App`) into the DOM.

## Dependencies

The AI Insights Dashboard relies on several dependencies to function properly. Here are the key dependencies used in the project:

- **React:** JavaScript library for building user interfaces.
- **Recharts:** Charting library for React applications, used for data visualization.
- **CSS3:** Styling and layout are done using CSS3.

## Contributing

Contributions to the AI Insights Dashboard are welcome! Whether it's bug fixes, feature enhancements, or general improvements, feel free to open issues or pull requests on the GitHub repository.
