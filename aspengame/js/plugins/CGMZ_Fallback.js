/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/fallback/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc If a file cannot be found, fall back to a default file
 * @help
 * ============================================================================
 * For terms and conditions using this plugin in your game please visit:
 * https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * Become a Patron to get access to beta/alpha plugins plus other goodies!
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * Version: Beta
 * ----------------------------------------------------------------------------
 * Compatibility: Only tested with my CGMZ plugins.
 * Made for RPG Maker MZ 1.10.0
 * ----------------------------------------------------------------------------
 * Description: Sometimes your game runs into a file that is missing and an
 * error screen appears. This can be good during a playtest to let you know
 * you need to add your missing file still. However, in a deployed game, this
 * prevents your players from playing the game. With [CGMZ] Fallback, this
 * error screen is not shown in deployed games and instead a default file will
 * be loaded.
 * ----------------------------------------------------------------------------
 * Documentation:
 * -----------------------------Main Features----------------------------------
 * FALLBACK FILES
 * Set a fallback image file. This file will be used in the event that the
 * original file that was attempted to load could not be found. Typically, this
 * would result in a crash. With this plugin, it simply results in a different
 * file being loaded (the fallback).
 *
 * You can also set a fallback sound file for each sound type. These work the
 * same as a fallback image does when an image encounters an error during load.
 * ----------------------------Plugin Commands---------------------------------
 * This plugin does not have any plugin commands.
 * ------------------------------Saved Games-----------------------------------
 * This plugin is fully compatible with saved games
 *
 * This means the following will work in saved games:
 * ✓ Add this plugin to your game
 * ✓ Modify plugin parameters
 * ✓ Remove this plugin from your game
 * -----------------------------Filename---------------------------------------
 * The filename for this plugin MUST remain CGMZ_Fallback.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * --------------------------Latest Version------------------------------------
 * Hi all, welcome to the beta release for this plugin! If you are new here,
 * this plugin intercepts file loading errors and instead shows a fall back
 * file. For example, if you set an actor face early on in development and
 * forget to change it later in your events when you change the file name,
 * normally your player would get an error and be unable to continue playing
 * your game. With this plugin, a fallback image loads instead.
 *
 * This update adds fallbacks for video files, so if a video file encounters
 * an error it will instead show the fallback video file. If using video
 * fallback, you still need to provide both a webm and mp4 video file if
 * your game is going to be played on a platform that does not support webm.
 *
 * Version Beta
 * - Added video fallback
 *
 * @param Images
 *
 * @param Image
 * @parent Images
 * @type file
 * @dir img/
 * @desc The fallback image to load in the event another image cannot be found
 *
 * @param Character
 * @parent Images
 * @type file
 * @dir img/
 * @desc The fallback image to load in the event another character image cannot be found
 *
 * @param Face
 * @parent Images
 * @type file
 * @dir img/
 * @desc The fallback image to load in the event another face image cannot be found
 *
 * @param Enemy
 * @parent Images
 * @type file
 * @dir img/
 * @desc The fallback image to load in the event another enemy image cannot be found
 *
 * @param Actor
 * @parent Images
 * @type file
 * @dir img/
 * @desc The fallback image to load in the event another sv actor image cannot be found
 *
 * @param Audio
 *
 * @param BGM
 * @parent Audio
 * @type file
 * @dir audio/bgm
 * @desc The fallback BGM to use
 *
 * @param BGS
 * @parent Audio
 * @type file
 * @dir audio/bgs
 * @desc The fallback BGS to use
 *
 * @param SE
 * @parent Audio
 * @type file
 * @dir audio/se
 * @desc The fallback SE to use
 *
 * @param ME
 * @parent Audio
 * @type file
 * @dir audio/me
 * @desc The fallback ME to use
 *
 * @param Video
 *
 * @param Fallback Video
 * @parent Video
 * @type file
 * @dir movies/
 * @desc Video file to fall back to
 *
 * @param Debug
 *
 * @param Fallback In Test
 * @parent Debug
 * @type boolean
 * @default true
 * @desc If true, the fallbacks will also be used in playtest. If false, the game will still crash in playtest.
