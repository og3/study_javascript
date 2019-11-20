# javascript学習用
参考：https://dotinstall.com/lessons/basic_javascript_v4
# メモ
- use strictをscriptタグに書くとブラウザが厳密なエラーチェックを行う
- cssアニメーションをつけるだけでいい感じになる
# 変数と定数
- 定数：const
- 変数：let(varは使わないらしい）

# データ型の調べ方
- console.log(typeof 調べたいデータ);

# 異なる判定
- !==

# 条件演算子
- score >= 80 ? console.log('Great!') : console.log('OK...!');

# 関数宣言
```
function 関数名() {
処理内容
}
- 呼び出し
関数名();
```

# 引数の初期値を設定する
```
function 関数名(引数 = 初期値){
処理内容
}
- 呼び出し
関数名();
これで初期値が使われる
```
# アロー関数式
```
 const sum = function(a, b, c) {
   return a + b + c;
};
上がこうなる
 const sum = (a, b, c) => a + b + c;
 
 書き方
 (引数) => returnしたい値;
```
# constがオブジェクトだった場合はその中身については変更できる
```
const scores = [1, 2, 3]
scores[1] = 6
```
これはおｋ
# オブジェトの作り方
```
{
  // オブジェクト

  // const player = ['taguchi', 32];

  const player = {
    name: 'taguchi',
    score: 32,
  };
}
```
ハッシュのような感じだが少し違う
# オブジェクトへのアクセス
```
{
  // オブジェクト

  const player = {
    name: 'taguchi',
    score: 32,
  };
   // 呼び出し
   console.log(player.name);
   // 再代入
   player.score = 100;
   // プロパティの追加
   player.email = 'taguchi@gmail.com';
   // プロパティの削除
   delete player.score;
}
```
# ブロック
```
{
ブロック内の処理
}
```
変数のスコープはブロック内で宣言された変数はブロック内でしか使えない
# クラス
```
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
```
