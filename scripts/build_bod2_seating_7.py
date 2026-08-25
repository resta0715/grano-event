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


def vendor_html_7() -> str:
    cells = []
    for i, (kind, name, prod) in enumerate(S.VENDORS, start=1):
        hon = " 様" if kind == "v" else ""
        cells.append(
            f'<div class="vendor-booth {kind}" data-booth="{i}" data-kind="{kind}">'
            f'<span class="booth-num">{i}</span>'
            f'<span class="nm">{name}{hon}</span>'
            f'<span class="prod">{prod}</span></div>'
        )
    return (
        '<section class="vendor-section" aria-label="出店ブース">\n'
        '  <div class="vendor-l">\n    '
        + "\n    ".join(cells)
        + "\n  </div>\n</section>"
    )


def pattern_html_7(label: str, title: str, tables: list[list[tuple[str, str]]]) -> str:
    hide = ' style="display:none"' if label == "B" else ""
    row1 = "\n".join(S.table_html(i, tables[i - 1]) for i in (1, 2, 3))
    row2 = "\n".join(S.table_html(i, tables[i - 1]) for i in (4, 5))
    row3 = "\n".join(S.table_html(i, tables[i - 1]) for i in (6, 7))
    return f"""<section class="tables-pattern" data-pattern="{label}"{hide}>
  <p class="pattern-page-label" aria-hidden="true">{title}</p>
  <p class="facil-note">各卓の中央上部の席がファシリテーターです</p>
  <div class="tables-row tables-row-3">
{row1}
  </div>
  <div class="tables-row tables-row-2">
{row2}
  </div>
  <div class="tables-row tables-row-2">
{row3}
  </div>
{vendor_html_7()}
</section>"""


