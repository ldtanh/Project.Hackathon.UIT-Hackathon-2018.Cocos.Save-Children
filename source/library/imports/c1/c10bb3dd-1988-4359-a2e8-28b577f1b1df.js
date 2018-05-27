"use strict";
cc._RF.push(module, 'c10bbPdGYhDWaLoKLV38bHf', 'Player');
// scripts/Player.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

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
var NewScript = (_dec = property(cc.AudioClip), ccclass(_class = (_class2 = function (_cc$Component) {
    _inherits(NewScript, _cc$Component);

    function NewScript() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, NewScript);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NewScript.__proto__ || Object.getPrototypeOf(NewScript)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, 'jumpHeight', _descriptor, _this), _initDefineProp(_this, 'jumpDuration', _descriptor2, _this), _initDefineProp(_this, 'squashDuration', _descriptor3, _this), _initDefineProp(_this, 'maxMoveSpeed', _descriptor4, _this), _initDefineProp(_this, 'accel', _descriptor5, _this), _initDefineProp(_this, 'eps', _descriptor6, _this), _initDefineProp(_this, 'jumpAudio', _descriptor7, _this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(NewScript, [{
        key: 'onLoad',
        value: function onLoad() {
            this.enabled = false;
            this.accLeft = false;
            this.accRight = false;

            this.xSpeed = 50;
            // screen boundaries
            this.minPosX = -this.node.parent.width / 2;
            this.maxPosX = this.node.parent.width / 2;

            // this.jumpAction = this.setJumpAction();

            this.setInputControl();
        }
    }, {
        key: 'setInputControl',
        value: function setInputControl() {
            var self = this;
            //add keyboard input listener to jump, turnLeft and turnRight
            cc.eventManager.addListener({
                event: cc.EventListener.KEYBOARD,
                // set a flag when key pressed
                onKeyPressed: function onKeyPressed(keyCode, event) {
                    this.eps += 0.1;
                    switch (keyCode) {
                        case cc.KEY.a:
                        case cc.KEY.left:
                            self.accLeft = true;
                            self.accRight = false;
                            break;
                        case cc.KEY.d:
                        case cc.KEY.right:
                            self.accLeft = false;
                            self.accRight = true;
                            break;
                    }
                },
                // unset a flag when key released
                onKeyReleased: function onKeyReleased(keyCode, event) {
                    this.eps = 0;
                    switch (keyCode) {
                        case cc.KEY.a:
                        case cc.KEY.left:
                            self.accLeft = false;
                            break;
                        case cc.KEY.d:
                        case cc.KEY.right:
                            self.accRight = false;
                            break;
                    }
                }
            }, self.node);

            // touch input
            cc.eventManager.addListener({
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                onTouchBegan: function onTouchBegan(touch, event) {
                    var touchLoc = touch.getLocation();
                    if (touchLoc.x >= cc.winSize.width / 2) {
                        self.accLeft = false;
                        self.accRight = true;
                    } else {
                        self.accLeft = true;
                        self.accRight = false;
                    }
                    // don't capture the event
                    return true;
                },
                onTouchEnded: function onTouchEnded(touch, event) {
                    self.accLeft = false;
                    self.accRight = false;
                }
            }, self.node);
        }
    }, {
        key: 'setJumpAction',
        value: function setJumpAction() {
            var jumpUp = cc.moveBy(this.jumpDuration, cc.p(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
            var jumpDown = cc.moveBy(this.jumpDuration, cc.p(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
            var squash = cc.scaleTo(this.squashDuration, 1, 0.6);
            var stretch = cc.scaleTo(this.squashDuration, 1, 1.2);
            var scaleBack = cc.scaleTo(this.squashDuration, 1, 1);
            var callback = cc.callFunc(this.playJumpSound, this);
            return cc.repeatForever(cc.sequence(squash, stretch, jumpUp, scaleBack, jumpDown, callback));
        }
    }, {
        key: 'playJumpSound',
        value: function playJumpSound() {
            cc.audioEngine.playEffect(this.jumpAudio, false);
        }
    }, {
        key: 'getCenterPos',
        value: function getCenterPos() {
            var centerPos = cc.p(this.node.x, this.node.y + this.node.height / 2);
            return centerPos;
        }
    }, {
        key: 'startMoveAt',
        value: function startMoveAt(pos) {
            this.enabled = true;
            this.xSpeed = 0;
            this.node.setPosition(pos);
            // this.node.runAction(this.setJumpAction());
        }
    }, {
        key: 'stopMove',
        value: function stopMove() {
            this.node.stopAllActions();
        }

        // called every frame

    }, {
        key: 'update',
        value: function update(dt) {

            var newV = this.accel * dt + this.eps;
            if (this.accLeft) {
                this.xSpeed -= newV;
            } else if (this.accRight) {
                this.xSpeed += newV;
            }
            if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
                // if speed reach limit, use max speed with current direction
                this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
            }

            this.node.x += this.xSpeed * dt;

            // limit player position inside screen
            if (this.node.x > this.node.parent.width / 2) {
                this.node.x = this.node.parent.width / 2;
                this.xSpeed = 0;
            } else if (this.node.x < -this.node.parent.width / 2) {
                this.node.x = -this.node.parent.width / 2;
                this.xSpeed = 0;
            }
        }
    }]);

    return NewScript;
}(cc.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'jumpHeight', [property], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'jumpDuration', [property], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'squashDuration', [property], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'maxMoveSpeed', [property], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'accel', [property], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'eps', [property], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'jumpAudio', [_dec], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
})), _class2)) || _class);
exports.default = NewScript;
module.exports = exports['default'];

cc._RF.pop();