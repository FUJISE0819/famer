// 野菜・果物の栄養価データベース
const foodDatabase = {
    'りんご': {
        name: 'りんご',
        image: 'https://cdn.pixabay.com/photo/2016/08/12/22/34/apple-1589874_960_720.jpg',
        calories: '52kcal/100g',
        protein: '0.3g/100g',
        fat: '0.2g/100g',
        carbs: '13.8g/100g',
        fiber: '2.4g/100g',
        sugar: '10.4g/100g',
        vitamins: [
            { name: 'ビタミンC', value: '4mg/100g', high: true },
            { name: 'ビタミンA', value: '3μg/100g', high: false },
            { name: 'ビタミンE', value: '0.5mg/100g', high: false },
            { name: 'カリウム', value: '110mg/100g', high: true },
            { name: 'マグネシウム', value: '5mg/100g', high: false }
        ],
        benefits: [
            '食物繊維が豊富で腸内環境を整える',
            'ポリフェノールが抗酸化作用を持つ',
            '血糖値の急上昇を抑える効果がある',
            '便秘の予防に効果的'
        ]
    },
    'バナナ': {
        name: 'バナナ',
        image: 'https://cdn.pixabay.com/photo/2015/03/30/12/43/bananas-698608_960_720.jpg',
        calories: '86kcal/100g',
        protein: '1.1g/100g',
        fat: '0.3g/100g',
        carbs: '22.5g/100g',
        fiber: '2.6g/100g',
        sugar: '12.2g/100g',
        vitamins: [
            { name: 'ビタミンC', value: '8.7mg/100g', high: true },
            { name: 'ビタミンB6', value: '0.4mg/100g', high: true },
            { name: 'カリウム', value: '358mg/100g', high: true },
            { name: 'マグネシウム', value: '27mg/100g', high: true },
            { name: '葉酸', value: '20μg/100g', high: true }
        ],
        benefits: [
            '筋肉の収縮をサポートし、筋肉痙攣を防ぐ',
            '消化を助け、胃腸の健康をサポート',
            '血圧を下げる効果がある',
            '脳の健康と認知機能をサポート'
        ]
    },
    'トマト': {
        name: 'トマト',
        image: 'https://cdn.pixabay.com/photo/2016/03/26/16/44/tomatoes-1280859_960_720.jpg',
        calories: '18kcal/100g',
        protein: '0.9g/100g',
        fat: '0.2g/100g',
        carbs: '3.9g/100g',
        fiber: '1.2g/100g',
        sugar: '2.6g/100g',
        vitamins: [
            { name: 'ビタミンC', value: '13.7mg/100g', high: true },
            { name: 'ビタミンA', value: '42μg/100g', high: true },
            { name: 'ビタミンK', value: '7.9μg/100g', high: false },
            { name: 'カリウム', value: '237mg/100g', high: true },
            { name: 'リコピン', value: '2.5mg/100g', high: true }
        ],
        benefits: [
            'リコピンは強力な抗酸化物質で、がん予防に効果的',
            '心臓病のリスクを下げる',
            '目の健康をサポート',
            '肌の健康を促進'
        ]
    },
    'ほうれん草': {
        name: 'ほうれん草',
        image: 'https://cdn.pixabay.com/photo/2016/09/10/17/47/spinach-1659790_960_720.jpg',
        calories: '23kcal/100g',
        protein: '2.9g/100g',
        fat: '0.4g/100g',
        carbs: '3.6g/100g',
        fiber: '2.2g/100g',
        sugar: '0.4g/100g',
        vitamins: [
            { name: 'ビタミンA', value: '469μg/100g', high: true },
            { name: 'ビタミンC', value: '28mg/100g', high: true },
            { name: 'ビタミンK', value: '483μg/100g', high: true },
            { name: '葉酸', value: '194μg/100g', high: true },
            { name: '鉄分', value: '2.7mg/100g', high: true }
        ],
        benefits: [
            '骨の健康をサポート',
            '貧血予防に効果的',
            '免疫機能を強化',
            '目の健康を促進'
        ]
    },
    'いちご': {
        name: 'いちご',
        image: 'https://cdn.pixabay.com/photo/2018/04/29/11/54/strawberries-3359755_960_720.jpg',
        calories: '32kcal/100g',
        protein: '0.7g/100g',
        fat: '0.3g/100g',
        carbs: '7.7g/100g',
        fiber: '2.0g/100g',
        sugar: '4.9g/100g',
        vitamins: [
            { name: 'ビタミンC', value: '58mg/100g', high: true },
            { name: '葉酸', value: '24μg/100g', high: true },
            { name: 'ビタミンK', value: '2.2μg/100g', high: false },
            { name: 'マンガン', value: '0.4mg/100g', high: true },
            { name: 'カリウム', value: '153mg/100g', high: true },
            { name: 'アントシアニン', value: '高含有', high: true }
        ],
        benefits: [
            '抗酸化作用が強く、老化防止に効果的',
            '美肌効果があり、肌の健康を促進',
            '免疫機能を強化',
            '心臓病のリスクを下げる',
            '血糖値の急上昇を抑える効果がある'
        ]
    }
};

