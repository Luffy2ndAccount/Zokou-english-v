# Zokou-2.0 🚀

Zokou is a multi-device bot designed to enhance your WhatsApp conversations with useful and fun features. Whether it’s managing files, interacting with stickers, or facilitating group management, Zokou is here to assist you!

## Key Features ✨

- **File Download:** Zokou can download audio and video files from links you send, making it easy to share them with your contacts. 🎶📹

- **Sticker Export:** You can export stickers from Telegram and use them in your WhatsApp conversations by simply sending them to Zokou. 😄✨

- **Group Management:** Zokou offers group management features like adding or removing members, configuring rules, and other settings. 👥📋

- **Text to Image:** The best logos have been selected for your convenience. 🖼️🎨

## Fun Features 🎉

- **Jokes and Riddles:** Zokou comes with a collection of jokes and riddles to add fun to your conversations. 😂🤔

- **Inspiring Quotes:** Receive inspiring quotes daily to motivate you. 💪🌟

## How to Get Zokou 🛠️

1. Click on **[Fork](https://github.com/Luffy2ndAccount/Zokou-english-v/fork)** to copy the repo to your GitHub account. Don’t forget to add a star 🌟 to encourage the developers.

2. Obtain a bot session: 

- [Session-1](https://zkscan.onrender.com)  
- [Session-2](https://zokouscan-din3.onrender.com)

3. Deploy Zokou
- **Heroku Deployment:**
1. If you don’t have a **Heroku** account, click [**here**](https://id.heroku.com/login) to create one.
2. Click [**here**](https://dashboard.heroku.com/new?template=https://github.com/Luffy2ndAccount/Zokou-english-v) to deploy the bot on **Heroku**.

- **Koyeb Deployment:**
1. If you don’t have a **Koyeb** account, click [**here**](https://app.koyeb.com/auth/signup) to create one.
2. Click the button below to deploy:

[![Deploy to Koyeb](https://www.koyeb.com/static/images/deploy/button.svg)](https://app.koyeb.com/deploy?name=zokouve&type=docker&image=docker.io%2Fluffy077%2Fzokouve%3Alatest&env%5BPREFIX%5D=.&env%5BAUTO_READ_STATUS%5D=yes&env%5BAUTO_DOWNLOAD_STATUS%5D=yes&env%5BPM_PERMIT%5D=no&env%5BBOT_NAME%5D=Zokou-MD&env%5BBOT_MENU_LINKS%5D=https%3A%2F%2Fi.pinimg.com%2F736x%2F0a%2F70%2F6f%2F0a706f90d6a1fb39919aedfbb7fdd8d3.jpg&env%5BPUBLIC_MODE%5D=yes&env%5BDATABASE_URL%5D=create+on+koyeb&env%5BOWNER_NAME%5D=Djalega%2B%2B&env%5BNUMERO_OWNER%5D=22891733300&env%5BWARN_COUNT%5D=3&env%5BSTARTING_BOT_MESSAGE%5D=yes&env%5BPRESENCE%5D=1&env%5BPM_CHATBOT%5D=no&env%5BSESSION_ID%5D=put+your+session&env%5BANTI_VIEW_ONCE%5D=yes&ports=8000%3Bhttp%3B%2F)

- **Render Deployment:**
1. If you don’t have a **Render** account, click [**here**](https://dashboard.render.com) to create one.
2. Create a new web service.  
3. Choose **Public Git Repository**.  
4. In the field, enter `https://gitlab.com/bankai421341/zabimaru.git`.
5. Click **Connect**.  
6. Select the **Free Plan** if you don’t want to pay.
7. In the **Environment Variable** section, click **Add from .env** and copy the content below:

```env
PREFIX=.
AUTO_READ_STATUS=yes
AUTO_DOWNLOAD_STATUS=yes
PM_PERMIT=no
BOT_NAME=Zokou-MD
BOT_MENU_LINKS=https://i.pinimg.com/736x/0a/70/6f/0a706f90d6a1fb39919aedfbb7fdd8d3.jpg
PUBLIC_MODE=yes
DATABASE_URL=postgresql://zokouve_user:PcNcDevxRd7TcKQPTerL954MB1bbMciX@dpg-cs9ku688fa8c73cbth20-a.oregon-postgres.render.com/zokouve
OWNER_NAME=Djalega++
NUMERO_OWNER=22891733300
WARN_COUNT=3
STARTING_BOT_MESSAGE=yes
PRESENCE=1
PM_CHATBOT=no
SESSION_ID='zokk'
ANTI_VIEW_ONCE="yes"
ANTI_COMMAND_SPAM=no
```

8. Click **Add env** to save, then edit as needed. Don’t forget to enter your session ID.
9. Click **Deploy Service** and enjoy!

    
- **Github Deployement**

  1. Fork The Repo
  2. Edit the file `exemple_de_set.env` to `set.env` and put your session_ID in
  3. create a new file `.github/workflows/deploy.yml` and put this content in :

```yml
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  schedule:
    - cron: '0 */4 * * *'

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: |
        npm install -g pm2
        npm install

    - name: Start application with timeout
      run: |
        timeout 14520s npm run zokou

 ```

## Contributions 🤝

Contributions to Zokou are welcome! If you have ideas for new features, improvements, or bug fixes, feel free to open an issue or submit a pull request. 🙌

Special thanks to:

- **Fatao**, who added commands (Fancy, GPT, Dall-e, APK)  
- **CrazyPrice**, who hosted a second website for the session_id  

## License 📜

The WhatsApp Bot Zokou is released under the [MIT License](https://opensource.org/licenses/MIT).

Enjoy the diverse features of Zokou to enhance your WhatsApp experience! 💬🎉

## Developers:

- [**Djalega++**](https://github.com/djalega8000/Zokou-MD/)
- [**᚛M๏𝓷keℽ D Lบffy᚜**](https://github.com/Faouz995)
