/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/preloader/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc Load your files before they are needed so they can be used instantly
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
 * Description: Loads your files before you need them, so that when it is time
 * to use them they can be used instantly. This can help with delays in
 * showing a picture animation, playing audio, or displaying fonts.
 * ----------------------------------------------------------------------------
 * Documentation:
 * ---------------------------Alpha Notes--------------------------------------
 * This plugin has many planned improvements over the course of its alpha
 * stage, including:
 *
 * 1) Smart Preload features
 * 2) Manual Cache Control
 * 3) Load Scene with progress bar before title
 * ------------------------------Set Up----------------------------------------
 * To get started, add the files you would like to preload to the image,
 * audio, etc. plugin parameters. These will then be loaded when the player
 * starts the game. Files that are already loaded can be used instantly
 * instead of needing to wait up to a few seconds while the file loads if you
 * wait until it is requested to load it (default behavior).
 *
 * Some files are preloaded by default, so you do not need to preload those
 * separately. These include most of the graphics in the system folder.
 * ------------------------------Fonts-----------------------------------------
 * Fonts are typically small and not many are used, so they are always loaded
 * at the start of the game and there should be no need to worry about font
 * memory management due to this.
 * -------------------------Images & Audio-------------------------------------
 * Image and audio files can be quite large. Preloading too many may lead to
 * players' computers not being able to have them loaded all at once,
 * especially on lower end hardware. For this reason, you should be careful
 * to not preload too many things. In most cases, a small loading delay is not
 * going to be noticeable by your player.
 * -------------------------Plugin Commands------------------------------------
 * This plugin does not currently include any plugin commands
 * ------------------------------Saved Games-----------------------------------
 * This plugin is fully compatible with saved games. This means you can:
 *
 * ✓ Add this plugin to a saved game and it will work as expected
 * ✓ Change any plugin params and changes will be reflected in saved games
 * ✓ Remove the plugin with no issue to save data
 * -----------------------------Filename---------------------------------------
 * The filename for this plugin MUST remain CGMZ_Preloader.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * --------------------------Latest Version------------------------------------
 * Hi all, this version adds some plugin commands to preload font, image, or
 * audio files. Previously, this plugin preloaded everything at game start.
 * However, sometimes you might not need everything you want to preload to be
 * preloaded at that time. This now allows you to preload things as needed,
 * which should cut down on how much you need to have preloaded on game start.
 * Note that you should still be wary of preloading too many things.
 *
 * Version Alpha R2
 * - Added plugin command to preload font file
 * - Added plugin command to preload an image file
 * - Added plugin command to preload an audio file
 *
 * @command Preload Image
 * @desc Loads an image file into the preload cache
 *
 * @arg File
 * @type file
 * @dir img/
 * @desc The image file to preload.
 *
 * @command Preload Audio
 * @desc Loads an audio file into the preload cache
 *
 * @arg File
 * @type file
 * @dir audio/
 * @desc The audio file to preload.
 *
 * @command Preload Font
 * @desc Loads a font file
 *
 * @arg File
 * @desc The font file to load
 *
 * @arg Family
 * @desc The font family (what you type in to use this font)
 *
 * @param Image Settings
 *
 * @param Images
 * @parent Image Settings
 * @type file[]
 * @dir img
 * @default []
 * @desc Set up image files to preload here
 *
 * @param Audio Settings
 *
 * @param Audios
 * @parent Audio Settings
 * @type file[]
 * @dir audio
 * @default []
 * @desc Set up audio files to preload here
 *
 * @param Font Settings
 *
 * @param Fonts
 * @parent Font Settings
 * @type struct<Font>[]
 * @default []
 * @desc Set up font files to preload here. You should include the file extension.
