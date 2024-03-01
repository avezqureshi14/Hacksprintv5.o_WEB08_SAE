import React, { useState } from 'react';
import axios from 'axios';

const LinkedinData = () => {
    const [result, setResult] = useState(null);

    const handleClick = async () => {
        try {
            // Define the API endpoint
            const url = "https://api.apify.com/v2/acts/bebity~linkedin-jobs-scraper/run-sync-get-dataset-items?token=apify_api_K5K8YdtNs0u7PD6u0f9ohkDfI5lFj61HYJJy";

            // Define your input data in JSON format
            const input_data = {
                title: "Software Developer",
                location: "India"
            };

            // Send the POST request with the input payload
            const response = await axios.post(url, input_data);

            // Check the response
            if (response.status === 200) {
                // Success! Extract the dataset items from the response
                setResult(response.data);
            } else {
                // Print the error if the request was not successful
                console.error(`Error: ${response.status}, ${response.data}`);
            }
        } catch (error) {
            // Handle any other errors that might occur
            console.error('An error occurred:', error);
        }
    };

    return (
        <div>
            <button onClick={handleClick}>Run API</button>
            {result && (
                <div>
                    <h2>Result:</h2>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default LinkedinData;
