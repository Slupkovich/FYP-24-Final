import React from 'react'; // Importing React hooks and context functionality
import './DownMat.css'; // Link to my CSS file for styles specific to the download materials page

// Array of material objects each containing a name and a file URL
const materials = [
    { name: 'Business Model Canvas', url: '/DownResources/business-model-canvas.doc' },
    { name: 'Value Proposition Canvas', url: '/DownResources/value-proposition-canvas.docx' },
    { name: 'Storyboarding', url: '/DownResources/storyboard-template.docx' },
    { name: 'SWOT Analysis Template', url: '/DownResources/swot-temp.docx' },
    { name: 'Competitor Analysis Grid', url: '/DownResources/competitor-analysis-template.docx' },
    { name: 'Financial Projections Template', url: '/DownResources/financial-plan-for-startup-bus.xlsx' },
    { name: 'Customer Persona Creator', url: '/DownResources/personas-template.docx' }
];

// Component for handling the downloading of materials
const DownloadMaterials = () => {
    // Function to initiate file download
    const downloadFile = (url) => {
        window.open(url, '_blank'); // Opens the file URL in a new tab to start the download
    };

    // Render the DownloadMaterials component
    return (
        <section className="download">
            <div className="download__container">
                <h1 className="download__title">Downloadable Resources</h1>
                <p className="download__description">
                    Explore our range of resources to aid in your entrepreneurial journey. Click to download the materials you need.
                </p>
                <ul className="download__list">
                    {materials.map((material, index) => ( // Mapping each material to a list item
                        <li key={index} className="download__item">
                            <button 
                                className="download__button"
                                onClick={() => downloadFile(material.url)} // Button to trigger download
                            >
                                {material.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default DownloadMaterials;
