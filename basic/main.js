'use strict'; {
    class Player {
        // 初期化処理
        constructor(name, score) {
            this.name = name;
            this.score = score;
        }

        showInfo() {
            console.log(`name: ${this.name} score: ${this.score}`);
        }

        static showVersion() {
            console.log("バージョンを表示します");
        }
    }
    // インスタンスの作成
    const Player1 = new Player("player1", 50)
        // メソッドの呼び出し
    Player1.showInfo();
    // staticの呼び出し
    Player.showVersion();
}