/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/messagelog/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc Record text shown to the player for later in a message log
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
 * Description: Stores the text shown in the Show Text event command in a log
 * which can be displayed later in case the player wants to look over what was
 * said in a previous conversation. Includes control over what text appears in
 * the log.
 * ----------------------------------------------------------------------------
 * Documentation:
 * -----------------------------Alpha Notes------------------------------------
 * Planned features to be added:
 * 1) Message Log categories
 * 2) Additional message log customization options
 * 3) Additional message log text codes
 *
 * Want additional features not already present/listed above? Make suggestions
 * on the Patreon Post, Itch.io Page, or in my discord under the #suggestions
 * channel!
 * https://discord.gg/Gbx7JXP
 * -----------------------------Main Features----------------------------------
 * MESSAGE LOG SCENE
 * Allow the player to see previous messages that have been displayed to them
 * via the Show Text event command in a dedicated message log scene. They can
 * scroll back through previous conversations up to a limit set by you.
 * -----------------------------Minor Features---------------------------------
 * AUTOMATIC LOGGING
 * Logging messages is automatic, and there is no setup required by you to log
 * a message. However, you can prevent a message from being logged by using a
 * simple text code anywhere in the message or by using plugin command to turn
 * automatic logging off.
 *
 * MANUAL LOGGING
 * You can add your own custom messages to the message log via plugin command.
 * These do not need to be displayed to the player via Show Text to show up in
 * the message log.
 * -----------------------------Compatibility----------------------------------
 * As this plugin shows the text as the text message box received it, you may
 * use some text codes that make sense in the message box that do not make
 * sense in the message log.
 *
 * This plugin allows you to use regex to remove any unwanted text codes from
 * the message log. Regex can be somewhat difficult to understand. There are
 * two examples provided which remove the rumble and text speed text codes
 * from [CGMZ] Message System. If you would like to test your regex with your
 * message text, you can do so online using a website such as
 * https://regex101.com/
 *
 * If testing regex online, please make sure you switch to JS (ECMAScript).
 * Other programming language regex may differ.
 * ----------------------------Plugin Commands---------------------------------
 * This plugin has the following plugin commands:
 *
 * • Call Scene
 * Calls the Message Log scene
 *
 * • Log Message
 * Add a custom message to the message log
 *
 * • Clear Messages
 * Clear some (or all) messages
 * ------------------------------Integrations----------------------------------
 * This plugin has additional functionality when used with the below plugins:
 *
 * [CGMZ] Scene Backgrounds
 * Set up a scene background preset and then enter the preset id into the
 * scene background parameter here. This allows you to have a lot more options
 * when setting up your background image, including scrolling backgrounds.
 *
 * [CGMZ] Window Backgrounds
 * Show an image as the window background, including a scrolling animated
 * parallax image. This works for any window, including third party plugin
 * windows. The plugin parameter makes this a no-code integration.
 *
 * [CGMZ] Window Settings
 * Control any window's tone, windowskin, padding, opacity, and more. This
 * works for any window, including third party plugin windows. The plugin
 * parameter makes this a no-code integration.
 *
 * [CGMZ] Controls Window
 * Set up a controls window preset and then enter the preset id into the
 * controls window parameter here. This allows you to easily show keyboard or
 * gamepad controls for the Message Log scene, depending on player's last input
 * type.
 * ------------------------------Saved Games-----------------------------------
 * This plugin is fully compatible with saved games
 *
 * This means the following will work in saved games:
 * ✓ Add this plugin to your game
 * ✓ Modify plugin parameters
 * ✓ Remove this plugin from your game
 * -----------------------------Filename---------------------------------------
 * The filename for this plugin MUST remain CGMZ_MessageLog.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * -----------------------------Latest Version---------------------------------
 * Hi all, this latest version adds the option to add your own regex to filter
 * out text codes you do not want to appear in the message log. Previously,
 * only certain [CGMZ] Message System text codes such as the rumble or speed
 * text codes were filtered out. However, this would not work for third party
 * plugins that add text codes you didn't want. Now, you can add any text code
 * you want the message log to ignore, making it compatible with any other
 * plugin out there.
 *
 * This version also fixes a bug where text formatting was not reset between
 * messages, which could lead to font size changes affecting more in the log
 * than what they affected in the actual text messages.
 *
 * Version Alpha R4
 * - Added parameter to add text codes you do not want to appear in the log
 * - Fix bug with text not resetting between messages
 *
 * @command Call Scene
 * @desc Calls the message log scene
 *
 * @command Log Message
 * @desc Add a custom message to the message log
 *
 * @arg Text
 * @type multiline_string
 * @desc The message contents to log
 *
 * @arg Name
 * @desc The name to associate with the message
 *
 * @arg Face
 * @type file
 * @dir img/faces/
 * @desc The face image to associate with the message
 *
 * @arg Face Index
 * @type number
 * @default 0
 * @desc The face index of the face on the face sheet (0-7)
 *
 * @arg Ignore Conditions
 * @parent Mechanics
 * @type boolean
 * @default true
 * @desc If true, this message will always be logged. If false, it will be logged only if a normal message would have been logged.
 *
 * @command Clear Messages
 * @desc Clear previously logged messages
 *
 * @arg Amount
 * @type number
 * @default 0
 * @desc The amount of messages to clear. Set to 0 to clear all.
 *
 * @param Mechanics
 *
 * @param Log Switch
 * @parent Mechanics
 * @type switch
 * @default 0
 * @desc If set, this switch ID controls if messages get logged (on) or not (off)
 *
 * @param Text Code
 * @parent Mechanics
 * @default \nolog
 * @desc The text code to look for that disables message logging
 *
 * @param History Max
 * @parent Mechanics
 * @type number
 * @default 100
 * @desc The maximum number of messages to store at any time
 *
 * @param Reverse Order
 * @parent Mechanics
 * @type boolean
 * @default true
 * @desc Reverse the order of the message log so the most recent appears first
 *
 * @param Prevent Duplicate
 * @parent Mechanics
 * @type boolean
 * @default false
 * @desc Do not allow a message already in the log from appearing?
 *
 * @param Text Code Removals
 * @parent Mechanics
 * @type text[]
 * @default ["\\\\spd\\[[0-9]+\\]","\\\\rum\\[[0-9]+\\]"]
 * @desc Do not allow a message already in the log from appearing?
 *
 * @param Window Options
 *
 * @param Log Spacing
 * @parent Window Options
 * @type number
 * @default 20
 * @desc Pixels of space to put between each message
 *
 * @param Cancel Message Text
 * @parent Window Options
 * @default No Choice Made
 * @desc Text to show when the player cancels out of a choice and there is a branching cancel path
 *
 * @param Integrations
 *
 * @param Scene Background
 * @parent Integrations
 * @desc [CGMZ] Scene Background preset id to show in the message log scene
 *
 * @param Msg Window Background
 * @parent Integrations
 * @desc [CGMZ] Window Background preset id to use for the message log window
 *
 * @param Msg Window Settings
 * @parent Integrations
 * @desc [CGMZ] Window Settings preset id to use for the message log window
 *
 * @param Controls Window
 * @parent Integrations
 * @desc [CGMZ] Controls Window preset id to show in the message log scene