// DOM要素の取得
document.addEventListener('DOMContentLoaded', () => {
    const foodInput = document.getElementById('food-input');
    const searchBtn = document.getElementById('search-btn');
    const loadingElement = document.getElementById('loading');
    const errorElement = document.getElementById('error-message');
    const resultsElement = document.getElementById('results');
    const historyElement = document.getElementById('history');
    const historyList = document.getElementById('history-list');
    
    // 検索履歴を保存する配列
    let searchHistory = [];
    
    // ローカルストレージから検索履歴を読み込む
    if (localStorage.getItem('foodSearchHistory')) {
        searchHistory = JSON.parse(localStorage.getItem('foodSearchHistory'));
        updateHistoryDisplay();
    }
    
    // 検索ボタンのクリックイベント
    searchBtn.addEventListener('click', () => {
        searchFood();
    });
    
    // Enterキーでも検索できるようにする
    foodInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchFood();
        }
    });
    
    // 食品を検索する関数
    function searchFood() {
        const query = foodInput.value.trim().toLowerCase();
        
        if (!query) {
            showError('食品名を入力してください');
            return;
        }
        
        // 検索中の表示
        loadingElement.classList.remove('hidden');
        errorElement.classList.add('hidden');
        resultsElement.classList.add('hidden');
        
        // データベースから食品を検索
        setTimeout(() => {
            const food = findFoodInDatabase(query);
            
            if (food) {
                displayFoodInfo(food);
                addToSearchHistory(food.name);
            } else {
                showError('該当する食品が見つかりませんでした。別の食品名を試してください。');
            }
            
            loadingElement.classList.add('hidden');
        }, 500); // 検索の演出のために少し遅延
    }
    
    // ひらがなとカタカナを相互変換する関数
    function convertKana(text) {
        const hiraganaToKatakana = {
            'あ': 'ア', 'い': 'イ', 'う': 'ウ', 'え': 'エ', 'お': 'オ',
            'か': 'カ', 'き': 'キ', 'く': 'ク', 'け': 'ケ', 'こ': 'コ',
            'さ': 'サ', 'し': 'シ', 'す': 'ス', 'せ': 'セ', 'そ': 'ソ',
            'た': 'タ', 'ち': 'チ', 'つ': 'ツ', 'て': 'テ', 'と': 'ト',
            'な': 'ナ', 'に': 'ニ', 'ぬ': 'ヌ', 'ね': 'ネ', 'の': 'ノ',
            'は': 'ハ', 'ひ': 'ヒ', 'ふ': 'フ', 'へ': 'ヘ', 'ほ': 'ホ',
            'ま': 'マ', 'み': 'ミ', 'む': 'ム', 'め': 'メ', 'も': 'モ',
            'や': 'ヤ', 'ゆ': 'ユ', 'よ': 'ヨ',
            'ら': 'ラ', 'り': 'リ', 'る': 'ル', 'れ': 'レ', 'ろ': 'ロ',
            'わ': 'ワ', 'を': 'ヲ', 'ん': 'ン',
            'が': 'ガ', 'ぎ': 'ギ', 'ぐ': 'グ', 'げ': 'ゲ', 'ご': 'ゴ',
            'ざ': 'ザ', 'じ': 'ジ', 'ず': 'ズ', 'ぜ': 'ゼ', 'ぞ': 'ゾ',
            'だ': 'ダ', 'ぢ': 'ヂ', 'づ': 'ヅ', 'で': 'デ', 'ど': 'ド',
            'ば': 'バ', 'び': 'ビ', 'ぶ': 'ブ', 'べ': 'ベ', 'ぼ': 'ボ',
            'ぱ': 'パ', 'ぴ': 'ピ', 'ぷ': 'プ', 'ぺ': 'ペ', 'ぽ': 'ポ',
            'ぁ': 'ァ', 'ぃ': 'ィ', 'ぅ': 'ゥ', 'ぇ': 'ェ', 'ぉ': 'ォ',
            'っ': 'ッ', 'ゃ': 'ャ', 'ゅ': 'ュ', 'ょ': 'ョ'
        };
        
        const katakanaToHiragana = {};
        for (const [hiragana, katakana] of Object.entries(hiraganaToKatakana)) {
            katakanaToHiragana[katakana] = hiragana;
        }
        
        // ひらがなをカタカナに変換
        let katakana = '';
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            katakana += hiraganaToKatakana[char] || char;
        }
        
        // カタカナをひらがなに変換
        let hiragana = '';
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            hiragana += katakanaToHiragana[char] || char;
        }
        
        return { hiragana, katakana };
    }
    
    // データベースから食品を検索する関数
    function findFoodInDatabase(query) {
        const { hiragana, katakana } = convertKana(query);
        const searchQueries = [query, hiragana, katakana];
        
        // 完全一致を優先
        for (const key in foodDatabase) {
            if (searchQueries.includes(key)) {
                return foodDatabase[key];
            }
        }
        
        // 部分一致も検索
        for (const key in foodDatabase) {
            for (const searchQuery of searchQueries) {
                if (key.includes(searchQuery) || searchQuery.includes(key)) {
                    return foodDatabase[key];
                }
            }
        }
        
        return null;
    }
    
    // 食品情報を表示する関数
    function displayFoodInfo(food) {
        document.getElementById('food-name').textContent = food.name;
        document.getElementById('food-image').src = food.image;
        document.getElementById('food-image').alt = food.name;
        
        document.getElementById('calories').textContent = food.calories;
        document.getElementById('protein').textContent = food.protein;
        document.getElementById('fat').textContent = food.fat;
        document.getElementById('carbs').textContent = food.carbs;
        document.getElementById('fiber').textContent = food.fiber;
        document.getElementById('sugar').textContent = food.sugar;
        
        // ビタミン・ミネラルの表示
        const vitaminsList = document.getElementById('vitamins-list');
        vitaminsList.innerHTML = '';
        
        food.vitamins.forEach(vitamin => {
            const vitaminItem = document.createElement('div');
            vitaminItem.className = 'nutrition-item';
            
            const labelSpan = document.createElement('span');
            labelSpan.className = 'label';
            labelSpan.textContent = vitamin.name;
            
            const valueSpan = document.createElement('span');
            valueSpan.className = vitamin.high ? 'value vitamin-high' : 'value';
            valueSpan.textContent = vitamin.value;
            
            vitaminItem.appendChild(labelSpan);
            vitaminItem.appendChild(valueSpan);
            vitaminsList.appendChild(vitaminItem);
        });
        
        // 健康効果の表示
        const benefitsList = document.getElementById('benefits-list');
        benefitsList.innerHTML = '';
        
        food.benefits.forEach(benefit => {
            const benefitItem = document.createElement('li');
            benefitItem.textContent = benefit;
            benefitsList.appendChild(benefitItem);
        });
        
        resultsElement.classList.remove('hidden');
    }
    
    // エラーメッセージを表示する関数
    function showError(message) {
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
        resultsElement.classList.add('hidden');
        loadingElement.classList.add('hidden');
    }
    
    // 検索履歴に追加する関数
    function addToSearchHistory(foodName) {
        // 既に履歴にある場合は削除
        const index = searchHistory.indexOf(foodName);
        if (index !== -1) {
            searchHistory.splice(index, 1);
        }
        
        // 先頭に追加
        searchHistory.unshift(foodName);
        
        // 最大5件まで保存
        if (searchHistory.length > 5) {
            searchHistory.pop();
        }
        
        // ローカルストレージに保存
        localStorage.setItem('foodSearchHistory', JSON.stringify(searchHistory));
        
        // 表示を更新
        updateHistoryDisplay();
    }
    
    // 検索履歴の表示を更新する関数
    function updateHistoryDisplay() {
        if (searchHistory.length > 0) {
            historyList.innerHTML = '';
            historyElement.classList.remove('hidden');
            
            searchHistory.forEach(foodName => {
                const historyItem = document.createElement('li');
                historyItem.textContent = foodName;
                historyItem.addEventListener('click', () => {
                    foodInput.value = foodName;
                    searchFood();
                });
                historyList.appendChild(historyItem);
            });
        } else {
            historyElement.classList.add('hidden');
        }
    }
});