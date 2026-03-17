/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/footsteps/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc Play a footstep sound when the player moves
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
 * Description: Play a footstep sounds when the player moves. You can change
 * the sound based on the tile the player is on, so you can have a wood sound
 * for inside a house or a snow sound for outside in the snow. Show a footstep
 * graphic where the player walked, such as in snow.
 * ----------------------------------------------------------------------------
 * Documentation:
 * -----------------------------Alpha Notes------------------------------------
 * Planned features to be added:
 * 1) Footstep sounds change based on weather
 * 2) Option to play footstep sound by current tile or next tile
 *
 * Want additional features not already present/listed above? Make suggestions
 * on the Patreon Post, Itch.io Page, or in my discord under the #suggestions
 * channel!
 * https://discord.gg/Gbx7JXP
 * -----------------------------Main Features----------------------------------
 * FOOTSTEP SOUND
 * Play a footstep sound when the player moves. You can change this by region
 * or terrain tag. While the player is in these regions, whenever they move a
 * footstep sound will play. You can enable or disable footstep sounds entirely
 * via switch.
 * ----------------------------Plugin Commands---------------------------------
 * This plugin does not include any plugin commands.
 * ------------------------------Saved Games-----------------------------------
 * This plugin is fully compatible with saved games
 *
 * This means the following will work in saved games:
 * ✓ Add this plugin to your game
 * ✓ Modify plugin parameters
 * ✓ Remove this plugin from your game
 * -----------------------------Filename---------------------------------------
 * The filename for this plugin MUST remain CGMZ_Footsteps.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * -----------------------------Latest Version---------------------------------
 * Hi all, this latest version adds visual footsteps. You can now show a sprite
 * when the player takes a footstep, which could be something like footprints
 * through snow. This sprite can be customized with different graphics for each
 * direction as well as how long it lasts before it fades. 
 *
 * This update comes with two fade modes for footprints, step and time. Time
 * based fading will automatically fade after so many frames no matter how far
 * away the player is, while step based fading will fade only after the player
 * has taken a certain amount of steps. The fade is linearly interpolated from
 * a start and end value which can be customized.
 * 
 * Version Alpha R4
 * - Added footstep graphics
 *
 * @param Footstep Setup
 *
 * @param Footsteps
 * @parent Footstep Setup
 * @type struct<Footstep>[]
 * @default []
 * @desc Set up footstep data here
 *
 * @param Frames Between Footsteps
 * @parent Footstep Setup
 * @type number
 * @default 10
 * @min 0
 * @desc Amount of frames to wait before another footstep sound can play
 *
 * @param Steps Between Footsteps
 * @parent Footstep Setup
 * @type number
 * @default 0
 * @min 0
 * @desc Amount of steps needed before another footstep can play.
 *
 * @param Mechanics
 *
 * @param Footstep Switch
 * @parent Mechanics
 * @type switch
 * @default 0
 * @desc Switch that controls if footsteps can play or not. If set to 0 (none), footsteps will always be enabled.
