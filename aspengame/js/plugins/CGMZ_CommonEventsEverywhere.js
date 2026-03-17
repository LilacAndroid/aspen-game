/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/commoneventseverywhere/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc Run common events in the menu, in battle, and everywhere else.
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
 * Made for RPG Maker MZ 1.10.0
 * ----------------------------------------------------------------------------
 * Description: Sometimes you may want to run a common event in a menu scene,
 * during battle, or at some other time. By default, common events are only
 * fully supported in the map. This plugin makes common events work in scenes
 * besides the map scene.
 * ----------------------------------------------------------------------------
 * Documentation:
 * ----------------------------Event Comment-----------------------------------
 * This plugin allows common events to run outside of the map scene. This
 * includes battle, menus, and even custom scenes. However, not all event
 * commands will work in non-map scenes. For example, other scenes do not get
 * the message window created so showing text through a common event would not
 * work. For this reason, this plugin uses a Comment event command to determine
 * if the common event should run outside of the map.
 *
 * If you would like your common event to run outside of the map, you must add
 * the comment:
 * CGMZ RUN EVERYWHERE
 * anywhere in your common event but preferably as close to the top as you can
 * for optimal performance.
 *
 * COMMON EVENTS WITHOUT THE ABOVE COMMENT WILL FUNCTION AS BEFORE!
 *
 * This will allow parallel process events to run in the menu or in battle. It
 * will also allow items / skills that call a common event to work without
 * exiting the item / skill scene and going back to the map.
 *
 * Autorun common events are still limited to map only.
 * --------------------------------Scenes--------------------------------------
 * This plugin allows you to change which scenes your common events can run.
 * To set this up, you will need to type the scene constructor name into the
 * No Run Scenes parameter. You can find the scene constructor easily by
 * enabling the debug parameter "Log Scene Names" which will print out the
 * scene constructor when a scene is created to the dev tools console.
 * ----------------------------Plugin Commands---------------------------------
 * This plugin does not currently include any plugin commands
 * ------------------------------Saved Games-----------------------------------
 * This plugin is fully compatible with saved games. This means you can:
 *
 * ✓ Add this plugin to a saved game and it will work as expected
 * ✓ Change any plugin params and changes will be reflected in saved games
 * ✓ Remove the plugin with no issue to save data
 * --------------------------------Filename------------------------------------
 * The filename for this plugin MUST remain CGMZ_CommonEventsEverywhere.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * --------------------------Latest Version------------------------------------
 * Hi all, this latest version adds a way to prevent common events from running
 * in certain scenes. If you want them to be able to run in battle but not
 * the menu, this would allow you to do that.
 *
 * A debug option to log the scene names to console was also added. This should
 * make it easier to figure out which scene name to type to prevent your common
 * events from running in specific scenes.
 *
 * This update fixes a bug that would cause saved games that were saved prior
 * to adding this plugin to not run common events everywhere in a few cases.
 * A bug was also fixed and parallel common events marked as run everywhere
 * should now work in battle test mode.
 *
 * Version Alpha R2
 * - Added option to prevent common events from running in certain scenes
 * - Added debug option to log scene names to console
 * - Fix bug with saved games from before this plugin was added
 * - Fix bug with parallel common events not working in battle test
 * 
 * @param No Run Scenes
 * @type text[]
 * @desc Set up scenes that should not run common events here
 * @default ["Scene_Boot","Scene_Title"]
 *
 * @param Debug Options
 * 
 * @param Log Scene Names
 * @parent Debug Options
 * @type boolean
 * @desc If true, scene constructor names will be logged to console in playtests
 * @default false
