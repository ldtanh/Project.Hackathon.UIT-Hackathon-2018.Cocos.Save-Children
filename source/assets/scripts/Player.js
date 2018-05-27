const {ccclass, property} = cc._decorator;

@ccclass
export default class NewScript extends cc.Component {

    
    @property
    jumpHeight = 0;
   
    @property
    jumpDuration = 0;
    
    @property
    squashDuration = 0;
    
    @property
    maxMoveSpeed = 0;
    
    @property
    accel = 0;

    @property
    eps = 0;

    @property(cc.AudioClip)
    jumpAudio = '';


    onLoad () {
        this.enabled = false;
        this.accLeft = false;
        this.accRight = false;
        
        this.xSpeed = 50;
        // screen boundaries
        this.minPosX = -this.node.parent.width/2;
        this.maxPosX = this.node.parent.width/2;
        
        // this.jumpAction = this.setJumpAction();

        this.setInputControl();
    }

    setInputControl () {
        var self = this;
        //add keyboard input listener to jump, turnLeft and turnRight
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            // set a flag when key pressed
            onKeyPressed: function(keyCode, event) {
                this.eps += 0.1;
                switch(keyCode) {
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
            onKeyReleased: function(keyCode, event) {
                this.eps = 0;
                switch(keyCode) {
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
            onTouchBegan: function(touch, event) {
                var touchLoc = touch.getLocation();
                if (touchLoc.x >= cc.winSize.width/2) {
                    self.accLeft = false;
                    self.accRight = true;
                } else {
                    self.accLeft = true;
                    self.accRight = false;
                }
                // don't capture the event
                return true;
            },
            onTouchEnded: function(touch, event) {
                self.accLeft = false;
                self.accRight = false;
            }
        }, self.node);
    }

    setJumpAction () {
        var jumpUp = cc.moveBy(this.jumpDuration, cc.p(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        var jumpDown = cc.moveBy(this.jumpDuration, cc.p(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
        var squash = cc.scaleTo(this.squashDuration, 1, 0.6);
        var stretch = cc.scaleTo(this.squashDuration, 1, 1.2);
        var scaleBack = cc.scaleTo(this.squashDuration, 1, 1);
        var callback = cc.callFunc(this.playJumpSound, this);
        return cc.repeatForever(cc.sequence(squash, stretch, jumpUp, scaleBack, jumpDown, callback));
    }

    
    playJumpSound () {
        cc.audioEngine.playEffect(this.jumpAudio, false);
    }

    getCenterPos () {
        var centerPos = cc.p(this.node.x, this.node.y + this.node.height/2);
        return centerPos;
    }

    startMoveAt (pos) {
        this.enabled = true;
        this.xSpeed = 0;
        this.node.setPosition(pos);
        // this.node.runAction(this.setJumpAction());
    }

    stopMove () {
        this.node.stopAllActions();
    }

    // called every frame
    update (dt) {
        
        var newV = this.accel * dt + this.eps;
        if (this.accLeft) {
            this.xSpeed -= newV;
        } else if (this.accRight) {
            this.xSpeed += newV;
        }
        if ( Math.abs(this.xSpeed) > this.maxMoveSpeed ) {
            // if speed reach limit, use max speed with current direction
            this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
        }

        this.node.x += this.xSpeed * dt;

        // limit player position inside screen
        if ( this.node.x > this.node.parent.width/2) {
            this.node.x = this.node.parent.width/2;
            this.xSpeed = 0;
        } else if (this.node.x < -this.node.parent.width/2) {
            this.node.x = -this.node.parent.width/2;
            this.xSpeed = 0;
        }
    }
}