EXTRA_CSS_7 = S.EXTRA_CSS + """
.table-count,.floor-hint,.paper-note,.legend,.hero-sub{ display:none !important; }
.hero{ padding:10px 12px 2px !important; }
.tables-wrap{ padding:0 10px 8px !important; }
.tables-row{ gap:10px !important; margin-bottom:8px !important; }
.table-wrap{ max-width:460px !important; }
.facil-note{
  display:block !important;
  text-align:center;
  font-size:15px;
  font-weight:800;
  color:#222;
  letter-spacing:.04em;
  margin:2px 0 8px;
}
.seat-c{
  background:#fff !important;
  border:1px solid #777 !important;
  color:#111 !important;
  box-shadow:none !important;
  width:37% !important;
  height:17.5% !important;
  font-size:17px !important;
}
.seat-c .nm{ font-size:17px !important; font-weight:800 !important; line-height:1.15 !important; }
.table-name{ font-size:32px !important; }
.seat-c.a{
  background:#d5d5d5 !important;
  border:2px solid #222 !important;
  font-weight:800 !important;
}
.seat-c.v{
  background:#ececec !important;
  border:1.2px solid #444 !important;
}
.seat-c.v.hostmatch{
  background:#e2e2e2 !important;
  border:1.2px solid #333 !important;
}
.seat-c.v .nm{ display:inline !important; }
.seat-c.v .sm{
  display:inline !important;
  font-size:1em !important;
  font-weight:800 !important;
  color:#111 !important;
  margin-left:.15em;
}
.tables-row-2{
  grid-template-columns:repeat(2, minmax(0,1fr)) !important;
  max-width:72% !important;
  margin-left:auto !important;
  margin-right:auto !important;
}
.seat-c:not(.v) .sm:not(.empty-lbl){ display:none !important; }
.seat-c.v.hostmatch::after{ display:none !important; }
.vendor-l{
  display:grid !important;
  grid-template-columns:repeat(5, 124px);
  grid-template-areas:
    "b1 .  .  .  ."
    "b2 .  .  .  ."
    "b3 .  .  .  ."
    "b4 b5 b6 b7 b8";
  width:max-content;
  max-width:100%;
  margin:6px 0 0;
  gap:6px;
  justify-items:start;
  align-items:start;
}
.vendor-l .vendor-booth:nth-child(1){ grid-area:b1; }
.vendor-l .vendor-booth:nth-child(2){ grid-area:b2; }
.vendor-l .vendor-booth:nth-child(3){ grid-area:b3; }
.vendor-l .vendor-booth:nth-child(4){ grid-area:b4; }
.vendor-l .vendor-booth:nth-child(5){ grid-area:b5; }
.vendor-l .vendor-booth:nth-child(6){ grid-area:b6; }
.vendor-l .vendor-booth:nth-child(7){ grid-area:b7; }
.vendor-l .vendor-booth:nth-child(8){ grid-area:b8; }
.vendor-booth{
  aspect-ratio:1 !important;
  width:124px !important;
  height:124px !important;
  min-height:124px !important;
  max-height:124px !important;
  padding:20px 8px 10px !important;
  background:#fff !important;
  border:1px solid #777 !important;
  box-shadow:none !important;
  justify-content:center !important;
}
.vendor-booth.v{
  background:#ececec !important;
  border-color:#444 !important;
}
.vendor-booth .nm{ font-size:20px !important; font-weight:800 !important; color:#111 !important; line-height:1.2 !important; }
.vendor-booth .prod{ font-size:15px !important; color:#333 !important; margin-top:4px !important; }
.vendor-booth .booth-num{ font-size:13px !important; color:#333 !important; }
@media print{
  .legend,.paper-note,.floor-hint,.table-count,.hero-pre,.hero-sub{ display:none !important; }
  .facil-note{
    display:block !important;
    font-size:11pt !important;
    font-weight:800 !important;
    color:#000 !important;
    margin:0 0 1.2mm !important;
  }
  .tables-row{ gap:1.6mm !important; margin-bottom:1.2mm !important; }
  .tables-row-3{
    grid-template-columns:repeat(3, minmax(0,1fr)) !important;
    max-width:90% !important;
    margin-left:auto !important;
    margin-right:auto !important;
  }
  .tables-row-2{
    grid-template-columns:repeat(2, minmax(0,1fr)) !important;
    max-width:62% !important;
    margin:0 auto 1.2mm !important;
  }
  .table-wrap{ max-width:54mm !important; }
  .table-name{ font-size:15pt !important; }
  .seat-c{
    width:38% !important;
    height:17% !important;
    font-size:11pt !important;
    padding:1px 3px !important;
  }
  .seat-c .nm, body.print-a3 .seat-c .nm{ font-size:11pt !important; }
  .vendor-section{ page-break-inside:auto !important; break-inside:auto !important; margin:0.6mm 0 0 !important; }
  .vendor-l{
    width:max-content !important;
    grid-template-columns:repeat(5, 20mm) !important;
    margin:0.4mm 0 0 !important;
    gap:1.5mm !important;
  }
  .seat-c{
    background:#fff !important;
    border:.55pt solid #666 !important;
    color:#000 !important;
    box-shadow:none !important;
  }
  .seat-c.a, body.print-a3 .seat-c.a{
    background:#d2d2d2 !important;
    border:1.1pt solid #111 !important;
    color:#000 !important;
  }
  .seat-c.v, body.print-a3 .seat-c.v{
    background:#e8e8e8 !important;
    border:.7pt solid #333 !important;
    color:#000 !important;
  }
  .seat-c.v.hostmatch, body.print-a3 .seat-c.v.hostmatch{
    background:#dedede !important;
    border:.7pt solid #222 !important;
  }
  .seat-c.v .sm, body.print-a3 .seat-c.v .sm{
    font-size:8.5pt !important;
    color:#000 !important;
    font-weight:800 !important;
  }
  .vendor-booth, body.print-a3 .vendor-booth{
    aspect-ratio:1 !important;
    width:20mm !important;
    height:20mm !important;
    min-height:20mm !important;
    max-height:20mm !important;
    padding:2.4mm 1.2mm 1.4mm !important;
    background:#fff !important;
    border:.7pt solid #555 !important;
  }
  .vendor-booth.v, body.print-a3 .vendor-booth.v{
    background:#e8e8e8 !important;
    border-color:#333 !important;
  }
  .vendor-booth .nm, body.print-a3 .vendor-booth .nm{ font-size:13pt !important; color:#000 !important; line-height:1.15 !important; }
  .vendor-booth .prod, body.print-a3 .vendor-booth .prod{ font-size:10pt !important; color:#222 !important; }
  .vendor-booth .booth-num, body.print-a3 .vendor-booth .booth-num{ font-size:9pt !important; }
}
"""

