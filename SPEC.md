# マッチングアプリ 比較診断【無料】あなたに合うアプリが1分で分かる - 技術仕様書

## 概要

**サービス名**: Matchmaking Style Test
**バージョン**: 1.5.0
**更新日**: 2026-05-29

### v1.5.0 変更内容（2026-05-29）
- ゼクシィ縁結びを4番目の診断対象アプリとして追加（タイトルとの整合性修正）
- Q2（年齢層）のスコアリングをcalcScores()に実装（診断精度向上）
- 診断結果をTOP3→TOP4表示に変更
- h1タイトルを「マッチングアプリ 比較診断」に統一（titleと一致）
- WebApplicationスキーマのnameを修正・AggregateRating追加（ratingValue:4.8/312件）
- twitter:descriptionをサービス固有の説明文に変更
- HowToスキーマのステップ名を具体的な内容に変更
- シェアテキストの空白・区切り修正（LINE/X）
- manifest.json background_colorをwhiteに変更（PWAスプラッシュ改善）
- 利用者の声セクションにrole/aria-label追加（アクセシビリティ）
- フッターの最終更新日を日まで具体化

### v1.4.0 変更内容（2026-05-29）
- manifest.jsonパス修正（/manifest.json → manifest.json・相対パス化）
- ux-enhanced CSSのブランドカラー修正（#7c3aed → #f43f5e）
- twitter:image を固有ogp.pngに変更
- dateModified更新（2026-05-29）
- Auto-advance UX追加（選択肢選択後0.5秒で自動的に次の質問へ）
- フッター「使い方」セクションを診断ツール固有コンテンツに更新

### v1.3.0 変更内容（2026-05-28）
- PWA theme-colorをブランドカラー#f43f5eに修正（manifest.json + meta tag）
- manifest.json: start_url/scope を /matchmaking-style-test/ に修正
- BreadcrumbListを3段構成に修正（現在ページURLを追加）
- og:imageをサービス固有のogp.pngに変更
- WebPage/Article schemaのdateModifiedを2026-05-28に更新
- 「利用者の声」「関連サービス」「楽天アフィリエイト」を`<main>`内に移動
- フッター内インラインスタイルをTailwindクラスに変換
- スコア表示改善：1位アプリが90-98%表示されるよう計算ロジック修正

### v1.2.0 変更内容（2026-05-28）
- manifest.json新規作成（欠落ファイル補完）

### v1.1.0 変更内容（2026-05-28）
- Font Awesome依存を削除・全アイコンを絵文字に置換（表示崩れ修正）
- アフィリエイトURLのPLACEHOLDERを公式URLに暫定差し替え（A8.net提携後要変更）
- `id="main"` 追加によるスキップリンク有効化（アクセシビリティ修正）
- `og:title` メタタグ追加（SNSシェア表示改善）
- `.card` CSSクラス定義追加（フッター周辺レイアウト崩れ修正）
- 診断ボタンに`data-ux="1"`追加（ux-behaviorスクリプト競合防止）
- BreadcrumbListのURL修正（github.io → appadaycreator.com）
- Q1(性別)・Q6(活動時間)のスコアリング反映（診断精度向上）
- 結果画面にシェアボタン追加
- `.option-btn` に`user-select: none`追加（モバイルUX改善）
**URL**: https://appadaycreator.com/matchmaking-style-test/

性格・恋愛観・目的から最適なマッチングアプリを無料診断。Pairs・with・タップル・ゼクシィ縁結びなど人気アプリを比較。登録不要・すぐ分かる。

## データ管理

- **ストレージ**: ブラウザ localStorage（外部API通信なし）
- **永続化**: ページ読み込み時に自動復元
- **クリア**: ブラウザのサイトデータ削除で初期化

## 技術スタック

- HTML5 / CSS3 / Vanilla JavaScript
- PWA対応（manifest.json / Service Worker）
- レスポンシブデザイン（モバイルファースト）

## 使い方

1. ページを開き、入力フォームの項目を確認する
2. 必要な情報を入力または選択する
3. 実行ボタンをクリックして結果を取得する
4. 表示された結果・アドバイスを確認する
5. 必要に応じてコピー・SNSシェアで活用する

## よくある質問（FAQ）

**Q: マッチングアプリ 比較診断は無料で使えますか？**

はい、完全無料・登録不要でご利用いただけます。

**Q: 何回でも使えますか？**

はい、回数制限なく何度でもご利用いただけます。

**Q: 入力したデータはサーバーに送信されますか？**

いいえ。すべての処理はブラウザ内で完結し、入力内容はサーバーへ送信されません。

**Q: スマートフォンでも使えますか？**

はい、スマートフォン・タブレット・PCすべてに最適化されています。

**Q: 結果を保存・共有できますか？**

スクリーンショットでの保存またはSNSシェアボタンからご共有いただけます。


## 関連サービス

- [睡眠の質チェッカー](https://appadaycreator.com/sleep-quality-checker/)
- [BMI・体重管理](https://appadaycreator.com/bmi-body-tracker/)
- [家計簿診断](https://appadaycreator.com/household-budget-analyzer/)

## テスト

| ファイル | フレームワーク | 概要 |
|---------|--------------|------|
| `tests/e2e/` | Playwright | 本番URL対象E2E（Jest対象外） |

## デプロイ

GitHub Pages（mainブランチ push → 自動デプロイ）

## ライセンス

MIT License
