/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/messagesystem/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc Lightweight message system with lots of new text codes
 * @help
 * ============================================================================
 * For terms and conditions using this plugin in your game please visit:
 * https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * Become a Patron to get access to beta/alpha plugins plus other goodies!
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * Version: Alpha R9
 * ----------------------------------------------------------------------------
 * Compatibility: Only tested with my CGMZ plugins.
 * Made for RPG Maker MZ 1.9.0
 * ----------------------------------------------------------------------------
 * Description: This is a lightweight message system that mainly adds new text
 * codes for things like showing the item icon with its name. It also has text
 * codes for CGMZ plugin objects, such as displaying a profession name with
 * its icon. There is also some basic functionality for altering the message
 * window and its associated windows.
 * ----------------------------------------------------------------------------
 * Documentation:
 * ----------------------------Alpha Notes-------------------------------------
 * Planned features to be added:
 * 1) Options to change message window height (message window only)
 * 2) Conditional text codes to display text only in certain conditions
 *
 * Want additional features not already present/listed above? Make suggestions
 * on the Patreon Post, Itch.io Page, or in my discord under the #suggestions
 * channel!
 * https://discord.gg/Gbx7JXP
 * --------------------------New Text Codes------------------------------------
 * The following text codes allow you to display an item name with its icon
 * \ii[x] - Draw item x icon then name
 * \wi[x] - Draw weapon x icon then name
 * \ai[x] - Draw armor x icon then name
 * \ski[x] - Draw skill x icon then name
 * \sti[x] - Draw state x icon then name
 * \acti[x] - Draw actor x icon then name (requires [CGMZ] Actor Upgrade)
 * \eni[x] - Draw enemy x icon then name (requires [CGMZ] Enemy Upgrade)
 * 
 * \iib[x] - Draw item x name then icon
 * \wib[x] - Draw weapon x name then icon
 * \aib[x] - Draw armor x name then icon
 * \skib[x] - Draw skill x name then icon
 * \stib[x] - Draw state x name then icon
 *
 * The following text codes allow you to display database object names:
 * \in[x] - Draw item x name
 * \an[x] - Draw armor x name
 * \wn[x] - Draw weapon x name
 * \skn[x] - Draw skill x name
 * \stn[x] - Draw state x name
 * \en[x] - Draw enemy x name
 * \tn[x] - Draw troop x name
 * \cn[x] - Draw class x name
 * \cen[x] - Draw common event x name
 * \mn[x] - Draw map x name
 *
 * The following text codes allow you to get random text:
 * \rand[x|y|z] - Will randomly choose to display either x, y, or z
 * 
 * \randl[id] - Will randomly choose to display a random string from a
 * predefined list
 * 
 * \rands[list|data] - Will randomly choose a random string from a
 * predefined list (the saved lists). This random value will then be
 * saved, and using the same text code will always return the same string.
 * Can be used to randomly generate NPC names which are random per
 * playthrough, but once generated will always stay the same.
 *
 * The following text codes allow you to make text bold or italics:
 * \_ - Toggles bold on/off. Ex: \_this is bold\_ this is not
 * \- - Toggles italics on/off. Ex: \-this is italics\- this is not
 *
 * The following text codes allow you to change text properties
 * \oc[x] - Changes the text outline color to color x. Same as built
 * in \c[x] for the color number. Ex: \oc[1]. Use \oc[-1] for default.
 * 
 * \ow[x] - Changes the text outline width to x. Ex \ow[1]. Use \ow[3] for
 * default.
 * 
 * \po[x] - Changes the text paint opacity to x. Ex \po[125]. Use \po[255]
 * for default.
 * 
 * \ff[x] - Changes the font face used to x (should be font family, not
 * font filename). Default RMMZ fonts are rmmz-mainfont and rmmz-numberfont
 * When using other fonts, it is recommended to preload them first. You can
 * preload them through any plugin that offers the ability to preload fonts,
 * if you would like to stick with [CGMZ] the plugin that handles that is
 * [CGMZ] Preloader
 * 
 * The following text codes have misc effects:
 * \date[x] - Prints the current date in x format (see date format section).
 *
 * \input[keyboard|gamepad|ps|nintendo] - If the user last used the keyboard,
 * it will show the keyboard text. Otherwise, it will show the gamepad text.
 * If the playstation / nintendo options are provided, it will further
 * choose which gamepad text to show based on the last used controller
 * brand (xbox is considered the default gamepad text). Note that you do not
 * have to use ps/nintendo in your text code, \input[keyboard|gamepad] is
 * valid, for if your text does not need to worry about controller brand.
 *
 * \evalb[x] - Will run whatever is between the brackets as JavaScript code.
 * Note that you should return a string here. It is only meant for very basic
 * JS applications. For complex code, see below eval code.
 *
 * \eval[x] - Will run the associated custom JS code set up via plugin params.
 * Note that you should return a string here. This can handle complex code, and
 * should also work with text codes whereas the basic eval text code will not.
 * 
 * To draw the name of the currently selected difficulty (requires CGMZ
 * Difficulty):
 * \difficulty
 * 
 * To draw the icon and name of a profession (requires CGMZ Professions):
 * \prof[x]
 * substitute x for the profession name. If it is an actor profession, add a
 * - and the actor id after the profession name. Example: Cooking-2
 * 
 * To draw the icon and name of a crafting recipe (requires CGMZ Crafting):
 * \craft[x]
 * substitute x for the recipe name.
 * 
 * To draw the icon and name of a reputation (requires CGMZ Reputations):
 * \rep[x-y]
 * substitute x for the reputation name, and y for the reputation category.
 * 
 * To draw the icon and name of a reputation rank (requires CGMZ Reputations):
 * \repRank[x]
 * substitute x for the reputation rank id.
 * 
 * To draw the icon and name of a dungeon tool (requires CGMZ Dungeon Tools):
 * \dt[x]
 * substitute x for the dungeon tool's symbol
 * 
 * To draw the icon and name of a currency (requires CGMZ Currency System):
 * \cur[x]
 * substitute x for the currency id.
 * Use "default" for default currency. Ex: \cur[default]
 * ----------------------Window Wide Text Codes--------------------------------
 * There are also some new text codes that affect the entire window, such as
 * the windowskin or window tone. They are as follows:
 *
 * \wpad[x] - Will change the window padding to whatever x is (number).
 * You can also do \wpad[default] to restore the padding to the default.
 *
 * \wbo[x] - Will change the window back opacity to whatever x is (number).
 * You can also do \wbo[default] to restore the back opacity to the default.
 *
 * \wskin[x] - Will change the windowskin to whatever x is (filename).
 * Please make sure your windowskin is in the System folder of images.
 * You can also do \wskin[default] to restore the windowskin to the default.
 *
 * \wtone[x,x,x] - Will change the window's tint (tone) to the RGB value of
 * each x value. Examples:
 * \wtone[-68,-68,-68] - A darker windowskin
 * \wtone[68,68,68] - A lighter windowskin
 * You can also do \wtone[default] to restore the tone to the default.
 * ------------------------Message Window Only---------------------------------
 * Some text codes only work in the Message Window (Show Text command). These
 * are:
 *
 * \rum[x] - Will rumble connected game pads based on rumble preset set up in
 * plugin parameters. Requires [CGMZ] Rumble.
 *
 * \spd[x] - Will change the message speed by adding waits between each
 * character equal to x. Use \spd[0] to reset to normal.
 *
 * \wait[x] - Will wait for x frames, allowing you to use a custom wait amount
 * instead of the default 15 / 60 frame waits (1/4 sec and 1 sec wait)
 * ---------------------------Integrations-------------------------------------
 * [CGMZ] Difficulty
 * When using [CGMZ] Difficulty, the \difficulty text code becomes available
 * which can display the current difficulty.
 *
 * [CGMZ] Professions
 * When using [CGMZ] Professions, the \prof[x] text code becomes available
 * which can display the profession name with icon
 *
 * [CGMZ] Crafting
 * When using [CGMZ] Crafting, the \craft[x] text code becomes available
 * which can display a recipe name with icon
 *
 * [CGMZ] Reputations
 * When using [CGMZ] Reputations, the \rep[x] and \repRank[x] text codes become
 * available which can display a reputation name + icon or a reputation rank
 * name + icon.
 *
 * [CGMZ] Dungeon Tools
 * When using [CGMZ] Dungeon Tools, the \dt[x] text code becomes available
 * which can display a dungeon tool's icon and name.
 *
 * [CGMZ] Currency System
 * When using [CGMZ] Currency System, the \cur[x] text code becomes available
 * which can display a currency icon and name.
 *
 * [CGMZ] Rumble
 * When using [CGMZ] Rumble, the \rum[x] text code becomes available which can
 * rumble any connected gamepads the player has.
 *
 * [CGMZ] Actor Upgrade
 * When using [CGMZ] Actor Upgrade, the \acti[x] text code becomes available
 * which can display the actor's name with their icon
 *
 * [CGMZ] Enemy Upgrade
 * When using [CGMZ] Enemy Upgrade, the \eni[x] text code becomes available
 * which can display the enemy's name with their icon
 * -------------------------Plugin Commands------------------------------------
 * This plugin does not have any plugin commands.
 * ---------------------------Saved Games--------------------------------------
 * This plugin fully supports saved games.
 * ✓ You should be able to add this  plugin to a saved game
 * ✓ You can modify parameters and it will reflect accurately in game
 * ✓ You can remove this plugin with no issue to save data
 * -----------------------------Filename---------------------------------------
 * The filename of this plugin's JS file MUST be CGMZ_MessageSystem.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * --------------------------Latest Version------------------------------------
 * Hi all, this latest version adds controller brand to the input text code, 
 * so you can now show different text for keyboard, xbox, playstation, or
 * nintendo players. This means you could show A for players using an xbox
 * gamepad and X for players using a playstation controller.
 *
 * This update also added a wait text code for the message window only, which
 * allows you to type in the exact amount of frames to wait. By default, you
 * only have access to 1/4 second and 1 second waits. This lets you type in
 * the wait frame count directly.
 *
 * Version Alpha R9
 * - Added option to show different gamepad text by controller brand
 * - Added wait text code
 *
 * @command Set Windowskin
 * @desc Change the tone of the message windows
 *
 * @arg Windowskin
 * @type file
 * @dir img/
 * @desc Sets the windowskin to use in messages
 *
 * @command Set Tone
 * @desc Change the tone of the message windows
 *
 * @arg Tone
 * @type struct<Tone>
 * @desc Set the tone of the windowskin. Use Red = -256 or blank to go back to default tone
 *
 * @command Clear Message Settings
 * @desc Reverts all message settings set via plugin commands to defaults
 *
 * @param Random Lists
 * @type struct<RandomList>[]
 * @default []
 * @desc Set up predefined lists of strings here for use in the \randl text code
 *
 * @param Random Saved Lists
 * @type struct<RandomList>[]
 * @default []
 * @desc Set up predefined lists of strings here for use in the \rands text code
 *
 * @param Eval Codes
 * @type struct<Code>[]
 * @default []
 * @desc Set up predefined lists of script calls to make from the eval text code
 *
 * @param Auto Color Settings
 *
 * @param Auto Colors
 * @parent Auto Color Settings
 * @type struct<AutoColor>[]
 * @default []
 * @desc Set up words that are automatically colored here
 *
 * @param Auto Color Case Insensitive
 * @parent Auto Color Settings
 * @type boolean
 * @default false
 * @desc If true, auto-coloring will match words without checking capitalization.
 *
 * @param Integrations
 *
 * @param Rumble Presets
 * @parent Integrations
 * @type struct<Rumble>[]
 * @default []
 * @desc Set up predefined rumble settings, and then access them by id (beginning at 1 for first preset)