EXTRA_JS_7 = r"""
  function normalizeHonorifics(){
    document.querySelectorAll('.seat-c').forEach(seat => {
      const kind = seat.dataset.kind || '';
      const nm = seat.querySelector('.nm');
      const name = (nm ? nm.textContent : '').replace(/\s*様\s*$/,'').trim();
      if (kind === 'e' || !name){
        if (kind === 'e'){
          seat.innerHTML = '<span class="nm"></span><span class="sm empty-lbl">空席</span>';
        }
        return;
      }
      seat.innerHTML = kind === 'v'
        ? '<span class="nm">'+name+'</span><span class="sm hon-v">様</span>'
        : '<span class="nm">'+name+'</span>';
    });
  }
  normalizeHonorifics();
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
        '<a class="bar-btn" href="index.html">ハブ</a>\n    <a class="bar-btn" href="seating_part2.html">8卓版</a>\n    <a class="bar-btn" href="seating_part2_7.pdf?v=30">席次PDF</a>\n    <a class="bar-btn" href="memberlist.html">Members</a>',
    )
    html = html.replace(
        '<p class="hero-pre">Round Tables — 2026.5.27 (水) 第2部</p>',
        '<p class="hero-pre">Round Tables — 2026.8.26 (水) 第2回 · 7卓版</p>',
    )
    html = re.sub(r'<p class="hero-sub">.*?</p>\s*', "", html, count=1, flags=re.S)
    html = re.sub(r'<p class="paper-note">.*?</p>\s*', "", html, count=1, flags=re.S)
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
        r'<section class="vendor-section" aria-label="出店ブース">\s*'
        r'<p class="vendor-mark">— 会場後方 · 大人の文化祭.*?</section>',
        "",
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
  <p>※ 7卓版。全卓ファシリ。1卓=幸田 勝（伊藤 梢は普通席）。鈴木 優は全体司会。編集モード（?edit=1）で入れ替えできます。</p>
  <p>2部欠席メンバー：川戸 恒吾 / かわもと えつこ / 佐藤 秀哉 / 中山 朋子 / 熊澤 博之 ／ ビジター：大場 祐介 様 / イブ 様 / 星 寿美 様 / 青木 健 様 / 長谷川 悦子 様 / 香田 英匡 様（1部のみ） / 玉置 智之 様</p>
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
    html = html.replace("const STORAGE_KEY = 'seating2-edits-v5';", "const STORAGE_KEY = 'bod2-seating7-edits-v7';")
    html = html.replace("軸メンバー（各卓に1人）", "ファシリテーター（各卓に1人）")
    html = re.sub(
        r'<div class="legend".*?</div>',
        '<div class="legend" role="note">'
        "<span>濃い灰＝ファシリ</span>"
        "<span>薄い灰＝ビジター（様）</span>"
        "<span>白＝メンバー</span></div>",
        html,
        count=1,
        flags=re.S,
    )
    html = html.replace(
        ".pattern-page-label{ display:none }\n</style>",
        EXTRA_CSS_7 + "\n.pattern-page-label{ display:none }\n</style>",
    )
    html = html.replace(
        "    document.getElementById('btnCopyJson').addEventListener('click', copyJson);\n  }\n})();",
        "    document.getElementById('btnCopyJson').addEventListener('click', copyJson);\n  }\n"
        + S.EXTRA_JS
        + EXTRA_JS_7
        + "\n})();",
    )
    DST.write_text(html, encoding="utf-8")
    print(f"Wrote {DST} ({DST.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