*/
Imported.CGMZ_CommonEventsEverywhere = true;
CGMZ.Versions["Common Events Everywhere"] = "Alpha R2";
CGMZ.CommonEventsEverywhere = {};
CGMZ.CommonEventsEverywhere.parameters = PluginManager.parameters('CGMZ_CommonEventsEverywhere');
CGMZ.CommonEventsEverywhere.LogSceneNames = (CGMZ.CommonEventsEverywhere.parameters["Log Scene Names"] === 'true');
CGMZ.CommonEventsEverywhere.NoRunScenes = CGMZ_Utils.parseJSON(CGMZ.CommonEventsEverywhere.parameters["No Run Scenes"], [], "[CGMZ] Common Events Everywhere", "Your No Run Scenes parameter was set up incorrectly and could not be read.");
//=============================================================================
// CGMZ_Core
//-----------------------------------------------------------------------------
// Handle common events
//=============================================================================
//-----------------------------------------------------------------------------
// Create common event data
//-----------------------------------------------------------------------------
const alias_CGMZCommonEventsEverywhere_CGMZCore_createPluginData = CGMZ_Core.prototype.createPluginData;
CGMZ_Core.prototype.createPluginData = function() {
	alias_CGMZCommonEventsEverywhere_CGMZCore_createPluginData.call(this);
	this._commonEvent_interpreter = new Game_Interpreter();
	this._commonEvent_interpreter.clear();
};
//-----------------------------------------------------------------------------
// Also create common event interpreter if saved game doesnt have it
//-----------------------------------------------------------------------------
const alias_CGMZCommonEventsEverywhere_CGMZCore_onAfterLoad = CGMZ_Core.prototype.onAfterLoad;
CGMZ_Core.prototype.onAfterLoad = function() {
	alias_CGMZCommonEventsEverywhere_CGMZCore_onAfterLoad.call(this);
	if(!this._commonEvent_interpreter) {
		this._commonEvent_interpreter = new Game_Interpreter();
		this._commonEvent_interpreter.clear();
	}
};
//-----------------------------------------------------------------------------
// Update interpreter
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.updateCommonEventInterpreter = function() {
	if(!this._commonEvent_interpreter) return;
	for(;;) {
        this._commonEvent_interpreter.update();
		if(this._commonEvent_interpreter.isRunning()) {
            return;
        }
        if(!this._commonEvent_interpreter.CGMZ_setupRunEverywhereReservedCommonEvent()) {
            return;
        }
	}
};
//=============================================================================
// Scene_Base
//-----------------------------------------------------------------------------
// Call to update common events
//=============================================================================
//-----------------------------------------------------------------------------
// Set whether the scene can run common events on initialize
//-----------------------------------------------------------------------------
const alias_CGMZCommonEventsEverywhere_SceneBase_initialize = Scene_Base.prototype.initialize;
Scene_Base.prototype.initialize = function() {
    alias_CGMZCommonEventsEverywhere_SceneBase_initialize.call(this);
    this._cgmz_commonEventsEverywhere_canRunCommonEventInScene = !CGMZ.CommonEventsEverywhere.NoRunScenes.includes(this.constructor.name);
	if(CGMZ.CommonEventsEverywhere.LogSceneNames && $gameTemp?.isPlaytest()) {
		CGMZ_Utils.logInfo(`[CGMZ] Common Events Everywhere - Scene was created with constructor name: ${this.constructor.name}`);
	}
};
//-----------------------------------------------------------------------------
// Update cgmz common events if able
//-----------------------------------------------------------------------------
const alias_CGMZCommonEventsEverywhere_SceneBase_update = Scene_Base.prototype.update;
Scene_Base.prototype.update = function() {
    alias_CGMZCommonEventsEverywhere_SceneBase_update.call(this);
	if(this.CGMZ_canUpdateCommonEvents()) {
		$gameMap.CGMZ_updateOtherCommonEvents();
		if(this.isActive()) {
			$cgmz.updateCommonEventInterpreter();
		}
	}
};
//-----------------------------------------------------------------------------
// Check if scene can run common event
//-----------------------------------------------------------------------------
Scene_Base.prototype.CGMZ_canUpdateCommonEvents = function() {
    return this._cgmz_commonEventsEverywhere_canRunCommonEventInScene;
};
//=============================================================================
// Scene_Map
//-----------------------------------------------------------------------------
// Do not update cgmz common events on map
//=============================================================================
//-----------------------------------------------------------------------------
// Do not update cgmz common events on map
//-----------------------------------------------------------------------------
Scene_Map.prototype.CGMZ_canUpdateCommonEvents = function() {
    return false;
};
//=============================================================================
// Scene_ItemBase
//-----------------------------------------------------------------------------
// Do not go to map if common event that is reserved is able to run outside map
//=============================================================================
//-----------------------------------------------------------------------------
// Do not go to map if common event that is reserved is able to run outside map
//-----------------------------------------------------------------------------
const alias_CGMZCommonEventsEverywhere_SceneItemBase_checkCommonEvent = Scene_ItemBase.prototype.checkCommonEvent;
Scene_ItemBase.prototype.checkCommonEvent = function() {
	let runOriginal = true;
	if($gameTemp.isCommonEventReserved()) {
		const ce = $dataCommonEvents[$gameTemp._commonEventQueue[0]];
		if(ce && CGMZ_Utils.readCommentBasic(ce.list, "CGMZ RUN EVERYWHERE", true) !== null) runOriginal = false;
	}
	if(runOriginal) alias_CGMZCommonEventsEverywhere_SceneItemBase_checkCommonEvent.call(this);
};
//=============================================================================
// Game_Map
//-----------------------------------------------------------------------------
// Update cgmz common events in non-map scenes
//=============================================================================
//-----------------------------------------------------------------------------
// Initialize refresh for common event request
//-----------------------------------------------------------------------------
const alias_CGMZCommonEventsEverywhere_GameMap_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function(mapId) {
    alias_CGMZCommonEventsEverywhere_GameMap_setup.call(this, mapId);
    this._cgmz_cgmzCommonEventRefreshNeeded = false;
};
//-----------------------------------------------------------------------------
// Also setup run everywhere property on common events
//-----------------------------------------------------------------------------
const alias_CGMZCommonEventsEverywhere_GameMap_setupEvents = Game_Map.prototype.setupEvents;
Game_Map.prototype.setupEvents = function() {
    alias_CGMZCommonEventsEverywhere_GameMap_setupEvents.call(this);
	for(const commonEvent of this._commonEvents) {
		commonEvent.CGMZ_checkForRunEverywhere();
	}
};
//-----------------------------------------------------------------------------
// Update cgmz common events too
//-----------------------------------------------------------------------------
Game_Map.prototype.CGMZ_updateOtherCommonEvents = function() {
	if(this._cgmz_cgmzCommonEventRefreshNeeded) this.CGMZ_checkOtherCommonEventRefresh();
    for(const commonEvent of this._commonEvents) {
        commonEvent.CGMZ_updateEverywhere();
    }
};
//-----------------------------------------------------------------------------
// Check cgmz common events for refresh
//-----------------------------------------------------------------------------
Game_Map.prototype.CGMZ_checkOtherCommonEventRefresh = function() {
    this._cgmz_cgmzCommonEventRefreshNeeded = false;
	for(const commonEvent of this._commonEvents) {
        commonEvent.refresh();
    }
};
//-----------------------------------------------------------------------------
// Request Common Event refresh too
//-----------------------------------------------------------------------------
const alias_CGMZCommonEventsEverywhere_GameMap_requestRefresh = Game_Map.prototype.requestRefresh;
Game_Map.prototype.requestRefresh = function() {
    alias_CGMZCommonEventsEverywhere_GameMap_requestRefresh.call(this);
	this.CGMZ_requestCommonEventRefresh();
};
//-----------------------------------------------------------------------------
// Request Common Event refresh 
//-----------------------------------------------------------------------------
Game_Map.prototype.CGMZ_requestCommonEventRefresh = function() {
    this._cgmz_cgmzCommonEventRefreshNeeded = true;
};
//=============================================================================
// Game_CommonEvent
//-----------------------------------------------------------------------------
// Update function for other scenes' cgmz common events
//=============================================================================
//-----------------------------------------------------------------------------
// Initialize run everywhere to false
//-----------------------------------------------------------------------------
const alias_CGMZCommonEventsEverywhere_GameCommonEvent_initialize = Game_CommonEvent.prototype.initialize;
Game_CommonEvent.prototype.initialize = function(commonEventId) {
	this._cgmz_runEverywhere = false;
    alias_CGMZCommonEventsEverywhere_GameCommonEvent_initialize.call(this, commonEventId);
};
//-----------------------------------------------------------------------------
// Check list for comment to run everywhere
//-----------------------------------------------------------------------------
Game_CommonEvent.prototype.CGMZ_checkForRunEverywhere = function() {
	this._cgmz_runEverywhere = (CGMZ_Utils.readCommentBasic(this.list(), "CGMZ RUN EVERYWHERE", true) !== null);
};
//-----------------------------------------------------------------------------
// Update cgmz common events too
//-----------------------------------------------------------------------------
Game_CommonEvent.prototype.CGMZ_updateEverywhere = function() {
	if(this._cgmz_runEverywhere) this.update();
};
//=============================================================================
// Game_Interpreter
//-----------------------------------------------------------------------------
// Try to setup a reserved run everywhere common event
//=============================================================================
//-----------------------------------------------------------------------------
// Try to set up a common event if it is run everywhere
//-----------------------------------------------------------------------------
Game_Interpreter.prototype.CGMZ_setupRunEverywhereReservedCommonEvent = function() {
    if($gameTemp.isCommonEventReserved()) {
		for(const commonEventId of $gameTemp._commonEventQueue) {
			const commonEvent = $dataCommonEvents[commonEventId];
			if(commonEvent && CGMZ_Utils.readCommentBasic(commonEvent.list, "CGMZ RUN EVERYWHERE", true) !== null) {
				const index = $gameTemp._commonEventQueue.indexOf(commonEventId);
				$gameTemp._commonEventQueue.splice(index, 1);
				this.setup(commonEvent.list);
				return true;
			}
        }
    }
    return false;
};
//=============================================================================
// DataManager
//-----------------------------------------------------------------------------
// Also set up parallel common events in battle test
//=============================================================================
//-----------------------------------------------------------------------------
// Also set up parallel common events in battle test
//-----------------------------------------------------------------------------
const alias_CGMZCommonEventsEverywhere_DataManager_setupBattleTest = DataManager.setupBattleTest;
DataManager.setupBattleTest = function() {
    alias_CGMZCommonEventsEverywhere_DataManager_setupBattleTest.call(this);
	$gameMap._commonEvents = [];
	for(const commonEvent of $gameMap.parallelCommonEvents()) {
		const ce = new Game_CommonEvent(commonEvent.id);
        $gameMap._commonEvents.push(ce);
		ce.CGMZ_checkForRunEverywhere();
    }
};