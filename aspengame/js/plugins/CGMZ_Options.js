/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/options/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc Modify the options scene in your game
 * @help
 * ============================================================================
 * For terms and conditions using this plugin in your game please visit:
 * https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * Become a Patron to get access to beta/alpha plugins plus other goodies!
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * Version: Alpha R4
 * ----------------------------------------------------------------------------
 * Compatibility: Only tested with my CGMZ plugins.
 * Made for RPG Maker MZ 1.9.0
 * ----------------------------------------------------------------------------
 * Description: Modify the options scene. You can create options categories,
 * choose which options appear in each category, and add new options for the
 * player.
 * ----------------------------------------------------------------------------
 * Documentation:
 * -----------------------------Alpha Notes------------------------------------
 * Planned features to be added:
 * 1) Integrations with other [CGMZ] plugins
 * 2) Options that can lead to new scenes (ex: difficulty select scene)
 * 3) More easy to use default options
 * 4) Additional option types
 *
 * Want additional features not already present/listed above? Make suggestions
 * on the Patreon Post, Itch.io Page, or in my discord under the #suggestions
 * channel!
 * https://discord.gg/Gbx7JXP
 * -----------------------------Main Features----------------------------------
 * NEW OPTIONS
 * By default RPG Maker only provides a few options. This plugin expands that
 * to include some new ones that are easily set up by typing in a custom
 * symbol. These include fullscreen, stretch mode, and master volume so far
 * with more planned in future updates.
 * 
 * CATEGORIES
 * Add categories of options such as Video, Audio, Gameplay, etc. A more
 * modern looking options scene that gamers will be familiar with. Within each
 * category, you can have non-selectable spaces and headers in the options,
 * getting away from the RPG Maker default feel where everything is selectable
 * even if it has no function connected to it.
 * ----------------------------Default Options---------------------------------
 * If you would like to re-create the default options, you can easily do so by
 * setting the Symbol to the default option symbol. These are:
 *
 * bgmVolume - The BGM Volume option
 * bgsVolume - The BGS Volume option
 * meVolume - The ME Volume option
 * seVolume - The SE Volume option
 * alwaysDash - The Always Dash option
 * commandRemember - The Command Remember option
 * touchUI - The Touch UI option
 *
 * Note that when using these symbols, you can still modify the number string
 * or on/off text, they will just behave as the original options did.
 * ----------------------------Special Symbols---------------------------------
 * Some symbols have special meaning when used. These are:
 *
 * fullscreen - Will toggle the game between windowed and fullscreen mode.
 * stretch - Will toggle the stretch mode of the game window
 * masterVolume - Will apply to all volume settings (multiplicative)
 * ----------------------------Plugin Commands---------------------------------
 * This plugin does not have any plugin commands.
 * ------------------------------Integrations----------------------------------
 * [CGMZ] Scene Backgrounds - Add a custom background image, including an
 * image that can scroll or show weather.
 *
 * [CGMZ] Window Backgrounds - Add a custom background image for your options
 * windows. This can include a scrolling image that activates only when the
 * window is active.
 *
 * [CGMZ] Window Settings - Control the window style, tone, padding, opacity,
 * windowskin, and more for each window in the plugin with no code required.
 *
 * [CGMZ] Controls Window - Add a window that shows the player gamepad or
 * keyboard controls, depending on their last input.
 * ------------------------------Saved Games-----------------------------------
 * This plugin is fully compatible with saved games
 *
 * This means the following will work in saved games:
 * ✓ Add this plugin to your game
 * ✓ Modify plugin parameters
 * ✓ Remove this plugin from your game
 * -----------------------------Filename---------------------------------------
 * The filename for this plugin MUST remain CGMZ_Options.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * --------------------------Latest Version------------------------------------
 * Hi all, this version adds some more control over the window. You can now
 * set an x and y offset as well as change the height. A bug with the window
 * width parameter was also fixed.
 *
 * This update also adds an option to take over default option names. Before,
 * default option names came from the Database for compatibility reasons. If
 * you would prefer your option names to come from this plugin, even for the
 * default options, you can now set the Draw Default Names parameter to false.
 *
 * Version Alpha R4
 * - Added Window height, x, y modifiers
 * - Added option to take over default option names
 * - Fix bug with window width parameter not working
 *
 * @command Read Option
 * @desc Reads an option into either a switch (toggle option) or variable (other option types)
 *
 * @arg Option Symbol
 * @desc The symbol of the option to read. The option cannot be read if this is not found (check dev tools console)
 *
 * @arg Switch
 * @type switch
 * @default 0
 * @desc The Game Switch to store the option value in. If this is 0, will instead store in the Variable.
 *
 * @arg Variable
 * @type variable
 * @default 0
 * @desc The Game Variable to store the option value in. Only used if Switch parameter is set to 0.
 *
 * @command Set Option
 * @desc Sets an option, either using a switch (boolean) or variable (number)
 *
 * @arg Option Symbol
 * @desc The symbol of the option to set. The option cannot be set if this is not found (check dev tools console)
 *
 * @arg Switch
 * @type switch
 * @default 0
 * @desc If not 0, the option will be set to the value stored in this switch.
 *
 * @arg Variable
 * @type variable
 * @default 0
 * @desc If not 0, the option will be set to the value stored in this variable.
 *
 * @param Category Setup
 *
 * @param Categories
 * @parent Category Setup
 * @type struct<Category>[]
 * @default []
 * @desc Set up option categories here
 *
 * @param Category Alignment
 * @parent Category Setup
 * @type select
 * @option left
 * @option center
 * @option right
 * @default center
 * @desc The alignment of the command text in the category window
 *
 * @param Category Icon Alignment
 * @parent Category Setup
 * @type select
 * @option left
 * @option right
 * @default left
 * @desc The alignment of the icons for commands in the category window
 *
 * @param Category Columns
 * @parent Category Setup
 * @type number
 * @default 3
 * @desc Number of columns to display in the category window (max)
 *
 * @param Category Rows
 * @parent Category Setup
 * @type number
 * @default 1
 * @desc Number of rows to display in the category window (max)
 *
 * @param Options Setup
 *
 * @param Volume Offset
 * @parent Options Setup
 * @type number
 * @default 0
 * @desc Amount to change default volume options by, 0 = default
 *
 * @param Draw Default Names
 * @parent Options Setup
 * @type boolean
 * @default true
 * @desc If true, the default option names will come from the database.
 *
 * @param Scene Setup
 *
 * @param Disable Touch UI Space
 * @parent Scene Setup
 * @type boolean
 * @default false
 * @desc If true, will not leave room for touch UI buttons
 *
 * @param Window Width
 * @parent Scene Setup
 * @type number
 * @min 0
 * @max 100
 * @default 100
 * @desc Width of the options windows as a percent of screen width
 *
 * @param Window Height Modifier
 * @parent Scene Setup
 * @type number
 * @min -9999
 * @default 0
 * @desc Amount of pixels added / subtracted (if negative) from default window height (option only)
 *
 * @param Window X Offset
 * @parent Scene Setup
 * @type number
 * @min -9999
 * @default 0
 * @desc Amount of pixels added / subtracted (if negative) from window x coordinate (category & option)
 *
 * @param Window Y Offset
 * @parent Scene Setup
 * @type number
 * @min -9999
 * @default 0
 * @desc Amount of pixels added / subtracted (if negative) from window y coordinate (category & option)
 *
 * @param Status Width
 * @parent Scene Setup
 * @type number
 * @min 0
 * @default 0
 * @desc Width (in pixels) of the area given to draw an option's value, 0 = default
 *
 * @param Custom Space
 * @parent Scene Setup
 * @type number
 * @default 6
 * @desc Amount of blank vertical space to leave when selecting Custom Space (in pixels)
 *
 * @param Integrations
 *
 * @param Scene Background
 * @parent Integrations
 * @desc The [CGMZ] Scene Backgrounds preset id to use
 *
 * @param Category Window Background
 * @parent Integrations
 * @desc The [CGMZ] Window Backgrounds preset id to use
 *
 * @param Category Window Settings
 * @parent Integrations
 * @desc The [CGMZ] Window Settings preset id to use for category select window
 *
 * @param Options Window Settings
 * @parent Integrations
 * @desc The [CGMZ] Window Backgrounds preset id to use for option window
 *
 * @param Controls Window
 * @parent Integrations
 * @desc The [CGMZ] Controls Window preset id to use
