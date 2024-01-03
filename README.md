# Neighborhood Explorer App

## Overview:

The Neighborhood Explorer App is a web application designed for visualizing and analyzing neighborhood and commute data. The app includes three main components:

1. **Map Component:**

   - Utilizes Mapbox for dynamic mapping.
   - Represents neighborhood data with a faded blue fill and tracks data as lines.
   - Highlights selected neighborhoods in red upon user interaction.

2. **Selected Area Info Component:**

   - Displays detailed information about the selected neighborhood.
   - Information includes state, city, and neighborhood name.
   - Dynamically updates with each click on the map.

3. **Bar Chart Component:**
   - Utilizes Highcharts to create a dynamic bar chart.
   - Represents commute data for the selected neighborhood.
   - Allows users to visually compare commute properties.

## How to Use:

1. Clone the repository to your local machine.

```bash
git clone https://github.com/your-username/neighborhood-explorer.git
cd neighborhood-explorer
```

2. Install dependencies.

```bash
npm install
```

3. Obtain a Mapbox token and set it as an environment variable.
   You can do that using .env file

```
REACT_APP_MAPBOX_TOKEN=your-mapbox-token

```

4. Run the app.

```bash
npm start
```

5. Open the app in your browser at [http://localhost:3000](http://localhost:3000) and explore neighborhood and commute data interactively.

Feel free to contribute or customize the app based on your requirements!
