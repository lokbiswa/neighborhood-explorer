# Neighborhood Explorer App

## Overview:

The Neighborhood Explorer App is a web application designed for visualizing and analyzing neighborhood and commute data. The app includes three main components:
<img width="1278" alt="image" src="https://github.com/lokbiswa/neighborhood-explorer/assets/71455137/4d1c69fe-d015-458c-a49f-d78d9a614796">


1. **Map Component:**

   - Utilizes Mapbox for dynamic mapping.
   - Represents neighborhood data with a faded blue fill and tracks data as lines.
   - Highlights selected neighborhoods in red upon user interaction.
     
     <img width="924" alt="image" src="https://github.com/lokbiswa/neighborhood-explorer/assets/71455137/22ff2dde-cc22-4879-8689-e061d34af4d4">


2. **Selected Area Info Component:**

   - Displays detailed information about the selected neighborhood.
   - Information includes state, city, and neighborhood name.
   - Dynamically updates with each click on the map.
  
     <img width="332" alt="image" src="https://github.com/lokbiswa/neighborhood-explorer/assets/71455137/b004e85e-e234-468c-acfc-ff57708cd674">


3. **Bar Chart Component:**
   - Utilizes Highcharts to create a dynamic bar chart.
   - Represents commute data for the selected neighborhood.
   - Allows users to visually compare commute properties.

     <img width="1279" alt="image" src="https://github.com/lokbiswa/neighborhood-explorer/assets/71455137/1dd3865e-1025-4f10-8531-5f857f630959">


## How to Use:

1. Clone the repository to your local machine.

```bash
git clone git@github.com:lokbiswa/neighborhood-explorer.git
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
