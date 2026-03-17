/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/antilag/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc Optimize your game to help reduce lag
 * @help
 * ============================================================================
 * For terms and conditions using this plugin in your game please visit:
 * https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * Become a Patron to get access to beta/alpha plugins plus other goodies!
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * Version: Alpha R2
 * ----------------------------------------------------------------------------
 * Compatibility: Only tested with my CGMZ plugins.
 * Made for RPG Maker MZ 1.9.0
 * ----------------------------------------------------------------------------
 * Description: Optimizes your game to try and reduce lag. Note that this does
 * not prevent lag, if you try your hardest you will be able to make your game
 * lag. What this does do is provide some options to address common areas that
 * cause lag and make it easier to optimize your game.
 * ----------------------------------------------------------------------------
 * Documentation:
 * ---------------------------Map Optimizations--------------------------------
 * This plugin provides the following optimizations for map processes:
 *
 * Self Switches
 * By default, self switch changes refresh the entire map, which causes all
 * events to check their page to see if any changes are needed. This can get
 * expensive quick if you are constantly changing self switches. This plugin
 * allows you to skip checking every event and only check if the event that
 * had it's self switch changed needs to be updated. If you manually update
 * other events' self switches via script call or other means, this would break
 * that functionality and you would need to manually refresh the map with
 * script call $gameMap.requestRefresh(); in that case.
 *
 * Switches & Variables
 * Switches and variables, like self switches, refresh the entire map when a
 * value is changed. This is usually a good thing as multiple events can pay
 * attention to switches or variables in their page conditions, however may not
 * always be needed. This plugin allows you to disable map refreshes for
 * specific switches or variables by id. For example, if you have a constantly
 * changing variable that is not used by map events, you could remove this
 * specific variable from causing a map refresh every time its value changes.
 *
 * Pathfinding
 * Pathfinding can be quite an intensive process, especially if your game
 * uses pathfinding for events and other characters than just the player. This
 * plugin allows you to change the default search limit which can reduce lag if
 * you have a lot of things pathfinding at the same time. You can set the
 * plugin parameter to 0 to totally skip any changes for pathfinding, for
 * compatibility reasons.
 * -------------------------Event Optimizations--------------------------------
 * This plugin provides the following optimizations for event processes:
 *
 * Enable Skip Update
 * When this is turned ON, you can enter in a note tag to any event to cause
 * it to completely skip its update function. The notetag is <SkipUpdate> by
 * default, but can be changed in the plugin parameters. Note that it is case
 * sensitive, so if you type <skipupdate> it will not work.
 *
 * Note that skipping the update process will have consequences! By default,
 * event movement is handled in its update process as well as parallel/autorun
 * triggers. If your event has to move, or is parallel / autorun you should
 * not use this note tag as it will break your event. Other plugins may also
 * hook into the update function, in which case any functionality added by
 * the plugin to the update process would also no longer work for that event.
 * Events without this note tag will function as normal. If you do not have
 * Enable Skip Update turned ON, all events will function as normal even if
 * using the note tag, this is provided for maximum compatibility.
 *
 * Parallel Common Event Waits
 * Common events are a common source of lag in RPG Maker games because many
 * people forget to add a wait command to the end of their common events,
 * causing them to run 60 times per second. It is unlikely that you need your
 * events to run that frequently. This plugin can automatically add a wait
 * event command at the end of your parallel common events for you, with the
 * frame count to wait set up in the plugin parameters (default 1). Note that
 * if you do need your common events to run 60 times per second, you will want
 * to turn this feature off. Also note that there are diminishing returns on
 * performance the more wait frames you add. Adding a 1 frame wait will make
 * the event run 30 times per second, a 2 frame wait will be 20 times per
 * second, a 3 frame wait will be 15 times per second, a 4 frame wait will be
 * 12 times per second, and so on.
 * ----------------------------Plugin Commands---------------------------------
 * This plugin supports the following Plugin Commands:
 *
 * • Change Event Update
 * Turns a specific event's update function ON or OFF. Note that this is NOT
 * saved data and is only meant for temporary changes to event updates.
 * ------------------------------Saved Games-----------------------------------
 * This plugin is fully compatible with saved games. This means you can:
 *
 * ✓ Add this plugin to a saved game and it will work as expected
 * ✓ Change any plugin params and changes will be reflected in saved games
 * ✓ Remove the plugin with no issue to save data
 * --------------------------------Filename------------------------------------
 * The filename for this plugin MUST remain CGMZ_AntiLag.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * --------------------------Latest Version------------------------------------
 * Hi all, this latest version improves the skip update functionality for
 * events, allowing you to skip update for individual pages by using a comment
 * event command. Event pages with the comment present will have their update
 * skipped, while event pages without the comment will not have their update
 * skipped. Note that update will always be skipped if the note tag is present.
 *
 * This update also added a plugin command to turn event update on/off
 * manually. You can have your event call this plugin command to turn any
 * event's update status to either on or off. Note that this is an additional
 * check, using either the note tag or comment will prevent event update even
 * if you use the plugin command to turn it ON. Event update status from the
 * plugin command is not part of save data.
 *
 * Version Alpha R2
 * - Added comment to skip event update
 * - Added plugin command to manually turn on/off event update
 *
 * @command Change Event Update
 * @desc Turn ON/OFF the event update function for a specific event
 *
 * @arg Event
 * @type number
 * @default 0
 * @desc The event id to change update status of. 0 = this event
 *
 * @arg Mode
 * @type select
 * @option Toggle
 * @option On
 * @option Off
 * @default Toggle
 * @desc Toggle, turn on, or turn off the event's update function
 *
 * @param Map Optimizations
 *
 * @param Self Switches
 * @parent Map Optimizations
 *
 * @param Self Refresh Only
 * @parent Self Switches
 * @type boolean
 * @default true
 * @desc If true, the only event that will be refreshed when a self switch changes is the same event
 *
 * @param Switches
 * @parent Map Optimizations
 *
 * @param No Refresh Switches
 * @parent Switches
 * @type switch[]
 * @default []
 * @desc Switch IDs that, if listed here, will not cause a map refresh when their value changes.
 *
 * @param Variables
 * @parent Map Optimizations
 *
 * @param No Refresh Variables
 * @parent Variables
 * @type variable[]
 * @default []
 * @desc Variable IDs that, if listed here, will not cause a map refresh when their value changes.
 *
 * @param Pathfinding
 * @parent Map Optimizations
 *
 * @param Max Search Limit
 * @parent Pathfinding
 * @type number
 * @default 0
 * @desc If this is set, this will be the search limit used in pathfinding. Normal default is 12. Higher number = more intensive
 *
 * @param Event Optimizations
 *
 * @param Event Update
 * @parent Event Optimizations
 *
 * @param Enable Skip Update
 * @parent Event Update
 * @type boolean
 * @default true
 * @desc If true, using the <SkipUpdate> in an event's notebox will prevent that event from updating.
 *
 * @param Skip Update Notetag
 * @parent Event Update
 * @default SkipUpdate
 * @desc The note tag you type in to cause an event to skip its update process, if enabled.
 *
 * @param Skip Update Comment
 * @parent Event Update
 * @default CGMZ Skip Update
 * @desc A comment you can add on individual event pages to skip updating the event if that page is active
 *
 * @param Parallel Common Events
 * @parent Event Optimizations
 *
 * @param Add Wait Automatically
 * @parent Parallel Common Events
 * @type boolean
 * @default true
 * @desc If true, this plugin will automatically add a wait command to the end of all parallel common events
 *
 * @param Parallel Wait Frames
 * @parent Parallel Common Events
 * @type number
 * @default 1
 * @desc The frame count to wait if wait is automatically added