*/
/*~struct~Category:
 * @param Id
 * @desc The category id, used to refer to this category
 *
 * @param Name
 * @desc The name displayed for the category
 *
 * @param Icon
 * @type icon
 * @default 0
 * @desc An icon to show for the category command, if 0 will not show any icon
 *
 * @param Background Image
 * @type file
 * @dir img
 * @desc A background image to use for the category command. Blank = default black rectangle
 *
 * @param Background Image X
 * @type number
 * @default 0
 * @min 0
 * @desc The x coordinate to start the background image from the source image (upper left corner)
 *
 * @param Background Image Y
 * @type number
 * @default 0
 * @min 0
 * @desc The y coordinate to start the background image from the source image (upper left corner)
 *
 * @param Options
 * @default []
 * @type struct<Option>[]
 * @desc The options displayed in this category
 *
 * @param Headers
 * @default []
 * @type text[]
 * @desc The headers displayed in this category
 *
 * @param Text Lines
 * @default []
 * @type text[]
 * @desc The lines of text displayed in this category
 *
 * @param Display Info
 * @option Option
 * @option Header
 * @option Text Line
 * @option Blank Line
 * @option Custom Space
 * @default []
 * @type select[]
 * @desc The display info and order to display it in the options window
 *
 * @param Integrations
 *
 * @param Window Background
 * @parent Integrations
 * @desc The [CGMZ] Window Backgrounds preset id to use for this category
*/
/*~struct~Option:
 * @param Symbol
 * @desc The option symbol. Used internally. CANNOT BE BLANK OR SAME AS OTHER OPTIONS. SEE DOCUMENTATION.
 *
 * @param Name
 * @desc Text displayed for the option
 *
 * @param Type
 * @type select
 * @option Toggle
 * @option Number
 * @option JS
 * @desc The type of the option
 * @default Toggle
 *
 * @param Toggle Settings
 *
 * @param Toggle On Text
 * @parent Toggle Settings
 * @default ON
 * @desc The text to show when the toggle is ON
 *
 * @param Toggle Off Text
 * @parent Toggle Settings
 * @default OFF
 * @desc The text to show when the toggle is OFF
 *
 * @param Toggle Default
 * @parent Toggle Settings
 * @type boolean
 * @default false
 * @desc If the setting starts ON or OFF (only affect custom options)
 *
 * @param Number Settings
 *
 * @param Number String
 * @parent Number Settings
 * @default %num%
 * @desc The text to show for the number value, %num will be replaced with the current value of the option
 *
 * @param Number Min
 * @parent Number Settings
 * @default 0
 * @min -1000000
 * @desc The minimum value the number can be set to
 *
 * @param Number Max
 * @parent Number Settings
 * @default 0
 * @min -10000
 * @desc The maximum value the number can be set to
 *
 * @param Number Change
 * @parent Number Settings
 * @default 20
 * @min -10000
 * @desc The amount the number is changed per change input
 *
 * @param Number Default
 * @parent Number Settings
 * @type number
 * @min -99999
 * @default 0
 * @desc The default value to use (only affect custom options)
 *
 * @param JS Settings
 *
 * @param JS Text
 * @parent JS Settings
 * @default const symbol = arguments[0];
 const value = arguments[1];
 return value ? "On" : "Off";
 * @type multiline_string
 * @desc JavaScript that is evaluated for the text to show for this option type.
 *
 * @param JS Ok
 * @parent JS Settings
 * @default const symbol = arguments[0];
 return this.changeValue(symbol, !this.getConfigValue(symbol));
 * @type multiline_string
 * @desc JavaScript that is evaluated when the player presses OK while this option is selected.
 *
 * @param JS Right
 * @parent JS Settings
 * @default const symbol = arguments[0];
 return this.changeValue(symbol, true);
 * @type multiline_string
 * @desc JavaScript that is evaluated when the player presses Right while this option is selected.
 *
 * @param JS Left
 * @parent JS Settings
 * @default const symbol = arguments[0];
 return this.changeValue(symbol, false);
 * @type multiline_string
 * @desc JavaScript that is evaluated when the player presses Left while this option is selected.
 *
 * @param JS Default
 * @parent JS Settings
 * @default return false;
 * @type multiline_string
 * @desc JavaScript that is evaluated for the initial value of the option
*/
Imported.CGMZ_Options = true;
CGMZ.Versions["Options"] = "Alpha R4";
CGMZ.Options = {};
CGMZ.Options.parameters = PluginManager.parameters('CGMZ_Options');
CGMZ.Options.CategoryAlignment = CGMZ.Options.parameters["Category Alignment"];
CGMZ.Options.CategoryIconAlignment = CGMZ.Options.parameters["Category Icon Alignment"];
CGMZ.Options.CategoryWindowSettings = CGMZ.Options.parameters["Category Window Settings"];
CGMZ.Options.OptionsWindowSettings = CGMZ.Options.parameters["Options Window Settings"];
CGMZ.Options.SceneBackground = CGMZ.Options.parameters["Scene Background"];
CGMZ.Options.CategoryWindowBackground = CGMZ.Options.parameters["Category Window Background"];
CGMZ.Options.ControlsWindow = CGMZ.Options.parameters["Controls Window"];
CGMZ.Options.CategoryColumns = Number(CGMZ.Options.parameters["Category Columns"]);
CGMZ.Options.CategoryRows = Number(CGMZ.Options.parameters["Category Rows"]);
CGMZ.Options.WindowWidth = Number(CGMZ.Options.parameters["Window Width"]);
CGMZ.Options.WindowHeightModifier = Number(CGMZ.Options.parameters["Window Height Modifier"]);
CGMZ.Options.WindowXOffset = Number(CGMZ.Options.parameters["Window X Offset"]);
CGMZ.Options.WindowYOffset = Number(CGMZ.Options.parameters["Window Y Offset"]);
CGMZ.Options.CustomSpace = Number(CGMZ.Options.parameters["Custom Space"]);
CGMZ.Options.StatusWidth = Number(CGMZ.Options.parameters["Status Width"]);
CGMZ.Options.VolumeOffset = Number(CGMZ.Options.parameters["Volume Offset"]);
CGMZ.Options.DisableTouchUISpace = (CGMZ.Options.parameters["Disable Touch UI Space"] === 'true');
CGMZ.Options.DrawDefaultNames = (CGMZ.Options.parameters["Draw Default Names"] === 'true');
// Set up new options below
CGMZ.Options.SpecialSymbolList = ["bgmVolume", "bgsVolume", "meVolume", "seVolume", "alwaysDash", "commandRemember", "touchUI", "fullscreen", "stretch", "masterVolume"];
CGMZ.Options.UsingFullscreen = false;
CGMZ.Options.UsingStretch = false;
CGMZ.Options.Categories = CGMZ_Utils.parseJSON(CGMZ.Options.parameters["Categories"], [], "[CGMZ] Options", "Your Categories parameter was set up incorrectly and could not be read.").map(arrayJSON => {
	const cat = CGMZ_Utils.parseJSON(arrayJSON, null, "[CGMZ] Options", "One of your option categories was set up incorrectly and could not be read.");
	if(!cat) return null;
	const category = {};
	category.icon = Number(cat.Icon);
	category.img = {
		imgX: Number(cat["Background Image X"]),
		imgY: Number(cat["Background Image Y"]),
		img: cat["Background Image"]
	}
	category.id = cat.Id;
	category.name = cat.Name;
	category.windowBackground = cat["Window Background"];
	category.headers = CGMZ_Utils.parseJSON(cat.Headers, [], "[CGMZ] Options", `Your Headers parameter for option category '${cat.Name}' was invalid and could not be read.`);
	category.textLines = CGMZ_Utils.parseJSON(cat["Text Lines"], [], "[CGMZ] Options", `Your Text Lines parameter for option category '${cat.Name}' was invalid and could not be read.`);
	category.display = CGMZ_Utils.parseJSON(cat["Display Info"], [], "[CGMZ] Options", `Your Display Info parameter for option category '${cat.Name}' was invalid and could not be read.`);
	category.options = CGMZ_Utils.parseJSON(cat.Options, [], "[CGMZ] Options", `Your Options parameter for option category '${cat.Name}' was invalid and could not be read.`).map(optJSON => {
		const opt = CGMZ_Utils.parseJSON(optJSON, null, "[CGMZ] Options", "One of your options was set up incorrectly and could not be read.");
		if(!opt) return null;
		const o = {}
		if(opt.Symbol === 'fullscreen') CGMZ.Options.UsingFullscreen = true;
		if(opt.Symbol === 'stretch') CGMZ.Options.UsingStretch = true;
		o.symbol = opt.Symbol;
		o.name = opt.Name;
		o.type = opt.Type;
		o.toggleSettings = {onText: opt["Toggle On Text"], offText: opt["Toggle Off Text"], init: (opt["Toggle Default"] === 'true')};
		o.numSettings = {numString: opt["Number String"], numMin: Number(opt["Number Min"]), numMax: Number(opt["Number Max"]), numChange: Number(opt["Number Change"]), init: Number(opt["Number Default"])};
		o.jsSettings = {jsText: opt["JS Text"], left: opt["JS Left"], right: opt["JS Right"], ok: opt["JS Ok"], init: opt["JS Default"]};
		return o;
	}).filter(x => !!x);
	return category;
}).filter(x => !!x);
//=============================================================================
// CGMZ_Temp
//-----------------------------------------------------------------------------
// Handle option plugin commands
//=============================================================================
//-----------------------------------------------------------------------------
// Register Plugin Commands
//-----------------------------------------------------------------------------
const alias_CGMZOptions_CGMZTemp_registerPluginCommands = CGMZ_Temp.prototype.registerPluginCommands;
CGMZ_Temp.prototype.registerPluginCommands = function() {
	alias_CGMZOptions_CGMZTemp_registerPluginCommands.call(this);
	PluginManager.registerCommand("CGMZ_Options", "Read Option", this.pluginCommandOptionsReadOption);
	PluginManager.registerCommand("CGMZ_Options", "Set Option", this.pluginCommandOptionsSetOption);
};
//-----------------------------------------------------------------------------
// Plugin Command - Read Option
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandOptionsReadOption = function(args) {
	const symbol = args["Option Symbol"];
	const switchId = Number(args.Switch);
	const variableId = Number(args.Variable);
	if(!ConfigManager.hasOwnProperty(symbol)) {
		CGMZ_Utils.reportError(`Could not find option with symbol ${symbol} (attempt from Read Option Plugin Command).`, "[CGMZ] Options", "Double check that the symbol matches an option in the plugin parameters, including capitalization.");
		return;
	}
	if(switchId) {
		$gameSwitches.setValue(switchId, ConfigManager[symbol]);
	} else {
		$gameVariables.setValue(variableId, ConfigManager[symbol]);
	}
	ConfigManager.save();
};
//-----------------------------------------------------------------------------
// Plugin Command - Set Option
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandOptionsSetOption = function(args) {
	const symbol = args["Option Symbol"];
	const switchId = Number(args.Switch);
	const variableId = Number(args.Variable);
	if(!ConfigManager.hasOwnProperty(symbol)) {
		CGMZ_Utils.reportError(`Could not find option with symbol ${symbol} (attempt from Set Option Plugin Command).`, "[CGMZ] Options", "Double check that the symbol matches an option in the plugin parameters, including capitalization.");
		return;
	}
	if(switchId) {
		ConfigManager[symbol] = $gameSwitches.value(switchId);
	} else {
		ConfigManager[symbol] = $gameVariables.value(variableId);
	}
	ConfigManager.save();
};
//=============================================================================
// Scene_Options
//-----------------------------------------------------------------------------
// Create category window, handle new options window
//=============================================================================
//-----------------------------------------------------------------------------
// Also create category window
//-----------------------------------------------------------------------------
const alias_CGMZOptions_SceneOptions_create = Scene_Options.prototype.create;
Scene_Options.prototype.create = function() {
	alias_CGMZOptions_SceneOptions_create.call(this);
	if(CGMZ.Options.Categories.length > 1) {
		this.CGMZ_createCategoryWindow();
		this._optionsWindow.deselect();
		this._optionsWindow.deactivate();
		this._optionsWindow.setHandler('cancel', this.CGMZ_onOptionsCancel.bind(this));
		this._cgmz_categoryWindow.setOptionsWindow(this._optionsWindow);
	} else {
		this._optionsWindow.setCategory(CGMZ.Options.Categories[0]);
	}
};
//-----------------------------------------------------------------------------
// Create category window
//-----------------------------------------------------------------------------
Scene_Options.prototype.CGMZ_createCategoryWindow = function() {
	const rect = this.CGMZ_categoryWindowRect();
    this._cgmz_categoryWindow = new CGMZ_Window_OptionsCategory(rect);
	this._cgmz_categoryWindow.setHandler('cancel', this.popScene.bind(this));
	this._cgmz_categoryWindow.setHandler('ok', this.CGMZ_onCategoryOk.bind(this));
    this.addWindow(this._cgmz_categoryWindow);
};
//-----------------------------------------------------------------------------
// Get the category window rect
//-----------------------------------------------------------------------------
Scene_Options.prototype.CGMZ_categoryWindowRect = function() {
	const y = this.hasTouchUI() ? this.buttonAreaHeight() + CGMZ.Options.WindowYOffset : CGMZ.Options.WindowYOffset;
	const height = this.calcWindowHeight(CGMZ.Options.CategoryRows, true);
	const width = Graphics.boxWidth * (CGMZ.Options.WindowWidth / 100.0);
	const x = ((Graphics.boxWidth - width) / 2) + CGMZ.Options.WindowXOffset;
    return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Adjust the options window rect
//-----------------------------------------------------------------------------
const alias_CGMZOptions_SceneOptions_optionsWindowRect = Scene_Options.prototype.optionsWindowRect;
Scene_Options.prototype.optionsWindowRect = function() {
	const y = this.hasTouchUI() ? this.buttonAreaHeight() : 0;
	const height = (CGMZ.Options.Categories.length > 1) ? this.calcWindowHeight(CGMZ.Options.CategoryRows, true) : 0;
	const rect = alias_CGMZOptions_SceneOptions_optionsWindowRect.call(this);
	rect.width = Graphics.boxWidth * (CGMZ.Options.WindowWidth / 100.0);
	rect.x = ((Graphics.boxWidth - rect.width) / 2) + CGMZ.Options.WindowXOffset;
	rect.y = y + height + CGMZ.Options.WindowYOffset;
	rect.height = Graphics.boxHeight - rect.y + CGMZ.Options.WindowHeightModifier;
    return rect;
};
//-----------------------------------------------------------------------------
// Processing for category ok input
//-----------------------------------------------------------------------------
Scene_Options.prototype.CGMZ_onCategoryOk = function() {
	this._cgmz_categoryWindow.deactivate();
	this._optionsWindow.activate();
	this._optionsWindow.select(0);
};
//-----------------------------------------------------------------------------
// Processing for options cancel input
//-----------------------------------------------------------------------------
Scene_Options.prototype.CGMZ_onOptionsCancel = function() {
	this._optionsWindow.select(0);
	this._optionsWindow.ensureCursorVisible();
	this._optionsWindow.deselect();
	this._optionsWindow.deactivate();
	this._cgmz_categoryWindow.activate();
};
//-----------------------------------------------------------------------------
// Get the scene's custom scene background
// No need to check if Scene Backgrounds is installed because this custom func
// is only called by that plugin
//-----------------------------------------------------------------------------
Scene_Options.prototype.CGMZ_getCustomSceneBackground = function() {
	return $cgmzTemp.sceneBackgroundPresets[CGMZ.Options.SceneBackground];
};
//-----------------------------------------------------------------------------
// Get controls window preset for [CGMZ] Controls Window
// No need to check if Controls Window is installed because this custom func
// is only called by that plugin
//-----------------------------------------------------------------------------
Scene_Options.prototype.CGMZ_getControlsWindowOtherPreset = function() {
	return $cgmzTemp.getControlWindowPresetOther(CGMZ.Options.ControlsWindow);
};
//-----------------------------------------------------------------------------
// Check if should make room for Touch UI
//-----------------------------------------------------------------------------
Scene_Options.prototype.hasTouchUI = function() {
	return !CGMZ.Options.DisableTouchUISpace;
};
//=============================================================================
// CGMZ_Window_OptionsCategory
//-----------------------------------------------------------------------------
// Selectable window for choosing an option category
//=============================================================================
function CGMZ_Window_OptionsCategory(rect) {
    this.initialize.apply(this, arguments);
}
CGMZ_Window_OptionsCategory.prototype = Object.create(Window_Selectable.prototype);
CGMZ_Window_OptionsCategory.prototype.constructor = CGMZ_Window_OptionsCategory;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Window_OptionsCategory.prototype.initialize = function(rect) {
    Window_Selectable.prototype.initialize.call(this, rect);
	if(Imported.CGMZ_WindowSettings && CGMZ.Options.CategoryWindowSettings) this.CGMZ_setWindowSettings(CGMZ.Options.CategoryWindowSettings);
	if(Imported.CGMZ_WindowBackgrounds && CGMZ.Options.CategoryWindowBackground) this.CGMZ_setWindowBackground(CGMZ.Options.CategoryWindowBackground);
	this.refresh();
	this.activate();
	this.select(0);
};
//-----------------------------------------------------------------------------
// Max items
//-----------------------------------------------------------------------------
CGMZ_Window_OptionsCategory.prototype.maxItems = function() {
    return this._data ? this._data.length : 1;
};
//-----------------------------------------------------------------------------
// Max columns
//-----------------------------------------------------------------------------
CGMZ_Window_OptionsCategory.prototype.maxCols = function() {
    return CGMZ.Options.CategoryColumns;
};
//-----------------------------------------------------------------------------
// Current item
//-----------------------------------------------------------------------------
CGMZ_Window_OptionsCategory.prototype.item = function() {
    return this._data[this.index()];
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Window_OptionsCategory.prototype.refresh = function() {
    this.makeItemList();
    Window_Selectable.prototype.refresh.call(this);
};
//-----------------------------------------------------------------------------
// Make item list
//-----------------------------------------------------------------------------
CGMZ_Window_OptionsCategory.prototype.makeItemList = function() {
	this._data = CGMZ.Options.Categories;
};
//-----------------------------------------------------------------------------
// Get the command icon
//-----------------------------------------------------------------------------
CGMZ_Window_OptionsCategory.prototype.CGMZ_icon = function(index) {
	const category = this._data[index];
	return category?.icon;
};
//-----------------------------------------------------------------------------
// Get selectable cgmz options
//-----------------------------------------------------------------------------
CGMZ_Window_OptionsCategory.prototype.CGMZ_getSelectableCGMZOptions = function(index) {
	const category = this._data[index];
	if(category && category.img) {
		return {bg: category.img};
	}
	return Window_Selectable.prototype.CGMZ_getSelectableCGMZOptions.call(this, index);
};
//-----------------------------------------------------------------------------
// Draw item in list
//-----------------------------------------------------------------------------
CGMZ_Window_OptionsCategory.prototype.drawItem = function(index) {
    const category = this._data[index];
    const rect = this.itemRectWithPadding(index);
	if(category?.icon) {
		const iconX = (CGMZ.Options.CategoryIconAlignment === 'left') ? rect.x : rect.x + rect.width - ImageManager.iconWidth;
		this.drawIcon(category?.icon, iconX, rect.y + 2);
		rect.x += (ImageManager.iconWidth + 2) * (CGMZ.Options.CategoryIconAlignment === 'left');
		rect.width -= ImageManager.iconWidth + 2;
	}
    this.CGMZ_drawTextLine(category.name, rect.x, rect.y, rect.width, CGMZ.Options.CategoryAlignment);
};
//-----------------------------------------------------------------------------
// Set options window
//-----------------------------------------------------------------------------
CGMZ_Window_OptionsCategory.prototype.setOptionsWindow = function(optionsWindow) {
    this._optionsWindow = optionsWindow;
    this.callUpdateHelp();
};
//-----------------------------------------------------------------------------
// See if can update options window
//-----------------------------------------------------------------------------
CGMZ_Window_OptionsCategory.prototype.callUpdateHelp = function() {
    if(this.active && this._optionsWindow) {
		this._optionsWindow.setCategory(this.item());
	}
};
//=============================================================================
// Window_Options
//-----------------------------------------------------------------------------
// Command window for manipulation game options
//=============================================================================
//-----------------------------------------------------------------------------
// Initialize category to nothing
//-----------------------------------------------------------------------------
const alias_CGMZOptions_WindowOptions_initialize = Window_Options.prototype.initialize;
Window_Options.prototype.initialize = function(rect) {
	alias_CGMZOptions_WindowOptions_initialize.call(this, rect);
	if(Imported.CGMZ_WindowSettings && CGMZ.Options.OptionsWindowSettings) this.CGMZ_setWindowSettings(CGMZ.Options.OptionsWindowSettings);
	this._cgmz_category = null;
	this._cursorDirection = 'down';
};
//-----------------------------------------------------------------------------
// Do not allow select of invalid commands
//-----------------------------------------------------------------------------
const alias_CGMZOptions_WindowOptions_onTouchSelect = Window_Options.prototype.onTouchSelect;
Window_Options.prototype.onTouchSelect = function(trigger) {
    this._doubleTouch = false;
    if(this.isCursorMovable()) {
        const lastIndex = this.index();
        const hitIndex = this.hitIndex();
        if(hitIndex >= 0 && !this.CGMZ_isValidCommand(hitIndex)) {
			return;
        }
    }
	alias_CGMZOptions_WindowOptions_onTouchSelect.call(this, trigger);
};
//-----------------------------------------------------------------------------
// Set cursor direction before select
//-----------------------------------------------------------------------------
const alias_CGMZOptions_WindowOptions_cursorDown = Window_Options.prototype.cursorDown;
Window_Options.prototype.cursorDown = function(wrap) {
	this._cursorDirection = 'down';
    alias_CGMZOptions_WindowOptions_cursorDown.call(this, wrap);
};
//-----------------------------------------------------------------------------
// Set cursor direction before select
//-----------------------------------------------------------------------------
const alias_CGMZOptions_WindowOptions_cursorUp = Window_Options.prototype.cursorUp;
Window_Options.prototype.cursorUp = function(wrap) {
	this._cursorDirection = 'up';
    alias_CGMZOptions_WindowOptions_cursorUp.call(this, wrap);
};
//-----------------------------------------------------------------------------
// Set index to next proper index (cannot select header, blank line, custom space)
//-----------------------------------------------------------------------------
const alias_CGMZOptions_WindowOptions_select = Window_Options.prototype.select;
Window_Options.prototype.select = function(index) {
	if(!this._list || this._list.length === 0 || index < 0) {
		alias_CGMZOptions_WindowOptions_select.call(this, -1);
		return;
	}
    while(!this.CGMZ_isValidCommand(index)) {
		if(this._cursorDirection === 'down') {
			index++;
			if(index >= this._list.length) index = 0;
		} else {
			index--;
			if(index < 0) index = this._list.length - 1;
		}
	}
	alias_CGMZOptions_WindowOptions_select.call(this, index);
};
//-----------------------------------------------------------------------------
// Check if valid command for selection
//-----------------------------------------------------------------------------
Window_Options.prototype.CGMZ_isValidCommand = function(index) {
	if(index < 0 || index >= this._list.length) return false;
	return !!this._list[index].symbol;
};
//-----------------------------------------------------------------------------
// Change height by index
//-----------------------------------------------------------------------------
Window_Options.prototype.itemHeight = function(index = -1) {
	if(index >= 0 && this._list && this._list[index] && this._list[index].ext && this._list[index].ext.type) {
		return (this._list[index].ext.type === 'Custom Space') ? CGMZ.Options.CustomSpace : Window_Selectable.prototype.itemHeight.call(this);
	}
	return Window_Selectable.prototype.itemHeight.call(this);
};
//-----------------------------------------------------------------------------
// Get item height of previous entries
//-----------------------------------------------------------------------------
Window_Options.prototype.itemHeightOfIndex = function(index) {
	if(index < 0) return 0;
	let height = 0;
	for(i = 0; i < index; i++) {
		height += this.itemHeight(i);
	}
	return height;
};
//-----------------------------------------------------------------------------
// Get contents height
//-----------------------------------------------------------------------------
Window_Options.prototype.contentsHeight = function() {
	return this.innerHeight + this.itemHeight(-1) * 4;
};
//-----------------------------------------------------------------------------
// Get overall height
//-----------------------------------------------------------------------------
Window_Options.prototype.overallHeight = function() {
	return this.itemHeightOfIndex(this.maxItems());
};
//-----------------------------------------------------------------------------
// Get top row
//-----------------------------------------------------------------------------
Window_Options.prototype.topRow = function() {
	if(this.scrollY() === 0) return 0;
	for(let i = 0; i < this.maxItems(); i++) {
		if(this.itemHeightOfIndex(i+1) > this.scrollY()) {
			return i;
		}
	}
	// If above fails, fall back to a rough estimate of the top row
	return this.itemHeightOfIndex(this.index()) - this.innerHeight;
};
//-----------------------------------------------------------------------------
// Get item rect
//-----------------------------------------------------------------------------
Window_Options.prototype.itemRect = function(index) {
	const maxCols = this.maxCols();
	const itemWidth = this.itemWidth(index);
	const itemHeight = this.itemHeight(index);
	const colSpacing = this.colSpacing();
	const rowSpacing = this.rowSpacing();
	const col = index % maxCols;
	const row = Math.floor(index / maxCols);
	const x = col * itemWidth + colSpacing / 2 - this.scrollBaseX();
	const y = this.itemHeightOfIndex(index) + rowSpacing / 2 - this.scrollBaseY();
	const width = itemWidth - colSpacing;
	const height = itemHeight - rowSpacing;
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Ensure Cursor is Visible
//-----------------------------------------------------------------------------
Window_Options.prototype.ensureCursorVisible = function(smooth) {
	if(this.index() === this._cgmz_firstOption) {
		this.smoothScrollTo(0, 0);
	} else if(this.innerHeight > 0 && this.row() >= 0) {
		const scrollY = this.scrollY();
		const itemTop = this.itemHeightOfIndex(this.index());
		const itemBottom = itemTop + this.itemHeight(this.index());
		const scrollMin = itemBottom - this.innerHeight;
		if (scrollY > itemTop) {
			if (smooth) {
				this.smoothScrollTo(0, itemTop);
			} else {
				this.scrollTo(0, itemTop);
			}
		} else if (scrollY < scrollMin) {
			if (smooth) {
				this.smoothScrollTo(0, scrollMin);
			} else {
				this.scrollTo(0, scrollMin);
			}
		}
	}
};
//-----------------------------------------------------------------------------
// Change command list by category
//-----------------------------------------------------------------------------
Window_Options.prototype.setCategory = function(category) {
	if(this._cgmz_category && this._cgmz_category.id === category.id) return;
    this._cgmz_category = category;
	if(Imported.CGMZ_WindowBackgrounds) this.setCategoryWindowBackground();
	this.refresh();
};
//-----------------------------------------------------------------------------
// Set the category window background
//-----------------------------------------------------------------------------
Window_Options.prototype.setCategoryWindowBackground = function() {
	this.CGMZ_setWindowBackground(this._cgmz_category?.windowBackground);
};
//-----------------------------------------------------------------------------
// Change command list by category
//-----------------------------------------------------------------------------
const alias_CGMZOptions_WindowOptions_makeCommandList = Window_Options.prototype.makeCommandList;
Window_Options.prototype.makeCommandList = function() {
	if(this._cgmz_category) {
		this.CGMZ_makeCommandList();
	} else {
		alias_CGMZOptions_WindowOptions_makeCommandList.call(this);
	}
};
//-----------------------------------------------------------------------------
// Make command list
//-----------------------------------------------------------------------------
Window_Options.prototype.CGMZ_makeCommandList = function() {
	let opt = 0;
	let header = 0;
	let textLine = 0;
	for(const info of this._cgmz_category.display) {
		switch(info) {
			case 'Option': this.CGMZ_addOption(opt++); break;
			case 'Header': this.CGMZ_addHeader(header++); break;
			case 'Text Line': this.CGMZ_addTextLine(textLine++); break;
			case 'Blank Line': this.CGMZ_addBlankLine(); break;
			case 'Custom Space': this.CGMZ_addCustomSpace(); break;
		}
	}
};
//-----------------------------------------------------------------------------
// Add an option
//-----------------------------------------------------------------------------
Window_Options.prototype.CGMZ_addOption = function(index) {
	if(index === 0) this._cgmz_firstOption = this._list.length;
	const settings = this.CGMZ_makeOptionSettings(index);
	const ext = {type: 'Option', index: index, settings: settings, optionType: this._cgmz_category.options[index].type};
	const symbol = this._cgmz_category.options[index].symbol;
	const name = this.CGMZ_makeOptionName(index, symbol);
	this.addCommand(name, symbol, true, ext);
};
//-----------------------------------------------------------------------------
// Make the settings of an option
//-----------------------------------------------------------------------------
Window_Options.prototype.CGMZ_makeOptionSettings = function(index) {
	let s = {};
	const opt = this._cgmz_category.options[index];
	switch(opt.type) {
		case 'Toggle': s = opt.toggleSettings; break
		case 'Number': s = opt.numSettings; break;
		case 'JS': s = opt.jsSettings; break;
	}
	return s;
};
//-----------------------------------------------------------------------------
// Make the name of an option
//-----------------------------------------------------------------------------
Window_Options.prototype.CGMZ_makeOptionName = function(index, symbol) {
	const defaultSymbols = this.CGMZ_getDefaultSymbols();
	if(defaultSymbols.includes(symbol) && CGMZ.Options.DrawDefaultNames) {
		return this.CGMZ_getDefaultName(symbol);
	} else {
		return this._cgmz_category.options[index].name;
	}
};
//-----------------------------------------------------------------------------
// Get default symbols
//-----------------------------------------------------------------------------
Window_Options.prototype.CGMZ_getDefaultSymbols = function() {
	return ["bgmVolume", "bgsVolume", "meVolume", "seVolume", "alwaysDash", "commandRemember", "touchUI"];
};
//-----------------------------------------------------------------------------
// Get default name for a symbol
//-----------------------------------------------------------------------------
Window_Options.prototype.CGMZ_getDefaultName = function(symbol) {
	switch(symbol) {
		case 'bgmVolume': return TextManager.bgmVolume;
		case 'bgsVolume': return TextManager.bgsVolume;
		case 'meVolume': return TextManager.meVolume;
		case 'seVolume': return TextManager.seVolume;
		case 'alwaysDash': return TextManager.alwaysDash;
		case 'commandRemember': return TextManager.commandRemember;
		case 'touchUI': return TextManager.touchUI;
	}
	return "Unknown";
};
//-----------------------------------------------------------------------------
// Add a header
//-----------------------------------------------------------------------------
Window_Options.prototype.CGMZ_addHeader = function(index) {
	const ext = {type: 'Header', index: index};
	this.addCommand(null, null, true, ext);
};
//-----------------------------------------------------------------------------
// Add a text line
//-----------------------------------------------------------------------------
Window_Options.prototype.CGMZ_addTextLine = function(index) {
	const ext = {type: 'Text Line', index: index};
	this.addCommand(null, null, true, ext);
};
//-----------------------------------------------------------------------------
// Add a blank line
//-----------------------------------------------------------------------------
Window_Options.prototype.CGMZ_addBlankLine = function() {
	const ext = {type: 'Blank Line'};
	this.addCommand(null, null, false, ext);
};
//-----------------------------------------------------------------------------
// Add a custom space
//-----------------------------------------------------------------------------
Window_Options.prototype.CGMZ_addCustomSpace = function() {
	const ext = {type: 'Custom Space'};
	this.addCommand(null, null, false, ext);
};
//-----------------------------------------------------------------------------
// Get the status text
//-----------------------------------------------------------------------------
const alias_CGMZOptions_WindowOptions_statusText = Window_Options.prototype.statusText;
Window_Options.prototype.statusText = function(index) {
	const ext = this._list[index].ext;
	if(ext?.type === 'Option') {
		const symbol = this.commandSymbol(index);
		const value = this.getConfigValue(symbol);
		const settings = ext.settings;
		if(settings.onText && settings.offText) {
			return (value) ? settings.onText : settings.offText;
		} else if(settings.numString) {
			return settings.numString.replace("%num", value);
		} else if(settings.jsText) {
			const fn = new Function(settings.jsText);
			return fn.call(this, symbol, value);
		}
	}
    return alias_CGMZOptions_WindowOptions_statusText.call(this, index);
};
//-----------------------------------------------------------------------------
// Route through drawing item by types
//-----------------------------------------------------------------------------
const alias_CGMZOptions_WindowOptions_drawItem = Window_Options.prototype.drawItem
Window_Options.prototype.drawItem = function(index) {
	if(!this._list[index]) return;
	const ext = this._list[index].ext;
	if(!ext?.type) return;
	switch(ext.type) {
		case 'Option': alias_CGMZOptions_WindowOptions_drawItem.call(this, index); break;
		case 'Header': this.drawOptionHeader(index); break;
		case 'Text Line': this.drawOptionTextLine(index); break;
		case 'Blank Line':
		case 'Custom Space': break;
		default: alias_CGMZOptions_WindowOptions_drawItem.call(this, index);
	}
};
//-----------------------------------------------------------------------------
// Do not draw selectable background if item is not of type option
//-----------------------------------------------------------------------------
Window_Options.prototype.drawItemBackground = function(index) {
	if(!this._list[index]) return;
    const ext = this._list[index].ext;
	if(ext?.type === 'Option') {
		Window_Command.prototype.drawItemBackground.call(this, index);
	}
};
//-----------------------------------------------------------------------------
// Draw option header
//-----------------------------------------------------------------------------
Window_Options.prototype.drawOptionHeader = function(index) {
    const headerIndex = this._list[index].ext.index;
	const header = this._cgmz_category.headers[headerIndex];
	const rect = this.itemLineRect(index);
	this.CGMZ_drawHeader(header, rect.y);
};
//-----------------------------------------------------------------------------
// Draw option header
//-----------------------------------------------------------------------------
Window_Options.prototype.drawOptionTextLine = function(index) {
    const textLineIndex = this._list[index].ext.index;
	const textLine = this._cgmz_category.textLines[textLineIndex];
	const rect = this.itemLineRect(index);
	this.CGMZ_drawTextLine(textLine, rect.x, rect.y, rect.width, 'left');
};
//-----------------------------------------------------------------------------
// Change status width to plugin parameter setting
//-----------------------------------------------------------------------------
const alias_CGMZOptions_WindowOptions_statusWidth = Window_Options.prototype.statusWidth;
Window_Options.prototype.statusWidth = function() {
	const oldReturn = alias_CGMZOptions_WindowOptions_statusWidth.call(this);
    return CGMZ.Options.StatusWidth || oldReturn;
};
//-----------------------------------------------------------------------------
// Change volume offset to plugin parameter setting
//-----------------------------------------------------------------------------
const alias_CGMZOptions_WindowOptions_volumeOffset = Window_Options.prototype.volumeOffset;
Window_Options.prototype.volumeOffset = function() {
	const oldReturn = alias_CGMZOptions_WindowOptions_volumeOffset.call(this);
    return CGMZ.Options.VolumeOffset || oldReturn;
};
//-----------------------------------------------------------------------------
// If custom option, use custom handling for OK
//-----------------------------------------------------------------------------
const alias_CGMZOptions_WindowOptions_processOk = Window_Options.prototype.processOk;
Window_Options.prototype.processOk = function() {
    const index = this.index();
    const symbol = this.commandSymbol(index);
	const defaultSymbols = this.CGMZ_getDefaultSymbols();
	if(defaultSymbols.includes(symbol)) {
		alias_CGMZOptions_WindowOptions_processOk.call(this);
	} else {
		this.CGMZ_processOk(index, symbol);
	}
};
//-----------------------------------------------------------------------------
// If custom option, use custom handling for cursor right
//-----------------------------------------------------------------------------
const alias_CGMZOptions_WindowOptions_cursorRight = Window_Options.prototype.cursorRight;
Window_Options.prototype.cursorRight = function() {
    const index = this.index();
    const symbol = this.commandSymbol(index);
	const defaultSymbols = this.CGMZ_getDefaultSymbols();
	if(defaultSymbols.includes(symbol)) {
		alias_CGMZOptions_WindowOptions_cursorRight.call(this);
	} else {
		this.CGMZ_cursorRight(index, symbol);
	}
};
//-----------------------------------------------------------------------------
// If custom option, use custom handling for cursor right
//-----------------------------------------------------------------------------
const alias_CGMZOptions_WindowOptions_cursorLeft = Window_Options.prototype.cursorLeft;
Window_Options.prototype.cursorLeft = function() {
    const index = this.index();
    const symbol = this.commandSymbol(index);
	const defaultSymbols = this.CGMZ_getDefaultSymbols();
	if(defaultSymbols.includes(symbol)) {
		alias_CGMZOptions_WindowOptions_cursorLeft.call(this);
	} else {
		this.CGMZ_cursorLeft(index, symbol);
	}
};
//-----------------------------------------------------------------------------
// Handle custom option ok input
//-----------------------------------------------------------------------------
Window_Options.prototype.CGMZ_processOk = function(index, symbol) {
    if(!this._list[index]) return;
	const ext = this._list[index].ext;
	if(!ext?.type) return;
	switch(ext.optionType) {
		case 'Toggle': this.changeValue(symbol, !this.getConfigValue(symbol)); break;
		case 'Number': this.CGMZ_changeNumValue(symbol, ext, 'ok'); break;
		case 'JS': const fn = new Function(ext.settings.ok); fn.call(this, symbol); break;
	}
};
//-----------------------------------------------------------------------------
// Handle custom option right input
//-----------------------------------------------------------------------------
Window_Options.prototype.CGMZ_cursorRight = function(index, symbol) {
    if(!this._list[index]) return;
	const ext = this._list[index].ext;
	if(!ext?.type) return;
	switch(ext.optionType) {
		case 'Toggle': this.changeValue(symbol, true); break;
		case 'Number': this.CGMZ_changeNumValue(symbol, ext, 'right'); break;
		case 'JS': const fn = new Function(ext.settings.right); fn.call(this, symbol); break;
	}
};
//-----------------------------------------------------------------------------
// Handle custom option left input
//-----------------------------------------------------------------------------
Window_Options.prototype.CGMZ_cursorLeft = function(index, symbol) {
    if(!this._list[index]) return;
	const ext = this._list[index].ext;
	if(!ext?.type) return;
	switch(ext.optionType) {
		case 'Toggle': this.changeValue(symbol, false); break;
		case 'Number': this.CGMZ_changeNumValue(symbol, ext, 'left'); break;
		case 'JS': const fn = new Function(ext.settings.left); fn.call(this, symbol); break;
	}
};
//-----------------------------------------------------------------------------
// Handle actually changing a custom number value - needs to account for
// arbitrary min/max and change amount as well as wrapping for OK input type
//-----------------------------------------------------------------------------
Window_Options.prototype.CGMZ_changeNumValue = function(symbol, ext, input) {
    const wrap = (input === 'ok');
	const min = ext?.settings?.numMin;
	const max = ext?.settings?.numMax;
	const amount = ext?.settings?.numChange;
	const direction = (input === 'left') ? -1 : 1;
	const currentValue = this.getConfigValue(symbol);
	const newValue = currentValue + (amount * direction);
	if(!wrap) {
		this.changeValue(symbol, newValue.clamp(min, max));
	} else {
		const wrapValue = (newValue > max) ? min : (newValue < min) ? max : newValue;
		this.changeValue(symbol, wrapValue);
	}
};
//=============================================================================
// ConfigManager
//-----------------------------------------------------------------------------
// Manage new options
//=============================================================================
//-----------------------------------------------------------------------------
// Fullscreen option
//-----------------------------------------------------------------------------
ConfigManager._fullscreen = Graphics._isFullScreen();
Object.defineProperty(ConfigManager, "fullscreen", {
    get: function() {
        return this._fullscreen;
    },
    set: function(value) {
		const valueChanged = this._fullscreen !== value;
		this._fullscreen = value;
		if(this._isLoaded && valueChanged) {
			if(SceneManager._scene.constructor.name === 'Scene_Options') {
				SceneManager._scene._optionsWindow.refresh();
			}
			if(CGMZ.Options.UsingFullscreen) {
				if(value) {
					Graphics._requestFullScreen();
				} else {
					Graphics._cancelFullScreen();
				}
			}
		}
    },
    configurable: true
});
//-----------------------------------------------------------------------------
// Stretch Enabled option
//-----------------------------------------------------------------------------
ConfigManager._stretch = Graphics._defaultStretchMode();
Object.defineProperty(ConfigManager, "stretch", {
    get: function() {
        return this._stretch;
    },
    set: function(value) {
		const needsSwitched = (value !== Graphics._stretchEnabled);
		this._stretch = value;
		if(CGMZ.Options.UsingStretch) {
			if(SceneManager._scene.constructor.name === 'Scene_Options') {
				SceneManager._scene._optionsWindow.refresh();
			}
		}
		if(needsSwitched && CGMZ.Options.UsingStretch) {
			if(needsSwitched) {
				Graphics._switchStretchMode();
				this._stretch = value;
			}
		}
    },
    configurable: true
});
//-----------------------------------------------------------------------------
// Master Volume
//-----------------------------------------------------------------------------
Object.defineProperty(ConfigManager, "masterVolume", {
    get: function() {
        return AudioManager._masterVolume;
    },
    set: function(value) {
        AudioManager.masterVolume = value;
    },
    configurable: true
});
//-----------------------------------------------------------------------------
// Declare custom properties 
//-----------------------------------------------------------------------------
for(const category of CGMZ.Options.Categories) {
	for(const opt of category.options) {
		if(CGMZ.Options.SpecialSymbolList.includes(opt.symbol)) continue;
		let defaultValue;
		switch(opt.type) {
			case 'Toggle': defaultValue = opt.toggleSettings.init; break;
			case 'Number': defaultValue = opt.numSettings.init; break;
			case 'JS': const fn = new Function(opt.jsSettings.init); defaultValue = fn.call(ConfigManager); break;
		}
		ConfigManager[opt.symbol] = defaultValue;
	}
}
//-----------------------------------------------------------------------------
// Add new option data to config
//-----------------------------------------------------------------------------
const alias_CGMZOptions_ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function() {
    const config = alias_CGMZOptions_ConfigManager_makeData.call(this);
    config.fullscreen = this.fullscreen;
	config.stretch = this.stretch;
	config.masterVolume = this.masterVolume;
	this.CGMZ_makeCustomOptionData(config);
    return config;
};
//-----------------------------------------------------------------------------
// Add custom options to data
//-----------------------------------------------------------------------------
ConfigManager.CGMZ_makeCustomOptionData = function(config) {
    for(const category of CGMZ.Options.Categories) {
		for(const opt of category.options) {
			if(CGMZ.Options.SpecialSymbolList.includes(opt.symbol)) continue;
			config[opt.symbol] = this[opt.symbol];
		}
	}
    return config;
};
//-----------------------------------------------------------------------------
// Apply new option data from config
//-----------------------------------------------------------------------------
const alias_CGMZOptions_ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
	alias_CGMZOptions_ConfigManager_applyData.call(this, config);
    this.fullscreen = this.readFlag(config, "fullscreen", false);
	this.stretch = this.readFlag(config, "stretch", true);
	this.masterVolume = this.readVolume(config, "masterVolume");
	this.CGMZ_applyCustomOptionData(config);
};
//-----------------------------------------------------------------------------
// Apply custom options
//-----------------------------------------------------------------------------
ConfigManager.CGMZ_applyCustomOptionData = function(config) {
	for(const category of CGMZ.Options.Categories) {
		for(const opt of category.options) {
			if(CGMZ.Options.SpecialSymbolList.includes(opt.symbol)) continue;
			switch(opt.type) {
				case 'Toggle': this[opt.symbol] = this.readFlag(config, opt.symbol, opt.toggleSettings.init); break;
				case 'Number': this[opt.symbol] = this.CGMZ_readNumber(config, opt.symbol, opt.numSettings.init); break;
				case 'JS': this[opt.symbol] = this.CGMZ_readJS(config, opt.symbol, opt.jsSettings.init); break;
			}
		}
	}
};
//-----------------------------------------------------------------------------
// Read a CGMZ number config option
//-----------------------------------------------------------------------------
ConfigManager.CGMZ_readNumber = function(config, name, defaultValue = 100) {
    if(name in config) {
        return Number(config[name]);
    } else {
        return defaultValue;
    }
};
//-----------------------------------------------------------------------------
// Read a CGMZ js config option
//-----------------------------------------------------------------------------
ConfigManager.CGMZ_readJS = function(config, name, defaultValue = 'return false') {
    if(name in config) {
        return config[name];
    } else {
		const fn = new Function(defaultValue);
        return fn.call(this);
    }
};
//=============================================================================
// AudioManager
//-----------------------------------------------------------------------------
// Add master volume
//=============================================================================
//-----------------------------------------------------------------------------
// Add master volume setting
//-----------------------------------------------------------------------------
AudioManager._masterVolume = 100;
Object.defineProperty(AudioManager, "masterVolume", {
    get: function() {
        return this._masterVolume;
    },
    set: function(value) {
        this._masterVolume = value;
        this.updateBgmParameters(this._currentBgm);
		this.updateBgsParameters(this._currentBgs);
		this.updateMeParameters(this._currentMe);
    },
    configurable: true
});
//-----------------------------------------------------------------------------
// Also make master volume affect config volume
//-----------------------------------------------------------------------------
const alias_CGMZOptions_AudioManager_updateBufferParameters = AudioManager.updateBufferParameters;
AudioManager.updateBufferParameters = function(buffer, configVolume, audio) {
	const newConfigVolume = Math.round(configVolume * (this.masterVolume / 100.0));
	alias_CGMZOptions_AudioManager_updateBufferParameters.call(this, buffer, newConfigVolume, audio);
};
//=============================================================================
// Graphics
//-----------------------------------------------------------------------------
// Handle new options
//=============================================================================
//-----------------------------------------------------------------------------
// Also update config if using fullscreen option
//-----------------------------------------------------------------------------
const alias_CGMZOptions_Graphics_requestFullScreen = Graphics._requestFullScreen;
Graphics._requestFullScreen = function() {
    alias_CGMZOptions_Graphics_requestFullScreen.call(this);
	if(CGMZ.Options.UsingFullscreen) {
		ConfigManager.fullscreen = true;
		ConfigManager.save();
	}
};
//-----------------------------------------------------------------------------
// Also update config if using fullscreen option
//-----------------------------------------------------------------------------
const alias_CGMZOptions_Graphics_cancelFullScreen = Graphics._cancelFullScreen;
Graphics._cancelFullScreen = function() {
    alias_CGMZOptions_Graphics_cancelFullScreen.call(this);
	if(CGMZ.Options.UsingFullscreen) {
		ConfigManager.fullscreen = false;
		ConfigManager.save();
	}
};
//-----------------------------------------------------------------------------
// Check if using stretch option, if so use config manager as default
//-----------------------------------------------------------------------------
const alias_CGMZOptions_Graphics_defaultStretchMode = Graphics._defaultStretchMode;
Graphics._defaultStretchMode = function() {
	if(CGMZ.Options.UsingStretch) return ConfigManager.stretch;
    return alias_CGMZOptions_Graphics_defaultStretchMode.call(this);
};
//-----------------------------------------------------------------------------
// Also update config if using stretch option
//-----------------------------------------------------------------------------
const alias_CGMZOptions_Graphics_switchStretchMode = Graphics._switchStretchMode;
Graphics._switchStretchMode = function() {
	alias_CGMZOptions_Graphics_switchStretchMode.call(this);
	if(CGMZ.Options.UsingStretch && ConfigManager.stretch !== this._stretchEnabled) {
		ConfigManager.stretch = this._stretchEnabled;
		ConfigManager.save();
	}
};
//=============================================================================
// Scene_Boot
//-----------------------------------------------------------------------------
// Handle some options on boot
//=============================================================================
//-----------------------------------------------------------------------------
// Try to set fullscreen if set up
//-----------------------------------------------------------------------------
const alias_CGMZOptions_SceneBoot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
	alias_CGMZOptions_SceneBoot_start.apply(this, arguments);
	if(CGMZ.Options.UsingFullscreen && ConfigManager.fullscreen) {
		Graphics._requestFullScreen();
	}
};