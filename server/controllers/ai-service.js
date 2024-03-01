// controllers/openaiController.js
const apiKey = "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";
const { OpenAIApi, Configuration } = require('openai');

const configuration = new Configuration({
    apiKey: apiKey,
});

const openai = new OpenAIApi(configuration);

const getHelloMessage = async (req, res) => {
    try {
        res.status(200).send({
            message: 'Hello from CodeX!',
        });
    } catch (error) {
        console.error(error);
        res.status(500).send(error || 'Something went wrong');
    }
};


const postCompletion = async (req, res) => {
    try {
        const prompt = req.body;

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${prompt}`,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
        });

        res.status(200).send({
            bot: response.data.choices[0].text,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send(error || 'Something went wrong');
    }
};


module.exports = {
    getHelloMessage,
    postCompletion
}