*/
Imported.CGMZ_MessageLog = true;
CGMZ.Versions["Message Log"] = "Alpha R4";
CGMZ.MessageLog = {};
CGMZ.MessageLog.parameters = PluginManager.parameters('CGMZ_MessageLog');
CGMZ.MessageLog.SceneBackground = CGMZ.MessageLog.parameters["Scene Background"];
CGMZ.MessageLog.MsgWindowBackground = CGMZ.MessageLog.parameters["Msg Window Background"];
CGMZ.MessageLog.MsgWindowSettings = CGMZ.MessageLog.parameters["Msg Window Settings"];
CGMZ.MessageLog.ControlsWindow = CGMZ.MessageLog.parameters["Controls Window"];
CGMZ.MessageLog.CancelMsgText = CGMZ.MessageLog.parameters["Cancel Message Text"];
CGMZ.MessageLog.TextCode = CGMZ.MessageLog.parameters["Text Code"];
CGMZ.MessageLog.HistoryMax = Number(CGMZ.MessageLog.parameters["History Max"]);
CGMZ.MessageLog.LogSpacing = Number(CGMZ.MessageLog.parameters["Log Spacing"]);
CGMZ.MessageLog.LogSwitch = Number(CGMZ.MessageLog.parameters["Log Switch"]);
CGMZ.MessageLog.AlwaysShowPopup = (CGMZ.MessageLog.parameters["Always Show Popup"] === 'true');
CGMZ.MessageLog.ReverseOrder = (CGMZ.MessageLog.parameters["Reverse Order"] === 'true');
CGMZ.MessageLog.PreventDuplicate = (CGMZ.MessageLog.parameters["Prevent Duplicate"] === 'true');
CGMZ.MessageLog.TextCodeRemovals = CGMZ_Utils.parseJSON(CGMZ.MessageLog.parameters["Text Code Removals"], [], '[CGMZ] Message Log', 'Your Text Code Removals parameter was not valid json and could not be read.');
//=============================================================================
// CGMZ
//-----------------------------------------------------------------------------
// Add saved message log data
//=============================================================================
//-----------------------------------------------------------------------------
// Method used by CGMZ for creating plugin data
//-----------------------------------------------------------------------------
const alias_CGMZMessageLog_CGMZCore_createPluginData = CGMZ_Core.prototype.createPluginData;
CGMZ_Core.prototype.createPluginData = function() {
	alias_CGMZMessageLog_CGMZCore_createPluginData.call(this);
	this.initializeMsgLogData();
};
//-----------------------------------------------------------------------------
// Check if data should load for saved game
//-----------------------------------------------------------------------------
const alias_CGMZMessageLog_CGMZCore_onAfterLoad = CGMZ_Core.prototype.onAfterLoad;
CGMZ_Core.prototype.onAfterLoad = function() {
	alias_CGMZMessageLog_CGMZCore_onAfterLoad.call(this);
	this.initializeMsgLogData();
};
//-----------------------------------------------------------------------------
// Initialize message log data
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.initializeMsgLogData = function() {
	if(!this._msgLogData) {
		this._msgLogData = [];
	}
};
//-----------------------------------------------------------------------------
// Check if messages can be logged
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.canLogMessages = function() {
	return !CGMZ.MessageLog.LogSwitch || $gameSwitches.value(CGMZ.MessageLog.LogSwitch);
};
//-----------------------------------------------------------------------------
// Check if specific message can be logged
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.canLogMessage = function(msgObj) {
	if(!this.canLogMessages()) return false;
	if(msgObj.texts?.includes(CGMZ.MessageLog.TextCode)) return false;
	if(CGMZ.MessageLog.PreventDuplicate) {
		for(const msg of this._msgLogData) {
			if(msg.type !== msgObj.type) continue;
			if(msg.type === 'choice' && msg.choice === msgObj.choice) return false;
			if(msg.type === 'message' && msg.texts === msgObj.texts && msg.name === msgObj.name && msg.faceName === msgObj.faceName && msg.faceIndex === msgObj.faceIndex) {
				return false;
			}
		}
	}
	return true;
};
//-----------------------------------------------------------------------------
// Attempts to log a message
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.attemptLogMessage = function(msgObj) {
	if(this.canLogMessage(msgObj)) {
		this.logMessage(msgObj);
	}
};
//-----------------------------------------------------------------------------
// Actually logs the message
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.logMessage = function(msgObj) {
	if(this._msgLogData.length > CGMZ.MessageLog.HistoryMax) this._msgLogData.shift();
	this._msgLogData.push(msgObj);
};
//-----------------------------------------------------------------------------
// Get all logged messages
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getLoggedMessages = function() {
	return this._msgLogData;
};
//-----------------------------------------------------------------------------
// Clear all logged messages
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.clearAllMessageLogs = function() {
	this._msgLogData = [];
};
//-----------------------------------------------------------------------------
// Clear some logged messages
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.clearMessageLogs = function(amount) {
	for(let i = 0; i < amount; i++) {
		this._msgLogData.shift();
		if(this._msgLogData.length === 0) break;
	}
};
//=============================================================================
// CGMZ_Temp
//-----------------------------------------------------------------------------
// Add message log plugin commands
//=============================================================================
//-----------------------------------------------------------------------------
// Register Plugin Commands
//-----------------------------------------------------------------------------
const alias_CGMZMessageLog_CGMZ_Temp_registerPluginCommands = CGMZ_Temp.prototype.registerPluginCommands;
CGMZ_Temp.prototype.registerPluginCommands = function() {
	alias_CGMZMessageLog_CGMZ_Temp_registerPluginCommands.call(this);
	PluginManager.registerCommand("CGMZ_MessageLog", "Call Scene", this.pluginCommandMessageLogCallScene);
	PluginManager.registerCommand("CGMZ_MessageLog", "Log Message", this.pluginCommandMessageLogLogMessage);
	PluginManager.registerCommand("CGMZ_MessageLog", "Clear Messages", this.pluginCommandMessageLogClearMessages);
};
//-----------------------------------------------------------------------------
// Plugin Command - Call Scene
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandMessageLogCallScene = function() {
	SceneManager.push(CGMZ_Scene_MessageLog);
};
//-----------------------------------------------------------------------------
// Plugin Command - Log Message
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandMessageLogLogMessage = function(args) {
	const msgObj = {
		type: 'message',
		texts: args.Text,
		name: args.Name,
		faceName: args.Face,
		faceIndex: Number(args["Face Index"])
	};
	if(args["Ignore Conditions"] === 'true') {
		$cgmz.logMessage(msgObj);
	} else {
		$cgmz.attemptLogMessage(msgObj);
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Clear Messages
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandMessageLogClearMessages = function(args) {
	const amount = Number(args.Amount);
	if(amount > 0) {
		$cgmz.clearMessageLogs(amount);
	} else {
		$cgmz.clearAllMessageLogs();
	}
};
//=============================================================================
// Window_Message
//-----------------------------------------------------------------------------
// Get all text that is showing in the window to store in the log
//=============================================================================
//-----------------------------------------------------------------------------
// Also try to log the text
//-----------------------------------------------------------------------------
const alias_CGMZMessageLog_WindowMessage_startMessage = Window_Message.prototype.startMessage;
Window_Message.prototype.startMessage = function() {
	const msgLogObj = {
		type: 'message',
		texts: $gameMessage.allText(),
		name: $gameMessage.speakerName(),
		faceName: $gameMessage.faceName(),
		faceIndex: $gameMessage.faceIndex()
	};
    $cgmz.attemptLogMessage(msgLogObj);
	alias_CGMZMessageLog_WindowMessage_startMessage.call(this);
};
//-----------------------------------------------------------------------------
// Also add additional replacement text codes
//-----------------------------------------------------------------------------
const alias_CGMZMessageLog_WindowMessage_convertEscapeCharacters = Window_Message.prototype.convertEscapeCharacters;
Window_Message.prototype.convertEscapeCharacters = function(text) {
    text = alias_CGMZMessageLog_WindowMessage_convertEscapeCharacters.apply(this, arguments);
	const regex = new RegExp(CGMZ.MessageLog.TextCode.replace(/\\/g, "\x1b"), "gi")
	text = text.replace(regex, "");
	return text;
};
//=============================================================================
// Window_ChoiceList
//-----------------------------------------------------------------------------
// Log choices the player makes
//=============================================================================
//-----------------------------------------------------------------------------
// Log the choice the player makes
//-----------------------------------------------------------------------------
const alias_CGMZMessageLog_WindowChoiceList_callOkHandler = Window_ChoiceList.prototype.callOkHandler;
Window_ChoiceList.prototype.callOkHandler = function() {
	const msgLogObj = {
		type: 'choice',
		choice: this.commandName(this.index())
	}
	$cgmz.attemptLogMessage(msgLogObj);
    alias_CGMZMessageLog_WindowChoiceList_callOkHandler.call(this);
};
//-----------------------------------------------------------------------------
// Log cancel choices too
//-----------------------------------------------------------------------------
const alias_CGMZMessageLog_WindowChoiceList_callCancelHandler = Window_ChoiceList.prototype.callCancelHandler;
Window_ChoiceList.prototype.callCancelHandler = function() {
	const msgLogObj = {
		type: 'choice',
		choice: $gameMessage.choiceCancelType() < 0 ? CGMZ.MessageLog.CancelMsgText : this.commandName($gameMessage.choiceCancelType())
	}
	$cgmz.attemptLogMessage(msgLogObj);
    alias_CGMZMessageLog_WindowChoiceList_callCancelHandler.call(this);
};
//=============================================================================
// CGMZ_Scene_MessageLog
//-----------------------------------------------------------------------------
// Handle the message log scene
//=============================================================================
function CGMZ_Scene_MessageLog() {
    this.initialize.apply(this, arguments);
}
CGMZ_Scene_MessageLog.prototype = Object.create(Scene_MenuBase.prototype);
CGMZ_Scene_MessageLog.prototype.constructor = CGMZ_Scene_MessageLog;
//-----------------------------------------------------------------------------
// Create message log scene objects
//-----------------------------------------------------------------------------
CGMZ_Scene_MessageLog.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
	this.createLogWindow();
};
//-----------------------------------------------------------------------------
// Create roll window
//-----------------------------------------------------------------------------
CGMZ_Scene_MessageLog.prototype.createLogWindow = function() {
	const rect = this.logWindowRect();
    this._logWindow = new CGMZ_Window_MessageLog(rect);
	this._logWindow.setHandler('cancel', this.popScene.bind(this));
	this._logWindow.activate();
    this.addWindow(this._logWindow);
};
//-----------------------------------------------------------------------------
// Get the roll window rect
//-----------------------------------------------------------------------------
CGMZ_Scene_MessageLog.prototype.logWindowRect = function() {
	const x = 0;
	const y = this.buttonAreaHeight();
	const width = Graphics.boxWidth;
	const height = Graphics.boxHeight - y;
    return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Get the item popup scene's custom scene background
// No need to check if Scene Backgrounds is installed because this custom func
// is only called by that plugin
//-----------------------------------------------------------------------------
CGMZ_Scene_MessageLog.prototype.CGMZ_getCustomSceneBackground = function() {
	return $cgmzTemp.sceneBackgroundPresets[CGMZ.MessageLog.SceneBackground];
};
//-----------------------------------------------------------------------------
// Get controls window preset for [CGMZ] Controls Window
// No need to check if plugin is installed because this custom func is only called by that plugin
//-----------------------------------------------------------------------------
CGMZ_Scene_MessageLog.prototype.CGMZ_getControlsWindowOtherPreset = function() {
	return $cgmzTemp.getControlWindowPresetOther(CGMZ.MessageLog.ControlsWindow);
};
//=============================================================================
// CGMZ_Window_MessageLog
//-----------------------------------------------------------------------------
// Window to show logged texts
//=============================================================================
function CGMZ_Window_MessageLog(rect, types) {
    this.initialize.apply(this, arguments);
}
CGMZ_Window_MessageLog.prototype = Object.create(CGMZ_Window_Scrollable.prototype);
CGMZ_Window_MessageLog.prototype.constructor = CGMZ_Window_MessageLog;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Window_MessageLog.prototype.initialize = function(rect) {
	const heightMultiplier = 50;
    CGMZ_Window_Scrollable.prototype.initialize.call(this, rect, heightMultiplier);
	if(Imported.CGMZ_WindowBackgrounds && CGMZ.MessageLog.MsgWindowBackground) this.CGMZ_setWindowBackground(CGMZ.MessageLog.MsgWindowBackground);
	if(Imported.CGMZ_WindowSettings && CGMZ.MessageLog.MsgWindowSettings) this.CGMZ_setWindowSettings(CGMZ.MessageLog.MsgWindowSettings);
	this.refresh();
};
//-----------------------------------------------------------------------------
// Draw item
//-----------------------------------------------------------------------------
CGMZ_Window_MessageLog.prototype.refresh = function() {
	this.contents.clear();
	this.contentsBack.clear();
	this._neededHeight = 0;
	let logs = JSON.parse(JSON.stringify($cgmz.getLoggedMessages()));
	if(CGMZ.MessageLog.ReverseOrder) logs = logs.reverse();
	for(const log of logs) {
		this.resetFontSettings();
		this.contents.fontBold = false;
		this.contents.fontItalic = false;
		switch(log.type) {
			case 'choice': this.drawChoice(log); break;
			case 'message':
			default: this.drawMessage(log);
		}
	}
	this._neededHeight -= CGMZ.MessageLog.LogSpacing;
	this._neededHeight += this.padding * 2;
	this.checkForScroll();
};
//-----------------------------------------------------------------------------
// Draw message
//-----------------------------------------------------------------------------
CGMZ_Window_MessageLog.prototype.drawMessage = function(msg) {
	const bgRect = new Rectangle(0, this._neededHeight, this.contents.width, 0);
	let x = 2;
	if(msg.name) {
		this._neededHeight += this.CGMZ_drawTextLine(msg.name, x, this._neededHeight, this.contents.width, 'left');
	}
	this.resetFontSettings();
	this.contents.fontBold = false;
	this.contents.fontItalic = false;
	if(msg.faceName) {
		this.CGMZ_loadFace(msg.faceName, msg.faceIndex, x, this._neededHeight + 2);
		x = ImageManager.faceWidth + 4;
	}
	const tempY = this._neededHeight;
	const string = this.removeUnsafeTextCodes(msg.texts);
	this._neededHeight += this.CGMZ_drawText(string, x, x, this._neededHeight, this.contents.width, 'left');
	if(msg.faceName && tempY + ImageManager.faceHeight + 4 > this._neededHeight) this._neededHeight = tempY + ImageManager.faceHeight + 4;
	bgRect.height = this._neededHeight - bgRect.y;
	this.contentsBack.fillRect(bgRect.x, bgRect.y, bgRect.width, bgRect.height, "rgba(32, 32, 32, 0.5)");
	this._neededHeight += CGMZ.MessageLog.LogSpacing;
};
//-----------------------------------------------------------------------------
// Draw choice
//-----------------------------------------------------------------------------
CGMZ_Window_MessageLog.prototype.drawChoice = function(choice) {
	const bgRect = new Rectangle(0, this._neededHeight, this.contents.width, 0);
	let x = 2;
	const string = this.removeUnsafeTextCodes(choice.choice);
	this._neededHeight += this.CGMZ_drawText(string, x, x, this._neededHeight, this.contents.width, 'left');
	bgRect.height = this._neededHeight - bgRect.y;
	this.contentsBack.fillRect(bgRect.x, bgRect.y, bgRect.width, bgRect.height, "rgba(32, 32, 32, 0.5)");
	this._neededHeight += CGMZ.MessageLog.LogSpacing;
};
//-----------------------------------------------------------------------------
// Remove certain text codes that are not safe for message log
//-----------------------------------------------------------------------------
CGMZ_Window_MessageLog.prototype.removeUnsafeTextCodes = function(string) {
	const regex = new RegExp(CGMZ.MessageLog.TextCodeRemovals.join("|"), 'gi'); 
	const newString = string.replace(regex, '');
	return newString;
};
//-----------------------------------------------------------------------------
// Handle text state x and y change in message window context
//-----------------------------------------------------------------------------
CGMZ_Window_MessageLog.prototype.processEscapeCharacter = function(code, textState) {
	const bgRect = new Rectangle(0, this._neededHeight, this.contents.width, 0);
    switch(code) {
        case "PY":
            textState.y = this.obtainEscapeParam(textState) + bgRect.y;
            return;
    }
	Window_Base.prototype.processEscapeCharacter.call(this, code, textState);
};