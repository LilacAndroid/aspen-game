/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/playermovement/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc Various movement changes for the player
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
 * Description: Use this plugin to gain more control over how the player can
 * move, as well as give your players additional movement abilities they can 
 * get around the map with. Includes things such as reverse movement, turning
 * in place, and jumping.
 * ----------------------------------------------------------------------------
 * Documentation:
 * -----------------------------Alpha Notes------------------------------------
 * Planned features to be added:
 * 1) Push Event
 * 2) Pull Event
 * 3) Carry Event
 * 4) Stamina System for using movement abilities
 * 5) Touch UI support
 *
 * Want additional features not already present/listed above? Make suggestions
 * on the Patreon Post, Itch.io Page, or in my discord under the #suggestions
 * channel!
 * https://discord.gg/Gbx7JXP
 * -----------------------------Main Features----------------------------------
 * TURN IN PLACE
 * Normally, to change direction the player needs to move in that direction.
 * However, this might not always be what the player wants. You could design a
 * puzzle such that the player can only solve it by turning in place, such as
 * needing to stand on a certain tile and shoot [CGMZ] Dungeon Tool arrows at
 * different switches. This feature allows the player to turn in place without
 * moving if an additional button is held.
 * 
 * REVERSE MOVEMENT
 * The player presses up, and moves up. The player presses down, and move down.
 * This is expected, but what if the player was suffering from some kind of 
 * confusion on the map screen and you wanted to simulate their confusion?
 * Reverse movement takes the player's inputs and reverses them, so up becomes
 * down, down becomes up, and so on. You might also be able to use this for a
 * map puzzle.
 *
 * JUMPING
 * The player comes up to a small pit with a treasure chest on the other side,
 * by default they would need to give up. Not so with the ability to jump! By
 * allowing your player to jump, they will be able to traverse more areas and
 * it can also be used to split up the monotonous feeling of holding the
 * forward button through dungeons.
 *
 * DASHING
 * In a lot of games, the player can do a short dash which gives them a short
 * burst of speed. This could allow you to make certain features such as races
 * which need the player to move a certain distance in a certain amount of
 * time, but regular movement is not sufficient to meet the time requirement.
 * It could be in the form of a puzzle where the player needs to hit a switch
 * and then move quickly through a door before the switch shuts off.
 *
 * FREEZE
 * Sometimes you may want to freeze the player's movement without using an
 * autorun event which comes with a lot of other side effects. This can help
 * you do that, the player will be frozen until you turn this off but 
 * everything else should work as normal.
 * -----------------------------Minor Features---------------------------------
 * REGION RESTRICTION
 * Sometimes, you just want the player to not be able to go somewhere. But with
 * standard RPGM, you need to either place invisible impassable tiles there,
 * block them with invisible events, or something else. Region restriction
 * allows you to paint regions that will block the player. You can turn this
 * on/off with a switch
 * ----------------------------Plugin Commands---------------------------------
 * This plugin supports the following plugin commands:
 * 
 * • Jump
 * Attempt to jump for the player
 * ------------------------------Saved Games-----------------------------------
 * This plugin is fully compatible with saved games
 *
 * This means the following will work in saved games:
 * ✓ Add this plugin to your game
 * ✓ Modify plugin parameters
 * ✓ Remove this plugin from your game
 * -----------------------------Filename---------------------------------------
 * The filename for this plugin MUST remain CGMZ_PlayerMovement.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * -----------------------------Latest Version---------------------------------
 * Hi all, this latest version is full of small changes that should make a big
 * impact on using this plugin. A new movement ability was introduced which is
 * the ability to freeze the player's movement. This prevents the player from
 * acting, similar to when an autorun event is running but without needing to
 * have an autorun event active.
 *
 * A switch for region restriction has been added so you can now turn on/off
 * region restrictions as needed in your game.
 *
 * The reverse movement parameter was changed. Before, if you did not set it,
 * movement would be permanently reversed similar to accessing all other
 * movement abilities. This is no longer a requirement of movement abilities,
 * and now not setting the switch parameter will have no effect on normal
 * player movement.
 *
 * A bug that could cause the player to use movement abilities during times
 * when they should not have been able to move has been fixed. You used to
 * also be able to use movement abilities like jumping or dashing while in
 * a vehicle, this has also been fixed.
 * 
 * Version Alpha R4
 * - Added freeze movement ability
 * - Added region restriction switch
 * - Reverse Movement changed to not require setting up the param
 * - Fix bugs with using move abilities in inappropriate times
 *
 * @command Jump
 * @desc Attempts to jump for the player. Can still fail if jump not possible.
 *
 * @param Enable Settings
 *
 * @param Reverse Movement Switch
 * @parent Enable Settings
 * @type switch
 * @default 0
 * @desc The Switch ID that controls if the player's movement is reversed (ON) or not (OFF).
 *
 * @param Freeze Switch
 * @parent Enable Settings
 * @type switch
 * @default 0
 * @desc The Switch ID that controls if the player can move at all.
 *
 * @param Jump Switch
 * @parent Enable Settings
 * @type switch
 * @default 0
 * @desc The Switch ID that controls if the player's can jump (ON) or not (OFF).
 *
 * @param Turn Switch
 * @parent Enable Settings
 * @type switch
 * @default 0
 * @desc The Switch ID that controls if the player's can turn in place (ON) or not (OFF).
 *
 * @param Dash Switch
 * @parent Enable Settings
 * @type switch
 * @default 0
 * @desc The Switch ID that controls if the player's can dash (ON) or not (OFF).
 *
 * @param Movement Settings
 *
 * @param Region Restriction
 * @parent Movement Settings
 * @type number
 * @default 0
 * @desc Region id through which the player cannot move. 0 = no restriction
 *
 * @param Region Restriction Switch
 * @parent Movement Settings
 * @type switch
 * @default 0
 * @desc If set, this switch controls whether region restrictions apply.
 *
 * @param Jump Length
 * @parent Movement Settings
 * @type number
 * @default 2
 * @desc Maximum amount of tiles the player can jump
 *
 * @param Jump Cooldown
 * @parent Movement Settings
 * @type number
 * @default 120
 * @desc Number of frames to wait before jump is available again (60f = 1sec)
 *
 * @param Dash Speed
 * @parent Movement Settings
 * @type number
 * @default 6
 * @desc Movement speed of the dash
 *
 * @param Dash Length
 * @parent Movement Settings
 * @type number
 * @default 3
 * @desc Length (number of tiles) of the dash
 *
 * @param Dash Cooldown
 * @parent Movement Settings
 * @type number
 * @default 120
 * @desc Number of frames to wait before dash is available again (60f = 1sec)
 *
 * @param Reverse Movement Auto Fade
 * @parent Movement Settings
 * @type number
 * @default 0
 * @desc Amount of steps the player must take before reversed movement auto-fades. Set to 0 to not auto fade.
 *
 * @param Control Settings
 *
 * @param Turn Key
 * @parent Control Settings
 * @desc Key that, when pressed, will allow the player to turn in place
 *
 * @param Turn Gamepad
 * @parent Control Settings
 * @desc Gamepad button that, when pressed, will allow the player to turn in place
 * @type select
 * @option None
 * @value -1
 * @option A
 * @value 0
 * @option B
 * @value 1
 * @option X
 * @value 2
 * @option Y
 * @value 3
 * @option LB
 * @value 4
 * @option RB
 * @value 5
 * @option LT
 * @value 6
 * @option RT
 * @value 7
 * @option Back / Select
 * @value 8
 * @option Start
 * @value 9
 * @option Left Stick
 * @value 10
 * @option Right Stick
 * @value 11
 * @option Dpad Up
 * @value 12
 * @option Dpad Down
 * @value 13
 * @option Dpad Left
 * @value 14
 * @option Dpad Right
 * @value 15
 * @default -1
 *
 * @param Jump Key
 * @parent Control Settings
 * @desc Key that, when pressed, will attempt to jump for the player
 *
 * @param Jump Gamepad
 * @parent Control Settings
 * @desc Gamepad button that, when pressed, will attempt to jump for the player
 * @type select
 * @option None
 * @value -1
 * @option A
 * @value 0
 * @option B
 * @value 1
 * @option X
 * @value 2
 * @option Y
 * @value 3
 * @option LB
 * @value 4
 * @option RB
 * @value 5
 * @option LT
 * @value 6
 * @option RT
 * @value 7
 * @option Back / Select
 * @value 8
 * @option Start
 * @value 9
 * @option Left Stick
 * @value 10
 * @option Right Stick
 * @value 11
 * @option Dpad Up
 * @value 12
 * @option Dpad Down
 * @value 13
 * @option Dpad Left
 * @value 14
 * @option Dpad Right
 * @value 15
 * @default -1
 *
 * @param Dash Key
 * @parent Control Settings
 * @desc Key that, when pressed, will allow the player to do a short dash
 *
 * @param Dash Gamepad
 * @parent Control Settings
 * @desc Gamepad button that, when pressed, will allow the player to do a short dash
 * @type select
 * @option None
 * @value -1
 * @option A
 * @value 0
 * @option B
 * @value 1
 * @option X
 * @value 2
 * @option Y
 * @value 3
 * @option LB
 * @value 4
 * @option RB
 * @value 5
 * @option LT
 * @value 6
 * @option RT
 * @value 7
 * @option Back / Select
 * @value 8
 * @option Start
 * @value 9
 * @option Left Stick
 * @value 10
 * @option Right Stick
 * @value 11
 * @option Dpad Up
 * @value 12
 * @option Dpad Down
 * @value 13
 * @option Dpad Left
 * @value 14
 * @option Dpad Right
 * @value 15
 * @default -1
