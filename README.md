# Next.js Tree Table Demo
木構造と表の二つの性質を持つデータを表示・編集する Web アプリケーションのデモ

React + Tailwind CSS を用いた UI 部分と、
Drizzle ORM を用いたバックエンド部分からなります

## フロントエンド
React + Tailwind CSS を用いています

Bootstrap Icons によるアイコンフォントを使用します
<details>
<summary>
現在の設定ではパフォーマンスは良くなさそう...
</summary>
クライアント側で 100 kB 以上の woff2 ファイル全体が読み込まれるようです、開発中に違うアイコンをすぐに試せるのでこの方法を用いています...
</details>

### コンポーネント
#### Table
HTML の table 関連の要素にスタイルを付けたもの


#### ObjectTable
オブジェクトの配列を渡すと、列名などをいい感じに Table コンポーネントを用いて表示します

headerCell や dataCell プロパティを指定することで、th, td 要素の中に配置するコンポーネントを外部から変更できます

#### PriorityOrderObjectTable
ObjectTable に、複数の列を用いて並び替える機能を追加したもの

#### PriorityOrderFilterObjectTable
ObjectTable に、
- 複数の列を用いて並び替える機能
- 複数の列のデータ値を用いてフィルタリングする機能

を追加したもの

## バックエンド
Next.js の App Router 機能を用いてルーティングを行います

Drizzle による MySQL データベースのマイグレーション機能と、ORM 機能を用いています

### Web API

### DB migration & ORM