(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Game.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0486fOqHrJN+6c5PQg5FHh9', 'Game', __filename);
// scripts/Game.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23;

var _Player = require("./Player");

var _Player2 = _interopRequireDefault(_Player);

var _ScoreFX = require("./ScoreFX");

var _ScoreFX2 = _interopRequireDefault(_ScoreFX);

var _Star = require("./Star");

var _Star2 = _interopRequireDefault(_Star);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var _cc$_decorator = cc._decorator,
    ccclass = _cc$_decorator.ccclass,
    property = _cc$_decorator.property;
var NewScript = (_dec = property(cc.Prefab), _dec2 = property(cc.Prefab), _dec3 = property(cc.Node), _dec4 = property(_Player2.default), _dec5 = property(cc.Label), _dec6 = property(cc.AudioClip), _dec7 = property(cc.AudioClip), _dec8 = property(cc.Node), _dec9 = property(cc.Sprite), _dec10 = property(cc.Sprite), _dec11 = property(cc.Node), _dec12 = property(cc.Sprite), _dec13 = property(cc.Sprite), _dec14 = property(cc.Sprite), _dec15 = property(cc.Sprite), _dec16 = property(cc.Sprite), _dec17 = property(cc.Sprite), _dec18 = property(cc.Sprite), ccclass(_class = (_class2 = function (_cc$Component) {
    _inherits(NewScript, _cc$Component);

    function NewScript() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, NewScript);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NewScript.__proto__ || Object.getPrototypeOf(NewScript)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, "starPrefab", _descriptor, _this), _initDefineProp(_this, "scoreFXPrefab", _descriptor2, _this), _initDefineProp(_this, "maxStarDuration", _descriptor3, _this), _initDefineProp(_this, "minStarDuration", _descriptor4, _this), _initDefineProp(_this, "ground", _descriptor5, _this), _initDefineProp(_this, "player", _descriptor6, _this), _initDefineProp(_this, "scoreDisplay", _descriptor7, _this), _initDefineProp(_this, "scoreAudio", _descriptor8, _this), _initDefineProp(_this, "cryAudio", _descriptor9, _this), _initDefineProp(_this, "btnNode", _descriptor10, _this), _initDefineProp(_this, "btnNodeStore", _descriptor11, _this), _initDefineProp(_this, "btnNodeHelp", _descriptor12, _this), _initDefineProp(_this, "gameOverNode", _descriptor13, _this), _initDefineProp(_this, "topBeginning", _descriptor14, _this), _initDefineProp(_this, "totalTime", _descriptor15, _this), _initDefineProp(_this, "step", _descriptor16, _this), _initDefineProp(_this, "heart_1", _descriptor17, _this), _initDefineProp(_this, "heart_2", _descriptor18, _this), _initDefineProp(_this, "heart_3", _descriptor19, _this), _initDefineProp(_this, "heart_4", _descriptor20, _this), _initDefineProp(_this, "heart_5", _descriptor21, _this), _initDefineProp(_this, "menu_screen", _descriptor22, _this), _initDefineProp(_this, "gameplay_screen", _descriptor23, _this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    /**
     * @type {cc.Prefab}
     */


    /**
     * @type {Player}
     */


    _createClass(NewScript, [{
        key: "setHeartIcon",


        // use this for initialization

        value: function setHeartIcon() {
            this.heart_1.enabled = this.lifeStatus[0];
            this.heart_2.enabled = this.lifeStatus[1];
            this.heart_3.enabled = this.lifeStatus[2];
            this.heart_4.enabled = this.lifeStatus[3];
            this.heart_5.enabled = this.lifeStatus[4];
        }
    }, {
        key: "onLoad",
        value: function onLoad() {

            this.groundY = this.ground.y + this.ground.height / 2;

            // store last star's x position
            this.currentStar = null;
            this.currentStarX = 0;

            this.timer = 0;
            this.starDuration = 0;

            // is showing menu or running game
            this.isRunning = false;

            // initialize star and score pool
            this.starPool = new cc.NodePool('Star');
            this.scorePool = new cc.NodePool('ScoreFX');
            this.lifeStatus = [true, true, true, true, true];
            this.lifeCount = 5;
        }
    }, {
        key: "onStartGame",
        value: function onStartGame() {
            this.menu_screen.enabled = false;
            this.resetScore();

            this.isRunning = true;

            this.btnNode.setPositionX(3000);
            this.btnNodeHelp.enabled = false;
            this.btnNodeStore.enabled = false;

            this.gameOverNode.active = false;
            this.player.enabled = true;
            this.player.startMoveAt(cc.p(0, this.groundY));

            this.starPool = new cc.NodePool('Star');
            this.scorePool = new cc.NodePool('ScoreFX');

            this.spawnNewStar();
        }
    }, {
        key: "spawnNewStar",
        value: function spawnNewStar() {
            if (this.lifeCount < 1) {
                this.gameOver();
                return;
            }
            var newStar = null;
            if (this.starPool.size() > 0) {
                newStar = this.starPool.get(this); // this will be passed to Star's reuse method
            } else {
                newStar = cc.instantiate(this.starPrefab);
            }

            this.node.addChild(newStar);
            newStar.setPosition(this.getNewStarPosition());
            newStar.getComponent(_Star2.default).init(this);
            this.startTimer();

            // Set star with new sprite;
            this.currentStar = newStar;
        }
    }, {
        key: "despawnStar",
        value: function despawnStar(star) {
            this.starPool.put(star);
            if (this.lifeCount < 1) {
                this.gameOver();
                return;
            }
            this.spawnNewStar();
        }
    }, {
        key: "startTimer",
        value: function startTimer() {
            // get a life duration for next star
            this.starDuration = this.minStarDuration + cc.random0To1() * (this.maxStarDuration - this.minStarDuration);
            this.timer = 0;
        }
    }, {
        key: "getNewStarPosition",
        value: function getNewStarPosition() {

            return cc.p(this.player.getCenterPos().x + cc.randomMinus1To1() * 250, this.topBeginning);
        }
    }, {
        key: "gainScore",
        value: function gainScore(pos, op, score) {
            this.despawnStar(this.currentStar);

            if (op < 1) {
                cc.audioEngine.playEffect(this.cryAudio, false);
                this.lifeCount--;
                this.lifeStatus[this.lifeCount] = false;
                return;
            }

            if (this.lifeCount < 1) {
                this.gameOver();
                return;
            }
            this.score += parseInt(score);
            this.scoreDisplay.string = this.score.toString();

            var fx = this.spawnScoreFX();
            this.node.addChild(fx.node);
            fx.node.setPosition(pos);
            fx.play();

            cc.audioEngine.playEffect(this.scoreAudio, false);
            this.step = this.step * 1.001;
        }
    }, {
        key: "resetScore",
        value: function resetScore() {
            this.score = 0;
            this.scoreDisplay.string = this.score.toString();
            this.lifeStatus = [true, true, true, true, true];
            this.lifeCount = 5;
            this.setHeartIcon();
        }
    }, {
        key: "spawnScoreFX",
        value: function spawnScoreFX() {
            var fx;
            if (this.scorePool.size() > 0) {
                fx = this.scorePool.get();
                return fx.getComponent(_ScoreFX2.default);
            } else {
                fx = cc.instantiate(this.scoreFXPrefab).getComponent(_ScoreFX2.default);
                fx.init(this);
                return fx;
            }
        }
    }, {
        key: "despawnScoreFX",
        value: function despawnScoreFX(scoreFX) {
            this.scorePool.put(scoreFX);
        }

        // called every frame

    }, {
        key: "update",
        value: function update(dt) {
            if (!this.isRunning) return;

            if (this.currentStar.position.y <= this.groundY) {
                var split = this.currentStar.getComponent(cc.Sprite).spriteFrame['_name'].split('_');
                var type = split[0];
                // let score = split[2];

                var score = '1';

                var op = 1;
                if (type == '1') op = -1;

                this.gainScore(this.currentStar.getPosition(), op, score);

                this.setHeartIcon();
                if (this.lifeCount <= 0) return;
                if (op < 1) return;

                this.despawnStar(this.currentStar);
            }
            this.timer += dt;
        }
    }, {
        key: "gameOver",
        value: function gameOver() {
            this.gameOverNode.active = true;
            this.player.enabled = false;
            this.player.stopMove();
            this.currentStar.destroy();
            this.isRunning = false;
            this.btnNode.setPositionX(0);
            this.btnNodeHelp.enabled = true;
            this.btnNodeStore.enabled = true;
        }
    }]);

    return NewScript;
}(cc.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "starPrefab", [_dec], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scoreFXPrefab", [_dec2], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "maxStarDuration", [property], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "minStarDuration", [property], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ground", [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "scoreDisplay", [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "scoreAudio", [_dec6], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "cryAudio", [_dec7], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "btnNode", [_dec8], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "btnNodeStore", [_dec9], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "btnNodeHelp", [_dec10], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "gameOverNode", [_dec11], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "topBeginning", [property], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "totalTime", [property], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "step", [property], {
    enumerable: true,
    initializer: function initializer() {
        return 5;
    }
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "heart_1", [_dec12], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "heart_2", [_dec13], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "heart_3", [_dec14], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "heart_4", [_dec15], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "heart_5", [_dec16], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "menu_screen", [_dec17], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "gameplay_screen", [_dec18], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
})), _class2)) || _class);
exports.default = NewScript;
module.exports = exports["default"];

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Game.js.map
        