*/
Imported.CGMZ_PlayerMovement = true;
CGMZ.Versions["Player Movement"] = "Alpha R4";
CGMZ.PlayerMovement = {};
CGMZ.PlayerMovement.parameters = PluginManager.parameters('CGMZ_PlayerMovement');
CGMZ.PlayerMovement.TurnKey = CGMZ.PlayerMovement.parameters["Turn Key"];
CGMZ.PlayerMovement.JumpKey = CGMZ.PlayerMovement.parameters["Jump Key"];
CGMZ.PlayerMovement.DashKey = CGMZ.PlayerMovement.parameters["Dash Key"];
CGMZ.PlayerMovement.RegionRestriction = Number(CGMZ.PlayerMovement.parameters["Region Restriction"]);
CGMZ.PlayerMovement.RegionRestrictionSwitch = Number(CGMZ.PlayerMovement.parameters["Region Restriction Switch"]);
CGMZ.PlayerMovement.TurnGamepad = Number(CGMZ.PlayerMovement.parameters["Turn Gamepad"]);
CGMZ.PlayerMovement.JumpGamepad = Number(CGMZ.PlayerMovement.parameters["Jump Gamepad"]);
CGMZ.PlayerMovement.DashGamepad = Number(CGMZ.PlayerMovement.parameters["Dash Gamepad"]);
CGMZ.PlayerMovement.JumpLength = Number(CGMZ.PlayerMovement.parameters["Jump Length"]);
CGMZ.PlayerMovement.JumpCooldown = Number(CGMZ.PlayerMovement.parameters["Jump Cooldown"]);
CGMZ.PlayerMovement.DashLength = Number(CGMZ.PlayerMovement.parameters["Dash Length"]);
CGMZ.PlayerMovement.DashSpeed = Number(CGMZ.PlayerMovement.parameters["Dash Speed"]);
CGMZ.PlayerMovement.DashCooldown = Number(CGMZ.PlayerMovement.parameters["Dash Cooldown"]);
CGMZ.PlayerMovement.ReverseMovementSwitch = Number(CGMZ.PlayerMovement.parameters["Reverse Movement Switch"]);
CGMZ.PlayerMovement.JumpSwitch = Number(CGMZ.PlayerMovement.parameters["Jump Switch"]);
CGMZ.PlayerMovement.TurnSwitch = Number(CGMZ.PlayerMovement.parameters["Turn Switch"]);
CGMZ.PlayerMovement.DashSwitch = Number(CGMZ.PlayerMovement.parameters["Dash Switch"]);
CGMZ.PlayerMovement.FreezeSwitch = Number(CGMZ.PlayerMovement.parameters["Freeze Switch"]);
CGMZ.PlayerMovement.ReverseMovementAutoFade = Number(CGMZ.PlayerMovement.parameters["Reverse Movement Auto Fade"]);
//=============================================================================
// CGMZ_Temp
//-----------------------------------------------------------------------------
// Add plugin commands
//=============================================================================
//-----------------------------------------------------------------------------
// Register Plugin Commands
//-----------------------------------------------------------------------------
const alias_CGMZPlayerMovement_CGMZTemp_registerPluginCommands = CGMZ_Temp.prototype.registerPluginCommands;
CGMZ_Temp.prototype.registerPluginCommands = function() {
	alias_CGMZPlayerMovement_CGMZTemp_registerPluginCommands.call(this);
	PluginManager.registerCommand("CGMZ_PlayerMovement", "Jump", this.pluginCommandPlayerMovementJump);
};
//-----------------------------------------------------------------------------
// Plugin Command - Jump
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandPlayerMovementJump = function() {
	$gamePlayer.CGMZ_PlayerMovement_attemptJump(true);
};
//-----------------------------------------------------------------------------
// Check if jump input detected
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.isPlayerMovementJumpInput = function() {
	if(CGMZ.PlayerMovement.JumpGamepad >= 0) {
		const pad = this.getLastGamepad();
		return this.isKeyPressed(CGMZ.PlayerMovement.JumpKey) || pad?.buttons[CGMZ.PlayerMovement.JumpGamepad].pressed;
	}
	return this.isKeyPressed(CGMZ.PlayerMovement.JumpKey);
};
//-----------------------------------------------------------------------------
// Check if turn input detected
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.isPlayerMovementTurnInput = function() {
	if(CGMZ.PlayerMovement.TurnGamepad >= 0) {
		const pad = this.getLastGamepad();
		return this.isKeyPressed(CGMZ.PlayerMovement.TurnKey) || pad?.buttons[CGMZ.PlayerMovement.TurnGamepad].pressed;
	}
	return this.isKeyPressed(CGMZ.PlayerMovement.TurnKey);
};
//-----------------------------------------------------------------------------
// Check if dash input detected
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.isPlayerMovementDashInput = function() {
	if(CGMZ.PlayerMovement.DashGamepad >= 0) {
		const pad = this.getLastGamepad();
		return this.isKeyPressed(CGMZ.PlayerMovement.DashKey) || pad?.buttons[CGMZ.PlayerMovement.DashGamepad].pressed;
	}
	return this.isKeyPressed(CGMZ.PlayerMovement.DashKey);
};
//-----------------------------------------------------------------------------
// Get player movement setting
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.isPlayerMovementAbilityValid = function(type) {
	switch(type) {
		case 'jump': return (!CGMZ.PlayerMovement.JumpSwitch || $gameSwitches.value(CGMZ.PlayerMovement.JumpSwitch));
		case 'turn': return (!CGMZ.PlayerMovement.TurnSwitch || $gameSwitches.value(CGMZ.PlayerMovement.TurnSwitch));
		case 'dash': return (!CGMZ.PlayerMovement.DashSwitch || $gameSwitches.value(CGMZ.PlayerMovement.DashSwitch));
		case 'reverse': return (CGMZ.PlayerMovement.ReverseMovementSwitch && $gameSwitches.value(CGMZ.PlayerMovement.ReverseMovementSwitch));
	}
	return false;
};
//=============================================================================
// Game_Player
//-----------------------------------------------------------------------------
// Handle player movement
//=============================================================================
//-----------------------------------------------------------------------------
// Also add player movement variables
//-----------------------------------------------------------------------------
const alias_CGMZPlayerMovement_GamePlayer_initMembers = Game_Player.prototype.initMembers;
Game_Player.prototype.initMembers = function() {
    alias_CGMZPlayerMovement_GamePlayer_initMembers.call(this);
	this.CGMZ_PlayerMovement_createPlayerMovementSettings();
};
//-----------------------------------------------------------------------------
// Also add player movement variables
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMZ_PlayerMovement_createPlayerMovementSettings = function() {
    this.CGMZ_playerMovementSettings = {};
	this.CGMZ_playerMovementSettings.reverseMoveSteps = 0;
	this.CGMZ_PlayerMovement_resetPlayerMovementCooldowns();
};
//-----------------------------------------------------------------------------
// Reset player movement cooldowns
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMZ_PlayerMovement_resetPlayerMovementCooldowns = function() {
	this.CGMZ_playerMovementSettings.jumpCooldown = 0;
	this.CGMZ_playerMovementSettings.dashCooldown = 0;
};
//-----------------------------------------------------------------------------
// Also update new movement options
//-----------------------------------------------------------------------------
const alias_CGMZPlayerMovement_GamePlayer_update = Game_Player.prototype.update;
Game_Player.prototype.update = function(sceneActive) {
    alias_CGMZPlayerMovement_GamePlayer_update.apply(this, arguments);
	this.CGMZ_PlayerMovement_updateCooldowns();
};
//-----------------------------------------------------------------------------
// Update cooldowns
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMZ_PlayerMovement_updateCooldowns = function() {
    this.CGMZ_playerMovementSettings.jumpCooldown--;
	this.CGMZ_playerMovementSettings.dashCooldown--;
};
//-----------------------------------------------------------------------------
// Check if region restriction blocks player
//-----------------------------------------------------------------------------
const alias_CGMZPlayerMovement_GamePlayer_isMapPassable = Game_Player.prototype.isMapPassable;
Game_Player.prototype.isMapPassable = function(x, y, d) {
	const oldReturn = alias_CGMZPlayerMovement_GamePlayer_isMapPassable.apply(this, arguments);
	if(this.CGMZ_isRegionRestrictionApplies()) {
		const x2 = $gameMap.roundXWithDirection(x, d);
		const y2 = $gameMap.roundYWithDirection(y, d);
		const region = $gameMap.regionId(x2, y2);
		if(region === CGMZ.PlayerMovement.RegionRestriction) return false;
	}
    return oldReturn;
};
//-----------------------------------------------------------------------------
// Check if region restriction should be applied
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMZ_isRegionRestrictionApplies = function() {
	if(!CGMZ.PlayerMovement.RegionRestriction) return false;
	if(CGMZ.PlayerMovement.RegionRestrictionSwitch && !$gameSwitches.value(CGMZ.PlayerMovement.RegionRestrictionSwitch)) return false;
	return true;
};
//-----------------------------------------------------------------------------
// Check if turn in place button is being held, and change movement function
//-----------------------------------------------------------------------------
const alias_CGMZPlayerMovement_GamePlayer_moveByInput = Game_Player.prototype.moveByInput;
Game_Player.prototype.moveByInput = function() {
	if(this.CGMZ_PlayerMovement_canJump() && $cgmzTemp.isPlayerMovementJumpInput()) {
		this.CGMZ_PlayerMovement_attemptJump();
	} else if(this.CGMZ_PlayerMovement_canTurn() && $cgmzTemp.isPlayerMovementTurnInput()) {
		this.CGMZ_PlayerMovement_turnByInput();
	} else if(this.CGMZ_PlayerMovement_canDash() && $cgmzTemp.isPlayerMovementDashInput()) {
		this.CGMZ_PlayerMovement_performDash();
	} else {
		alias_CGMZPlayerMovement_GamePlayer_moveByInput.apply(this, arguments);
	}
};
//-----------------------------------------------------------------------------
// Check if player can move
//-----------------------------------------------------------------------------
const alias_CGMZPlayerMovement_GamePlayer_canMove = Game_Player.prototype.canMove;
Game_Player.prototype.canMove = function() {
	const oldReturn = alias_CGMZPlayerMovement_GamePlayer_canMove.call(this);
	if(CGMZ.PlayerMovement.FreezeSwitch && $gameSwitches.value(CGMZ.PlayerMovement.FreezeSwitch)) return false;
	return oldReturn;
};
//-----------------------------------------------------------------------------
// Check if the player can jump
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMZ_PlayerMovement_canJump = function() {
	if(!this.canMove()) return false;
	if(this.isInVehicle()) return false;
	if(this.CGMZ_playerMovementSettings.jumpCooldown > 0) return false;
	if(!$cgmzTemp.isPlayerMovementAbilityValid('jump')) return false;
    return true;
};
//-----------------------------------------------------------------------------
// Check if the player can turn
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMZ_PlayerMovement_canTurn = function() {
	if(!this.canMove()) return false;
	if(!$cgmzTemp.isPlayerMovementAbilityValid('turn')) return false;
    return true;
};
//-----------------------------------------------------------------------------
// Check if the player can dash
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMZ_PlayerMovement_canDash = function() {
	if(!this.canMove()) return false;
	if(this.isInVehicle()) return false;
	if(this.CGMZ_playerMovementSettings.dashCooldown > 0) return false;
	if(!$cgmzTemp.isPlayerMovementAbilityValid('dash')) return false;
    return true;
};
//-----------------------------------------------------------------------------
// Attempt to jump
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMZ_PlayerMovement_attemptJump = function(ignoreConditions = false) {
    if(ignoreConditions || (!this.isMoving() && this.canMove())) {
		const d = this.direction();
		const coordinates = [new Point(this.x, this.y)];
		const jumpLength = CGMZ.PlayerMovement.JumpLength;
		for(let i = 1; i <= jumpLength; i++) {
			const x = $gameMap.roundX(this.x + (d === 6 ? i : d === 4 ? -i : 0));
			const y = $gameMap.roundY(this.y + (d === 2 ? i : d === 8 ? -i : 0));
			coordinates.push(new Point(x, y));
		}
		const jumpIndex = this.CGMZ_PlayerMovement_getJumpIndex(coordinates, d);
		if(jumpIndex) {
			const xJump = $gameMap.deltaX(coordinates[jumpIndex].x, this.x);
			const yJump = $gameMap.deltaY(coordinates[jumpIndex].y, this.y);
			this.jump(xJump, yJump);
			this.CGMZ_playerMovementSettings.jumpCooldown = CGMZ.PlayerMovement.JumpCooldown;
		}
    }
};
//-----------------------------------------------------------------------------
// Get the index of a coordinate array that the player should jump to
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMZ_PlayerMovement_getJumpIndex = function(coordinates, direction) {
	let index = 0;
    for(let i = 0; i < coordinates.length; i++) {
		const c = coordinates[i];
		if($gameMap.isValid(c.x, c.y) && $gameMap.isPassable(c.x, c.y, direction) && !this.isCollidedWithCharacters(c.x, c.y)) {
			index = i;
		}
	}
	return index;
};
//-----------------------------------------------------------------------------
// Turn in place movement
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMZ_PlayerMovement_turnByInput = function() {
    if (!this.isMoving() && this.canMove()) {
        let direction = this.getInputDirection();
        if(direction > 0) {
            $gameTemp.clearDestination();
        } else if($gameTemp.isDestinationValid()) {
            const x = $gameTemp.destinationX();
            const y = $gameTemp.destinationY();
            direction = this.findDirectionTo(x, y);
        }
        if(direction > 0) {
            this.CGMZ_PlayerMovement_executeTurn(direction);
        }
    }
};
//-----------------------------------------------------------------------------
// Execute turn in place
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMZ_PlayerMovement_executeTurn = function(d) {
	if($cgmzTemp.isPlayerMovementAbilityValid('reverse')) d = 10 - d;
    this.setDirection(d);
};
//-----------------------------------------------------------------------------
// Perform a dash
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMZ_PlayerMovement_performDash = function() {
	this.CGMZ_playerMovementSettings.dashCooldown = CGMZ.PlayerMovement.DashCooldown;
    const moveRoute = {list: [], repeat: false, wait: false, skippable: true};
	const incSpeed = {code: Game_Character.ROUTE_CHANGE_SPEED, indent: null, parameters: [CGMZ.PlayerMovement.DashSpeed]};
	const decSpeed = {code: Game_Character.ROUTE_CHANGE_SPEED, indent: null, parameters: [this.moveSpeed()]};
	const forward = {code: Game_Character.ROUTE_MOVE_FORWARD, indent: null};
	moveRoute.list.push(incSpeed);
	for(let i = 0; i < CGMZ.PlayerMovement.DashLength; i++) {
		moveRoute.list.push(forward);
	}
	moveRoute.list.push(decSpeed);
	moveRoute.list.push({code: 0});
	this.forceMoveRoute(moveRoute);
};
//-----------------------------------------------------------------------------
// Reverse movements if input reversed
//-----------------------------------------------------------------------------
const alias_CGMZPlayerMovement_GamePlayer_executeMove = Game_Player.prototype.executeMove;
Game_Player.prototype.executeMove = function(direction) {
	if($cgmzTemp.isPlayerMovementAbilityValid('reverse')) {
		if(CGMZ.PlayerMovement.ReverseMovementAutoFade) this.CGMZ_PlayerMovement_handleReverseMovementSteps();
		direction = 10 - direction;
	} else {
		this.CGMZ_playerMovementSettings.reverseMoveSteps = 0;
	}
    alias_CGMZPlayerMovement_GamePlayer_executeMove.call(this, direction);
};
//-----------------------------------------------------------------------------
// Check if reverse movement should auto fade by steps
//-----------------------------------------------------------------------------
Game_Player.prototype.CGMZ_PlayerMovement_handleReverseMovementSteps = function() {
	if(!this.CGMZ_playerMovementSettings.reverseMoveSteps) {
		this.CGMZ_playerMovementSettings.reverseMoveSteps = CGMZ.PlayerMovement.ReverseMovementAutoFade;
	} else {
		this.CGMZ_playerMovementSettings.reverseMoveSteps--
	}
	if(this.CGMZ_playerMovementSettings.reverseMoveSteps <= 0) {
		$gameSwitches.setValue(CGMZ.PlayerMovement.ReverseMovementSwitch, false);
	}
};