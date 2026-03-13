/*:
 * @target MV MZ
 * @plugindesc Disable touch movement on map.
 * @author Caethyril
 * @url https://forums.rpgmakerweb.com/threads/173375/
 * @help Free to use and/or modify for any project, no credit required.
 */
// Override - never set move destination.
Game_Temp.prototype.setDestination = function() {};