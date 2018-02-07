# _AquariumBot (AquaBot)_

#### _Twitch Chat Bot, 0.1.0_

#### By _Jacob Hixon_

## Description

AquariumBot is a simple Twitch chat bot that will allow custom chat commands, timed announcements, random giveaways and more. The bot will be accessed and interacted with via the [AquariumBot web app](https://github.com/jacobhixon47/aquarium-bot-web)

## Setup/Installation Requirements

#### NOTE: This Bot is currently not intended for public use, as it is still in early development and does not meet Twitch User Auth and Security guidelines. Please refrain from using it, and regard these setup instructions as educational only, until the Standards are met, and this message is removed.

1. _Clone into repository located at https://github.com/jacobhixon47/aquarium-bot-node.git ._
2. _Navigate to the project folder and run_ `$npm install`
3. _Add_ `apiKey.js` _to the root project directory_
4. _Write_ `module.exports = "<YOUR FIREBASE API KEY>";` in `apiKey.js`
5. _Add your Firebase Admin SDK JSON file under the name_ `aquabot-firebase-sdk.json`
6. _Run_ `node app.js` _from the root project directory_

#### Current Features
- Posts the proper saved message when the corresponding command is called in a given Twitch stream chat. (Example: !hello => "Hello World" in the chat)

#### Future Features
- User auth (currently just set to a single user for testing)
- Timed events (call !command every x minutes, etc)
- bot moderation/security (ban users for trolling/spamming, briefly mute for unauthorized url posting, etc)
- Giveaway support
- In-text code for commands (Example: `${twitch}.followers.count` etc)
- Permission levels (admin, regular, etc.
- Most likely more.


## Technologies Used

* NodeJS
* [tmi.js](https://docs.tmijs.org/)
* [Firebase Cloud Firestore](https://firebase.google.com/docs/firestore/)

### License

This file is part of (AquariumBot).

    (AquariumBot) is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    (AquariumBot) is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with the (AquariumBot). If not, see <http://www.gnu.org/licenses/>.

Copyright (c) 2018 **_Jacob Hixon_**
