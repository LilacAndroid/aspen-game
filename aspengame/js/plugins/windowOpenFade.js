/*:
 * @target MZ
 * @plugindesc Change the window open/close animation to fade in/out.
 * @author Caethyril
 * @url https://forums.rpgmakerweb.com/index.php?threads/141057/
 * @help Simply remaps openness to affect opacity instead of y-scale.
 * Affects all game windows.
 * 
 * Terms of use: free to use and/or modify for any project!
 */

Object.defineProperty(Window.prototype, "openness", {
    get: function() {
        return this._openness;
    },
    set: function(value) {
        if (this._openness !== value) {
            this._openness = value.clamp(0, 255);
            if (!this._background && !this._dimmerSprite?.visible) {
                this.opacity = this._openness;
            }
        }
    },
    configurable: true
});