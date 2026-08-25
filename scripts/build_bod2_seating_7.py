#!/usr/bin/env python3
"""BOD#2 第2部 7卓版。8卓版 (seating_part2.html) とは別URL。"""
from __future__ import annotations

import importlib.util
import json
import re
from pathlib import Path

SPEC = importlib.util.spec_from_file_location(
    "bod2seat", "/home/kota/grano-event/scripts/build_bod2_seating.py"
)
S = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(S)

DST = Path("/home/kota/grano-event/docs/bod2/seating_part2_7.html")

FACILITATORS_7 = {
    "幸田 勝",
    "小野 利隆",
    "小宮 雅哲",
    "山野井 信夫",
    "新美 裕之",
    "あらい ひとみ",
    "山田 研二",
}

# A: 宇部＋秋山＋加藤 / 小林良はあらい卓 / 柴は山野井
PATTERN_A_7: dict[str, int] = {
    "伊藤 梢": 0,
    "上村 マリ": 0,
    "阿部 綾香": 0,
    "奥村 佳奈子": 0,
    "岡崎 厚子": 0,
    "磯田 忠良": 0,
    "飛山 佳枝": 0,
    "幸田 勝": 0,
    "小野 利隆": 1,
    "猪股 みお": 1,
    "鈴木 優": 1,
    "野口 久美子": 1,
    "新田 義矩": 1,
    "板倉 佳織": 1,
    "上夷 未紗": 1,
    "梅原 聡": 1,
    "小宮 雅哲": 2,
    "宇部 光太": 2,
    "秋山 雅代": 2,
    "加藤 一郎": 2,
    "早川 尚吾": 2,
    "徳永 剛太": 2,
    "髙橋 信博": 2,
    "山野井 信夫": 3,
    "柴 慎平": 3,
    "川端 綾華": 3,
    "大久保 仁": 3,
    "尾﨑 直人": 3,
    "金指 佐江子": 3,
    "新井 真人": 3,
    "新美 裕之": 4,
    "千葉 麻衣": 4,
    "成瀬 優": 4,
    "佐生 道代": 4,
    "大工原 葉子": 4,
    "石川 清司": 4,
    "植草 尚大": 4,
    "あらい ひとみ": 5,
    "小林 実穂": 5,
    "小林 良": 5,
    "彌富 久美子": 5,
    "田代 祐司": 5,
    "川村 徹也": 5,
    "龍造寺 亮": 5,
    "南 晴美": 5,
    "山田 研二": 6,
    "永吉 佐千子": 6,
    "迫田 由美子": 6,
    "古澤 萌愛": 6,
    "栗原 優": 6,
    "佐藤 風弥": 6,
    "伊東 伸浩": 6,
}

# B: 秋山は3卓（宇部） / 小林良は山野井 / 柴は小宮・宇部 / 加藤は幸田と同卓
PATTERN_B_7: dict[str, int] = {
    "伊藤 梢": 0,
    "上村 マリ": 0,
    "阿部 綾香": 0,
    "奥村 佳奈子": 0,
    "髙橋 信博": 0,
    "幸田 勝": 0,
    "加藤 一郎": 0,
    "小野 利隆": 1,
    "猪股 みお": 1,
    "鈴木 優": 1,
    "野口 久美子": 1,
    "徳永 剛太": 1,
    "金指 佐江子": 1,
    "板倉 佳織": 1,
    "小宮 雅哲": 2,
    "宇部 光太": 2,
    "柴 慎平": 2,
    "彌富 久美子": 2,
    "上夷 未紗": 2,
    "秋山 雅代": 2,
    "古澤 萌愛": 2,
    "梅原 聡": 2,
    "山野井 信夫": 3,
    "小林 良": 3,
    "新井 真人": 3,
    "川端 綾華": 3,
    "大久保 仁": 3,
    "佐藤 風弥": 3,
    "田代 祐司": 3,
    "新美 裕之": 4,
    "千葉 麻衣": 4,
    "成瀬 優": 4,
    "佐生 道代": 4,
    "大工原 葉子": 4,
    "石川 清司": 4,
    "尾﨑 直人": 4,
    "あらい ひとみ": 5,
    "小林 実穂": 5,
    "南 晴美": 5,
    "川村 徹也": 5,
    "龍造寺 亮": 5,
    "岡崎 厚子": 5,
    "磯田 忠良": 5,
    "早川 尚吾": 5,
    "山田 研二": 6,
    "永吉 佐千子": 6,
    "迫田 由美子": 6,
    "伊東 伸浩": 6,
    "栗原 優": 6,
    "植草 尚大": 6,
    "新田 義矩": 6,
    "飛山 佳枝": 6,
}


