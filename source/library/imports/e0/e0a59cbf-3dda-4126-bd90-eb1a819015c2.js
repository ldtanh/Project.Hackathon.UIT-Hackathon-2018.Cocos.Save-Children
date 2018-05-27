"use strict";
cc._RF.push(module, 'e0a59y/PdpBJr2Q6xqBkBXC', 'UI');
// scripts/UI.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _cc$_decorator = cc._decorator,
    ccclass = _cc$_decorator.ccclass,
    property = _cc$_decorator.property;

var NewScript = ccclass(_class = function (_cc$Component) {
    _inherits(NewScript, _cc$Component);

    function NewScript() {
        _classCallCheck(this, NewScript);

        return _possibleConstructorReturn(this, (NewScript.__proto__ || Object.getPrototypeOf(NewScript)).apply(this, arguments));
    }

    _createClass(NewScript, [{
        key: 'onLoad',
        value: function onLoad() {}
    }, {
        key: 'routeToMainMenu',
        value: function routeToMainMenu() {
            cc.director.loadScene('game');
        }
    }, {
        key: 'routeToHelpWindows',
        value: function routeToHelpWindows() {
            cc.director.loadScene('help');
        }
    }, {
        key: 'routeToStoreWindows',
        value: function routeToStoreWindows() {
            cc.director.loadScene('store');
        }
    }]);

    return NewScript;
}(cc.Component)) || _class;

exports.default = NewScript;
module.exports = exports['default'];

cc._RF.pop();