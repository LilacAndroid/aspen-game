/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/lighteffects/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc Adds simple light effects to your game
 * @help
 * ============================================================================
 * For terms and conditions using this plugin in your game please visit:
 * https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * Become a Patron to get access to beta/alpha plugins plus other goodies!
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * Version: Beta R9
 * ----------------------------------------------------------------------------
 * Compatibility: Only tested with my CGMZ plugins.
 * Made for RPG Maker MZ 1.10.0
 * ----------------------------------------------------------------------------
 * Description: This plugin adds some basic light effects to your game. You
 * can use it to set up preset light effects which can include different
 * images, flicker, x/y offsets, opacity, range, and more. It is not an
 * advanced light effect system.
 * ----------------------------------------------------------------------------
 * Documentation:
 * --------------------------------Lights--------------------------------------
 * To make a light effect appear on an event, use a comment somewhere in the
 * event page that says:
 * CGMZ LE id
 * For example, if your light effect had an id of "fire" you would do:
 * CGMZ LE fire
 * 
 * To turn off a light, you can turn off all lights globally or all lights of
 * a specific id with plugin commands. To turn off a light individually, you
 * can change event pages to one without the comment.
 * ----------------------------Plugin Commands---------------------------------
 * This plugin supports the following plugin commands:
 * 
 * • Disable Light
 * Disables/enables light effects by id
 * 
 * • Set Player Light
 * Sets a light effect on the player by id
 * 
 * • Clear Player Light
 * Clears the light effect from the player
 * 
 * • Set Cursor Light
 * Sets a light effect on the mouse cursor by id
 * 
 * • Clear Cursor Light
 * Clears the light effect from the mouse cursor
 * ------------------------------Saved Games-----------------------------------
 * This plugin is fully compatible with saved games. This means you can:
 *
 * ✓ Add plugin to saved game and it will work as expected
 * ✓ Modify plugin parameters and have changes reflected in saved games
 * ✓ Remove plugin and saved games will continue to work as expected
 * -----------------------------Filename---------------------------------------
 * The filename for this plugin MUST remain CGMZ_LightEffects.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * -----------------------------Latest Version---------------------------------
 * Hi all, this latest version adds a cursor light. This is a light that will
 * follow the cursor, making it so your player can shine light wherever they
 * want by moving their cursor. You might use this as some kind of dungeon
 * mechanic, or you could make a subtle effect to help the cursor stand out
 * more in some scenes.
 *
 * This update also added some better error handling in the case that you type
 * your light id in wrong into the event comment. Previously, this used to
 * cause a crash because the plugin would not be able to find your light. Now,
 * it will log a warning in the dev tools console but otherwise allow the game
 * to continue though the invalid light will not work.
 *
 * Version Beta R9
 * - Added cursor light
 * - Plugin no longer crashes if you type your light id in wrong
 *
 * @command Disable Light
 * @desc Disable/enable specific light effects by id
 *
 * @arg id
 * @desc The id of the light effect
 *
 * @arg disabled
 * @type boolean
 * @default false
 * @desc Whether light effects should be disabled or not
 *
 * @command Set Player Light
 * @desc Add a light effect to the player by id
 *
 * @arg id
 * @desc The id of the light effect to add to the player
 *
 * @command Clear Player Light
 * @desc Clears the player's light effect
 *
 * @command Set Cursor Light
 * @desc Add a light effect to the cursor by id
 *
 * @arg id
 * @desc The id of the light effect to add to the cursor
 *
 * @command Clear Cursor Light
 * @desc Clears the cursor's light effect
 *
 * @param Light Setup
 * 
 * @param Light Effects
 * @parent Light Setup
 * @type struct<LightEffect>[]
 * @default []
 * @desc Set up light effects here
 *
 * @param Mechanics
 * 
 * @param Light Switch
 * @parent Mechanics
 * @type switch
 * @default 0
 * @desc Switch that controls if lights are visible (globally). If set to 0, lights will always be visible.
