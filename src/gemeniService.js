// src/geminiService.js
import axios from 'axios';

// Replace with your actual API key (use environment variables for security)
const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

// API URL with the model endpoint
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;

export const generateGeminiContent = async (text) => {
    const requestBody = {
        contents: [
            {
                parts: [
                    {
                        text: text,
                    },
                ],
            },
        ],
    };

    try {
        const response = await axios.post(GEMINI_API_URL, requestBody, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error generating content from Gemini API", error);
        throw error;
    }
};
