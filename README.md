---

# WeatherApp

Welcome to WeatherApp! This is a web application built using Next.js that allows users to check the current weather conditions of any location worldwide.

## Features

- **Current Weather Data**: Users can enter the name of a city or allow the app to access their device's location to fetch and display the current weather conditions, including temperature, weather condition, and location.
- **Responsive Design**: The application is designed to work seamlessly across various devices, including desktops, tablets, and mobile phones, providing an optimal user experience.
- **Navigation**: The app includes a navigation bar that allows users to navigate between different pages, including Home, About, Services, and Contact.
- **Routing**: Routing is implemented using React Router to enable navigation between different pages without the need for a full page reload, providing a smoother user experience.

## Installation

To run the WeatherApp locally on your machine, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/WeatherApp_Task.git
```

2. Navigate to the project directory:

```bash
cd WeatherApp_Task
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## API Integration

WeatherApp uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data. The API provides access to current weather data, forecasts, and historical data for any location worldwide. 

## Folder Structure

The project follows a typical folder structure for a React application:

- **src**: Contains the source code of the application.
  - **components**: Contains reusable React components used throughout the application.
  - **pages**: Contains the main pages of the application, such as Home, About, Services, and Contact.
  - **app**: Contains the main layout components, including the navigation bar.
  - **api**: Contains utility functions for fetching data from external APIs.
  - **styles**: Contains CSS modules for styling the components.
  - **public**: Contains static assets, such as images and favicon.

## Technologies Used

- **Next.js**: A JavaScript library for building user interfaces.
- **React Router**: A library for declarative routing in React applications.
- **CSS Modules**: Allows for modular and scoped styling of React components.
- **OpenWeatherMap API**: Provides weather data for integration into the application.

## Contributors

- Mayur Kawale (mefisto04)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize the README file further based on your project's specific requirements and features.
