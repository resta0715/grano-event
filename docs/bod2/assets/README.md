# BOD #2 — Visual & Audio Assets

このディレクトリには、`announcement.html` / `index.html` / `members.html` で使う画像・音源を置いています。

## Images (PNG)

すべて Cursor の GenerateImage で生成。Grano Chapter 内利用に限定。再配布禁止。

| File | 用途 |
| --- | --- |
| `lantern-red-mitsudomoe.png` | 家紋（三つ巴）入り 赤提灯（大）— ヒーロー左右の中心 |
| `lantern-orange-kuyo.png` | 家紋（九曜）入り 朱提灯（中）— ガーランド側面 |
| `lantern-navy-tachibana.png` | 家紋（橘）+ 青海波柄 紺提灯（中）— ガーランド側面 |
| `yatai-silhouette.png` | 屋台・縁日シルエット — ヒーロー下部のフルブリード装飾 |
| `seigaiha-cream-gold.png` | 青海波パターン（cream/gold）— セクションコーナー装飾 |
| `hanabi-night-sky.png` | 花火夜空 — 大背景候補 |
| `hanabi-burst-gold.png` | 花火 単体 透過 — ヒーロー右上にうっすら配置 |
| `kingyo.png` | 金魚 透過 — フッター/特徴ピル装飾アクセント |

## Audio

### `audio/matsuri-bgm.mp3`

- **Title**: Japanese traditional festival
- **Source**: Pixabay (ID 164421) — https://pixabay.com/music/upbeat-japanese-traditional-festival-164421/
- **License**: [Pixabay Content License](https://pixabay.com/service/license-summary/) — 商用利用 OK / クレジット表記不要 / Web 埋め込み OK
- **Duration**: 3:04 / 約 3.5MB / 160kbps MP3 (22.05 kHz, Joint Stereo)
- **Use**: announcement.html / members.html の右下フローティング BGM ボタン

> 当初 Pixabay は直 DL が Cloudflare 保護で 403 になり Internet Archive の Public Domain 代替
> （The Azuma Kabuki Musicians, 1956）を一時採用していましたが、Playwright + Xvfb 経由で
> 正規ページから取得できたため Pixabay 版に差し替え済みです。
> 別のトラックに差し替えたい場合はファイル名 `audio/matsuri-bgm.mp3` のまま上書きしてください
> （HTML 側の変更は不要）。
