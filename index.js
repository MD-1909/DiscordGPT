require("dotenv").config();
const { Client, Events, GatewayIntentBits } = require("discord.js");
const { Configuration, OpenAIApi } = require("openai");

// Load your openAI API key
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Load your Discord Bot's token
const token = process.env.DISCORD_TOKEN;

//Async function to query a question to the openAI model
async function ask(prompt) {
  const response = await openai.createCompletion({
    model: "text-davinci-003", // The model version
    prompt, // The input
    temperature: 0.9, // Value between 0 and 2 that influences the output
    // Lower means more deterministic, while higher means more random
    max_tokens: 256, // Max number of tokens (pieces of words)
    frequency_penalty: 0, // Number between -2 and +2
    // Positive values reduce the likelihood of the model using the same verbatim phrases
    presence_penalty: 0, // Number between -2 and +2
    // Positive values incerase the likelihood of the model talking about new topics
  });
  const answer = response.data.choices[0].text; //Pick out the text from the first response
  return answer;
}

// Create a new discord client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, (c) => {
  console.log("The bot is running.");
});

// Runs everytime a message is sent in the Discord Server
client.on(Events.MessageCreate, async (message) => {
  if (message.content.substring(0, 1) === ".") {
    // When a message starts with a '.'
    const prompt = message.content.substring(1); // Remove the '.' from the message
    const answer = await ask(prompt); // Query the AI
    client.channels
      .fetch(message.channelId)
      .then((channel) => channel.send(answer));
  }
});

// Log in to Discord with your client token
client.login(token);
