/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/mousecursor/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc Use a sprite as the mouse cursor
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
 * Made for RPG Maker MZ 1.10.0
 * ----------------------------------------------------------------------------
 * Description: Allows you to use a sprite as the mouse cursor. You can swap
 * between cursors as needed and even go back to the standard mouse cursor if
 * needed.
 * ----------------------------------------------------------------------------
 * Documentation:
 * ---------------------------Quick Start Guide--------------------------------
 * To get started using this plugin, follow the below steps:
 *
 * 1) Set up your Mouse Cursor properties in the Cursors parameter.
 *
 * 2) Set the Default Cursor to one of your mouse cursors
 *
 * 3) If desired, change between mouse cursors using the Set Cursor plugin
 *    command. You can also clear the mouse cursor if desired with the Clear
 *    cursor plugin command.
 * ----------------------------Plugin Commands---------------------------------
 * This plugin includes the following plugin commands:
 *
 * • Set Cursor
 * Sets the mouse cursor to a custom cursor by id
 *
 * • Clear Cursor
 * Clears any custom cursor and uses the default mouse cursor. Note that this
 * is NOT the default cursor parameter, but the actual real mouse cursor.
 * ------------------------------Saved Games-----------------------------------
 * This plugin is fully compatible with saved games. This means you can:
 *
 * ✓ Add this plugin to a saved game and it will work as expected
 * ✓ Change any plugin params and changes will be reflected in saved games
 * ✓ Remove the plugin with no issue to save data
 * --------------------------------Filename------------------------------------
 * The filename for this plugin MUST remain CGMZ_MouseCursor.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 *
 * @command Set Cursor
 * @desc Sets the mouse cursor to a different cursor by id
 *
 * @arg Id
 * @desc The id of the cursor to switch to
 *
 * @command Clear Cursor
 * @desc Clears the custom mouse cursor
 *
 * @param Mouse Cursor Setup
 *
 * @param Cursors
 * @parent Mouse Cursor Setup
 * @type struct<Cursor>[]
 * @default []
 * @desc Set up mouse cursors here.
 *
 * @param Default Cursor
 * @parent Mouse Cursor Setup
 * @desc The id of the cursor to start the game with