*/
/*~struct~LightEffect:
 * @param Id
 * @desc The unique id of the light effect. Does not have to be a number, just unique.
 *
 * @param Visible Switch
 * @type switch
 * @default 0
 * @desc If set, this switch must be ON for this light to be visible
 *
 * @param Visible Self Switch
 * @type select
 * @option None
 * @option A
 * @option B
 * @option C
 * @option D
 * @default None
 * @desc If set, the light event's self switch must be ON for this light to be visible
 *
 * @param Image
 * @type file
 * @dir img
 * @desc The image of the light effect
 *
 * @param Opacity
 * @type number
 * @min 0
 * @max 255
 * @default 100
 * @desc The base opacity of the image
 *
 * @param Blend Mode
 * @type select
 * @option Normal
 * @option Add
 * @option Multiply
 * @option Screen
 * @default Normal
 * @desc The blend mode of the light effect
 *
 * @param Flicker
 * @type number
 * @min 0
 * @max 255
 * @default 0
 * @desc The amount to change the opacity of the image by when flickering. Set to 0 for no flicker.
 *
 * @param Flicker Speed
 * @type number
 * @min 1
 * @default 1
 * @desc The amount of frames before the flicker opacity change occurs
 *
 * @param X Offset
 * @type number
 * @min -9999
 * @default 0
 * @desc The x-offset of the light sprite
 *
 * @param Y Offset
 * @type number
 * @min -9999
 * @default 0
 * @desc The y-offset of the light sprite
 *
 * @param Z Offset
 * @type number
 * @min -9999
 * @default 0
 * @desc The z-offset of the light sprite. By default, the z value will be the event's z + 3.
 *
 * @param X Scale
 * @type number
 * @min 0.00
 * @default 1.00
 * @decimals 2
 * @desc The x scale of the sprite
 *
 * @param Y Scale
 * @type number
 * @min 0.00
 * @default 1.00
 * @decimals 2
 * @desc The y scale of the sprite
 *
 * @param Hue
 * @type number
 * @min -360
 * @max 360
 * @default 0
 * @desc The hue rotation from -360 to 360
 * 
 * @param Color Tone
 * @type struct<Tone>
 * @default {"Red":"255","Green":"255","Blue":"255","Gray":"255"}
 * @desc The color tone of the light
 *
 * @param Scale Breathe Effect
 * @type number
 * @min 0.00
 * @default 0.00
 * @decimals 2
 * @desc The amount added and subtracted from the base x/y scale
 *
 * @param Scale Breathe Time
 * @type number
 * @min 0
 * @default 0
 * @desc The frames to complete one grow/shrink cycle. Set to 0 for no breathe effect.
 *
 * @param Rotation
 * @type number
 * @min -9999
 * @default 0
 * @desc Amount of rotation applied to the light
 *
 * @param Rotation Speed
 * @type number
 * @min -9999
 * @default 0
 * @desc Amount added to rotation every x rotation frames (set below)
 *
 * @param Rotation Frames
 * @type number
 * @default 0
 * @desc Amount of frames to wait before adding the rotation speed to the light's rotation (60f = 1s)
 *
 * @param Proximity
 * @type number
 * @min -1
 * @default -1
 * @desc When >= 0, the light will only be visible while within this amount of distance (in tiles) from the player
 *
 * @param Directional
 * @type boolean
 * @default false
 * @desc When true, it will copy the direction the event it is tracking faces
 *
 * @param Directional Offsets
 * @type struct<DirectionalOffset>
 * @default {"Up X":"0","Up Y":"0","Down X":"0","Down Y":"0","Left X":"0","Left Y":"0","Right X":"0","Right Y":"0"}
 * @desc Set up x/y offsets for each direction here (only used when Directional = true)
*/
/*~struct~Tone:
 * @param Red
 * @type number
 * @min 0
 * @max 255
 * @default 255
 * @desc The red value of the tone
 *
 * @param Green
 * @type number
 * @min 0
 * @max 255
 * @default 255
 * @desc The green value of the tone
 *
 * @param Blue
 * @type number
 * @min 0
 * @max 255
 * @default 255
 * @desc The blue value of the tone
 *
 * @param Gray
 * @type number
 * @min 0
 * @max 255
 * @default 255
 * @desc The gray value of the tone
*/
/*~struct~DirectionalOffset:
 * @param Up X
 * @type number
 * @min -9999
 * @default 0
 * @desc The x offset while facing up
 * 
 * @param Up Y
 * @type number
 * @min -9999
 * @default 0
 * @desc The y offset while facing up
 *
 * @param Down X
 * @type number
 * @min -9999
 * @default 0
 * @desc The x offset while facing down
 * 
 * @param Down Y
 * @type number
 * @min -9999
 * @default 0
 * @desc The y offset while facing down
 *
 * @param Left X
 * @type number
 * @min -9999
 * @default 0
 * @desc The x offset while facing left
 * 
 * @param Left Y
 * @type number
 * @min -9999
 * @default 0
 * @desc The y offset while facing left
 *
 * @param Right X
 * @type number
 * @min -9999
 * @default 0
 * @desc The x offset while facing right
 * 
 * @param Right Y
 * @type number
 * @min -9999
 * @default 0
 * @desc The y offset while facing right
*/
Imported.CGMZ_LightEffects = true;
CGMZ.Versions["Light Effects"] = "Beta R9";
CGMZ.LightEffects = {};
CGMZ.LightEffects.parameters = PluginManager.parameters('CGMZ_LightEffects');
CGMZ.LightEffects.LightSwitch = Number(CGMZ.LightEffects.parameters["Light Switch"]);
CGMZ.LightEffects.LightEffects = CGMZ_Utils.parseJSON(CGMZ.LightEffects.parameters["Light Effects"], [], "[CGMZ] Light Effects", "Your Light Effects parameter had invalid JSON and could not be read.");
//=============================================================================
// CGMZ_SimpleLightEffect
//-----------------------------------------------------------------------------
// Data class used to store light effect properties
//=============================================================================
function CGMZ_SimpleLightEffect() {
    this.initialize(...arguments);
}
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_SimpleLightEffect.prototype.initialize = function(properties) {
	this._id = properties.Id;
	this._image = properties.Image;
	this._visibleSwitch = Number(properties["Visible Switch"]);
	this._visibleSelfSwitch = (properties["Visible Self Switch"] === 'None') ? null : properties["Visible Self Switch"];
	this._opacity = Number(properties.Opacity);
	this._blendMode = properties["Blend Mode"];
	this._flicker = Number(properties.Flicker);
	this._flickerSpeed = Number(properties["Flicker Speed"]);
	this._hue = Number(properties.Hue);
	this._offset = new Point(Number(properties["X Offset"]), Number(properties["Y Offset"]));
	this._zOffset = Number(properties["Z Offset"]);
	this._scale = new Point(Number(properties["X Scale"]), Number(properties["Y Scale"]));
	this._proximity = Number(properties.Proximity);
	this._scaleBreatheEffect = parseFloat(properties["Scale Breathe Effect"]);
	this._scaleBreatheTime = parseFloat(properties["Scale Breathe Time"]);
	this._rotation = Number(properties.Rotation);
	this._rotationSpeed = Number(properties["Rotation Speed"]);
	this._rotationFrames = Number(properties["Rotation Frames"]);
	this._colorTone = this.setupColorTone(CGMZ_Utils.parseJSON(properties["Color Tone"], null, "[CGMZ] Light Effects", `Light effect with id: ${this._id} had invalid JSON in the Color Tone parameter which could not be read.`));
	this._directional = (properties["Directional"] === 'true');
	const dirOffsets = CGMZ_Utils.parseJSON(properties["Directional Offsets"], {"Up X":"0","Up Y":"0","Down X":"0","Down Y":"0","Left X":"0","Left Y":"0","Right X":"0","Right Y":"0"}, "[CGMZ] Light Effects", `Light effect with id: ${this._id} had invalid JSON in the Directional Offsets parameter which could not be read.`);
	this._directionalOffsets = [new Point(0, 0), new Point(0, 0),
		new Point(Number(dirOffsets["Down X"]), Number(dirOffsets["Down Y"])), new Point(0, 0),
		new Point(Number(dirOffsets["Left X"]), Number(dirOffsets["Left Y"])), new Point(0, 0),
		new Point(Number(dirOffsets["Right X"]), Number(dirOffsets["Right Y"])), new Point(0, 0),
		new Point(Number(dirOffsets["Up X"]), Number(dirOffsets["Up Y"]))
	];
};
//-----------------------------------------------------------------------------
// Create color tone array
//-----------------------------------------------------------------------------
CGMZ_SimpleLightEffect.prototype.setupColorTone = function(tone) {
	if(!tone) return [0, 0, 0, 0];
	return [Number(tone.Red), Number(tone.Green), Number(tone.Blue), Number(tone.Gray)];
};
//=============================================================================
// CGMZ
//-----------------------------------------------------------------------------
// Add light effect data to save data
//=============================================================================
//-----------------------------------------------------------------------------
// Also create saved light effect data
//-----------------------------------------------------------------------------
const alias_CGMZ_LightEffects_createPluginData = CGMZ_Core.prototype.createPluginData;
CGMZ_Core.prototype.createPluginData = function() {
	alias_CGMZ_LightEffects_createPluginData.call(this);
	this.initializeLightEffects();
};
//-----------------------------------------------------------------------------
// Initialize light effect save data
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.initializeLightEffects = function(reinitialize = false) {
	if(!this._disabledLightTypes || reinitialize) this._disabledLightTypes = {};
	if(!this.cursorLightEffect || reinitialize) this.cursorLightEffect = new CGMZ_GameObject_CursorLight();
};
//-----------------------------------------------------------------------------
// Check for unknown light types after load
//-----------------------------------------------------------------------------
const alias_CGMZ_LightEffects_onAfterLoad = CGMZ_Core.prototype.onAfterLoad;
CGMZ_Core.prototype.onAfterLoad = function() {
	alias_CGMZ_LightEffects_onAfterLoad.call(this);
	this.initializeLightEffects();
	for(const leJSON of CGMZ.LightEffects.LightEffects) {
		const leInfo = CGMZ_Utils.parseJSON(leJSON, null, "[CGMZ] Light Effects", "One of your light effects had invalid JSON and could not be read.");
		if(!leInfo) continue;
		const le = new CGMZ_SimpleLightEffect(leInfo);
		if(typeof this._disabledLightTypes[le._id] === 'undefined') this._disabledLightTypes[le._id] = false;
	}
};
//-----------------------------------------------------------------------------
// Check if light effects are visible
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.areLightEffectsVisible = function() {
	return (CGMZ.LightEffects.LightSwitch) ? $gameSwitches.value(CGMZ.LightEffects.LightSwitch) : true
};
//-----------------------------------------------------------------------------
// Check if specific light effect is visible
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.isLightEffectDisabled = function(id) {
	return this._disabledLightTypes[id];
};
//-----------------------------------------------------------------------------
// Change visibility of specific light effect
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.disableLightEffectType = function(id, disabled) {
	this._disabledLightTypes[id] = disabled;
};
//=============================================================================
// CGMZ_Temp
//-----------------------------------------------------------------------------
// Handle light effect temp data and plugin commands
//=============================================================================
//-----------------------------------------------------------------------------
// Register Plugin Commands
//-----------------------------------------------------------------------------
const alias_CGMZ_LightEffects_registerPluginCommands = CGMZ_Temp.prototype.registerPluginCommands;
CGMZ_Temp.prototype.registerPluginCommands = function() {
	alias_CGMZ_LightEffects_registerPluginCommands.call(this);
	PluginManager.registerCommand("CGMZ_LightEffects", "Disable Light", this.pluginCommandLightEffectsDisableLight);
	PluginManager.registerCommand("CGMZ_LightEffects", "Set Player Light", this.pluginCommandLightEffectsSetPlayerLight);
	PluginManager.registerCommand("CGMZ_LightEffects", "Clear Player Light", this.pluginCommandLightEffectsClearPlayerLight);
	PluginManager.registerCommand("CGMZ_LightEffects", "Set Cursor Light", this.pluginCommandLightEffectsSetCursorLight);
	PluginManager.registerCommand("CGMZ_LightEffects", "Clear Cursor Light", this.pluginCommandLightEffectsClearCursorLight);
};
//-----------------------------------------------------------------------------
// Plugin Command - Set the individual light effect visibility
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandLightEffectsDisableLight = function(args) {
	$cgmz.disableLightEffectType(args.id, (args.disabled === 'true'));
};
//-----------------------------------------------------------------------------
// Plugin Command - Set a light effect on the player
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandLightEffectsSetPlayerLight = function(args) {
	$gamePlayer.CGMZ_setLightEffect(args.id);
};
//-----------------------------------------------------------------------------
// Plugin Command - Clear light effects from the player
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandLightEffectsClearPlayerLight = function() {
	$gamePlayer.CGMZ_clearLightEffect();
};
//-----------------------------------------------------------------------------
// Plugin Command - Set a light effect on the cursor
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandLightEffectsSetCursorLight = function(args) {
	$cgmz.cursorLightEffect.setLightEffect(args.id);
};
//-----------------------------------------------------------------------------
// Plugin Command - Clear light effects from the cursor
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandLightEffectsClearCursorLight = function() {
	$cgmz.cursorLightEffect.clearLightEffect();
};
//-----------------------------------------------------------------------------
// Initialize light effects
//-----------------------------------------------------------------------------
const alias_CGMZ_LightEffects_CGMZ_Temp_createPluginData = CGMZ_Temp.prototype.createPluginData;
CGMZ_Temp.prototype.createPluginData = function() {
	alias_CGMZ_LightEffects_CGMZ_Temp_createPluginData.call(this);
	this._lightEffects = {};
	for(const leJSON of CGMZ.LightEffects.LightEffects) {
		const leInfo = CGMZ_Utils.parseJSON(leJSON, null, "[CGMZ] Light Effects", "One of your light effects had invalid JSON and could not be read.");
		if(!leInfo) continue;
		const le = new CGMZ_SimpleLightEffect(leInfo);
		this._lightEffects[le._id] = le;
	}
};
//-----------------------------------------------------------------------------
// Get a light effect
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.getLightEffect = function(id) {
	return this._lightEffects[id];
};
//=============================================================================
// Game_Event
//-----------------------------------------------------------------------------
// Add light data to event
//=============================================================================
//-----------------------------------------------------------------------------
// Set up page settings to look for lights
//-----------------------------------------------------------------------------
const alias_CGMZ_LightEffects_Game_Event_setupPageSettings = Game_Event.prototype.setupPageSettings;
Game_Event.prototype.setupPageSettings = function() {
    alias_CGMZ_LightEffects_Game_Event_setupPageSettings.call(this);
	this._CGMZ_light = null;
	const page = this.page();
	for(const command of page.list) {
		if(command.code === 108 && command.parameters[0].trim().includes("CGMZ LE")) {
			this._CGMZ_light = command.parameters[0].split(" ")[2];
			break;
		}
	}
};
//=============================================================================
// Game_Player
//-----------------------------------------------------------------------------
// Add light data to player
//=============================================================================
//-----------------------------------------------------------------------------
// Initialize light to nothing
//-----------------------------------------------------------------------------
const alias_CGMZ_LightEffects_GamePlayer_initMembers = Game_Player.prototype.initMembers;
Game_Player.prototype.initMembers = function() {
    alias_CGMZ_LightEffects_GamePlayer_initMembers.call(this);
    this._CGMZ_light = null;
};
//-----------------------------------------------------------------------------
// Set the player's light effect
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMZ_setLightEffect = function(id) {
    this._CGMZ_light = id;
};
//-----------------------------------------------------------------------------
// Clear the player's light effect
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMZ_clearLightEffect = function() {
    this._CGMZ_light = null;
};
//=============================================================================
// CGMZ_GameObject_CursorLight
//-----------------------------------------------------------------------------
// Game object class for a cursor light, mimics some game character properties
//=============================================================================
function CGMZ_GameObject_CursorLight() {
    this.initialize(...arguments);
}
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_GameObject_CursorLight.prototype.initialize = function() {
	this._CGMZ_light = null;
	this.x = -1000;
	this.y = -1000;
	this.isCursorLight = true;
};
//-----------------------------------------------------------------------------
// Set the player's light effect
//-----------------------------------------------------------------------------
CGMZ_GameObject_CursorLight.prototype.setLightEffect = function(id) {
    this._CGMZ_light = id;
};
//-----------------------------------------------------------------------------
// Clear the player's light effect
//-----------------------------------------------------------------------------
CGMZ_GameObject_CursorLight.prototype.clearLightEffect = function() {
    this._CGMZ_light = null;
};
//-----------------------------------------------------------------------------
// Get the light's screen direction
//-----------------------------------------------------------------------------
CGMZ_GameObject_CursorLight.prototype.direction = function() {
    return 2;
};
//-----------------------------------------------------------------------------
// Get the light's screen x
//-----------------------------------------------------------------------------
CGMZ_GameObject_CursorLight.prototype.screenX = function() {
    return TouchInput.x;
};
//-----------------------------------------------------------------------------
// Get the light's screen y
//-----------------------------------------------------------------------------
CGMZ_GameObject_CursorLight.prototype.screenY = function() {
    return TouchInput.y;
};
//-----------------------------------------------------------------------------
// Get the light's screen z
//-----------------------------------------------------------------------------
CGMZ_GameObject_CursorLight.prototype.screenZ = function() {
    return $gamePlayer.screenZ();
};
//=============================================================================
// Spriteset_Map
//-----------------------------------------------------------------------------
// Add sprites of light effects
//=============================================================================
//-----------------------------------------------------------------------------
// Also create light effects (after other sprites have been created)
//-----------------------------------------------------------------------------
const alias_CGMZ_LightEffects_Spriteset_Map_createCharacters = Spriteset_Map.prototype.createCharacters;
Spriteset_Map.prototype.createCharacters = function() {
	alias_CGMZ_LightEffects_Spriteset_Map_createCharacters.call(this);
	this._lightSprites = [];
	this._lightSprites.push(new CGMZ_Sprite_SimpleLightEffect($gamePlayer));
	for (const event of $gameMap.events()) {
		this._lightSprites.push(new CGMZ_Sprite_SimpleLightEffect(event));
	}
	this._lightSprites.push(new CGMZ_Sprite_SimpleLightEffect($cgmz.cursorLightEffect));
	for (const sprite of this._lightSprites) {
		this._tilemap.addChild(sprite);
	}
};
//=============================================================================
// CGMZ_Sprite_SimpleLightEffect
//-----------------------------------------------------------------------------
// Sprite class for light effect images
//=============================================================================
function CGMZ_Sprite_SimpleLightEffect() {
    this.initialize(...arguments);
}
CGMZ_Sprite_SimpleLightEffect.prototype = Object.create(Sprite.prototype);
CGMZ_Sprite_SimpleLightEffect.prototype.constructor = CGMZ_Sprite_SimpleLightEffect;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Sprite_SimpleLightEffect.prototype.initialize = function(event) {
    Sprite.prototype.initialize.call(this);
	this._event = event;
	this.visible = false;
    this.initMembers();
};
//-----------------------------------------------------------------------------
// Initialize data
//-----------------------------------------------------------------------------
CGMZ_Sprite_SimpleLightEffect.prototype.initMembers = function() {
	this.anchor.x = 0.5;
    this.anchor.y = 0.5;
	this._light = null;
	this._offset = new Point(0, 0);
	this._zOffset = 0;
	this._directional = false;
};
//-----------------------------------------------------------------------------
// After bitmap is loaded
//-----------------------------------------------------------------------------
CGMZ_Sprite_SimpleLightEffect.prototype.onImageLoaded = function() {
	this.visible = true;
};
//-----------------------------------------------------------------------------
// Update sprite
//-----------------------------------------------------------------------------
CGMZ_Sprite_SimpleLightEffect.prototype.update = function() {
    Sprite.prototype.update.call(this);
	this.updateLightSettings();
	this.updatePosition();
	this.updateRotation();
	if(this._needsUpdate) {
		this.updateLightVisibility();
		if(this.visible) {
			this.updateFlicker();
			this.updateBreathe();
		}
	}
};
//-----------------------------------------------------------------------------
// Update settings of light
//-----------------------------------------------------------------------------
CGMZ_Sprite_SimpleLightEffect.prototype.updateLightSettings = function() {
	if(this._light !== this._event._CGMZ_light) {
		this._light = this._event._CGMZ_light;
		this.visible = false;
		if(this._light) this.setupLight();
		this._needsUpdate = !!this._light;
	}
};
//-----------------------------------------------------------------------------
// Set up light effect
//-----------------------------------------------------------------------------
CGMZ_Sprite_SimpleLightEffect.prototype.setupLight = function() {
	const light = $cgmzTemp.getLightEffect(this._light);
	if(!light) {
		console.warn(`[CGMZ] Light Effects - Could not find light parameter with id: ${this._light}. Please double check that your light comment matches exactly a light id from the parameters.`);
		this._light = null;
		this._event._CGMZ_light = null;
		this._needsUpdate = false;
		return;
	}
	this._baseOpacity = light._opacity;
	this.opacity = light._opacity;
	this.setHue(light._hue);
	this.setColorTone(light._colorTone);
	this._visibleSwitch = light._visibleSwitch;
	this._visibleSelfSwitch = light._visibleSelfSwitch;
	this._offset = light._offset;
	this._zOffset = light._zOffset;
	this._proximity = light._proximity;
	this._flicker = light._flicker;
	this._flickerSpeed = light._flickerSpeed;
	this._breatheScale = light._scaleBreatheEffect;
	this._breatheTime = light._scaleBreatheTime;
	this._baseScale = light._scale;
	this._directional = light._directional;
	this._directionalOffsets = light._directionalOffsets;
	this._breatheTimer = 0;
	this._breatheDirection = 1;
	this._rotationAmount = light._rotation;
	this._rotationSpeed = light._rotationSpeed;
	this._rotationFrames = light._rotationFrames;
	this._rotationTimer = 0;
	this.rotation = this._rotationAmount;
	if(this._directional || this._rotationSpeed) {
		this.anchor.y = 1;
	} else {
		this.anchor.y = 0.5;
	}
	this._targetScale = new Point(this._baseScale.x + this._breatheScale, this._baseScale.y + this._breatheScale);
	this._startScale = new Point(this._baseScale.x - this._breatheScale, this._baseScale.y - this._breatheScale);
	this.scale = light._scale;
	this._currentFlickerFrame = 0;
	this.blendMode = this.getBlendMode(light._blendMode);
	const imageData = CGMZ_Utils.getImageData(light._image, "img");
	this.bitmap = ImageManager.loadBitmap(imageData.folder, imageData.filename);
	this.bitmap.addLoadListener(this.onImageLoaded.bind(this));
};
//-----------------------------------------------------------------------------
// Get the blend mode for the light
//-----------------------------------------------------------------------------
CGMZ_Sprite_SimpleLightEffect.prototype.getBlendMode = function(mode) {
	switch(mode) {
		case "Add": return PIXI.BLEND_MODES.ADD;
		case "Multiply": return PIXI.BLEND_MODES.MULTIPLY;
		case "Screen": return PIXI.BLEND_MODES.SCREEN;
	}
	return PIXI.BLEND_MODES.NORMAL;
};
//-----------------------------------------------------------------------------
// Update position of light
//-----------------------------------------------------------------------------
CGMZ_Sprite_SimpleLightEffect.prototype.updatePosition = function() {
	if(!this._directional) {
		this.x = this._event.screenX() + this._offset.x;
		this.y = this._event.screenY() + this._offset.y;
	} else {
		const direction = this._event.direction();
		this.x = this._event.screenX() + this._directionalOffsets[direction].x;
		this.y = this._event.screenY() + this._directionalOffsets[direction].y;
	}
    this.z = this._event.screenZ() + 3 + this._zOffset;
};
//-----------------------------------------------------------------------------
// Update rotation of light
//-----------------------------------------------------------------------------
CGMZ_Sprite_SimpleLightEffect.prototype.updateRotation = function() {
	if(this._directional) {
		switch(this._event.direction()) {
			case 2: // down
				this.rotation = (180 * Math.PI) / 180;
				break;
			case 4: // left
				this.rotation = (270 * Math.PI) / 180;
				break;
			case 6: // right
				this.rotation = (90 * Math.PI) / 180;
				break;
			case 8: // up
			default:
				this.rotation = 0;
				break;
		}
	} else {
		if(this._rotationSpeed) {
			this._rotationTimer++;
			if(this._rotationTimer > this._rotationFrames) {
				this._rotationTimer = 0;
				this.rotation += (this._rotationSpeed * Math.PI) / 180;
			}
		} else {
			this.rotation = this._rotationAmount;
		}
	}
};
//-----------------------------------------------------------------------------
// Update light flicker
//-----------------------------------------------------------------------------
CGMZ_Sprite_SimpleLightEffect.prototype.updateFlicker = function() {
	this._currentFlickerFrame++;
	if(this._currentFlickerFrame >= this._flickerSpeed) {
		const sign = Math.random() < 0.5 ? 1 : -1;
		this.opacity = this._baseOpacity + sign * Math.floor(Math.random() * this._flicker);
		this._currentFlickerFrame = 0;
	}
};
//-----------------------------------------------------------------------------
// Update light breathe
//-----------------------------------------------------------------------------
CGMZ_Sprite_SimpleLightEffect.prototype.updateBreathe = function() {
	if(this._breatheTime === 0) return;
	this._breatheTimer++;
	if(this._breatheTimer >= this._breatheTime) {
		this.updateBreatheTarget();
	}
	const percent = this._breatheTimer / this._breatheTime;
	const newX = CGMZ_Utils.lerp(this._startScale.x, this._targetScale.x, CGMZ_Utils.lerpEaseInOut(percent));
	const newY = CGMZ_Utils.lerp(this._startScale.y, this._targetScale.y, CGMZ_Utils.lerpEaseInOut(percent));
	this.scale = new Point(newX, newY);
};
//-----------------------------------------------------------------------------
// Update light breathe target values
//-----------------------------------------------------------------------------
CGMZ_Sprite_SimpleLightEffect.prototype.updateBreatheTarget = function() {
	this._breatheDirection = (this._breatheDirection === 1) ? -1 : 1;
	this._targetScale = new Point(this._baseScale.x + this._breatheScale * this._breatheDirection, this._baseScale.y + this._breatheScale * this._breatheDirection);
	this._startScale = new Point(this._baseScale.x + this._breatheScale * this._breatheDirection * -1, this._baseScale.y + this._breatheScale * this._breatheDirection * -1);
	this._breatheTimer = 0;
};
//-----------------------------------------------------------------------------
// Update light visibility
//-----------------------------------------------------------------------------
CGMZ_Sprite_SimpleLightEffect.prototype.updateLightVisibility = function() {
	this.visible = this.getLightVisibility();
};
//-----------------------------------------------------------------------------
// Get the light visibility
//-----------------------------------------------------------------------------
CGMZ_Sprite_SimpleLightEffect.prototype.getLightVisibility = function() {
	if(!$cgmz.areLightEffectsVisible()) return false;
	if($cgmz.isLightEffectDisabled(this._light)) return false;
	if(this._visibleSwitch && !$gameSwitches.value(this._visibleSwitch)) return false;
	if(this._visibleSelfSwitch && !this._event.isCursorLight) {
		const key = [$gameMap.mapId(), this._event.eventId(), this._visibleSelfSwitch];
        if(!$gameSelfSwitches.value(key)) return false;
	}
	if(this._proximity >= 0 && !this._event.isCursorLight) {
		const dx = $gameMap.deltaX(this._event.x, $gamePlayer.x);
		const dy = $gameMap.deltaY(this._event.y, $gamePlayer.y);
		const distance = Math.sqrt(dx*dx + dy*dy);
		if(distance > this._proximity) return false;
	}
	if(this._event.isCursorLight && $cgmzTemp._lastInputType === 'gamepad') return false;
	return true;
};