/**
 * @author Lothaire Guée
 * @description
 * 		The file contains the functions to load the commands and events in the bot at startup.
 */


// Used to get all the directory of the commands and events.
const { promisify } = require( "util" );
const { glob } = require( "glob" );
const globPromise = promisify( glob );


/* ----------------------------------------------- */
/* FUNCTIONS                                       */
/* ----------------------------------------------- */


/**
 * Load the main file from plugins in the client.
 * @param {Client} client The client of the bot.
 */
 async function loadPlugins( client ) {
    const mainFilesPlugins = await globPromise( `${process.cwd()}/plugins/*/*.js` );
    mainFilesPlugins.map( file => {
        console.log(file)
        const plugin = require( file );
        plugin ? client.plugins[file] = true : client.plugins[file] = false;
        plugin.execute(client);
        console.log("[Plugin] " + file + " chargé.");
    });
}


/**
 * Load the commands in the client.
 * @param {Client} client The client of the bot.
 */
async function loadCommands( client ) {
    const files = await globPromise( `${process.cwd()}/commands/*/*.js` );
    files.map( file => {
        const command = require( file );
        client.commands.set( command.data.name, command );
    });
}


/**
 * Load the events in the client.
 * @param {Client} client The client of the bot.
 */
async function loadEvents( client ) {
    const files = await globPromise( `${process.cwd()}/events/*.js` );
    files.map( file => {
        const event = require( file );
        if ( event.once )
            client.once( event.name, ( ...args ) => event.execute( ...args, client ) );
        else
            client.on( event.name, ( ...args ) => event.execute( ...args, client ) );
    });
}


/**
 * Load the commands into the specified guild.
 * @param {Client} client The client of the bot.
 * @param {string} guildId The guild's ID.
 */
async function loadCommandsToGuild( client, guildId ) {
    const commandsArray = [];
    client.commands.map( command => {
        commandsArray.push( command.data.toJSON() );
    });

    // Si vous ne voulez pas charger les commandes dans un serveur spécifique, vous pouvez utiliser ces lignes de code.
    // if(guildId === "724408079550251080"){
    //     await client.guilds.cache.get( guildId ).commands.set([]);
    //     return
    // }

    await client.guilds.cache.get( guildId ).commands.set( commandsArray );
    console.log( `Loaded application (/) commands to the guild! (${guildId})` );
}


/**
 * Used to load the commands in all the guids where the client is present.
 * @param {Client} client The bot's client.
 */
async function loadCommandToAllGuilds( client ) {
    client.guilds.cache.forEach( (value, key) => {
        loadCommandsToGuild( client, key )
    });
    // console.log( "Loaded application (/) commands to the guild!\nThe commands may take up to an hour before being available on the guilds." );
}


/* ----------------------------------------------- */
/* MODULE EXPORTS                                  */
/* ----------------------------------------------- */
module.exports = {
    loadPlugins,
    loadCommands,
    loadEvents,
    loadCommandsToGuild,
    loadCommandToAllGuilds
}