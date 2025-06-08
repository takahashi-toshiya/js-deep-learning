# JavaScript 学習ロードマップ（本質 × 実践）

## 🧩 言語仕様・構文の深掘り

- スコープとクロージャ
- this の挙動と bind/call/apply
- 関数宣言 vs 関数式
- プロトタイプチェーンと継承の仕組み
- new 演算子の仕組み
- strict mode の本当の意味

## ⏳ 非同期と実行モデル

- イベントループの仕組み（タスク vs マイクロタスク）
- Promise / async-await の本質と落とし穴
- setTimeout / setImmediate / requestAnimationFrame の違い
- 非同期コードのパフォーマンス罠

## 💾 メモリとパフォーマンス

- ガベージコレクションと参照カウント
- WeakMap / WeakSet の用途と意味
- メモリリークが起きる典型パターン
- 配列 vs オブジェクト vs Map の内部構造と効率差

## 🔧 高度な型・構造

- 再帰・高階関数・カリー化
- 関数型プログラミング的思考（map, reduce, filter の設計力）
- イテレーター / ジェネレーター
- Symbol・Well-known Symbol（例：Symbol.iterator）
- Proxy / Reflect を使ったメタプログラミング

## 🌍 実行環境と相互作用

- ECMAScript 仕様とブラウザ実装の違い
- V8 エンジンの最適化と制限
- DOM と JS の関係（Web API vs JavaScript）
- モジュール（ESM vs CommonJS）と tree shaking
