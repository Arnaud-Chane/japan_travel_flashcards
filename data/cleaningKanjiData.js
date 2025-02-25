const fs = require('node:fs');

let data = [
    {
      "kanji": "男",
      "katakana": "おとこ",
      "romaji": "otoko",
      "translate": "Man"
    },
    {
      "kanji": "女",
      "katakana": "おんな",
      "romaji": "onna",
      "translate": "Woman"
    },
    {
      "kanji": "温泉",
      "katakana": "おんせん",
      "romaji": "onsen",
      "translate": "Hot Spring"
    },
    {
      "kanji": "女性専用",
      "katakana": "じょせいせんよう",
      "romaji": "joseisenyou",
      "translate": "females only"
    },
    {
      "kanji": "女性専用車両",
      "katakana": "じょせいせんようしゃりょう",
      "romaji": "joseisenyousharyou",
      "translate": "car for females only"
    },
    {
      "kanji": "大人",
      "katakana": "おとな",
      "romaji": "otona",
      "translate": "Adult"
    },
    {
      "kanji": "子供",
      "katakana": "こども",
      "romaji": "kodomo",
      "translate": "Child"
    },
    {
      "kanji": "小",
      "katakana": "しょう",
      "romaji": "shou",
      "translate": "Small"
    },
    {
      "kanji": "中",
      "katakana": "ちゅう",
      "romaji": "chuu",
      "translate": "Medium"
    },
    {
      "kanji": "大",
      "katakana": "だい",
      "romaji": "dai",
      "translate": "Big"
    },
    {
      "kanji": "右",
      "katakana": "みぎ",
      "romaji": "migi",
      "translate": "Right"
    },
    {
      "kanji": "左",
      "katakana": "ひだり",
      "romaji": "hidari",
      "translate": "Left"
    },
    {
      "kanji": "上",
      "katakana": "うえ",
      "romaji": "ue",
      "translate": "up"
    },
    {
      "kanji": "下",
      "katakana": "した",
      "romaji": "shita",
      "translate": "down"
    },
    {
      "kanji": "押す",
      "katakana": "おす",
      "romaji": "osu",
      "translate": "push"
    },
    {
      "kanji": "引く",
      "katakana": "ひく",
      "romaji": "hiku",
      "translate": "pull"
    },
    {
      "kanji": "開ける",
      "katakana": "あける",
      "romaji": "akeru",
      "translate": "open"
    },
    {
      "kanji": "閉める",
      "katakana": "しめる",
      "romaji": "shimeru",
      "translate": "close"
    },
    {
      "kanji": "開",
      "katakana": "あける",
      "romaji": "akeru",
      "translate": "open, begin, start"
    },
    {
      "kanji": "開始",
      "katakana": "かいし",
      "romaji": "kaishi",
      "translate": "start, begin"
    },
    {
      "kanji": "開始日",
      "katakana": "かいしび",
      "romaji": "kaishibi",
      "translate": "start date"
    },
    {
      "kanji": "止まれ",
      "katakana": "とまれ",
      "romaji": "tomare",
      "translate": "stop"
    },
    {
      "kanji": "禁止",
      "katakana": "きんし",
      "romaji": "kinshi",
      "translate": "prohibited, no entry"
    },
    {
      "kanji": "注意",
      "katakana": "ちゅうい",
      "romaji": "chuui",
      "translate": "caution"
    },
    {
      "kanji": "行き止まり",
      "katakana": "いきどまり",
      "romaji": "ikidomari",
      "translate": "dead-end"
    },
    {
      "kanji": "禁煙",
      "katakana": "きんえん",
      "romaji": "kinen",
      "translate": "no smoking"
    },
    {
      "kanji": "入り口",
      "katakana": "いりぐち",
      "romaji": "iriguchi",
      "translate": "entrance"
    },
    {
      "kanji": "出口",
      "katakana": "でぐち",
      "romaji": "deguchi",
      "translate": "exit"
    },
    {
      "kanji": "非常口",
      "katakana": "ひじょうぐち",
      "romaji": "hijouguchi",
      "translate": "emergency exit"
    },
    {
      "kanji": "便所",
      "katakana": "べんじょ",
      "romaji": "benjo",
      "translate": "toilet, restroom"
    },
    {
      "kanji": "便所",
      "katakana": "べんじょ",
      "romaji": "benjo",
      "translate": "toilet, place to excrete both kinds"
    },
    {
      "kanji": "お手洗い",
      "katakana": "おてあらい",
      "romaji": "otearai",
      "translate": "bathroom, wash hands"
    },
    {
      "kanji": "化粧室",
      "katakana": "けしょうしつ",
      "romaji": "keshoushitsu",
      "translate": "powder room"
    },
    {
      "kanji": "トイレ",
      "katakana": "トイレ",
      "romaji": "toire",
      "translate": "toilet"
    },
    {
      "kanji": "準備中",
      "katakana": "じゅんびちゅう",
      "romaji": "junbichuu",
      "translate": "in preparation, not yet open"
    },
    {
      "kanji": "営業中",
      "katakana": "えいぎょうちゅう",
      "romaji": "eigyouchuu",
      "translate": "open for business"
    },
    {
      "kanji": "お会計",
      "katakana": "おかいけい",
      "romaji": "okaikai",
      "translate": "cashier, restaurant bill"
    },
    {
      "kanji": "居酒屋",
      "katakana": "いざかや",
      "romaji": "izakaya",
      "translate": "japanese-style bar/pub"
    },
    {
      "kanji": "お茶",
      "katakana": "おちゃ",
      "romaji": "ocha",
      "translate": "tea"
    },
    {
      "kanji": "酒",
      "katakana": "さけ",
      "romaji": "sake",
      "translate": "alcohol"
    },
    {
      "kanji": "喫煙",
      "katakana": "きつえん",
      "romaji": "kitsuen",
      "translate": "smoking allowed"
    },
    {
      "kanji": "禁煙",
      "katakana": "きんえん",
      "romaji": "kinen",
      "translate": "smoking prohibited"
    },
    {
      "kanji": "銀行",
      "katakana": "ぎんこう",
      "romaji": "ginkou",
      "translate": "bank, atm"
    },
    {
      "kanji": "たばこ",
      "katakana": "たばこ",
      "romaji": "tabako",
      "translate": "cigarettes"
    },
    {
      "kanji": "案内",
      "katakana": "あんない",
      "romaji": "annai",
      "translate": "guidance, showing around, information, notice, notification"
    },
    {
      "kanji": "情報",
      "katakana": "じょうほう",
      "romaji": "jouhou",
      "translate": "information"
    },
    {
      "kanji": "病院",
      "katakana": "びょういん",
      "romaji": "byouin",
      "translate": "hospital"
    },
    {
      "kanji": "緊急",
      "katakana": "きんきゅう",
      "romaji": "kin-kyuu",
      "translate": "emergency"
    },
    {
      "kanji": "薬",
      "katakana": "くすり",
      "romaji": "kusuri",
      "translate": "medicine"
    },
    {
      "kanji": "薬局",
      "katakana": "やっきょく",
      "romaji": "yakkyoku",
      "translate": "pharmacy"
    },
    {
      "kanji": "お土産",
      "katakana": "おみやげ",
      "romaji": "omiyage",
      "translate": "souvenir"
    },
    {
      "kanji": "ホテル",
      "katakana": "ホテル",
      "romaji": "hoteru",
      "translate": "hotel"
    },
    {
      "Kanji": "レストラン",
      "Katakana": "レストラン",
      "Romaji": "Resutoran",
      "Translate": "Restaurant"
    },
    {
      "Kanji": "ベッド",
      "Katakana": "ベッド",
      "Romaji": "Beddo",
      "Translate": "Bed"
    },
    {
      "Kanji": "毛布",
      "Katakana": "もうふ",
      "Romaji": "Moufu",
      "Translate": "Blanket"
    },
    {
      "Kanji": "ブランケット",
      "Katakana": "ブランケット",
      "Romaji": "Buranketto",
      "Translate": "Blanket"
    },
    {
      "Kanji": "天井",
      "Katakana": "てんじょう",
      "Romaji": "Tenjou",
      "Translate": "Ceiling"
    },
    {
      "Kanji": "椅子",
      "Katakana": "いす",
      "Romaji": "Isu",
      "Translate": "Chair"
    },
    {
      "Kanji": "チェックイン",
      "Katakana": "チェックイン",
      "Romaji": "Chiekkuin",
      "Translate": "Check In"
    },
    {
      "Kanji": "チェックアウト",
      "Katakana": "チェックアウト",
      "Romaji": "Chiekkuauto",
      "Translate": "Check Out"
    },
    {
      "Kanji": "宅配便",
      "Katakana": "たくはいびん",
      "Romaji": "Takuhaibin",
      "Translate": "Courier"
    },
    {
      "Kanji": "ドア",
      "Katakana": "ドア",
      "Romaji": "Doa",
      "Translate": "Door"
    },
    {
      "Kanji": "寮",
      "Katakana": "りょう",
      "Romaji": "Ryou",
      "Translate": "Dormitory, Hostel"
    },
    {
      "Kanji": "フロア",
      "Katakana": "フロア",
      "Romaji": "Furoa",
      "Translate": "Floor"
    },
    {
      "Kanji": "冷蔵庫",
      "Katakana": "れいぞうこ",
      "Romaji": "Reizouko",
      "Translate": "Fridge"
    },
    {
      "Kanji": "ホステル",
      "Katakana": "ホステル",
      "Romaji": "Hosuteru",
      "Translate": "Hostel"
    },
    {
      "Kanji": "お湯",
      "Katakana": "おゆ",
      "Romaji": "Oyu",
      "Translate": "Hot Water"
    },
    {
      "Kanji": "インターネット",
      "Katakana": "インターネット",
      "Romaji": "Intanetto",
      "Translate": "Internet"
    },
    {
      "Kanji": "アイロン",
      "Katakana": "アイロン",
      "Romaji": "Airon",
      "Translate": "Iron"
    },
    {
      "Kanji": "旅館",
      "Katakana": "りょかん",
      "Romaji": "Ryokan",
      "Translate": "Japanese Traditional Inn"
    },
    {
      "Kanji": "ケトル",
      "Katakana": "ケトル",
      "Romaji": "Ketoru",
      "Translate": "Kettle"
    },
    {
      "Kanji": "コインランドリー",
      "Katakana": "コインランドリー",
      "Romaji": "Koin randori",
      "Translate": "Coin Laundry, Laundromat"
    },
    {
      "Kanji": "ランドリ",
      "Katakana": "ランドリ",
      "Romaji": "Randori",
      "Translate": "Laundry Facilities"
    },
    {
      "Kanji": "ライト",
      "Katakana": "ライト",
      "Romaji": "Raito",
      "Translate": "Lights"
    },
    {
      "Kanji": "荷物",
      "Katakana": "にもつ",
      "Romaji": "Nimotsu",
      "Translate": "Luggage"
    },
    {
      "Kanji": "手荷物",
      "Katakana": "てにもつ",
      "Romaji": "Tenimotsu",
      "Translate": "Luggage (smaller items)"
    },
    {
      "Kanji": "電子レンジ",
      "Katakana": "でんしレンジ",
      "Romaji": "Denshi renji",
      "Translate": "Microwave"
    },
    {
      "Kanji": "枕",
      "Katakana": "まくら",
      "Romaji": "Makura",
      "Translate": "Pillow"
    },
    {
      "Kanji": "浴場",
      "Katakana": "よくじょう",
      "Romaji": "Yokujou",
      "Translate": "Bathing space"
    },
    {
      "Kanji": "フロント",
      "Katakana": "フロント",
      "Romaji": "Furonto",
      "Translate": "Reception"
    },
    {
      "Kanji": "受付",
      "Katakana": "うけつけ",
      "Romaji": "Uketsuke",
      "Translate": "Reception"
    },
    {
      "Kanji": "部屋",
      "Katakana": "へや",
      "Romaji": "Heya",
      "Translate": "Room"
    },
    {
      "Kanji": "ルームサービス",
      "Katakana": "ルームサービス",
      "Romaji": "Rumu sabisu",
      "Translate": "Room Service"
    },
    {
      "Kanji": "シャワー",
      "Katakana": "シャワー",
      "Romaji": "Shiyawa",
      "Translate": "Shower"
    },
    {
      "Kanji": "シンク",
      "Katakana": "シンク",
      "Romaji": "Sinku",
      "Translate": "Sink"
    },
    {
      "Kanji": "テーブル",
      "Katakana": "テーブル",
      "Romaji": "Teburu",
      "Translate": "Table"
    },
    {
      "Kanji": "テレビ",
      "Katakana": "テレビ",
      "Romaji": "Terebi",
      "Translate": "Television"
    },
    {
      "Kanji": "布団",
      "Katakana": "ふとん",
      "Romaji": "Futon",
      "Translate": "Traditional Japanese Bed"
    },
    {
      "Kanji": "自動販売機",
      "Katakana": "じどうはんばいき",
      "Romaji": "Jidou hanbaiki",
      "Translate": "Vending Machine"
    },
    {
      "Kanji": "まど",
      "Katakana": "まど",
      "Romaji": "Mado",
      "Translate": "Window"
    },
    {
      "Kanji": "テーマパーク",
      "Katakana": "テーマパーク",
      "Romaji": "Tema paku",
      "Translate": "Theme parks"
    },
    {
      "Kanji": "遊園地",
      "Katakana": "ゆうえんち",
      "Romaji": "Yuuenchi",
      "Translate": "Amusement Park"
    },
    {
      "Kanji": "美術館",
      "Katakana": "びじゅつかん",
      "Romaji": "Bijutsukan",
      "Translate": "Art Gallery"
    },
    {
      "Kanji": "浜辺",
      "Katakana": "はまべ",
      "Romaji": "Hamabe",
      "Translate": "Beach"
    },
    {
      "Kanji": "海岸",
      "Katakana": "かいがん",
      "Romaji": "Kaigan",
      "Translate": "Beach, Seaside/Coast"
    },
    {
      "Kanji": "橋",
      "Katakana": "はし",
      "Romaji": "Hashi",
      "Translate": "Bridge"
    },
    {
      "Kanji": "城",
      "Katakana": "じょう",
      "Romaji": "Jou",
      "Translate": "Castle"
    },
    {
      "Kanji": "天守閣",
      "Katakana": "てんしゅかく",
      "Romaji": "Tenshukaku",
      "Translate": "Castle Keep"
    },
    {
      "Kanji": "繁華街",
      "Katakana": "はんかがい",
      "Romaji": "Hankagai",
      "Translate": "Downtown"
    },
    {
      "Kanji": "庭",
      "Katakana": "にわ",
      "Romaji": "Niwa",
      "Translate": "Garden"
    },
    {
      "Kanji": "園",
      "Katakana": "えん",
      "Romaji": "En",
      "Translate": "Garden"
    },
    {
      "Kanji": "市場",
      "Katakana": "しじょう",
      "Romaji": "Shijou",
      "Translate": "Market"
    },
    {
      "Kanji": "山",
      "Katakana": "やま",
      "Romaji": "Yama",
      "Translate": "Mountain"
    },
    {
      "Kanji": "博物館",
      "Katakana": "はくぶつかん",
      "Romaji": "Hakubutsukan",
      "Translate": "Museum"
    },
    {
      "Kanji": "展望台",
      "Katakana": "てんぼうだい",
      "Romaji": "Tenboudai",
      "Translate": "Observatory"
    },
    {
      "Kanji": "塔",
      "Katakana": "とう",
      "Romaji": "Tou",
      "Translate": "Pagoda"
    },
    {
      "Kanji": "御殿",
      "Katakana": "ごてん",
      "Romaji": "Goten",
      "Translate": "Palace"
    },
    {
      "Kanji": "公園",
      "Katakana": "こうえん",
      "Romaji": "Koen",
      "Translate": "Park"
    },
    {
      "Kanji": "川",
      "Katakana": "かわ",
      "Romaji": "Kawa",
      "Translate": "River"
    },
    {
      "Kanji": "川下り",
      "Katakana": "かわくだり",
      "Romaji": "Kawa kudari",
      "Translate": "River Cruise"
    },
    {
      "Kanji": "遺跡",
      "Katakana": "いせき",
      "Romaji": "Iseki",
      "Translate": "Ruins"
    },
    {
      "Kanji": "商店街",
      "Katakana": "しょうてんがい",
      "Romaji": "Shoutengai",
      "Translate": "Shopping Street"
    },
    {
      "Kanji": "店",
      "Katakana": "みせ",
      "Romaji": "Mise",
      "Translate": "Shops"
    },
    {
      "Kanji": "神社",
      "Katakana": "じんしゃ",
      "Romaji": "Jinja",
      "Translate": "Shrine"
    },
    {
      "Kanji": "スタジアム",
      "Katakana": "スタジアム",
      "Romaji": "Sutajiamu",
      "Translate": "Stadium"
    },
    {
      "Kanji": "像",
      "Katakana": "ぞう",
      "Romaji": "Zou",
      "Translate": "Statue"
    },
    {
      "Kanji": "寺",
      "Katakana": "",
      "Romaji": "Tera",
      "Translate": "Temple",
      "Notes": "Pronounced as 'ji' when paired with other words, or as 'dera' in certain cases (e.g. yamadera)"
    },
    {
      "Kanji": "タワー",
      "Katakana": "タワー",
      "Romaji": "Tawa",
      "Translate": "Tower",
      "Notes": "Used for modern structures"
    },
    {
      "Kanji": "町",
      "Katakana": "まち",
      "Romaji": "Machi",
      "Translate": "Town"
    },
    {
      "Kanji": "谷",
      "Katakana": "たに",
      "Romaji": "Tani",
      "Translate": "Valley"
    },
    {
      "Kanji": "ベルト",
      "Katakana": "ベルト",
      "Romaji": "Beruto",
      "Translate": "Belt",
      "Notes": "Differs from obi (おび), the waist sash used when wearing kimonos"
    },
    {
      "Kanji": "ブラウス",
      "Katakana": "ブラウス",
      "Romaji": "Burausu",
      "Translate": "Blouse"
    },
    {
      "Kanji": "帽子",
      "Katakana": "ぼうし",
      "Romaji": "Boushi",
      "Translate": "Cap/Hat"
    },
    {
      "Kanji": "上着",
      "Katakana": "うわぎ",
      "Romaji": "Uwagi",
      "Translate": "Coat",
      "Notes": "Could also mean jacket"
    },
    {
      "Kanji": "ドレス",
      "Katakana": "ドレス",
      "Romaji": "Doresu",
      "Translate": "Dress"
    },
    {
      "Kanji": "シャツ",
      "Katakana": "シャツ",
      "Romaji": "Shatsu",
      "Translate": "Shirt",
      "Notes": "Tees are t-shatsu"
    },
    {
      "Kanji": "靴",
      "Katakana": "くつ",
      "Romaji": "Kutsu",
      "Translate": "Shoes"
    },
    {
      "Kanji": "パンツ",
      "Katakana": "パンツ",
      "Romaji": "Pantsu",
      "Translate": "Shorts"
    },
    {
      "Kanji": "スカート",
      "Katakana": "スカート",
      "Romaji": "Skirto",
      "Translate": "Skirt"
    },
    {
      "Kanji": "袖",
      "Katakana": "そで",
      "Romaji": "Sode",
      "Translate": "Sleeve",
      "Notes": "Hansode (半袖) is short-sleeve, nagasode (長袖) is long-sleeve, and sodenashi (袖無し) is sleeveless"
    },
    {
      "Kanji": "靴下",
      "Katakana": "くつした",
      "Romaji": "Kutsushita",
      "Translate": "Socks"
    },
    {
      "Kanji": "セーター",
      "Katakana": "セーター",
      "Romaji": "Seta",
      "Translate": "Sweater"
    },
    {
      "Kanji": "ズボン",
      "Katakana": "ズボン",
      "Romaji": "Trousers",
      "Translate": "Trousers"
    },
    {
      "Kanji": "下着",
      "Katakana": "したぎ",
      "Romaji": "Shitagi",
      "Translate": "Underwear"
    },
    {
      "Kanji": "黒",
      "Katakana": "くろ",
      "Romaji": "Kuro",
      "Translate": "Black"
    },
    {
      "Kanji": "青い",
      "Katakana": "あおい",
      "Romaji": "Aoi",
      "Translate": "Blue"
    },
    {
      "Kanji": "茶色",
      "Katakana": "ちゃいろ",
      "Romaji": "Chairo",
      "Translate": "Brown"
    },
    {
      "Kanji": "グレー",
      "Katakana": "グレー",
      "Romaji": "Gure",
      "Translate": "Gray"
    },
    {
      "Kanji": "緑",
      "Katakana": "みどり",
      "Romaji": "Midori",
      "Translate": "Green"
    },
    {
      "Kanji": "オレンジ",
      "Katakana": "オレンジ",
      "Romaji": "Orenji",
      "Translate": "Orange"
    },
    {
      "Kanji": "ピンク",
      "Katakana": "ピンク",
      "Romaji": "Pinku",
      "Translate": "Pink"
    },
    {
      "Kanji": "紫",
      "Katakana": "むらさき",
      "Romaji": "Murasaki",
      "Translate": "Purple"
    },
    {
      "Kanji": "赤",
      "Katakana": "あか",
      "Romaji": "Aka",
      "Translate": "Red"
    },
    {
      "Kanji": "白",
      "Katakana": "しろ",
      "Romaji": "Shiro",
      "Translate": "White"
    },
    {
      "Kanji": "黄色",
      "Katakana": "きいろ",
      "Romaji": "Kiiro",
      "Translate": "Yellow"
    },
    {
      "Kanji": "銀行",
      "Katakana": "ぎんこう",
      "Romaji": "Ginkou",
      "Translate": "Bank"
    },
    {
      "Kanji": "エーティーエム",
      "Katakana": "エーティーエム",
      "Romaji": "Ediemu",
      "Translate": "ATM"
    },
    {
      "Kanji": "大使館",
      "Katakana": "たいしかん",
      "Romaji": "Taishikan",
      "Translate": "Embassy"
    },
    {
      "Kanji": "避難所",
      "Katakana": "ひなんじょ",
      "Romaji": "Hinansho",
      "Translate": "Evacuation Shelter"
    },
    {
      "Kanji": "受付",
      "Katakana": "うけつけ",
      "Romaji": "Uketsuke",
      "Translate": "Front Desk"
    },
    {
      "Kanji": "病院",
      "Katakana": "びょういん",
      "Romaji": "Byouin",
      "Translate": "Hospital"
    },
    {
      "Kanji": "両替",
      "Katakana": "りょうがえ",
      "Romaji": "Ryougae",
      "Translate": "Money Exchange"
    },
    {
      "Kanji": "警察署",
      "Katakana": "けいさつしょ",
      "Romaji": "Keisatsusho",
      "Translate": "Police Station"
    },
    {
      "Kanji": "郵便局",
      "Katakana": "ゆうびんきょく",
      "Romaji": "Yuubinkyoku",
      "Translate": "Post Office"
    },
    {
      "Kanji": "観光案内所",
      "Katakana": "かんこうあんないじょ",
      "Romaji": "Kankouannaijo",
      "Translate": "Tourist Information"
    },
    {
      "Kanji": "牛肉",
      "Katakana": "ぎゅうにく",
      "Romaji": "Gyuuniku",
      "Translate": "Beef"
    },
    {
      "Kanji": "ビーフ",
      "Katakana": "ビーフ",
      "Romaji": "Befu",
      "Translate": "Beef (Western-style)"
    },
    {
      "Kanji": "和牛",
      "Katakana": "わぎゅう",
      "Romaji": "Wagyuu",
      "Translate": "Japanese Beef"
    },
    {
      "Kanji": "朝ごはん",
      "Katakana": "あさごはん",
      "Romaji": "Asagohan",
      "Translate": "Breakfast"
    },
    {
      "Kanji": "朝食",
      "Katakana": "ちょうしょく",
      "Romaji": "Choushoku",
      "Translate": "Breakfast"
    },
    {
      "Kanji": "ケーキ",
      "Katakana": "ケーキ",
      "Romaji": "Keki",
      "Translate": "Cake"
    },
    {
      "Kanji": "鶏肉",
      "Katakana": "とりにく",
      "Romaji": "Toriniku",
      "Translate": "Chicken"
    },
    {
      "Kanji": "カニ",
      "Katakana": "カニ",
      "Romaji": "Kani",
      "Translate": "Crab"
    },
    {
      "Kanji": "デザート",
      "Katakana": "デザート",
      "Romaji": "Dezato",
      "Translate": "Dessert"
    },
    {
      "Kanji": "夕食",
      "Katakana": "ゆうしょく",
      "Romaji": "Yuushoku",
      "Translate": "Dinner"
    },
    {
      "Kanji": "晩ご飯",
      "Katakana": "ばんごはん",
      "Romaji": "Bangohan",
      "Translate": "Dinner"
    },
    {
      "Kanji": "卵",
      "Katakana": "たまご",
      "Romaji": "Tamago",
      "Translate": "Egg"
    },
    {
      "Kanji": "魚",
      "Katakana": "さかな",
      "Romaji": "Sakana",
      "Translate": "Fish"
    },
    {
      "Kanji": "揚",
      "Katakana": "あげ",
      "Romaji": "Age",
      "Translate": "Fried"
    },
    {
      "Kanji": "果物",
      "Katakana": "くだもの",
      "Romaji": "Kudamono",
      "Translate": "Fruits"
    },
    {
      "Kanji": "昼食",
      "Katakana": "ちゅうしょく",
      "Romaji": "Chuushoku",
      "Translate": "Lunch"
    },
    {
      "Kanji": "ランチ",
      "Katakana": "ランチ",
      "Romaji": "Ranchi",
      "Translate": "Lunch"
    },
    {
      "Kanji": "無し",
      "Katakana": "なし",
      "Romaji": "Nashi",
      "Translate": "Without"
    },
    {
      "Kanji": "肉",
      "Katakana": "にく",
      "Romaji": "Niku",
      "Translate": "Flesh/Meat"
    },
    {
      "Kanji": "魚",
      "Katakana": "さかな",
      "Romaji": "Sakana",
      "Translate": "Fish"
    },
    {
      "Kanji": "豚肉",
      "Katakana": "ぶたにく",
      "Romaji": "Butaniku",
      "Translate": "Pork"
    },
    {
      "Kanji": "羊肉",
      "Katakana": "ようにく",
      "Romaji": "Youniku",
      "Translate": "Mutton"
    },
    {
      "Kanji": "菓子",
      "Katakana": "かし",
      "Romaji": "Kashi",
      "Translate": "Pastry/Sweets"
    },
    {
      "Kanji": "ご飯",
      "Katakana": "ごはん",
      "Romaji": "Gohan",
      "Translate": "Rice"
    },
    {
      "Kanji": "おつまみ",
      "Katakana": "おつまみ",
      "Romaji": "Otsumami",
      "Translate": "Snack"
    },
    {
      "Kanji": "スープ",
      "Katakana": "スープ",
      "Romaji": "Supu",
      "Translate": "Soup"
    },
    {
      "Kanji": "蒸し",
      "Katakana": "むし",
      "Romaji": "Mushi",
      "Translate": "Steamed"
    },
    {
      "Kanji": "夜食",
      "Katakana": "やしょく",
      "Romaji": "Yashoku",
      "Translate": "Supper, midnight snack"
    },
    {
      "Kanji": "野菜",
      "Katakana": "やさい",
      "Romaji": "Yasai",
      "Translate": "Vegetables"
    },
    {
      "Kanji": "食",
      "Katakana": "しょく",
      "Romaji": "Shoku",
      "Translate": "Food"
    },
    {
      "Kanji": "飲み物",
      "Katakana": "のみもの",
      "Romaji": "Nomimono",
      "Translate": "Drink, beverage"
    },
    {
      "Kanji": "海老",
      "Katakana": "えび",
      "Romaji": "Ebi",
      "Translate": "Shrimp, Prawn"
    },
    {
      "Kanji": "無添加",
      "Katakana": "むてんか",
      "Romaji": "Mutenka",
      "Translate": "Additive-free"
    },
    {
      "Kanji": "無",
      "Katakana": "む",
      "Romaji": "Mu",
      "Translate": "Free of"
    },
    {
      "Kanji": "塩",
      "Katakana": "しお",
      "Romaji": "Shio",
      "Translate": "Salt"
    },
    {
      "Kanji": "砂糖",
      "Katakana": "さとう",
      "Romaji": "Satou",
      "Translate": "Sugar"
    },
    {
      "Kanji": "りんご",
      "Katakana": "りんご",
      "Romaji": "Ringo",
      "Translate": "Apple"
    },
    {
      "Kanji": "バナナ",
      "Katakana": "バナナ",
      "Romaji": "Banana",
      "Translate": "Banana"
    },
    {
      "Kanji": "ブドウ",
      "Katakana": "ブドウ",
      "Romaji": "Budou",
      "Translate": "Grapes"
    },
    {
      "Kanji": "レモン",
      "Katakana": "レモン",
      "Romaji": "Remon",
      "Translate": "Lemon"
    },
    {
      "Kanji": "メロン",
      "Katakana": "メロン",
      "Romaji": "Meron",
      "Translate": "Melon"
    },
    {
      "Kanji": "オレンジ",
      "Katakana": "オレンジ",
      "Romaji": "Orenji",
      "Translate": "Orange"
    },
    {
      "Kanji": "梨",
      "Katakana": "なし",
      "Romaji": "Nashi",
      "Translate": "Pear"
    },
    {
      "Kanji": "パイナップル",
      "Katakana": "パイナップル",
      "Romaji": "Painappuru",
      "Translate": "Pineapple"
    },
    {
      "Kanji": "西瓜",
      "Katakana": "すいか",
      "Romaji": "Suika",
      "Translate": "Watermelon"
    },
    {
      "Kanji": "鰻",
      "Katakana": "うなぎ",
      "Romaji": "Unagi",
      "Translate": "Eel"
    },
    {
      "Kanji": "鯖",
      "Katakana": "さば",
      "Romaji": "Saba",
      "Translate": "Mackerel"
    },
    {
      "Kanji": "たこ",
      "Katakana": "たこ",
      "Romaji": "Tako",
      "Translate": "Octopus"
    },
    {
      "Kanji": "秋刀魚",
      "Katakana": "さんま",
      "Romaji": "Sanma",
      "Translate": "Pacific Saury, mackerel pike"
    },
    {
      "Kanji": "イクラ",
      "Katakana": "イクラ",
      "Romaji": "Igura",
      "Translate": "Roe"
    },
    {
      "Kanji": "鮭",
      "Katakana": "さけ",
      "Romaji": "Sake",
      "Translate": "Salmon"
    },
    {
      "Kanji": "帆立",
      "Katakana": "ほたて",
      "Romaji": "Hotate",
      "Translate": "Scallop"
    },
    {
      "Kanji": "鯛",
      "Katakana": "たい",
      "Romaji": "Tai",
      "Translate": "Sea Bream"
    },
    {
      "Kanji": "うに",
      "Katakana": "うに",
      "Romaji": "Uni",
      "Translate": "Sea Urchin"
    },
    {
      "Kanji": "鰹",
      "Katakana": "かつお",
      "Romaji": "Katsuo",
      "Translate": "Skipjack Tuna/oceanic bonito"
    },
    {
      "Kanji": "いか",
      "Katakana": "いか",
      "Romaji": "Ika",
      "Translate": "Squid"
    },
    {
      "Kanji": "北寄貝",
      "Katakana": "ホッキがい",
      "Romaji": "Hokkigai",
      "Translate": "Surf Clam"
    },
    {
      "Kanji": "鮪",
      "Katakana": "まぐろ",
      "Romaji": "Maguro",
      "Translate": "Tuna"
    },
    {
      "Kanji": "アレルギー",
      "Katakana": "アレルギー",
      "Romaji": "Arerugi",
      "Translate": "Allergy"
    },
    {
      "Kanji": "診療所",
      "Katakana": "しんりょうしょ",
      "Romaji": "Shinryousho",
      "Translate": "Clinic"
    },
    {
      "Kanji": "便秘",
      "Katakana": "べんぴ",
      "Romaji": "Benpi",
      "Translate": "Constipation"
    },
    {
      "Kanji": "咳",
      "Katakana": "せき",
      "Romaji": "Seki",
      "Translate": "Cough"
    },
    {
      "Kanji": "怪我",
      "Katakana": "けが",
      "Romaji": "Kega",
      "Translate": "Cuts/Injury"
    },
    {
      "Kanji": "下痢",
      "Katakana": "げり",
      "Romaji": "Geri",
      "Translate": "Diarrhea"
    },
    {
      "Kanji": "嘔吐",
      "Katakana": "おうと",
      "Romaji": "Outo",
      "Translate": "Vomiting"
    },
    {
      "Kanji": "消毒剤",
      "Katakana": "しょうどくざい",
      "Romaji": "Shoudokuzai",
      "Translate": "Disinfectant"
    },
    {
      "Kanji": "薬局",
      "Katakana": "やっきょく",
      "Romaji": "Yakkyoku",
      "Translate": "Drugstore"
    },
    {
      "Kanji": "熱",
      "Katakana": "ねつ",
      "Romaji": "Netsu",
      "Translate": "Fever"
    },
    {
      "Kanji": "風邪",
      "Katakana": "かぜ",
      "Romaji": "Kaze",
      "Translate": "Flu"
    },
    {
      "Kanji": "胃薬",
      "Katakana": "いぐすり",
      "Romaji": "Igusuri",
      "Translate": "Gastric Medication"
    },
    {
      "Kanji": "くらくら",
      "Katakana": "くらくら",
      "Romaji": "Kurakura",
      "Translate": "Giddiness, dizzy"
    },
    {
      "Kanji": "頭痛",
      "Katakana": "ずつう",
      "Romaji": "Zutsuu",
      "Translate": "Headache"
    },
    {
      "Kanji": "錠剤",
      "Katakana": "じょうざい",
      "Romaji": "Jouzai",
      "Translate": "Lozenges"
    },
    {
      "Kanji": "診察",
      "Katakana": "しんさつ",
      "Romaji": "Shinsatsu",
      "Translate": "Medical Examination"
    },
    {
      "Kanji": "薬",
      "Katakana": "くすり",
      "Romaji": "Kusuri",
      "Translate": "Medicine"
    },
    {
      "Kanji": "痛い",
      "Katakana": "いたい",
      "Romaji": "Itai",
      "Translate": "Painful"
    },
    {
      "Kanji": "鎮痛剤",
      "Katakana": "ちんつうざい",
      "Romaji": "Chintsuuzai",
      "Translate": "Painkillers"
    },
    {
      "Kanji": "鼻水",
      "Katakana": "はなみず",
      "Romaji": "Hanamizu",
      "Translate": "Runny Nose/Mucus"
    },
    {
      "Kanji": "胸",
      "Katakana": "むね",
      "Romaji": "Mune",
      "Translate": "Chest"
    },
    {
      "Kanji": "耳",
      "Katakana": "みみ",
      "Romaji": "Mimi",
      "Translate": "Ears"
    },
    {
      "Kanji": "目",
      "Katakana": "め",
      "Romaji": "Me",
      "Translate": "Eyes"
    },
    {
      "Kanji": "足下",
      "Katakana": "あしもと",
      "Romaji": "Ashimoto",
      "Translate": "Feet"
    },
    {
      "Kanji": "手",
      "Katakana": "て",
      "Romaji": "Te",
      "Translate": "Hands"
    },
    {
      "Kanji": "頭",
      "Katakana": "あたま",
      "Romaji": "Atama",
      "Translate": "Head"
    },
    {
      "Kanji": "心臓",
      "Katakana": "しんぞう",
      "Romaji": "Shinzou",
      "Translate": "Heart"
    },
    {
      "Kanji": "脚",
      "Katakana": "あし",
      "Romaji": "Ashi",
      "Translate": "Legs"
    },
    {
      "Kanji": "鼻",
      "Katakana": "はな",
      "Romaji": "Hana",
      "Translate": "Nose"
    },
    {
      "Kanji": "お腹",
      "Katakana": "おなか",
      "Romaji": "Onaka",
      "Translate": "Stomach"
    },
    {
      "Kanji": "喉",
      "Katakana": "のど",
      "Romaji": "Nodo",
      "Translate": "Throat"
    },
    {
      "Kanji": "パン屋",
      "Katakana": "パンや",
      "Romaji": "Panya",
      "Translate": "Bakery"
    },
    {
      "Kanji": "大きい",
      "Katakana": "おおきい",
      "Romaji": "Ookii",
      "Translate": "Big"
    },
    {
      "Kanji": "大きすぎる",
      "Katakana": "おおきすぎる",
      "Romaji": "Ookisugiru",
      "Translate": "Too big"
    },
    {
      "Kanji": "本",
      "Katakana": "ほん",
      "Romaji": "Hon",
      "Translate": "Books"
    },
    {
      "Kanji": "書店",
      "Katakana": "しょてん",
      "Romaji": "Shoten",
      "Translate": "Bookstore"
    },
    {
      "Kanji": "安い",
      "Katakana": "やすい",
      "Romaji": "Yasui",
      "Translate": "Cheap"
    },
    {
      "Kanji": "高い",
      "Katakana": "たかい",
      "Romaji": "Takai",
      "Translate": "Expensive"
    },
    {
      "Kanji": "高いすぎる",
      "Katakana": "たかいすぎる",
      "Romaji": "Takai sugiru",
      "Translate": "Too expensive"
    },
    {
      "Kanji": "タバコ",
      "Katakana": "タバコ",
      "Romaji": "Tabaco",
      "Translate": "Cigarettes"
    },
    {
      "Kanji": "コンビニ",
      "Katakana": "コンビニ",
      "Romaji": "Konbini",
      "Translate": "Convenience Store"
    },
    {
      "Kanji": "デパート",
      "Katakana": "デパート",
      "Romaji": "Depato",
      "Translate": "Department Store"
    },
    {
      "Kanji": "電子機器",
      "Katakana": "でんしきき",
      "Romaji": "Denshikiki",
      "Translate": "Electronic appliances"
    },
    {
      "Kanji": "八百屋",
      "Katakana": "やおや",
      "Romaji": "Yaoya",
      "Translate": "Greengrocer"
    },
    {
      "Kanji": "酒屋",
      "Katakana": "さかや",
      "Romaji": "Sakaya",
      "Translate": "Liquor Store"
    },
    {
      "Kanji": "洋菓子屋",
      "Katakana": "ようがしや",
      "Romaji": "Yougashiya",
      "Translate": "Pastry Shop"
    },
    {
      "Kanji": "ケーキ屋",
      "Katakana": "ケーキや",
      "Romaji": "Kekiya",
      "Translate": "Cake Shop, Pastry Shop"
    },
    {
      "Kanji": "店",
      "Katakana": "みせ",
      "Romaji": "Mise",
      "Translate": "Shop"
    },
    {
      "Kanji": "小さい",
      "Katakana": "ちいさい",
      "Romaji": "Chiisai",
      "Translate": "Small"
    },
    {
      "Kanji": "小さすぎる",
      "Katakana": "ちいさいすぎる",
      "Romaji": "Chiisasugiru",
      "Translate": "Too small"
    },
    {
      "Kanji": "スーパー",
      "Katakana": "スーパー",
      "Romaji": "Supa",
      "Translate": "Supermarket"
    },
    {
      "Kanji": "午後",
      "Katakana": "ごご",
      "Romaji": "Gogo",
      "Translate": "Afternoon"
    },
    {
      "Kanji": "午前",
      "Katakana": "ごぜん",
      "Romaji": "Gozen",
      "Translate": "AM"
    },
    {
      "Kanji": "午後",
      "Katakana": "ごご",
      "Romaji": "Gogo",
      "Translate": "PM"
    },
    {
      "Kanji": "昨夜",
      "Katakana": "さくや",
      "Romaji": "Sakuya",
      "Translate": "Last Night"
    },
    {
      "Kanji": "真夜中",
      "Katakana": "まよなか",
      "Romaji": "Mayonaka",
      "Translate": "Midnight"
    },
    {
      "Kanji": "半夜",
      "Katakana": "はんや",
      "Romaji": "Hanya",
      "Translate": "Midnight"
    },
    {
      "Kanji": "朝",
      "Katakana": "あさ",
      "Romaji": "Asa",
      "Translate": "Morning"
    },
    {
      "Kanji": "正午",
      "Katakana": "しょうご",
      "Romaji": "Shougo",
      "Translate": "Noon"
    },
    {
      "Kanji": "今日",
      "Katakana": "きょう",
      "Romaji": "Kyou",
      "Translate": "Today"
    },
    {
      "Kanji": "明日",
      "Katakana": "あした",
      "Romaji": "Ashita",
      "Translate": "Tomorrow"
    },
    {
      "Kanji": "あす",
      "Katakana": "あす",
      "Romaji": "Asu",
      "Translate": "Tomorrow (used in news reports, weather forecasts, and transportation services)"
    },
    {
      "Kanji": "今晩",
      "Katakana": "こんばん",
      "Romaji": "Konban",
      "Translate": "Tonight"
    },
    {
      "Kanji": "昨日",
      "Katakana": "きのう",
      "Romaji": "Kinou",
      "Translate": "Yesterday"
    },
    {
      "Kanji": "月曜日",
      "Katakana": "げつようび",
      "Romaji": "Getsuyoubi",
      "Translate": "Monday"
    },
    {
      "Kanji": "火曜日",
      "Katakana": "かようび",
      "Romaji": "Kayoubi",
      "Translate": "Tuesday"
    },
    {
      "Kanji": "水曜日",
      "Katakana": "すいようび",
      "Romaji": "Suiyoubi",
      "Translate": "Wednesday"
    },
    {
      "Kanji": "木曜日",
      "Katakana": "もくようび",
      "Romaji": "Mokuyoubi",
      "Translate": "Thursday"
    },
    {
      "Kanji": "金曜日",
      "Katakana": "きんようび",
      "Romaji": "Kinyoubi",
      "Translate": "Friday"
    },
    {
      "Kanji": "土曜日",
      "Katakana": "どようび",
      "Romaji": "Doyoubi",
      "Translate": "Saturday"
    },
    {
      "Kanji": "日曜日",
      "Katakana": "にちようび",
      "Romaji": "Nichiyoubi",
      "Translate": "Sunday"
    },
    {
      "Kanji": "飛行機",
      "Katakana": "ひこうき",
      "Romaji": "Hikouki",
      "Translate": "Airplane"
    },
    {
      "Kanji": "空港",
      "Katakana": "くうこう",
      "Romaji": "Kuukou",
      "Translate": "Airport"
    },
    {
      "Kanji": "到着時間",
      "Katakana": "とうちゃくじかん",
      "Romaji": "Touchakujikan",
      "Translate": "Arrival Time"
    },
    {
      "Kanji": "バス乗り場",
      "Katakana": "バスのりば",
      "Romaji": "Basunoriba",
      "Translate": "Bus Stop"
    },
    {
      "Kanji": "出発時間",
      "Katakana": "しゅっぱつじかん",
      "Romaji": "Shuppatsujikan",
      "Translate": "Departure Time"
    },
    {
      "Kanji": "見合わせています",
      "Katakana": "みあわせています",
      "Romaji": "Miawasete imasu",
      "Translate": "Disruption, Out of Service"
    },
    {
      "Kanji": "フェリーターミナル",
      "Katakana": "フェリーターミナル",
      "Romaji": "Fueritaminaru",
      "Translate": "Ferry Terminal"
    },
    {
      "Kanji": "便",
      "Katakana": "びん",
      "Romaji": "Bin",
      "Translate": "Flight"
    },
    {
      "Kanji": "港",
      "Katakana": "みなと",
      "Romaji": "Minato",
      "Translate": "Harbor"
    },
    {
      "Kanji": "船",
      "Katakana": "ふね",
      "Romaji": "Fune",
      "Translate": "Ship"
    },
    {
      "Kanji": "地下鉄",
      "Katakana": "ちかてつ",
      "Romaji": "Chikatetsu",
      "Translate": "Subway"
    },
    {
      "Kanji" : "タクシー",
      "Katakana" : "タクシー",
      "Romaji" : "Takushi",
      "Translate" : "Taxi"
    },
    {
      "Kanji" : "きっぷ",
      "Katakana" : "きっぷ",
      "Romaji" : "Kippu",
      "Translate" : "Ticket"
    },
    {
      "Kanji" : "チケット",
      "Katakana" : "チケット",
      "Romaji" : "Chiketto",
      "Translate" : "Ticket"
    },
    {
      "Kanji" : "券",
      "Katakana" : "けん",
      "Romaji" : "Ken",
      "Translate" : "Ticket"
    },
    {
      "Kanji" : "切符売り場",
      "Katakana" : "きっぷうりば",
      "Romaji" : "Kippuuriba",
      "Translate" : "Ticket Sales"
    },
    {
      "Kanji" : "スイカ",
      "Katakana" : "スイカ",
      "Romaji" : "Suica",
      "Translate" : "Suica"
    },
    {
      "Kanji" : "パスモ",
      "Katakana" : "パスモ",
      "Romaji" : "PASMO",
      "Translate" : "PASMO"
    },
    {
      "Kanji" : "空港",
      "Katakana" : "くうこう",
      "Romaji" : "Kuukou",
      "Translate" : "Airport"
    },
    {
      "Kanji" : "電車",
      "Katakana" : "でんしゃ",
      "Romaji" : "Densha",
      "Translate" : "Train"
    },
    {
      "Kanji" : "駅",
      "Katakana" : "えき",
      "Romaji" : "Eki",
      "Translate" : "Station"
    },
    {
      "Kanji" : "案内",
      "Katakana" : "あんない",
      "Romaji" : "Annai",
      "Translate" : "Guidance, information, notice"
    },
    {
      "Kanji" : "情報",
      "Katakana" : "じょうほう",
      "Romaji" : "Jouhou",
      "Translate" : "Information"
    },
    {
      "Kanji" : "新幹線",
      "Katakana" : "しんかんせん",
      "Romaji" : "Shinkansen",
      "Translate" : "Bullet train"
    },
    {
      "Kanji" : "バス",
      "Katakana" : "バス",
      "Romaji" : "Bus",
      "Translate" : "Bus"
    },
    {
      "Kanji" : "終点",
      "Katakana" : "しゅうてん",
      "Romaji" : "Shuuten",
      "Translate" : "Final stop"
    },
    {
      "Kanji" : "携帯",
      "Katakana" : "けいたい",
      "Romaji" : "Keitai",
      "Translate" : "Cellphone"
    },
    {
      "Kanji" : "充電端子",
      "Katakana" : "じゅうでんたんし",
      "Romaji" : "Juudentanshi",
      "Translate" : "Charging Terminal"
    },
    {
      "Kanji" : "時計",
      "Katakana" : "とけい",
      "Romaji" : "Tokei",
      "Translate" : "Clock"
    },
    {
      "Kanji" : "櫛",
      "Katakana" : "くし",
      "Romaji" : "Kushi",
      "Translate" : "Comb"
    },
    {
      "Kanji" : "洗剤",
      "Katakana" : "せんざい",
      "Romaji" : "Senzai",
      "Translate" : "Detergent"
    },
    {
      "Kanji" : "爪切り",
      "Katakana" : "つめきり",
      "Romaji" : "Tsumekiri",
      "Translate" : "Nail Cutter"
    },
    {
      "Kanji" : "パワーバンク",
      "Katakana" : "パワーバンク",
      "Romaji" : "PawaBanku",
      "Translate" : "Power Bank"
    },
    {
      "Kanji" : "カミソリ",
      "Katakana" : "カミソリ",
      "Romaji" : "Kamisori",
      "Translate" : "Razor"
    },
    {
      "Kanji" : "生理ナプキン",
      "Katakana" : "せいりナプキン",
      "Romaji" : "Seirinapukin",
      "Translate" : "Sanitary Napkin"
    },
    {
      "Kanji" : "シャンプー",
      "Katakana" : "シャンプー",
      "Romaji" : "Shiyanpu",
      "Translate" : "Shampoo"
    },
    {
      "Kanji" : "SIMカード",
      "Katakana" : "SIMカード",
      "Romaji" : "SIM Cardo",
      "Translate" : "SIM Card"
    },
    {
      "Kanji" : "石鹸",
      "Katakana" : "せっけん",
      "Romaji" : "Sekken",
      "Translate" : "Soap"
    },
    {
      "Kanji" : "スーツケース",
      "Katakana" : "スーツケース",
      "Romaji" : "Sutsukesu",
      "Translate" : "Suitcase"
    },
    {
      "Kanji" : "歯ブラシ",
      "Katakana" : "はブラシ",
      "Romaji" : "Haburashi",
      "Translate" : "Toothbrush"
    },
    {
      "Kanji" : "歯磨き",
      "Katakana" : "はみがき",
      "Romaji" : "Hamigaki",
      "Translate" : "Toothpaste"
    },
    {
      "Kanji" : "タオル",
      "Katakana" : "タオル",
      "Romaji" : "Taoru",
      "Translate" : "Towel"
    },
    {
      "Kanji" : "旅行アダプター",
      "Katakana" : "りょこうアダプター",
      "Romaji" : "RyokouAdaputa",
      "Translate" : "Travel Adaptor"
    },
    {
      "Kanji" : "晴",
      "Katakana" : "はれ",
      "Romaji" : "Hare",
      "Translate" : "Clear"
    },
    {
      "Kanji" : "曇り",
      "Katakana" : "くもり",
      "Romaji" : "Kumori",
      "Translate" : "Cloudy"
    },
    {
      "Kanji" : "霧",
      "Katakana" : "きり",
      "Romaji" : "Kiri",
      "Translate" : "Fog"
    },
    {
      "Kanji" : "猛署",
      "Katakana" : "もうしょ",
      "Romaji" : "Mousho",
      "Translate" : "Heat wave, fierce heat"
    },
    {
      "Kanji" : "雨",
      "Katakana" : "あめ",
      "Romaji" : "Ame",
      "Translate" : "Rain"
    },
    {
      "Kanji" : "豪雨",
      "Katakana" : "ごうう",
      "Romaji" : "Goou",
      "Translate" : "Heavy rain"
    },
    {
      "Kanji" : "大雨",
      "Katakana" : "おおあめ",
      "Romaji" : "Ooame",
      "Translate" : "Heavy rain"
    },
    {
      "Kanji" : "雪",
      "Katakana" : "ゆき",
      "Romaji" : "Yuki",
      "Translate" : "Snow"
    },
    {
      "Kanji" : "雷",
      "Katakana" : "かみなり",
      "Romaji" : "Kaminari",
      "Translate" : "Thunder"
    },
    {
      "Kanji" : "台風",
      "Katakana" : "たいふう",
      "Romaji" : "Taifuu",
      "Translate" : "Typhoon"
    },
    {
      "Kanji" : "風",
      "Katakana" : "かぜ",
      "Romaji" : "Kaze",
      "Translate" : "Wind"
    },
    {
      "Kanji" : "暴風",
      "Katakana" : "ぼうふう",
      "Romaji" : "Boufuu",
      "Translate" : "Windstorm"
    },
    {
      "Kanji" : "お早う",
      "Katakana" : "おはよう",
      "Romaji" : "Ohayou",
      "Translate" : "Good Morning"
    },
    {
      "Kanji" : "今日は",
      "Katakana" : "こんにちは",
      "Romaji" : "Konnichiha",
      "Translate" : "Good Day/Afternoon"
    },
    {
      "Kanji" : "今晩は",
      "Katakana" : "こんばんは",
      "Romaji" : "Kombanwa",
      "Translate" : "Good Evening"
    },
    {
      "Kanji" : "お休みなさい",
      "Katakana" : "おやすみなさい",
      "Romaji" : "Oyasuminasai",
      "Translate" : "Good Night"
    },
    {
      "Kanji" : "左様なら",
      "Katakana" : "さようなら",
      "Romaji" : "Sayounara",
      "Translate" : "Goodbye"
    },
    {
      "Kanji" : "済みません",
      "Katakana" : "すみません",
      "Romaji" : "Sumimasen",
      "Translate" : "Excuse Me"
    },
    {
      "Kanji" : "有難う",
      "Katakana" : "ありがとう",
      "Romaji" : "Arigatou",
      "Translate" : "Thank You"
    },
    {
      "Kanji" : "御免なさい",
      "Katakana" : "ごめんなさい",
      "Romaji" : "Gomenasai",
      "Translate" : "Sorry"
    },
    {
      "Kanji" : "英語が話せますか",
      "Katakana" : "えいごがはなせますか",
      "Romaji" : "Eigo ga hanasemasu ka?",
      "Translate" : "Do you speak English?"
    },
    {
      "Kanji" : "日本語が分かりません",
      "Katakana" : "にほんごがわかりません",
      "Romaji" : "Nihongo ga wakarimasen",
      "Translate" : "I do not understand Japanese"
    },
    {
      "Kanji" : "大丈夫です",
      "Katakana" : "だいじょうぶです",
      "Romaji" : "Daijoubu desu",
      "Translate" : "I’m okay"
    },
    {
      "Kanji" : "助けて",
      "Katakana" : "たすけて",
      "Romaji" : "Tasukete",
      "Translate" : "Help"
    },
    {
      "Kanji" : "救急車を呼んで下さい",
      "Katakana" : "きゅうきゅうしゃをよんでください",
      "Romaji" : "Kyuukyuusha wo yonde kudasai",
      "Translate" : "Please call an ambulance"
    },
    {
      "Kanji" : "警察を呼んで下さい",
      "Katakana" : "けいさつをよんでください",
      "Romaji" : "Keisatsu wo yonde kudasai",
      "Translate" : "Please call the police"
    },
    {
      "Kanji" : "一",
      "Katakana" : "いち",
      "Romaji" : "Ichi",
      "Translate" : "One"
    },
    {
      "Kanji" : "二",
      "Katakana" : "に",
      "Romaji" : "Ni",
      "Translate" : "Two"
    },
    {
      "Kanji" : "三",
      "Katakana" : "さん",
      "Romaji" : "San",
      "Translate" : "Three"
    },
    {
      "Kanji" : "四",
      "Katakana" : "し",
      "Romaji" : "Shi/Yon",
      "Translate" : "Four"
    },
    {
      "Kanji" : "五",
      "Katakana" : "ご",
      "Romaji" : "Go",
      "Translate" : "Five"
    },
    {
      "Kanji" : "六",
      "Katakana" : "ろく",
      "Romaji" : "Roku",
      "Translate" : "Six"
    },
    {
      "Kanji" : "七",
      "Katakana" : "しち",
      "Romaji" : "Shichi/Nana",
      "Translate" : "Seven"
    },
    {
      "Kanji" : "八",
      "Katakana" : "はち",
      "Romaji" : "Hachi",
      "Translate" : "Eight"
    },
    {
      "Kanji" : "九",
      "Katakana" : "きゅう",
      "Romaji" : "Kyuu/Ku",
      "Translate" : "Nine"
    },
    {
      "Kanji" : "十",
      "Katakana" : "じゅう",
      "Romaji" : "Juu",
      "Translate" : "Ten"
    },
    {
      "Kanji" : "十一",
      "Katakana" : "じゅういち",
      "Romaji" : "Juu Ichi",
      "Translate" : "Eleven"
    },
    {
      "Kanji" : "十二",
      "Katakana" : "じゅうに",
      "Romaji" : "Juu Ni",
      "Translate" : "Twelve"
    },
    {
      "Kanji" : "二十",
      "Katakana" : "にじゅう",
      "Romaji" : "Ni juu",
      "Translate" : "Twenty"
    },
    {
      "Kanji" : "三十",
      "Katakana" : "さんじゅう",
      "Romaji" : "San juu",
      "Translate" : "Thirty"
    },
    {
      "Kanji" : "百",
      "Katakana" : "ひゃく",
      "Romaji" : "Hyaku",
      "Translate" : "Hundred"
    },
    {
      "Kanji" : "千",
      "Katakana" : "せん",
      "Romaji" : "Sen",
      "Translate" : "Thousand"
    },
    {
      "Kanji" : "万",
      "Katakana" : "まん",
      "Romaji" : "Man",
      "Translate" : "Ten Thousand"
    },
    {
      "Kanji" : "春",
      "Katakana" : "はる",
      "Romaji" : "Haru",
      "Translate" : "Spring"
    },
    {
      "Kanji" : "夏",
      "Katakana" : "なつ",
      "Romaji" : "Natsu",
      "Translate" : "Summer"
    },
    {
      "Kanji" : "秋",
      "Katakana" : "あき",
      "Romaji" : "Aki",
      "Translate" : "Autumn"
    },
    {
      "Kanji" : "冬",
      "Katakana" : "ふゆ",
      "Romaji" : "Fuyu",
      "Translate" : "Winter"
    },
    {
      "Kanji" : "何",
      "Katakana" : "なに",
      "Romaji" : "Nani",
      "Translate" : "What"
    },
    {
      "Kanji" : "何時",
      "Katakana" : "いつ",
      "Romaji" : "Itsu",
      "Translate" : "When"
    },
    {
      "Kanji" : "何処",
      "Katakana" : "どこ",
      "Romaji" : "Doko",
      "Translate" : "Where"
    },
    {
      "Kanji" : "誰",
      "Katakana" : "だれ",
      "Romaji" : "Dare/Donata",
      "Translate" : "Who"
    },
    {
      "Kanji" : "何故",
      "Katakana" : "なぜ",
      "Romaji" : "Naze",
      "Translate" : "Why"
    },
    {
      "Kanji" : "如何して",
      "Katakana" : "ど う し て",
      "Romaji" : "Douyatte",
      "Translate" : "How"
    },
    {
      "Kanji" : "危ない",
      "Katakana" : "あぶない",
      "Romaji" : "Abunai",
      "Translate" : "Danger, Attention"
    },
    {
      "Kanji" : "和",
      "Katakana" : "わ",
      "Romaji" : "Wa",
      "Translate" : "Japanese. This kanji means that it's Japanese style or from Japan. For example, in restaurants, you'll see this next to some beef, showing that this beef is produced somewhere in the country."
    },
    {
      "Kanji" : "洋",
      "Katakana" : "よう",
      "Romaji" : "You",
      "Translate" : "Western. Alternatively, this kanji means it's Western style: clothing, food, anything that is generally considered Western-influenced."
    },
    {
      "Kanji" : "館",
      "Katakana" : "かん",
      "Romaji" : "Kan",
      "Translate" : "(large) building. You'll see this at the end of certain tourist-friendly buildings, like museums and community centers."
    },
    {
      "Kanji" : "を",
      "Katakana" : "を",
      "Romaji" : "Wo",
      "Translate" : "Particle indicating the object"
    },
    {
      "Kanji" : "をください",
      "Katakana" : "をください",
      "Romaji" : "〜wo kudasai",
      "Translate" : "Please give me 〜. or [〜], please."
    },
    {
      "Kanji" : "何名様ですか",
      "Katakana" : "なんめいさまですか",
      "Romaji" : "nan mei sama desuka",
      "Translate" : "How many people?"
    },
    {
      "Kanji" : "ご注文はお決まりですか",
      "Katakana" : "ごちゅうもんはおきまりですか",
      "Romaji" : "Go chuumon wa okimari desu ka",
      "Translate" : "Are you ready to order?"
    },
    {
      "Kanji" : "ごちそうさまでした",
      "Katakana" : "ごちそうさまでした",
      "Romaji" : "gochisousama deshita",
      "Translate" : "It was delicious. or Thanks for the meal! used after meals"
    },
    {
      "Kanji" : "お勘定をお願いします",
      "Katakana" : "おかんじょうをおねがいします",
      "Romaji" : "Okanjou wo onegaishimasu",
      "Translate" : "Can I have the bill, please? at the restaurant"
    },
    {
      "Kanji" : "お願いします",
      "Katakana" : "おねがいします",
      "Romaji" : "Onegaishimasu",
      "Translate" : "Please"
    },
    {
      "Kanji" : "いくらですか",
      "Katakana" : "いくらですか",
      "Romaji" : "Ikura desuka",
      "Translate" : "How much is it?"
    },
    {
      "Kanji" : "袋大丈夫です",
      "Katakana" : "ふくろだいじょうぶです",
      "Romaji" : "fukuro daijoubu desu",
      "Translate" : "When you go eco-friendly and say no to plastic bags, you can always use this phrase. It means you don’t need a bag."
    },
    {
      "Kanji" : "お任せで",
      "Katakana" : "おまかせで",
      "Romaji" : "Omakase de",
      "Translate" : "Used to order chef’s recommendation__often for sushi"
    },
    {
      "Kanji" : "禁煙席",
      "Katakana" : "きんえんせき",
      "Romaji" : "Kinen Seki",
      "Translate" : "Non-smoking seat"
    },
    {
      "Kanji" : "今何時ですか",
      "Katakana" : "いまなんじですか",
      "Romaji" : "Ima Nanji Desu ka?",
      "Translate" : "What time is it now?"
    },
    {
      "Kanji" : "何時に",
      "Katakana" : "なんじに",
      "Romaji" : "Nanji ni",
      "Translate" : "At what time?"
    },
    {
      "Kanji" : "__に行きたい",
      "Katakana" : "__にいきたい",
      "Romaji" : "__ ni Ikitai",
      "Translate" : "I want to go to __"
    },
    {
      "Kanji" : "止めてください",
      "Katakana" : "とめてください",
      "Romaji" : "Tomete Kudasai",
      "Translate" : "Stop, please"
    },
    {
      "Kanji" : "ください",
      "Katakana" : "ください",
      "Romaji" : "Kudasai",
      "Translate" : "Please"
    },
    {
      "Kanji" : "切符",
      "Katakana" : "きっぷ",
      "Romaji" : "Kippu",
      "Translate" : "Ticket"
    },
    {
      "Kanji" : "どの電車",
      "Katakana" : "どのでんしゃ",
      "Romaji" : "Dono Densha",
      "Translate" : "Which train?"
    },
    {
      "Kanji" : "日本酒",
      "Katakana" : "にほんしゅ",
      "Romaji" : "Nihonshu",
      "Translate" : "Japanese sake"
    },
    {
      "Kanji" : "それを貰います",
      "Katakana" : "それをもらいます",
      "Romaji" : "Sore o moraimasu",
      "Translate" : "I'll take it"
    },
    {
      "Kanji" : "どう致しまして",
      "Katakana" : "どういたしまして",
      "Romaji" : "Douishimashite",
      "Translate" : "You're welcome"
    },
    {
      "Kanji" : "日本語を話しません",
      "Katakana" : "にほんごをはなしません",
      "Romaji" : "Nihongo o hanashimasen",
      "Translate" : "I don't speak Japanese"
    },
    {
      "Kanji" : "英語を話しますか",
      "Katakana" : "えいごをはなしますか",
      "Romaji" : "Eigo o hanashimasu ka",
      "Translate" : "Do you speak English?"
    },
    {
      "Kanji" : "すみません、もう一度言ってください",
      "Katakana" : "すみませんもういちどいってください",
      "Romaji" : "Sumimasen mou ichido itte kudasai",
      "Translate" : "Excuse me, could you please say that again?"
    },
    {
      "Kanji" : "ゆっくり話してください",
      "Katakana" : "ゆっくりはなしてください",
      "Romaji" : "Yukkuri hanashite kudasai",
      "Translate" : "Can you please speak slowly?"
    },
    {
      "Kanji" : "これはいくらですか",
      "Katakana" : "これはいくらですか",
      "Romaji" : "Kore wa ikura desu ka",
      "Translate" : "How much does this cost?"
    },
    {
      "Kanji" : "助けてもらえますか",
      "Katakana" : "たすけてもらえますか",
      "Romaji" : "Tasukete moraemasuka",
      "Translate" : "Can you please help me?"
    },
    {
      "Kanji" : "ようこそ、お入りください",
      "Katakana" : "ようこそはいりください",
      "Romaji" : "Yokoso, o-hairi kudasai",
      "Translate" : "Welcome, please come in"
    },
    {
      "Kanji" : "チケットを見せてください",
      "Katakana" : "チケットをみせてください",
      "Romaji" : "Chiketto o misete kudasai",
      "Translate" : "Please show your ticket"
    },
    {
      "Kanji" : "パスポートを見せてください",
      "Katakana" : "パスポートをみせてください",
      "Romaji" : "Pasupooto o misete kudasai",
      "Translate" : "Please show your passport"
    },
    {
      "Kanji" : "予約名は何ですか",
      "Katakana" : "よやくめいはなんですか",
      "Romaji" : "Yoyaku-mei wa nan desu ka",
      "Translate" : "What is your reservation name?"
    },
    {
      "Kanji" : "フライト遅延しています",
      "Katakana" : "フライトちえんしています",
      "Romaji" : "Furaito chien shiteimasu",
      "Translate" : "The flight is delayed"
    },
    {
      "Kanji" : "フライトキャンセルされました",
      "Katakana" : "フライトキャンセルされました",
      "Romaji" : "Furaito kyanseru saremashita",
      "Translate" : "The flight has been canceled"
    },
    {
      "Kanji" : "バッゲージクレームはこちらです",
      "Katakana" : "バッゲージクレームはこちらです",
      "Romaji" : "Baggeji kureimu wa kochira desu",
      "Translate" : "Baggage claim is this way"
    },
    {
      "Kanji" : "… 空港に到着しました",
      "Katakana" : "… くうこうにとうちゃくしました",
      "Romaji" : "… Kuukou ni touchaku shimashita",
      "Translate" : "We have arrived at … Airport"
    },
    {
      "Kanji" : "… 空港へ出発します",
      "Katakana" : "… くうこうへしゅっぱつしました",
      "Romaji" : "… Kuukou e shuppatsu shimasu",
      "Translate" : "We will depart for … Airport"
    },
    {
      "Kanji" : "フライトに遅れがあります",
      "Katakana" : "フライトにおくれがあります",
      "Romaji" : "Furaito ni okure ga arimasu",
      "Translate" : "There is a delay in the flight"
    },
    {
      "Kanji" : "機内持ち込みの荷物には制限があります",
      "Katakana" : "きないもちこみのにもつにはせいげんがあります",
      "Romaji" : "Kinaimochikomi no nimotsu niwa seigen ga arimasu",
      "Translate" : "There are restrictions on carry-on baggage"
    },
    {
      "Kanji": "これは出発便ですか？",
      "Katakana": "これはしゅっぱつびんですか？",
      "Romaji": "kore wa shuppatsubin desu ka?",
      "Translate": "Is this a departure flight?"
    },
    {
      "Kanji": "これは到着便ですか？",
      "Katakana": "これはとうちゃくびんですか？",
      "Romaji": "kore wa touchakubin desu ka?",
      "Translate": "Is this an arrival flight?"
    },
    {
      "Kanji": "搭乗口はどこですか？",
      "Katakana": "とうじょうぐちはどこですか？",
      "Romaji": "toujouguchi wa doko desu ka?",
      "Translate": "Where is the boarding gate?"
    },
    {
      "Kanji": "手荷物預けます",
      "Katakana": "てにもつあずけます",
      "Romaji": "tenimotsu azukemasu",
      "Translate": "I’ll check my baggage"
    },
    {
      "Kanji": "タクシーを呼んでください",
      "Katakana": "タクシーを呼んでください",
      "Romaji": "takushii o yonde kudasai",
      "Translate": "Please call a taxi"
    },
    {
      "Kanji": "レンタカーを借りたいです",
      "Katakana": "レンタカーを借りたいです",
      "Romaji": "rentakaa o karitai desu",
      "Translate": "I’d like to rent a car"
    },
    {
      "Kanji": "乗り継ぎ便のゲートはどこですか？",
      "Katakana": "のりつぎびんのゲートはどこですか？",
      "Romaji": "noritsugibin no geeto wa doko desu ka?",
      "Translate": "Where is the gate for the connecting flight?"
    },
    {
      "Kanji": "ここにいきたいです",
      "Katakana": "ここ に行きたいです",
      "Romaji": "koko ni ikitai desu",
      "Translate": "I want to go…here"
    },
    {
      "Kanji": "新宿駅に行きたいです",
      "Katakana": "しんじゅくえきにいきたいです",
      "Romaji": "shinjuku eki ni ikitai desu",
      "Translate": "I want to go to Shinjuku station."
    },
    {
      "Kanji": "私達がどこにいるのか、地図で教えてください",
      "Katakana": "わたしたちがどこにいるのか, ちずでおしえてください",
      "Romaji": "watashitachi ga doko ni iru no ka, chizu de oshiete kudasai",
      "Translate": "Can you please show me where we are on the map?"
    },
    {
      "Kanji": "近いですか",
      "Katakana": "ちかいですか",
      "Romaji": "chikai desu ka",
      "Translate": "Is it near?"
    },
    {
      "Kanji": "遠いですか",
      "Katakana": "とおいですか",
      "Romaji": "tooi desu ka",
      "Translate": "Is it far?"
    },
    {
      "Kanji": "まっすぐ行ってください",
      "Katakana": "まっすぐいってください",
      "Romaji": "massugu itte kudasai",
      "Translate": "Go straight ahead"
    },
    {
      "Kanji": "左に曲がってください",
      "Katakana": "ひだりにまがってください",
      "Romaji": "hidari ni magatte kudasai",
      "Translate": "Turn left"
    },
    {
      "Kanji": "右に曲がってください",
      "Katakana": "みぎにまがってください",
      "Romaji": "migi ni magatte kudasai",
      "Translate": "Turn right"
    },
    {
      "Kanji": "料金はいくらですか",
      "Katakana": "りょうきんはいくらですか",
      "Romaji": "ryoukin wa ikura desu ka",
      "Translate": "What is the fare?"
    },
    {
      "Kanji": "このバスは … に行きますか",
      "Katakana": "このバスは … にいきますか",
      "Romaji": "kono basu wa … ni ikimasu ka",
      "Translate": "Does this bus go to … ?"
    },
    {
      "Kanji": "ホテルにはワイファイがありますか",
      "Katakana": "ホテルにはワイファイがありますか",
      "Romaji": "hoteru ni wa wai-fai ga arimasu ka",
      "Translate": "Is there Wi-Fi in the hotel?"
    },
    {
      "Kanji": "パスポート",
      "Katakana": "パスポート",
      "Romaji": "pasupooto",
      "Translate": "Passport"
    },
    {
      "Kanji": "IDカード",
      "Katakana": "アイディーカード",
      "Romaji": "aidi kaado",
      "Translate": "ID Card"
    },
    {
      "Kanji": "財布",
      "Katakana": "さいふ",
      "Romaji": "saifu",
      "Translate": "Purse"
    },
    {
      "Kanji": "鞄",
      "Katakana": "かばん",
      "Romaji": "kaban",
      "Translate": "Sac à dos"
    },
    {
      "Kanji": "旅行かばん",
      "Katakana": "りょこうかばん",
      "Romaji": "ryokoukaban",
      "Translate": "Traveling bag suitcase"
    },
    {
      "Kanji": "電話",
      "Katakana": "でんわ",
      "Romaji": "denwa",
      "Translate": "Phone"
    },
    {
      "Kanji": "充電器",
      "Katakana": "じゅうでんき",
      "Romaji": "juudenki",
      "Translate": "Chargeur"
    },
    {
      "Kanji": "交番",
      "Katakana": "こうばん",
      "Romaji": "kouban",
      "Translate": "Police station"
    },
    {
      "Kanji": "靴",
      "Katakana": "くつ",
      "Romaji": "kutsu",
      "Translate": "Shoes"
    },
    {
      "Kanji": "帽子",
      "Katakana": "ぼうし",
      "Romaji": "boushi",
      "Translate": "Hat"
    },
    {
      "Kanji": "傘",
      "Katakana": "かさ",
      "Romaji": "kasa",
      "Translate": "Umbrella"
    },
    {
      "Kanji": "時計",
      "Katakana": "とけい",
      "Romaji": "tokei",
      "Translate": "Watch"
    },
    {
      "Kanji": "眼鏡",
      "Katakana": "めがね",
      "Romaji": "megane",
      "Translate": "Eyeglasses"
    },
    {
      "Kanji": "スーパー",
      "Katakana": "スーパー",
      "Romaji": "suupaa",
      "Translate": "Supermarket"
    },
    {
      "Kanji": "妻",
      "Katakana": "つま",
      "Romaji": "tsuma",
      "Translate": "My Wife"
    },
    {
      "Kanji": "失う",
      "Katakana": "うしなう",
      "Romaji": "ushinau",
      "Translate": "Lost"
    },
    {
      "Kanji": "帰る",
      "Katakana": "かえる",
      "Romaji": "kaeru",
      "Translate": "Go back to"
    },
    {
      "Kanji": "待つ",
      "Katakana": "まつ",
      "Romaji": "matsu",
      "Translate": "Attendre quelqu'un"
    },
    {
      "Kanji": "返済",
      "Katakana": "へんさい",
      "Romaji": "hensai",
      "Translate": "Refund"
    },
    {
      "Kanji": "ビザ",
      "Katakana": "ビザ",
      "Romaji": "biza",
      "Translate": "Visa"
    },
    {
      "Kanji": "薬",
      "Katakana": "くすり",
      "Romaji": "kusuri",
      "Translate": "Medecine, pharmaceuticals"
    },
    {
      "Kanji": "こちらへどうぞ",
      "Katakana": "こちらへどうぞ",
      "Romaji": "kochira e douzo",
      "Translate": "This way, please"
    },
    {
      "Kanji": "かしこまりました",
      "Katakana": "かしこまりました",
      "Romaji": "kashikomarimashita",
      "Translate": "Certainly (in response to your order)"
    },
    {
      "Kanji": "お待たせいたしました",
      "Katakana": "おまたせいたしました",
      "Romaji": "omatase itashimashita",
      "Translate": "Thank you for waiting"
    },
    {
      "Kanji": "二人 用のテーブルをお願いします",
      "Katakana": "ふたりようのテーブルをおねがいします",
      "Romaji": "futari you no teeburu o onegai shimasu",
      "Translate": "A table for two, please"
    },
    {
      "Kanji": "一人",
      "Katakana": "ひとり",
      "Romaji": "hitori",
      "Translate": "One"
    },
    {
      "Kanji": "三人",
      "Katakana": "さんにん",
      "Romaji": "sannin",
      "Translate": "Three"
    },
    {
      "Kanji": "四人",
      "Katakana": "よにん",
      "Romaji": "yonin",
      "Translate": "Four"
    },
    {
      "Kanji": "私は肉を食べません",
      "Katakana": "わたしはにくをたべません",
      "Romaji": "watashi wa niku o tabemasen",
      "Translate": "I don’t eat meat"
    },
    {
      "Kanji": "何かお探しですか",
      "Katakana": "なにかおさがしですか",
      "Romaji": "nani ka osagashi desu ka?",
      "Translate": "Are you looking for something?"
    },
    {
      "Kanji": "以上でよろしいですか",
      "Katakana": "いじょうでよろしいですか",
      "Romaji": "ijyou de yoroshii desu ka?",
      "Translate": "Is that all?"
    },
    {
      "Kanji": "はい、どうぞ",
      "Katakana": "はい、どうぞ",
      "Romaji": "hai, douzo",
      "Translate": "Here it is / Here you go"
    },
    {
      "Kanji": "現金でお願いします",
      "Katakana": "げんきんでおねがいします",
      "Romaji": "genkin de onegai shimasu",
      "Translate": "I would like to pay in cash"
    },
    {
      "Kanji": "クレジットカードでお願いします",
      "Katakana": "クレジットカードでおねがいします",
      "Romaji": "kurejitto kaado de onegai shimasu",
      "Translate": "I would like to pay by credit card"
    },
    {
      "Kanji": "クレジットカードは使えますか",
      "Katakana": "クレジットカードはつかえますか",
      "Romaji": "kurejittokādo wa tsukaemasu ka?",
      "Translate": "Do you accept credit cards?"
    },
    {
      "Kanji": "一つ",
      "Katakana": "ひとつ",
      "Romaji": "hitotsu",
      "Translate": "One"
    },
    {
      "Kanji": "二つ",
      "Katakana": "ふたつ",
      "Romaji": "futatsu",
      "Translate": "Two"
    },
    {
      "Kanji": "三つ",
      "Katakana": "みっつ",
      "Romaji": "mittsu",
      "Translate": "Three"
    },
    {
      "Kanji": "四つ",
      "Katakana": "よっつ",
      "Romaji": "yottsu",
      "Translate": "Four"
    },
    {
      "Kanji": "バスのりば",
      "Katakana": "バスのりば",
      "Romaji": "basunoriba",
      "Translate": "Bus stop"
    },
    {
      "Kanji": "片道切符",
      "Katakana": "かたみちきっぷ",
      "Romaji": "katamichikippu",
      "Translate": "One-way ticket"
    },
    {
      "Kanji": "帰りの切符",
      "Katakana": "かえりのきっぷ",
      "Romaji": "kaeri no kippu",
      "Translate": "Return ticket"
    },
    {
      "Kanji": "これを注文します",
      "Katakana": "これをちゅうもんします",
      "Romaji": "kore wo chuumon shimasu",
      "Translate": "I’ll have this one, please."
    },
    {
      "Kanji": "予約をしています",
      "Katakana": "よやくをしています",
      "Romaji": "yoyaku wo shiteimasu",
      "Translate": "I have a reservation."
    },
    {
      "Kanji": "このサイズがありますか",
      "Katakana": "このサイズがありますか",
      "Romaji": "kono saizu ga arimasu ka?",
      "Translate": "Do you have this in my size?"
    },
    {
      "Kanji": "すみません、見てもいいですか",
      "Katakana": "すみませんみてもいいですか",
      "Romaji": "sumimasen, mite mo ii desu ka?",
      "Translate": "Excuse me, may I have a look at this?"
    }
  ];



  var punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
  var spaceRE = /\s+/g;
  
  let result = data.map(obj => {
    let newObj = {};
    for (let [key, value] of Object.entries(obj)) {
      let newKey = key.toLowerCase();
      let newValue = value;
      if (newKey === "romaji") {
        newValue = value
          .toLowerCase()
          .replace(punctRE, '')
          .replace(spaceRE, '');
      }
      newObj[newKey] = newValue;
    }
    return newObj;
  });
  
  fs.writeFile('output.json', JSON.stringify(result, null, 2), (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });