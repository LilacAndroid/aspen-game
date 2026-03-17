/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/picturegallery/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc Add a picture gallery to your game
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
 * Description: This plugin adds a picture gallery scene to your game. With it,
 * your players will be able to view categories of pictures and pictures with
 * a brief description. They can also select pictures to view as a full image.
 * ----------------------------------------------------------------------------
 * Documentation:
 * ----------------------------Alpha Notes-------------------------------------
 * Planned features to be added:
 * 1) More viewing options for the full size image / full size window
 * 2) Option to call a common event to replay a scene
 * 3) Touch UI button for downloading a picture if enabled
 *
 * Want additional features not already present/listed above? Make suggestions
 * on the Patreon Post or in my discord under the #suggestions channel!
 * https://discord.gg/Gbx7JXP
 * -------------------------Plugin Commands------------------------------------
 * • Call Scene
 * This calls the picture gallery scene.
 *
 * • Discover Picture
 * Set a picture as discovered or undiscovered
 *
 * • Hide Picture
 * Set a picture as hidden or not hidden
 * ---------------------------Script Calls-------------------------------------
 * To call the picture gallery scene via JS, use:
 * SceneManager.push(CGMZ_Scene_PictureGallery);
 * ---------------------------Saved Games--------------------------------------
 * This plugin partially supports saved games.
 * ✓ You should be able to add this plugin to a saved game and add new images
 * ✗ You can modify picture data and it will reflect accurately in game, but
 *   changing the picture id is not supported.
 * ✓ You can remove this plugin with no issue to save data
 * -----------------------------Filename---------------------------------------
 * The filename for this plugin MUST remain CGMZ_PictureGallery.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * --------------------------Latest Version------------------------------------
 * Hi all, this version adds integrations with [CGMZ] Window Backgrounds and
 * [CGMZ] Window Settings, which is how you can customize the picture gallery
 * windows. Previously, a few limited customization options existed for things
 * like windowskin changes but these integrating plugins handle all of that
 * and more. Relying on integrations like this also helps me add more window
 * customizations, since I only need to add it to one plugin and all 100+ CGMZ
 * plugins get the new customizations automatically without needing to be
 * updated individually.
 *
 * I also updated the [CGMZ] Toast Manager integration to rely on toast manager
 * presets for the discover toast. Along with this, you can now have unique
 * discover toasts per-picture.
 *
 * Version Alpha R4
 * - Added [CGMZ] Window Backgrounds integration
 * - Added [CGMZ] Window Settings integration
 * - Updated [CGMZ] Toast Manager integration
 * 
 * @command Call Scene
 * @desc Calls the Picture Gallery scene
 * 
 * @arg Category
 * @desc If provided, force the scene to only show one category of images.
 * 
 * @command Discover Picture
 * @desc Marks a picture as discovered/undiscovered
 * 
 * @arg id
 * @desc The id of the picture to change
 * 
 * @arg discover
 * @type boolean
 * @default true
 * @desc If the picture should be discovered or undiscovered
 * 
 * @command Hide Picture
 * @desc Marks a picture as hidden/shown
 * 
 * @arg id
 * @desc The id of the picture to change
 * 
 * @arg hide
 * @type boolean
 * @default false
 * @desc If the picture should be hidden or shown
 *
 * @param Picture Settings
 *
 * @param Pictures
 * @parent Picture Settings
 * @type struct<Picture>[]
 * @desc Set up pictures here
 * @default []
 *
 * @param Category Settings
 *
 * @param Categories
 * @parent Category Settings
 * @type struct<Category>[]
 * @desc Set up picture categories here
 * @default []
 *
 * @param Fallback Settings
 *
 * @param Fallback Discovered Thumbnail
 * @parent Fallback Settings
 * @type file
 * @dir img/
 * @desc The default thumbnail image used when the picture is discovered
 *
 * @param Fallback Unknown Thumbnail
 * @parent Fallback Settings
 * @type file
 * @dir img/
 * @desc The default thumbnail image used when the picture is not discovered
 *
 * @param Mechanic Options
 *
 * @param Allow Download
 * @parent Mechanic Options
 * @type boolean
 * @default true
 * @desc Allow your player to download the pictures in the picture gallery?
 *
 * @param Download Filename
 * @parent Mechanic Options
 * @default picture
 * @desc The default filename for a downloaded file
 *
 * @param Scene Options
 *
 * @param Category Columns
 * @parent Scene Options
 * @type number
 * @default 2
 * @desc Number of columns to show in the category window
 *
 * @param Category Rows
 * @parent Scene Options
 * @type number
 * @default 3
 * @desc Number of rows to show in the category window
 *
 * @param Category Width
 * @parent Scene Options
 * @type number
 * @default 80
 * @min 0
 * @max 100
 * @desc Category window width expressed as a percentage of the screen ui width
 *
 * @param Category Height
 * @parent Scene Options
 * @type number
 * @default 60
 * @min 0
 * @max 100
 * @desc Category window height expressed as a percentage of the screen ui height
 *
 * @param Category Item Padding
 * @parent Scene Options
 * @type number
 * @default 2
 * @desc Category window padding for each selectable item
 *
 * @param Category Text Rect Opacity
 * @parent Scene Options
 * @type number
 * @default 160
 * @min 0
 * @max 255
 * @desc The opacity of the rectangle behind the text, to help with text visibility
 *
 * @param Pic Select Padding
 * @parent Scene Options
 * @type number
 * @default 2
 * @desc Picture select window padding for each selectable item
 *
 * @param Pic Select Column Spacing
 * @parent Scene Options
 * @type number
 * @default 10
 * @desc Space between columns in the picture select window
 *
 * @param Pic Select Row Spacing
 * @parent Scene Options
 * @type number
 * @default 10
 * @desc Space between rows in the picture select window
 *
 * @param Pic Select Columns
 * @parent Scene Options
 * @type number
 * @default 3
 * @desc Number of columns to show in the picture select window
 *
 * @param Pic Select Rows
 * @parent Scene Options
 * @type number
 * @default 3
 * @desc Number of rows to show in the picture select window
 *
 * @param Help Window Lines
 * @parent Scene Options
 * @type number
 * @default 2
 * @desc Number of lines of text maximum to display in the help window
 *
 * @param Transparent Picture Window
 * @parent Scene Options
 * @type boolean
 * @desc Whether the view picture window is transparent or not
 * @default false
 *
 * @param Disable Touch UI Space
 * @parent Scene Options
 * @type boolean
 * @desc If true, will not leave space for Touch UI buttons if Touch UI is disabled
 * @default false
 *
 * @param Text Options
 *
 * @param Label Color
 * @parent Text Options
 * @desc Color of label text
 * @type color
 * @default 1
 *
 * @param Total Completion Text
 * @parent Text Options
 * @desc Text to describe the total pictures discovered
 * @default Total:
 *
 * @param Unknown Thumbnail Text
 * @parent Text Options
 * @desc Text to describe an undiscovered thumbnail
 * @default ???
 *
 * @param Unknown Help Text
 * @parent Text Options
 * @desc Text to put in the help window for an undiscovered image
 * @default Keep playing to unlock this image.
 *
 * @param Category New Text
 * @parent Scene Options
 * @default \c[14]New!\c[0]
 * @desc Text to show on the category window when a category has updated pictures
 *
 * @param List New Text
 * @parent Scene Options
 * @default \c[14]New!\c[0]
 * @desc Text to show on the list window when a picture is updated
 *
 * @param Picture Text
 * @parent Scene Options
 * @desc Text to show over the picture
 *
 * @param Debug Options
 *
 * @param Print Info To Console
 * @parent Debug Options
 * @type boolean
 * @default false
 * @desc If true, will print out the dimensions of things like category rectangle
 *
 * @param Integrations
 *
 * @param Scene Background
 * @parent Integrations
 * @desc The [CGMZ] Scene Backgrounds preset id to use
 *
 * @param Controls Window
 * @parent Integrations
 * @desc The [CGMZ] Controls Window preset id to use
 *
 * @param Discover Toast
 * @parent Integrations
 * @desc [CGMZ] Toast Manager preset id to use when a picture is discovered
 *
 * @param Category Window Background
 * @parent Integrations
 * @desc [CGMZ] Window Backgrounds preset id to use for the category window
 *
 * @param Total Window Background
 * @parent Integrations
 * @desc [CGMZ] Window Backgrounds preset id to use for the total window
 *
 * @param List Window Background
 * @parent Integrations
 * @desc [CGMZ] Window Backgrounds preset id to use for the list window
 *
 * @param Help Window Background
 * @parent Integrations
 * @desc [CGMZ] Window Backgrounds preset id to use for the help window
 *
 * @param Category Window Settings
 * @parent Integrations
 * @desc [CGMZ] Window Settings preset id to use for the category window
 *
 * @param Total Window Settings
 * @parent Integrations
 * @desc [CGMZ] Window Settings preset id to use for the total window
 *
 * @param List Window Settings
 * @parent Integrations
 * @desc [CGMZ] Window Settings preset id to use for the list window
 *
 * @param Help Window Settings
 * @parent Integrations
 * @desc [CGMZ] Window Settings preset id to use for the help window
