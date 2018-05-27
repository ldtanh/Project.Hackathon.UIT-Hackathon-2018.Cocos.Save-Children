const {ccclass, property} = cc._decorator;

@ccclass
export default class NewScript extends cc.Component {
     onLoad () {
         
    }

    routeToMainMenu () {
        cc.director.loadScene('game');        
    }

    routeToHelpWindows () {
        cc.director.loadScene('help');
    }

    routeToStoreWindows () {
        cc.director.loadScene('store');
    }
}
