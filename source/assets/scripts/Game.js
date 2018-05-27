import Player from "./Player";
import ScoreFX from "./ScoreFX";
import Star from "./Star";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewScript extends cc.Component {
   
    @property(cc.Prefab)
    starPrefab = null;
        
    /**
     * @type {cc.Prefab}
     */
    @property(cc.Prefab)
    scoreFXPrefab = null;   
            
   
    @property
    maxStarDuration = 0;

    @property
    minStarDuration = 0;

    
    @property(cc.Node)
    ground = null;
    
    
    /**
     * @type {Player}
     */
    @property(Player)
    player = null;

    
    @property(cc.Label)
    scoreDisplay = null;
    
    
    @property(cc.AudioClip)
    scoreAudio = null;
    @property(cc.AudioClip)
    cryAudio = null;
    
    @property(cc.Node)
    btnNode = null;
    @property(cc.Sprite)
    btnNodeStore = null;
    @property(cc.Sprite)
    btnNodeHelp = null;

    @property(cc.Node)
    gameOverNode = null;

    @property
    topBeginning = 0;

    @property
    totalTime = 0;

    @property
    step = 5;

    @property(cc.Sprite)
    heart_1 = null;
    @property(cc.Sprite)
    heart_2 = null;
    @property(cc.Sprite)
    heart_3 = null;
    @property(cc.Sprite)
    heart_4 = null;
    @property(cc.Sprite)
    heart_5 = null;

    @property(cc.Sprite)
    menu_screen = null;
    @property(cc.Sprite)
    gameplay_screen = null;
    

    // use this for initialization
    
    setHeartIcon () {
        this.heart_1.enabled = this.lifeStatus[0];
        this.heart_2.enabled = this.lifeStatus[1];
        this.heart_3.enabled = this.lifeStatus[2];
        this.heart_4.enabled = this.lifeStatus[3];
        this.heart_5.enabled = this.lifeStatus[4];
    }

    onLoad () {
        
        this.groundY = this.ground.y + this.ground.height/2;
        
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

    onStartGame () {
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


    spawnNewStar () {
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
        newStar.getComponent(Star).init(this);
        this.startTimer();
        
        // Set star with new sprite;
        this.currentStar = newStar;
    }

    despawnStar (star) {
        this.starPool.put(star);
        if (this.lifeCount < 1) {
            this.gameOver();
            return;
        }
        this.spawnNewStar();
    }

    startTimer () {
        // get a life duration for next star
        this.starDuration = this.minStarDuration + cc.random0To1() * (this.maxStarDuration - this.minStarDuration);
        this.timer = 0;
    }   

    getNewStarPosition () {

        return cc.p(this.player.getCenterPos().x + (cc.randomMinus1To1()) * 250, this.topBeginning);
    }


    gainScore (pos, op, score) {
        this.despawnStar(this.currentStar);

        if (op < 1) {
            cc.audioEngine.playEffect(this.cryAudio, false);
            this.lifeCount --;
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

    resetScore () {
        this.score = 0;
        this.scoreDisplay.string = this.score.toString();
        this.lifeStatus = [true, true, true, true, true];
        this.lifeCount = 5;
        this.setHeartIcon();
    }

    spawnScoreFX () {
        var fx;
        if (this.scorePool.size() > 0) {
            fx = this.scorePool.get();
            return fx.getComponent(ScoreFX);
        } else {
            fx = cc.instantiate(this.scoreFXPrefab).getComponent(ScoreFX);
            fx.init(this);
            return fx;
        }
    }

    despawnScoreFX (scoreFX) {
        this.scorePool.put(scoreFX);
    }

    // called every frame
    update (dt) {
        if (!this.isRunning) return;
        
        if (this.currentStar.position.y <= this.groundY) {
            let split = this.currentStar.getComponent(cc.Sprite).spriteFrame['_name'].split('_');
            let type = split[0];
            // let score = split[2];
            
            let score = '1';

            let op = 1;
            if (type == '1') op = -1;

            this.gainScore(this.currentStar.getPosition(), op, score);
            
            this.setHeartIcon();
            if (this.lifeCount <= 0) return;
            if (op < 1) return;
            
            this.despawnStar(this.currentStar);
        }
        this.timer += dt;
    }

    gameOver () {
        this.gameOverNode.active = true;
        this.player.enabled = false;
        this.player.stopMove();
        this.currentStar.destroy();
        this.isRunning = false;
        this.btnNode.setPositionX(0);
        this.btnNodeHelp.enabled = true;
        this.btnNodeStore.enabled = true;
    }

}
