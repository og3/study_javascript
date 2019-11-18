// エラーチェックの厳密化
'use strict';

{
    // 画像の配列　変更に弱すぎるので使う時は工夫する
    const images = [
        'img/pic00.png',
        'img/pic01.png',
        'img/pic02.png',
        'img/pic03.png',
        'img/pic04.png',
        'img/pic05.png',
        'img/pic06.png',
        'img/pic07.png',
    ];
    // 現在選択されている配列の番号
    let currentIndex = 0;
    // htmlから「main」のidがついた要素を取得する
    const mainImage = document.getElementById('main');
    // mainのurlに画像のurlを代入する
    mainImage.src = images[currentIndex];

    images.forEach((image, index) => {
        // image要素を作成する
        const img = document.createElement('img');
        // image要素のurlは配列imagesのimageとする
        img.src = image;

        // li要素を作成する
        const li = document.createElement('li');
        // currentIndexとindexの値が同じだったらcurrentクラスを追加する
        if (index === currentIndex) {
            li.classList.add('current');
        }
        // li要素をクリックしたらmainImageの画像を変更する
        li.addEventListener('click', () => {
            mainImage.src = image;
            // thumbnailsの中身を全て配列で取得する
            const thumbnails = document.querySelectorAll('.thumbnails > li');
            // currentIndex番目の要素からcurrentクラスを削除する
            thumbnails[currentIndex].classList.remove('current');
            // currentIndexをクリックされた要素の配列番号に更新する
            currentIndex = index;
            // クリックされた要素にcurrentクラスをつける
            thumbnails[currentIndex].classList.add('current');
        });
        // image要素の小要素として追加する
        li.appendChild(img);
        // thumbnailsクラスの小要素として追加する
        document.querySelector('.thumbnails').appendChild(li);
    });

    // 次へボタンの処理
    const next = document.getElementById('next');
    next.addEventListener('click', () => {
        // クリックしたらcurrentIndexの値を１増やす
        let target = currentIndex + 1;
        // 配列の最後の値になったら0にする
        if (target === images.length) {
            target = 0;
        }
        // thumbnailsのtarget番目をクリックする
        document.querySelectorAll('.thumbnails > li')[target].click();
    });

    // 戻るボタンの処理
    const prev = document.getElementById('prev');
    prev.addEventListener('click', () => {
        // クリックしたらcurrentIndexの値を１減らす
        let target = currentIndex - 1;
        // 0番目の要素になったら配列の最後に戻るようにする
        if (target < 0) {
            target = images.length - 1;
        }
        // thumbnailsのtarget番目をクリックする
        document.querySelectorAll('.thumbnails > li')[target].click();
    });

    // setTimeoutの返り値を保存するための変数
    let timeoutId;

    // playボタンの処理
    function playSlideshow() {
        timeoutId = setTimeout(() => {
            next.click();
            playSlideshow();
        }, 1000);
    }
    // playボタンを押していることを判定するフラグ
    let isPlaying = false;

    const play = document.getElementById('play');
    play.addEventListener('click', () => {
        if (isPlaying == false) {
            playSlideshow();
            play.textContent = 'Pause';
        } else {
            // playSlideshowの処理を停止させる
            clearTimeout(timeoutId);
            play.textContent = 'Play';
        }
        // フラグを反転させる
        isPlaying = !isPlaying;
    });
}