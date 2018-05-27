"use strict";
cc._RF.push(module, '21890Xr4RBJlqTJhmXJ/f5s', 'Star');
// scripts/Star.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _desc, _value, _class2, _descriptor, _descriptor2;

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

var NewScript = ccclass(_class = (_class2 = function (_cc$Component) {
    _inherits(NewScript, _cc$Component);

    function NewScript() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, NewScript);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NewScript.__proto__ || Object.getPrototypeOf(NewScript)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, 'pickRadius', _descriptor, _this), _initDefineProp(_this, 'spriteList', _descriptor2, _this), _this.game = null, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(NewScript, [{
        key: 'onLoad',
        value: function onLoad() {
            this.enabled = false;
        }

        // use this for initialization

    }, {
        key: 'init',
        value: function init(game) {
            this.game = game;
            this.enabled = true;
            this.node.opacity = 255;
            var randomPosition = Math.round(Math.random() * 123456789);
            randomPosition = randomPosition % this.spriteList.length;
            this.node.getComponent(cc.Sprite).spriteFrame = this.spriteList[randomPosition];
        }
    }, {
        key: 'reuse',
        value: function reuse(game) {
            this.init(game);
        }
    }, {
        key: 'getPlayerDistance',
        value: function getPlayerDistance() {
            var playerPos = this.game.player.getCenterPos();
            var dist = cc.pDistance(this.node.position, playerPos);
            return dist;
        }
    }, {
        key: 'onPicked',
        value: function onPicked() {
            var pos = this.node.getPosition();

            var split = this.game.currentStar.getComponent(cc.Sprite).spriteFrame['_name'].split('_');
            var type = split[0];
            // let score = split[2];
            var score = '1';
            var op = 1;
            if (type == '0') op = -1;
            this.game.gainScore(this.game.currentStar.getPosition(), op, score);
            this.game.setHeartIcon();

            if (this.game.lifeCount <= 0) return;
            if (op < 1) return;

            this.game.despawnStar(this.node);
        }

        // called every frame

    }, {
        key: 'update',
        value: function update(dt) {
            if (this.getPlayerDistance() < this.pickRadius) {
                this.onPicked();
                return;
            }

            var posx = this.node.position.x;
            var posy = this.node.position.y;

            posy = Math.max(this.game.groundY, posy - this.game.step);

            this.node.setPosition(cc.p(posx, posy));
        }
    }]);

    return NewScript;
}(cc.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'pickRadius', [property], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'spriteList', [property], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
})), _class2)) || _class;

exports.default = NewScript;
module.exports = exports['default'];

cc._RF.pop();