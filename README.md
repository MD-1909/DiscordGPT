# DiscordGPT - Overview
A Discord Bot that uses the openAI API to provide answers based on the user's messages in a Discord Server.

## Requirements
- Node.js
- Discord Account
- OpenAI Account

## Setting up the project locally 
### NodeJS and Repository setup  
#### Clone the repository and open it in a code editor of your choice
```
https://github.com/Mohammed-D/DiscordGPT.git
```
#### Install dependencies
```
npm install openai discord.js dotenv
```
#### Generate a new OpenAI API key
Navigate to [API Keys](https://platform.openai.com/account/api-keys) and generate a new one, then copy it to the .env file in your local copy of the repo.  
<br>

### Discord Setup
#### Create a new Discord Server of your own
[Step-by-step guide if you're not familiar with the process](https://support.discord.com/hc/en-us/articles/204849977-How-do-I-create-a-server-)
#### Create a new Discord bot
1. Navigate to [discord.com/developers](https://discord.com/developers/applications).
2. Click on 'New Application' in the top right corner. 
3. Name it whatever you want, just ensure that the name does not contain the word 'Discord' in it.
4. Accept the T&C and click on Create.
5. Customise the Avatar or description if you want to.
6. Navigate to the Bot tab from the navigation bar on the left.
7. Click on 'Add Bot'.
8. Reset the token to generate a new one and copy it to the .env file in the local copy of the repository.
9. Scroll down to 'Privileged Gateway Intents' and turn on the 'Message Content Intent' option.
10. Save your changes.
11. Navigate to the 'OAuth2' tab.
12. Click on the Authorization method dropdown and select 'Custom URL'.
13. In the text box, enter the following url: 
```
https://discord.com/oauth2/authorize?scope=bot&permissions=8&client_id=
```
14. After the '=' paste your client id that is visible under 'Client information' on the same screen.
15. Copy this url and open it in a new tab. You should be seeing a window like this <br/>
<br/>![image](https://user-images.githubusercontent.com/46313081/224243895-a870514a-3ca7-4a90-ba25-783df367aead.png)  
16. Select your server from the dropdown and click 'Continue' -> 'Authorise'.
17. Complete the Captcha and the bot should now be a part of your server.

## Usage
Run the following command to start the bot:
```
node ./index.js
```
You will get a message saying 'The bot is running.' if all goes well.  
Open any text channel in your Discord Server and type a message starting with a `.`  
*(This behaviour can be modified according to your desire by changing the `.` on line 46 of index.js to something else like a `>` post which, messages starting with that symbol will trigger the bot.)*  
After a couple of seconds, the bot should provide you with a reply.  
![image](https://user-images.githubusercontent.com/46313081/224249101-30b647a1-93f3-42c3-bb4d-ca45a385a0c2.png)  
Done! Happy Hacking!
<br/>

## Credits
- [Adrian Twarog (YouTube)](https://www.youtube.com/@AdrianTwarog) for the idea.
- [Mo Shakib (GitHub)](https://github.com/Mo-Shakib) for help when I got stuck in debugging the code.