*/
/*~struct~BGM:
 * @param Name
 * @type file
 * @dir audio/bgm
 * @desc The BGM file to play
 * 
 * @param Volume
 * @type number
 * @min 0
 * @max 100
 * @default 90
 * @desc The volume of the BGM
 * 
 * @param Pitch
 * @type number
 * @min 50
 * @max 150
 * @default 100
 * @desc The pitch of the BGM
 * 
 * @param Pan
 * @type number
 * @min -100
 * @max 100
 * @default 0
 * @desc The pan of the BGM
*/
/*~struct~BGS:
 * @param Name
 * @type file
 * @dir audio/bgs
 * @desc The BGS file to play
 * 
 * @param Volume
 * @type number
 * @min 0
 * @max 100
 * @default 90
 * @desc The volume of the BGS
 * 
 * @param Pitch
 * @type number
 * @min 50
 * @max 150
 * @default 100
 * @desc The pitch of the BGS
 * 
 * @param Pan
 * @type number
 * @min -100
 * @max 100
 * @default 0
 * @desc The pan of the BGS
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
 * @desc The volume of the SE
 * 
 * @param Pitch
 * @type number
 * @min 50
 * @max 150
 * @default 100
 * @desc The pitch of the SE
 * 
 * @param Pan
 * @type number
 * @min -100
 * @max 100
 * @default 0
 * @desc The pan of the SE
*/
/*~struct~ME:
 * @param Name
 * @type file
 * @dir audio/me
 * @desc The ME file to play
 * 
 * @param Volume
 * @type number
 * @min 0
 * @max 100
 * @default 90
 * @desc The volume of the ME
 * 
 * @param Pitch
 * @type number
 * @min 50
 * @max 150
 * @default 100
 * @desc The pitch of the ME
 * 
 * @param Pan
 * @type number
 * @min -100
 * @max 100
 * @default 0
 * @desc The pan of the ME
*/
Imported.CGMZ_Fallback = true;
CGMZ.Versions["Fallback"] = "Beta";
CGMZ.Fallback = {};
CGMZ.Fallback.parameters = PluginManager.parameters('CGMZ_Fallback');
CGMZ.Fallback.Image = CGMZ.Fallback.parameters["Image"];
CGMZ.Fallback.Character = CGMZ.Fallback.parameters["Character"];
CGMZ.Fallback.Face = CGMZ.Fallback.parameters["Face"];
CGMZ.Fallback.Enemy = CGMZ.Fallback.parameters["Enemy"];
CGMZ.Fallback.Actor = CGMZ.Fallback.parameters["Actor"];
CGMZ.Fallback.BGM = 'audio/bgm/' + CGMZ.Fallback.parameters["BGM"] + '.ogg';
CGMZ.Fallback.BGS = 'audio/bgs/' + CGMZ.Fallback.parameters["BGS"] + '.ogg';
CGMZ.Fallback.ME = 'audio/me/' + CGMZ.Fallback.parameters["ME"] + '.ogg';
CGMZ.Fallback.SE = 'audio/se/' + CGMZ.Fallback.parameters["SE"] + '.ogg';
CGMZ.Fallback.Video = CGMZ.Fallback.parameters["Fallback Video"];
CGMZ.Fallback.FallbackInTest = (CGMZ.Fallback.parameters["Fallback In Test"] === 'true');
//=============================================================================
// Bitmap
//-----------------------------------------------------------------------------
// If error, use the fallback image instead
//=============================================================================
//-----------------------------------------------------------------------------
// Change image to fallback image if error
//-----------------------------------------------------------------------------
const alias_CGMZFallback_Bitmap_onError = Bitmap.prototype._onError;
Bitmap.prototype._onError = function() {
	if($gameTemp.isPlaytest() && !CGMZ.Fallback.FallbackInTest) {
		alias_CGMZFallback_Bitmap_onError.call(this);
	} else {
		let imageData;
		if(this._url.includes('img/characters/')) {
			imageData = CGMZ_Utils.getImageData(CGMZ.Fallback.Character, "img");
		} else if(this._url.includes('img/faces/')) {
			imageData = CGMZ_Utils.getImageData(CGMZ.Fallback.Face, "img");
		} else if(this._url.includes('img/enemies/') || this._url.includes('img/sv_enemies')) {
			imageData = CGMZ_Utils.getImageData(CGMZ.Fallback.Enemy, "img");
		} else if(this._url.includes('img/sv_actors')) {
			imageData = CGMZ_Utils.getImageData(CGMZ.Fallback.Actor, "img");
		} else {
			imageData = CGMZ_Utils.getImageData(CGMZ.Fallback.Image, "img");
		}
		ImageManager.loadBitmap(imageData.folder, imageData.filename);
		this._url = imageData.folder + Utils.encodeURI(imageData.filename) + ".png";
		this.retry();
	}
};
//=============================================================================
// WebAudio
//-----------------------------------------------------------------------------
// If error, use the fallback sound instead
//=============================================================================
//-----------------------------------------------------------------------------
// Change to fallback audio file
//-----------------------------------------------------------------------------
const alias_CGMZFallback_WebAudio_onError = WebAudio.prototype._onError;
WebAudio.prototype._onError = function() {
	if($gameTemp.isPlaytest() && !CGMZ.Fallback.FallbackInTest) {
		alias_CGMZFallback_WebAudio_onError.call(this);
	} else {
		if(this._url.includes('audio/bgm/')) {
			this._url = CGMZ.Fallback.BGM;
		} else if(this._url.includes('audio/bgs/')) {
			this._url = CGMZ.Fallback.BGS;
		} else if(this._url.includes('audio/me/')) {
			this._url = CGMZ.Fallback.ME;
		} else {
			this._url = CGMZ.Fallback.SE;
		}
		this.retry();
	}
};
//=============================================================================
// Video
//-----------------------------------------------------------------------------
// If error, use the fallback video instead
//=============================================================================
//-----------------------------------------------------------------------------
// Change to fallback video file
//-----------------------------------------------------------------------------
const alias_CGMZFallback_Video_onError = Video._onError;
Video._onError = function() {
	if(!CGMZ.Fallback.Video || ($gameTemp.isPlaytest() && !CGMZ.Fallback.FallbackInTest)) {
		alias_CGMZFallback_Video_onError.call(this);
	} else {
		this._element.src = 'movies/' + CGMZ.Fallback.Video + ((Utils.canPlayWebm()) ? '.webm' : '.mp4');
		this._updateVisibility(false);
		this._element.load();
	}
};