def empty_tables() -> list[list[tuple[str, str]]]:
    return [[("e", "") for _ in range(S.CAPACITY)] for _ in range(7)]


def build_pattern(seat_map: dict[str, int]) -> list[list[tuple[str, str]]]:
    tables = S.apply_seat_map(empty_tables(), seat_map)
    S.FACILITATORS = set(FACILITATORS_7)
    S.separate_forbidden_pairs(tables)
    S.apply_facilitators(tables)
    return [S.interleave(seats) for seats in tables]


def pattern_html_7(label: str, title: str, tables: list[list[tuple[str, str]]]) -> str:
    hide = ' style="display:none"' if label == "B" else ""
    tables_html = "\n".join(
        S.table_html(i, tables[i - 1]) for i in (1, 2, 3, 7, 4, 5, 6)
    )
    return f"""<section class="tables-pattern" data-pattern="{label}"{hide}>
  <p class="pattern-page-label" aria-hidden="true">{title}</p>
  <p class="floor-hint floor-front">正面（手前）</p>
  <div class="tables-l">
{tables_html}
  </div>
  <p class="floor-hint floor-back">左奥コーナーまたぎ（L字） → 会場後方</p>
</section>"""


EXTRA_CSS_7 = S.EXTRA_CSS + """
:root{
  --visitor:#c8e8d4;
  --visitor-bd:#3d8a64;
}
.seat-c.v{
  background:#c8e8d4 !important;
  border-color:#3d8a64 !important;
}
.seat-c.v.hostmatch{
  background:#a9d9b8 !important;
  border-color:#2f7a55 !important;
}
.tables-l{
  display:grid;
  grid-template-columns:repeat(4, minmax(0,1fr));
  grid-template-areas:
    ". t1 t2 t3"
    "t7 t4 t5 t6";
  gap:16px 14px;
  align-items:center;
  margin:0 0 8px;
}
.tables-l [data-table="1"]{ grid-area:t1 }
.tables-l [data-table="2"]{ grid-area:t2 }
.tables-l [data-table="3"]{ grid-area:t3 }
.tables-l [data-table="4"]{ grid-area:t4 }
.tables-l [data-table="5"]{ grid-area:t5 }
.tables-l [data-table="6"]{ grid-area:t6 }
.tables-l [data-table="7"]{ grid-area:t7 }
.floor-hint{
  text-align:center;
  font-size:12px;
  font-weight:800;
  letter-spacing:.08em;
  color:#6a5a38;
  margin:2px 0 6px;
}
.floor-back{ color:#8a5a20; margin-top:4px }
.vendor-row{
  grid-template-columns:repeat(4, minmax(0,1fr)) !important;
  gap:10px !important;
}
.vendor-booth{
  aspect-ratio:auto !important;
  min-height:118px !important;
  padding:20px 10px 12px !important;
}
.vendor-booth .nm{ font-size:18px !important; font-weight:800 !important; }
.vendor-booth .prod{ font-size:14px !important; color:#333 !important; }
.vendor-booth .booth-num{ font-size:14px !important; }
.vendor-booth .sm{ font-size:13px !important; }
@media print{
  .legend{ display:flex !important; }
  .floor-hint{ font-size:9pt !important; margin:0 0 1.5mm !important; }
  .tables-l{
    grid-template-columns:repeat(4, minmax(0,1fr)) !important;
    gap:2mm 3mm !important;
    margin:0 0 2mm !important;
  }
  .tables-l .table-wrap{ max-width:66mm !important; }
  .seat-c{
    background:#fff !important;
  }
  .seat-c.v,
  body.print-a3 .seat-c.v{
    background:#b7e0c6 !important;
    border:.7pt solid #2f7a55 !important;
  }
  .seat-c.v.hostmatch,
  body.print-a3 .seat-c.v.hostmatch{
    background:#98d0ab !important;
    border:.8pt solid #246948 !important;
  }
  .seat-c.a,
  body.print-a3 .seat-c.a{
    background:#fff4dc !important;
    border:.6pt solid #c8943e !important;
  }
  .vendor-row{
    grid-template-columns:repeat(4, minmax(0,1fr)) !important;
    gap:3mm !important;
  }
  .vendor-booth,
  body.print-a3 .vendor-booth{
    min-height:26mm !important;
    padding:5mm 2.5mm 2.5mm !important;
    font-size:12pt !important;
  }
  .vendor-booth .nm,
  body.print-a3 .vendor-booth .nm{ font-size:13pt !important; }
  .vendor-booth .prod,
  body.print-a3 .vendor-booth .prod{ font-size:11pt !important; }
  .vendor-booth .booth-num{ font-size:10pt !important; }
  .vendor-booth.v{
    background:#c8e8d4 !important;
    border:.8pt solid #2f7a55 !important;
  }
}
"""