*/
/*~struct~Picture:
 * @param Id
 * @desc The id used to refer to the picture, should be unique and not blank
 *
 * @param Category Id
 * @desc The category id the picture belongs to
 *
 * @param Start Discovered
 * @type boolean
 * @default false
 * @desc Start the game with this picture discovered?
 *
 * @param Start Hidden
 * @type boolean
 * @default false
 * @desc Start the game with this picture hidden?
 *
 * @param Thumbnail
 * @type file
 * @dir img/
 * @desc The picture's discovered thumbnail
 *
 * @param Undiscovered Thumbnail
 * @type file
 * @dir img/
 * @desc The picture's undiscovered thumbnail
 *
 * @param Fullsize
 * @type file
 * @dir img/
 * @desc The full size picture
 *
 * @param Thumbnail Text
 * @desc Text to show in the thumbnail when discovered.
 *
 * @param Unknown Thumbnail Text
 * @desc Text to show in the thumbnail when undiscovered.
 *
 * @param Help Text
 * @type multiline_string
 * @desc Text to show in the help window when discovered.
 *
 * @param Unknown Help Text
 * @type multiline_string
 * @desc Text to show in the help window when undiscovered.
 *
 * @param Integrations
 *
 * @param Discover Toast
 * @parent Integrations
 * @desc [CGMZ] Toast Manager preset id to use when this picture is discovered
*/
/*~struct~Category:
 * @param Id
 * @desc The id used to refer to the category, should be unique and not blank
 *
 * @param Name
 * @desc The name of the category. Supports text codes.
 *
 * @param Completion Text
 * @desc Text to show for the category in the scene completion window
 *
 * @param Image Settings
 *
 * @param Image
 * @parent Image Settings
 * @type file
 * @dir img/
 * @desc The image of the category
 *
 * @param Image Mode
 * @parent Image Settings
 * @type select
 * @option Normal
 * @option Fit
 * @option Portion
 * @default Normal
 * @desc How the category should display its image
 *
 * @param Portion X
 * @parent Image Settings
 * @type number
 * @default 0
 * @desc If portion mode, the X coordinate to begin taking a portion of the image from (top-left)
 *
 * @param Portion Y
 * @parent Image Settings
 * @type number
 * @default 0
 * @desc If portion mode, the Y coordinate to begin taking a portion of the image from (top-left)
*/
Imported.CGMZ_PictureGallery = true;
CGMZ.Versions["Picture Gallery"] = "Alpha R4";
CGMZ.PictureGallery = {};
CGMZ.PictureGallery.parameters = PluginManager.parameters('CGMZ_PictureGallery');
CGMZ.PictureGallery.UnknownThumbnailText = CGMZ.PictureGallery.parameters["Unknown Thumbnail Text"];
CGMZ.PictureGallery.UnknownHelpText = CGMZ.PictureGallery.parameters["Unknown Help Text"];
CGMZ.PictureGallery.PictureText = CGMZ.PictureGallery.parameters["Picture Text"];
CGMZ.PictureGallery.FallbackDiscoveredThumbnail = CGMZ.PictureGallery.parameters["Fallback Discovered Thumbnail"];
CGMZ.PictureGallery.FallbackUnknownThumbnail = CGMZ.PictureGallery.parameters["Fallback Unknown Thumbnail"];
CGMZ.PictureGallery.TotalCompletionText = CGMZ.PictureGallery.parameters["Total Completion Text"];
CGMZ.PictureGallery.DownloadFilename = CGMZ.PictureGallery.parameters["Download Filename"];
CGMZ.PictureGallery.CategoryNewText = CGMZ.PictureGallery.parameters["Category New Text"];
CGMZ.PictureGallery.ListNewText = CGMZ.PictureGallery.parameters["List New Text"];
CGMZ.PictureGallery.CategoryWindowBackground = CGMZ.PictureGallery.parameters["Category Window Background"];
CGMZ.PictureGallery.TotalWindowBackground = CGMZ.PictureGallery.parameters["Total Window Background"];
CGMZ.PictureGallery.ListWindowBackground = CGMZ.PictureGallery.parameters["List Window Background"];
CGMZ.PictureGallery.HelpWindowBackground = CGMZ.PictureGallery.parameters["Help Window Background"];
CGMZ.PictureGallery.CategoryWindowSettings = CGMZ.PictureGallery.parameters["Category Window Settings"];
CGMZ.PictureGallery.TotalWindowSettings = CGMZ.PictureGallery.parameters["Total Window Settings"];
CGMZ.PictureGallery.ListWindowSettings = CGMZ.PictureGallery.parameters["List Window Settings"];
CGMZ.PictureGallery.HelpWindowSettings = CGMZ.PictureGallery.parameters["Help Window Settings"];
CGMZ.PictureGallery.SceneBackground = CGMZ.PictureGallery.parameters["Scene Background"];
CGMZ.PictureGallery.ControlsWindow = CGMZ.PictureGallery.parameters["Controls Window"];
CGMZ.PictureGallery.DiscoverToast = CGMZ.PictureGallery.parameters["Discover Toast"];
CGMZ.PictureGallery.CategoryColumns = Number(CGMZ.PictureGallery.parameters["Category Columns"]);
CGMZ.PictureGallery.CategoryRows = Number(CGMZ.PictureGallery.parameters["Category Rows"]);
CGMZ.PictureGallery.CategoryWidth = Number(CGMZ.PictureGallery.parameters["Category Width"]);
CGMZ.PictureGallery.CategoryHeight = Number(CGMZ.PictureGallery.parameters["Category Height"]);
CGMZ.PictureGallery.LabelColor = Number(CGMZ.PictureGallery.parameters["Label Color"]);
CGMZ.PictureGallery.HelpWindowLines = Number(CGMZ.PictureGallery.parameters["Help Window Lines"]);
CGMZ.PictureGallery.CategoryItemPadding = Number(CGMZ.PictureGallery.parameters["Category Item Padding"]);
CGMZ.PictureGallery.PicSelectPadding = Number(CGMZ.PictureGallery.parameters["Pic Select Padding"]);
CGMZ.PictureGallery.PicSelectColumnSpacing = Number(CGMZ.PictureGallery.parameters["Pic Select Column Spacing"]);
CGMZ.PictureGallery.PicSelectRowSpacing = Number(CGMZ.PictureGallery.parameters["Pic Select Row Spacing"]);
CGMZ.PictureGallery.PicSelectColumns = Number(CGMZ.PictureGallery.parameters["Pic Select Columns"]);
CGMZ.PictureGallery.PicSelectRows = Number(CGMZ.PictureGallery.parameters["Pic Select Rows"]);
CGMZ.PictureGallery.CategoryTextRectOpacity = Number(CGMZ.PictureGallery.parameters["Category Text Rect Opacity"]);
CGMZ.PictureGallery.TransparentPictureWindow = (CGMZ.PictureGallery.parameters["Transparent Picture Window"] === "true");
CGMZ.PictureGallery.DisableTouchUISpace = (CGMZ.PictureGallery.parameters["Disable Touch UI Space"] === "true");
CGMZ.PictureGallery.PrintInfoToConsole = (CGMZ.PictureGallery.parameters["Print Info To Console"] === "true");
CGMZ.PictureGallery.AllowDownload = (CGMZ.PictureGallery.parameters["Allow Download"] === "true");
CGMZ.PictureGallery.Pictures = CGMZ_Utils.parseJSON(CGMZ.PictureGallery.parameters["Pictures"], [], "CGMZ Picture Gallery", "Pictures parameter was not valid JSON.");
CGMZ.PictureGallery.Categories = CGMZ_Utils.parseJSON(CGMZ.PictureGallery.parameters["Categories"], [], "CGMZ Picture Gallery", "Categories parameter was not valid JSON.");
//=============================================================================
// CGMZ_PictureGallery_SaveData
//-----------------------------------------------------------------------------
// Data class used to store picture gallery data that is included in save files
//=============================================================================
function CGMZ_PictureGallery_SaveData() {
    this.initialize(...arguments);
}
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_PictureGallery_SaveData.prototype.initialize = function(pic) {
	this._id = pic.Id;
	this._isUpdated = false;
	this._isDiscovered = (pic["Start Discovered"] === 'true');
	this._isHidden = (pic["Start Hidden"] === 'true');
	this._discoverDate = "";
};
//-----------------------------------------------------------------------------
// Discover the picture. No effect if already discovered
//-----------------------------------------------------------------------------
CGMZ_PictureGallery_SaveData.prototype.discover = function() {
	if(this._isDiscovered) return;
	this._isDiscovered = true;
	this._isUpdated = true;
	this._discoverDate = CGMZ_Utils.createDateText();
};
//-----------------------------------------------------------------------------
// Undiscover the picture. No effect if already undiscovered
//-----------------------------------------------------------------------------
CGMZ_PictureGallery_SaveData.prototype.undiscover = function() {
	if(!this._isDiscovered) return;
	this._isDiscovered = false;
};
//-----------------------------------------------------------------------------
// Hide the picture. No effect if already hidden
//-----------------------------------------------------------------------------
CGMZ_PictureGallery_SaveData.prototype.hide = function() {
	if(this._isHidden) return;
	this._isHidden = true;
};
//-----------------------------------------------------------------------------
// Show the picture. No effect if already shown
//-----------------------------------------------------------------------------
CGMZ_PictureGallery_SaveData.prototype.show = function() {
	if(!this._isHidden) return;
	this._isHidden = false;
	this._isUpdated = true;
};
//-----------------------------------------------------------------------------
// Check if picture is discovered
//-----------------------------------------------------------------------------
CGMZ_PictureGallery_SaveData.prototype.isDiscovered = function() {
	return this._isDiscovered;
};
//-----------------------------------------------------------------------------
// Check if picture is hidden
//-----------------------------------------------------------------------------
CGMZ_PictureGallery_SaveData.prototype.isHidden = function() {
	return this._isHidden;
};
//-----------------------------------------------------------------------------
// Check if picture is updated
//-----------------------------------------------------------------------------
CGMZ_PictureGallery_SaveData.prototype.isUpdated = function() {
	return this._isUpdated;
};
//-----------------------------------------------------------------------------
// Check if picture is updated
//-----------------------------------------------------------------------------
CGMZ_PictureGallery_SaveData.prototype.onView = function() {
	this._isUpdated = false;
};
//=============================================================================
// CGMZ_PictureGallery_TempData
//-----------------------------------------------------------------------------
// Data class used to store temporary picture gallery data (not saved)
//=============================================================================
function CGMZ_PictureGallery_TempData() {
    this.initialize(...arguments);
}
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_PictureGallery_TempData.prototype.initialize = function(pic) {
	this.id = pic.Id;
	this.categoryId = pic["Category Id"];
	this.thumbnail = pic.Thumbnail;
	this.undiscoveredThumbnail = pic["Undiscovered Thumbnail"];
	this.fullsize = pic.Fullsize;
	this.thumbnailText = pic["Thumbnail Text"];
	this.unknownThumbnailText = pic["Unknown Thumbnail Text"];
	this.helpText = pic["Help Text"];
	this.unknownHelpText = pic["Unknown Help Text"];
	this.discoverToast = pic["Discover Toast"];
};
//-----------------------------------------------------------------------------
// Handling for when this picture is discovered
//-----------------------------------------------------------------------------
CGMZ_PictureGallery_TempData.prototype.onDiscover = function(alreadyDiscovered) {
	if(!alreadyDiscovered) this.showDiscoverToast();
};
//-----------------------------------------------------------------------------
// Handling for when this picture is shown
//-----------------------------------------------------------------------------
CGMZ_PictureGallery_TempData.prototype.onShow = function() {
	// to be expanded on
};
//-----------------------------------------------------------------------------
// Show a picture gallery toast
//-----------------------------------------------------------------------------
CGMZ_PictureGallery_TempData.prototype.showDiscoverToast = function() {
	if(!Imported.CGMZ_ToastManager) return;
	const toast = $cgmzTemp.getToastObjectFromPreset(this.discoverToast || CGMZ.PictureGallery.DiscoverToast);
	if(!toast) return;
	toast.lineOne = toast.lineOne.replace("%picname", this.thumbnailText);
	toast.lineTwo = toast.lineTwo.replace("%picname", this.thumbnailText);
	$cgmzTemp.createNewToast(toast);
};
//=============================================================================
// CGMZ_PictureGallery_Category
//-----------------------------------------------------------------------------
// Data class used to store temporary picture gallery category data (not saved)
//=============================================================================
function CGMZ_PictureGallery_Category() {
    this.initialize(...arguments);
}
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_PictureGallery_Category.prototype.initialize = function(cat) {
	this.id = cat.Id;
	this.name = cat.Name
	this.completionText = cat["Completion Text"];
	this.image = cat.Image;
	this.imageMode = cat["Image Mode"];
	this.imgPortion = new Point(Number(cat["Portion X"]), Number(cat["Portion Y"]));
};
//=============================================================================
// CGMZ_Core
//-----------------------------------------------------------------------------
// Handle saved Picture Gallery data
//=============================================================================
//-----------------------------------------------------------------------------
// Also initialize picture gallery data
//-----------------------------------------------------------------------------
const alias_CGMZ_PictureGallery_CGMZ_Core_createPluginData = CGMZ_Core.prototype.createPluginData;
CGMZ_Core.prototype.createPluginData = function() {
	alias_CGMZ_PictureGallery_CGMZ_Core_createPluginData.call(this);
	this.initializePictureGalleryData();
};
//-----------------------------------------------------------------------------
// Initialize Picture Gallery Data
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.initializePictureGalleryData = function(reinitialize = false) {
	if(!this._pictureGalleryData || reinitialize) {
		this._pictureGalleryData = {};
	}
	for(const pictureJSON of CGMZ.PictureGallery.Pictures) {
		const pic = CGMZ_Utils.parseJSON(pictureJSON, null, "CGMZ Picture Gallery", "Could not parse an individual picture JSON. Check your Pictures parameter.");
		if(pic && !this._pictureGalleryData[pic.Id]) {
			this._pictureGalleryData[pic.Id] = new CGMZ_PictureGallery_SaveData(pic);
		}
	}
};
//-----------------------------------------------------------------------------
// Check if new pictures have been added after load
//-----------------------------------------------------------------------------
const alias_CGMZ_PictureGallery_CGMZ_Core_createAfterLoad = CGMZ_Core.prototype.createAfterLoad;
CGMZ_Core.prototype.createAfterLoad = function() {
	alias_CGMZ_PictureGallery_CGMZ_Core_createAfterLoad.call(this);
	this.initializePictureGalleryData();
};
//-----------------------------------------------------------------------------
// Get Specific Picture
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getPictureGalleryPic = function(id) {
	return this._pictureGalleryData[id];
};
//-----------------------------------------------------------------------------
// Count how many pictures there are in total
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.countTotalPictureGalleryPictures = function() {
	return Object.keys(this._pictureGalleryData).length;
};
//-----------------------------------------------------------------------------
// Count how many pictures have been discovered
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.countTotalDiscoveredPictureGalleryPictures = function() {
	return Object.keys(this._pictureGalleryData).filter(key => this._pictureGalleryData[key].isDiscovered()).length;
};
//-----------------------------------------------------------------------------
// Get Discovered Pictures, returns array of picture IDs that are discovered
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getPictureGalleryDiscoveredPics = function() {
	return Object.keys(this._pictureGalleryData).filter(key => this._pictureGalleryData[key].isDiscovered());
};
//-----------------------------------------------------------------------------
// Get Shown Pictures, returns array of picture IDs that are shown
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getPictureGalleryShownPics = function() {
	return Object.keys(this._pictureGalleryData).filter(key => !this._pictureGalleryData[key].isHidden());
};
//=============================================================================
// CGMZ_Temp
//-----------------------------------------------------------------------------
// Add temp picture gallery data
//=============================================================================
//-----------------------------------------------------------------------------
// Also initialize picture gallery data
//-----------------------------------------------------------------------------
const alias_CGMZ_PictureGallery_CGMZ_Temp_createPluginData = CGMZ_Temp.prototype.createPluginData;
CGMZ_Temp.prototype.createPluginData = function() {
	alias_CGMZ_PictureGallery_CGMZ_Temp_createPluginData.call(this);
	this.initializePictureGalleryData();
};
//-----------------------------------------------------------------------------
// Initialize Picture Gallery Temp Data
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.initializePictureGalleryData = function() {
	this._pictureGalleryData = {};
	this._pictureGalleryCategoryData = {};
	for(const picJSON of CGMZ.PictureGallery.Pictures) {
		const pic = CGMZ_Utils.parseJSON(picJSON, null, "CGMZ Picture Gallery", "Could not parse picture JSON. Check your Pictures parameter.");
		if(pic) {
			this._pictureGalleryData[pic.Id] = new CGMZ_PictureGallery_TempData(pic);
		}
	}
	for(const catJSON of CGMZ.PictureGallery.Categories) {
		const cat = CGMZ_Utils.parseJSON(catJSON, null, "CGMZ Picture Gallery", "Could not parse category JSON. Check your Categories parameter.");
		if(cat) {
			this._pictureGalleryCategoryData[cat.Id] = new CGMZ_PictureGallery_Category(cat);
		}
	}
};
//-----------------------------------------------------------------------------
// Register Picture Gallery Plugin Commands
//-----------------------------------------------------------------------------
const alias_CGMZ_PictureGallery_CGMZ_Temp_registerPluginCommands = CGMZ_Temp.prototype.registerPluginCommands;
CGMZ_Temp.prototype.registerPluginCommands = function() {
	alias_CGMZ_PictureGallery_CGMZ_Temp_registerPluginCommands.call(this);
	PluginManager.registerCommand("CGMZ_PictureGallery", "Call Scene", this.pluginCommandPictureGalleryCallScene);
	PluginManager.registerCommand("CGMZ_PictureGallery", "Discover Picture", this.pluginCommandPictureGalleryDiscover);
	PluginManager.registerCommand("CGMZ_PictureGallery", "Hide Picture", this.pluginCommandPictureGalleryHide);
};
//-----------------------------------------------------------------------------
// Plugin Command - Call Scene
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPictureGalleryCallScene = function(args) {
	SceneManager.push(CGMZ_Scene_PictureGallery);
	SceneManager.prepareNextScene(args.Category);
};
//-----------------------------------------------------------------------------
// Plugin Command - Discover Picture
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPictureGalleryDiscover = function(args) {
	const discover = (args.discover === 'true');
	$cgmzTemp.discoverPictureGalleryPicture(args.id, discover);
};
//-----------------------------------------------------------------------------
// Plugin Command - Hide Picture
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPictureGalleryHide = function(args) {
	const picture = $cgmz.getPictureGalleryPic(args.id);
	if(picture) {
		(args.hide === 'true') ? picture.hide() : picture.show();
	}
};
//-----------------------------------------------------------------------------
// Handling for picture discovery
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.discoverPictureGalleryPicture = function(id, discover) {
	const picture = $cgmz.getPictureGalleryPic(id);
	const pictureTemp = this.getPictureGalleryPic(id);
	if(!picture || !pictureTemp) return;
	if(discover) {
		const alreadyDiscovered = picture.isDiscovered();
		if(discover === alreadyDiscovered) return;
		picture.discover();
		pictureTemp.onDiscover(alreadyDiscovered);
	} else {
		const alreadyDiscovered = picture.isDiscovered();
		if(discover === alreadyDiscovered) return;
		picture.undiscover();
	}
};
//-----------------------------------------------------------------------------
// Get specific picture
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.getPictureGalleryPic = function(id) {
	return this._pictureGalleryData[id];
};
//-----------------------------------------------------------------------------
// Count total pictures in a category
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.countPictureGalleryPicturesByCategory = function(categoryId) {
	return Object.keys(this._pictureGalleryData).filter(picId => $cgmzTemp.getPictureGalleryPic(picId).categoryId === categoryId).length;
};
//-----------------------------------------------------------------------------
// Count discovered pictures in a category
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.countDiscoveredPictureGalleryPicturesByCategory = function(categoryId) {
	return this.getPictureGalleryPicturesByCategory(categoryId).filter((id) => {
		const picSave = $cgmz.getPictureGalleryPic(id);
		return picSave && picSave.isDiscovered();
	}).length;
};
//-----------------------------------------------------------------------------
// Get picture ids belonging to a specific category of pictures
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.getPictureGalleryPicturesByCategory = function(categoryId) {
	return Object.keys(this._pictureGalleryData).filter(picId => $cgmzTemp.getPictureGalleryPic(picId).categoryId === categoryId);
};
//-----------------------------------------------------------------------------
// Get specific category
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.getPictureGalleryCategory = function(id) {
	return this._pictureGalleryCategoryData[id];
};
//-----------------------------------------------------------------------------
// Get all picture category ids
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.getPictureGalleryCategories = function() {
	return Object.keys(this._pictureGalleryCategoryData);
};
//=============================================================================
// CGMZ_Scene_PictureGallery
//-----------------------------------------------------------------------------
// Handle the picture gallery scene
//=============================================================================
function CGMZ_Scene_PictureGallery(types) {
    this.initialize.apply(this, arguments);
}
CGMZ_Scene_PictureGallery.prototype = Object.create(Scene_MenuBase.prototype);
CGMZ_Scene_PictureGallery.prototype.constructor = CGMZ_Scene_PictureGallery;
//-----------------------------------------------------------------------------
// Initialize the scene
//-----------------------------------------------------------------------------
CGMZ_Scene_PictureGallery.prototype.initialize = function() {
	Scene_MenuBase.prototype.initialize.call(this);
	this._category = "";
};
//-----------------------------------------------------------------------------
// Prepare the picture gallery scene
//-----------------------------------------------------------------------------
CGMZ_Scene_PictureGallery.prototype.prepare = function(category) {
	this._category = category;
};
//-----------------------------------------------------------------------------
// Create picture gallery windows
//-----------------------------------------------------------------------------
CGMZ_Scene_PictureGallery.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
	this.createCategoryWindow();
	this.createCompletionWindow();
	this.createListWindow();
	this.createHelpWindow();
	this.createDisplayWindow();
	if(this._category) this.handleCategoryStart();
};
//-----------------------------------------------------------------------------
// Create category window
//-----------------------------------------------------------------------------
CGMZ_Scene_PictureGallery.prototype.createCategoryWindow = function() {
	const rect = this.categoryWindowRect();
    this._categoryWindow = new CGMZ_Window_PictureGalleryCategory(rect);
	this._categoryWindow.setHandler('cancel', this.popScene.bind(this));
	this._categoryWindow.setHandler('ok', this.onCategoryOk.bind(this));
    this.addWindow(this._categoryWindow);
};
//-----------------------------------------------------------------------------
// Get the category window rect
//-----------------------------------------------------------------------------
CGMZ_Scene_PictureGallery.prototype.categoryWindowRect = function() {
	const width = Graphics.boxWidth * (CGMZ.PictureGallery.CategoryWidth / 100.0);
	const x = Graphics.boxWidth / 2 - width / 2;
	const y = this.hasTouchUI() ? this.buttonAreaHeight() : 0;
	const height = Graphics.boxHeight * (CGMZ.PictureGallery.CategoryHeight / 100.0);
    return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create completion window
//-----------------------------------------------------------------------------
CGMZ_Scene_PictureGallery.prototype.createCompletionWindow = function() {
	const rect = this.completionWindowRect();
    this._completionWindow = new CGMZ_Window_PictureGalleryCompletion(rect);
	this._categoryWindow.setCompletionWindow(this._completionWindow);
    this.addWindow(this._completionWindow);
};
//-----------------------------------------------------------------------------
// Get the completion window rect
//-----------------------------------------------------------------------------
CGMZ_Scene_PictureGallery.prototype.completionWindowRect = function() {
	const width = Graphics.boxWidth;
	const x = 0;
	const height = this.calcWindowHeight(1, false);
	const y = Graphics.boxHeight - height;
    return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create list window
//-----------------------------------------------------------------------------
CGMZ_Scene_PictureGallery.prototype.createListWindow = function() {
	const rect = this.listWindowRect();
    this._listWindow = new CGMZ_Window_PictureGalleryList(rect);
	this._listWindow.setHandler('cancel', this.onListCancel.bind(this));
	this._listWindow.setHandler('ok', this.onListOk.bind(this));
    this.addWindow(this._listWindow);
};
//-----------------------------------------------------------------------------
// Get the list window rect
//-----------------------------------------------------------------------------
CGMZ_Scene_PictureGallery.prototype.listWindowRect = function() {
	const width = Graphics.boxWidth;
	const x = 0;
	const y = this.hasTouchUI() ? this.buttonAreaHeight() : 0;
	const height = Graphics.boxHeight - y - this.calcWindowHeight(CGMZ.PictureGallery.HelpWindowLines, false);
    return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create help window
//-----------------------------------------------------------------------------
CGMZ_Scene_PictureGallery.prototype.createHelpWindow = function() {
	const rect = this.helpWindowRect();
    this._helpWindow = new CGMZ_Window_PictureGalleryHelp(rect);
	this._listWindow.setHelpWindow(this._helpWindow);
    this.addWindow(this._helpWindow);
};
//-----------------------------------------------------------------------------
// Get the help window rect
//-----------------------------------------------------------------------------
CGMZ_Scene_PictureGallery.prototype.helpWindowRect = function() {
	const width = Graphics.boxWidth;
	const x = 0;
	const y = this._listWindow.y + this._listWindow.height;
	const height = Graphics.boxHeight - y;
    return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create display window
//-----------------------------------------------------------------------------
CGMZ_Scene_PictureGallery.prototype.createDisplayWindow = function() {
	const rect = this.displayWindowRect();
    this._displayWindow = new CGMZ_Window_PictureGalleryDisplay(rect);
	this._displayWindow.setHandler('cancel', this.onDisplayCancel.bind(this));
	this._displayWindow.setHandler('ok', this.onDisplayOk.bind(this));
	this._listWindow.setDisplayWindow(this._displayWindow);
    this.addWindow(this._displayWindow);
};
//-----------------------------------------------------------------------------
// Get the display window rect
//-----------------------------------------------------------------------------
CGMZ_Scene_PictureGallery.prototype.displayWindowRect = function() {
	const x = 0;
	const y = this._categoryWindow.y;
	const height = Graphics.boxHeight - y;
	const width = Graphics.boxWidth;
    return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Check if should make room for Touch UI
//-----------------------------------------------------------------------------
CGMZ_Scene_PictureGallery.prototype.hasTouchUI = function() {
	return !CGMZ.PictureGallery.DisableTouchUISpace || ConfigManager.touchUI;
};
//-----------------------------------------------------------------------------
// Check if should make room for Touch UI
//-----------------------------------------------------------------------------
CGMZ_Scene_PictureGallery.prototype.handleCategoryStart = function() {
	this._categoryWindow.deactivate();
	this._categoryWindow.hide();
	this._completionWindow.hide();
	this._listWindow.setItem(this._category);
	this._listWindow.activate();
	this._listWindow.select(0);
	this._listWindow.show();
	this._helpWindow.show();
};
//-----------------------------------------------------------------------------
// On Category OK
//-----------------------------------------------------------------------------
CGMZ_Scene_PictureGallery.prototype.onCategoryOk = function() {
	this._categoryWindow.deactivate();
	this._categoryWindow.hide();
	this._completionWindow.hide();
	this._listWindow.setItem(this._categoryWindow.item());
	this._listWindow.activate();
	this._listWindow.select(0);
	this._listWindow.show();
	this._helpWindow.show();
};
//-----------------------------------------------------------------------------
// On List Cancel
//-----------------------------------------------------------------------------
CGMZ_Scene_PictureGallery.prototype.onListCancel = function() {
	if(this._category) {
		this.popScene();
	} else {
		this._listWindow.deactivate();
		this._listWindow.deselect();
		this._listWindow.hide();
		this._helpWindow.hide();
		this._categoryWindow.activate();
		this._categoryWindow.show();
		this._completionWindow.show();
	}
};
//-----------------------------------------------------------------------------
// On List Ok
//-----------------------------------------------------------------------------
CGMZ_Scene_PictureGallery.prototype.onListOk = function() {
	this._listWindow.deactivate();
	this._listWindow.hide();
	this._helpWindow.hide();
	this._displayWindow.resetOkTimer();
	this._displayWindow.show();
	this._displayWindow.activate();
};
//-----------------------------------------------------------------------------
// On Display Cancel
//-----------------------------------------------------------------------------
CGMZ_Scene_PictureGallery.prototype.onDisplayCancel = function() {
	this._displayWindow.deactivate();
	this._displayWindow.hide();
	this._listWindow.activate();
	this._listWindow.show();
	this._listWindow.redrawCurrentItem();
	this._categoryWindow.redrawCurrentItem();
	this._helpWindow.show();
};
//-----------------------------------------------------------------------------
// On Display Cancel
//-----------------------------------------------------------------------------
CGMZ_Scene_PictureGallery.prototype.onDisplayOk = function() {
	if(CGMZ.PictureGallery.AllowDownload) {
		const sprite = this.getDisplayedSprite();
		Graphics.app.renderer.extract.canvas(sprite).toBlob(this.promptFileDownload(CGMZ.PictureGallery.DownloadFilename), 'image/png');
	}
	this._displayWindow.activate();
};
//-----------------------------------------------------------------------------
// Get a displayed sprite
//-----------------------------------------------------------------------------
CGMZ_Scene_PictureGallery.prototype.getDisplayedSprite = function() {
	return this._displayWindow.getCurrentDisplaySprite();
};
//-----------------------------------------------------------------------------
// Prompt user to download a file
//-----------------------------------------------------------------------------
CGMZ_Scene_PictureGallery.prototype.promptFileDownload = function(filename) {
	return function(file){
		const a = document.createElement('a');
		document.body.append(a);
		a.download = filename;
		a.href = URL.createObjectURL(file);
		a.click();
		a.remove();
	};
};
//-----------------------------------------------------------------------------
// Get the scene's custom scene background
// No need to check if Scene Backgrounds is installed because this custom func
// is only called by that plugin
//-----------------------------------------------------------------------------
CGMZ_Scene_PictureGallery.prototype.CGMZ_getCustomSceneBackground = function() {
	return $cgmzTemp.sceneBackgroundPresets[CGMZ.PictureGallery.SceneBackground];
};
//-----------------------------------------------------------------------------
// Get controls window preset for [CGMZ] Controls Window
// No need to check if Controls Window is installed because this custom func
// is only called by that plugin
//-----------------------------------------------------------------------------
CGMZ_Scene_PictureGallery.prototype.CGMZ_getControlsWindowOtherPreset = function() {
	return $cgmzTemp.getControlWindowPresetOther(CGMZ.PictureGallery.ControlsWindow);
};
//=============================================================================
// CGMZ_Window_PictureGalleryCategory
//-----------------------------------------------------------------------------
// Selectable window for choosing a picture gallery
//=============================================================================
function CGMZ_Window_PictureGalleryCategory(rect, types) {
    this.initialize.apply(this, arguments);
}
CGMZ_Window_PictureGalleryCategory.prototype = Object.create(Window_Selectable.prototype);
CGMZ_Window_PictureGalleryCategory.prototype.constructor = CGMZ_Window_PictureGalleryCategory;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryCategory.prototype.initialize = function(rect) {
    Window_Selectable.prototype.initialize.call(this, rect);
	if(Imported.CGMZ_WindowBackgrounds && CGMZ.PictureGallery.CategoryWindowBackground) this.CGMZ_setWindowBackground(CGMZ.PictureGallery.CategoryWindowBackground);
	if(Imported.CGMZ_WindowSettings && CGMZ.PictureGallery.CategoryWindowSettings) this.CGMZ_setWindowSettings(CGMZ.PictureGallery.CategoryWindowSettings);
	this.refresh();
	this.activate();
	this.select(0);
	if($gameTemp.isPlaytest() && CGMZ.PictureGallery.PrintInfoToConsole ) {
		const rect = this.itemRectWithPadding(0);
		CGMZ_Utils.reportDimensions(rect.width, rect.height, "Category Image Dimensions");
	}
};
//-----------------------------------------------------------------------------
// Max items
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryCategory.prototype.maxItems = function() {
    return this._data ? this._data.length : 1;
};
//-----------------------------------------------------------------------------
// Max columns
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryCategory.prototype.maxCols = function() {
    return CGMZ.PictureGallery.CategoryColumns;
};
//-----------------------------------------------------------------------------
// Item Height
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryCategory.prototype.itemHeight = function() {
    return this.innerHeight / CGMZ.PictureGallery.CategoryRows;
};
//-----------------------------------------------------------------------------
// Current item
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryCategory.prototype.item = function() {
    return this._data[this.index()];
};
//-----------------------------------------------------------------------------
// Current item
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryCategory.prototype.itemPadding = function() {
    return CGMZ.PictureGallery.CategoryItemPadding;
};
//-----------------------------------------------------------------------------
// Max items
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryCategory.prototype.itemRectWithPadding = function(index) {
	const rect = Window_Selectable.prototype.itemRectWithPadding.call(this, index);
	const padding = this.itemPadding();
	rect.y += padding;
	rect.height -= padding * 2;
	return rect;
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryCategory.prototype.refresh = function() {
    this.makeItemList();
    Window_Selectable.prototype.refresh.call(this);
};
//-----------------------------------------------------------------------------
// Make item list
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryCategory.prototype.makeItemList = function() {
	this._data = $cgmzTemp.getPictureGalleryCategories();
};
//-----------------------------------------------------------------------------
// Draw item in list
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryCategory.prototype.drawItem = function(index) {
	this.resetFontSettings();
	const catKey = this._data[index];
	const cat = $cgmzTemp.getPictureGalleryCategory(catKey);
    const rect = this.itemRectWithPadding(index);
	this.loadBitmap(cat.image, cat.name, cat.id, rect);
};
//-----------------------------------------------------------------------------
// Start to load the category bitmap
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryCategory.prototype.loadBitmap = function(img, name, catId, rect) {
	const imgData = CGMZ_Utils.getImageData(img, "img");
	const bitmap = ImageManager.loadBitmap(imgData.folder, imgData.filename);
	bitmap.addLoadListener(this.onBitmapLoad.bind(this, bitmap, name, rect, catId));
};
//-----------------------------------------------------------------------------
// Handling after category bitmap is loaded
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryCategory.prototype.onBitmapLoad = function(bitmap, name, rect, catId) {
	const cat = $cgmzTemp.getPictureGalleryCategory(catId);
	let sw = sh = sx = sy = dw = dh = dx = dy = 0;
	switch(cat.imageMode) {
		case 'Normal':
			sw = bitmap.width;
			sh = bitmap.height;
			dw = (bitmap.width < rect.width) ? bitmap.width : rect.width;
			dh = (bitmap.height < rect.height) ? bitmap.height : rect.height;
			dx = (bitmap.width < rect.width) ? rect.x + (rect.width / 2 - bitmap.width / 2) : rect.x;
			dy = (bitmap.height < rect.height) ? rect.y + (rect.height / 2 - bitmap.height / 2) : rect.y;
			break;
		case 'Fit':
			sw = bitmap.width;
			sh = bitmap.height;
			dw = rect.width;
			dh = rect.height;
			dx = rect.x;
			dy = rect.y;
			break;
		case 'Portion':
			sw = rect.width;
			sh = rect.height;
			sx = cat.imgPortion.x;
			sy = cat.imgPortion.y;
			dw = rect.width;
			dh = rect.height;
			dx = rect.x;
			dy = rect.y;
			break;
	}
    this.contentsBack.blt(bitmap, sx, sy, sw, sh, dx, dy, dw, dh);
	this.contentsBack.paintOpacity = CGMZ.PictureGallery.CategoryTextRectOpacity;
	const textSize = this.textSizeEx(name)
	const backWidth = Math.min(textSize.width + 8, rect.width);
	this.contentsBack.fillRect(rect.x + rect.width / 2 - backWidth / 2, rect.y, backWidth, textSize.height, '#000000');
	this.contentsBack.paintOpacity = 255;
	this.CGMZ_drawTextLine(name, rect.x, rect.y, rect.width, 'center');
	if(this.categoryHasNewPictures(catId)) {
		this.CGMZ_drawTextLine(CGMZ.PictureGallery.CategoryNewText, rect.x + 4, rect.y, rect.width, 'left');
	}
};
//-----------------------------------------------------------------------------
// Check if any picture in the category is new
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryCategory.prototype.categoryHasNewPictures = function(id) {
	const picIds = $cgmzTemp.getPictureGalleryPicturesByCategory(id);
	for(const picId of picIds) {
		const pic = $cgmz.getPictureGalleryPic(picId);
		if(!pic) continue;
		if(pic.isUpdated()) return true;
	}
	return false;
};
//-----------------------------------------------------------------------------
// Set completion window
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryCategory.prototype.setCompletionWindow = function(completionWindow) {
    this._completionWindow = completionWindow;
    this.callUpdateHelp();
};
//-----------------------------------------------------------------------------
// See if can update completion window
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryCategory.prototype.callUpdateHelp = function() {
    if(this.active && this._completionWindow) {
		this._completionWindow.setItem(this.item());
	}
};
//=============================================================================
// CGMZ_Window_PictureGalleryCompletion
//-----------------------------------------------------------------------------
// Base window to show the completions
//=============================================================================
function CGMZ_Window_PictureGalleryCompletion(rect, types) {
    this.initialize.apply(this, arguments);
}
CGMZ_Window_PictureGalleryCompletion.prototype = Object.create(Window_Base.prototype);
CGMZ_Window_PictureGalleryCompletion.prototype.constructor = CGMZ_Window_PictureGalleryCompletion;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryCompletion.prototype.initialize = function(rect) {
    Window_Base.prototype.initialize.call(this, rect);
	if(Imported.CGMZ_WindowBackgrounds && CGMZ.PictureGallery.TotalWindowBackground) this.CGMZ_setWindowBackground(CGMZ.PictureGallery.TotalWindowBackground);
	if(Imported.CGMZ_WindowSettings && CGMZ.PictureGallery.TotalWindowSettings) this.CGMZ_setWindowSettings(CGMZ.PictureGallery.TotalWindowSettings);
	this._item = null;
};
//-----------------------------------------------------------------------------
// Set Item
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryCompletion.prototype.setItem = function(item) {
	if(this._item === item) return;
	this._item = item;
	this.refresh();
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryCompletion.prototype.refresh = function() {
	this.contents.clear();
	if(!this._item) return;
	this.drawTotalCompletion();
	this.drawCategoryCompletion();
};
//-----------------------------------------------------------------------------
// Draw total completion for all categories
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryCompletion.prototype.drawTotalCompletion = function() {
	const totalPics = $cgmz.countTotalPictureGalleryPictures();
	const totalDiscoveredPics = $cgmz.countTotalDiscoveredPictureGalleryPictures();
	const string = `\\c[${CGMZ.PictureGallery.LabelColor}]${CGMZ.PictureGallery.TotalCompletionText}\\c[0]${totalDiscoveredPics} / ${totalPics}`;
	this.CGMZ_drawTextLine(string, 0, 0, this.contents.width, 'left');
};
//-----------------------------------------------------------------------------
// Draw category completion
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryCompletion.prototype.drawCategoryCompletion = function() {
	const totalPics = $cgmzTemp.countPictureGalleryPicturesByCategory(this._item);
	const totalDiscoveredPics = $cgmzTemp.countDiscoveredPictureGalleryPicturesByCategory(this._item);
	const categoryDisplay = $cgmzTemp.getPictureGalleryCategory(this._item).completionText;
	const string = `\\c[${CGMZ.PictureGallery.LabelColor}]${categoryDisplay}\\c[0]${totalDiscoveredPics} / ${totalPics}`;
	this.CGMZ_drawTextLine(string, 0, 0, this.contents.width, 'right');
};
//=============================================================================
// CGMZ_Window_PictureGalleryList
//-----------------------------------------------------------------------------
// Selectable window for choosing a picture to view
//=============================================================================
function CGMZ_Window_PictureGalleryList(rect, types) {
    this.initialize.apply(this, arguments);
}
CGMZ_Window_PictureGalleryList.prototype = Object.create(Window_Selectable.prototype);
CGMZ_Window_PictureGalleryList.prototype.constructor = CGMZ_Window_PictureGalleryList;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryList.prototype.initialize = function(rect) {
    Window_Selectable.prototype.initialize.call(this, rect);
	if(Imported.CGMZ_WindowBackgrounds && CGMZ.PictureGallery.ListWindowBackground) this.CGMZ_setWindowBackground(CGMZ.PictureGallery.ListWindowBackground);
	if(Imported.CGMZ_WindowSettings && CGMZ.PictureGallery.ListWindowSettings) this.CGMZ_setWindowSettings(CGMZ.PictureGallery.ListWindowSettings);
	this._categoryId = "";
	this.hide();
	if($gameTemp.isPlaytest() && CGMZ.PictureGallery.PrintInfoToConsole ) {
		const rect = this.itemRectWithPadding(0);
		const padding = this.itemPadding();
		rect.y += padding;
		rect.height -= padding * 2;
		console.group("Picture Thumbnail Dimensions");
		console.info(`Width: ${rect.width}`);
		console.info(`Height: ${rect.height}`);
		console.groupEnd("Picture Thumbnail Dimensions");
	}
};
//-----------------------------------------------------------------------------
// Max items
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryList.prototype.maxItems = function() {
    return this._data ? this._data.length : 1;
};
//-----------------------------------------------------------------------------
// Max columns
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryList.prototype.maxCols = function() {
    return CGMZ.PictureGallery.PicSelectColumns;
};
//-----------------------------------------------------------------------------
// Current item
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryList.prototype.item = function() {
    return this._data[this.index()];
};
//-----------------------------------------------------------------------------
// Item Height
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryList.prototype.itemHeight = function() {
    return this.innerHeight / CGMZ.PictureGallery.PicSelectRows;
};
//-----------------------------------------------------------------------------
// Column Spacing
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryList.prototype.itemPadding = function() {
    return CGMZ.PictureGallery.PicSelectPadding;
};
//-----------------------------------------------------------------------------
// Column Spacing
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryList.prototype.colSpacing = function() {
    return CGMZ.PictureGallery.PicSelectColumnSpacing;
};
//-----------------------------------------------------------------------------
// Row Spacing
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryList.prototype.rowSpacing = function() {
    return CGMZ.PictureGallery.PicSelectRowSpacing;
};
//-----------------------------------------------------------------------------
// Determine if picture is enabled
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryList.prototype.isEnabled = function(item) {
	const picture = $cgmz.getPictureGalleryPic(item);
	return picture?.isDiscovered();
};
//-----------------------------------------------------------------------------
// Determine if current selected item is enabled
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryList.prototype.isCurrentItemEnabled = function() {
	return this.isEnabled(this.item());
};
//-----------------------------------------------------------------------------
// Set Item
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryList.prototype.setItem = function(catId) {
    if(this._categoryId === catId) return;
	this._categoryId = catId;
	this.refresh();
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryList.prototype.refresh = function() {
    this.makeItemList();
    Window_Selectable.prototype.refresh.call(this);
};
//-----------------------------------------------------------------------------
// Make item list
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryList.prototype.makeItemList = function() {
	if(!this._categoryId) return;
	this._data = $cgmzTemp.getPictureGalleryPicturesByCategory(this._categoryId).filter(this.canDisplay.bind(this));
};
//-----------------------------------------------------------------------------
// Check if a picture can display
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryList.prototype.canDisplay = function(picId) {
	const pic = $cgmz.getPictureGalleryPic(picId);
	return !pic.isHidden();
};
//-----------------------------------------------------------------------------
// Draw item in list
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryList.prototype.drawItem = function(index) {
	this.resetFontSettings();
	const pictureId = this._data[index];
    const rect = this.itemRectWithPadding(index);
	const padding = this.itemPadding();
	rect.y += padding;
    rect.height -= padding * 2;
	this.loadBitmap(pictureId, rect);
};
//-----------------------------------------------------------------------------
// Start to load the picture bitmap
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryList.prototype.loadBitmap = function(pictureId, rect) {
	const pictureSave = $cgmz.getPictureGalleryPic(pictureId);
	const pictureTemp = $cgmzTemp.getPictureGalleryPic(pictureId);
	const path = this.getThumbnail(pictureSave.isDiscovered(), pictureTemp);
	const imageData = CGMZ_Utils.getImageData(path, "img");
    const bitmap = ImageManager.loadBitmap(imageData.folder, imageData.filename);
	bitmap.addLoadListener(this.onPictureLoad.bind(this, bitmap, rect, pictureSave, pictureTemp));
};
//-----------------------------------------------------------------------------
// Get the picture's thumbnail to show
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryList.prototype.getThumbnail = function(isDiscovered, pictureTemp) {
	if(isDiscovered) {
		return pictureTemp.thumbnail || CGMZ.PictureGallery.FallbackDiscoveredThumbnail;
	}
	return pictureTemp.undiscoveredThumbnail || CGMZ.PictureGallery.FallbackUnknownThumbnail;
};
//-----------------------------------------------------------------------------
// Draw the picture thumbnail + text after load
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryList.prototype.onPictureLoad = function(bitmap, rect, pictureSave, pictureTemp) {
	const sw = bitmap.width;
    const sh = bitmap.height;
    const sx = sy = 0;
	const dw = rect.width;
	const dh = rect.height;
	const dx = rect.x;
	const dy = rect.y - 1;
	this.changePaintOpacity(pictureSave.isDiscovered());
	this.contentsBack.paintOpacity = pictureSave.isDiscovered() ? 255 : this.translucentOpacity();
    this.contentsBack.blt(bitmap, sx, sy, sw, sh, dx, dy, dw, dh);
	const thumbnailText = (pictureSave.isDiscovered()) ? pictureTemp.thumbnailText : pictureTemp.unknownThumbnailText || CGMZ.PictureGallery.UnknownThumbnailText;
	this.CGMZ_drawTextLine(thumbnailText, rect.x, rect.y, rect.width, 'center');
	if(pictureSave.isUpdated()) {
		this.CGMZ_drawTextLine(CGMZ.PictureGallery.ListNewText, rect.x + 4, rect.y, rect.width, 'left');
	}
};
//-----------------------------------------------------------------------------
// Set display window
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryList.prototype.setDisplayWindow = function(displayWindow) {
    this._displayWindow = displayWindow;
    this.callUpdateHelp();
};
//-----------------------------------------------------------------------------
// See if can update display window
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryList.prototype.callUpdateHelp = function() {
	if(!this.active) return;
    this._displayWindow?.setItem(this.item());
	this._helpWindow?.setItem(this.item());
};
//=============================================================================
// CGMZ_Window_PictureGalleryHelp
//-----------------------------------------------------------------------------
// Base window to show the help text
//=============================================================================
function CGMZ_Window_PictureGalleryHelp(rect, types) {
    this.initialize.apply(this, arguments);
}
CGMZ_Window_PictureGalleryHelp.prototype = Object.create(Window_Base.prototype);
CGMZ_Window_PictureGalleryHelp.prototype.constructor = CGMZ_Window_PictureGalleryHelp;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryHelp.prototype.initialize = function(rect) {
    Window_Base.prototype.initialize.call(this, rect);
	if(Imported.CGMZ_WindowBackgrounds && CGMZ.PictureGallery.HelpWindowBackground) this.CGMZ_setWindowBackground(CGMZ.PictureGallery.HelpWindowBackground);
	if(Imported.CGMZ_WindowSettings && CGMZ.PictureGallery.HelpWindowSettings) this.CGMZ_setWindowSettings(CGMZ.PictureGallery.HelpWindowSettings);
	this.hide();
	this._item = null;
};
//-----------------------------------------------------------------------------
// Set Item
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryHelp.prototype.setItem = function(item) {
	if(this._item === item) return;
	this._item = item;
	this.refresh();
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryHelp.prototype.refresh = function() {
	this.contents.clear();
	if(!this._item) return;
	const isDiscovered = $cgmz.getPictureGalleryPic(this._item).isDiscovered();
	const picTemp = $cgmzTemp.getPictureGalleryPic(this._item);
	const helpText = (isDiscovered) ? picTemp.helpText : picTemp.unknownHelpText;
	this.CGMZ_drawText(helpText, 0, 0, 0, this.contents.width, 'left');
};
//=============================================================================
// CGMZ_Window_PictureGalleryDisplay
//-----------------------------------------------------------------------------
// Window displaying the full size picture
//=============================================================================
function CGMZ_Window_PictureGalleryDisplay() {
    this.initialize.apply(this, arguments);
}
CGMZ_Window_PictureGalleryDisplay.prototype = Object.create(CGMZ_Window_Scrollable.prototype);
CGMZ_Window_PictureGalleryDisplay.prototype.constructor = CGMZ_Window_PictureGalleryDisplay;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryDisplay.prototype.initialize = function(rect) {
    CGMZ_Window_Scrollable.prototype.initialize.call(this, rect, 1, undefined, undefined, false, undefined);
	this.setBackgroundType(2 * (CGMZ.PictureGallery.TransparentPictureWindow));
	this.createSprite();
	this._pictureId = "";
	this.hide();
	this._okTimer = 0;
};
//-----------------------------------------------------------------------------
// Update the ok timer
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryDisplay.prototype.update = function() {
	CGMZ_Window_Scrollable.prototype.update.call(this);
	this._okTimer += 1 * this.visible;
};
//-----------------------------------------------------------------------------
// Create the sprite that handles the picture image
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryDisplay.prototype.createSprite = function() {
	this._sprite = new Sprite();
	this._sprite.anchor.x = 0.5;
	this._sprite.anchor.y = 0.5;
	this._sprite.x = this.contents.width / 2;
	this._sprite.y = this.contents.height / 2;
	this._sprite.hide();
	this.addChildToBack(this._sprite);
};
//-----------------------------------------------------------------------------
// Set the picture to be displayed
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryDisplay.prototype.setItem = function(pictureId) {
	if(!pictureId || pictureId === this._pictureId) return;
	this._pictureId = pictureId;
	this.refresh();
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryDisplay.prototype.refresh = function() {
	if(!this._pictureId) return;
	const picSave = $cgmz.getPictureGalleryPic(this._pictureId);
	picSave.onView();
	this.resetOkTimer();
	this.contents.clear();
	this.resetFontSettings();
	const pictureTemp = $cgmzTemp.getPictureGalleryPic(this._pictureId);
	const imageData = CGMZ_Utils.getImageData(pictureTemp.fullsize, "img");
    const bitmap = ImageManager.loadBitmap(imageData.folder, imageData.filename);
	bitmap.addLoadListener(this.onPictureLoad.bind(this, bitmap));
};
//-----------------------------------------------------------------------------
// Draw picture information on picture load
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryDisplay.prototype.onPictureLoad = function(bitmap) {
	this._sprite.bitmap = bitmap;
	let scale = 1;
	if(bitmap.width > this.contents.width) {
		scale = this.contents.width / bitmap.width;
	}
	this._sprite.scale.x = scale;
	this._sprite.scale.y = scale;
	this._sprite.show();
	this.CGMZ_drawTextLine(CGMZ.PictureGallery.PictureText, 0, 0, this.contents.width, 'right');
};
//-----------------------------------------------------------------------------
// Process Handling
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryDisplay.prototype.processHandling = function() {
	CGMZ_Window_Scrollable.prototype.processHandling.call(this);
	if(this.isActive()) {
		if(this.isOkEnabled()) {
			this.resetOkTimer();
			this.callHandler('ok');
		}
	}
};
//-----------------------------------------------------------------------------
// Check if ok handling exists
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryDisplay.prototype.isOkEnabled = function() {
	if(!this.isHandled('ok')) return false;
	if(this._okTimer < 30) return false;
	if(!Input.isRepeated('ok')) return false;
	return true;
};
//-----------------------------------------------------------------------------
// Check if ok handling exists
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryDisplay.prototype.resetOkTimer = function() {
	this._okTimer = 0;
};
//-----------------------------------------------------------------------------
// Get the current displayed sprite
//-----------------------------------------------------------------------------
CGMZ_Window_PictureGalleryDisplay.prototype.getCurrentDisplaySprite = function() {
	return new Sprite(this._sprite.bitmap);
};