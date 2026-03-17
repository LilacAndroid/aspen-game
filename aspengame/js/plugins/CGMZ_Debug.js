/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/debug/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc Provides additional debugging tools
 * @help
 * ============================================================================
 * For terms and conditions using this plugin in your game please visit:
 * https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * Become a Patron to get access to beta/alpha plugins plus other goodies!
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * Version: Beta R12
 * ----------------------------------------------------------------------------
 * Compatibility: Only tested with my CGMZ plugins.
 * Made for RPG Maker MZ 1.9.0
 * ----------------------------------------------------------------------------
 * Description: Provides additional debugging tools while preserving the
 * default switch/variable scene. It adds things such as manipulating gold,
 * armor, weapons, and items. It also has other features, like running a
 * common event or changing the bgm.
 * ----------------------------------------------------------------------------
 * Documentation:
 * This plugin provides an easy way to manipulate additional things in the
 * debug menu, which by default only supports switches/variables.
 *
 * New to the debug menu is:
 * • Gold: Add/subtract gold from the party
 * • Item/Weapon/Armor: Add/remove item/weapon/armor from the inventory
 * • Battle Test: Fight troops from the database with your current party
 * • Common Events: Execute a common event
 * • Sound Test: Listen to any BGM/BGS/ME/SE in your audio folders
 * • View Cache: See what images/sounds/fonts are currently cached
 * • Actors: Manipulate actor levels, skills, party status, and reinitialize
 * • Weather: Change the weather, same as event command but in game
 * • Tint: Change the screen tint, same as event command but in game
 * • Map Transfer: Transfer to any map you want
 * • Dev Save: Load a developer save file
 * • CGMZ: Enter CGMZ-specific debug menu (depends which CGMZ Plugins you have)
 *
 * In the CGMZ-specific Debug Menu, you will have the following options:
 * • Achievements: Toggle the earn or fail status of [CGMZ] achievements
 * • Currency System: Add/subtract custom currencies from the party
 * ------------------------------Dev Saves-------------------------------------
 * You can create developer saves by creating a folder called /dev/ in the
 * save directory. Once created, copy and paste any save file to this folder
 * and it will appear in the dev save debug menu option. You can rename the
 * file to help you remember what the save file is for. The save file name
 * will be displayed in the dev save select window.
 * ---------------------------Web/Mobile Games---------------------------------
 * The Sound Test debug feature will crash on web/mobile deploys if the player
 * somehow manages to access the debug menu and select it. Since this is a
 * debug tool, it is recommended to disable this plugin before deployment.
 * ---------------------------Quick Reload-------------------------------------
 * You can press a button to quickly reload your playtest. This will load you
 * back into your game exactly where you were, plus any editor changes you
 * made while you had playtest open. This should allow you to playtest your
 * game, get to a map you want to experiment with, edit the map, events, or
 * plugins that affect that area of your game and then quick reload to
 * instantly see your changes in game.
 *
 * This should work on any change you make in the editor, including map / event
 * changes, plugin changes, database changes, etc.
 * -----------------------Event / Battle Tests---------------------------------
 * Event and Battle test can be convenient ways to test your events or battles,
 * but often run a very limited simulation. This plugin allows you to expand on
 * this to make it more likely to match up with your actual game. You can set
 * the following data at the start of either test type:
 *
 * Switches
 * You can list switches out that will be turned ON at the start of battle or
 * event test.
 *
 * Variables
 * You can list out variables and a corresponding value to set them to at the 
 * start of your battle or event tests.
 *
 * Note - Battle and Event test data will not be set during normal playtest or
 * at the start of a normal deployed game, they are only set when performing a
 * battle or event test from the editor.
 * -------------------------Plugin Commands------------------------------------
 * This plugin supports the following plugin commands:
 * 
 * • Call Scene
 * Calls the Debug scene
 * ---------------------------Saved Games--------------------------------------
 * This plugin fully supports saved games.
 * 
 * This means the following should cause no issues even in saved games:
 * ✓ Add this plugin to your game
 * ✓ Modify this plugin's parameters
 * ✓ Remove this plugin from your game
 * -----------------------------Filename---------------------------------------
 * The filename of this plugin's JavaScript file MUST be CGMZ_Debug.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * --------------------------Latest Version------------------------------------
 * Hi all, this latest version adds developer saves. These are files that are
 * stored in a new folder in your save folder, called 'dev'. You must create
 * this dev save folder if you plan to use the dev save feature. Dev saves are
 * save files that are separate from normal save files. To create one, you can
 * copy a normal save file into the /dev/ folder and then name it whatever you
 * want. These are only accessible through the [CGMZ] debug screen, so you do
 * not need to worry about your player accessing them.
 *
 * You can have as many dev saves as you want.
 *
 * Version Beta R12
 * - Added dev saves
 *
 * @command Call Scene
 * @desc Call the standard debug scene
 *
 * @command Call CGMZ Scene
 * @desc Call the CGMZ debug scene
 *
 * @param Controls
 * 
 * @param Overlay Cycle Key
 * @parent Controls
 * @default F6
 * @desc The key you press to cycle between overlays
 * 
 * @param Quick Reload Key
 * @parent Controls
 * @default F1
 * @desc The key you press to quickly reload the game
 *
 * @param Debug Mechanics
 * 
 * @param Simulate Deployed Game
 * @parent Debug Mechanics
 * @type boolean
 * @default false
 * @desc If true, the playtest will think it is a deployed game instead of a playtest.
 * 
 * @param Dev Tools On Boot
 * @parent Debug Mechanics
 * @type boolean
 * @default false
 * @desc If true, the dev tools window will open on game start (playtest only)
 * 
 * @param FPS On Boot
 * @parent Debug Mechanics
 * @type boolean
 * @default false
 * @desc If true, the fps counter will display on game start (playtest only)
 *
 * @param Scene Options
 * 
 * @param Show Default
 * @parent Scene Options
 * @type boolean
 * @default true
 * @desc Show the default switches and variables option?
 * 
 * @param Show Gold
 * @parent Scene Options
 * @type boolean
 * @default true
 * @desc Show the gold debug option?
 * 
 * @param Show Items
 * @parent Scene Options
 * @type boolean
 * @default true
 * @desc Show the items debug option?
 * 
 * @param Show Weapons
 * @parent Scene Options
 * @type boolean
 * @default true
 * @desc Show the weapons debug option?
 * 
 * @param Show Armors
 * @parent Scene Options
 * @type boolean
 * @default true
 * @desc Show the armors debug option?
 * 
 * @param Show Battle Test
 * @parent Scene Options
 * @type boolean
 * @default true
 * @desc Show the battle test debug option?
 * 
 * @param Show Common Events
 * @parent Scene Options
 * @type boolean
 * @default true
 * @desc Show the common events debug option?
 * 
 * @param Show Sound Test
 * @parent Scene Options
 * @type boolean
 * @default true
 * @desc Show the sound test debug option?
 * 
 * @param Show View Cache
 * @parent Scene Options
 * @type boolean
 * @default true
 * @desc Show the view cache debug option?
 * 
 * @param Show Actors
 * @parent Scene Options
 * @type boolean
 * @default true
 * @desc Show the actors debug option?
 * 
 * @param Show Weather
 * @parent Scene Options
 * @type boolean
 * @default true
 * @desc Show the weather debug option?
 * 
 * @param Show Tint Screen
 * @parent Scene Options
 * @type boolean
 * @default true
 * @desc Show the tint screen debug option?
 * 
 * @param Show Map Transfer
 * @parent Scene Options
 * @type boolean
 * @default true
 * @desc Show the map transfer debug option?
 * 
 * @param Show Dev Save
 * @parent Scene Options
 * @type boolean
 * @default true
 * @desc Show the dev save debug option?
 * 
 * @param Show CGMZ
 * @parent Scene Options
 * @type boolean
 * @default true
 * @desc Show the CGMZ debug option?
 *
 * @param Text Options
 *
 * @param Default
 * @parent Text Options
 * @desc Name for the command to enter the default debug screen
 * @default Switches & Vars
 *
 * @param Gold
 * @parent Text Options
 * @desc Name for the command to enter the gold debug screen
 * @default Gold
 *
 * @param Item
 * @parent Text Options
 * @desc Name for the command to enter the item debug screen
 * @default Items
 *
 * @param Weapon
 * @parent Text Options
 * @desc Name for the command to enter the weapon debug screen
 * @default Weapons
 *
 * @param Armor
 * @parent Text Options
 * @desc Name for the command to enter the armor debug screen
 * @default Armors
 *
 * @param Battle Test
 * @parent Text Options
 * @desc Name for the command to enter the battle test debug screen
 * @default Battle Test
 *
 * @param Common Event
 * @parent Text Options
 * @desc Name for the command to enter the common event debug screen
 * @default Common Events
 *
 * @param Sound Test
 * @parent Text Options
 * @desc Name for the command to enter the sound test debug screen
 * @default Sound Test
 *
 * @param View Cache
 * @parent Text Options
 * @desc Name for the command to enter the view cache debug screen
 * @default View Cache
 *
 * @param Actors
 * @parent Text Options
 * @desc Name for the command to enter the actor debug screen
 * @default Actors
 *
 * @param Weather
 * @parent Text Options
 * @desc Name for the command to enter the weather debug screen
 * @default Weather
 *
 * @param Tint
 * @parent Text Options
 * @desc Name for the command to enter the tint debug screen
 * @default Tint Screen
 *
 * @param Map Transfer
 * @parent Text Options
 * @desc Name for the command to enter the map transfer debug screen
 * @default Map Transfer
 *
 * @param Dev Save
 * @parent Text Options
 * @desc Name for the command to enter the dev save debug screen
 * @default Dev Saves
 *
 * @param CGMZ
 * @parent Text Options
 * @desc Name for the command to enter the cgmz debug screen
 * @default CGMZ
 *
 * @param Achievements
 * @parent Text Options
 * @desc Name for the command to enter the [CGMZ] Achievements debug screen
 * @default Achievements
 *
 * @param Currency System
 * @parent Text Options
 * @desc Name for the command to enter the [CGMZ] Currency System debug screen
 * @default Currency System
 *
 * @param Sound Settings
 * @parent Text Options
 * @desc Name for the command to enter the Sound Test -> Settings menu
 * @default Settings
 *
 * @param Sound Volume
 * @parent Text Options
 * @desc Text to use for the Sound Test -> Settings -> Volume label
 * @default Volume:
 *
 * @param Sound Pan
 * @parent Text Options
 * @desc Text to use for the Sound Test -> Settings -> Pan label
 * @default Pan:
 *
 * @param Sound Pitch
 * @parent Text Options
 * @desc Text to use for the Sound Test -> Settings -> Pitch label
 * @default Pitch:
 *
 * @param Image Cache
 * @parent Text Options
 * @desc Text to use for the View Cache -> Image Cache command
 * @default Image Cache
 *
 * @param Font Cache
 * @parent Text Options
 * @desc Text to use for the View Cache -> Font Cache command
 * @default Font Cache
 *
 * @param Remove From Party
 * @parent Text Options
 * @desc Text to use for the Actor -> Remove From Party text
 * @default Remove From Party
 *
 * @param Add To Party
 * @parent Text Options
 * @desc Text to use for the Actor -> Remove From Party text
 * @default Add To Party
 *
 * @param Current Level
 * @parent Text Options
 * @desc Text to use for the Actor -> Current Level text
 * @default Current Level: 
 *
 * @param Change Skills
 * @parent Text Options
 * @desc Text to use for the Actor -> Change Skills text
 * @default Change Skills
 *
 * @param Recover All
 * @parent Text Options
 * @desc Text to use for the Actor -> Recover All text
 * @default Recover All
 *
 * @param Initialize Actor
 * @parent Text Options
 * @desc Text to use for the Actor -> Initialize text
 * @default Initialize Actor
 *
 * @param Weather Type
 * @parent Text Options
 * @desc Text to use for the Weather -> Type text
 * @default Type
 *
 * @param Weather Power
 * @parent Text Options
 * @desc Text to use for the Weather -> Power text
 * @default Power
 *
 * @param Weather Help
 * @parent Text Options
 * @desc Text to use for the Weather -> Help text
 * @default Left/Right to Change
 *
 * @param Weather Type None
 * @parent Text Options
 * @desc Text to use for the Weather -> Type text when None is selected
 * @default None
 *
 * @param Weather Type Rain
 * @parent Text Options
 * @desc Text to use for the Weather -> Type text when Rain is selected
 * @default Rain
 *
 * @param Weather Type Storm
 * @parent Text Options
 * @desc Text to use for the Weather -> Type text when Storm is selected
 * @default Storm
 *
 * @param Weather Type Snow
 * @parent Text Options
 * @desc Text to use for the Weather -> Type text when Snow is selected
 * @default Snow
 *
 * @param Tint Help
 * @parent Text Options
 * @desc Text to use for the Tint Screen -> Help text
 * @default Left/Right to Change
 *
 * @param Tint Red
 * @parent Text Options
 * @desc Text to use for the Tint Screen -> Red text
 * @default Red
 *
 * @param Tint Green
 * @parent Text Options
 * @desc Text to use for the Tint Screen -> Green text
 * @default Green
 *
 * @param Tint Blue
 * @parent Text Options
 * @desc Text to use for the Tint Screen -> Blue text
 * @default Blue
 *
 * @param Tint Gray
 * @parent Text Options
 * @desc Text to use for the Tint Screen -> Gray text
 * @default Gray
 *
 * @param Achievement Earn
 * @parent Text Options
 * @desc Text to use for the CGMZ -> Achievements -> Toggle Earn option
 * @default Toggle Earn
 *
 * @param Achievement Fail
 * @parent Text Options
 * @desc Text to use for the CGMZ -> Achievements -> Toggle Fail option
 * @default Toggle Fail
 *
 * @param Test Options
 *
 * @param Battle Test Data
 * @parent Test Options
 * @type struct<BattleTestOptions>
 * @desc Additional data to set up during battle test setup
 * @default {"Switches":"[]","Variables":"[]"}
 *
 * @param Event Test Data
 * @parent Test Options
 * @type struct<EventTestOptions>
 * @desc Additional data to set up during event test setup
 * @default {"Switches":"[]","Variables":"[]"}
 *
 * @param Integrations
 * 
 * @param Scene Background
 * @parent Integrations
 * @desc [CGMZ] Scene Backgrounds preset id to use for the debug scenes
