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
            // 子クラスの定義
            // Playerクラスを継承する
    }
    class SoccerPlayer extends Player {
        // 初期化処理
        constructor(name, score, number) {
            // 親クラスのconstructorを使用する
            super(name, score);
            this.number = number;
        }
        Kick(name) {
            console.log(`${this.name}選手、ごーる！`);
        }
    }
    const ojison = new SoccerPlayer('ojison', 5, 10);
    ojison.Kick();
    console.log(ojison);
}