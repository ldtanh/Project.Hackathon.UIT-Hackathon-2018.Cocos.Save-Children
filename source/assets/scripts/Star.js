
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewScript extends cc.Component {
    @property
    pickRadius = 0;

    @property
    spriteList = [];

    game = null;

    onLoad () {
        this.enabled = false;
    }

    // use this for initialization
    init (game) {
        this.game = game;
        this.enabled = true;
        this.node.opacity = 255;
        var randomPosition = Math.round(Math.random() * 123456789);
        randomPosition = randomPosition % this.spriteList.length;
        this.node.getComponent(cc.Sprite).spriteFrame = this.spriteList[randomPosition];
    }

    reuse (game) {
        this.init(game);
    }

    getPlayerDistance () {
        var playerPos = this.game.player.getCenterPos();
        var dist = cc.pDistance(this.node.position, playerPos);
        return dist;
    }

    onPicked () {
        var pos = this.node.getPosition();
        
        let split = this.game.currentStar.getComponent(cc.Sprite).spriteFrame['_name'].split('_');
        let type = split[0];
        // let score = split[2];
        let score = '1';        
        let op = 1;
        if (type == '0') op = -1;
        this.game.gainScore(this.game.currentStar.getPosition(), op, score);
        this.game.setHeartIcon();
        
        if (this.game.lifeCount <= 0) return;
        if (op < 1) return;

        this.game.despawnStar(this.node);
    }

    // called every frame
    update (dt) {
        if (this.getPlayerDistance() < this.pickRadius) {
            this.onPicked();
            return;
        }
        
        var posx = this.node.position.x;
        var posy = this.node.position.y;
        
        posy = Math.max(this.game.groundY, posy - this.game.step);
        
        this.node.setPosition(cc.p(posx, posy));
    }
}