*/
/*~struct~Footstep:
 * @param Region
 * @type number
 * @min -1
 * @desc The region id to play this footstep on. Set to -1 to not use region id footstep
 * @default -1
 * 
 * @param Terrain Tag
 * @type number
 * @min -1
 * @desc The terrain tag to play this footstep on. Set to -1 to not use terrain tag footstep
 * @default -1
 *
 * @param Graphic Settings
 *
 * @param Up Image
 * @parent Graphic Settings
 * @type file
 * @dir img
 * @desc Image to use when the player is facing up
 *
 * @param Down Image
 * @parent Graphic Settings
 * @type file
 * @dir img
 * @desc Image to use when the player is facing down
 *
 * @param Left Image
 * @parent Graphic Settings
 * @type file
 * @dir img
 * @desc Image to use when the player is facing left
 *
 * @param Right Image
 * @parent Graphic Settings
 * @type file
 * @dir img
 * @desc Image to use when the player is facing right
 *
 * @param Graphic Fade Type
 * @parent Graphic Settings
 * @type select
 * @option Step
 * @option Time
 * @default Step
 * @desc Fade type
 *
 * @param Graphic Fade Start
 * @parent Graphic Settings
 * @type number
 * @default 3
 * @desc Amount of steps/frames before the graphic starts to fade
 *
 * @param Graphic Fade End
 * @parent Graphic Settings
 * @type number
 * @default 8
 * @desc Amount of steps/frames before the graphic is completely faded
 *
 * @param Sound Settings
 * 
 * @param Sound
 * @parent Sound Settings
 * @type struct<SE>[]
 * @default []
 * @desc Set up the footstep sound(s) here
 * 
 * @param Volume Variance
 * @parent Sound Settings
 * @type number
 * @min 0
 * @desc The amount the volume can vary (ex: variance of 5, base of 90, possible range = 85-95)
 * @default 0
 * 
 * @param Pitch Variance
 * @parent Sound Settings
 * @type number
 * @min 0
 * @desc The amount the pitch can vary (ex: variance of 5, base of 100, possible range = 95-105)
 * @default 0
 * 
 * @param Pan Variance
 * @parent Sound Settings
 * @type number
 * @min 0
 * @desc The amount the pan can vary (ex: variance of 5, base of 0, possible range = -5 to 5)
 * @default 0
 * 
 * @param Footstep Delay
 * @parent Sound Settings
 * @type number
 * @min 0
 * @desc Time until another footstep sound can play, set to 0 to use default Frames Between Footsteps parameter
 * @default 0
 * 
 * @param Footstep Step Delay
 * @parent Sound Settings
 * @type number
 * @min 0
 * @desc Amount of steps until another footstep sound can play, set to 0 to use default Steps Between Footsteps parameter
 * @default 0
 *
 * @param Integrations
 *
 * @param Sound ID
 * @parent Integrations
 * @type text[]
 * @default []
 * @desc Enter in sounds from [CGMZ] Sound IDs here, will override Sound parameter. Only SE sound ids are valid
*/
/*~struct~SE:
 * @param Name
 * @type file
 * @dir audio/se
 * @desc The SE file to play
 *
 * @param Volume
 * @type number
 * @min 0
 * @max 100
 * @default 90
 * @desc The volume the sound is played
 *
 * @param Pitch
 * @type number
 * @min 50
 * @max 150
 * @default 100
 * @desc The pitch of the sound
 *
 * @param Pan
 * @type number
 * @min -100
 * @max 100
 * @default 0
 * @desc The pan of the sound
*/
Imported.CGMZ_Footsteps = true;
CGMZ.Versions["Footsteps"] = "Alpha R4";
CGMZ.Footsteps = {};
CGMZ.Footsteps.parameters = PluginManager.parameters('CGMZ_Footsteps');
CGMZ.Footsteps.SoundEnabled = (CGMZ.Footsteps.parameters["Sound Enabled"] === 'true');
CGMZ.Footsteps.FootstepSwitch = Number(CGMZ.Footsteps.parameters["Footstep Switch"]);
CGMZ.Footsteps.FramesBetweenFootsteps = Number(CGMZ.Footsteps.parameters["Frames Between Footsteps"]);
CGMZ.Footsteps.StepsBetweenFootsteps = Number(CGMZ.Footsteps.parameters["Steps Between Footsteps"]);
CGMZ.Footsteps.Footsteps = CGMZ_Utils.parseJSON(CGMZ.Footsteps.parameters["Footsteps"], [], "[CGMZ] Footsteps", "Your Footsteps parameter was set up incorrectly and could not be read.");
//=============================================================================
// CGMZ_Footstep
//-----------------------------------------------------------------------------
// Data class used to store footstep info
//=============================================================================
function CGMZ_Footstep() {
	this.initialize(...arguments);
}
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Footstep.prototype.initialize = function(info, index) {
	this.index = index; // stored for fast lookup later
	this.region = Number(info.Region);
	this.terrainTag = Number(info["Terrain Tag"]);
	this.upImage = info["Up Image"];
	this.downImage = info["Down Image"];
	this.leftImage = info["Left Image"];
	this.rightImage = info["Right Image"];
	this.graphicFadeType = info["Graphic Fade Type"];
	this.graphicFadeStart = Number(info["Graphic Fade Start"]);
	this.graphicFadeEnd = Number(info["Graphic Fade End"]);
	this.volVariance = Number(info["Volume Variance"]) + 1;
	this.panVariance = Number(info["Pan Variance"]) + 1;
	this.pitchVariance = Number(info["Pitch Variance"]) + 1;
	this.footstepDelay = Number(info["Footstep Delay"]);
	this.stepDelay = Number(info["Footstep Step Delay"]);
	this.soundId = CGMZ_Utils.parseJSON(info["Sound ID"], [], "[CGMZ] Footsteps", `Your Sound ID parameter for sound with index ${index+1} was not valid JSON and could not be read.`);
	this.sound = CGMZ_Utils.parseJSON(info.Sound, [], "[CGMZ] Footsteps", `Your Sound parameter for sound with index ${index+1} was not valid JSON and could not be read.`).map(x => CGMZ_Utils.parseSoundEffectJSON(x, "[CGMZ] Footsteps"));
};
//-----------------------------------------------------------------------------
// Get a sound object
//-----------------------------------------------------------------------------
CGMZ_Footstep.prototype.getSound = function() {
	let sound, rng;
	if(Imported.CGMZ_SoundIDs && this.soundId.length > 0) {
		rng = Math.randomInt(this.soundId.length);
		sound = $cgmzTemp.getSoundID(this.soundId[rng]);
	} else {
		rng = Math.randomInt(this.sound.length);
		sound = this.sound[rng];
	}
	if(!sound) return null;
	obj = {
		name: sound.name,
		volume: CGMZ_Utils.applyVariance(sound.volume, this.volVariance),
		pitch: CGMZ_Utils.applyVariance(sound.pitch, this.pitchVariance),
		pan: CGMZ_Utils.applyVariance(sound.pan, this.panVariance)
	}
	return obj;
};
//-----------------------------------------------------------------------------
// Get a graphic path
//-----------------------------------------------------------------------------
CGMZ_Footstep.prototype.getGraphic = function(direction) {
	switch(direction) {
		case 2: return this.downImage;
		case 4: return this.leftImage;
		case 6: return this.rightImage;
		case 8: return this.upImage;
	}
	return "";
};
//=============================================================================
// CGMZ_Temp
//-----------------------------------------------------------------------------
// Add temp footstep data
//=============================================================================
//-----------------------------------------------------------------------------
// Also initialize footstep data
//-----------------------------------------------------------------------------
const alias_CGMZFootsteps_CGMZTemp_createPluginData = CGMZ_Temp.prototype.createPluginData;
CGMZ_Temp.prototype.createPluginData = function() {
	alias_CGMZFootsteps_CGMZTemp_createPluginData.call(this);
	this.initializeFootsteps();
};
//-----------------------------------------------------------------------------
// Initialize recruitment board data
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.initializeFootsteps = function() {
	this.footsteps = {};
	this.footsteps.lastFootstepInfo = null;
	this.footstepsFrameCount = 0;
	this.footstepsCounter = 0;
	this.footsteps.footstepInfo = [];
	this.footsteps.requestedSprites = [];
	let index = 0;
	for(const footstepJSON of CGMZ.Footsteps.Footsteps) {
		const obj = CGMZ_Utils.parseJSON(footstepJSON, null, "[CGMZ] Footsteps", "One of your footsteps was set up incorrectly and could not be read.");
		if(!obj) continue;
		const footstep = new CGMZ_Footstep(obj, index++);
		this.footsteps.footstepInfo.push(footstep);
	}
};
//-----------------------------------------------------------------------------
// Get a footstep sound by index
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.getFootstepByIndex = function(index) {
	return this.footsteps.footstepInfo[index];
};
//-----------------------------------------------------------------------------
// Get a footstep sound by region id or terrain tag (region preferred)
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.getFootstepByRegionIdOrTerrainTag = function(id, tag) {
	return this.footsteps.footstepInfo.find((footstep) => (footstep.region === id) || (footstep.terrainTag === tag));
};
//-----------------------------------------------------------------------------
// Set the last footstep info for quick lookup if not changed
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.setLastFootstep = function(index, mapId, regionId, terrainTag) {
	this.footsteps.lastFootstepInfo = {
		index: index,
		mapId: mapId,
		regionId: regionId,
		terrainTag: terrainTag
	};
};
//-----------------------------------------------------------------------------
// Clear saved last footstep lookup info
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.clearLastFootstep = function() {
	this.footsteps.lastFootstepInfo = null;
};
//-----------------------------------------------------------------------------
// Request a footstep sprite
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.requestFootstepSprite = function(opts) {
	this.footsteps.requestedSprites.push(opts);
};
//-----------------------------------------------------------------------------
// Get the latest requested sprite, or undefined if not exist
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.getRequestedFootstepSprite = function() {
	return this.footsteps.requestedSprites.shift();
};
//-----------------------------------------------------------------------------
// Set the last footstep info for quick lookup if not changed
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.canUseLastFootstep = function(mapId, regionId, terrainTag) {
	if(this.footsteps.lastFootstepInfo?.mapId !== mapId) return false;
	if(this.footsteps.lastFootstepInfo.regionId !== regionId) return false;
	if(this.footsteps.lastFootstepInfo.terrainTag !== terrainTag) return false;
	return true;
};
//-----------------------------------------------------------------------------
// Get the last footstep index, or undefined if not exist
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.getLastFootstepIndex = function() {
	return this.footsteps.lastFootstepInfo?.index;
};
//-----------------------------------------------------------------------------
// Also update CGMZ footstep timer
//-----------------------------------------------------------------------------
const alias_CGMZFootsteps_CGMZTemp_update = CGMZ_Temp.prototype.update;
CGMZ_Temp.prototype.update = function() {
	alias_CGMZFootsteps_CGMZTemp_update.call(this);
	this.updateFootstepTimer();
};
//-----------------------------------------------------------------------------
// Also update CGMZ footstep timer
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.updateFootstepTimer = function() {
	this.footstepsFrameCount--;
};
//-----------------------------------------------------------------------------
// Check if any temp properties block footstep
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.canFootstep = function() {
	const steps = $gameParty.steps();
	return this.footstepsFrameCount <= 0 && this.footstepsCounter <= steps;
};
//-----------------------------------------------------------------------------
// Set the footstep timer
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.setFootstepTimer = function(time = 0) {
	this.footstepsFrameCount = time || CGMZ.Footsteps.FramesBetweenFootsteps;
};
//-----------------------------------------------------------------------------
// Set the footstep timer to half a step
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.clearFootstepTimer = function() {
	this.footstepsFrameCount = 0;
};
//-----------------------------------------------------------------------------
// Set the footstep counter
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.setFootstepCounter = function(steps = 0) {
	this.footstepsCounter = (steps) ? $gameParty.steps() + steps : $gameParty.steps() + CGMZ.Footsteps.StepsBetweenFootsteps;
};
//-----------------------------------------------------------------------------
// Set the footstep counter to current step count
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.clearFootstepCounter = function() {
	this.footstepsCounter = $gameParty.steps();
};
//=============================================================================
// Game_Player
//-----------------------------------------------------------------------------
// Play footstep sound when moving
//=============================================================================
//-----------------------------------------------------------------------------
// Also update footstep processing
//-----------------------------------------------------------------------------
const alias_CGMZFootsteps_GamePlayer_executeMove = Game_Player.prototype.executeMove;
Game_Player.prototype.executeMove = function(direction) {
	alias_CGMZFootsteps_GamePlayer_executeMove.call(this, direction);
	if(this.isMovementSucceeded() && this.CGMZ_canFootstep()) {
		this.CGMZ_handleFootstep();
	}
};
//-----------------------------------------------------------------------------
// Check if footsteps are currently allowed
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMZ_canFootstep = function() {
	return (CGMZ.Footsteps.FootstepSwitch === 0 || $gameSwitches.value(CGMZ.Footsteps.FootstepSwitch));
};
//-----------------------------------------------------------------------------
// Handling for footstep
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMZ_handleFootstep = function() {
	this.CGMZ_makeFootstep();
	this.CGMZ_doAudioFootstep();
	this.CGMZ_doVisualFootstep();
};
//-----------------------------------------------------------------------------
// Make the next footstep sound
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMZ_makeFootstep = function() {
	const mapId = $gameMap.mapId();
	const regionId = $gameMap.regionId(this.x, this.y);
	const terrainTag = $gameMap.terrainTag(this.x, this.y);
	if($cgmzTemp.canUseLastFootstep(mapId, regionId, terrainTag)) {
		return;
	}
	const footstep = $cgmzTemp.getFootstepByRegionIdOrTerrainTag(regionId, terrainTag);
	$cgmzTemp.setLastFootstep(footstep?.index, mapId, regionId, terrainTag);
	$cgmzTemp.clearFootstepTimer();
};
//-----------------------------------------------------------------------------
// Play footstep sound (if possible)
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMZ_doAudioFootstep = function() {
	const index = $cgmzTemp.getLastFootstepIndex();
	if(typeof index === 'undefined' || !$cgmzTemp.canFootstep()) return;
	const footstep = $cgmzTemp.getFootstepByIndex(index);
	const sound = footstep?.getSound();
	if(sound) {
		AudioManager.playSe(sound);
		$cgmzTemp.setFootstepTimer(footstep.footstepDelay);
		$cgmzTemp.setFootstepCounter(footstep.stepDelay);
	}
};
//-----------------------------------------------------------------------------
// Show footstep visual (if possible)
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMZ_doVisualFootstep = function() {
	const index = $cgmzTemp.getLastFootstepIndex();
	if(typeof index === 'undefined') return;
	const footstep = $cgmzTemp.getFootstepByIndex(index);
	const graphic = footstep?.getGraphic(this._direction);
	if(graphic) {
		$cgmzTemp.requestFootstepSprite({
			x: this.x,
			y: this.y,
			z: this.screenZ() - 1,
			graphic: graphic,
			fadeType: footstep.graphicFadeType,
			fadeStart: footstep.graphicFadeStart,
			fadeEnd: footstep.graphicFadeEnd
		});
	}
};
//=============================================================================
// Spriteset_Map
//-----------------------------------------------------------------------------
// Handle footstep sprites
//=============================================================================
//-----------------------------------------------------------------------------
// Also initialize footstep sprite array
//-----------------------------------------------------------------------------
const alias_CGMZFootsteps_SpritesetMap_initialize = Spriteset_Map.prototype.initialize;
Spriteset_Map.prototype.initialize = function() {
	alias_CGMZFootsteps_SpritesetMap_initialize.call(this);
	this._cgmz_footstepSprites = [];
};
//-----------------------------------------------------------------------------
// Also update footstep sprites
//-----------------------------------------------------------------------------
const alias_CGMZFootsteps_SpritesetMap_update = Spriteset_Map.prototype.update;
Spriteset_Map.prototype.update = function() {
	alias_CGMZFootsteps_SpritesetMap_update.call(this);
	this.CGMZ_updateFootstepSprites();
};
//-----------------------------------------------------------------------------
// Update footstep sprites
//-----------------------------------------------------------------------------
Spriteset_Map.prototype.CGMZ_updateFootstepSprites = function() {
	for(const sprite of this._cgmz_footstepSprites) {
		if(sprite.isEnded()) {
			this.CGMZ_removeFootstep(sprite);
		}
	}
	this.CGMZ_processFootstepRequest();
};
//-----------------------------------------------------------------------------
// Process requested footstep sprites
//-----------------------------------------------------------------------------
Spriteset_Map.prototype.CGMZ_processFootstepRequest = function() {
	const request = $cgmzTemp.getRequestedFootstepSprite();
	if(request) this.CGMZ_createFootstepSprite(request);
};
//-----------------------------------------------------------------------------
// Create a footstep sprite
//-----------------------------------------------------------------------------
Spriteset_Map.prototype.CGMZ_createFootstepSprite = function(request) {
	const sprite = new CGMZ_Sprite_Footstep(request);
	this._tilemap.addChild(sprite);
	this._cgmz_footstepSprites.push(sprite);
};
//-----------------------------------------------------------------------------
// Remove a footstep sprite
//-----------------------------------------------------------------------------
Spriteset_Map.prototype.CGMZ_removeFootstep = function(sprite) {
	this._cgmz_footstepSprites.remove(sprite);
	this._tilemap.removeChild(sprite);
	sprite.destroy();
};
//=============================================================================
// CGMZ_Sprite_Footstep
//-----------------------------------------------------------------------------
// Footstep sprite object
//=============================================================================
function CGMZ_Sprite_Footstep() {
    this.initialize(...arguments);
}
CGMZ_Sprite_Footstep.prototype = Object.create(Sprite.prototype);
CGMZ_Sprite_Footstep.prototype.constructor = CGMZ_Sprite_Footstep;
//-----------------------------------------------------------------------------
// Initialize the sprite
//-----------------------------------------------------------------------------
CGMZ_Sprite_Footstep.prototype.initialize = function(request) {
    Sprite.prototype.initialize.call(this);
    this._mapX = request.x;
	this._mapY = request.y;
	this._mapZ = request.z;
	this.z = this._mapZ;
	this.fadeType = request.fadeType;
	this.fadeStart = request.fadeStart;
	this.fadeEnd = request.fadeEnd;
	this.progress = 0;
	this.steps = $gameParty.steps();
	this.opacity = 150;
	this.targetOpacity = 255;
	this.anchor.x = 0.5;
	this.anchor.y = 1;
	const imgData = CGMZ_Utils.getImageData(request.graphic, "img");
	this.bitmap = ImageManager.loadBitmap(imgData.folder, imgData.filename);
	this.hide();
};
//-----------------------------------------------------------------------------
// Check if footstep is ended
//-----------------------------------------------------------------------------
CGMZ_Sprite_Footstep.prototype.isEnded = function() {
	return this.opacity < 1;
};
//-----------------------------------------------------------------------------
// Update the sprite
//-----------------------------------------------------------------------------
CGMZ_Sprite_Footstep.prototype.update = function() {
	Sprite.prototype.update.call(this);
	this.updateShowing();
	if(this.visible) {
		this.updatePosition();
		this.updateProgress();
		this.updateOpacity();
	}
};
//-----------------------------------------------------------------------------
// Update the sprite position
//-----------------------------------------------------------------------------
CGMZ_Sprite_Footstep.prototype.updateShowing = function() {
	if(!this.visible) {
		const steps = $gameParty.steps();
		if(steps > this.steps) this.show();
	}
};
//-----------------------------------------------------------------------------
// Update the sprite position
//-----------------------------------------------------------------------------
CGMZ_Sprite_Footstep.prototype.updatePosition = function() {
	this.x = this.screenX();
	this.y = this.screenY();
	this.z = this._mapZ;
};
//-----------------------------------------------------------------------------
// Get sprite screen x
//-----------------------------------------------------------------------------
CGMZ_Sprite_Footstep.prototype.screenX = function() {
	const tw = $gameMap.tileWidth();
	return Math.floor($gameMap.adjustX(this._mapX) * tw + tw / 2);
};
//-----------------------------------------------------------------------------
// Get sprite screen y
//-----------------------------------------------------------------------------
CGMZ_Sprite_Footstep.prototype.screenY = function() {
	const th = $gameMap.tileHeight();
    return Math.floor($gameMap.adjustY(this._mapY) * th + th);
};
//-----------------------------------------------------------------------------
// Update the sprite progress
//-----------------------------------------------------------------------------
CGMZ_Sprite_Footstep.prototype.updateProgress = function() {
	if(this.fadeType === 'Step') {
		const steps = $gameParty.steps();
		this.progress = steps - this.steps;
	} else {
		this.progress++;
	}
};
//-----------------------------------------------------------------------------
// Update the sprite opacity
//-----------------------------------------------------------------------------
CGMZ_Sprite_Footstep.prototype.updateOpacity = function() {
	if(this.progress > this.fadeStart) {
		const fadeTotal = this.fadeEnd - this.fadeStart;
		const fadeProgress = (this.progress - this.fadeStart) * 1.0;
		const percent = fadeProgress / fadeTotal;
		this.targetOpacity = Math.floor(CGMZ_Utils.lerp(255, 0, percent));
	}
	if(this.opacity !== this.targetOpacity) {
		const opacityChange = Math.min(4, Math.abs(this.opacity - this.targetOpacity));
		if(this.opacity < this.targetOpacity) {
			this.opacity += opacityChange;
		} else {
			this.opacity -= opacityChange;
		}
	}
};