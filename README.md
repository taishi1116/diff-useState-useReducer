# このリポジトリについて

- `React.js` の`useState`と`useReducer`の差分を理解するための検証リポジトリです

## 作った画面

- 連絡先登録フォーム
  - ユーザーは 5 件まで連絡先を追加することができる
  - 連絡先の設定は下記が存在
    - 閲覧モード
      - メールアドレスを編集不可
      - 編集ボタンを押下することで編集モードに切り替え
    - 編集モード
      - メールアドレスの編集が可能
      - メールアドレスの保存が可能
        - 保存を押下したら閲覧モードとなる
      - メールアドレスの削除が可能

# 差分

## useState

- `state`,`setState`の実装で実装コストが低い
- `state`変更の関数で`setState`が絡むのでテストコードが書けない

よって`state`が少しでも複雑になると品質担保が難しいので、state が簡単な場面で利用するべき

## useReducer

- `action`,`reducer`と`useState`と比べて実装コストがかかる
- `actions`,`reducer`で`useState`よりも明文化されている印象
- `reducer`は純粋関数なのでさまざまな state のケースの単体テストがかける

実装コストは高くなるが単体テストがかけることが大きなメリットだと感じている。  
よって少しでも複雑な state or 複雑な state 更新がある場合は`useReducer`を採用するべき