*/
/*~struct~Font:
 * @param Family
 * @desc What you type in to use this font, wherever you want to use it
 *
 * @param File
 * @desc The font filename, including the extension.
*/
Imported.CGMZ_Preloader = true;
CGMZ.Versions["Preloader"] = "Alpha R2";
CGMZ.Preloader = {};
CGMZ.Preloader.parameters = PluginManager.parameters('CGMZ_Preloader');
//=============================================================================
// CGMZ_Temp
//-----------------------------------------------------------------------------
// Handle plugin commands
//=============================================================================
//-----------------------------------------------------------------------------
// Register Plugin Commands
//-----------------------------------------------------------------------------
const alias_CGMZPreloader_CGMZTemp_registerPluginCommands = CGMZ_Temp.prototype.registerPluginCommands;
CGMZ_Temp.prototype.registerPluginCommands = function() {
	alias_CGMZPreloader_CGMZTemp_registerPluginCommands.call(this);
	PluginManager.registerCommand("CGMZ_Preloader", "Preload Font", this.pluginCommandPreloaderPreloadFont);
	PluginManager.registerCommand("CGMZ_Preloader", "Preload Image", this.pluginCommandPreloaderPreloadImage);
	PluginManager.registerCommand("CGMZ_Preloader", "Preload Audio", this.pluginCommandPreloaderPreloadAudio);
};
//-----------------------------------------------------------------------------
// Plugin Command - Preload Font
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPreloaderPreloadFont = function(args) {
	FontManager.load(args.Family, args.File);
};
//-----------------------------------------------------------------------------
// Plugin Command - Preload Image
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPreloaderPreloadImage = function(args) {
	const imgData = CGMZ_Utils.getImageData(args.File, "img");
	ImageManager.CGMZ_preloadBitmap(imgData.folder, imgData.filename);
};
//-----------------------------------------------------------------------------
// Plugin Command - Preload Audio
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPreloaderPreloadAudio = function(args) {
	const fileInfo = args.File.split('/');
	const folder = fileInfo.shift() + "/";
	const filename = fileInfo.join('/');
	AudioManager.CGMZ_preloadAudio(folder, filename, AudioManager._path + folder + Utils.encodeURI(filename) + AudioManager.audioFileExt());
};
//=============================================================================
// Scene_Boot
//-----------------------------------------------------------------------------
// Preload files before game launch
//=============================================================================
//-----------------------------------------------------------------------------
// Also set preload variables
//-----------------------------------------------------------------------------
const alias_CGMZPreloader_SceneBoot_initialize = Scene_Boot.prototype.initialize;
Scene_Boot.prototype.initialize = function() {
    alias_CGMZPreloader_SceneBoot_initialize.call(this);
    this._cgmz_totalPreloaded = 0;
	this._cgmz_expectedPreload = 0;
};
//-----------------------------------------------------------------------------
// Also start preloading
//-----------------------------------------------------------------------------
const alias_CGMZPreloader_SceneBoot_create = Scene_Boot.prototype.create;
Scene_Boot.prototype.create = function() {
    alias_CGMZPreloader_SceneBoot_create.call(this);
    this.CGMZ_startPreload();
};
//-----------------------------------------------------------------------------
// Start preloading
//-----------------------------------------------------------------------------
Scene_Boot.prototype.CGMZ_startPreload = function() {
    this.CGMZ_preloadFonts();
	this.CGMZ_preloadAudios();
	this.CGMZ_preloadImages();
};
//-----------------------------------------------------------------------------
// Preload fonts
//-----------------------------------------------------------------------------
Scene_Boot.prototype.CGMZ_preloadFonts = function() {
    CGMZ_Utils.parseJSON(CGMZ.Preloader.parameters["Fonts"], [], "[CGMZ] Preloader", "Your Fonts parameter was invalid and could not be read").forEach(json => {
		const font = CGMZ_Utils.parseJSON(json, null, "[CGMZ] Preloader", "A Font parameter was set up incorrectly and could not be read.");
		if(font) FontManager.load(font.Family, font.File);
	});
};
//-----------------------------------------------------------------------------
// Preload audios
//-----------------------------------------------------------------------------
Scene_Boot.prototype.CGMZ_preloadAudios = function() {
    CGMZ_Utils.parseJSON(CGMZ.Preloader.parameters["Audios"], [], "[CGMZ] Preloader", "Your Audios parameter was invalid and could not be read").forEach(audio => {
		const fileInfo = audio.split('/');
		const folder = fileInfo.shift() + "/";
		const filename = fileInfo.join('/');
		AudioManager.CGMZ_preloadAudio(folder, filename, AudioManager._path + folder + Utils.encodeURI(filename) + AudioManager.audioFileExt());
	});
};
//-----------------------------------------------------------------------------
// Preload images
//-----------------------------------------------------------------------------
Scene_Boot.prototype.CGMZ_preloadImages = function() {
    CGMZ_Utils.parseJSON(CGMZ.Preloader.parameters["Images"], [], "[CGMZ] Preloader", "Your Images parameter was invalid and could not be read").forEach(img => {
		const imgData = CGMZ_Utils.getImageData(img, "img");
		ImageManager.CGMZ_preloadBitmap(imgData.folder, imgData.filename);
	});
};
//=============================================================================
// ImageManager
//-----------------------------------------------------------------------------
// Store preloaded images in separate cache to prevent clear
//=============================================================================
ImageManager._CGMZ_preloadCache = {};
//-----------------------------------------------------------------------------
// Preload a bitmap - note that this function does not guarantee it will go to
// the CGMZ_preloaded cache as it still sends system images to the system cache.
//-----------------------------------------------------------------------------
ImageManager.CGMZ_preloadBitmap = function(folder, filename) {
    if(filename) {
        const url = folder + Utils.encodeURI(filename) + ".png";
        return this.CGMZ_preloadBitmapFromUrl(url);
    } else {
        return this._emptyBitmap;
    }
};
//-----------------------------------------------------------------------------
// Preload an image (but still send system images to system cache)
//-----------------------------------------------------------------------------
ImageManager.CGMZ_preloadBitmapFromUrl = function(url) {
	if(url.includes("/system/")) {
		return ImageManager.loadBitmapFromUrl(url);
	} else {
		if(!this._CGMZ_preloadCache[url]) {
			this._CGMZ_preloadCache[url] = Bitmap.load(url);
		}
		return this._CGMZ_preloadCache[url];
	}
};
//-----------------------------------------------------------------------------
// Check if image is in CGMZ preload cache first
//-----------------------------------------------------------------------------
const alias_CGMZPreloader_ImageManager_loadBitmapFromUrl = ImageManager.loadBitmapFromUrl;
ImageManager.loadBitmapFromUrl = function(url) {
	if(this._CGMZ_preloadCache[url]) {
		return this._CGMZ_preloadCache[url];
	}
	return alias_CGMZPreloader_ImageManager_loadBitmapFromUrl.call(this, url);
};
//=============================================================================
// AudioManager
//-----------------------------------------------------------------------------
// Store preloaded audios in separate buffer array
//=============================================================================
AudioManager._CGMZ_preloadCache = {};
//-----------------------------------------------------------------------------
// Preload an audio file
//-----------------------------------------------------------------------------
AudioManager.CGMZ_preloadAudio = function(folder, name, key) {
    const ext = this.audioFileExt();
    const url = this._path + folder + Utils.encodeURI(name) + ext;
    const buffer = new WebAudio(url);
    buffer.name = name;
    buffer.frameCount = Graphics.frameCount;
    this._CGMZ_preloadCache[key] = buffer;
};
//-----------------------------------------------------------------------------
// Check if audio file is preloaded, return preloaded buffer instead if so
//-----------------------------------------------------------------------------
const alias_CGMZPreloader_AudioManager_createBuffer = AudioManager.createBuffer;
AudioManager.createBuffer = function(folder, name) {
    const ext = this.audioFileExt();
    const url = this._path + folder + Utils.encodeURI(name) + ext;
    if(this._CGMZ_preloadCache[url]) {
		return this._CGMZ_preloadCache[url];
	} else {
		return alias_CGMZPreloader_AudioManager_createBuffer.apply(this, arguments);
	}
};
//=============================================================================
// WebAudio
//-----------------------------------------------------------------------------
// Stop instead of destroy buffer if it is a preloaded audio
//=============================================================================
const alias_CGMZPreloader_WebAudio_destroy = WebAudio.prototype.destroy;
WebAudio.prototype.destroy = function() {
	if(AudioManager._CGMZ_preloadCache[this._url]) {
		this.stop();
	} else {
		this._destroyDecoder();
		this.clear();
	}
};