*/
Imported.CGMZ_AntiLag = true;
CGMZ.Versions["Anti Lag"] = "Alpha R2";
CGMZ.AntiLag = {};
CGMZ.AntiLag.parameters = PluginManager.parameters('CGMZ_AntiLag');
CGMZ.AntiLag.SkipUpdateNotetag = CGMZ.AntiLag.parameters["Skip Update Notetag"];
CGMZ.AntiLag.SkipUpdateComment = CGMZ.AntiLag.parameters["Skip Update Comment"];
CGMZ.AntiLag.MaxSearchLimit = Number(CGMZ.AntiLag.parameters["Max Search Limit"]);
CGMZ.AntiLag.ParallelWaitFrames = Number(CGMZ.AntiLag.parameters["Parallel Wait Frames"]);
CGMZ.AntiLag.SelfRefreshOnly = (CGMZ.AntiLag.parameters["Self Refresh Only"] === 'true');
CGMZ.AntiLag.EnableSkipUpdate = (CGMZ.AntiLag.parameters["Enable Skip Update"] === 'true');
CGMZ.AntiLag.AddWaitAutomatically = (CGMZ.AntiLag.parameters["Add Wait Automatically"] === 'true');
CGMZ.AntiLag.NoRefreshSwitchIds = CGMZ_Utils.parseJSON(CGMZ.AntiLag.parameters["No Refresh Switches"], [], '[CGMZ] Anti Lag', 'Your No Refresh Switches parameter was set up incorrectly and could not be read.').map(x => Number(x));
CGMZ.AntiLag.NoRefreshSwitches = [];
for(const switchId of CGMZ.AntiLag.NoRefreshSwitchIds) {
	CGMZ.AntiLag.NoRefreshSwitches[switchId] = true;
}
CGMZ.AntiLag.NoRefreshVariableIds = CGMZ_Utils.parseJSON(CGMZ.AntiLag.parameters["No Refresh Variables"], [], '[CGMZ] Anti Lag', 'Your No Refresh Variables parameter was set up incorrectly and could not be read.').map(x => Number(x));
CGMZ.AntiLag.NoRefreshVariables = [];
for(const variableId of CGMZ.AntiLag.NoRefreshVariableIds) {
	CGMZ.AntiLag.NoRefreshVariables[variableId] = true;
}
//=============================================================================
// CGMZ_Temp
//-----------------------------------------------------------------------------
// Register and handling for plugin commands
//=============================================================================
//-----------------------------------------------------------------------------
// Register Plugin Commands
//-----------------------------------------------------------------------------
const alias_CGMZAntiLag_registerPluginCommands = CGMZ_Temp.prototype.registerPluginCommands;
CGMZ_Temp.prototype.registerPluginCommands = function() {
	alias_CGMZAntiLag_registerPluginCommands.call(this);
	PluginManager.registerCommand("CGMZ_AntiLag", "Change Event Update", this.pluginCommandAntiLagChangeEventUpdate);
};
//-----------------------------------------------------------------------------
// Plugin Command - Change Event Update
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandAntiLagChangeEventUpdate = function(args) {
	const ev = this.character(Number(args.Event));
	ev?.CGMZ_handleAntiLagUpdateChange(args.Mode);
};
//=============================================================================
// Game_SelfSwitches
//-----------------------------------------------------------------------------
// Only refresh the same event that had its self switch changed
//=============================================================================
if(CGMZ.AntiLag.SelfRefreshOnly) {
//-----------------------------------------------------------------------------
// Set the event id on change
//-----------------------------------------------------------------------------
const alias_CGMZAntiLag_GameSelfSwitches_setValue = Game_SelfSwitches.prototype.setValue;
Game_SelfSwitches.prototype.setValue = function(key, value) {
	this._cgmz_refreshEventId = 0;
	if(Array.isArray(key) && key.length === 3) this._cgmz_refreshEventId = key[1];
    alias_CGMZAntiLag_GameSelfSwitches_setValue.call(this, key, value);
};
//-----------------------------------------------------------------------------
// Refresh only the changed event
//-----------------------------------------------------------------------------
const alias_CGMZAntiLag_GameSelfSwitches_onChange = Game_SelfSwitches.prototype.onChange;
Game_SelfSwitches.prototype.onChange = function() {
	const refreshPending = $gameMap._needsRefresh
	alias_CGMZAntiLag_GameSelfSwitches_onChange.call(this);
	if(this._cgmz_refreshEventId && !refreshPending) {
		$gameMap._needsRefresh = false;
		const event = $gameMap.event(this._cgmz_refreshEventId);
		if(event) {
			this._cgmz_refreshEventId = 0;
			const wasTile = event.isTile();
			event.refresh();
			if(event.isTile() !== wasTile) $gameMap.refreshTileEvents();
		}
	}
};
}
//=============================================================================
// Game_Switches
//-----------------------------------------------------------------------------
// Do not refresh map for certain switch ids
//=============================================================================
//-----------------------------------------------------------------------------
// Do not refresh map after certain switches are changed
//-----------------------------------------------------------------------------
const alias_CGMZAntiLag_GameSwitches_setValue = Game_Switches.prototype.setValue;
Game_Switches.prototype.setValue = function(switchId, value) {
	alias_CGMZAntiLag_GameSwitches_setValue.call(this, switchId, value);
	if(CGMZ.AntiLag.NoRefreshSwitches[switchId]) $gameMap._needsRefresh = false;
};
//=============================================================================
// Game_Variables
//-----------------------------------------------------------------------------
// Do not refresh map for certain variable ids
//=============================================================================
//-----------------------------------------------------------------------------
// Do not refresh map after certain variables are changed
//-----------------------------------------------------------------------------
const alias_CGMZAntiLag_GameVariables_setValue = Game_Variables.prototype.setValue;
Game_Variables.prototype.setValue = function(variableId, value) {
	alias_CGMZAntiLag_GameVariables_setValue.call(this, variableId, value);
	if(CGMZ.AntiLag.NoRefreshVariables[variableId]) $gameMap._needsRefresh = false;
};
//=============================================================================
// Game_Character
//-----------------------------------------------------------------------------
// Change search limit for pathfinding
//=============================================================================
//-----------------------------------------------------------------------------
// If set in plugin parameters, change the max search limit
//-----------------------------------------------------------------------------
if(CGMZ.AntiLag.MaxSearchLimit) {
Game_Character.prototype.searchLimit = function() {
	return CGMZ.AntiLag.MaxSearchLimit;
};
}
//=============================================================================
// Game_Event
//-----------------------------------------------------------------------------
// Prevent events from updating if note tag is found
//=============================================================================
//-----------------------------------------------------------------------------
// If enabled, skip updating events that have the notetag
//-----------------------------------------------------------------------------
if(CGMZ.AntiLag.EnableSkipUpdate) {
const alias_CGMZAntiLag_GameEvent_initMembers = Game_Event.prototype.initMembers;
Game_Event.prototype.initMembers = function() {
	alias_CGMZAntiLag_GameEvent_initMembers.call(this);
    this._cgmz_skipEventUpdate = false;
	this._cgmz_pluginCommandSkipEventUpdate = false;
};
//-----------------------------------------------------------------------------
// Check if page has comment to skip update
//-----------------------------------------------------------------------------
const alias_CGMZAntiLag_GameEvent_setupPage = Game_Event.prototype.setupPage;
Game_Event.prototype.setupPage = function() {
    alias_CGMZAntiLag_GameEvent_setupPage.call(this);
	this._cgmz_skipEventUpdate = false;
	if(this._pageIndex >= 0) {
		const list = this.list();
		const find = CGMZ_Utils.readCommentBasic(list, CGMZ.AntiLag.SkipUpdateComment, true);
		if(find !== null) {
			this._cgmz_skipEventUpdate = true;
		}
	}
};
//-----------------------------------------------------------------------------
// Handle plugin command to change event update status
//-----------------------------------------------------------------------------
Game_Event.prototype.CGMZ_handleAntiLagUpdateChange = function(mode) {
	switch(mode) {
		case 'On': this._cgmz_pluginCommandSkipEventUpdate = false; break;
		case 'Off': this._cgmz_pluginCommandSkipEventUpdate = true; break;
		case 'Toggle': this._cgmz_pluginCommandSkipEventUpdate = !this._cgmz_pluginCommandSkipEventUpdate; break;
	}
};
//-----------------------------------------------------------------------------
// Actually skip the update
//-----------------------------------------------------------------------------
const alias_CGMZAntiLag_GameEvent_update = Game_Event.prototype.update;
Game_Event.prototype.update = function() {
	if(!this._cgmz_skipEventUpdate && !this._cgmz_pluginCommandSkipEventUpdate && !this.event().meta?.[CGMZ.AntiLag.SkipUpdateNotetag]) {
		alias_CGMZAntiLag_GameEvent_update.call(this);
	}
};
}
//=============================================================================
// Scene_Boot
//-----------------------------------------------------------------------------
// After common event data is loaded, attempt to add a wait event command automatically
//=============================================================================
//-----------------------------------------------------------------------------
// If enabled, automatically add wait event command to end of parallel common events
//-----------------------------------------------------------------------------
if(CGMZ.AntiLag.AddWaitAutomatically) {
const alias_CGMZAntiLag_SceneBoot_onDatabaseLoaded = Scene_Boot.prototype.onDatabaseLoaded;
Scene_Boot.prototype.onDatabaseLoaded = function() {
    alias_CGMZAntiLag_SceneBoot_onDatabaseLoaded.call(this);
	for(const ce of $dataCommonEvents) {
		if(ce?.trigger === 2) {
			const waitCommand = {code: 230, indent: 0, parameters: [CGMZ.AntiLag.ParallelWaitFrames]};
			ce.list.splice(-1, 0, waitCommand);
		}
	}
};
}