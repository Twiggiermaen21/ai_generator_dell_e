'use server'

const OpenAI = require('openai');

const apiKey = process.env.OPENAI_API_KEY;

const openaimodel = new OpenAI({
    apiKey
});

export const generateImage = async (formData) => {

    const prompt = formData.get('prompt');
    if (!prompt) {
        return { error: 'Prompt is required' };
    }

    const res = await openaimodel.images.generate({
        prompt: prompt,
        n: 1,
        size: '512x512',
    });

    return JSON.parse(JSON.stringify(res));
}