def main() -> None:
    tables_a = build_pattern(PATTERN_A_7)
    tables_b = build_pattern(PATTERN_B_7)
    wrap = (
        '<div class="tables-wrap">\n'
        + pattern_html_7("A", "パターン A — 第2部 開始時（7卓）", tables_a)
        + "\n"
        + pattern_html_7("B", "席替え後（パターン B・7卓）", tables_b)
        + "\n</div>"
    )
    html = S.SRC.read_text(encoding="utf-8")
    html = html.replace(
        "<title>2部 円卓席次表｜Business Open Day 2026 — BNI Grano Chapter</title>",
        "<title>2部 円卓席次（7卓）｜BOD 2026 第2回</title>",
    )
    html = html.replace(
        "Business Open Day 2026 第2部 円卓席次（パターンA・B切替対応）。",
        "Business Open Day 2026 第2回（2026.8.26）第2部 円卓席次 7卓版。",
    )
    html = html.replace(
        '<span class="bar-title">Business Open Day 2026 — 第2部 円卓席次</span>',
        '<span class="bar-title">BOD 2026 第2回 — 第2部 円卓席次（7卓）</span>',
    )
    html = html.replace(
        '<a class="bar-btn" href="seating.html">第1部</a>\n    <a class="bar-btn" href="announcement_page.html">Event</a>\n    <a class="bar-btn" href="members.html">Members</a>',
        '<a class="bar-btn" href="index.html">ハブ</a>\n    <a class="bar-btn" href="seating_part2.html">8卓版</a>\n    <a class="bar-btn" href="seating_part2_7.pdf">席次PDF</a>\n    <a class="bar-btn" href="memberlist.html">Members</a>',
    )
    html = html.replace(
        '<p class="hero-pre">Round Tables — 2026.5.27 (水) 第2部</p>',
        '<p class="hero-pre">Round Tables — 2026.8.26 (水) 第2回 · 7卓版</p>',
    )
    html = html.replace(
        '<p class="hero-sub">8卓 × 7〜8名 / 3-3-2 配置 — 席替えあり（パターンA/B）</p>',
        '<p class="hero-sub">7卓 × 7〜8名 / 正面3卓・左奥コーナーまたぎL字。ビジターは緑</p>\n  <p class="paper-note"><span>印刷・PDF用紙：A3ヨコ（大きい紙 / 297×420mm）</span></p>',
    )
    html = html.replace(
        """        <div class="print-pop-head">用紙サイズ × 範囲</div>
        <button type="button" data-print="a4-current" role="menuitem">A4 横 — 現在のパターン</button>
        <button type="button" data-print="a3-current" role="menuitem">A3 横 — 現在のパターン</button>
        <hr>
        <button type="button" data-print="a4-both" role="menuitem">A4 横 — A・B 両方（2ページ）</button>
        <button type="button" data-print="a3-both" role="menuitem">A3 横 — A・B 両方（2ページ）</button>""",
        """        <div class="print-pop-head">用紙サイズ（おすすめは A3ヨコ）</div>
        <button type="button" data-print="a3-current" role="menuitem">A3ヨコ（大きい紙・文字大きめ）今のパターン</button>
        <button type="button" data-print="a3-both" role="menuitem">A3ヨコ — 開始時と席替え後（2枚）</button>
        <hr>
        <button type="button" data-print="a4-current" role="menuitem">A4ヨコ（普通のコピー用紙・文字はやや小さめ）</button>
        <button type="button" data-print="a4-both" role="menuitem">A4ヨコ — 開始時と席替え後（2枚）</button>""",
    )
    html = html.replace(
        "  if (new URLSearchParams(location.search).get('edit') === '1') {",
        """  if (new URLSearchParams(location.search).get('pdf') === '1') {
    document.body.classList.add('print-a3', 'print-both');
    document.getElementById('pageSize').textContent = '@page { size: A3 landscape; margin: 8mm }';
  }
  if (new URLSearchParams(location.search).get('edit') === '1') {""",
    )
    html = re.sub(
        r'<div class="tables-wrap">.*?</div>\n\n<section class="vendor-section"',
        wrap + "\n\n" + S.palette_html() + '\n\n<section class="vendor-section"',
        html,
        count=1,
        flags=re.S,
    )
    html = re.sub(
        r'<section class="vendor-section".*?</section>',
        S.vendor_html(),
        html,
        count=1,
        flags=re.S,
    )
    html = re.sub(
        r'<section class="pair-section">.*?</section>',
        S.pair_section_html(tables_a, tables_b),
        html,
        count=1,
        flags=re.S,
    )
    html = re.sub(
        r'<script id="hostMap" type="application/json">.*?</script>',
        '<script id="hostMap" type="application/json">'
        + json.dumps(S.HOST_MAP, ensure_ascii=False)
        + "</script>",
        html,
        count=1,
        flags=re.S,
    )
    html = re.sub(
        r'<footer class="footer">.*?</footer>',
        """<footer class="footer">
  <p>※ 7卓版。全卓ファシリ。1卓=幸田 勝 様（伊藤 梢 様は普通席）。鈴木 優 様は全体司会。編集モード（?edit=1）で入れ替えできます。</p>
  <p>2部欠席：川戸 恒吾 様 / かわもと えつこ 様 / 佐藤 秀哉 様 / 中山 朋子 様 / 熊澤 博之 様 ／ ビジター：大場 祐介 様 / イブ 様 / 星 寿美 様 / 青木 健 様 / 長谷川 悦子 様 / 香田 英匡 様（1部のみ） / 玉置 智之 様</p>
  <p>BNI Grano Chapter — Business Open Day 2026 第2回 / 第2部 円卓席次 7卓</p>
</footer>""",
        html,
        count=1,
        flags=re.S,
    )
    html = html.replace(
        '<style id="pageSize">@page { size: A4 landscape; margin: 8mm }</style>',
        '<style id="pageSize">@page { size: A3 landscape; margin: 8mm }</style>',
    )
    html = html.replace("const STORAGE_KEY = 'seating2-edits-v5';", "const STORAGE_KEY = 'bod2-seating7-edits-v4';")
    html = html.replace("軸メンバー（各卓に1人）", "ファシリテーター（各卓に1人）")
    html = html.replace(
        ".pattern-page-label{ display:none }\n</style>",
        EXTRA_CSS_7 + "\n.pattern-page-label{ display:none }\n</style>",
    )
    html = html.replace(
        "    document.getElementById('btnCopyJson').addEventListener('click', copyJson);\n  }\n})();",
        "    document.getElementById('btnCopyJson').addEventListener('click', copyJson);\n  }\n"
        + S.EXTRA_JS
        + "\n})();",
    )
    DST.write_text(html, encoding="utf-8")
    print(f"Wrote {DST} ({DST.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
