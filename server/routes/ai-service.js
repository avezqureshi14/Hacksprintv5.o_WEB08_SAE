const express = require('express');
const axios = require('axios');
const aiRouter = express.Router();

const OPENAI_API_KEY = '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'; // Replace with your actual API key

aiRouter.post('/generateText', async (req, res) => {
    const { prompt } = req.body;

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/engines/davinci-codex/completions',
            {
                prompt,
                max_tokens: 150,
            },
            {
                headers: {
                    Authorization: `Bearer ${OPENAI_API_KEY}`,
                },
            }
        );

        const generatedText = response.data.choices[0].text;
        res.json({ generatedText });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = aiRouter;