*/
/*~struct~BattleTestOptions:
 * @param Switches
 * @type switch[]
 * @default []
 * @desc A list of switch ids that will be toggled ON at the start of a battle test.
 * 
 * @param Variables
 * @type struct<VariableSetup>[]
 * @default []
 * @desc A list of variable ids that will be set to a value at the start of a battle test.
*/
/*~struct~EventTestOptions:
 * @param Switches
 * @type switch[]
 * @default []
 * @desc A list of switch ids that will be toggled ON at the start of an event test.
 * 
 * @param Variables
 * @type struct<VariableSetup>[]
 * @default []
 * @desc A list of variable ids that will be set to a value at the start of an event test.
*/
/*~struct~VariableSetup:
 * @param Variable
 * @type variable
 * @default 0
 * @desc The variable id to set
 * 
 * @param Value
 * @type number
 * @min -9999999999
 * @default 0
 * @desc The value to set the variable to
*/
Imported.CGMZ_Debug = true;
CGMZ.Versions["Debug"] = "Beta R12";
CGMZ.Debug = {};
CGMZ.Debug.parameters = PluginManager.parameters('CGMZ_Debug');
CGMZ.Debug.DefaultCommand = CGMZ.Debug.parameters["Default"];
CGMZ.Debug.GoldCommand = CGMZ.Debug.parameters["Gold"];
CGMZ.Debug.ItemCommand = CGMZ.Debug.parameters["Item"];
CGMZ.Debug.WeaponCommand = CGMZ.Debug.parameters["Weapon"];
CGMZ.Debug.ArmorCommand = CGMZ.Debug.parameters["Armor"];
CGMZ.Debug.BattleTestCommand = CGMZ.Debug.parameters["Battle Test"];
CGMZ.Debug.CommonEventCommand = CGMZ.Debug.parameters["Common Event"];
CGMZ.Debug.SoundTestCommand = CGMZ.Debug.parameters["Sound Test"];
CGMZ.Debug.ViewCacheCommand = CGMZ.Debug.parameters["View Cache"];
CGMZ.Debug.ActorsCommand = CGMZ.Debug.parameters["Actors"];
CGMZ.Debug.WeatherCommand = CGMZ.Debug.parameters["Weather"];
CGMZ.Debug.TintCommand = CGMZ.Debug.parameters["Tint"];
CGMZ.Debug.DevSaveCommand = CGMZ.Debug.parameters["Dev Save"];
CGMZ.Debug.CGMZCommand = CGMZ.Debug.parameters["CGMZ"];
CGMZ.Debug.AchievementsCommand = CGMZ.Debug.parameters["Achievements"];
CGMZ.Debug.CurrencySystemCommand = CGMZ.Debug.parameters["Currency System"];
CGMZ.Debug.MapTransferCommand = CGMZ.Debug.parameters["Map Transfer"];
CGMZ.Debug.SoundTestSettingsCommand = CGMZ.Debug.parameters["Sound Settings"];
CGMZ.Debug.SoundTestSettingsVolume = CGMZ.Debug.parameters["Sound Volume"];
CGMZ.Debug.SoundTestSettingsPan = CGMZ.Debug.parameters["Sound Pan"];
CGMZ.Debug.SoundTestSettingsPitch = CGMZ.Debug.parameters["Sound Pitch"];
CGMZ.Debug.FontCacheCommand = CGMZ.Debug.parameters["Font Cache"];
CGMZ.Debug.ImageCacheCommand = CGMZ.Debug.parameters["Image Cache"];
CGMZ.Debug.RemoveFromParty = CGMZ.Debug.parameters["Remove From Party"];
CGMZ.Debug.AddToParty = CGMZ.Debug.parameters["Add To Party"];
CGMZ.Debug.CurrentLevel = CGMZ.Debug.parameters["Current Level"];
CGMZ.Debug.ChangeSkills = CGMZ.Debug.parameters["Change Skills"];
CGMZ.Debug.RecoverAll = CGMZ.Debug.parameters["Recover All"];
CGMZ.Debug.InitializeActor = CGMZ.Debug.parameters["Initialize Actor"];
CGMZ.Debug.WeatherType = CGMZ.Debug.parameters["Weather Type"];
CGMZ.Debug.WeatherTypeNone = CGMZ.Debug.parameters["Weather Type None"];
CGMZ.Debug.WeatherTypeRain = CGMZ.Debug.parameters["Weather Type Rain"];
CGMZ.Debug.WeatherTypeStorm = CGMZ.Debug.parameters["Weather Type Storm"];
CGMZ.Debug.WeatherTypeSnow = CGMZ.Debug.parameters["Weather Type Snow"];
CGMZ.Debug.WeatherPower = CGMZ.Debug.parameters["Weather Power"];
CGMZ.Debug.WeatherHelp = CGMZ.Debug.parameters["Weather Help"];
CGMZ.Debug.TintHelp = CGMZ.Debug.parameters["Tint Help"];
CGMZ.Debug.TintRed = CGMZ.Debug.parameters["Tint Red"];
CGMZ.Debug.TintGreen = CGMZ.Debug.parameters["Tint Green"];
CGMZ.Debug.TintBlue = CGMZ.Debug.parameters["Tint Blue"];
CGMZ.Debug.TintGray = CGMZ.Debug.parameters["Tint Gray"];
CGMZ.Debug.AchievementsEarnCommand = CGMZ.Debug.parameters["Achievement Earn"];
CGMZ.Debug.AchievementsFailCommand = CGMZ.Debug.parameters["Achievement Fail"];
CGMZ.Debug.SceneBackground = CGMZ.Debug.parameters["Scene Background"];
CGMZ.Debug.OverlayCycleKey = CGMZ.Debug.parameters["Overlay Cycle Key"];
CGMZ.Debug.QuickReloadKey = CGMZ.Debug.parameters["Quick Reload Key"];
CGMZ.Debug.ShowDefault = (CGMZ.Debug.parameters["Show Default"] === 'true');
CGMZ.Debug.ShowGold = (CGMZ.Debug.parameters["Show Gold"] === 'true');
CGMZ.Debug.ShowItems = (CGMZ.Debug.parameters["Show Items"] === 'true');
CGMZ.Debug.ShowWeapons = (CGMZ.Debug.parameters["Show Weapons"] === 'true');
CGMZ.Debug.ShowArmors = (CGMZ.Debug.parameters["Show Armors"] === 'true');
CGMZ.Debug.ShowBattleTest = (CGMZ.Debug.parameters["Show Battle Test"] === 'true');
CGMZ.Debug.ShowCommonEvents = (CGMZ.Debug.parameters["Show Common Events"] === 'true');
CGMZ.Debug.ShowSoundTest = (CGMZ.Debug.parameters["Show Sound Test"] === 'true');
CGMZ.Debug.ShowViewCache = (CGMZ.Debug.parameters["Show View Cache"] === 'true');
CGMZ.Debug.ShowActors = (CGMZ.Debug.parameters["Show Actors"] === 'true');
CGMZ.Debug.ShowWeather = (CGMZ.Debug.parameters["Show Weather"] === 'true');
CGMZ.Debug.ShowTintScreen = (CGMZ.Debug.parameters["Show Tint Screen"] === 'true');
CGMZ.Debug.ShowMapTransfer = (CGMZ.Debug.parameters["Show Map Transfer"] === 'true');
CGMZ.Debug.ShowDevSave = (CGMZ.Debug.parameters["Show Dev Save"] === 'true');
CGMZ.Debug.ShowCGMZ = (CGMZ.Debug.parameters["Show CGMZ"] === 'true');
CGMZ.Debug.SimulateDeployedGame = (CGMZ.Debug.parameters["Simulate Deployed Game"] === 'true');
CGMZ.Debug.DevToolsOnBoot = (CGMZ.Debug.parameters["Dev Tools On Boot"] === 'true');
CGMZ.Debug.FPSOnBoot = (CGMZ.Debug.parameters["FPS On Boot"] === 'true');
CGMZ.Debug.BattleTest = CGMZ_Utils.parseJSON(CGMZ.Debug.parameters["Battle Test Data"], null, '[CGMZ] Debug', 'Your Battle Test Data parameter was not valid JSON, no additional data will be loaded in battle test.');
CGMZ.Debug.EventTest = CGMZ_Utils.parseJSON(CGMZ.Debug.parameters["Event Test Data"], null, '[CGMZ] Debug', 'Your Event Test Data parameter was not valid JSON, no additional data will be loaded in event test.');
//=============================================================================
// CGMZ_Temp
//-----------------------------------------------------------------------------
// Add plugin commands, add key overlay toggles
//=============================================================================
//-----------------------------------------------------------------------------
// Add overlay toggle data
//-----------------------------------------------------------------------------
const alias_CGMZDebug_CGMZTemp_createPluginData = CGMZ_Temp.prototype.createPluginData;
CGMZ_Temp.prototype.createPluginData = function() {
	alias_CGMZDebug_CGMZTemp_createPluginData.call(this);
	this.debugOverlayTypes = ['', 'region', 'tag', 'damage', 'counter', 'bush', 'ladder'];
	this.debugOverlayId = 0;
	this._cgmzDebugOverlayCanAdvance = true;
};
//-----------------------------------------------------------------------------
// Check for overlay advance
//-----------------------------------------------------------------------------
const alias_CGMZDebug_CGMZTemp_refreshForKeysDown = CGMZ_Temp.prototype.refreshForKeysDown;
CGMZ_Temp.prototype.refreshForKeysDown = function() {
	alias_CGMZDebug_CGMZTemp_refreshForKeysDown.call(this);
	if(this._cgmzDebugOverlayCanAdvance && $gameTemp.isPlaytest() && this._inputCurrentState[CGMZ.Debug.OverlayCycleKey]) {
		this.debugOverlayId++;
		if(this.debugOverlayId >= this.debugOverlayTypes.length) this.debugOverlayId = 0;
		this._cgmzDebugOverlayCanAdvance = false;
	}
};
//-----------------------------------------------------------------------------
// Check if overlay toggle key released
//-----------------------------------------------------------------------------
const alias_CGMZDebug_CGMZTemp_refreshForKeysUp = CGMZ_Temp.prototype.refreshForKeysUp;
CGMZ_Temp.prototype.refreshForKeysUp = function() {
	alias_CGMZDebug_CGMZTemp_refreshForKeysUp.call(this);
	if(!this._cgmzDebugOverlayCanAdvance && !this._inputCurrentState[CGMZ.Debug.OverlayCycleKey]) {
		this._cgmzDebugOverlayCanAdvance = true;
	}
};
//-----------------------------------------------------------------------------
// Register Plugin Commands
//-----------------------------------------------------------------------------
const alias_CGMZDebug_registerPluginCommands = CGMZ_Temp.prototype.registerPluginCommands;
CGMZ_Temp.prototype.registerPluginCommands = function() {
	alias_CGMZDebug_registerPluginCommands.call(this);
	PluginManager.registerCommand("CGMZ_Debug", "Call Scene", this.pluginCommandDebugCallScene);
	PluginManager.registerCommand("CGMZ_Debug", "Call CGMZ Scene", this.pluginCommandDebugCallCGMZScene);
};
//-----------------------------------------------------------------------------
// Call debug scene
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandDebugCallScene = function() {
	SceneManager.push(Scene_Debug);
};
//-----------------------------------------------------------------------------
// Call CGMZ debug scene
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandDebugCallCGMZScene = function() {
	SceneManager.push(CGMZ_Scene_Debug);
};
//=============================================================================
// Scene_Boot
//-----------------------------------------------------------------------------
// Opens dev tools / fps counter on boot if necessary and able
//=============================================================================
//-----------------------------------------------------------------------------
// Also open various debug tools if parameter is enabled
//-----------------------------------------------------------------------------
const alias_CGMZDebug_SceneBoot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
	alias_CGMZDebug_SceneBoot_start.apply(this, arguments);
	if($gameTemp.isPlaytest() && CGMZ.Debug.DevToolsOnBoot) {
		SceneManager.showDevTools();
	}
	if($gameTemp.isPlaytest() && CGMZ.Debug.FPSOnBoot) {
		Graphics._switchFPSCounter();
	}
	if(StorageManager.exists('cgmzQuickReload')) {
		this.CGMZ_loadQuickReload();
	}
};
//-----------------------------------------------------------------------------
// Load a quick reload if exists
//-----------------------------------------------------------------------------
Scene_Boot.prototype.CGMZ_loadQuickReload = function() {
	DataManager.CGMZ_loadQuickReload('cgmzQuickReload')
        .then(() => this.CGMZ_onQuickReloadSuccess())
        .catch(() => this.CGMZ_onQuickReloadFailure());
};
//-----------------------------------------------------------------------------
// On Quick Reload Success
//-----------------------------------------------------------------------------
Scene_Boot.prototype.CGMZ_onQuickReloadSuccess = function() {
	StorageManager.remove('cgmzQuickReload');
	const mapId = $gameMap.mapId();
	const x = $gamePlayer.x;
	const y = $gamePlayer.y;
	$gamePlayer.reserveTransfer(mapId, x, y);
	$gamePlayer.requestMapReload();
	this._cgmz_wasQuickReload = true;
	SceneManager.goto(Scene_Map);
};
//-----------------------------------------------------------------------------
// On Quick Reload Failure
//-----------------------------------------------------------------------------
Scene_Boot.prototype.CGMZ_onQuickReloadFailure = function() {
	StorageManager.remove('cgmzQuickReload');
};
//-----------------------------------------------------------------------------
// Processing when scene terminates
//-----------------------------------------------------------------------------
const alias_CGMZDebug_SceneBoot_terminate = Scene_Boot.prototype.terminate;
Scene_Boot.prototype.terminate = function() {
    alias_CGMZDebug_SceneBoot_terminate.call(this);
    if(this._cgmz_wasQuickReload) {
        $gameSystem.onAfterLoad();
		$cgmzTemp._wasQuickReload = true;
    }
};
//=============================================================================
// Game_Temp
//-----------------------------------------------------------------------------
// Simulate production environment parameter
//=============================================================================
//-----------------------------------------------------------------------------
// Always pass false if simulating production
//-----------------------------------------------------------------------------
const CGMZDebug_GameTemp_isPlaytest = Game_Temp.prototype.isPlaytest;
Game_Temp.prototype.isPlaytest = function() {
	return (CGMZ.Debug.SimulateDeployedGame) ? false : CGMZDebug_GameTemp_isPlaytest.call(this);
};
//=============================================================================
// Scene_Map
//-----------------------------------------------------------------------------
// Change debug scene to start with CGMZ debug scene
//=============================================================================
//-----------------------------------------------------------------------------
// Overwrite this to instead start by calling the CGMZ Debug Scene, which can
// link to the standard debug scene through command
//-----------------------------------------------------------------------------
Scene_Map.prototype.updateCallDebug = function() {
	if(this.isDebugCalled()) {
		SceneManager.push(CGMZ_Scene_Debug);
	}
};
//-----------------------------------------------------------------------------
// Check if quick reload key is pressed
//-----------------------------------------------------------------------------
const alias_CGMZDebug_SceneMap_updateScene = Scene_Map.prototype.updateScene;
Scene_Map.prototype.updateScene = function() {
    alias_CGMZDebug_SceneMap_updateScene.call(this);
    if(!SceneManager.isSceneChanging()) {
        this.CGMZ_updateQuickReload();
    }
};
//-----------------------------------------------------------------------------
// Check if quick reload key is pressed, if so update for the quick reload function
//-----------------------------------------------------------------------------
Scene_Map.prototype.CGMZ_updateQuickReload = function() {
    if(!$gameTemp.isPlaytest() || this._cgmz_isQuickReload) return;
	if($cgmzTemp.isKeyPressed(CGMZ.Debug.QuickReloadKey)) {
		this.CGMZ_performQuickReload();
	}
};
//-----------------------------------------------------------------------------
// Perform a quick reload
//-----------------------------------------------------------------------------
Scene_Map.prototype.CGMZ_performQuickReload = function() {
	this._cgmz_isQuickReload = true;
	$gameSystem.onBeforeSave();
    DataManager.CGMZ_saveQuickReloadInfo();
};
//=============================================================================
// Game_Map
//-----------------------------------------------------------------------------
// Do not autoplay if just got done quick reloading
//=============================================================================
//-----------------------------------------------------------------------------
// Save CGMZ quick reload data
//-----------------------------------------------------------------------------
const alias_CGMZDebu_GameMap_autoplay = Game_Map.prototype.autoplay;
Game_Map.prototype.autoplay = function() {
    if($cgmzTemp._wasQuickReload) {
		$cgmzTemp._wasQuickReload = false;
	} else {
		alias_CGMZDebu_GameMap_autoplay.call(this);
	}
};
//=============================================================================
// DataManager
//-----------------------------------------------------------------------------
// Handle quick reload, additional data for battle/event test
//=============================================================================
//-----------------------------------------------------------------------------
// Save CGMZ quick reload data
//-----------------------------------------------------------------------------
DataManager.CGMZ_saveQuickReloadInfo = function() {
	const contents = this.makeSaveContents();
    StorageManager.saveObject("cgmzQuickReload", contents).then(obj => SceneManager.reloadGame());
};
//-----------------------------------------------------------------------------
// Load CGMZ quick reload data
//-----------------------------------------------------------------------------
DataManager.CGMZ_loadQuickReload = function(saveName) {
    return StorageManager.loadObject(saveName).then(contents => {
        this.createGameObjects();
        this.extractSaveContents(contents);
        this.correctDataErrors();
        return 0;
    });
};
//-----------------------------------------------------------------------------
// Also set up additional data for battle test
//-----------------------------------------------------------------------------
const alias_CGMZDebug_DataManager_setupBattleTest = DataManager.setupBattleTest;
DataManager.setupBattleTest = function() {
    alias_CGMZDebug_DataManager_setupBattleTest.call(this);
	if(CGMZ.Debug.BattleTest) this.CGMZ_setupBattleTestDebugInfo();
};
//-----------------------------------------------------------------------------
// Also set up additional data for battle test
//-----------------------------------------------------------------------------
const alias_CGMZDebug_DataManager_setupEventTest = DataManager.setupEventTest;
DataManager.setupEventTest = function() {
    alias_CGMZDebug_DataManager_setupEventTest.call(this);
	if(CGMZ.Debug.EventTest) this.CGMZ_setupEventTestDebugInfo();
};
//-----------------------------------------------------------------------------
// Set up battle test debug info
//-----------------------------------------------------------------------------
DataManager.CGMZ_setupBattleTestDebugInfo = function() {
	const switches = CGMZ_Utils.parseJSON(CGMZ.Debug.BattleTest.Switches, [], '[CGMZ] Debug', 'Your Switches parameter in your Battle Test data was not valid json and could not be read.').map(x => Number(x));
	for(const switchId of switches) {
		$gameSwitches.setValue(switchId, true);
	}
	const variables = CGMZ_Utils.parseJSON(CGMZ.Debug.BattleTest.Variables, [], '[CGMZ] Debug', 'Your Variables parameter in your Battle Test data was not valid json and could not be read.');
	for(const varJson of variables) {
		const v = CGMZ_Utils.parseJSON(varJson, null, '[CGMZ] Debug', 'One of your Battle Test Variables was not valid json and could not be read.');
		if(!v) continue;
		const varId = Number(v.Variable);
		const value = Number(v.Value);
		$gameVariables.setValue(varId, value);
	}
};
//-----------------------------------------------------------------------------
// Set up event test debug info
//-----------------------------------------------------------------------------
DataManager.CGMZ_setupEventTestDebugInfo = function() {
	const switches = CGMZ_Utils.parseJSON(CGMZ.Debug.EventTest.Switches, [], '[CGMZ] Debug', 'Your Switches parameter in your Event Test data was not valid json and could not be read.').map(x => Number(x));
	for(const switchId of switches) {
		$gameSwitches.setValue(switchId, true);
	}
	const variables = CGMZ_Utils.parseJSON(CGMZ.Debug.EventTest.Variables, [], '[CGMZ] Debug', 'Your Variables parameter in your Event Test data was not valid json and could not be read.');
	for(const varJson of variables) {
		const v = CGMZ_Utils.parseJSON(varJson, null, '[CGMZ] Debug', 'One of your Event Test Variables was not valid json and could not be read.');
		if(!v) continue;
		const varId = Number(v.Variable);
		const value = Number(v.Value);
		$gameVariables.setValue(varId, value);
	}
};
//=============================================================================
// Scene_Debug
//-----------------------------------------------------------------------------
// Add custom background to default debug scene too
//=============================================================================
//-----------------------------------------------------------------------------
// Get the scene's custom scene background
// No need to check if Scene Backgrounds is installed because this custom func
// is only called by that plugin
//-----------------------------------------------------------------------------
Scene_Debug.prototype.CGMZ_getCustomSceneBackground = function() {
	return $cgmzTemp.sceneBackgroundPresets[CGMZ.Debug.SceneBackground];
};
//=============================================================================
// CGMZ_Scene_Debug
//-----------------------------------------------------------------------------
// Handles CGMZ Debug features
//=============================================================================
function CGMZ_Scene_Debug() {
	this.initialize(...arguments);
}
CGMZ_Scene_Debug.prototype = Object.create(Scene_MenuBase.prototype);
CGMZ_Scene_Debug.prototype.constructor = CGMZ_Scene_Debug;
//-----------------------------------------------------------------------------
// Initialize function
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.initialize = function() {
	Scene_MenuBase.prototype.initialize.call(this);
};
//-----------------------------------------------------------------------------
// Get the scene's custom scene background
// No need to check if Scene Backgrounds is installed because this custom func
// is only called by that plugin
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.CGMZ_getCustomSceneBackground = function() {
	return $cgmzTemp.sceneBackgroundPresets[CGMZ.Debug.SceneBackground];
};
//-----------------------------------------------------------------------------
// Create debug windows and hide/deactivate default windows
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.create = function() {
	Scene_MenuBase.prototype.create.call(this);
	this.createWindows();
	this._cgmzData = {goldRoute: "gold"};
};
//-----------------------------------------------------------------------------
// Process after load if dev save loaded
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.terminate = function() {
    Scene_MenuBase.prototype.terminate.call(this);
    if(this._loadSuccess) {
        $gameSystem.onAfterLoad();
    }
};
//-----------------------------------------------------------------------------
// Create the windows
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.createWindows = function() {
	this.createCommandWindow();
	this.createCGMZCommandWindow();
	this.createGoldWindow();
	this.createGoldHelperWindow();
	this.createItemSelectWindow();
	this.createItemSelectWindowHelp();
	this.createTroopSelectWindow();
	this.createCommonEventSelectWindow();
	this.createSoundTestCommandWindow();
	this.createSoundTestSelectWindow();
	this.createSoundTestSettingsWindow();
	this.createViewCacheSelectWindow();
	this.createViewCacheWindow();
	this.createActorSelectWindow();
	this.createActorManipulateWindow();
	this.createActorNameWindow();
	this.createActorSkillWindow();
	this.createWeatherWindow();
	this.createTintWindow();
	this.createMapSelectWindow();
	this.createMapWindow();
	this.createDevSaveSelectWindow();
	this.createAchievementWindow();
	this.createAchievementCommandWindow();
	this.createCurrencySystemWindow();
};
//-----------------------------------------------------------------------------
// Create the Command Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.createCommandWindow = function() {
	const rect = this.commandWindowRect();
	this.commandWindow = new CGMZ_Debug_Window_Command(rect);
	this.commandWindow.setHandler("cancel", this.popScene.bind(this));
	this.commandWindow.setHandler("default", this.commandDefault.bind(this));
	this.commandWindow.setHandler("gold", this.commandGold.bind(this));
	this.commandWindow.setHandler("items", this.commandItem.bind(this));
	this.commandWindow.setHandler("armors", this.commandArmor.bind(this));
	this.commandWindow.setHandler("weapons", this.commandWeapon.bind(this));
	this.commandWindow.setHandler("troops", this.commandTroops.bind(this));
	this.commandWindow.setHandler("commonEvent", this.commandCommonEvent.bind(this));
	this.commandWindow.setHandler("soundTest", this.commandSoundTest.bind(this));
	this.commandWindow.setHandler("viewCache", this.commandViewCache.bind(this));
	this.commandWindow.setHandler("actors", this.commandActors.bind(this));
	this.commandWindow.setHandler("weather", this.commandWeather.bind(this));
	this.commandWindow.setHandler("tint", this.commandTint.bind(this));
	this.commandWindow.setHandler("transfer", this.commandMapTransfer.bind(this));
	this.commandWindow.setHandler("devSave", this.commandDevSave.bind(this));
	this.commandWindow.setHandler("cgmz", this.commandCGMZ.bind(this));
	this.addWindow(this.commandWindow);
};
//-----------------------------------------------------------------------------
// Get the rect for the Command Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.commandWindowRect = function() {
	const ww = Graphics.boxWidth;
	const wh = this.calcWindowHeight(this.numLines(), true);
	const wx = 0;
	const wy = (Graphics.boxHeight - wh) / 2;
	return new Rectangle(wx, wy, ww, wh);
};
//-----------------------------------------------------------------------------
// Create the CGMZ-specific debug Command Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.createCGMZCommandWindow = function() {
	const rect = this.CGMZcommandWindowRect();
	this.debugCommandWindow = new CGMZ_Window_DebugCommand(rect);
	this.debugCommandWindow.setHandler("cancel", this.onCGMZCancel.bind(this));
	this.debugCommandWindow.setHandler("achievements", this.commandAchievements.bind(this));
	this.debugCommandWindow.setHandler("currencySystem", this.commandCurrencySystem.bind(this));
	this.addWindow(this.debugCommandWindow);
};
//-----------------------------------------------------------------------------
// Get the rect for the CGMZ-specific debug Command Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.CGMZcommandWindowRect = function() {
	const ww = Graphics.boxWidth;
	const wh = this.calcWindowHeight(this.CGMZnumLines(), true);
	const wx = 0;
	const wy = (Graphics.boxHeight - wh) / 2;
	return new Rectangle(wx, wy, ww, wh);
};
//-----------------------------------------------------------------------------
// Get the number of lines to show in the command window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.numLines = function() {
	let num = 0;
	num += 1 * CGMZ.Debug.ShowDefault;
	num += 1 * CGMZ.Debug.ShowGold;
	num += 1 * CGMZ.Debug.ShowItems;
	num += 1 * CGMZ.Debug.ShowWeapons;
	num += 1 * CGMZ.Debug.ShowArmors;
	num += 1 * CGMZ.Debug.ShowBattleTest;
	num += 1 * CGMZ.Debug.ShowCommonEvents;
	num += 1 * CGMZ.Debug.ShowSoundTest;
	num += 1 * CGMZ.Debug.ShowViewCache;
	num += 1 * CGMZ.Debug.ShowActors;
	num += 1 * CGMZ.Debug.ShowWeather;
	num += 1 * CGMZ.Debug.ShowTintScreen;
	num += 1 * CGMZ.Debug.ShowMapTransfer;
	num += 1 * CGMZ.Debug.ShowDevSave;
	num += 1 * CGMZ.Debug.ShowCGMZ;
	return Math.ceil(num/4);
};
//-----------------------------------------------------------------------------
// Get the number of lines to show in the CGMZ command window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.CGMZnumLines = function() {
	let num = 0;
	num += 1 * Imported.CGMZ_Achievements;
	return Math.max(Math.ceil(num/4), 1);
};
//-----------------------------------------------------------------------------
// Create the CGMZ Gold Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.createGoldWindow = function() {
	const rect = this.goldWindowRect();
	this.goldWindow = new CGMZ_Debug_Window_Gold(rect);
	this.goldWindow.setHandler("cancel", this.onGoldCancel.bind(this));
	this.addWindow(this.goldWindow);
};
//-----------------------------------------------------------------------------
// Get the rect for the CGMZ gold window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.goldWindowRect = function() {
	const ww = Graphics.boxWidth / 2;
	const wh = this.calcWindowHeight(1, true);
	const wx = (Graphics.boxWidth - ww) / 2;
	const wy = (Graphics.boxHeight - wh) / 2;
	return new Rectangle(wx, wy, ww, wh);
};
//-----------------------------------------------------------------------------
// Create the CGMZ Gold Helper Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.createGoldHelperWindow = function() {
	const rect = this.goldWindowHelperRect();
	this.goldHelperWindow = new Window_Base(rect);
	this.goldHelperWindow.contents.clear();
	const helpRect = this.goldHelperWindow.baseTextRect();
	this.goldHelperWindow.drawTextEx(this.GoldHelpText(), helpRect.x, helpRect.y, helpRect.width);
	this.goldHelperWindow.hide();
	this.addWindow(this.goldHelperWindow);
};
//-----------------------------------------------------------------------------
// Get the rect for the CGMZ Gold Helper Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.goldWindowHelperRect = function() {
	const ww = this.goldWindow.width;
	const wh = this.calcWindowHeight(3, false);
	const wx = (Graphics.boxWidth - ww) / 2;
	const wy = this.goldWindow.y + this.goldWindow.height;
	return new Rectangle(wx, wy, ww, wh);
};
//-----------------------------------------------------------------------------
// Create the CGMZ Item Select Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.createItemSelectWindow = function() {
	const rect = this.itemSelectWindowRect();
	this.itemSelectWindow = new CGMZ_Debug_Window_ItemSelect(rect);
	this.itemSelectWindow.setHandler("cancel", this.onItemSelectCancel.bind(this));
	this.addWindow(this.itemSelectWindow);
};
//-----------------------------------------------------------------------------
// Get the rect for the CGMZ item select window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.itemSelectWindowRect = function() {
	const x = 0;
	const y = 0;
	const width = Graphics.boxWidth;
	const height = Graphics.boxHeight - this.calcWindowHeight(2, false);
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create the CGMZ Item Select Window Help
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.createItemSelectWindowHelp = function() {
	const rect = this.itemSelectWindowHelpRect();
	this.itemSelectHelpWindow = new Window_Base(rect);
	this.itemSelectHelpWindow.contents.clear();
	const helpRect = this.itemSelectHelpWindow.baseTextRect();
	this.itemSelectHelpWindow.drawTextEx(this.ItemHelpText(), helpRect.x, helpRect.y, helpRect.width);
	this.itemSelectHelpWindow.hide();
	this.addWindow(this.itemSelectHelpWindow);
};
//-----------------------------------------------------------------------------
// Get the rect for the CGMZ item select window help
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.itemSelectWindowHelpRect = function() {
	const x = 0;
	const y = this.itemSelectWindow.height;
	const width = Graphics.boxWidth;
	const height = this.calcWindowHeight(2, false);
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create the CGMZ Troop Select Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.createTroopSelectWindow = function() {
	const rect = this.troopSelectWindowRect();
	this.troopSelectWindow = new CGMZ_Debug_Window_TroopSelect(rect);
	this.troopSelectWindow.setHandler("cancel", this.onTroopSelectCancel.bind(this));
	this.troopSelectWindow.setHandler("ok", this.onTroopSelectOk.bind(this));
	this.addWindow(this.troopSelectWindow);
};
//-----------------------------------------------------------------------------
// Get the rect for the CGMZ troop select window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.troopSelectWindowRect = function() {
	const width = Graphics.boxWidth * 0.75;
	const height = Graphics.boxHeight - this.calcWindowHeight(4, true);
	const x = (Graphics.boxWidth - width) / 2;
	const y = (Graphics.boxHeight - height) / 2;
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create the CGMZ Common Event Select Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.createCommonEventSelectWindow = function() {
	const rect = this.troopSelectWindowRect();
	this.commonEventSelectWindow = new CGMZ_Debug_Window_CommonEventSelect(rect);
	this.commonEventSelectWindow.setHandler("cancel", this.onCommonEventSelectCancel.bind(this));
	this.commonEventSelectWindow.setHandler("ok", this.onCommonEventSelectOk.bind(this));
	this.addWindow(this.commonEventSelectWindow);
};
//-----------------------------------------------------------------------------
// Create the Sound Test Command Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.createSoundTestCommandWindow = function() {
	const rect = this.soundTestCommandWindowRect();
	this.soundTestCommandWindow = new CGMZ_Debug_Window_SoundTestCommand(rect);
	this.soundTestCommandWindow.setHandler("cancel", this.onSoundTestCommandCancel.bind(this));
	this.soundTestCommandWindow.setHandler("bgm", this.soundTestCommandSelect.bind(this, "bgm"));
	this.soundTestCommandWindow.setHandler("bgs", this.soundTestCommandSelect.bind(this, "bgs"));
	this.soundTestCommandWindow.setHandler("me", this.soundTestCommandSelect.bind(this, "me"));
	this.soundTestCommandWindow.setHandler("se", this.soundTestCommandSelect.bind(this, "se"));
	this.soundTestCommandWindow.setHandler("settings", this.soundTestCommandSettings.bind(this));
	this.addWindow(this.soundTestCommandWindow);
};
//-----------------------------------------------------------------------------
// Get the rect for the Sound Test Command Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.soundTestCommandWindowRect = function() {
	const ww = Graphics.boxWidth / 2;
	const wh = this.calcWindowHeight(5, true);
	const wx = (Graphics.boxWidth - ww) / 2;
	const wy = (Graphics.boxHeight - wh) / 2;
	return new Rectangle(wx, wy, ww, wh);
};
//-----------------------------------------------------------------------------
// Create the Sound Test Select Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.createSoundTestSelectWindow = function() {
	const rect = this.soundTestSelectWindowRect();
	this.soundTestSelectWindow = new CGMZ_Debug_Window_SoundTestSelect(rect);
	this.soundTestSelectWindow.setHandler("cancel", this.onSoundTestSelectCancel.bind(this));
	this.soundTestSelectWindow.setHandler("ok", this.onSoundTestSelectOk.bind(this));
	this.addWindow(this.soundTestSelectWindow);
};
//-----------------------------------------------------------------------------
// Get the rect for the Sound Test Select Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.soundTestSelectWindowRect = function() {
	const ww = Graphics.boxWidth;
	const wh = Graphics.boxHeight;
	const wx = 0;
	const wy = 0;
	return new Rectangle(wx, wy, ww, wh);
};
//-----------------------------------------------------------------------------
// Create the Sound Test Command Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.createSoundTestSettingsWindow = function() {
	const rect = this.soundTestSettingsWindowRect();
	this.soundTestSettingsWindow = new CGMZ_Debug_Window_SoundTestSettings(rect);
	this.soundTestSettingsWindow.setHandler("cancel", this.onSoundTestSettingsCancel.bind(this));
	this.addWindow(this.soundTestSettingsWindow);
};
//-----------------------------------------------------------------------------
// Get the rect for the Sound Test Command Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.soundTestSettingsWindowRect = function() {
	const ww = Graphics.boxWidth / 2;
	const wh = this.calcWindowHeight(3, true);
	const wx = (Graphics.boxWidth - ww) / 2;
	const wy = (Graphics.boxHeight - wh) / 2;
	return new Rectangle(wx, wy, ww, wh);
};
//-----------------------------------------------------------------------------
// Create the Sound Test Select Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.createViewCacheSelectWindow = function() {
	const rect = this.viewCacheSelectWindowRect();
	this.viewCacheSelectWindow = new CGMZ_Debug_Window_ViewCacheSelect(rect);
	this.viewCacheSelectWindow.setHandler("cancel", this.onViewCacheSelectCancel.bind(this));
	this.viewCacheSelectWindow.setHandler("img", this.viewCacheCommandSelect.bind(this, "img"));
	this.viewCacheSelectWindow.setHandler("font", this.viewCacheCommandSelect.bind(this, "font"));
	this.addWindow(this.viewCacheSelectWindow);
};
//-----------------------------------------------------------------------------
// Get the rect for the Sound Test Select Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.viewCacheSelectWindowRect = function() {
	const ww = Graphics.boxWidth / 2;
	const wh = this.calcWindowHeight(2, true);
	const wx = (Graphics.boxWidth - ww) / 2;
	const wy = (Graphics.boxHeight - wh) / 2;
	return new Rectangle(wx, wy, ww, wh);
};
//-----------------------------------------------------------------------------
// Create the Sound Test Command Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.createViewCacheWindow = function() {
	const rect = this.viewCacheWindowRect();
	this.viewCacheWindow = new CGMZ_Debug_Window_ViewCache(rect);
	this.viewCacheWindow.setHandler("cancel", this.onViewCacheCancel.bind(this));
	this.addWindow(this.viewCacheWindow);
};
//-----------------------------------------------------------------------------
// Get the rect for the Sound Test Command Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.viewCacheWindowRect = function() {
	const ww = Graphics.boxWidth;
	const wh = Graphics.boxHeight;
	const wx = 0;
	const wy = 0;
	return new Rectangle(wx, wy, ww, wh);
};
//-----------------------------------------------------------------------------
// Create the CGMZ Actor Select Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.createActorSelectWindow = function() {
	const rect = this.actorSelectWindowRect();
	this.actorSelectWindow = new CGMZ_Debug_Window_ActorSelect(rect);
	this.actorSelectWindow.setHandler("cancel", this.onActorSelectCancel.bind(this));
	this.actorSelectWindow.setHandler("ok", this.onActorSelectOk.bind(this));
	this.addWindow(this.actorSelectWindow);
};
//-----------------------------------------------------------------------------
// Get the rect for the CGMZ actor select window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.actorSelectWindowRect = function() {
	const x = 0;
	const y = 0;
	const width = Graphics.boxWidth;
	const height = Graphics.boxHeight;
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create the CGMZ Actor Manipulate Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.createActorManipulateWindow = function() {
	const rect = this.actorManipulateWindowRect();
	this.actorManipulateWindow = new CGMZ_Debug_Window_ActorManipulate(rect);
	this.actorManipulateWindow.setHandler("cancel", this.onActorManipulateCancel.bind(this));
	this.actorManipulateWindow.setHandler("ok", this.onActorManipulateOk.bind(this));
	this.addWindow(this.actorManipulateWindow);
};
//-----------------------------------------------------------------------------
// Get the rect for the CGMZ actor manipulate window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.actorManipulateWindowRect = function() {
	const width = Graphics.boxWidth * 0.75;
	const height = this.calcWindowHeight(5, true);
	const x = (Graphics.boxWidth - width) / 2;
	const y = (Graphics.boxHeight - height) / 2;
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create the CGMZ Actor Name Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.createActorNameWindow = function() {
	const rect = this.actorNameWindowRect();
	this.actorNameWindow = new CGMZ_Debug_Window_ActorName(rect);
	this.actorNameWindow.hide();
	this.addWindow(this.actorNameWindow);
};
//-----------------------------------------------------------------------------
// Get the rect for the CGMZ actor name window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.actorNameWindowRect = function() {
	const width = this.actorManipulateWindow.width;
	const height = this.calcWindowHeight(1, false);
	const x = this.actorManipulateWindow.x;
	const y = this.actorManipulateWindow.y - height;
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create the CGMZ Actor Skill Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.createActorSkillWindow = function() {
	const rect = this.actorSkillWindowRect();
	this.actorSkillWindow = new CGMZ_Debug_Window_ActorSkill(rect);
	this.actorSkillWindow.setHandler("cancel", this.onActorSkillCancel.bind(this));
	this.actorSkillWindow.setHandler("ok", this.onActorSkillOk.bind(this));
	this.addWindow(this.actorSkillWindow);
};
//-----------------------------------------------------------------------------
// Get the rect for the CGMZ actor skill window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.actorSkillWindowRect = function() {
	const width = Graphics.boxWidth;
	const height = Graphics.boxHeight;
	const x = 0;
	const y = 0;
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create the CGMZ Weather Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.createWeatherWindow = function() {
	const rect = this.weatherWindowRect();
	this.weatherWindow = new CGMZ_Debug_Window_WeatherSelect(rect);
	this.weatherWindow.setHandler("cancel", this.onWeatherCancel.bind(this));
	this.weatherWindow.setHandler("ok", this.onWeatherOk.bind(this));
	this.addWindow(this.weatherWindow);
};
//-----------------------------------------------------------------------------
// Get the rect for the CGMZ weather window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.weatherWindowRect = function() {
	const width = Graphics.boxWidth * 0.5;
	const height = this.calcWindowHeight(3, true);
	const x = (Graphics.boxWidth - width) / 2;
	const y = (Graphics.boxHeight - height) / 2;
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create the CGMZ tint Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.createTintWindow = function() {
	const rect = this.tintWindowRect();
	this.tintWindow = new CGMZ_Debug_Window_TintSelect(rect);
	this.tintWindow.setHandler("cancel", this.onTintCancel.bind(this));
	this.tintWindow.setHandler("ok", this.onTintOk.bind(this));
	this.addWindow(this.tintWindow);
};
//-----------------------------------------------------------------------------
// Get the rect for the CGMZ tint window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.tintWindowRect = function() {
	const width = Graphics.boxWidth * 0.5;
	const height = this.calcWindowHeight(5, true);
	const x = (Graphics.boxWidth - width) / 2;
	const y = (Graphics.boxHeight - height) / 2;
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create the CGMZ Map Transfer Select Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.createMapSelectWindow = function() {
	const rect = this.mapSelectWindowRect();
	this.mapSelectWindow = new CGMZ_Debug_Window_MapSelect(rect);
	this.mapSelectWindow.setHandler("cancel", this.onMapSelectCancel.bind(this));
	this.mapSelectWindow.setHandler("ok", this.onMapSelectOk.bind(this));
	this.addWindow(this.mapSelectWindow);
};
//-----------------------------------------------------------------------------
// Get the rect for the CGMZ map select window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.mapSelectWindowRect = function() {
	const width = Graphics.boxWidth * 0.5;
	const height = Graphics.boxHeight * 0.8;
	const x = (Graphics.boxWidth - width) / 2;
	const y = (Graphics.boxHeight - height) / 2;
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create the CGMZ Map Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.createMapWindow = function() {
	const rect = this.mapWindowRect();
	this.mapWindow = new CGMZ_Window_Map(rect, 1);
	this.mapWindow.setHandler("cancel", this.onMapCancel.bind(this));
	this.mapWindow.setHandler("ok", this.onMapOk.bind(this));
	this.mapWindow.hide();
	this.mapWindow.deactivate();
	this.addWindow(this.mapWindow);
};
//-----------------------------------------------------------------------------
// Get the rect for the CGMZ map window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.mapWindowRect = function() {
	const width = Math.floor(Graphics.boxWidth / $gameMap.tileWidth()) * $gameMap.tileWidth() + $gameSystem.windowPadding() * 2 - 1;
	const height = Math.floor(Graphics.boxHeight / $gameMap.tileHeight()) * $gameMap.tileHeight() + $gameSystem.windowPadding() * 2 - 1;
	const x = 0;
	const y = 0;
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create the Dev Save Select
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.createDevSaveSelectWindow = function() {
	const rect = this.devSaveWindowRect();
	this.devSaveSelectWindow = new CGMZ_Window_DebugDevSaveSelect(rect);
	this.devSaveSelectWindow.setHandler("cancel", this.onDevSaveCancel.bind(this));
	this.devSaveSelectWindow.setHandler("ok", this.onDevSaveOk.bind(this));
	this.devSaveSelectWindow.hide();
	this.devSaveSelectWindow.deactivate();
	this.addWindow(this.devSaveSelectWindow);
};
//-----------------------------------------------------------------------------
// Get the rect for the dev save select window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.devSaveWindowRect = function() {
	const width = Graphics.boxWidth;
	const height = Graphics.boxHeight;
	const x = 0;
	const y = 0;
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create the CGMZ Achievement Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.createAchievementWindow = function() {
	const rect = this.achievementWindowRect();
	this.achievementWindow = new CGMZ_Window_AchievementDebug(rect);
	this.achievementWindow.setHandler("cancel", this.onAchievementCancel.bind(this));
	this.achievementWindow.setHandler("ok", this.onAchievementOk.bind(this));
	this.addWindow(this.achievementWindow);
};
//-----------------------------------------------------------------------------
// Get the rect for the CGMZ achievement window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.achievementWindowRect = function() {
	const width = Graphics.boxWidth;
	const height = Graphics.boxHeight;
	const x = 0;
	const y = 0;
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create the CGMZ Currency System Window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.createCurrencySystemWindow = function() {
	const rect = this.currencySystemWindowRect();
	this.currencySystemWindow = new CGMZ_Window_CurrencySystemDebug(rect);
	this.currencySystemWindow.setHandler("cancel", this.onCurrencySystemCancel.bind(this));
	this.currencySystemWindow.setHandler("ok", this.onCurrencySystemOk.bind(this));
	this.addWindow(this.currencySystemWindow);
};
//-----------------------------------------------------------------------------
// Get the rect for the CGMZ Currency System window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.currencySystemWindowRect = function() {
	const width = Graphics.boxWidth / 2;
	const height = this.calcWindowHeight(5, true);
	const x = (Graphics.boxWidth - width) / 2;
	const y = (Graphics.boxHeight - height) / 2;
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create the CGMZ Achievement Command
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.createAchievementCommandWindow = function() {
	const rect = this.achievementCommandWindowRect();
	this.achievementCommandWindow = new CGMZ_Window_AchievementDebugCommand(rect);
	this.achievementCommandWindow.setHandler("cancel", this.onAchievementCommandCancel.bind(this));
	this.achievementCommandWindow.setHandler("toggleEarn", this.onAchievementToggleEarn.bind(this));
	this.achievementCommandWindow.setHandler("toggleFail", this.onAchievementToggleFail.bind(this));
	this.addWindow(this.achievementCommandWindow);
};
//-----------------------------------------------------------------------------
// Get the rect for the CGMZ achievement command window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.achievementCommandWindowRect = function() {
	const width = Graphics.boxWidth / 2;
	const height = this.calcWindowHeight(2, true);
	const x = (Graphics.boxWidth - width) / 2;
	const y = (Graphics.boxHeight - height) / 2;
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Get the help text for the gold helper window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.GoldHelpText = function() {
	return ("Right : +1  Pageup   : +100\nLeft  : -1  Pagedown : -100\nHold to increase rate");
};
//-----------------------------------------------------------------------------
// Get the help text for the gold helper window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.ItemHelpText = function() {
	return ("Right : +1  Pageup   : +10\nLeft  : -1  Pagedown : -10");
};
//-----------------------------------------------------------------------------
// Handling for the default switches/variables command
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.commandDefault = function() {
	SceneManager.push(Scene_Debug);
};
//-----------------------------------------------------------------------------
// Handling for the gold command
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.commandGold = function() {
	this._cgmzData.goldRoute = "gold";
	this.goldWindow.setCurrency("default");
	this.goldWindow.show();
	this.goldWindow.activate();
	this.goldHelperWindow.show();
	this.commandWindow.deactivate();
	this.commandWindow.hide();
};
//-----------------------------------------------------------------------------
// Handling for the item command
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.commandItem = function() {
	this.itemSelectWindow.setItemType("item");
	this.itemSelectWindow.show();
	this.itemSelectHelpWindow.show();
	this.itemSelectWindow.activate();
	this.itemSelectWindow.select(0);
	this.commandWindow.deactivate();
	this.commandWindow.hide();
};
//-----------------------------------------------------------------------------
// Handling for the armor command
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.commandArmor = function() {
	this.itemSelectWindow.setItemType("armor");
	this.itemSelectWindow.show();
	this.itemSelectHelpWindow.show();
	this.itemSelectWindow.activate();
	this.itemSelectWindow.select(0);
	this.commandWindow.deactivate();
	this.commandWindow.hide();
};
//-----------------------------------------------------------------------------
// Handling for the weapon command
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.commandWeapon = function() {
	this.itemSelectWindow.setItemType("weapon");
	this.itemSelectWindow.show();
	this.itemSelectHelpWindow.show();
	this.itemSelectWindow.activate();
	this.itemSelectWindow.select(0);
	this.commandWindow.deactivate();
	this.commandWindow.hide();
};
//-----------------------------------------------------------------------------
// Handling for the gold window cancel function
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onGoldCancel = function() {
	this.goldWindow.hide();
	this.goldHelperWindow.hide();
	this.goldWindow.deactivate();
	if(this._cgmzData.goldRoute === "gold") {
		this.commandWindow.activate();
		this.commandWindow.show();
	} else {
		this.currencySystemWindow.refresh();
		this.currencySystemWindow.activate();
		this.currencySystemWindow.show();
	}
};
//-----------------------------------------------------------------------------
// Handling for the item window cancel function
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onItemSelectCancel = function() {
	this.itemSelectWindow.hide();
	this.itemSelectHelpWindow.hide();
	this.itemSelectWindow.deactivate();
	this.commandWindow.activate();
	this.commandWindow.show();
};
//-----------------------------------------------------------------------------
// Handling for the battle test command
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.commandTroops = function() {
	this.troopSelectWindow.show();
	this.troopSelectWindow.activate();
	this.troopSelectWindow.select(0);
	this.commandWindow.deactivate();
	this.commandWindow.hide();
};
//-----------------------------------------------------------------------------
// Handling for the common event command
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.commandCommonEvent = function() {
	this.commonEventSelectWindow.show();
	this.commonEventSelectWindow.activate();
	this.commonEventSelectWindow.select(0);
	this.commandWindow.deactivate();
	this.commandWindow.hide();
};
//-----------------------------------------------------------------------------
// Handling for the common event command
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.commandSoundTest = function() {
	this.soundTestCommandWindow.show();
	this.soundTestCommandWindow.activate();
	this.soundTestCommandWindow.select(0);
	this.commandWindow.deactivate();
	this.commandWindow.hide();
};
//-----------------------------------------------------------------------------
// Handling for the actors command
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.commandActors = function() {
	this.actorSelectWindow.show();
	this.actorSelectWindow.activate();
	this.actorSelectWindow.select(0);
	this.commandWindow.deactivate();
	this.commandWindow.hide();
};
//-----------------------------------------------------------------------------
// Handling for the weather command
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.commandWeather = function() {
	this.weatherWindow.show();
	this.weatherWindow.activate();
	this.weatherWindow.select(0);
	this.commandWindow.deactivate();
	this.commandWindow.hide();
};
//-----------------------------------------------------------------------------
// Handling for the tint command
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.commandTint = function() {
	this.tintWindow.show();
	this.tintWindow.activate();
	this.tintWindow.select(0);
	this.commandWindow.deactivate();
	this.commandWindow.hide();
};
//-----------------------------------------------------------------------------
// Handling for the map transfer command
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.commandMapTransfer = function() {
	this.mapSelectWindow.show();
	this.mapSelectWindow.activate();
	this.mapSelectWindow.select(0);
	this.commandWindow.deactivate();
	this.commandWindow.hide();
};
//-----------------------------------------------------------------------------
// Handling for the map transfer command
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.commandDevSave = function() {
	this.devSaveSelectWindow.show();
	this.devSaveSelectWindow.activate();
	this.devSaveSelectWindow.select(0);
	this.commandWindow.deactivate();
	this.commandWindow.hide();
};
//-----------------------------------------------------------------------------
// Handling for the CGMZ command
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.commandCGMZ = function() {
	this.commandWindow.deactivate();
	this.commandWindow.hide();
	this.debugCommandWindow.show();
	this.debugCommandWindow.activate();
	this.debugCommandWindow.selectLast();
};
//-----------------------------------------------------------------------------
// Handling for the troop window cancel function
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onTroopSelectCancel = function() {
	this.troopSelectWindow.hide();
	this.troopSelectWindow.deactivate();
	this.commandWindow.activate();
	this.commandWindow.show();
};
//-----------------------------------------------------------------------------
// Handling for the troop window ok function
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onTroopSelectOk = function() {
	const troop = $dataTroops[this.troopSelectWindow.index() + 1];
	BattleManager.setup(troop.id, true, true);
	SceneManager.push(Scene_Battle);
};
//-----------------------------------------------------------------------------
// Handling for the common event window cancel function
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onCommonEventSelectCancel = function() {
	this.commonEventSelectWindow.hide();
	this.commonEventSelectWindow.deactivate();
	this.commandWindow.activate();
	this.commandWindow.show();
};
//-----------------------------------------------------------------------------
// Handling for the common event window ok function
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onCommonEventSelectOk = function() {
	const commonEvent = $dataCommonEvents[this.commonEventSelectWindow.index() + 1];
	$gameTemp.reserveCommonEvent(commonEvent.id);
	this.popScene();
};
//-----------------------------------------------------------------------------
// Handling for the sound test command cancel
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onSoundTestCommandCancel = function() {
	this.soundTestCommandWindow.hide();
	this.soundTestCommandWindow.deactivate();
	this.commandWindow.activate();
	this.commandWindow.show();
};
//-----------------------------------------------------------------------------
// Handling for the sound test command select
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.soundTestCommandSelect = function(type) {
	this.soundTestCommandWindow.hide();
	this.soundTestCommandWindow.deactivate();
	this.soundTestSelectWindow.setType(type);
	this.soundTestSelectWindow.show();
	this.soundTestSelectWindow.activate();
};
//-----------------------------------------------------------------------------
// Handling for the sound test command settings select
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.soundTestCommandSettings = function() {
	this.soundTestCommandWindow.hide();
	this.soundTestCommandWindow.deactivate();
	this.soundTestSettingsWindow.show();
	this.soundTestSettingsWindow.activate();
};
//-----------------------------------------------------------------------------
// Handling for the sound test select ok
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onSoundTestSelectOk = function() {
	const name = this.soundTestSelectWindow.item().slice(0, -4);
	const volume = this.soundTestSettingsWindow.volume();
	const pan = this.soundTestSettingsWindow.pan();
	const pitch = this.soundTestSettingsWindow.pitch();
	const sound = {name: name, volume: volume, pan: pan, pitch: pitch};
	switch(this.soundTestSelectWindow._type) {
		case "bgm": AudioManager.playBgm(sound); break;
		case "bgs": AudioManager.playBgs(sound); break;
		case "se": AudioManager.playSe(sound); break;
		case "me": AudioManager.playMe(sound);
	}
	this.soundTestSelectWindow.activate();
};
//-----------------------------------------------------------------------------
// Handling for sound test select cancel
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onSoundTestSelectCancel = function() {
	this.soundTestSelectWindow.hide();
	this.soundTestSelectWindow.deactivate();
	this.soundTestCommandWindow.show();
	this.soundTestCommandWindow.activate();
};
//-----------------------------------------------------------------------------
// Handling for sound test settings cancel
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onSoundTestSettingsCancel = function() {
	this.soundTestSettingsWindow.hide();
	this.soundTestSettingsWindow.deactivate();
	this.soundTestCommandWindow.show();
	this.soundTestCommandWindow.activate();
};
//-----------------------------------------------------------------------------
// Handling for the view cache command
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.commandViewCache = function() {
	this.viewCacheSelectWindow.show();
	this.viewCacheSelectWindow.activate();
	this.viewCacheSelectWindow.select(0);
	this.commandWindow.deactivate();
	this.commandWindow.hide();
};
//-----------------------------------------------------------------------------
// Handling for the view cache select cancel
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onViewCacheSelectCancel = function() {
	this.viewCacheSelectWindow.hide();
	this.viewCacheSelectWindow.deactivate();
	this.commandWindow.activate();
	this.commandWindow.show();
};
//-----------------------------------------------------------------------------
// Handling for the view cache command select
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.viewCacheCommandSelect = function(type) {
	this.viewCacheSelectWindow.hide();
	this.viewCacheSelectWindow.deactivate();
	this.viewCacheWindow.setType(type);
	this.viewCacheWindow.show();
	this.viewCacheWindow.activate();
};
//-----------------------------------------------------------------------------
// Handling for view cache cancel
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onViewCacheCancel = function() {
	this.viewCacheWindow.hide();
	this.viewCacheWindow.deactivate();
	this.viewCacheSelectWindow.show();
	this.viewCacheSelectWindow.activate();
};
//-----------------------------------------------------------------------------
// Handling for actor select ok
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onActorSelectOk = function() {
	const actor = $dataActors[this.actorSelectWindow.index() + 1];
	this.actorSelectWindow.hide();
	this.actorSelectWindow.deactivate();
	this.actorNameWindow.setName(actor.name);
	this.actorNameWindow.show();
	this.actorManipulateWindow.setActor(actor.id);
	this.actorManipulateWindow.show();
	this.actorManipulateWindow.select(0);
	this.actorManipulateWindow.activate();
};
//-----------------------------------------------------------------------------
// Handling for actor select cancel
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onActorSelectCancel = function() {
	this.actorSelectWindow.hide();
	this.actorSelectWindow.deactivate();
	this.commandWindow.show();
	this.commandWindow.activate();
};
//-----------------------------------------------------------------------------
// Handling for actor manipulate ok
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onActorManipulateOk = function() {
	const command = this.actorManipulateWindow.index();
	const actor = this.actorManipulateWindow._actor;
	switch(command) {
		case 0:
			const isInParty = $gameParty.members().includes(actor);
			(isInParty) ? $gameParty.removeActor(actor._actorId) : $gameParty.addActor(actor._actorId);
			break;
		case 2:
			this.actorManipulateWindow.deactivate();
			this.actorManipulateWindow.hide();
			this.actorNameWindow.hide();
			this.actorSkillWindow.setActor(actor);
			this.actorSkillWindow.activate();
			this.actorSkillWindow.select(0);
			this.actorSkillWindow.show();
			return;
		case 3: actor.recoverAll(); break;
		case 4: actor.setup(actor._actorId); break;
	}
	this.actorManipulateWindow.refresh();
	this.actorManipulateWindow.activate();
};
//-----------------------------------------------------------------------------
// Handling for actor manipulate cancel
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onActorManipulateCancel = function() {
	this.actorManipulateWindow.hide();
	this.actorManipulateWindow.deactivate();
	this.actorNameWindow.hide();
	this.actorSelectWindow.show();
	this.actorSelectWindow.activate();
};
//-----------------------------------------------------------------------------
// Handling for actor skill ok
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onActorSkillOk = function() {
	const skillId = this.actorSkillWindow.index() + 1;
	const actor = this.actorSkillWindow._actor;
	(actor.isLearnedSkill(skillId)) ? actor.forgetSkill(skillId) : actor.learnSkill(skillId);
	this.actorSkillWindow.redrawCurrentItem();
	this.actorSkillWindow.activate();
};
//-----------------------------------------------------------------------------
// Handling for actor skill cancel
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onActorSkillCancel = function() {
	this.actorSkillWindow.hide();
	this.actorSkillWindow.deactivate();
	this.actorManipulateWindow.show();
	this.actorManipulateWindow.activate();
	this.actorNameWindow.show();
};
//-----------------------------------------------------------------------------
// Handling for weather cancel
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onWeatherCancel = function() {
	this.weatherWindow.hide();
	this.weatherWindow.deactivate();
	this.commandWindow.show();
	this.commandWindow.activate();
};
//-----------------------------------------------------------------------------
// Handling for weather ok
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onWeatherOk = function() {
	const weather = this.weatherWindow.getWeather();
	$gameScreen.changeWeather(weather.type, weather.power, weather.duration);
	this.weatherWindow.hide();
	this.weatherWindow.deactivate();
	this.commandWindow.show();
	this.commandWindow.activate();
};
//-----------------------------------------------------------------------------
// Handling for tint cancel
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onTintCancel = function() {
	this.tintWindow.hide();
	this.tintWindow.deactivate();
	this.commandWindow.show();
	this.commandWindow.activate();
};
//-----------------------------------------------------------------------------
// Handling for tint ok
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onTintOk = function() {
	const tone = this.tintWindow.getTone();
	$gameScreen.startTint(tone.tone, tone.duration);
	this.tintWindow.hide();
	this.tintWindow.deactivate();
	this.commandWindow.show();
	this.commandWindow.activate();
};
//-----------------------------------------------------------------------------
// Handling for map select cancel
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onMapSelectCancel = function() {
	this.mapSelectWindow.hide();
	this.mapSelectWindow.deactivate();
	this.commandWindow.show();
	this.commandWindow.activate();
};
//-----------------------------------------------------------------------------
// Handling for map select ok
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onMapSelectOk = function() {
	const mapId = this.mapSelectWindow.mapId();
	this.mapSelectWindow.hide();
	this.mapSelectWindow.deactivate();
	this.mapWindow.setMapId(mapId);
	this.mapWindow.select(0);
	this.mapWindow.ensureCursorVisible();
	this.mapWindow.show();
	this.mapWindow.activate();
};
//-----------------------------------------------------------------------------
// Handling for map cancel
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onMapCancel = function() {
	this.mapWindow.hide();
	this.mapWindow.deactivate();
	this.mapSelectWindow.show();
	this.mapSelectWindow.activate();
};
//-----------------------------------------------------------------------------
// Handling for map ok
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onMapOk = function() {
	const mapId = this.mapWindow._mapId;
	const x = this.mapWindow.column();
	const y = this.mapWindow.row();
	$gamePlayer.reserveTransfer(mapId, x, y, 2, 0)
	this.popScene();
};
//-----------------------------------------------------------------------------
// Handling for dev save select cancel
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onDevSaveCancel = function() {
	this.devSaveSelectWindow.hide();
	this.devSaveSelectWindow.deactivate();
	this.commandWindow.show();
	this.commandWindow.activate();
};
//-----------------------------------------------------------------------------
// Handling for dev save select ok
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onDevSaveOk = function() {
	const file = 'dev/' + this.devSaveSelectWindow.item();
	if(!file) {
		this.onDevSaveLoadFailure();
		return;
	}
	this.loadDevSave(file)
        .then(() => this.onDevSaveLoadSuccess())
        .catch(() => this.onDevSaveLoadFailure());
};
//-----------------------------------------------------------------------------
// Handling for dev save select ok
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.loadDevSave = function(file) {
	return StorageManager.loadObject(file).then(contents => {
        DataManager.createGameObjects();
        DataManager.extractSaveContents(contents);
        DataManager.correctDataErrors();
        return 0;
    });
};
//-----------------------------------------------------------------------------
// If loading dev save succeeds
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onDevSaveLoadSuccess = function() {
    SoundManager.playLoad();
    this.fadeOutAll();
    if($gameSystem.versionId() !== $dataSystem.versionId) {
        const mapId = $gameMap.mapId();
        const x = $gamePlayer.x;
        const y = $gamePlayer.y;
        $gamePlayer.reserveTransfer(mapId, x, y);
        $gamePlayer.requestMapReload();
    }
    SceneManager.goto(Scene_Map);
    this._loadSuccess = true;
};
//-----------------------------------------------------------------------------
// If loading dev save fails
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onDevSaveLoadFailure = function() {
    SoundManager.playBuzzer();
    this.devSaveSelectWindow.activate();
};
//-----------------------------------------------------------------------------
// Handling for cancel out of CGMZ specific debug window
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onCGMZCancel = function() {
	this.debugCommandWindow.deactivate();
	this.debugCommandWindow.hide();
	this.commandWindow.show();
	this.commandWindow.activate();
};
//-----------------------------------------------------------------------------
// Command - Achievements handling
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.commandAchievements = function() {
	this.debugCommandWindow.deactivate();
	this.debugCommandWindow.hide();
	this.achievementWindow.activate();
	this.achievementWindow.show();
};
//-----------------------------------------------------------------------------
// Command - Currency System handling
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.commandCurrencySystem = function() {
	this.debugCommandWindow.deactivate();
	this.debugCommandWindow.hide();
	this.currencySystemWindow.activate();
	this.currencySystemWindow.show();
};
//-----------------------------------------------------------------------------
// Achievement window ok handling
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onAchievementOk = function() {
	this.achievementWindow.deactivate();
	this.achievementCommandWindow.activate();
	this.achievementCommandWindow.show();
};
//-----------------------------------------------------------------------------
// Achievement window cancel handling
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onAchievementCancel = function() {
	this.achievementWindow.deactivate();
	this.achievementWindow.hide();
	this.debugCommandWindow.activate();
	this.debugCommandWindow.show();
};
//-----------------------------------------------------------------------------
// Achievement command window cancel handling
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onAchievementCommandCancel = function() {
	this.achievementCommandWindow.deactivate();
	this.achievementCommandWindow.hide();
	this.achievementWindow.activate();
};
//-----------------------------------------------------------------------------
// Achievement command window toggle earn
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onAchievementToggleEarn = function() {
	const achievement = this.achievementWindow.item();
	if(achievement) {
		if(achievement.isEarned()) {
			achievement._earned = false;
			achievement._earndate = "";
			$cgmz._achievetotal--;
			$cgmz._achievepts -= achievement._points;
		} else {
			$cgmz.earnAchievement(achievement._id);
		}
	}
	this.achievementCommandWindow.deactivate();
	this.achievementCommandWindow.hide();
	this.achievementWindow.refresh();
	this.achievementWindow.activate();
};
//-----------------------------------------------------------------------------
// Achievement command window toggle fail
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onAchievementToggleFail = function() {
	const achievement = this.achievementWindow.item();
	if(achievement) achievement._failed = !achievement._failed;
	this.achievementCommandWindow.deactivate();
	this.achievementCommandWindow.hide();
	this.achievementWindow.refresh();
	this.achievementWindow.activate();
};
//-----------------------------------------------------------------------------
// Currency System window ok handling
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onCurrencySystemOk = function() {
	this._cgmzData.goldRoute = "cgmz";
	this.currencySystemWindow.deactivate();
	this.currencySystemWindow.hide();
	this.goldHelperWindow.show();
	this.goldWindow.setCurrency(this.currencySystemWindow.item());
	this.goldWindow.show();
	this.goldWindow.activate();
};
//-----------------------------------------------------------------------------
// Currency System window cancel handling
//-----------------------------------------------------------------------------
CGMZ_Scene_Debug.prototype.onCurrencySystemCancel = function() {
	this.currencySystemWindow.deactivate();
	this.currencySystemWindow.hide();
	this.debugCommandWindow.activate();
	this.debugCommandWindow.show();
};
//=============================================================================
// CGMZ_Debug_Window_Command
//-----------------------------------------------------------------------------
// Command window for the Debug scene
//=============================================================================
function CGMZ_Debug_Window_Command() {
	this.initialize(...arguments);
}
CGMZ_Debug_Window_Command.prototype = Object.create(Window_HorzCommand.prototype);
CGMZ_Debug_Window_Command.prototype.constructor = CGMZ_Debug_Window_Command;
//-----------------------------------------------------------------------------
// Initialize the command window
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_Command.prototype.initialize = function(rect) {
	Window_Command.prototype.initialize.call(this, rect);
	this.selectLast();
};
//-----------------------------------------------------------------------------
// Track command position
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_Command._lastCommandSymbol = null;
//-----------------------------------------------------------------------------
// Make the list of commands for the window
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_Command.prototype.makeCommandList = function() {
	if(CGMZ.Debug.ShowDefault) this.addCommand(CGMZ.Debug.DefaultCommand, "default");
	if(CGMZ.Debug.ShowGold) this.addCommand(CGMZ.Debug.GoldCommand, "gold");
	if(CGMZ.Debug.ShowItems) this.addCommand(CGMZ.Debug.ItemCommand, "items");
	if(CGMZ.Debug.ShowWeapons) this.addCommand(CGMZ.Debug.WeaponCommand, "weapons");
	if(CGMZ.Debug.ShowArmors) this.addCommand(CGMZ.Debug.ArmorCommand, "armors");
	if(CGMZ.Debug.ShowBattleTest) this.addCommand(CGMZ.Debug.BattleTestCommand, "troops");
	if(CGMZ.Debug.ShowCommonEvents) this.addCommand(CGMZ.Debug.CommonEventCommand, "commonEvent");
	if(CGMZ.Debug.ShowSoundTest) this.addCommand(CGMZ.Debug.SoundTestCommand, "soundTest");
	if(CGMZ.Debug.ShowViewCache) this.addCommand(CGMZ.Debug.ViewCacheCommand, "viewCache");
	if(CGMZ.Debug.ShowActors) this.addCommand(CGMZ.Debug.ActorsCommand, "actors");
	if(CGMZ.Debug.ShowWeather) this.addCommand(CGMZ.Debug.WeatherCommand, "weather");
	if(CGMZ.Debug.ShowTintScreen) this.addCommand(CGMZ.Debug.TintCommand, "tint");
	if(CGMZ.Debug.ShowMapTransfer) this.addCommand(CGMZ.Debug.MapTransferCommand, "transfer");
	if(CGMZ.Debug.ShowDevSave) this.addCommand(CGMZ.Debug.DevSaveCommand, "devSave");
	if(CGMZ.Debug.ShowCGMZ) this.addCommand(CGMZ.Debug.CGMZCommand, "cgmz");
};
//-----------------------------------------------------------------------------
// Processing for "OK" button pressed
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_Command.prototype.processOk = function() {
	CGMZ_Debug_Window_Command._lastCommandSymbol = this.currentSymbol();
	Window_Command.prototype.processOk.call(this);
};
//-----------------------------------------------------------------------------
// Select the last item that was selected
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_Command.prototype.selectLast = function() {
	if (CGMZ_Debug_Window_Command._lastCommandSymbol) {
		this.selectSymbol(CGMZ_Debug_Window_Command._lastCommandSymbol);
	} else {
		this.select(0);
	}
};
//=============================================================================
// CGMZ_Window_DebugCommand
//-----------------------------------------------------------------------------
// CGMZ specific Command window for the Debug scene
//=============================================================================
function CGMZ_Window_DebugCommand() {
	this.initialize(...arguments);
}
CGMZ_Window_DebugCommand.prototype = Object.create(Window_HorzCommand.prototype);
CGMZ_Window_DebugCommand.prototype.constructor = CGMZ_Window_DebugCommand;
//-----------------------------------------------------------------------------
// Initialize the command window
//-----------------------------------------------------------------------------
CGMZ_Window_DebugCommand.prototype.initialize = function(rect) {
	Window_Command.prototype.initialize.call(this, rect);
	this._lastCommandSymbol = null;
	this.deactivate();
	this.hide();
};
//-----------------------------------------------------------------------------
// Make the list of commands for the window
//-----------------------------------------------------------------------------
CGMZ_Window_DebugCommand.prototype.makeCommandList = function() {
	if(Imported.CGMZ_Achievements) this.addCommand(CGMZ.Debug.AchievementsCommand, "achievements");
	if(Imported.CGMZ_CurrencySystem) this.addCommand(CGMZ.Debug.CurrencySystemCommand, "currencySystem");
};
//-----------------------------------------------------------------------------
// Processing for "OK" button pressed
//-----------------------------------------------------------------------------
CGMZ_Window_DebugCommand.prototype.processOk = function() {
	this._lastCommandSymbol = this.currentSymbol();
	Window_Command.prototype.processOk.call(this);
};
//-----------------------------------------------------------------------------
// Select the last item that was selected
//-----------------------------------------------------------------------------
CGMZ_Window_DebugCommand.prototype.selectLast = function() {
	if(this._lastCommandSymbol) {
		this.selectSymbol(this._lastCommandSymbol);
	} else {
		this.select(0);
	}
};
//=============================================================================
// CGMZ_Debug_Window_Gold
//-----------------------------------------------------------------------------
// Shows the gold window with controls for increasing / decreasing gold
//=============================================================================
function CGMZ_Debug_Window_Gold() {
	this.initialize(...arguments);
}
CGMZ_Debug_Window_Gold.prototype = Object.create(Window_Selectable.prototype);
CGMZ_Debug_Window_Gold.prototype.constructor = CGMZ_Debug_Window_Gold;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_Gold.prototype.initialize = function(rect) {
	Window_Selectable.prototype.initialize.call(this, rect);
	this._scaler = 1;
	this._goldType = "default";
	this.hide();
	this.deactivate();
	this.refresh();
};
//-----------------------------------------------------------------------------
// Set the currency id (for [CGMZ] Currency System or default)
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_Gold.prototype.setCurrency = function(id) {
	if(!Imported.CGMZ_CurrencySystem) return;
	if(this._goldType === id) return;
	this._goldType = id;
	this.refresh();
};
//-----------------------------------------------------------------------------
// Refresh the window to show updated party gold
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_Gold.prototype.refresh = function() {
	this.contents.clear();
	const rect = this.itemLineRect(0);
	const x = rect.x;
	const y = rect.y;
	const width = rect.width;
	const goldVal = this.getGoldAmount();
	if(Imported.CGMZ_CurrencySystem) {
		const newCurrencyInfo = {};
		newCurrencyInfo.drawFullName = false;
		newCurrencyInfo.drawCustom = true;
		newCurrencyInfo.id = this._goldType;
		$cgmzTemp.setCustomCurrencyInfo(newCurrencyInfo);
	}
	const currencyUnit = this.getCurrencyUnit();
	this.drawCurrencyValue(CGMZ_Utils.numberSplit(goldVal), currencyUnit, x, y, width);
};
//-----------------------------------------------------------------------------
// Get the gold amount for any currency type
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_Gold.prototype.getGoldAmount = function() {
	if(this._goldType === 'default') {
		return $gameParty.gold();
	} else {
		const currency = $cgmz.getCurrency(this._goldType);
		if(currency) return currency._amount;
	}
	return 0;
};
//-----------------------------------------------------------------------------
// Get Currency Unit
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_Gold.prototype.getCurrencyUnit = function() {
	if(this._goldType === 'default') {
		return TextManager.currencyUnit;
	} else {
		const currency = $cgmzTemp.getCurrency(this._goldType);
		if(currency) return currency._unit;
	}
	return TextManager.currencyUnit;
};
//-----------------------------------------------------------------------------
// Update if active
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_Gold.prototype.update = function() {
	Window_Selectable.prototype.update.call(this);
	if(this.active) {
		this.updateGold();
	}
};
//-----------------------------------------------------------------------------
// Update the gold the party has
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_Gold.prototype.updateGold = function() {
	const value = this.getGoldAmount();
	this.gainGold(this.deltaForGold());
	const newValue = this.getGoldAmount();
	if(value !== newValue) {
		this.playCursorSound();
		this.refresh();
	}
};
//-----------------------------------------------------------------------------
// Gain the actual gold
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_Gold.prototype.gainGold = function(amount) {
	if(this._goldType === 'default') {
		$gameParty.gainGold(amount);
	} else {
		const currency = $cgmz.getCurrency(this._goldType);
		if(currency) currency.gainCurrency(amount);
	}
};
//-----------------------------------------------------------------------------
// Get how much to change the gold by. The rate increases the longer the
// button is pressed.
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_Gold.prototype.deltaForGold = function() {
	let rate = 1;
	if(Input.isLongPressed("right") || Input.isLongPressed("left")) {
		this._scaler = this._scaler * 1.01;
		rate = Math.floor(rate * this._scaler);
	} else if(Input.isLongPressed("pageup") || Input.isLongPressed("pagedown")) {
		this._scaler = this._scaler * 1.03;
		rate = Math.floor(rate * this._scaler);
	} else {
		this._scaler = 1;
	}
	if(Input.isRepeated("right")) {
		return 1 * rate;
	} else if (Input.isRepeated("left")) {
		return -1 * rate;
	} else if (Input.isRepeated("pageup")) {
		return 100 * rate;
	} else if (Input.isRepeated("pagedown")) {
		return -100 * rate;
	}
	return 0;
};
//=============================================================================
// CGMZ_Debug_Window_ItemSelect
//-----------------------------------------------------------------------------
// Shows the items, armors, or weapons in the game
//=============================================================================
function CGMZ_Debug_Window_ItemSelect() {
	this.initialize(...arguments);
}
CGMZ_Debug_Window_ItemSelect.prototype = Object.create(Window_Selectable.prototype);
CGMZ_Debug_Window_ItemSelect.prototype.constructor = CGMZ_Debug_Window_ItemSelect;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ItemSelect.prototype.initialize = function(rect) {
	Window_Selectable.prototype.initialize.call(this, rect);
	this._itemType = null;
	this.deselect();
	this.hide();
};
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ItemSelect.prototype.setItemType = function(itemType) {
	this._itemType = itemType;
	this.contents.clear();
	this.contentsBack.clear();
	this.drawAllItems();
};
//-----------------------------------------------------------------------------
// Get the max items based on itemType
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ItemSelect.prototype.maxItems = function() {
	switch(this._itemType) {
		case "item": return $dataItems.length - 1;
		case "armor": return $dataArmors.length - 1;
		case "weapon": return $dataWeapons.length - 1;
		default: 
	}
	return 0;
};
//-----------------------------------------------------------------------------
// Do not move cursor on pageup/pagedown
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ItemSelect.prototype.cursorPagedown = function() {
};
//-----------------------------------------------------------------------------
// Do not move cursor on pageup/pagedown
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ItemSelect.prototype.cursorPageup = function() {
};
//-----------------------------------------------------------------------------
// Get the item object at the specified index
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ItemSelect.prototype.getItemObject = function(index) {
	switch(this._itemType) {
		case "item": return $dataItems[index + 1];
		case "armor": return $dataArmors[index + 1];
		case "weapon": return $dataWeapons[index + 1];
		default: 
	}
	return null;
};
//-----------------------------------------------------------------------------
// Draw the item at the specified index
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ItemSelect.prototype.drawItem = function(index) {
	const item = this.getItemObject(index);
	const itemRect = this.itemRectWithPadding(index);
	const amount = $gameParty.numItems(item);
	const amountText = "x" + amount;
	this.drawItemName(item, itemRect.x, itemRect.y, itemRect.width);
	this.drawText(amountText, itemRect.x, itemRect.y, itemRect.width, "right");
};
//-----------------------------------------------------------------------------
// Update if active
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ItemSelect.prototype.update = function() {
	Window_Selectable.prototype.update.call(this);
	if(this.active) {
		this.updateDebugItems();
	}
};
//-----------------------------------------------------------------------------
// Update the gold the party has
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ItemSelect.prototype.updateDebugItems = function() {
	const changeVal = this.deltaForItem();
	if(changeVal !== 0) {
		const item = this.getItemObject(this.index());
		const currentAmount = $gameParty.numItems(item);
		if((!$gameParty.hasMaxItems(item) &&  changeVal > 0) || 
		   ($gameParty.numItems(item) > 0 && changeVal < 0)) {
			const includeEquip = false;
			$gameParty.gainItem(item, changeVal, includeEquip);
			this.playCursorSound();
			this.redrawCurrentItem();
		}
	}
};
//-----------------------------------------------------------------------------
// Get how much to change the item amount by. Only 99 max items so no need to
// scale.
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ItemSelect.prototype.deltaForItem = function() {
	if(Input.isRepeated("right")) {
		return 1;
	} else if (Input.isRepeated("left")) {
		return -1;
	} else if (Input.isRepeated("pageup")) {
		return 10;
	} else if (Input.isRepeated("pagedown")) {
		return -10;
	}
	return 0;
};
//=============================================================================
// CGMZ_Debug_Window_TroopSelect
//-----------------------------------------------------------------------------
// Shows the troops available in the game
//=============================================================================
function CGMZ_Debug_Window_TroopSelect() {
	this.initialize(...arguments);
}
CGMZ_Debug_Window_TroopSelect.prototype = Object.create(Window_Selectable.prototype);
CGMZ_Debug_Window_TroopSelect.prototype.constructor = CGMZ_Debug_Window_TroopSelect;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_TroopSelect.prototype.initialize = function(rect) {
	Window_Selectable.prototype.initialize.call(this, rect);
	this.refresh();
	this.deselect();
	this.hide();
};
//-----------------------------------------------------------------------------
// Get the max items based on itemType
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_TroopSelect.prototype.maxItems = function() {
	return $dataTroops.length - 1;
};
//-----------------------------------------------------------------------------
// Draw the item at the specified index
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_TroopSelect.prototype.drawItem = function(index) {
	const troop = $dataTroops[index + 1];
	const itemRect = this.itemRectWithPadding(index);
	this.CGMZ_drawTextLine(troop.name, itemRect.x, itemRect.y, itemRect.width, "left");
};
//=============================================================================
// CGMZ_Debug_Window_CommonEventSelect
//-----------------------------------------------------------------------------
// Shows the common events in the game
//=============================================================================
function CGMZ_Debug_Window_CommonEventSelect() {
	this.initialize(...arguments);
}
CGMZ_Debug_Window_CommonEventSelect.prototype = Object.create(Window_Selectable.prototype);
CGMZ_Debug_Window_CommonEventSelect.prototype.constructor = CGMZ_Debug_Window_CommonEventSelect;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_CommonEventSelect.prototype.initialize = function(rect) {
	Window_Selectable.prototype.initialize.call(this, rect);
	this.refresh();
	this.deselect();
	this.hide();
};
//-----------------------------------------------------------------------------
// Get the max items
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_CommonEventSelect.prototype.maxItems = function() {
	return $dataCommonEvents.length - 1;
};
//-----------------------------------------------------------------------------
// Draw the item at the specified index
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_CommonEventSelect.prototype.drawItem = function(index) {
	const event = $dataCommonEvents[index + 1];
	const itemRect = this.itemRectWithPadding(index);
	this.CGMZ_drawTextLine(event.name, itemRect.x, itemRect.y, itemRect.width, "left");
};
//=============================================================================
// CGMZ_Debug_Window_SoundTestCommand
//-----------------------------------------------------------------------------
// Command window for sound test commands
//=============================================================================
function CGMZ_Debug_Window_SoundTestCommand() {
	this.initialize(...arguments);
}
CGMZ_Debug_Window_SoundTestCommand.prototype = Object.create(Window_Command.prototype);
CGMZ_Debug_Window_SoundTestCommand.prototype.constructor = CGMZ_Debug_Window_SoundTestCommand;
//-----------------------------------------------------------------------------
// Initialize the command window
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_SoundTestCommand.prototype.initialize = function(rect) {
	Window_Command.prototype.initialize.call(this, rect);
	this.hide();
	this.deactivate();
};
//-----------------------------------------------------------------------------
// Make the list of commands for the window
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_SoundTestCommand.prototype.makeCommandList = function() {
	this.addCommand("BGM", "bgm");
	this.addCommand("BGS", "bgs");
	this.addCommand("ME", "me");
	this.addCommand("SE", "se");
	this.addCommand(CGMZ.Debug.SoundTestSettingsCommand, "settings");
};
//=============================================================================
// CGMZ_Debug_Window_SoundTestSelect
//-----------------------------------------------------------------------------
// Shows the sounds available to select
//=============================================================================
function CGMZ_Debug_Window_SoundTestSelect() {
	this.initialize(...arguments);
}
CGMZ_Debug_Window_SoundTestSelect.prototype = Object.create(Window_Selectable.prototype);
CGMZ_Debug_Window_SoundTestSelect.prototype.constructor = CGMZ_Debug_Window_SoundTestSelect;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_SoundTestSelect.prototype.initialize = function(rect) {
	Window_Selectable.prototype.initialize.call(this, rect);
	this._type = null;
	this.refresh();
	this.deselect();
	this.hide();
};
//-----------------------------------------------------------------------------
// Max items
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_SoundTestSelect.prototype.maxItems = function() {
	return this._data ? this._data.length : 1;
};
//-----------------------------------------------------------------------------
// Current item
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_SoundTestSelect.prototype.item = function() {
	return this._data[this.index()];
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_SoundTestSelect.prototype.setType = function(type) {
	this._type = type;
	this.refresh();
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_SoundTestSelect.prototype.refresh = function() {
	if(!this._type) return;
	this.makeItemList();
	Window_Selectable.prototype.refresh.call(this);
};
//-----------------------------------------------------------------------------
// Synchronously create an array of all files in a given directory
// TODO: Make this support subdirectories
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_SoundTestSelect.prototype.makeItemList = function() {
	const fs = require('fs');
	const folderPath = CGMZ_Utils.fileDirectoryPath("audio/" + this._type);
	const files = [];
	const filenames = fs.readdirSync(folderPath);
	filenames.forEach(function(file) {
		files.push(file);
	});
	this._data = files;
};
//-----------------------------------------------------------------------------
// Draw the item at the specified index
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_SoundTestSelect.prototype.drawItem = function(index) {
	const filename = this._data[index];
	const itemRect = this.itemRectWithPadding(index);
	this.CGMZ_drawTextLine(filename, itemRect.x, itemRect.y, itemRect.width, "left");
};
//=============================================================================
// CGMZ_Debug_Window_SoundTestSettings
//-----------------------------------------------------------------------------
// Manipulate sound test settings
//=============================================================================
function CGMZ_Debug_Window_SoundTestSettings() {
	this.initialize(...arguments);
}
CGMZ_Debug_Window_SoundTestSettings.prototype = Object.create(Window_Selectable.prototype);
CGMZ_Debug_Window_SoundTestSettings.prototype.constructor = CGMZ_Debug_Window_SoundTestSettings;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_SoundTestSettings.prototype.initialize = function(rect) {
	Window_Selectable.prototype.initialize.call(this, rect);
	this._volume = 90;
	this._pan = 0;
	this._pitch = 100;
	this.refresh();
	this.deselect();
	this.hide();
};
//-----------------------------------------------------------------------------
// Max items
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_SoundTestSettings.prototype.maxItems = function() {
	return 3;
};
//-----------------------------------------------------------------------------
// Volume
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_SoundTestSettings.prototype.volume = function() {
	return this._volume;
};
//-----------------------------------------------------------------------------
// Pan
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_SoundTestSettings.prototype.pan = function() {
	return this._pan;
};
//-----------------------------------------------------------------------------
// Pitch
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_SoundTestSettings.prototype.pitch = function() {
	return this._pitch;
};
//-----------------------------------------------------------------------------
// Draw the item at the specified index
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_SoundTestSettings.prototype.drawItem = function(index) {
	const strings = [CGMZ.Debug.SoundTestSettingsVolume, CGMZ.Debug.SoundTestSettingsPan, CGMZ.Debug.SoundTestSettingsPitch];
	const descriptor = strings[index];
	const value = this.itemValue(index);
	const itemRect = this.itemRectWithPadding(index);
	this.CGMZ_drawTextLine(descriptor, itemRect.x, itemRect.y, itemRect.width, "left");
	this.CGMZ_drawTextLine(String(value), itemRect.x, itemRect.y, itemRect.width, "right");
};
//-----------------------------------------------------------------------------
// Update if active
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_SoundTestSettings.prototype.update = function() {
	Window_Selectable.prototype.update.call(this);
	if(this.active) {
		this.updateSettings();
	}
};
//-----------------------------------------------------------------------------
// Current item value
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_SoundTestSettings.prototype.itemValue = function(index) {
	switch(index) {
		case 0: return this.volume();
		case 1: return this.pan();
		case 2: return this.pitch();
	}
	return 0;
};
//-----------------------------------------------------------------------------
// Set item value
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_SoundTestSettings.prototype.setValue = function(index, addValue) {
	switch(index) {
		case 0: this._volume = (this._volume + addValue).clamp(0, 100); break;
		case 1: this._pan = (this._pan + addValue).clamp(-100, 100); break;
		case 2: this._pitch = (this._pitch + addValue).clamp(50, 150);
	}
};
//-----------------------------------------------------------------------------
// Update the sound settings
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_SoundTestSettings.prototype.updateSettings = function() {
	const index = this.index();
	const value = this.itemValue(index);
	this.setValue(index, this.deltaForValue())
	const newValue = this.itemValue(index);
	if (value !== newValue) {
		this.playCursorSound();
		this.refresh();
	}
};
//-----------------------------------------------------------------------------
// Get how much to change the setting by.
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_SoundTestSettings.prototype.deltaForValue = function() {
	if(Input.isRepeated("right")) {
		return 1;
	} else if(Input.isRepeated("left")) {
		return -1;
	} else if(Input.isRepeated("pageup")) {
		return 10;
	} else if(Input.isRepeated("pagedown")) {
		return -10;
	}
	return 0;
};
//=============================================================================
// CGMZ_Debug_Window_ViewCacheSelect
//-----------------------------------------------------------------------------
// Command window for view cache
//=============================================================================
function CGMZ_Debug_Window_ViewCacheSelect() {
	this.initialize(...arguments);
}
CGMZ_Debug_Window_ViewCacheSelect.prototype = Object.create(Window_Command.prototype);
CGMZ_Debug_Window_ViewCacheSelect.prototype.constructor = CGMZ_Debug_Window_ViewCacheSelect;
//-----------------------------------------------------------------------------
// Initialize the command window
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ViewCacheSelect.prototype.initialize = function(rect) {
	Window_Command.prototype.initialize.call(this, rect);
	this.hide();
	this.deactivate();
};
//-----------------------------------------------------------------------------
// Make the list of commands for the window
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ViewCacheSelect.prototype.makeCommandList = function() {
	this.addCommand(CGMZ.Debug.ImageCacheCommand, "img");
	this.addCommand(CGMZ.Debug.FontCacheCommand, "font");
};
//=============================================================================
// CGMZ_Debug_Window_ViewCache
//-----------------------------------------------------------------------------
// Shows what is in the cache
//=============================================================================
function CGMZ_Debug_Window_ViewCache() {
	this.initialize(...arguments);
}
CGMZ_Debug_Window_ViewCache.prototype = Object.create(Window_Selectable.prototype);
CGMZ_Debug_Window_ViewCache.prototype.constructor = CGMZ_Debug_Window_ViewCache;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ViewCache.prototype.initialize = function(rect) {
	Window_Selectable.prototype.initialize.call(this, rect);
	this._type = null;
	this.refresh();
	this.deselect();
	this.hide();
};
//-----------------------------------------------------------------------------
// Max items
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ViewCache.prototype.maxItems = function() {
	return this._data ? this._data.length : 1;
};
//-----------------------------------------------------------------------------
// Current item
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ViewCache.prototype.item = function() {
	return this._data[this.index()];
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ViewCache.prototype.setType = function(type) {
	this._type = type;
	this.refresh();
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ViewCache.prototype.refresh = function() {
	if(!this._type) return;
	this.makeItemList();
	Window_Selectable.prototype.refresh.call(this);
	this.select(0);
};
//-----------------------------------------------------------------------------
// Create a list of items in the proper cache
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ViewCache.prototype.makeItemList = function() {
	const urls = [];
	switch(this._type) {
		case "font":
			for(const family in FontManager._states) {
				const state = FontManager._states[family];
				urls.push({url: family, state: state});
			}
			break;
		case "img":
			for (const cache of [ImageManager._cache, ImageManager._system]) {
				for (const url in cache) {
					const bitmap = cache[url];
					const state = bitmap._loadingState;
					urls.push({url: url, state: state});
				}
			}
	}
	this._data = urls;
};
//-----------------------------------------------------------------------------
// Draw the item at the specified index
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ViewCache.prototype.drawItem = function(index) {
	const item = this._data[index];
	const itemRect = this.itemRectWithPadding(index);
	const color = 2 + 1*(item.state === "loaded");
	this.CGMZ_drawTextLine('\\c[' + color + ']' + item.url + '\\c[0]', itemRect.x, itemRect.y, itemRect.width, "left");
};
//=============================================================================
// CGMZ_Debug_Window_ActorSelect
//-----------------------------------------------------------------------------
// Shows the actors of the game
//=============================================================================
function CGMZ_Debug_Window_ActorSelect() {
	this.initialize(...arguments);
}
CGMZ_Debug_Window_ActorSelect.prototype = Object.create(Window_Selectable.prototype);
CGMZ_Debug_Window_ActorSelect.prototype.constructor = CGMZ_Debug_Window_ActorSelect;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ActorSelect.prototype.initialize = function(rect) {
	Window_Selectable.prototype.initialize.call(this, rect);
	this.refresh();
	this.deselect();
	this.hide();
};
//-----------------------------------------------------------------------------
// Get the max items
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ActorSelect.prototype.maxItems = function() {
	return $dataActors.length - 1;
};
//-----------------------------------------------------------------------------
// Draw the item at the specified index
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ActorSelect.prototype.drawItem = function(index) {
	const actor = $dataActors[index + 1];
	const itemRect = this.itemRectWithPadding(index);
	this.CGMZ_drawTextLine(actor.name, itemRect.x, itemRect.y, itemRect.width, "left");
};
//=============================================================================
// CGMZ_Debug_Window_ActorName
//-----------------------------------------------------------------------------
// Shows the currently selected actor's name
//=============================================================================
function CGMZ_Debug_Window_ActorName() {
	this.initialize(...arguments);
}
CGMZ_Debug_Window_ActorName.prototype = Object.create(Window_Base.prototype);
CGMZ_Debug_Window_ActorName.prototype.constructor = CGMZ_Debug_Window_ActorName;
//-----------------------------------------------------------------------------
// Set the actor name
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ActorName.prototype.setName = function(name) {
	this._name = name;
	this.refresh();
};
//-----------------------------------------------------------------------------
// Draw the actor name
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ActorName.prototype.refresh = function() {
	this.contents.clear();
	this.CGMZ_drawTextLine(this._name, 0, 0, this.contents.width, 'center');
};
//=============================================================================
// CGMZ_Debug_Window_ActorManipulate
//-----------------------------------------------------------------------------
// Shows the options to manipulate the currently selected actor
//=============================================================================
function CGMZ_Debug_Window_ActorManipulate() {
	this.initialize(...arguments);
}
CGMZ_Debug_Window_ActorManipulate.prototype = Object.create(Window_Selectable.prototype);
CGMZ_Debug_Window_ActorManipulate.prototype.constructor = CGMZ_Debug_Window_ActorManipulate;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ActorManipulate.prototype.initialize = function(rect) {
	Window_Selectable.prototype.initialize.call(this, rect);
	this.deselect();
	this.hide();
	this._actor = null;
};
//-----------------------------------------------------------------------------
// Get the max items
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ActorManipulate.prototype.maxItems = function() {
	return 5;
};
//-----------------------------------------------------------------------------
// Set the actor
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ActorManipulate.prototype.setActor = function(id) {
	this._actor = $gameActors.actor(id);
	this.refresh();
};
//-----------------------------------------------------------------------------
// Draw the item at the specified index
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ActorManipulate.prototype.drawItem = function(index) {
	if(!this._actor) return;
	const itemRect = this.itemRectWithPadding(index);
	switch(index) {
		case 0:
			const addRemoveText = $gameParty.members().includes(this._actor) ? CGMZ.Debug.RemoveFromParty : CGMZ.Debug.AddToParty;
			this.CGMZ_drawTextLine(addRemoveText, itemRect.x, itemRect.y, itemRect.width, "left");
			break;
		case 1: this.CGMZ_drawTextLine(CGMZ.Debug.CurrentLevel + " " + this._actor.level + " (left/right to edit)", itemRect.x, itemRect.y, itemRect.width, "left"); break;
		case 2: this.CGMZ_drawTextLine(CGMZ.Debug.ChangeSkills, itemRect.x, itemRect.y, itemRect.width, "left"); break;
		case 3: this.CGMZ_drawTextLine(CGMZ.Debug.RecoverAll, itemRect.x, itemRect.y, itemRect.width, "left"); break;
		case 4: this.CGMZ_drawTextLine(CGMZ.Debug.InitializeActor, itemRect.x, itemRect.y, itemRect.width, "left"); break;
	}
};
//-----------------------------------------------------------------------------
// Update if active
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ActorManipulate.prototype.update = function() {
	Window_Selectable.prototype.update.call(this);
	if(this.active && this.index() === 1) {
		this.updateSettings();
	}
};
//-----------------------------------------------------------------------------
// Update the actor level if needed
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ActorManipulate.prototype.updateSettings = function() {
	const changeAmount = this.deltaForValue();
	if (changeAmount) {
		this.playCursorSound();
		const level = this._actor.level;
		this._actor.changeLevel(level + changeAmount, false);
		this.refresh();
	}
};
//-----------------------------------------------------------------------------
// Get how much to change the setting by.
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ActorManipulate.prototype.deltaForValue = function() {
	if(Input.isRepeated("right")) {
		return 1;
	} else if(Input.isRepeated("left")) {
		return -1;
	} else if(Input.isRepeated("pageup")) {
		return 10;
	} else if(Input.isRepeated("pagedown")) {
		return -10;
	}
	return 0;
};
//=============================================================================
// CGMZ_Debug_Window_ActorSkill
//-----------------------------------------------------------------------------
// Shows the actors' skills of the game
//=============================================================================
function CGMZ_Debug_Window_ActorSkill() {
	this.initialize(...arguments);
}
CGMZ_Debug_Window_ActorSkill.prototype = Object.create(Window_Selectable.prototype);
CGMZ_Debug_Window_ActorSkill.prototype.constructor = CGMZ_Debug_Window_ActorSkill;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ActorSkill.prototype.initialize = function(rect) {
	Window_Selectable.prototype.initialize.call(this, rect);
	this._actor = null;
	this.deselect();
	this.hide();
};
//-----------------------------------------------------------------------------
// Get the max items
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ActorSkill.prototype.setActor = function(actor) {
	this._actor = actor;
	this.refresh();
};
//-----------------------------------------------------------------------------
// Get the max items
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ActorSkill.prototype.maxItems = function() {
	return $dataSkills.length - 1;
};
//-----------------------------------------------------------------------------
// Draw the item at the specified index
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_ActorSkill.prototype.drawItem = function(index) {
	const skillId = index + 1;
	const color = (this._actor) ? (this._actor.isLearnedSkill(skillId) ? 3 : 2) : 0;
	const skill = $dataSkills[skillId];
	const itemRect = this.itemRectWithPadding(index);
	this.CGMZ_drawTextLine('\\c[' + color + ']' + skill.name + '\\c[0]', itemRect.x, itemRect.y, itemRect.width, "left");
};
//=============================================================================
// CGMZ_Debug_Window_WeatherSelect
//-----------------------------------------------------------------------------
// Weather debug window for changing the weather type and power
//=============================================================================
function CGMZ_Debug_Window_WeatherSelect() {
	this.initialize(...arguments);
}
CGMZ_Debug_Window_WeatherSelect.prototype = Object.create(Window_Selectable.prototype);
CGMZ_Debug_Window_WeatherSelect.prototype.constructor = CGMZ_Debug_Window_WeatherSelect;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_WeatherSelect.prototype.initialize = function(rect) {
	Window_Selectable.prototype.initialize.call(this, rect);
	this.deselect();
	this.hide();
	this._power = ($gameScreen._weatherPower).clamp(1, 9);
	const types = ["none", "rain", "storm", "snow"];
	this._type = types.indexOf($gameScreen._weatherType) || 0;
	this.refresh();
};
//-----------------------------------------------------------------------------
// Get the desired weather settings from window
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_WeatherSelect.prototype.getWeather = function() {
	const types = ["none", "rain", "storm", "snow"];
	return {type: types[this._type], power: this._power, duration: 0};
};
//-----------------------------------------------------------------------------
// Get the max items
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_WeatherSelect.prototype.maxItems = function() {
	return 2;
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_WeatherSelect.prototype.refresh = function() {
	Window_Selectable.prototype.refresh.call(this);
	const helpRect = this.itemRectWithPadding(2);
	this.drawText(CGMZ.Debug.WeatherHelp, helpRect.x, helpRect.y, helpRect.width, 'center');
};
//-----------------------------------------------------------------------------
// Draw the item at the specified index
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_WeatherSelect.prototype.drawItem = function(index) {
	const itemRect = this.itemRectWithPadding(index);
	const weatherTypes = [CGMZ.Debug.WeatherTypeNone, CGMZ.Debug.WeatherTypeRain, CGMZ.Debug.WeatherTypeStorm, CGMZ.Debug.WeatherTypeSnow];
	if(index === 0) {
		this.drawText(CGMZ.Debug.WeatherType, itemRect.x, itemRect.y, itemRect.width, 'left');
		this.drawText(weatherTypes[this._type], itemRect.x + itemRect.width/2, itemRect.y, itemRect.width/2, 'center');
	} else {
		this.drawText(CGMZ.Debug.WeatherPower, itemRect.x, itemRect.y, itemRect.width, 'left');
		this.drawText(this._power, itemRect.x + itemRect.width/2, itemRect.y, itemRect.width/2, 'center');
	}
};
//-----------------------------------------------------------------------------
// Handling for cursor right
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_WeatherSelect.prototype.cursorRight = function() {
	const index = this.index();
	if (index === 0) {
		this._type = (this._type + 1).clamp(0,3);
	} else {
		this._power= (this._power + 1).clamp(1,9);
	}
	this.playCursorSound();
	this.refresh();
};
//-----------------------------------------------------------------------------
// Handling for cursor left
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_WeatherSelect.prototype.cursorLeft = function() {
	const index = this.index();
	if (index === 0) {
		this._type = (this._type - 1).clamp(0,3);
	} else {
		this._power= (this._power - 1).clamp(1,9);
	}
	this.playCursorSound();
	this.refresh();
};
//=============================================================================
// CGMZ_Debug_Window_TintSelect
//-----------------------------------------------------------------------------
// Tint debug window for changing the screen tint
//=============================================================================
function CGMZ_Debug_Window_TintSelect() {
	this.initialize(...arguments);
}
CGMZ_Debug_Window_TintSelect.prototype = Object.create(Window_Selectable.prototype);
CGMZ_Debug_Window_TintSelect.prototype.constructor = CGMZ_Debug_Window_TintSelect;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_TintSelect.prototype.initialize = function(rect) {
	Window_Selectable.prototype.initialize.call(this, rect);
	this.deselect();
	this.hide();
	this._tone = $gameScreen._tone.clone();
	this._scaler = 1;
	this.refresh();
};
//-----------------------------------------------------------------------------
// Get the tone
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_TintSelect.prototype.getTone = function() {
	return {tone: this._tone, duration: 0};
};
//-----------------------------------------------------------------------------
// Get the max items
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_TintSelect.prototype.maxItems = function() {
	return 4;
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_TintSelect.prototype.refresh = function() {
	Window_Selectable.prototype.refresh.call(this);
	const helpRect = this.itemRectWithPadding(4);
	this.drawText(CGMZ.Debug.TintHelp, helpRect.x, helpRect.y, helpRect.width, 'center');
};
//-----------------------------------------------------------------------------
// Draw the item at the specified index
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_TintSelect.prototype.drawItem = function(index) {
	const itemRect = this.itemRectWithPadding(index);
	switch(index) {
		case 0:
			this.drawText(CGMZ.Debug.TintRed, itemRect.x, itemRect.y, itemRect.width, 'left');
			break;
		case 1:
			this.drawText(CGMZ.Debug.TintGreen, itemRect.x, itemRect.y, itemRect.width, 'left');
			break;
		case 2:
			this.drawText(CGMZ.Debug.TintBlue, itemRect.x, itemRect.y, itemRect.width, 'left');
			break;
		case 3:
			this.drawText(CGMZ.Debug.TintGray, itemRect.x, itemRect.y, itemRect.width, 'left');
	}
	this.drawText(this._tone[index], itemRect.x + itemRect.width/2, itemRect.y, itemRect.width/2, 'center');
};
//-----------------------------------------------------------------------------
// Handling for cursor right
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_TintSelect.prototype.cursorRight = function() {
	const index = this.index();
	switch(index) {
		case 0:
		case 1:
		case 2:
			this._tone[index] = (this._tone[index] + this.deltaForTone()).clamp(-255, 255);
			break;
		case 3:
			this._tone[index] = (this._tone[index] + this.deltaForTone()).clamp(0, 255);
	}
	this.playCursorSound();
	this.refresh();
};
//-----------------------------------------------------------------------------
// Handling for cursor left
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_TintSelect.prototype.cursorLeft = function() {
	this.cursorRight();
};
//-----------------------------------------------------------------------------
// Get amonut to change tone by
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_TintSelect.prototype.deltaForTone = function() {
	let rate = 1;
	if(Input.isLongPressed("right") || Input.isLongPressed("left")) {
		this._scaler = this._scaler * 1.1;
		rate = Math.floor(rate * this._scaler);
	} else {
		this._scaler = 1;
	}
	if(Input.isRepeated("right")) {
		return 1 * rate;
	} else if (Input.isRepeated("left")) {
		return -1 * rate;
	}
	return 0;
};
//=============================================================================
// CGMZ_Debug_Window_MapSelect
//-----------------------------------------------------------------------------
// Map Transfer debug window for selecting a map
//=============================================================================
function CGMZ_Debug_Window_MapSelect() {
	this.initialize(...arguments);
}
CGMZ_Debug_Window_MapSelect.prototype = Object.create(Window_Selectable.prototype);
CGMZ_Debug_Window_MapSelect.prototype.constructor = CGMZ_Debug_Window_MapSelect;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_MapSelect.prototype.initialize = function(rect) {
	Window_Selectable.prototype.initialize.call(this, rect);
	this.deselect();
	this.hide();
	this.refresh();
};
//-----------------------------------------------------------------------------
// Get the selected map's id
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_MapSelect.prototype.mapId = function() {
	return this.item().id;
};
//-----------------------------------------------------------------------------
// Max items
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_MapSelect.prototype.maxItems = function() {
	return this._data ? this._data.length : 1;
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_MapSelect.prototype.item = function() {
	return this._data[this.index()];
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_MapSelect.prototype.refresh = function() {
	this.makeItemList();
	Window_Selectable.prototype.refresh.call(this);
};
//-----------------------------------------------------------------------------
// Make list of items
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_MapSelect.prototype.makeItemList = function() {
	this._data = [];
	for(const mapInfo of $dataMapInfos) {
		if(!mapInfo) continue;
		const object = {id: mapInfo.id, name: mapInfo.name};
		this._data.push(object);
	}
};
//-----------------------------------------------------------------------------
// Draw the item at the specified index
//-----------------------------------------------------------------------------
CGMZ_Debug_Window_MapSelect.prototype.drawItem = function(index) {
	const itemRect = this.itemRectWithPadding(index);
	const mapName = this._data[index].name;
	this.drawText(mapName, itemRect.x, itemRect.y, itemRect.width, 'center');
};
//=============================================================================
// CGMZ_Window_DebugDevSaveSelect
//-----------------------------------------------------------------------------
// Shows dev save files
//=============================================================================
function CGMZ_Window_DebugDevSaveSelect() {
	this.initialize(...arguments);
}
CGMZ_Window_DebugDevSaveSelect.prototype = Object.create(Window_Selectable.prototype);
CGMZ_Window_DebugDevSaveSelect.prototype.constructor = CGMZ_Window_DebugDevSaveSelect;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Window_DebugDevSaveSelect.prototype.initialize = function(rect) {
	Window_Selectable.prototype.initialize.call(this, rect);
	this.refresh();
	this.select(0);
	this.deactivate();
	this.hide();
};
//-----------------------------------------------------------------------------
// Max items
//-----------------------------------------------------------------------------
CGMZ_Window_DebugDevSaveSelect.prototype.maxItems = function() {
	return this._data ? this._data.length : 1;
};
//-----------------------------------------------------------------------------
// Current item
//-----------------------------------------------------------------------------
CGMZ_Window_DebugDevSaveSelect.prototype.item = function() {
	return this._data[this.index()];
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Window_DebugDevSaveSelect.prototype.refresh = function() {
	this.makeItemList();
	Window_Selectable.prototype.refresh.call(this);
};
//-----------------------------------------------------------------------------
// Create a list of items in the proper cache
//-----------------------------------------------------------------------------
CGMZ_Window_DebugDevSaveSelect.prototype.makeItemList = function() {
	const fs = require('fs');
	const path = require('path');
	const folderName = 'save/dev/';
	const basePath = CGMZ_Utils.fileDirectoryPath(folderName);
	const files = [];
	function recursiveReadDirectory(dir) {
		fs.readdirSync(dir).forEach(file => {
			const filePath = path.join(dir, file);
			if(fs.statSync(filePath).isDirectory()) return recursiveReadDirectory(filePath);
			return files.push(file.replace('.rmmzsave', ''));
		});
	}
	recursiveReadDirectory(basePath);
	this._data = files;
};
//-----------------------------------------------------------------------------
// Draw the item
//-----------------------------------------------------------------------------
CGMZ_Window_DebugDevSaveSelect.prototype.drawItem = function(index) {
	const item = this._data[index];
	const itemRect = this.itemRectWithPadding(index);
	this.CGMZ_drawTextLine(item, itemRect.x, itemRect.y, itemRect.width, "left");
};
//=============================================================================
// CGMZ_Window_AchievementDebug
//-----------------------------------------------------------------------------
// Window for selecting an achievement in the debug screen
//=============================================================================
function CGMZ_Window_AchievementDebug() {
	this.initialize(...arguments);
}
CGMZ_Window_AchievementDebug.prototype = Object.create(Window_Selectable.prototype);
CGMZ_Window_AchievementDebug.prototype.constructor = CGMZ_Window_AchievementDebug;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Window_AchievementDebug.prototype.initialize = function(rect) {
	Window_Selectable.prototype.initialize.call(this, rect);
	this.select(0);
	this.deactivate();
	this.hide();
	this.refresh();
};
//-----------------------------------------------------------------------------
// Set column count
//-----------------------------------------------------------------------------
CGMZ_Window_AchievementDebug.prototype.maxCols = function() {
	return 2;
};
//-----------------------------------------------------------------------------
// Max items
//-----------------------------------------------------------------------------
CGMZ_Window_AchievementDebug.prototype.maxItems = function() {
	return this._data ? this._data.length : 1;
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Window_AchievementDebug.prototype.item = function() {
	return this._data[this.index()];
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Window_AchievementDebug.prototype.refresh = function() {
	this.makeItemList();
	Window_Selectable.prototype.refresh.call(this);
};
//-----------------------------------------------------------------------------
// Make list of items
//-----------------------------------------------------------------------------
CGMZ_Window_AchievementDebug.prototype.makeItemList = function() {
	this._data = (Imported.CGMZ_Achievements) ? $cgmz.getAchievements() : [];
};
//-----------------------------------------------------------------------------
// Draw the item at the specified index
//-----------------------------------------------------------------------------
CGMZ_Window_AchievementDebug.prototype.drawItem = function(index) {
	const itemRect = this.itemRectWithPadding(index);
	const achievement = this._data[index];
	let color = 0;
	if(achievement._failed) color = 2;
	if(achievement.isEarned()) color = 3;
	this.CGMZ_drawTextLine(`\\c[${color}]${achievement._name}\\c[0]`, itemRect.x, itemRect.y, itemRect.width, 'center');
};
//=============================================================================
// CGMZ_Window_AchievementDebugCommand
//-----------------------------------------------------------------------------
// CGMZ specific Command window for the Debug scene
//=============================================================================
function CGMZ_Window_AchievementDebugCommand() {
	this.initialize(...arguments);
}
CGMZ_Window_AchievementDebugCommand.prototype = Object.create(Window_Command.prototype);
CGMZ_Window_AchievementDebugCommand.prototype.constructor = CGMZ_Window_AchievementDebugCommand;
//-----------------------------------------------------------------------------
// Initialize the command window
//-----------------------------------------------------------------------------
CGMZ_Window_AchievementDebugCommand.prototype.initialize = function(rect) {
	Window_Command.prototype.initialize.call(this, rect);
	this.select(0);
	this.deactivate();
	this.hide();
};
//-----------------------------------------------------------------------------
// Make the list of commands for the window
//-----------------------------------------------------------------------------
CGMZ_Window_AchievementDebugCommand.prototype.makeCommandList = function() {
	this.addCommand(CGMZ.Debug.AchievementsEarnCommand, "toggleEarn");
	this.addCommand(CGMZ.Debug.AchievementsFailCommand, "toggleFail");
};
//=============================================================================
// CGMZ_Window_CurrencySystemDebug
//-----------------------------------------------------------------------------
// Window for selecting a currency system currency in the debug screen
//=============================================================================
function CGMZ_Window_CurrencySystemDebug() {
	this.initialize(...arguments);
}
CGMZ_Window_CurrencySystemDebug.prototype = Object.create(Window_Selectable.prototype);
CGMZ_Window_CurrencySystemDebug.prototype.constructor = CGMZ_Window_CurrencySystemDebug;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Window_CurrencySystemDebug.prototype.initialize = function(rect) {
	Window_Selectable.prototype.initialize.call(this, rect);
	this.select(0);
	this.deactivate();
	this.hide();
	this.refresh();
};
//-----------------------------------------------------------------------------
// Max items
//-----------------------------------------------------------------------------
CGMZ_Window_CurrencySystemDebug.prototype.maxItems = function() {
	return this._data ? this._data.length : 1;
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Window_CurrencySystemDebug.prototype.item = function() {
	return this._data[this.index()];
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Window_CurrencySystemDebug.prototype.refresh = function() {
	this.makeItemList();
	Window_Selectable.prototype.refresh.call(this);
};
//-----------------------------------------------------------------------------
// Make list of items
//-----------------------------------------------------------------------------
CGMZ_Window_CurrencySystemDebug.prototype.makeItemList = function() {
	this._data = (Imported.CGMZ_CurrencySystem) ? Object.keys($cgmz._currencies) : [];
};
//-----------------------------------------------------------------------------
// Draw the item at the specified index
//-----------------------------------------------------------------------------
CGMZ_Window_CurrencySystemDebug.prototype.drawItem = function(index) {
	const rect = this.itemRectWithPadding(index);
	const id = this._data[index];
	const currency = $cgmz.getCurrency(id);
	const currencyTemp = $cgmzTemp.getCurrency(id);
	const string = `\\i[${currencyTemp?._iconIndex}]\\c[${currencyTemp?._color}]${currencyTemp?._name}\\c[0] (${CGMZ_Utils.numberSplit(currency._amount)})`;
	this.CGMZ_drawTextLine(string, rect.x, rect.y, rect.width, 'center');
};
//=============================================================================
// Tilemap
//-----------------------------------------------------------------------------
// Add overlay for things like region, terrain tag, etc.
//=============================================================================
//-----------------------------------------------------------------------------
// Fill color
//-----------------------------------------------------------------------------
Tilemap.CGMZ_DEBUG_OVERLAYCOLORS = [
	'rgba(180, 104, 104, 0.5)',
	'rgba(180, 142, 104, 0.5)',
	'rgba(180, 180, 104, 0.5)',
	'rgba(142, 180, 104, 0.5)',
	'rgba(104, 180, 104, 0.5)',
	'rgba(104, 180, 142, 0.5)',
	'rgba(104, 180, 180, 0.5)',
	'rgba(104, 142, 180, 0.5)',
	'rgba(104, 104, 180, 0.5)',
	'rgba(142, 104, 180, 0.5)',
	'rgba(180, 104, 180, 0.5)',
	'rgba(180, 104, 142, 0.5)'
];
//-----------------------------------------------------------------------------
// Stroke color
//-----------------------------------------------------------------------------
Tilemap.CGMZ_DEBUG_OVERLAYSTROKECOLORS = [
	'rgba(180, 104, 104, 0.25)',
	'rgba(180, 142, 104, 0.25)',
	'rgba(180, 180, 104, 0.25)',
	'rgba(142, 180, 104, 0.25)',
	'rgba(104, 180, 104, 0.25)',
	'rgba(104, 180, 142, 0.25)',
	'rgba(104, 180, 180, 0.25)',
	'rgba(104, 142, 180, 0.25)',
	'rgba(104, 104, 180, 0.25)',
	'rgba(142, 104, 180, 0.25)',
	'rgba(180, 104, 180, 0.25)',
	'rgba(180, 104, 142, 0.25)'
];
//-----------------------------------------------------------------------------
// Also update the overlay sprite position
//-----------------------------------------------------------------------------
const alias_CGMZDebug_Tilemap_updateTransform = Tilemap.prototype.updateTransform;
Tilemap.prototype.updateTransform = function() {
	const ox = Math.ceil(this.origin.x);
	const oy = Math.ceil(this.origin.y);
	const startX = Math.floor((ox - this._margin) / this.tileWidth);
	const startY = Math.floor((oy - this._margin) / this.tileHeight);
	this._cgmz_debugOverlay.x = startX * this.tileWidth - ox;
	this._cgmz_debugOverlay.y = startY * this.tileHeight - oy;
	alias_CGMZDebug_Tilemap_updateTransform.call(this);
};
//-----------------------------------------------------------------------------
// Create the overlay sprite
//-----------------------------------------------------------------------------
const alias_CGMZDebug_Tilemap_createLayers = Tilemap.prototype._createLayers;
Tilemap.prototype._createLayers = function() {
	this._cgmz_debugOverlay = new Sprite(new Bitmap(this.width + this.tileWidth * 2, this.height + this.tileHeight * 2));
	this._cgmz_debugOverlay.z = 255;
	this.addChild(this._cgmz_debugOverlay);
	alias_CGMZDebug_Tilemap_createLayers.call(this);
};
//-----------------------------------------------------------------------------
// Also clear the overlay sprite
//-----------------------------------------------------------------------------
const alias_CGMZDebug_Tilemap_addAllSpots = Tilemap.prototype._addAllSpots;
Tilemap.prototype._addAllSpots = function(startX, startY) {
	this._cgmz_debugOverlay.bitmap.clear();
	alias_CGMZDebug_Tilemap_addAllSpots.apply(this, arguments);
};
//-----------------------------------------------------------------------------
// Add region or terrain tag spots depending on which is toggled on
//-----------------------------------------------------------------------------
const alias_CGMZDebug_Tilemap_addSpot = Tilemap.prototype._addSpot;
Tilemap.prototype._addSpot = function(startX, startY, x, y) {
	alias_CGMZDebug_Tilemap_addSpot.apply(this, arguments);
	const mx = startX + x;
	const my = startY + y;
	const dx = x * this.tileWidth;
	const dy = y * this.tileHeight;
	const overlayType = $cgmzTemp.debugOverlayTypes[$cgmzTemp.debugOverlayId];
	switch(overlayType) {
		case 'region':
			const region = this._readMapData(mx, my, 5);
			if(region) this._CGMZ_addRegionTagOverlay(region, dx, dy);
			break;
		case 'tag':
			const tag = $gameMap.terrainTag(mx, my);
			if(tag) this._CGMZ_addRegionTagOverlay(tag, dx, dy);
			break;
		case 'damage':
			const isDamageFloor = $gameMap.isDamageFloor(mx, my);
			if(isDamageFloor) this._CGMZ_addDamageFloorOverlay(dx, dy);
			break;
		case 'counter':
			const isCounter = $gameMap.isCounter(mx, my);
			if(isCounter) this._CGMZ_addCounterOverlay(dx, dy);
			break;
		case 'bush':
			const isBush = $gameMap.isBush(mx, my);
			if(isBush) this._CGMZ_addBushOverlay(dx, dy);
			break;
		case 'ladder':
			const isLadder = $gameMap.isLadder(mx, my);
			if(isLadder) this._CGMZ_addLadderOverlay(dx, dy);
			break;
	}
};
//-----------------------------------------------------------------------------
// Handle drawing region id and terrain tags
//-----------------------------------------------------------------------------
Tilemap.prototype._CGMZ_addRegionTagOverlay = function(id, dx, dy) {
	const colorId = (id - 1) % Tilemap.CGMZ_DEBUG_OVERLAYCOLORS.length;
	const color = Tilemap.CGMZ_DEBUG_OVERLAYCOLORS[colorId];
	const strokeColor = Tilemap.CGMZ_DEBUG_OVERLAYSTROKECOLORS[colorId];
	const strokeWidth = 4;
	this._cgmz_debugOverlay.bitmap.fillRect(dx, dy, this.tileWidth, this.tileHeight, color);
	this._cgmz_debugOverlay.bitmap.CGMZ_strokeRect(dx, dy, this.tileWidth, this.tileHeight, strokeColor, strokeWidth);
	this._cgmz_debugOverlay.bitmap.drawText(id, dx, dy, this.tileWidth, this.tileHeight, 'center');
};
//-----------------------------------------------------------------------------
// Handle drawing damage floor
//-----------------------------------------------------------------------------
Tilemap.prototype._CGMZ_addDamageFloorOverlay = function(dx, dy) {
	const color = Tilemap.CGMZ_DEBUG_OVERLAYCOLORS[0];
	this._cgmz_debugOverlay.bitmap.fillRect(dx, dy, this.tileWidth, this.tileHeight, color);
	this._cgmz_debugOverlay.bitmap.drawText("^^", dx, dy, this.tileWidth, this.tileHeight, 'center');
};
//-----------------------------------------------------------------------------
// Handle drawing counter
//-----------------------------------------------------------------------------
Tilemap.prototype._CGMZ_addCounterOverlay = function(dx, dy) {
	const color = Tilemap.CGMZ_DEBUG_OVERLAYCOLORS[8];
	this._cgmz_debugOverlay.bitmap.fillRect(dx, dy, this.tileWidth, this.tileHeight, color);
	this._cgmz_debugOverlay.bitmap.drawText("◆", dx, dy, this.tileWidth, this.tileHeight, 'center');
};
//-----------------------------------------------------------------------------
// Handle drawing bush
//-----------------------------------------------------------------------------
Tilemap.prototype._CGMZ_addBushOverlay = function(dx, dy) {
	const color = Tilemap.CGMZ_DEBUG_OVERLAYCOLORS[4];
	this._cgmz_debugOverlay.bitmap.fillRect(dx, dy, this.tileWidth, this.tileHeight, color);
	this._cgmz_debugOverlay.bitmap.drawText("≈", dx, dy, this.tileWidth, this.tileHeight, 'center');
};
//-----------------------------------------------------------------------------
// Handle drawing ladder
//-----------------------------------------------------------------------------
Tilemap.prototype._CGMZ_addLadderOverlay = function(dx, dy) {
	const color = Tilemap.CGMZ_DEBUG_OVERLAYCOLORS[2];
	this._cgmz_debugOverlay.bitmap.fillRect(dx, dy, this.tileWidth, this.tileHeight, color);
	this._cgmz_debugOverlay.bitmap.drawText("#", dx, dy, this.tileWidth, this.tileHeight, 'center');
};