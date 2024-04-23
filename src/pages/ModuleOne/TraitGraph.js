import React from 'react';
import './HeroSec.css'; // Assuming this is the correct path for your CSS
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register the chart.js components
ChartJS.register(CategoryScale, LinearScale,BarElement,Title, Tooltip, Legend);


// Dataset for the bar graph, defining labels and associated data
const data = {
  labels: ['Vision', 'Work Ethic', 'Resilience', 'Positivity', 'Passion'], // Categories of entrepreneurial traits
  datasets: [
    {
      label: 'Percentage of Business Owners Citing', // Description of the dataset
      data: [61, 45, 41, 35, 34], // Percentage values corresponding to each trait
      backgroundColor: [ // Colours for the bars in a translucent format
        'rgba(94, 195, 229, 0.5)', // Bright Sky Blue
        'rgba(3, 15, 40, 0.5)', // Dark Blue
        'rgba(94, 195, 229, 0.5)', // Repeating pattern for visual consistency
        'rgba(3, 15, 40, 0.5)',
        'rgba(94, 195, 229, 0.5)'
      ],
      borderColor: [ // Border colours for the bars
        'rgba(94, 195, 229, 1)',
        'rgba(3, 15, 40, 1)',
        'rgba(94, 195, 229, 1)',
        'rgba(3, 15, 40, 1)',
        'rgba(94, 195, 229, 1)'
      ],
      borderWidth: 1, // Width of the borders around the bars
    },
  ],
};

// Configuration options for the bar graph
const options = {
  scales: {
    y: {
      type: 'linear', // Linear scale for the y-axis
      beginAtZero: true, // Y-axis begins at zero
    },
  },
  responsive: true, // Graph size will adapt to the container size
  maintainAspectRatio: true, // Maintains width-to-height ratio
  aspectRatio: 2, // Aspect ratio of the graph
  plugins: {
    legend: {
      display: false, // Do not display the legend
    },
    tooltip: {
      enabled: true, // Enable tooltips
      mode: 'index',
      intersect: false,
      backgroundColor: '#030F28', // Tooltip background colour
      titleColor: '#ffffff', // Tooltip title colour
      bodyColor: '#ffffff', // Tooltip body colour
      borderColor: '#5EC3E5', // Tooltip border colour
      borderWidth: 1, // Width of the border
      cornerRadius: 4, // Rounded corners of the tooltip
      bodySpacing: 5, // Spacing within the tooltip
    },
  },
};

// Component to render the success graph
const SucGraph = () => {
  return (
    <div className="success-graph"> // Wrapper for styling and alignment
      <div className="success-graph__container"> // Container for the graph and its title
        <h2 className="success-graph__title">Attributes for Success</h2> // Title for the graph
        <Bar data={data} options={options} /> // Renders the bar graph with provided data and options
        <p className="success-graph__source-reference">Data sourced from Forbes article: "What Traits Do We Need To Succeed As Entrepreneurs?" (2015)</p> // Citation for the data source
      </div>
    </div>
  );
};

export default SucGraph;