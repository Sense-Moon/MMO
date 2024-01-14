// ステータス＝(基礎値  *　レベル補正　* 職業補正) + 装備 + 加護 + 五行 +　霊薬
// 基礎値
const baseValues = {HP: 50, ATK: 20, DEF: 10, AGI: 10};

// 職業補正
const jobCorrections = {
  sword: {HP: 1.0, ATK: 1.0, DEF: 1.0, AGI: 1.0},
  wizard: {HP: 0.8, ATK: 1.4, DEF: 0.8, AGI: 1.0},
  fighter: {HP: 1.2, ATK: 0.8, DEF: 1.2, AGI: 0.8},
  thief: {HP: 0.8, ATK: 1.2, DEF: 0.8, AGI: 1.2}
};

// アイテムを読み込む
const items = {
    "items": [
      {
        "id": 0,
        "name": " ",
        "HP": 0,
        "ATK": 0,
        "DEF": 0,
        "AGI": 0
      },
      {
        "id": 1,
        "name": "薬草",
        "HP": 0,
        "ATK": 0,
        "DEF": 0,
        "AGI": 0
      },
      {
        "id": 2,
        "name": "丸薬",
        "HP": 0,
        "ATK": 0,
        "DEF": 0,
        "AGI": 0
      },
      {
        "id": 3,
        "name": "秘薬",
        "HP": 0,
        "ATK": 0,
        "DEF": 0,
        "AGI": 0
      },
      {
        "id": 4,
        "name": "体力の霊薬",
        "HP": 1,
        "ATK": 0,
        "DEF": 0,
        "AGI": 0
      },
      {
        "id": 5,
        "name": "攻撃の霊薬",
        "HP": 0,
        "ATK": 1,
        "DEF": 0,
        "AGI": 0
      },
      {
        "id": 6,
        "name": "防御の霊薬",
        "HP": 0,
        "ATK": 0,
        "DEF": 1,
        "AGI": 0
      },
      {
        "id": 7,
        "name": "俊敏の霊薬",
        "HP": 0,
        "ATK": 0,
        "DEF": 0,
        "AGI": 1
      },
      {
        "id": 8,
        "name": "長刀",
        "HP": 0,
        "ATK": 5,
        "DEF": 0,
        "AGI": 0
      },
      {
        "id": 9,
        "name": "大刀",
        "HP": 5,
        "ATK": 30,
        "DEF": 5,
        "AGI": -5
      },
      {
        "id": 10,
        "name": "鬼頭刀",
        "HP": 20,
        "ATK": 100,
        "DEF": 20,
        "AGI": -10
      },
      {
        "id": 11,
        "name": "七星剣",
        "HP": 100,
        "ATK": 200,
        "DEF": 50,
        "AGI": -30
      },
      {
        "id": 12,
        "name": "霊符",
        "HP": 0,
        "ATK": 5,
        "DEF": 0,
        "AGI": 0
      },
      {
        "id": 13,
        "name": "結界符",
        "HP": 5,
        "ATK": 30,
        "DEF": 5,
        "AGI": 0
      },
      {
        "id": 14,
        "name": "滅魔符",
        "HP": 10,
        "ATK": 120,
        "DEF": 5,
        "AGI": 5
      },
      {
        "id": 15,
        "name": "天照符",
        "HP": 50,
        "ATK": 250,
        "DEF": 30,
        "AGI": 30
      },
      {
        "id": 16,
        "name": "手甲",
        "HP": 0,
        "ATK": 3,
        "DEF": 3,
        "AGI": 0
      },
      {
        "id": 17,
        "name": "鉄甲",
        "HP": 20,
        "ATK": 20,
        "DEF": 20,
        "AGI": -5
      },
      {
        "id": 18,
        "name": "虎爪",
        "HP": 50,
        "ATK": 80,
        "DEF": 25,
        "AGI": 10
      },
      {
        "id": 19,
        "name": "黄龍牙",
        "HP": 150,
        "ATK": 150,
        "DEF": 100,
        "AGI": 30
      },
      {
        "id": 20,
        "name": "匕首",
        "HP": 0,
        "ATK": 5,
        "DEF": 0,
        "AGI": 0
      },
      {
        "id": 21,
        "name": "飛刀",
        "HP": 0,
        "ATK": 40,
        "DEF": 0,
        "AGI": 10
      },
      {
        "id": 22,
        "name": "影鎌",
        "HP": 0,
        "ATK": 120,
        "DEF": 0,
        "AGI": 30
      },
      {
        "id": 23,
        "name": "幽冥刃",
        "HP": 100,
        "ATK": 200,
        "DEF": 50,
        "AGI": 50
      },
      {
        "id": 24,
        "name": "竹の鎧",
        "HP": 10,
        "ATK": 0,
        "DEF": 5,
        "AGI": -3
      },
      {
        "id": 25,
        "name": "虎皮の鎧",
        "HP": 30,
        "ATK": 5,
        "DEF": 20,
        "AGI": -10
      },
      {
        "id": 26,
        "name": "龍鱗の鎧",
        "HP": 100,
        "ATK": 20,
        "DEF": 50,
        "AGI": -20
      },
      {
        "id": 27,
        "name": "竹の服",
        "HP": 5,
        "ATK": 0,
        "DEF": 3,
        "AGI": 3
      },
      {
        "id": 28,
        "name": "虎皮の服",
        "HP": 20,
        "ATK": 3,
        "DEF": 10,
        "AGI": 20
      },
      {
        "id": 29,
        "name": "龍鱗の服",
        "HP": 75,
        "ATK": 10,
        "DEF": 30,
        "AGI": 50
      }
    ]
  }
  
