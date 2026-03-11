//=============================================================================
// MPP_ActorWalkSpeed.js
//=============================================================================
// Copyright (c) 2024 Mokusei Penguin
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Change the speed of walk motion for each actor.
 * @author Mokusei Penguin
 * @url
 *
 * @help [ver. 1.0.0]
 * - This plugin is for RPG Maker MZ.
 * 
 * ================================
 * Mail : wood_penguin＠yahoo.co.jp (＠ is half-width)
 * Blog : http://woodpenguin.blog.fc2.com/
 * License : MIT license
 * 
 *  @param Actor Speeds
 *      @desc 
 *      @type struct<ActorSpeed>[]
 *      @default ["{\"Actor\":\"1\",\"Speed\":\"12\"}","{\"Actor\":\"4\",\"Speed\":\"11\"}","{\"Actor\":\"6\",\"Speed\":\"15\"}","{\"Actor\":\"7\",\"Speed\":\"13\"}"]
 * 
 */

/*~struct~ActorSpeed:
 *  @param Actor
 *      @desc 
 *      @type actor
 *      @default 0
 * 
 *  @param Speed
 *      @desc 
 *      @type number
 *          @min 1
 *          @max 100
 *      @default 12
 * 
*/

/*:ja
 * @target MZ
 * @plugindesc 待機モーションのスピードをアクターごとに変更します。
 * @author 木星ペンギン
 * @url
 *
 * @help [ver. 1.0.0]
 * - このプラグインはRPGツクールMZ用です。
 * 
 * ================================
 * Mail : wood_penguin＠yahoo.co.jp (＠は半角)
 * Blog : http://woodpenguin.blog.fc2.com/
 * License : MIT license
 * 
 *  @param Actor Speeds
 *      @text 待機速度の配列
 *      @desc 
 *      @type struct<ActorSpeed>[]
 *      @default ["{\"Actor\":\"1\",\"Speed\":\"12\"}","{\"Actor\":\"4\",\"Speed\":\"11\"}","{\"Actor\":\"6\",\"Speed\":\"15\"}","{\"Actor\":\"7\",\"Speed\":\"13\"}"]
 * 
 */

/*~struct~ActorSpeed:ja
 *  @param Actor
 *      @text アクター
 *      @desc 
 *      @type actor
 *      @default 0
 * 
 *  @param Speed
 *      @text 速度
 *      @desc 
 *      @type number
 *          @min 1
 *          @max 100
 *      @default 12
 * 
*/

(() => {
    'use strict';

    const pluginName = 'MPP_ActorWalkSpeed';

    // Plugin Parameters
    const parameters = PluginManager.parameters(pluginName);
    const reviverParse = function(key, value) {
        try {
            return JSON.parse(value, reviverParse);
        } catch (e) {
            return value;
        }
    };
    const param_ActorSpeeds = JSON.parse(parameters['Actor Speeds'] || '[]', reviverParse);

    //-------------------------------------------------------------------------
    // Sprite_Actor

    const _Sprite_Actor_motionSpeed = Sprite_Actor.prototype.motionSpeed;
    Sprite_Actor.prototype.motionSpeed = function() {
        if (this._motion.index === 0 && this._actor.isActor()) {
            const actorId = this._actor.actorId();
            const actorSpeed = param_ActorSpeeds.find(
                obj => obj.Actor === actorId
            );
            if (actorSpeed) {
                return actorSpeed.Speed;
            }
        }
        return _Sprite_Actor_motionSpeed.apply(this, arguments);
    };
    
})();