*/
/*~struct~Tone:
 * @param Red
 * @type number
 * @default 0
 * @min -256
 * @max 255
 * @desc The red of the tone
 *
 * @param Green
 * @type number
 * @default 0
 * @min -255
 * @max 255
 * @desc The green of the tone
 *
 * @param Blue
 * @type number
 * @default 0
 * @min -255
 * @max 255
 * @desc The blue of the tone
*/
/*~struct~RandomList:
 * @param Id
 * @desc The id used to refer to this list in your text code
 *
 * @param List
 * @type text[]
 * @default []
 * @desc List of strings to randomly choose from when the text code is called
*/
/*~struct~Rumble:
 * @param Index
 * @type number
 * @min -1
 * @default -1
 * @desc The index of the controller (0 indexed). Set to -1 to rumble every connected gamepad
 *
 * @param Start Delay
 * @type number
 * @min 0
 * @max 4800
 * @default 0
 * @desc The delay (in ms) before the rumble starts
 *
 * @param Duration
 * @type number
 * @min 0
 * @max 5000
 * @default 0
 * @desc The duration (in ms) of the rumble
 *
 * @param Weak Magnitude
 * @type number
 * @decimals 2
 * @min 0.00
 * @max 1.00
 * @default 1.00
 * @desc The weak magnitude of the rumble
 *
 * @param Strong Magnitude
 * @type number
 * @decimals 2
 * @min 0.00
 * @max 1.00
 * @default 1.00
 * @desc The strong magnitude of the rumble
*/
/*~struct~Code:
 * @param Id
 * @desc This is what you type in to access the associated custom JS code.
 *
 * @param JS
 * @type multiline_string
 * @desc The custom JS code to run. Note that your code should return a string.
*/
/*~struct~AutoColor:
 * @param Name
 * @desc Not used by the plugin. You can type out the name of the color to easily see what the color is later.
 * 
 * @param Color
 * @type color
 * @default 0
 * @desc The color to use for the associated word list
 *
 * @param Words
 * @type text[]
 * @default []
 * @desc List of words that will be colored the associated color.
*/
Imported.CGMZ_MessageSystem = true;
CGMZ.Versions["Message System"] = "Alpha R9";
CGMZ.MessageSystem = {};
CGMZ.MessageSystem.parameters = PluginManager.parameters('CGMZ_MessageSystem');
CGMZ.MessageSystem.AutoColorCaseInsensitive = (CGMZ.MessageSystem.parameters["Auto Color Case Insensitive"] === 'true');
CGMZ.MessageSystem.RandomLists = CGMZ_Utils.parseJSON(CGMZ.MessageSystem.parameters["Random Lists"], [], "[CGMZ] Message System", "Your Random Lists parameter was set up incorrectly and could not be read.");
CGMZ.MessageSystem.RandomSavedLists = CGMZ_Utils.parseJSON(CGMZ.MessageSystem.parameters["Random Saved Lists"], [], "[CGMZ] Message System", "Your Random Saved Lists parameter was set up incorrectly and could not be read.");
CGMZ.MessageSystem.RumblePresets = CGMZ_Utils.parseJSON(CGMZ.MessageSystem.parameters["Rumble Presets"], [], "[CGMZ] Message System", "Your Rumble Presets parameter was set up incorrectly and could not be read.");
CGMZ.MessageSystem.EvalCodes = CGMZ_Utils.parseJSON(CGMZ.MessageSystem.parameters["Eval Codes"], [], "[CGMZ] Message System", "Your Eval Codes parameter was set up incorrectly and could not be read.");
CGMZ.MessageSystem.AutoColors = CGMZ_Utils.parseJSON(CGMZ.MessageSystem.parameters["Auto Colors"], [], "[CGMZ] Message System", "Your Auto Colors parameter was set up incorrectly and could not be read.");
//=============================================================================
// CGMZ_Temp
//-----------------------------------------------------------------------------
// Registration and processing for new plugin commands
//=============================================================================
//-----------------------------------------------------------------------------
// Set up random lists
//-----------------------------------------------------------------------------
const CGMZ_MessageSystem_CGMZTemp_createPluginData = CGMZ_Temp.prototype.createPluginData;
CGMZ_Temp.prototype.createPluginData = function() {
	CGMZ_MessageSystem_CGMZTemp_createPluginData.call(this);
	this.messageSystem = {};
	this.messageSystem.randomLists = {};
	this.messageSystem.evalCodes = {};
	this.messageSystem.rumblePresets = [null];
	this.messageSystem.autoColors = {};
	this.messageSystem.hasAutoColors = false;
	for(const listJSON of CGMZ.MessageSystem.RandomLists) {
		const listObj = CGMZ_Utils.parseJSON(listJSON, null, "[CGMZ] Message System", "One of your random lists had invalid JSON and could not be read.");
		if(!listObj) continue;
		const list = CGMZ_Utils.parseJSON(listObj.List, null, "[CGMZ] Message System", "One of your random lists had invalid JSON and could not be read.");
		if(!list) continue;
		this.messageSystem.randomLists[listObj.Id.toLowerCase()] = list;
	}
	for(const evalJSON of CGMZ.MessageSystem.EvalCodes) {
		const evalObj = CGMZ_Utils.parseJSON(evalJSON, null, "[CGMZ] Message System", "One of your eval codes had invalid JSON and could not be read.");
		if(!evalObj) continue;
		this.messageSystem.evalCodes[evalObj.Id.toLowerCase()] = evalObj.JS;
	}
	for(const rumbleJSON of CGMZ.MessageSystem.RumblePresets) {
		const rumbleObj = CGMZ_Utils.parseJSON(rumbleJSON, null, "[CGMZ] Message System", "One of your rumble presets had invalid JSON and could not be read.");
		if(!rumbleObj) continue;
		const rumble = {
			index: Number(rumbleObj.Index),
			startDelay: Number(rumbleObj["Start Delay"]),
			duration: Number(rumbleObj.Duration),
			weakMagnitude: parseFloat(rumbleObj["Weak Magnitude"]),
			strongMagnitude: parseFloat(rumbleObj["Strong Magnitude"])
		};
		this.messageSystem.rumblePresets.push(rumble);
	}
	for(const colorJSON of CGMZ.MessageSystem.AutoColors) {
		const colorObj = CGMZ_Utils.parseJSON(colorJSON, null, "[CGMZ] Message System", "One of your auto colors had invalid JSON and could not be read.");
		if(!colorObj) continue;
		const wordList = CGMZ_Utils.parseJSON(colorObj.Words, [], "[CGMZ] Message System", "One of your auto colors had invalid JSON for its word list and could not be read.");
		for(const word of wordList) {
			const entry = (CGMZ.MessageSystem.AutoColorCaseInsensitive) ? word.toLowerCase() : word;
			this.messageSystem.autoColors[entry] = Number(colorObj.Color);
			this.messageSystem.hasAutoColors = true;
		}
	}
};
//-----------------------------------------------------------------------------
// Get random string from list via id
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.getTextCodeRandLString = function(id) {
	const list = this.messageSystem.randomLists[id.toLowerCase()];
	if(!list) return "LIST WITH THAT ID DOES NOT EXIST";
	const index = Math.randomInt(list.length);
	return list[index];
};
//-----------------------------------------------------------------------------
// Get rumble preset
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.getMessageSystemRumblePreset = function(id) {
	return this.messageSystem.rumblePresets[id];
};
//-----------------------------------------------------------------------------
// Register Plugin Commands
//-----------------------------------------------------------------------------
const alias_CGMZ_MessageSystem_registerPluginCommands = CGMZ_Temp.prototype.registerPluginCommands;
CGMZ_Temp.prototype.registerPluginCommands = function() {
	alias_CGMZ_MessageSystem_registerPluginCommands.call(this);
	PluginManager.registerCommand("CGMZ_MessageSystem", "Set Windowskin", this.pluginCommandMessageSystemSetWindowskin.bind(this));
	PluginManager.registerCommand("CGMZ_MessageSystem", "Set Tone", this.pluginCommandMessageSystemSetTone.bind(this));
	PluginManager.registerCommand("CGMZ_MessageSystem", "Clear Message Settings", this.pluginCommandMessageSystemClearMessageSettings.bind(this));
};
//-----------------------------------------------------------------------------
// Plugin Command - Set Windowskin
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandMessageSystemSetWindowskin = function(args) {
	$cgmz.changeMessageSystemWindowskin(args.Windowskin);
};
//-----------------------------------------------------------------------------
// Plugin Command - Set Tone
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandMessageSystemSetTone = function(args) {
	const tone = CGMZ_Utils.parseToneJSON(args.Tone, "CGMZ Message System");
	$cgmz.changeMessageSystemTone(tone);
};
//-----------------------------------------------------------------------------
// Plugin Command - Clear Message Settings
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandMessageSystemClearMessageSettings = function(args) {
	$cgmz.clearMessageSystemSettings();
};
//=============================================================================
// CGMZ_Core
//-----------------------------------------------------------------------------
// Store saved message system data
//=============================================================================
//-----------------------------------------------------------------------------
// Create message system data
//-----------------------------------------------------------------------------
const alias_CGMZ_MessageSystem_CGMZ_Core_createPluginData = CGMZ_Core.prototype.createPluginData;
CGMZ_Core.prototype.createPluginData = function() {
	alias_CGMZ_MessageSystem_CGMZ_Core_createPluginData.call(this);
	this._messageSystemData = {};
	this._messageSystemData.savedLists = {};
	this._messageSystemData.savedListData = {};
	for(const listJSON of CGMZ.MessageSystem.RandomSavedLists) {
		const listObj = CGMZ_Utils.parseJSON(listJSON, null, "CGMZ Message System", "One of your random saved lists had invalid JSON and could not be read.");
		if(!listObj) continue;
		const list = CGMZ_Utils.parseJSON(listObj.List, null, "CGMZ Message System", "One of your random saved lists had invalid JSON and could not be read.");
		if(!list) continue;
		this._messageSystemData.savedLists[listObj.Id.toLowerCase()] = list;
	}
};
//-----------------------------------------------------------------------------
// Add any missing message system data after load save game
//-----------------------------------------------------------------------------
const alias_CGMZ_MessageSystem_CGMZ_Core_createAfterLoad = CGMZ_Core.prototype.createAfterLoad;
CGMZ_Core.prototype.createAfterLoad = function() {
	alias_CGMZ_MessageSystem_CGMZ_Core_createAfterLoad.call(this);
	if(typeof this._messageSystemData === 'undefined') {
		this._messageSystemData = {};
	}
	if(typeof this._messageSystemData.savedLists === 'undefined') {
		this._messageSystemData.savedLists = {};
		this._messageSystemData.savedListData = {};
	}
	for(const listJSON of CGMZ.MessageSystem.RandomSavedLists) {
		const listObj = CGMZ_Utils.parseJSON(listJSON, null, "CGMZ Message System", "One of your random saved lists had invalid JSON and could not be read.");
		if(!listObj) continue;
		const list = CGMZ_Utils.parseJSON(listObj.List, null, "CGMZ Message System", "One of your random saved lists had invalid JSON and could not be read.");
		if(!list) continue;
		id = listObj.Id.toLowerCase();
		if(!this._messageSystemData.savedLists[id]) this._messageSystemData.savedLists[id] = list;
	}
};
//-----------------------------------------------------------------------------
// Change message system windowskin
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.changeMessageSystemWindowskin = function(windowskin) {
	this._messageSystemData.windowskin = windowskin;
};
//-----------------------------------------------------------------------------
// Change message system tone
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.changeMessageSystemTone = function(tone) {
	this._messageSystemData.tone = [tone.Red, tone.Green, tone.Blue];
	if(tone.Red === -256) this._messageSystemData.tone = null;
};
//-----------------------------------------------------------------------------
// Get a message system param
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getMessageSystemParam = function(param) {
	return this._messageSystemData[param];
};
//-----------------------------------------------------------------------------
// Clear all saved message system settings
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.clearMessageSystemSettings = function() {
	return this._messageSystemData = {};
};
//-----------------------------------------------------------------------------
// Change message system windowskin
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getMessageSystemSavedList = function(listId) {
	return this._messageSystemData.savedLists[listId];
};
//-----------------------------------------------------------------------------
// Get saved list item (if exists) or create one if not exists, then save the new one
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getTextCodeRandSString = function(listId, dataId) {
	const data = this._messageSystemData.savedListData[dataId];
	if(data) return data;
	const list = this.getMessageSystemSavedList(listId);
	if(!list || list.length === 0) return "";
	const index = Math.randomInt(list.length);
	const item = list.splice(index, 1);
	this._messageSystemData.savedListData[dataId] = item[0];
	return this._messageSystemData.savedListData[dataId];
};
//=============================================================================
// Window_Base
//-----------------------------------------------------------------------------
// Add additional text codes
//=============================================================================
//-----------------------------------------------------------------------------
// Also initialize tone setting
//-----------------------------------------------------------------------------
const alias_CGMZ_MessageSystem_WindowBase_initialize = Window_Base.prototype.initialize;
Window_Base.prototype.initialize = function(rect) {
	alias_CGMZ_MessageSystem_WindowBase_initialize.apply(this, arguments);
	this._cgmz_MessageSystem_tone = null;
};
//-----------------------------------------------------------------------------
// Update to text code tone if available
//-----------------------------------------------------------------------------
const alias_CGMZ_MessageSystem_WindowBase_updateTone = Window_Base.prototype.updateTone;
Window_Base.prototype.updateTone = function() {
	if(this._cgmz_MessageSystem_tone) {
		this.setTone(this._cgmz_MessageSystem_tone[0], this._cgmz_MessageSystem_tone[1], this._cgmz_MessageSystem_tone[2]);
	} else {
		alias_CGMZ_MessageSystem_WindowBase_updateTone.apply(this, arguments);
	}
};
//-----------------------------------------------------------------------------
// Also add additional replacement text codes
//-----------------------------------------------------------------------------
const alias_CGMZ_MessageSystem_WindowBase_convertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters;
Window_Base.prototype.convertEscapeCharacters = function(text) {
	text = alias_CGMZ_MessageSystem_WindowBase_convertEscapeCharacters.apply(this, arguments);
	// --------------------------------------------------------- DEFAULT RMMZ--
	// item icon with name
	text = text.replace(/\x1bII\[(\d+)\]/gi, (_, p1) =>
		this.CGMZ_itemWithIconTextCode(parseInt(p1), "item")
	);
	text = text.replace(/\x1bAI\[(\d+)\]/gi, (_, p1) =>
		this.CGMZ_itemWithIconTextCode(parseInt(p1), "armor")
	);
	text = text.replace(/\x1bWI\[(\d+)\]/gi, (_, p1) =>
		this.CGMZ_itemWithIconTextCode(parseInt(p1), "weapon")
	);
	text = text.replace(/\x1bSKI\[(\d+)\]/gi, (_, p1) =>
		this.CGMZ_itemWithIconTextCode(parseInt(p1), "skill")
	);
	text = text.replace(/\x1bSTI\[(\d+)\]/gi, (_, p1) =>
		this.CGMZ_itemWithIconTextCode(parseInt(p1), "state")
	);
	// item name with icon -----------------------------------------------------------
	text = text.replace(/\x1bIIB\[(\d+)\]/gi, (_, p1) =>
		this.CGMZ_itemWithIconTextCodeBackwards(parseInt(p1), "item")
	);
	text = text.replace(/\x1bAIB\[(\d+)\]/gi, (_, p1) =>
		this.CGMZ_itemWithIconTextCodeBackwards(parseInt(p1), "armor")
	);
	text = text.replace(/\x1bWIB\[(\d+)\]/gi, (_, p1) =>
		this.CGMZ_itemWithIconTextCodeBackwards(parseInt(p1), "weapon")
	);
	text = text.replace(/\x1bSKIB\[(\d+)\]/gi, (_, p1) =>
		this.CGMZ_itemWithIconTextCodeBackwards(parseInt(p1), "skill")
	);
	text = text.replace(/\x1bSTIB\[(\d+)\]/gi, (_, p1) =>
		this.CGMZ_itemWithIconTextCodeBackwards(parseInt(p1), "state")
	);
	// data object names -----------------------------------------------------------
	text = text.replace(/\x1bIN\[(\d+)\]/gi, (_, p1) =>
		this.CGMZ_nameTextCode(parseInt(p1), "item")
	);
	text = text.replace(/\x1bAN\[(\d+)\]/gi, (_, p1) =>
		this.CGMZ_nameTextCode(parseInt(p1), "armor")
	);
	text = text.replace(/\x1bWN\[(\d+)\]/gi, (_, p1) =>
		this.CGMZ_nameTextCode(parseInt(p1), "weapon")
	);
	text = text.replace(/\x1bSKN\[(\d+)\]/gi, (_, p1) =>
		this.CGMZ_nameTextCode(parseInt(p1), "skill")
	);
	text = text.replace(/\x1bSTN\[(\d+)\]/gi, (_, p1) =>
		this.CGMZ_nameTextCode(parseInt(p1), "state")
	);
	text = text.replace(/\x1bEN\[(\d+)\]/gi, (_, p1) =>
		this.CGMZ_nameTextCode(parseInt(p1), "enemy")
	);
	text = text.replace(/\x1bTN\[(\d+)\]/gi, (_, p1) =>
		this.CGMZ_nameTextCode(parseInt(p1), "troop")
	);
	text = text.replace(/\x1bCN\[(\d+)\]/gi, (_, p1) =>
		this.CGMZ_nameTextCode(parseInt(p1), "class")
	);
	text = text.replace(/\x1bCEN\[(\d+)\]/gi, (_, p1) =>
		this.CGMZ_nameTextCode(parseInt(p1), "commonEvent")
	);
	text = text.replace(/\x1bMN\[(\d+)\]/gi, (_, p1) =>
		this.CGMZ_nameTextCode(parseInt(p1), "map")
	);
	// random text ---------------------------------------------------------
	text = text.replace(/\x1bRAND\[(.*?|.*?)\]/gi, (_, p1) => {
		const matches = p1.split("|");
		return (matches.length > 0) ? matches[Math.randomInt(matches.length)] : "";
	});
	text = text.replace(/\x1bRANDL\[(.*?)\]/gi, (_, p1) => {
		return $cgmzTemp.getTextCodeRandLString(p1);
	});
	text = text.replace(/\x1bRANDS\[(.*?|.*?)\]/gi, (_, p1) => {
		const ids = p1.split("|");
		return (ids.length === 2) ? $cgmz.getTextCodeRandSString(ids[0], ids[1]) : "";
	});
	// window effects ---------------------------------------------------------
	text = text.replace(/\x1bWPAD\[(default|\d+)\]/gi, (_, p1) => {
		this.padding = (p1 === "default") ? $gameSystem.windowPadding() : parseInt(p1);
		return "";
	});
	text = text.replace(/\x1bWBO\[(default|\d+)\]/gi, (_, p1) => {
		this.backOpacity = (p1 === "default") ? $gameSystem.windowOpacity() : parseInt(p1);
		return "";
	});
	text = text.replace(/\x1bWTONE\[(default|-?\d+,-?\d+,-?\d+)\]/gi, (_, p1) => {
		const newTone = p1.split(",").map(rgb => parseInt(rgb).clamp(-255, 255));
		this._cgmz_MessageSystem_tone = (p1 === "default" || newTone.length !== 3) ? null : newTone;
		return "";
	});
	text = text.replace(/\x1bWSKIN\[(\S+)\]/gi, (_, p1) => {
		this.windowskin = (p1 === "default") ? ImageManager.loadSystem("Window") : ImageManager.loadSystem(p1);
		return "";
	});
	// other ---------------------------------------------------------
	// last input type
	text = text.replace(/\x1bINPUT\[(.*?\|.*?\]{0,1})\]/gi, (_, p1) => {
		const matches = p1.split("|");
		const lastInputType = $cgmzTemp._lastInputType;
		if(lastInputType === 'gamepad') {
			if(matches.length > 2) {
				const brand = $cgmzTemp.getLastGamepadBrand();
				switch(brand) {
					case 'playstation': return matches[2];
					case 'nintendo': return matches[3];
				}
			}
			return matches[1];
		}
		return matches[0];
	});
	// current date with format
	text = text.replace(/\x1bDATE\[(\d+)\]/gi, (_, p1) =>
		CGMZ_Utils.createDateText(parseInt(p1))
	);
	// eval (basic)
	text = text.replace(/\x1bEVALB\[(.*?)\]/gi, (_, p1) => {
		const fn = new Function(p1);
		return fn.call(this);
	});
	// eval (advanced)
	text = text.replace(/\x1bEVAL\[(.*?)\]/gi, (_, p1) => {
		const code = $cgmzTemp.messageSystem.evalCodes[p1];
		const fn = new Function(code);
		return this.convertEscapeCharacters(fn.call(this));
	});
	// --------------------------------------------------------------- CGMZ----
	// CGMZ Difficulty
	if(Imported.CGMZ_Difficulty) text = text.replace(/\x1bDIFFICULTY/gi, $cgmz.getDifficulty());
	// CGMZ Professions
	if(Imported.CGMZ_Professions) {
		text = text.replace(/\x1bPROF\[([0-9a-zA-Z\- ]+)\]/gi, (_, p1) =>
			this.CGMZ_professionTextCode(p1)
		);
	}	
	// CGMZ Crafting
	if(Imported.CGMZ_Crafting) {
		text = text.replace(/\x1bCRAFT\[([0-9a-zA-Z ]+)\]/gi, (_, p1) =>
			this.CGMZ_craftingTextCode(p1)
		);
	}
	// CGMZ Reputations
	if(Imported.CGMZ_Reputations) {
		text = text.replace(/\x1bREP\[([0-9a-zA-Z\- ]+)\]/gi, (_, p1) =>
			this.CGMZ_repTextCode(p1)
		);
		text = text.replace(/\x1bREPRANK\[([0-9a-zA-Z ]+)\]/gi, (_, p1) =>
			this.CGMZ_repRankTextCode(p1)
		);
	}
	// CGMZ Dungeon Tools
	if(Imported.CGMZ_DungeonTools) {
		text = text.replace(/\x1bDT\[([0-9a-zA-Z]+)\]/gi, (_, p1) =>
			this.CGMZ_dungeonToolTextCode(p1)
		);
	}
	// CGMZ Currency System
	if(Imported.CGMZ_CurrencySystem) {
		text = text.replace(/\x1bCUR\[([0-9a-zA-Z]+)\]/gi, (_, p1) =>
			this.CGMZ_currencyTextCode(p1)
		);
	}
	// CGMZ Actor Upgrade
	if(Imported.CGMZ_ActorUpgrade) {
		text = text.replace(/\x1bACTI\[(\d+)\]/gi, (_, p1) =>
			this.CGMZ_auItemWithIconTextCode(parseInt(p1))
		);
	}
	// CGMZ Enemy Upgrade
	if(Imported.CGMZ_EnemyUpgrade) {
		text = text.replace(/\x1bENI\[(\d+)\]/gi, (_, p1) =>
			this.CGMZ_euItemWithIconTextCode(parseInt(p1))
		);
	}
	// ------------------------------------------------------ Auto Color Last--
	if($cgmzTemp?.messageSystem?.hasAutoColors) {
		const autoColors = $cgmzTemp.messageSystem.autoColors;
		const flags = (CGMZ.MessageSystem.AutoColorCaseInsensitive) ? "gi" : "g";
		const autoColorRegexp = new RegExp(Object.keys(autoColors).join("|"), flags); 
		text = text.replace(autoColorRegexp, function(match) {
			let check = match;
			if(CGMZ.MessageSystem.AutoColorCaseInsensitive) {
				check = check.toLowerCase();
			}
			const color = $cgmzTemp.messageSystem.autoColors[check];
			return `\\c[${color}]${match}\\c[0]`.replace(/\\/g, "\x1b").replace(/\x1b\x1b/g, "\\");
		});
	}
	return text;
};
//-----------------------------------------------------------------------------
// Get text replacement for \II[x], \AI[x], \WI[x], \SKI[x], \STI[x]
//-----------------------------------------------------------------------------
Window_Base.prototype.CGMZ_itemWithIconTextCode = function(id, mode) {
	let object = null;
	switch(mode) {
		case "item": object = $dataItems[id]; break;
		case "armor": object = $dataArmors[id]; break;
		case "weapon": object = $dataWeapons[id]; break;
		case "skill": object = $dataSkills[id]; break;
		case "state": object = $dataStates[id]; break;
	}
	return (object && object.iconIndex) ? '\x1bI[' + object.iconIndex + ']' + this.convertEscapeCharacters(object.name) : (object) ? this.convertEscapeCharacters(object.name) : "";
};
//-----------------------------------------------------------------------------
// Get text replacement for \IIB[x], \AIB[x], \WIB[x], \SKIB[x], \STIB[x]
//-----------------------------------------------------------------------------
Window_Base.prototype.CGMZ_itemWithIconTextCodeBackwards = function(id, mode) {
	let object = null;
	switch(mode) {
		case "item": object = $dataItems[id]; break;
		case "armor": object = $dataArmors[id]; break;
		case "weapon": object = $dataWeapons[id]; break;
		case "skill": object = $dataSkills[id]; break;
		case "state": object = $dataStates[id]; break;
	}
	return (object && object.iconIndex) ? this.convertEscapeCharacters(object.name) + '\x1bI[' + object.iconIndex + ']' : (object) ? this.convertEscapeCharacters(object.name) : "";
};
//-----------------------------------------------------------------------------
// Get text replacement for \ACTI[x]
//-----------------------------------------------------------------------------
Window_Base.prototype.CGMZ_auItemWithIconTextCode = function(id) {
	const actorUpgradeData = $cgmzTemp.getActorUpgradeData(id);
	if(!actorUpgradeData) return "";
	return (actorUpgradeData.iconIndex) ? `\x1bI[${actorUpgradeData.iconIndex}]${this.convertEscapeCharacters(this.actorName(id))}` : this.convertEscapeCharacters(this.actorName(id));
};
//-----------------------------------------------------------------------------
// Get text replacement for \ENI[x]
//-----------------------------------------------------------------------------
Window_Base.prototype.CGMZ_euItemWithIconTextCode = function(id) {
	const enemyData = $cgmzTemp.getEnemyUpgradeData(id);
	if(!enemyData) return "";
	return (enemyData.iconIndex) ? `\x1bI[${enemyData.iconIndex}]${this.CGMZ_nameTextCode(id, "enemy")}` : this.CGMZ_nameTextCode(id, "enemy");
};
//-----------------------------------------------------------------------------
// Get text replacement for \en[x], \tn[x], \in[x], \an[x], \wn[x], \skn[x], \stn[x], \cn[x], \cen[x], \mn[x]
//-----------------------------------------------------------------------------
Window_Base.prototype.CGMZ_nameTextCode = function(id, mode) {
	let object = null;
	switch(mode) {
		case "item": object = $dataItems[id]; break;
		case "armor": object = $dataArmors[id]; break;
		case "weapon": object = $dataWeapons[id]; break;
		case "skill": object = $dataSkills[id]; break;
		case "state": object = $dataStates[id]; break;
		case "enemy": object = $dataEnemies[id]; break;
		case "troop": object = $dataTroops[id]; break;
		case "class": object = $dataClasses[id]; break;
		case "commonEvent": object = $dataCommonEvents[id]; break;
		case "map": object = $dataMapInfos[id]; break;
	}
	return (object) ? this.convertEscapeCharacters(object.name) : "";
};
//-----------------------------------------------------------------------------
// Get text replacement for \prof[x]
//-----------------------------------------------------------------------------
Window_Base.prototype.CGMZ_professionTextCode = function(profName) {
	if(!Imported.CGMZ_Professions) return "";
	const profArgs = profName.split("-");
	const profession = (profArgs.length > 1) ? $cgmz.getProfession(profArgs[0], profArgs[1]) : $cgmz.getProfession(profArgs[0]);
	if(!profession) return "";
	return (profession._iconIndex) ? "\x1bi[" + profession._iconIndex + "]" + this.convertEscapeCharacters(profession.getDisplayName()) : this.convertEscapeCharacters(profession.getDisplayName());
};
//-----------------------------------------------------------------------------
// Get text replacement for \craft[x]
//-----------------------------------------------------------------------------
Window_Base.prototype.CGMZ_craftingTextCode = function(recipeName) {
	if(!Imported.CGMZ_Crafting) return "";
	const recipe = $cgmz.getRecipe(recipeName);
	if(!recipe) return "";
	return (recipe._iconIndex) ? "\x1bi[" + recipe._iconIndex + "]" + this.convertEscapeCharacters(recipe._name) : this.convertEscapeCharacters(recipe._name);
};
//-----------------------------------------------------------------------------
// Get text replacement for \rep[x-y]
//-----------------------------------------------------------------------------
Window_Base.prototype.CGMZ_repTextCode = function(repInfo) {
	if(!Imported.CGMZ_Reputations) return "";
	const repArr = repInfo.split("-");
	if(repArr.length < 2) return "";
	const rep = $cgmz.getReputation(repArr[0], repArr[1]);
	if(!rep) return "";
	return (rep._iconIndex) ? "\x1bi[" + rep._iconIndex + "]" + this.convertEscapeCharacters(rep._name) : this.convertEscapeCharacters(rep._name);
};
//-----------------------------------------------------------------------------
// Get text replacement for \repRank[x]
//-----------------------------------------------------------------------------
Window_Base.prototype.CGMZ_repRankTextCode = function(rankId) {
	if(!Imported.CGMZ_Reputations) return "";
	const rank = $cgmzTemp.getReputationRank(rankId);
	if(!rank) return "";
	return (rank._iconIndex) ? "\x1bi[" + rank._iconIndex + "]" + this.convertEscapeCharacters(rank._name) : this.convertEscapeCharacters(rank._name);
};
//-----------------------------------------------------------------------------
// Get text replacement for \dt[x]
//-----------------------------------------------------------------------------
Window_Base.prototype.CGMZ_dungeonToolTextCode = function(symbol) {
	if(!Imported.CGMZ_DungeonTools) return "";
	const tool = $cgmz.getDungeonTool(symbol);
	if(!tool) return "";
	return (tool._icon) ? "\x1bi[" + tool._icon + "]" + this.convertEscapeCharacters(tool._name) : this.convertEscapeCharacters(tool._name);
};
//-----------------------------------------------------------------------------
// Get text replacement for \cur[x]
//-----------------------------------------------------------------------------
Window_Base.prototype.CGMZ_currencyTextCode = function(id) {
	if(!Imported.CGMZ_CurrencySystem) return "";
	if(id === 'default') return (CGMZ.CurrencySystem.DefaultIconIndex) ? "\x1bi[" + CGMZ.CurrencySystem.DefaultIconIndex + "]" + this.convertEscapeCharacters(CGMZ.CurrencySystem.DefaultName) : this.convertEscapeCharacters(CGMZ.CurrencySystem.DefaultName);
	const currency = $cgmzTemp.getCurrency(id);
	if(!currency) return "";
	return (currency._iconIndex) ? "\x1bi[" + currency._iconIndex + "]" + this.convertEscapeCharacters(currency._name) : this.convertEscapeCharacters(currency._name);
};
//-----------------------------------------------------------------------------
// Captures letters, dash, comma, underscore characters
//-----------------------------------------------------------------------------
Window_Base.prototype.CGMZ_obtainTxtEscapeParam = function(textState) {
	const regExp = /^\[[a-zA-Z-_,]+\]/;
	const arr = regExp.exec(textState.text.slice(textState.index));
	if(arr) {
		textState.index += arr[0].length;
		return arr[0].slice(1, -1);
	}
	return "";
};
//-----------------------------------------------------------------------------
// Same as default obtain escape param, but handles negative numbers too
//-----------------------------------------------------------------------------
Window_Base.prototype.CGMZ_obtainNegativeEscapeParam = function(textState) {
	const regExp = /^\[-?\d+\]/;
	const arr = regExp.exec(textState.text.slice(textState.index));
	if(arr) {
		textState.index += arr[0].length;
		return parseInt(arr[0].slice(1));
	}
	return "";
};
//-----------------------------------------------------------------------------
// Additionally look for - or _ in escape code
//-----------------------------------------------------------------------------
const alias_CGMZ_MessageSystem_WindowBase_obtainEscapeCode = Window_Base.prototype.obtainEscapeCode;
Window_Base.prototype.obtainEscapeCode = function(textState) {
	const oldReturn = alias_CGMZ_MessageSystem_WindowBase_obtainEscapeCode.apply(this, arguments);
	if(oldReturn) return oldReturn; // Only check for new symbols if none previously found
	const regExp = /^[-_]/i;
	const arr = regExp.exec(textState.text.slice(textState.index));
	if(arr) {
		textState.index += arr[0].length;
		return arr[0].toUpperCase();
	}
	return oldReturn;
};
//-----------------------------------------------------------------------------
// Also add additional escape character codes (mid-text drawing codes)
//-----------------------------------------------------------------------------
const alias_CGMZ_MessageSystem_WindowBase_processEscapeCharacter = Window_Base.prototype.processEscapeCharacter;
Window_Base.prototype.processEscapeCharacter = function(code, textState) {
	alias_CGMZ_MessageSystem_WindowBase_processEscapeCharacter.apply(this, arguments);
	switch (code) {
		case "OC":
			this.CGMZ_processOutlineColorChange(this.CGMZ_obtainNegativeEscapeParam(textState));
			break;
		case "OW":
			this.CGMZ_processOutlineWidthChange(this.obtainEscapeParam(textState));
			break;
		case "PO":
			this.CGMZ_processPaintOpacityChange(this.obtainEscapeParam(textState));
			break;
		case "FF":
			this.CGMZ_processFontFaceChange(this.CGMZ_obtainTxtEscapeParam(textState));
			break;
		case "_":
			this.CGMZ_processBoldChange();
			break;
		case "-":
			this.CGMZ_processItalicChange();
			break;
	}
};
//-----------------------------------------------------------------------------
// Handling for changing the outline color of text
//-----------------------------------------------------------------------------
Window_Base.prototype.CGMZ_processOutlineColorChange = function(colorIndex) {
	(colorIndex === -1) ? this.contents.outlineColor = "rgba(0, 0, 0, 0.5)" : this.changeOutlineColor(ColorManager.textColor(colorIndex));
};
//-----------------------------------------------------------------------------
// Handling for changing the outline width of text
//-----------------------------------------------------------------------------
Window_Base.prototype.CGMZ_processOutlineWidthChange = function(width) {
	this.contents.outlineWidth = width;
};
//-----------------------------------------------------------------------------
// Handling for changing the paint opacity of text
//-----------------------------------------------------------------------------
Window_Base.prototype.CGMZ_processPaintOpacityChange = function(opacity) {
	this.contents.paintOpacity = opacity;
};
//-----------------------------------------------------------------------------
// Handling for changing the font face of text
//-----------------------------------------------------------------------------
Window_Base.prototype.CGMZ_processFontFaceChange = function(font) {
	this.contents.fontFace = font;
};
//-----------------------------------------------------------------------------
// Toggle bold
//-----------------------------------------------------------------------------
Window_Base.prototype.CGMZ_processBoldChange = function() {
	this.contents.fontBold = !this.contents.fontBold;
};
//-----------------------------------------------------------------------------
// Toggle italic
//-----------------------------------------------------------------------------
Window_Base.prototype.CGMZ_processItalicChange = function() {
	this.contents.fontItalic = !this.contents.fontItalic;
};
//=============================================================================
// Window_Message
//-----------------------------------------------------------------------------
// Change window properties from plugin commands
//=============================================================================
//-----------------------------------------------------------------------------
// Initialize CGMZ message speed
//-----------------------------------------------------------------------------
const alias_CGMZMessageSystem_WindowMessage_clearFlags = Window_Message.prototype.clearFlags;
Window_Message.prototype.clearFlags = function() {
	alias_CGMZMessageSystem_WindowMessage_clearFlags.call(this);
	this._cgmz_msgSpeed = 0;
};
//-----------------------------------------------------------------------------
// Check for additional properties to update
//-----------------------------------------------------------------------------
const alias_CGMZMessageSystem_WindowMessage_startMessage = Window_Message.prototype.startMessage;
Window_Message.prototype.startMessage = function() {
	this.CGMZ_MessageSystem_updateWindowskin();
	this.CGMZ_MessageSystem_updateTone();
	alias_CGMZMessageSystem_WindowMessage_startMessage.call(this);
};
//-----------------------------------------------------------------------------
// Update the windowskin
//-----------------------------------------------------------------------------
Window_Message.prototype.CGMZ_MessageSystem_updateWindowskin = function() {
	const windowskin = $cgmz.getMessageSystemParam("windowskin");
	if(windowskin) {
		const imageData = CGMZ_Utils.getImageData(windowskin, "img");
		this.windowskin = ImageManager.loadBitmap(imageData.folder, imageData.filename);
	} else {
		this.loadWindowskin();
	}
};
//-----------------------------------------------------------------------------
// Update the tone
//-----------------------------------------------------------------------------
Window_Message.prototype.CGMZ_MessageSystem_updateTone = function() {
	const tone = $cgmz.getMessageSystemParam("tone");
	this._cgmz_MessageSystem_tone = (tone) ? tone : null;
};
//-----------------------------------------------------------------------------
// Update the message to add waits if speed is set
//-----------------------------------------------------------------------------
const alias_CGMZMessageSystem_WindowMessage_updateMessage = Window_Message.prototype.updateMessage;
Window_Message.prototype.updateMessage = function() {
	if(this._cgmz_msgSpeed && this._textState && !this.isEndOfText(this._textState)) this.startWait(this._cgmz_msgSpeed);
	return alias_CGMZMessageSystem_WindowMessage_updateMessage.call(this);;
};
//-----------------------------------------------------------------------------
// Check for new escape characters in message
//-----------------------------------------------------------------------------
const alias_CGMZMessageSystem_WindowMessage_processEscapeCharacter = Window_Message.prototype.processEscapeCharacter;
Window_Message.prototype.processEscapeCharacter = function(code, textState) {
	switch(code) {
		case "RUM": this.CGMZ_processRumble(this.obtainEscapeParam(textState)); break;
		case "SPD": this.CGMZ_setTextSpeed(this.obtainEscapeParam(textState)); break;
		case "WAIT": this.startWait(this.obtainEscapeParam(textState)); break;
		default: alias_CGMZMessageSystem_WindowMessage_processEscapeCharacter.apply(this, arguments);
	}
};
//-----------------------------------------------------------------------------
// Process a rumble
//-----------------------------------------------------------------------------
Window_Message.prototype.CGMZ_processRumble = function(index) {
	if(!Imported.CGMZ_Rumble) return;
	const rumble = $cgmzTemp.getMessageSystemRumblePreset(index);
	if(rumble.index < 0) {
		$cgmzTemp.startRumble(rumble);
	} else {
		$cgmzTemp.startRumbleController(rumble.index, rumble);
	}
};
//-----------------------------------------------------------------------------
// Process changing text speed
//-----------------------------------------------------------------------------
Window_Message.prototype.CGMZ_setTextSpeed = function(speed) {
	this._cgmz_msgSpeed = speed;
};
//=============================================================================
// Window_NameBox
//-----------------------------------------------------------------------------
// Change window properties from plugin commands
//=============================================================================
//-----------------------------------------------------------------------------
// Check for additional properties to update
//-----------------------------------------------------------------------------
const alias_CGMZ_MessageSystem_Window_NameBox_start = Window_NameBox.prototype.start;
Window_NameBox.prototype.start = function() {
	this.CGMZ_MessageSystem_updateWindowskin();
	this.CGMZ_MessageSystem_updateTone();
	alias_CGMZ_MessageSystem_Window_NameBox_start.call(this);
};
//-----------------------------------------------------------------------------
// Update the windowskin
//-----------------------------------------------------------------------------
Window_NameBox.prototype.CGMZ_MessageSystem_updateWindowskin = function() {
	const windowskin = $cgmz.getMessageSystemParam("windowskin");
	if(windowskin) {
		const imageData = CGMZ_Utils.getImageData(windowskin, "img");
		this.windowskin = ImageManager.loadBitmap(imageData.folder, imageData.filename);
		if(this._nameBoxWindow) this._nameBoxWindow.windowskin = ImageManager.loadBitmap(imageData.folder, imageData.filename);
	} else {
		this.loadWindowskin();
		if(this._nameBoxWindow) this._nameBoxWindow.loadWindowskin();
	}
};
//-----------------------------------------------------------------------------
// Update the tone
//-----------------------------------------------------------------------------
Window_NameBox.prototype.CGMZ_MessageSystem_updateTone = function() {
	const tone = $cgmz.getMessageSystemParam("tone");
	this._cgmz_MessageSystem_tone = (tone) ? tone : null;
};