// 四神の加護を読み込む
// 東の青龍:渾敦を倒すたびに、攻撃+1
// 南の朱雀:窮奇を倒すたびに、体力+1
// 西の白虎:檮杌を倒すたびに、素早さ+1
// 北の玄武:饕餮を倒すたびに、防御+1
let yonkamiRef = ref(db, 'common');
get(yonkamiRef)
  .then((snapshot) => {
    if (snapshot.exists()) {
      var yonkami = snapshot.val();
      console.log(yonkami);
    } else {
      console.log("読み取りエラー");
    }
  })
  .catch((error) => {
    console.error(error);
  });

// 中の黄龍:1日ごとに、全ステータス+3
const start = new Date('2024-01-01');// 黄龍の加護開始日 
const now = new Date();
const daysKago = Math.floor((now - start) / (1000 * 60 * 60 * 24));// 黄龍の加護の日数
// 五行
// 5レベルごとに、いづれかの五行レベルを上げられる。
// 最大+5まで。
// 木:体力+5,体力+10,体力+20,体力+30,体力+50
// 火:攻撃+3,攻撃+5,攻撃+10,攻撃+15,攻撃+25
// 土:防御+3,防御+5,防御+10,防御+15,防御+25
// 金:俊敏+3,俊敏+5,俊敏+10,俊敏+15,俊敏+25
// 水:体力+10,攻撃+5,防御+5,俊敏+5,体力+30と他+15
// 五行の加護の値
const gogyouValues = {
    'moku': [5, 10, 20, 30, 50],
    'hi': [3, 5, 10, 15, 25],
    'do': [3, 5, 10, 15, 25],
    'kin': [3, 5, 10, 15, 25],
    'sui': [10, 5, 5, 5, 30]
  };

// ステータスを算出する関数
function calculateStatus(level, job, itemId, yonkami, gogyou, reiyaku) {
    let status = {};
    let item = items.find(item => item.id === itemId);
    for (let key in baseValues) {
      // 基礎値 + アイテムの値 + 黄龍の加護 + 四神の加護 + 五行の加護 + 霊薬の効果
      let value = baseValues[key] + item[key] + (key === 'HP' ? 3 * daysKago : daysKago) + (key === 'ATK' ? yonkami.seiryu : 0) + (key === 'HP' ? 5 * yonkami.suzaku : 0) + (key === 'AGI' ? yonkami.byakko : 0) + (key === 'DEF' ? yonkami.genbu : 0);
      // 五行の加護を追加
      value += (key === 'HP' ? gogyouValues['moku'][gogyou.moku] : 0) + (key === 'ATK' ? gogyouValues['hi'][gogyou.hi] : 0) + (key === 'DEF' ? gogyouValues['do'][gogyou.do] : 0) + (key === 'AGI' ? gogyouValues['kin'][gogyou.kin] : 0);
      if (key === 'HP') {
        value += gogyouValues['sui'][gogyou.sui];
      } else {
        value += 15;
      }
      // 霊薬の効果を追加
      value += reiyaku[key + '_power'] || 0;
      status[key] = Math.floor(value * Math.pow(1.1, level - 1) * jobCorrections[job][key]);
    }
    return status;
}
  
//EXP計算　基本値10で前のレベル * 1.15必要
function calculateNextEXP(n) {
    NextEXP = Math.round((10 * Math.pow(1.15, n) * (Math.pow(1.15,n) - 1) / 0.15));
    return NextEXP;
}