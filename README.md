# BaseBot
<br/>

<h3 align="center"><img src="https://user-images.githubusercontent.com/49253492/202847351-75644c95-703c-4185-ae69-796bb21ddae4.png" width="600px"></h3>

<br/>

### **Bienvenue sur la documentation de BaseBot !**

BaseBot est un bot exemple, tournant avec Discord.js v14, et est un fork de [WhatThePhoqueBot](https://github.com/LotharieSlayer/wtpbot.git). Vous trouverez dans ce git un template qui vous servira de base pour votre potentiel futur bot. La documentation en franglais pour aider les français dans l'apprentissage du code.

<br/>

---

<br/>

# Installation : 

Ouvre ton terminal favori depuis le dossier `basebot/` et fait un simple `npm i`.
Si la commande ne marche pas et que vous n'avez pas npm ou node d'installé sur votre ordinateur, installez Node LTS : https://nodejs.org/.

Une fois `npm i` fini, vous pouvez démarrer le bot par un simple `node main.js` depuis le dossier `src/`.

**Ajouter le bot au serveur de production :**
https://discord.com/developers/docs

### **Permissions requises :**

Pour du développement on préférera le code 8 qui est le code pour la permission administrateur. Vous vous référerez à la documentation de Discord plus tard si vous voulez sécuriser les accès de votre bot.

**Code : 8**
![image](https://user-images.githubusercontent.com/49253492/202847019-449aaa87-1be4-436a-9b81-98a3c6322335.png)

**Attention :** VOTRE_CLIENT_ID dans le lien ci-dessous est le Client ID de **votre bot**.

`https://discord.com/api/oauth2/authorize?client_id=VOTRE_CLIENT_ID&permissions=8&scope=bot%20applications.commands`