*/
/*~struct~Cursor:
 * @param Id
 * @desc The id of this cursor object, used to refer to this cursor in game
 *
 * @param Real Cursor Options
 *
 * @param Hide Real Cursor
 * @parent Real Cursor Options
 * @type boolean
 * @default true
 * @desc If true, the real mouse cursor will be hidden while this cursor is being used
 *
 * @param Custom Cursor Options
 *
 * @param Image
 * @parent Custom Cursor Options
 * @type file
 * @dir img/
 * @desc The image of the cursor
 *
 * @param Base Rotation
 * @parent Custom Cursor Options
 * @type number
 * @default 0
 * @max 360
 * @desc Rotation (in degrees) of the cursor
 *
 * @param Base Opacity
 * @parent Custom Cursor Options
 * @type number
 * @default 255
 * @max 255
 * @desc Opacity of the cursor
 *
 * @param X Offset
 * @parent Custom Cursor Options
 * @type number
 * @default 0
 * @min -9999
 * @desc X offset (in pixels) of the cursor image from the mouse position
 *
 * @param Y Offset
 * @parent Custom Cursor Options
 * @type number
 * @default 0
 * @min -9999
 * @desc Y offset (in pixels) of the cursor image from the mouse position
*/
Imported.CGMZ_MouseCursor = true;
CGMZ.Versions["Mouse Cursor"] = "Alpha";
CGMZ.MouseCursor = {};
CGMZ.MouseCursor.parameters = PluginManager.parameters('CGMZ_MouseCursor');
CGMZ.MouseCursor.DefaultCursor = CGMZ.MouseCursor.parameters["Default Cursor"];
CGMZ.MouseCursor.Cursors = CGMZ_Utils.parseJSON(CGMZ.MouseCursor.parameters["Cursors"], [], '[CGMZ] Mouse Cursor', 'Your Cursors parameter was set up incorrectly and could not be read.');
//=============================================================================
// CGMZ_TempData_MouseCursor
//-----------------------------------------------------------------------------
// Store and manage mouse cursor data. Not saved.
//=============================================================================
function CGMZ_TempData_MouseCursor() {
    this.initialize.apply(this, arguments);
}
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_TempData_MouseCursor.prototype.initialize = function(cursor) {
	this.id = cursor.Id;
	this.img = cursor.Image;
	this.hideRealCursor = (cursor["Hide Real Cursor"] === 'true');
	this.baseRotation = Number(cursor["Base Rotation"]);
	this.baseOpacity = Number(cursor["Base Opacity"]);
	this.xOffset = Number(cursor["X Offset"]);
	this.yOffset = Number(cursor["Y Offset"]);
};
//=============================================================================
// CGMZ_Core
//-----------------------------------------------------------------------------
// Manage saved mouse cursor data
//=============================================================================
//-----------------------------------------------------------------------------
// Also initialize mouse cursor
//-----------------------------------------------------------------------------
const alias_CGMZMouseCursor_CGMZCore_createPluginData = CGMZ_Core.prototype.createPluginData;
CGMZ_Core.prototype.createPluginData = function() {
	alias_CGMZMouseCursor_CGMZCore_createPluginData.call(this);
	this.initializeMouseCursor();
};
//-----------------------------------------------------------------------------
// Initialize mouse cursor after load if not exists
//-----------------------------------------------------------------------------
const alias_CGMZMouseCursor_CGMZCore_onAfterLoad = CGMZ_Core.prototype.onAfterLoad;
CGMZ_Core.prototype.onAfterLoad = function() {
	alias_CGMZMouseCursor_CGMZCore_onAfterLoad.call(this);
	this.initializeMouseCursor();
};
//-----------------------------------------------------------------------------
// Initializes the mouse cursor if it is not yet set
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.initializeMouseCursor = function() {
	if(typeof this._mouseCursor === 'undefined') this.setMouseCursor(CGMZ.MouseCursor.DefaultCursor);
};
//-----------------------------------------------------------------------------
// Set a new mouse cursor
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.setMouseCursor = function(id) {
	this._mouseCursor = id;
};
//-----------------------------------------------------------------------------
// Clear the mouse cursor
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.clearMouseCursor = function() {
	this._mouseCursor = '';
};
//-----------------------------------------------------------------------------
// Get the current mouse cursor id
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getCurrentMouseCursorId = function() {
	return this._mouseCursor;
};
//=============================================================================
// CGMZ_Temp
//-----------------------------------------------------------------------------
// Manage mouse cursor data, not saved.
//=============================================================================
//-----------------------------------------------------------------------------
// Also initialize mouse cursor data
//-----------------------------------------------------------------------------
const alias_CGMZMouseCursor_CGMZTemp_createPluginData = CGMZ_Temp.prototype.createPluginData;
CGMZ_Temp.prototype.createPluginData = function() {
	alias_CGMZMouseCursor_CGMZTemp_createPluginData.call(this);
	this.initializeMouseCursorData();
};
//-----------------------------------------------------------------------------
// Initialize mouse cursor data
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.initializeMouseCursorData = function() {
	this._mouseCursors = {};
	for(const cursorJSON of CGMZ.MouseCursor.Cursors) {
		const data = CGMZ_Utils.parseJSON(cursorJSON, null, "[CGMZ] Mouse Cursor", "One of your mouse cursors was set up incorrectly and could not be read.");
		if(!data) continue;
		const cursor = new CGMZ_TempData_MouseCursor(data);
		this._mouseCursors[cursor.id] = cursor;
	}
};
//-----------------------------------------------------------------------------
// Get mouse cursor
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.getMouseCursor = function(id) {
	return this._mouseCursors[id];
};
//-----------------------------------------------------------------------------
// Register Plugin Commands
//-----------------------------------------------------------------------------
const alias_CGMZMouseCursor_CGMZTemp_registerPluginCommands = CGMZ_Temp.prototype.registerPluginCommands;
CGMZ_Temp.prototype.registerPluginCommands = function() {
	alias_CGMZMouseCursor_CGMZTemp_registerPluginCommands.call(this);
	PluginManager.registerCommand("CGMZ_MouseCursor", "Set Cursor", this.pluginCommandMouseCursorSetCursor);
	PluginManager.registerCommand("CGMZ_MouseCursor", "Clear Cursor", this.pluginCommandMouseCursorClearCursor);
};
//-----------------------------------------------------------------------------
// Plugin Command - Set Cursor
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandMouseCursorSetCursor = function(args) {
	const cursor = $cgmzTemp.getMouseCursor(args.Id);
	if(cursor) {
		$cgmz.setMouseCursor(args.Id);
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Clear Cursor
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandMouseCursorClearCursor = function() {
	$cgmz.setMouseCursor('');
};
//=============================================================================
// Scene_Base
//-----------------------------------------------------------------------------
// Create the mouse cursor sprite
//=============================================================================
//-----------------------------------------------------------------------------
// Also create the mouse cursor sprite
//-----------------------------------------------------------------------------
const alias_CGMZMouseCursor_SceneBase_create = Scene_Base.prototype.create;
Scene_Base.prototype.create = function() {
    alias_CGMZMouseCursor_SceneBase_create.call(this);
	if(this.CGMZ_needsMouseCursor()) this.CGMZ_createMouseCursorSprite();
};
//-----------------------------------------------------------------------------
// Create the mouse cursor sprite
//-----------------------------------------------------------------------------
Scene_Base.prototype.CGMZ_createMouseCursorSprite = function() {
	this._cgmz_maxMouseCursorMoves = 100;
	this._cgmz_currentMouseCursorMoves = 0;
    this._cgmz_mouseCursor = new CGMZ_Sprite_MouseCursor();
	this.addChild(this._cgmz_mouseCursor);
};
//-----------------------------------------------------------------------------
// Also update the cursor
//-----------------------------------------------------------------------------
const alias_CGMZMouseCursor_SceneBase_update = Scene_Base.prototype.update;
Scene_Base.prototype.update = function() {
    alias_CGMZMouseCursor_SceneBase_update.call(this);
	if(this._cgmz_mouseCursor?.needsUpdate()) this.CGMZ_updateMouseCursor();
};
//-----------------------------------------------------------------------------
// Update the mouse cursor
//-----------------------------------------------------------------------------
Scene_Base.prototype.CGMZ_updateMouseCursor = function() {
    this.CGMZ_updateMouseCursorIndex();
};
//-----------------------------------------------------------------------------
// Update the mouse cursor index to ensure it renders over everything else
//-----------------------------------------------------------------------------
Scene_Base.prototype.CGMZ_updateMouseCursorIndex = function() {
	if(this._cgmz_currentMouseCursorMoves < this._cgmz_maxMouseCursorMoves && typeof this.children[this.children.length - 1] !== 'CGMZ_Sprite_MouseCursor') {
		this.setChildIndex(this._cgmz_mouseCursor, this.children.length - 1);
		this._cgmz_currentMouseCursorMoves++;
	}
};
//-----------------------------------------------------------------------------
// Does the scene need the CGMZ mouse cursor?
//-----------------------------------------------------------------------------
Scene_Base.prototype.CGMZ_needsMouseCursor = function() {
    return true;
};
//=============================================================================
// Scene_Title
//-----------------------------------------------------------------------------
// Set default mouse cursor when title loads in case game end -> title
//=============================================================================
//-----------------------------------------------------------------------------
// Reset default cursor for title scene
//-----------------------------------------------------------------------------
const alias_CGMZMouseCursor_SceneTitle_initialize = Scene_Title.prototype.initialize;
Scene_Title.prototype.initialize = function() {
    alias_CGMZMouseCursor_SceneTitle_initialize.call(this);
	$cgmz.setMouseCursor(CGMZ.MouseCursor.DefaultCursor);
};
//=============================================================================
// CGMZ_Sprite_MouseCursor
//-----------------------------------------------------------------------------
// The mouse cursor sprite
//=============================================================================
function CGMZ_Sprite_MouseCursor() {
    this.initialize(...arguments);
}
CGMZ_Sprite_MouseCursor.prototype = Object.create(Sprite.prototype);
CGMZ_Sprite_MouseCursor.prototype.constructor = CGMZ_Sprite_MouseCursor;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Sprite_MouseCursor.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
	this.resetCursor();
};
//-----------------------------------------------------------------------------
// Reset cursor
//-----------------------------------------------------------------------------
CGMZ_Sprite_MouseCursor.prototype.resetCursor = function() {
	this._id = '';
	this._needsUpdate = false;
	this._xOffset = 0;
	this._yOffset = 0;
	this._hideRealCursor = false;
	document.body.style.cursor = 'auto';
	this.bitmap = null;
    this.hide();
};
//-----------------------------------------------------------------------------
// Called when a new cursor is set
//-----------------------------------------------------------------------------
CGMZ_Sprite_MouseCursor.prototype.setCursor = function() {
	const data = $cgmzTemp.getMouseCursor(this._id);
	if(data.hideRealCursor) {
		document.body.style.cursor = 'none';
	} else {
		document.body.style.cursor = 'auto';
	}
	if(data.img) {
		const imgData = CGMZ_Utils.getImageData(data.img, 'img');
		this.bitmap = ImageManager.loadBitmap(imgData.folder, imgData.filename);
	}
	this._xOffset = data.xOffset;
	this._yOffset = data.yOffset;
	this.opacity = data.baseOpacity;
	this.rotation = CGMZ_Utils.degreesToRadians(data.baseRotation);
	this.x = TouchInput.x + this._xOffset;
	this.y = TouchInput.y + this._yOffset;
	this.show();
	this._needsUpdate = true;
};
//-----------------------------------------------------------------------------
// Does cursor need to be updated?
//-----------------------------------------------------------------------------
CGMZ_Sprite_MouseCursor.prototype.needsUpdate = function() {
	return !!$cgmz && !!$cgmzTemp && this._needsUpdate;
};
//-----------------------------------------------------------------------------
// Get the cursor id
//-----------------------------------------------------------------------------
CGMZ_Sprite_MouseCursor.prototype.cursorId = function() {
	return this._id;
};
//-----------------------------------------------------------------------------
// Update the sprite
//-----------------------------------------------------------------------------
CGMZ_Sprite_MouseCursor.prototype.update = function() {
    Sprite.prototype.update.call(this);
	this.updateCursorId();
	if(this.needsUpdate()) {
		this.updateCursorPosition();
		this.updateCursorVisibility();
		this.updateRealCursor();
	}
};
//-----------------------------------------------------------------------------
// Update the sprite position
//-----------------------------------------------------------------------------
CGMZ_Sprite_MouseCursor.prototype.updateCursorPosition = function() {
    const x = TouchInput.x;
	const y = TouchInput.y;
	if(x && y) {
		this.x = x + this._xOffset;
		this.y = y + this._yOffset;
	}
};
//-----------------------------------------------------------------------------
// Update the sprite visibility
//-----------------------------------------------------------------------------
CGMZ_Sprite_MouseCursor.prototype.updateCursorVisibility = function() {
	if($cgmzTemp?._lastInputType !== 'gamepad') {
		const isInBounds = TouchInput.x > 0 && TouchInput.x < Graphics.width && TouchInput.y > 0 && TouchInput.y < Graphics.height;
		if(!this.visible && isInBounds) {
			this.show();
		} else if(this.visible && !isInBounds) {
			this.hide();
		}
	} else {
		this.hide();
	}
};
//-----------------------------------------------------------------------------
// Update the sprite position
//-----------------------------------------------------------------------------
CGMZ_Sprite_MouseCursor.prototype.updateRealCursor = function() {
    if(this._hideRealCursor) document.body.style.cursor = 'none';
};
//-----------------------------------------------------------------------------
// Update the sprite
//-----------------------------------------------------------------------------
CGMZ_Sprite_MouseCursor.prototype.updateCursorId = function() {
    if(!!$cgmz && !!$cgmzTemp) {
		const id = $cgmz.getCurrentMouseCursorId();
		if(id !== this._id) {
			this._id = id;
			(!id) ? this.resetCursor() : this.setCursor();
		}
	}
};