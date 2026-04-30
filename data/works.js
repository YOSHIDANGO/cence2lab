const WORKS = [
  {
    "id": "s-assistant",
    "category": "app",
    "title": "ローカルAI / S Assistant",
    "catch": "スマホの中で動く、キャラ人格つきAIアシスタント",
    "description": "完全ローカル寄りで動くAIアシスタントアプリ。Sの見た目や会話モードを切り替えながら、チャットUI自体も世界観に合わせて調整している。",
    "thumbnail": "./assets/images/works/s-assistant/icon.jpg",
    "screenshots": [
      "./assets/images/works/s-assistant/screenshots/shot-01.jpg",
      "./assets/images/works/s-assistant/screenshots/shot-02.jpg"
    ],
    "status": "LOCAL AI",
    "accent": "cyan",
    "tags": [
      "Android",
      "Local LLM",
      "Character",
      "Chat UI"
    ],
    "links": [
      {
        "label": "APK置き場",
        "url": "./downloads/s-assistant/"
      },
      {
        "label": "制作ログ",
        "url": "#devlog"
      }
    ]
  },
  {
    "id": "zombie-belt-action",
    "category": "game",
    "title": "ゾンビベルトスクロールアクション",
    "catch": "ゾンビだらけの街だけど、ウチはまだ死ぬ気ない",
    "description": "ギャルJKがゾンビだらけの学校と街を突破するベルトスクロール型アクション。通常戦闘、血の雨、アイテム、スコア演出などを入れたテンポ重視の作品。",
    "thumbnail": "./assets/images/works/zombie-belt-action/icon.jpg",
    "screenshots": [
      "./assets/images/works/zombie-belt-action/screenshots/shot-01.jpg",
      "./assets/images/works/zombie-belt-action/screenshots/shot-02.jpg",
      "./assets/images/works/zombie-belt-action/screenshots/shot-03.jpg"
    ],
    "status": "ACTION",
    "accent": "red",
    "tags": [
      "Zombie",
      "Belt Scroll",
      "Action",
      "Gal JK"
    ],
    "links": [
      {
        "label": "Web版",
        "url": "./downloads/zombie-belt-action/"
      },
      {
        "label": "APK置き場",
        "url": "./downloads/zombie-belt-action/"
      }
    ]
  },
  {
    "id": "gal-horror",
    "category": "game",
    "title": "ギャルゲー風ホラー",
    "catch": "かわいい部屋に、少しずつ違和感が混ざる",
    "description": "ギャルゲーのUIとホラー演出を混ぜた選択式の作品。日常っぽい部屋、気づかれ度、選択肢、徐々に進む真相を見せる方向で作っている。",
    "thumbnail": "./assets/images/works/gal-horror/icon.jpg",
    "screenshots": [
      "./assets/images/works/gal-horror/screenshots/shot-01.jpg",
      "./assets/images/works/gal-horror/screenshots/shot-02.jpg",
      "./assets/images/works/gal-horror/screenshots/shot-03.jpg"
    ],
    "status": "HORROR",
    "accent": "pink",
    "tags": [
      "Gal Game",
      "Horror",
      "Choice",
      "Room"
    ],
    "links": [
      {
        "label": "Web版",
        "url": "./downloads/gal-horror/"
      }
    ]
  },
  {
    "id": "rhythm-game",
    "category": "game",
    "title": "オリジナル曲音ゲー",
    "catch": "CENCEの曲で遊ぶネオン音ゲー",
    "description": "オリジナル曲を使った音ゲー。曲選択、ジャケット、難易度、プレイ画面までネオン系でまとめ、音楽作品とゲーム作品を同じ棚に置けるようにしている。",
    "thumbnail": "./assets/images/works/rhythm-game/icon.jpg",
    "screenshots": [
      "./assets/images/works/rhythm-game/screenshots/shot-01.jpg",
      "./assets/images/works/rhythm-game/screenshots/shot-02.jpg"
    ],
    "status": "RHYTHM",
    "accent": "purple",
    "tags": [
      "Music",
      "Rhythm",
      "CENCE",
      "Neon UI"
    ],
    "links": [
      {
        "label": "Web版",
        "url": "./downloads/rhythm-game/"
      },
      {
        "label": "楽曲置き場",
        "url": "./downloads/rhythm-game/"
      }
    ]
  },
  {
    "id": "cabaret-rpg",
    "category": "game",
    "title": "キャバ嬢RPG",
    "catch": "夜の街で育成して、戦うRPG",
    "description": "雪のススキノ風の夜街を舞台に、キャスト育成と会話バトルを組み合わせたRPG。店外マップ、会話バトル、キャスト同士の対決を見せ場にしている。",
    "thumbnail": "./assets/images/works/cabaret-rpg/icon.jpg",
    "screenshots": [
      "./assets/images/works/cabaret-rpg/screenshots/shot-01.jpg",
      "./assets/images/works/cabaret-rpg/screenshots/shot-02.jpg",
      "./assets/images/works/cabaret-rpg/screenshots/shot-03.jpg"
    ],
    "status": "RPG",
    "accent": "yellow",
    "tags": [
      "Cabaret",
      "RPG",
      "Night City",
      "Battle"
    ],
    "links": [
      {
        "label": "Web版",
        "url": "./downloads/cabaret-rpg/"
      },
      {
        "label": "APK置き場",
        "url": "./downloads/cabaret-rpg/"
      }
    ]
  }
];
const FEATURE_SECTIONS = [
  {
    "id": "zombie-intro",
    "type": "manga",
    "title": "ゾンビ導入漫画",
    "lead": "放課後に寝ていたギャルJKが目を覚ますと、学校はゾンビだらけになっていた。",
    "workId": "zombie-belt-action",
    "images": [
      "./assets/images/works/zombie-belt-action/intro-manga/page-01.jpg",
      "./assets/images/works/zombie-belt-action/intro-manga/page-02.jpg",
      "./assets/images/works/zombie-belt-action/intro-manga/page-03.jpg",
      "./assets/images/works/zombie-belt-action/intro-manga/page-04.jpg"
    ]
  },
  {
    "id": "gal-gif",
    "type": "gif",
    "title": "ギャルゲー風ホラー GIF",
    "lead": "覗き穴越しに見える違和感。静止画より空気が伝わるので、トップに独立して置く。",
    "workId": "gal-horror",
    "image": "./assets/images/works/gal-horror/gallery/peek.gif"
  }
];
