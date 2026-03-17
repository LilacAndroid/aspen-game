/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/manual/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc Show tutorials in game to the player
 * @help
 * ============================================================================
 * For terms and conditions using this plugin in your game please visit:
 * https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * Become a Patron to get access to beta/alpha plugins plus other goodies!
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * Version: Alpha
 * ----------------------------------------------------------------------------
 * Compatibility: Only tested with my CGMZ plugins.
 * Made for RPG Maker MZ 1.9.0
 * ----------------------------------------------------------------------------
 * Description: Show a game manual in game to the player, letting them review
 * mechanics or other useful information at any time. You can hide entries in
 * the manual until the player comes across those mechanics during gameplay
 * so your newer players do not get overwhelmed with information at the start
 * of your game.
 * ----------------------------------------------------------------------------
 * Documentation:
 * ---------------------------Quick Start Guide--------------------------------
 * Set up your guide entries in the plugin parameters. The Discovered parameter
 * determines if it will start your game discovered (shown to the player) or
 * not. Other data is not saved, so you can edit it in the parameters and see
 * any changes in your game.
 *
 * To call the scene, use the Call Scene Plugin Command. You can also add the
 * scene to the main menu using a plugin that can add custom menu commands such
 * as [CGMZ] Menu Command Window. The JS to add this to the menu is:
 * SceneManager.push(CGMZ_Scene_GameManual);
 *
 * Manual entries are created using images, text, and headers. Each entry
 * parameter comes with sub-parameters for Texts, Images, and Headers. To
 * show these, use the Display Info parameter to add a new display line item
 * or drag+drop them to re-order. For example, if your guide entry has 2 text
 * elements and an image and you want it to appear in the order of text,
 * image, text, then you would add 3 line items to the guide Display Info
 * parameter with the first being Text, the second being Image, and the third
 * being Text. See below section for an explanation of what each line item
 * does.
 * --------------------------Display Line Items--------------------------------
 * This plugin has the following line items you can display in the display
 * window:
 *
 * Text - Shows a paragraph of text. Supports text codes.
 *
 * Image - Shows an image.
 * 
 * Header - Shows a header element with 2 dividing gradient lines and some
 * centered text in the middle. Supports text codes.
 *
 * Blank Line - A standard line height worth of blank vertical space.
 *
 * Custom Space - A custom amount of vertical space, amount determined by
 * the plugin parameter of the same name.
 * ----------------------------Plugin Commands---------------------------------
 * This plugin comes with the following plugin commands:
 *
 * Call Scene
 * Calls the manual scene, in case you want to show it through an event.
 *
 * Change Discover
 * Changes an entry's discovered status. If discovering it, the entry will
 * also get marked with the New! text. Note that this is safe to call if the 
 * entry is already discovered, if already discovered nothing will happen.
 * ------------------------------Saved Games-----------------------------------
 * This plugin is fully compatible with saved games. This means you can:
 *
 * ✓ Add this plugin to a saved game and it will work as expected
 * ✓ Change any plugin params and changes will be reflected in saved games
 * ✓ Remove the plugin with no issue to save data
 * --------------------------------Filename------------------------------------
 * The filename for this plugin MUST remain CGMZ_Manual.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 *
 * @command Call Scene
 * @desc Calls the manual scene
 *
 * @command Change Discover
 * @desc Change the discover status of a manual entry
 *
 * @arg id
 * @desc The id of the entry to change
 *
 * @arg discovered
 * @type boolean
 * @default true
 * @desc True = discover. False = undiscover.
 *
 * @param Plugin Data
 *
 * @param Guide Entries
 * @parent Plugin Data
 * @type struct<GuideEntry>[]
 * @default []
 * @desc Set up guide entries here.
 *
 * @param Scene Options
 *
 * @param List Window Right
 * @parent Scene Options
 * @type boolean
 * @default false
 * @desc If true, will show the list window on the right.
 *
 * @param List Window Width
 * @parent Scene Options
 * @type number
 * @default 35
 * @min 0
 * @max 100
 * @desc Width of the list window, as a percentage of the game screen width
 *
 * @param Disable Touch UI Space
 * @parent Scene Options
 * @type boolean
 * @default false
 * @desc If true, will remove the touch ui space if touch ui is disabled
 *
 * @param Show Title Window
 * @parent Scene Options
 * @type boolean
 * @default true
 * @desc If true, will show the short title window above the list window
 *
 * @param Custom Space
 * @parent Scene Options
 * @type number
 * @default 6
 * @desc Amount of blank vertical space to leave when drawing a custom space element
 *
 * @param Text Options
 *
 * @param Title Text
 * @parent Text Options
 * @default \i[229] Guides
 * @desc Text to show in the title window
 *
 * @param New Text
 * @parent Text Options
 * @default \c[14]New!\c[0]
 * @desc Text to show for new entries not yet viewed
 *
 * @param Integrations
 *
 * @param Scene Background
 * @parent Integrations
 * @desc A [CGMZ] Scene Backgrounds preset to use
 *
 * @param Controls Window
 * @parent Integrations
 * @desc A [CGMZ] Controls Window preset to use
 *
 * @param Title Window Settings
 * @parent Integrations
 * @desc A [CGMZ] Window Settings preset to use for the title window.
 *
 * @param List Window Settings
 * @parent Integrations
 * @desc A [CGMZ] Window Settings preset to use for the list window.
 *
 * @param Display Window Settings
 * @parent Integrations
 * @desc A [CGMZ] Window Settings preset to use for the display window.
 *
 * @param Title Window Background
 * @parent Integrations
 * @desc A [CGMZ] Window Backgrounds preset to use for the title window.
 *
 * @param List Window Background
 * @parent Integrations
 * @desc A [CGMZ] Window Backgrounds preset to use for the list window.
 *
 * @param Display Window Background
 * @parent Integrations
 * @desc A [CGMZ] Window Backgrounds preset to use for the display window.
*/
/*~struct~GuideEntry:
 * @param id
 * @desc The id of this entry, used to refer to this entry
 *
 * @param List Name
 * @desc The displayed name for this entry in the list window
 *
 * @param Display Name
 * @desc The displayed name for this entry in the display window
 *
 * @param Discovered
 * @type boolean
 * @default true
 * @desc If this entry starts the game discovered
 *
 * @param Texts
 * @type struct<GuideText>[]
 * @default []
 * @desc Text paragraphs and their settings.
 *
 * @param Images
 * @type struct<GuideImg>[]
 * @default []
 * @desc Images and their settings.
 *
 * @param Headers
 * @type struct<GuideHeader>[]
 * @default []
 * @desc Header elements and their settings
 *
 * @param Display Info
 * @type select[]
 * @option Text
 * @option Image
 * @option Header
 * @option Blank Line
 * @option Custom Space
 * @default ["Image","Text"]
 * @desc Header elements and their settings
*/
/*~struct~GuideText:
 * @param Text
 * @type multiline_string
 * @desc The text paragraph to show
 *
 * @param Alignment
 * @type select
 * @option left
 * @option center
 * @option right
 * @default left
 * @desc Text alignment for this paragraph
 *
 * @param X Coordinate
 * @type number
 * @default 0
 * @desc The X coordinate for this text, used to add an offset to have space on the left side
 *
 * @param Width Modifier
 * @type number
 * @default 0
 * @desc An amount to be subtracted from the window width, if you want space on the right side
*/
/*~struct~GuideImg:
 * @param Image
 * @type file
 * @dir img/
 * @desc The image to show
 *
 * @param Alignment
 * @type select
 * @option left
 * @option center
 * @option right
 * @default left
 * @desc Alignment for this image
 *
 * @param Mode
 * @type select
 * @option inline
 * @option block
 * @default block
 * @desc Block = blocks entire horizontal space. Inline = allows text in same horizontal space
*/
/*~struct~GuideHeader:
 * @param Text
 * @desc The text in the center of the element
 *
 * @param Show Dividers
 * @type boolean
 * @default true
 * @desc If true, will also show dividing lines
 *
 * @param Color 1
 * @type color
 * @default 1
 * @desc The first color of the gradient in the divider line
 *
 * @param Color 2
 * @type color
 * @default 0
 * @desc The second color of the gradient in the divider line
*/
Imported.CGMZ_Manual = true;
CGMZ.Versions["Manual"] = "Alpha";
CGMZ.Manual = {};
CGMZ.Manual.parameters = PluginManager.parameters('CGMZ_Manual');
CGMZ.Manual.TitleWindowSettings = CGMZ.Manual.parameters["Title Window Settings"];
CGMZ.Manual.ListWindowSettings = CGMZ.Manual.parameters["List Window Settings"];
CGMZ.Manual.DisplayWindowSettings = CGMZ.Manual.parameters["Display Window Settings"];
CGMZ.Manual.TitleWindowBackground = CGMZ.Manual.parameters["Title Window Background"];
CGMZ.Manual.ListWindowBackground = CGMZ.Manual.parameters["List Window Background"];
CGMZ.Manual.DisplayWindowBackground = CGMZ.Manual.parameters["Display Window Background"];
CGMZ.Manual.SceneBackground = CGMZ.Manual.parameters["Scene Background"];
CGMZ.Manual.ControlsWindow = CGMZ.Manual.parameters["Controls Window"];
CGMZ.Manual.TitleText = CGMZ.Manual.parameters["Title Text"];
CGMZ.Manual.NewText = CGMZ.Manual.parameters["New Text"];
CGMZ.Manual.CustomSpace = Number(CGMZ.Manual.parameters["Custom Space"]);
CGMZ.Manual.ListWindowWidth = Number(CGMZ.Manual.parameters["List Window Width"]);
CGMZ.Manual.ListWindowRight = (CGMZ.Manual.parameters["List Window Right"] === 'true');
CGMZ.Manual.DisableTouchUISpace = (CGMZ.Manual.parameters["Disable Touch UI Space"] === 'true');
CGMZ.Manual.ShowTitleWindow = (CGMZ.Manual.parameters["Show Title Window"] === 'true');
CGMZ.Manual.GuideEntries = CGMZ_Utils.parseJSON(CGMZ.Manual.parameters["Guide Entries"], [], '[CGMZ] Manual', 'Your Guide Entries parameter was set up incorrectly and could not be read.');
//=============================================================================
// CGMZ_Data_GameManual
//-----------------------------------------------------------------------------
// Data class used to store saved game manual data
//=============================================================================
function CGMZ_Data_GameManual() {
	this.initialize(...arguments);
}
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Data_GameManual.prototype.initialize = function(entry) {
	this.id = entry.id;
	this.discovered = (entry.Discovered === 'true');
	this.updated = false;
};
//-----------------------------------------------------------------------------
// Discover the entry
//-----------------------------------------------------------------------------
CGMZ_Data_GameManual.prototype.discover = function() {
	if(this.discovered) return;
	this.discovered = true;
	this.updated = true;
};
//-----------------------------------------------------------------------------
// Undiscover the entry
//-----------------------------------------------------------------------------
CGMZ_Data_GameManual.prototype.undiscover = function() {
	this.discovered = false;
};
//-----------------------------------------------------------------------------
// Processing when the entry is viewed in the manual
//-----------------------------------------------------------------------------
CGMZ_Data_GameManual.prototype.onView = function() {
	this.updated = false;
};
//=============================================================================
// CGMZ_Data_TempGameManual
//-----------------------------------------------------------------------------
// Data class used to store unsaved game manual data
//=============================================================================
function CGMZ_Data_TempGameManual() {
	this.initialize(...arguments);
}
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Data_TempGameManual.prototype.initialize = function(entry, order) {
	this.id = entry.id;
	this.listName = entry["List Name"];
	this.displayName = entry["Display Name"] || entry["List Name"];
	this.displayInfo = CGMZ_Utils.parseJSON(entry["Display Info"], [], '[CGMZ] Game Manual', `Your manual entry with id ${this.id} had invalid json in its display info parameter and could not be read.`);
	this.guideTexts = [];
	this.guideImages = [];
	this.guideHeaders = [];
	const texts = CGMZ_Utils.parseJSON(entry.Texts, null, '[CGMZ] Game Manual', `Your manual entry with id ${this.id} had invalid json in the texts parameter and could not be read.`);
	for(const textJSON of texts) {
		const txt = CGMZ_Utils.parseJSON(textJSON, null, '[CGMZ] Game Manual', `Your manual entry with id ${this.id} had invalid json in a text parameter and could not be read.`);
		if(!txt) continue;
		this.guideTexts.push({
			paragraph: txt.Text,
			align: txt.Alignment,
			x: Number(txt["X Coordinate"]),
			widthMod: Number(txt["Width Modifier"])
		});
	}
	const imgs = CGMZ_Utils.parseJSON(entry.Images, null, '[CGMZ] Game Manual', `Your manual entry with id ${this.id} had invalid json in the images parameter and could not be read.`);
	for(const imgJSON of imgs) {
		const img = CGMZ_Utils.parseJSON(imgJSON, null, '[CGMZ] Game Manual', `Your manual entry with id ${this.id} had invalid json in an image parameter and could not be read.`);
		if(!img) continue;
		const imgData = CGMZ_Utils.getImageData(img.Image, "img");
		this.guideImages.push({
			folder: imgData.folder,
			filename: imgData.filename,
			align: img.Alignment,
			mode: img.Mode
		});
	}
	const headers = CGMZ_Utils.parseJSON(entry.Headers, null, '[CGMZ] Game Manual', `Your manual entry with id ${this.id} had invalid json in the headers parameter and could not be read.`);
	for(const headerJSON of headers) {
		const header = CGMZ_Utils.parseJSON(headerJSON, null, '[CGMZ] Game Manual', `Your manual entry with id ${this.id} had invalid json in a header parameter and could not be read.`);
		if(!header) continue;
		this.guideHeaders.push({
			txt: header.Text,
			color1: Number(header["Color 1"]),
			color2: Number(header["Color 2"]),
			opts: {drawDividers: (header["Show Dividers"] === 'true')}
		});
	}
};
//=============================================================================
// CGMZ Core
//-----------------------------------------------------------------------------
// Manage saved game manual data
//=============================================================================
//-----------------------------------------------------------------------------
// Also initialize plugin data
//-----------------------------------------------------------------------------
const alias_CGMZManual_CGMZCore_createPluginData = CGMZ_Core.prototype.createPluginData;
CGMZ_Core.prototype.createPluginData = function() {
	alias_CGMZManual_CGMZCore_createPluginData.call(this);
	this.initializeGameManualData();
};
//-----------------------------------------------------------------------------
// Also initialize plugin data after load
//-----------------------------------------------------------------------------
const alias_CGMZManual_CGMZCore_onAfterLoad = CGMZ_Core.prototype.onAfterLoad;
CGMZ_Core.prototype.onAfterLoad = function() {
	alias_CGMZManual_CGMZCore_onAfterLoad.call(this);
	this.initializeGameManualData();
};
//-----------------------------------------------------------------------------
// Initialize game manual data
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.initializeGameManualData = function() {
	if(!this._gameManualEntries) this._gameManualEntries = {};
	for(const entryJSON of CGMZ.Manual.GuideEntries) {
		const entry = CGMZ_Utils.parseJSON(entryJSON, null, '[CGMZ] Game Manual', 'One of your guide entries was set up in an invalid way and could not be read.');
		if(!entry) continue;
		if(!this._gameManualEntries[entry.id]) {
			this._gameManualEntries[entry.id] = new CGMZ_Data_GameManual(entry);
		}
	}
};
//-----------------------------------------------------------------------------
// Get a game manual entry by id
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getManualEntry = function(id) {
	return this._gameManualEntries[id];
};
//-----------------------------------------------------------------------------
// Get all discovered entries
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getDiscoveredManualEntries = function() {
	return Object.keys(this._gameManualEntries).filter(entry => this.getManualEntry(entry)?.discovered);
};
//=============================================================================
// CGMZ Temp
//-----------------------------------------------------------------------------
// Add plugin commands, initialize temp plugin data
//=============================================================================
//-----------------------------------------------------------------------------
// Also initialize plugin data
//-----------------------------------------------------------------------------
const alias_CGMZManual_CGMZTemp_createPluginData = CGMZ_Temp.prototype.createPluginData;
CGMZ_Temp.prototype.createPluginData = function() {
	alias_CGMZManual_CGMZTemp_createPluginData.call(this);
	this.initializeGameManualData();
};
//-----------------------------------------------------------------------------
// Initialize game manual data
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.initializeGameManualData = function() {
	this._gameManualEntries = {};
	this.gameManualEntryOrder = [];
	for(const entryJSON of CGMZ.Manual.GuideEntries) {
		const entry = CGMZ_Utils.parseJSON(entryJSON, null, '[CGMZ] Game Manual', 'One of your guide entries was set up in an invalid way and could not be read.');
		if(!entry) continue;
		this._gameManualEntries[entry.id] = new CGMZ_Data_TempGameManual(entry);
		this.gameManualEntryOrder.push(entry.id);
	}
};
//-----------------------------------------------------------------------------
// Get a game manual entry by id
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.getManualEntry = function(id) {
	return this._gameManualEntries[id];
};
//-----------------------------------------------------------------------------
// Register Plugin Commands
//-----------------------------------------------------------------------------
const alias_CGMZManual_CGMZTemp_registerPluginCommands = CGMZ_Temp.prototype.registerPluginCommands;
CGMZ_Temp.prototype.registerPluginCommands = function() {
	alias_CGMZManual_CGMZTemp_registerPluginCommands.call(this);
	PluginManager.registerCommand("CGMZ_Manual", "Call Scene", this.pluginCommandManualCallScene);
	PluginManager.registerCommand("CGMZ_Manual", "Change Discover", this.pluginCommandManualChangeDiscover);
};
//-----------------------------------------------------------------------------
// Plugin Command - Call Scene
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandManualCallScene = function() {
	SceneManager.push(CGMZ_Scene_GameManual);
};
//-----------------------------------------------------------------------------
// Plugin Command - Change Discover
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandManualChangeDiscover = function(args) {
	const entry = $cgmz.getManualEntry(args.id);
	if(entry) {
		(args.discovered === 'true') ? entry.discover() : entry.undiscover();
	}
};
//=============================================================================
// CGMZ_Scene_GameManual
//-----------------------------------------------------------------------------
// Handle the game manual scene
//=============================================================================
function CGMZ_Scene_GameManual() {
    this.initialize.apply(this, arguments);
}
CGMZ_Scene_GameManual.prototype = Object.create(Scene_MenuBase.prototype);
CGMZ_Scene_GameManual.prototype.constructor = CGMZ_Scene_GameManual;
//-----------------------------------------------------------------------------
// Check if should make room for Touch UI
//-----------------------------------------------------------------------------
CGMZ_Scene_GameManual.prototype.hasTouchUI = function() {
	return !CGMZ.Manual.DisableTouchUISpace || ConfigManager.touchUI;
};
//-----------------------------------------------------------------------------
// Create game manual scene objects
//-----------------------------------------------------------------------------
CGMZ_Scene_GameManual.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
	this.createTitleWindow();
	this.createListWindow();
	this.createDisplayWindow();
};
//-----------------------------------------------------------------------------
// Create title window
//-----------------------------------------------------------------------------
CGMZ_Scene_GameManual.prototype.createTitleWindow = function() {
	const rect = this.titleWindowRect();
    this._titleWindow = new CGMZ_Window_GameManualTitle(rect);
    this.addWindow(this._titleWindow);
};
//-----------------------------------------------------------------------------
// Get the title window rect
//-----------------------------------------------------------------------------
CGMZ_Scene_GameManual.prototype.titleWindowRect = function() {
	const width = Graphics.boxWidth * (CGMZ.Manual.ListWindowWidth / 100.0);
	const height = (CGMZ.Manual.ShowTitleWindow) ? this.calcWindowHeight(1, false) : 0;
	const x = (CGMZ.Manual.ListWindowRight) ? Graphics.boxWidth - width : 0;
	const y = this.hasTouchUI() ? this.mainAreaTop() : 0;
    return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create list window
//-----------------------------------------------------------------------------
CGMZ_Scene_GameManual.prototype.createListWindow = function() {
	const rect = this.listWindowRect();
    this._listWindow = new CGMZ_Window_GameManualList(rect);
	this._listWindow.setHandler('cancel', this.popScene.bind(this));
    this.addWindow(this._listWindow);
};
//-----------------------------------------------------------------------------
// Get the list window rect
//-----------------------------------------------------------------------------
CGMZ_Scene_GameManual.prototype.listWindowRect = function() {
	const width = this._titleWindow.width;
	const height = Graphics.boxHeight - this._titleWindow.height - this._titleWindow.y;
	const x = this._titleWindow.x;
	const y = this._titleWindow.y + this._titleWindow.height;
    return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create display window
//-----------------------------------------------------------------------------
CGMZ_Scene_GameManual.prototype.createDisplayWindow = function() {
	const rect = this.displayWindowRect();
    this._displayWindow = new CGMZ_Window_GameManualDisplay(rect);
	this._listWindow.setHelpWindow(this._displayWindow);
    this.addWindow(this._displayWindow);
};
//-----------------------------------------------------------------------------
// Get the display window rect
//-----------------------------------------------------------------------------
CGMZ_Scene_GameManual.prototype.displayWindowRect = function() {
	const width = Graphics.boxWidth - this._listWindow.width;
	const height = Graphics.boxHeight - this._titleWindow.y;
	const x = (CGMZ.Manual.ListWindowRight) ? 0 : Graphics.boxWidth - width;
	const y = this._titleWindow.y;
    return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Get the scene's custom scene background
// No need to check if Scene Backgrounds is installed because this custom func
// is only called by that plugin
//-----------------------------------------------------------------------------
CGMZ_Scene_GameManual.prototype.CGMZ_getCustomSceneBackground = function() {
	return $cgmzTemp.sceneBackgroundPresets[CGMZ.Manual.SceneBackground];
};
//-----------------------------------------------------------------------------
// Get controls window preset for [CGMZ] Controls Window
// No need to check if plugin is installed because this custom func is only
// called by that plugin
//-----------------------------------------------------------------------------
CGMZ_Scene_GameManual.prototype.CGMZ_getControlsWindowOtherPreset = function() {
	return $cgmzTemp.getControlWindowPresetOther(CGMZ.Manual.ControlsWindow);
};
//=============================================================================
// CGMZ_Window_GameManualTitle
//-----------------------------------------------------------------------------
// Window to show logged texts
//=============================================================================
function CGMZ_Window_GameManualTitle(rect, types) {
    this.initialize.apply(this, arguments);
}
CGMZ_Window_GameManualTitle.prototype = Object.create(Window_Base.prototype);
CGMZ_Window_GameManualTitle.prototype.constructor = CGMZ_Window_GameManualTitle;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Window_GameManualTitle.prototype.initialize = function(rect) {
    Window_Base.prototype.initialize.call(this, rect);
	if(Imported.CGMZ_WindowBackgrounds && CGMZ.Manual.TitleWindowBackground) this.CGMZ_setWindowBackground(CGMZ.Manual.TitleWindowBackground);
	if(Imported.CGMZ_WindowSettings && CGMZ.Manual.TitleWindowSettings) this.CGMZ_setWindowSettings(CGMZ.Manual.TitleWindowSettings);
	this.refresh();
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Window_GameManualTitle.prototype.refresh = function() {
	this.contents.clear();
    this.CGMZ_drawTextLine(CGMZ.Manual.TitleText, 0, 0, this.contents.width, 'center');
};
//=============================================================================
// CGMZ_Window_GameManualList
//-----------------------------------------------------------------------------
// Selectable window for choosing a manual entry
//=============================================================================
function CGMZ_Window_GameManualList(rect) {
	this.initialize.apply(this, arguments);
}
CGMZ_Window_GameManualList.prototype = Object.create(Window_Selectable.prototype);
CGMZ_Window_GameManualList.prototype.constructor = CGMZ_Window_GameManualList;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Window_GameManualList.prototype.initialize = function(rect) {
	Window_Selectable.prototype.initialize.call(this, rect);
	if(Imported.CGMZ_WindowBackgrounds && CGMZ.Manual.ListWindowBackground) this.CGMZ_setWindowBackground(CGMZ.Manual.ListWindowBackground);
	if(Imported.CGMZ_WindowSettings && CGMZ.Manual.ListWindowSettings) this.CGMZ_setWindowSettings(CGMZ.Manual.ListWindowSettings);
	this.refresh();
	this.activate();
	if(this._data.length) this.select(0);
};
//-----------------------------------------------------------------------------
// Max items
//-----------------------------------------------------------------------------
CGMZ_Window_GameManualList.prototype.maxItems = function() {
	return this._data ? this._data.length : 1;
};
//-----------------------------------------------------------------------------
// Current item
//-----------------------------------------------------------------------------
CGMZ_Window_GameManualList.prototype.item = function() {
	return this._data[this.index()];
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Window_GameManualList.prototype.refresh = function() {
	this.makeItemList();
	Window_Selectable.prototype.refresh.call(this);
};
//-----------------------------------------------------------------------------
// Make item list
//-----------------------------------------------------------------------------
CGMZ_Window_GameManualList.prototype.makeItemList = function() {
	this._data = $cgmz.getDiscoveredManualEntries().sort((a, b) => {
		const aIndex = $cgmzTemp.gameManualEntryOrder.indexOf(a);
		const bIndex = $cgmzTemp.gameManualEntryOrder.indexOf(b);
		if(aIndex > bIndex) return 1;
		if(aIndex < bIndex) return -1;
		return 0;
	});
};
//-----------------------------------------------------------------------------
// Draw item in list
//-----------------------------------------------------------------------------
CGMZ_Window_GameManualList.prototype.drawItem = function(index) {
	const id = this._data[index];
	const rect = this.itemRectWithPadding(index);
	const entry = $cgmzTemp.getManualEntry(id);
	const entrySave = $cgmz.getManualEntry(id);
	if(!entry || !entrySave) return;
	if(entrySave.updated && CGMZ.Manual.NewText) {
		const newWidth = this.CGMZ_textSizeEx(CGMZ.Manual.NewText).width + 4;
		this.CGMZ_drawTextLine(entry.listName, rect.x, rect.y, rect.width - newWidth, 'center');
		this.CGMZ_drawTextLine(CGMZ.Manual.NewText, rect.x, rect.y, rect.width, 'right');
	} else {
		this.CGMZ_drawTextLine(entry.listName, rect.x, rect.y, rect.width, 'center');
	}
};
//-----------------------------------------------------------------------------
// Set item to not be updated after selected
//-----------------------------------------------------------------------------
CGMZ_Window_GameManualList.prototype.select = function(index) {
	Window_Selectable.prototype.select.call(this, index);
    const id = this._data?.[index];
	const entry = $cgmz.getManualEntry(id);
	if(entry) {
		entry.onView();
		this.redrawItem(index);
	}
};
//-----------------------------------------------------------------------------
// Update display window
//-----------------------------------------------------------------------------
CGMZ_Window_GameManualList.prototype.updateHelp = function() {
	this._helpWindow.setItem(this.item());
};
//=============================================================================
// CGMZ_Window_GameManualDisplay
//-----------------------------------------------------------------------------
// Shows guide information
//=============================================================================
function CGMZ_Window_GameManualDisplay(rect) {
	this.initialize.apply(this, arguments);
}
CGMZ_Window_GameManualDisplay.prototype = Object.create(CGMZ_Window_Scrollable.prototype);
CGMZ_Window_GameManualDisplay.prototype.constructor = CGMZ_Window_GameManualDisplay;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Window_GameManualDisplay.prototype.initialize = function(rect) {
	const heightMultiplier = 20; // maximum of 20 windows tall of data to scroll
	CGMZ_Window_Scrollable.prototype.initialize.call(this, rect, heightMultiplier);
	if(Imported.CGMZ_WindowBackgrounds && CGMZ.Manual.DisplayWindowBackground) this.CGMZ_setWindowBackground(CGMZ.Manual.DisplayWindowBackground);
	if(Imported.CGMZ_WindowSettings && CGMZ.Manual.DisplayWindowSettings) this.CGMZ_setWindowSettings(CGMZ.Manual.DisplayWindowSettings);
	this._id = "";
	this._spritesToLoad = 0;
	this._spritesLoaded = 0;
	this._manualSprites = [];
	this.deactivate();
	this.refresh();
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Window_GameManualDisplay.prototype.setItem = function(id) {
	if(!id) {
		this.setupWindowForNewEntry();
		return;
	}
	if(this._id === id) return;
	this._id = id;
	this.refresh();
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Window_GameManualDisplay.prototype.refresh = function() {
	this.setupWindowForNewEntry();
	this.removeAllManualSprites();
	this._spritesLoaded = 0;
	this._spritesToLoad = 0;
	if(!this._id) return;
	const entry = $cgmzTemp.getManualEntry(this._id);
	if(!entry) return;
	this._spritesToLoad = entry.guideImages.length;
	if(this._spritesLoaded === this._spritesToLoad) {
		this.drawEntry();
	} else {
		this.loadAllSprites(entry);
	}
};
//-----------------------------------------------------------------------------
// Remove all of the manual sprites
//-----------------------------------------------------------------------------
CGMZ_Window_GameManualDisplay.prototype.removeAllManualSprites = function() {
	for(const sprite of this._manualSprites) {
		const index = this._innerChildren.indexOf(sprite);
		if(index >= 0) {
			this._innerChildren.splice(index, 1);
		}
		this._clientArea.removeChild(sprite);
	}
	this._manualSprites = [];
};
//-----------------------------------------------------------------------------
// Load all sprites
//-----------------------------------------------------------------------------
CGMZ_Window_GameManualDisplay.prototype.loadAllSprites = function(entry) {
	for(const img of entry.guideImages) {
		const bitmap = ImageManager.loadBitmap(img.folder, img.filename);
		bitmap.addLoadListener(this.onBitmapLoad.bind(this, this._id));
	}
};
//-----------------------------------------------------------------------------
// After bitmap is loaded
//-----------------------------------------------------------------------------
CGMZ_Window_GameManualDisplay.prototype.onBitmapLoad = function(id) {
	if(this._id === id) {
		this._spritesLoaded++;
	}
	if(this._spritesLoaded >= this._spritesToLoad) this.drawEntry();
};
//-----------------------------------------------------------------------------
// Draw manual entry, only called after all sprites are loaded.
//-----------------------------------------------------------------------------
CGMZ_Window_GameManualDisplay.prototype.drawEntry = function() {
	const entry = $cgmzTemp.getManualEntry(this._id);
	if(!entry) return;
	this.setupWindowForNewEntry();
	let headerIndex = 0;
	let textIndex = 0;
	let imgIndex = 0;
	this._neededHeight += this.CGMZ_drawTextLine(entry.displayName, 0, 0, this.contents.width, 'center');
	for(const info of entry.displayInfo) {
		switch(info) {
			case 'Text': this.drawManualText(textIndex++); break;
			case 'Image': this.drawManualImage(imgIndex++); break;
			case 'Header': this.drawManualHeader(headerIndex++); break;
			case 'Blank Line': this._neededHeight += this.lineHeight(); break;
			case 'Custom Space': this._neededHeight += CGMZ.Manual.CustomSpace; break;
		}
	}
	this._neededHeight += this.padding * 2;
	this.checkForScroll();
};
//-----------------------------------------------------------------------------
// Draw a text paragraph
//-----------------------------------------------------------------------------
CGMZ_Window_GameManualDisplay.prototype.drawManualText = function(index) {
	const entry = $cgmzTemp.getManualEntry(this._id);
	const paragraph = entry.guideTexts[index];
	if(!paragraph) return;
	this._neededHeight += this.CGMZ_drawText(paragraph.paragraph, paragraph.x, paragraph.x, this._neededHeight, this.contents.width - paragraph.widthMod - paragraph.x, paragraph.align);
};
//-----------------------------------------------------------------------------
// Draw an image
//-----------------------------------------------------------------------------
CGMZ_Window_GameManualDisplay.prototype.drawManualImage = function(index) {
	const entry = $cgmzTemp.getManualEntry(this._id);
	const img = entry.guideImages[index];
	if(!img) return;
	const sprite = new Sprite();
	sprite.bitmap = ImageManager.loadBitmap(img.folder, img.filename);
	this._manualSprites.push(sprite);
	this.addInnerChild(sprite);
	sprite.y = this._neededHeight;
	let ratio = Math.min(1, this.contents.width / sprite.width);
	sprite.scale.x = ratio;
	sprite.scale.y = ratio;
	if(img.align === 'left') {
		sprite.x = 0;
	} else if(img.align === 'right') {
		sprite.x = this.contents.width - sprite.width;
	} else {
		sprite.x = (this.contents.width - sprite.width) / 2;
	}
	if(img.mode === 'block') this._neededHeight += (sprite.height * sprite.scale.y);
};
//-----------------------------------------------------------------------------
// Draw a header
//-----------------------------------------------------------------------------
CGMZ_Window_GameManualDisplay.prototype.drawManualHeader = function(index) {
	const entry = $cgmzTemp.getManualEntry(this._id);
	const header = entry.guideHeaders[index];
	if(!header) return;
	this._neededHeight += this.CGMZ_drawHeader(header.txt, this._neededHeight, header.color1, header.color2, header.opts);
};