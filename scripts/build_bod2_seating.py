#!/usr/bin/env python3
"""BOD#2 第2部円卓席次 HTML を seating2.html から生成する。"""
from __future__ import annotations

import json
import re
from pathlib import Path

SRC = Path("/home/kota/grano-event/docs/seating2.html")
DST = Path("/home/kota/grano-event/docs/bod2/seating_part2.html")

MEMBERS = [
    "栗原 優",
    "上村 マリ",
    "飛山 佳枝",
    "小林 実穂",
    "岡崎 厚子",
    "鈴木 優",
    "川戸 恒吾",
    "熊澤 博之",
    "かわもと えつこ",
    "板倉 佳織",
    "尾﨑 直人",
    "龍造寺 亮",
    "宇部 光太",
    "佐藤 秀哉",
    "永吉 佐千子",
    "山野井 信夫",
    "小宮 雅哲",
    "髙橋 信博",
    "川端 綾華",
    "金指 佐江子",
    "植草 尚大",
    "新美 裕之",
    "大工原 葉子",
    "成瀬 優",
    "徳永 剛太",
    "あらい ひとみ",
    "田代 祐司",
    "川村 徹也",
    "伊藤 梢",
    "佐藤 風弥",
    "中山 朋子",
    "山田 研二",
    "小野 利隆",
    "上夷 未紗",
    "幸田 勝",
    "新井 真人",
]

# 卓1-4は5名、卓5-8は4名（計36）
TABLE_SIZES = [5, 5, 5, 5, 4, 4, 4, 4]
CAPACITY = 8

HOST_MAP = {
    "秋山 雅代": "宇部 光太",
    "大場 祐介": "小野 利隆",
    "磯田 忠良": "岡崎 厚子",
    "小林 良": "山野井 信夫",
    "新田 義矩": "川戸 恒吾",
    "早川 尚吾": "栗原 優",
    "古澤 萌愛": "山田 研二",
    "青木 健": "小宮 雅哲",
    "南 晴美": "永吉 佐千子",
    "長谷川 悦子": "岡崎 厚子",
    "阿部 綾香": "上村 マリ",
    "イブ": "小野 利隆",
    "柴 慎平": "山野井 信夫",
    "猪股 みお": "小野 利隆",
    "石川 清司": "大工原 葉子",
    "伊東 伸浩": "山田 研二",
    "千葉 麻衣": "新美 裕之",
    "香田 英匡": "あらい ひとみ",
    "大久保 仁": "川端 綾華",
    "星 寿美": "飛山 佳枝",
    "野口 久美子": "鈴木 優",
    "佐生 道代": "成瀬 優",
    "迫田 由美子": "永吉 佐千子",
    "加藤 一郎": "宇部 光太",
    "玉置 智之": "龍造寺 亮",
    "奧村 佳奈子": "上村 マリ",
    "奥村 佳奈子": "上村 マリ",
}

VENDORS = [
    ("v", "千葉 麻衣", "余生馬牧場"),
    ("v", "石川 清司", "ネイル・占い"),
    ("v", "磯田 忠良", "婦人服・バッグ"),
    ("v", "猪股 みお", "レモンケーキ"),
    ("v", "迫田 由美子", "わらび餅"),
    ("v", "佐生 道代", "シルクギャラリー"),
    ("m", "永吉 佐千子", "栄養製品"),
    ("m", "成瀬 優", "シルク染物"),
]


def tables_from_members() -> list[list[tuple[str, str]]]:
    tables: list[list[tuple[str, str]]] = []
    idx = 0
    for size in TABLE_SIZES:
        seats: list[tuple[str, str]] = []
        chunk = MEMBERS[idx : idx + size]
        idx += size
        for i, name in enumerate(chunk):
            seats.append(("a" if i == 0 else "m", name))
        while len(seats) < CAPACITY:
            seats.append(("e", ""))
        tables.append(seats)
    return tables


def seat_html(kind: str, name: str) -> str:
    if kind == "e":
        return (
            '<div class="seat-c e" data-kind="e">'
            '<span class="nm"></span><span class="sm empty-lbl">空席</span></div>'
        )
    return (
        f'<div class="seat-c {kind}" data-kind="{kind}">'
        f'<span class="nm">{name}</span><span class="sm">様</span></div>'
    )


def table_html(table_no: int, seats: list[tuple[str, str]]) -> str:
    filled = sum(1 for k, _ in seats if k != "e")
    count = f"{filled}名" if filled == CAPACITY else f"{filled}名 / {CAPACITY}席"
    inner = "\n      ".join(seat_html(k, n) for k, n in seats)
    return f"""    <div class="table-wrap" data-table="{table_no}" data-seats="{CAPACITY}" data-capacity="{CAPACITY}" data-filled="{filled}">
      <div class="table-circle">
        <span class="table-name">{table_no}卓</span>
        <span class="table-count">{count}</span>
      </div>
      {inner}
      <div class="table-capacity" aria-label="{table_no}卓の席数"><button type="button" class="cap-btn" data-cap="7">7</button><button type="button" class="cap-btn" data-cap="8">8</button></div>
    </div>"""


def pattern_html(label: str, title: str, tables: list[list[tuple[str, str]]]) -> str:
    hide = ' style="display:none"' if label == "B" else ""
    row1 = "\n".join(table_html(i, tables[i - 1]) for i in (1, 2, 3))
    row2 = "\n".join(table_html(i, tables[i - 1]) for i in (4, 5, 6))
    row3 = "\n".join(table_html(i, tables[i - 1]) for i in (7, 8))
    return f"""<section class="tables-pattern" data-pattern="{label}"{hide}>
  <p class="pattern-page-label" aria-hidden="true">{title}</p>
  <div class="tables-row tables-row-3">
{row1}
  </div>
  <div class="tables-row tables-row-3">
{row2}
  </div>
  <div class="tables-row tables-row-2">
{row3}
  </div>
</section>"""


def vendor_html() -> str:
    cells = []
    for i, (kind, name, prod) in enumerate(VENDORS, start=1):
        cells.append(
            f'<div class="vendor-booth {kind}" data-booth="{i}" data-kind="{kind}">'
            f'<span class="booth-num">{i}</span>'
            f'<span class="nm">{name}</span>'
            f'<span class="prod">{prod}</span>'
            f'<span class="sm">様</span></div>'
        )
    return (
        '<section class="vendor-section" aria-label="出店ブース">\n'
        '  <p class="vendor-mark">— 会場後方 · 大人の夏祭り 出店ブース —</p>\n'
        '  <div class="vendor-row">\n    '
        + "\n    ".join(cells)
        + "\n  </div>\n</section>"
    )


def palette_html() -> str:
    chips = "".join(
        f'<button type="button" class="pool-chip" data-name="{n}">{n}</button>'
        for n in HOST_MAP
        if n != "青木 健"
    )
    return f"""<section class="pool-section" id="visitorPool" hidden>
  <h2 class="pool-title">未配置ビジター（クリック → 空席をクリックで配置）</h2>
  <p class="pool-sub">新しいメンバー36名は各卓に仮配置済みです。ビジターは空席へ置いてください。空席のダブルクリックでも名前入力できます。</p>
  <div class="pool-chips">{chips}</div>
</section>"""


EXTRA_CSS = """
.vendor-row{ grid-template-columns:repeat(8, minmax(0, 1fr)) !important; }
.pool-section{
  display:none;
  max-width:1240px; margin:0 auto 28px; padding:16px 18px;
  background:#fff; border:1px solid var(--border); border-radius:12px;
}
body.edit-mode .pool-section{ display:block }
.pool-title{ font-size:15px; font-weight:800; color:var(--navy); margin-bottom:4px }
.pool-sub{ font-size:12px; color:var(--muted); margin-bottom:10px; line-height:1.6 }
.pool-chips{ display:flex; flex-wrap:wrap; gap:6px }
.pool-chip{
  font-family:inherit; font-size:11px; font-weight:700;
  padding:5px 10px; border-radius:999px; cursor:pointer;
  background:var(--visitor); border:1px solid var(--visitor-bd); color:var(--ink);
}
.pool-chip:hover,.pool-chip.active{ background:var(--navy); color:#fff; border-color:var(--navy) }
.pool-chip.used{ opacity:.35; text-decoration:line-through; pointer-events:none }
@media print{ .pool-section{ display:none !important } }
"""

EXTRA_JS = r"""
  // -------- 空席へ名前入力 / ビジターパレット --------
  let pendingVisitor = null;
  function usedVisitorNames(){
    const names = new Set();
    document.querySelectorAll('.seat-c[data-kind="v"] .nm').forEach(el => {
      const n = el.textContent.trim();
      if (n) names.add(n);
    });
    return names;
  }
  function refreshPool(){
    const used = usedVisitorNames();
    document.querySelectorAll('.pool-chip').forEach(btn => {
      btn.classList.toggle('used', used.has(btn.dataset.name));
      if (pendingVisitor !== btn.dataset.name) btn.classList.remove('active');
    });
  }
  function setSeatPerson(seat, name, kind){
    seat.classList.remove('m','v','u','a','e','hostmatch');
    seat.classList.add(kind);
    seat.dataset.kind = kind;
    if (kind === 'e' || !name){
      seat.innerHTML = '<span class="nm"></span><span class="sm empty-lbl">空席</span>';
    } else {
      seat.innerHTML = '<span class="nm">'+name+'</span><span class="sm">様</span>';
    }
    refreshSeatMeta(seat);
    const wrap = seat.closest('.table-wrap');
    if (wrap) updateTableCount(wrap);
    refreshPool();
  }
  function onSeatDblClick(e){
    const s = e.currentTarget;
    const current = s.querySelector('.nm')?.textContent.trim() || '';
    const name = prompt('お名前（空欄で空席）', current);
    if (name === null) return;
    if (!name.trim()){
      setSeatPerson(s, '', 'e');
    } else {
      const kind = s.dataset.kind === 'e' ? 'v' : (s.dataset.kind || 'v');
      setSeatPerson(s, name.trim(), kind);
    }
    if (typeof save === 'function') save();
  }
  if (isEdit){
    const pool = document.getElementById('visitorPool');
    if (pool) pool.hidden = false;
    document.querySelectorAll('.pool-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('used')) return;
        pendingVisitor = (pendingVisitor === btn.dataset.name) ? null : btn.dataset.name;
        document.querySelectorAll('.pool-chip').forEach(b => b.classList.toggle('active', b.dataset.name === pendingVisitor));
      });
    });
    document.querySelectorAll('.seat-c').forEach(s => {
      s.addEventListener('click', function(e){
        if (!pendingVisitor || this.dataset.kind !== 'e') return;
        e.stopImmediatePropagation();
        setSeatPerson(this, pendingVisitor, 'v');
        pendingVisitor = null;
        if (typeof save === 'function') save();
        refreshPool();
      }, true);
      s.addEventListener('dblclick', onSeatDblClick);
    });
    refreshPool();
  }
"""


def main() -> None:
    html = SRC.read_text(encoding="utf-8")
    tables = tables_from_members()
    wrap = (
        '<div class="tables-wrap">\n'
        + pattern_html("A", "パターン A — 第2部 開始時", tables)
        + "\n"
        + pattern_html("B", "席替え後（パターン B）", tables)
        + "\n</div>"
    )

    html = html.replace(
        "<title>2部 円卓席次表｜Business Open Day 2026 — BNI Grano Chapter</title>",
        "<title>2部 円卓席次表｜BOD 2026 第2回 — 大人の夏祭り</title>",
    )
    html = html.replace(
        "Business Open Day 2026 第2部 円卓席次（パターンA・B切替対応）。",
        "Business Open Day 2026 第2回（2026.8.26）第2部 円卓席次。新メンバー36名で作成。",
    )
    html = html.replace(
        '<span class="bar-title">Business Open Day 2026 — 第2部 円卓席次</span>',
        '<span class="bar-title">BOD 2026 第2回 — 第2部 円卓席次（大人の夏祭り）</span>',
    )
    html = html.replace(
        '<a class="bar-btn" href="seating.html">第1部</a>\n    <a class="bar-btn" href="announcement_page.html">Event</a>\n    <a class="bar-btn" href="members.html">Members</a>',
        '<a class="bar-btn" href="index.html">ハブ</a>\n    <a class="bar-btn" href="exhibitors.html">出店者</a>\n    <a class="bar-btn" href="memberlist.html">Members</a>',
    )
    html = html.replace(
        '<p class="hero-pre">Round Tables — 2026.5.27 (水) 第2部</p>',
        '<p class="hero-pre">Round Tables — 2026.8.26 (水) 第2回 · 大人の夏祭り</p>',
    )
    html = html.replace(
        '<p class="hero-sub">8卓 × 7〜8名 / 3-3-2 配置 — 席替えあり（パターンA/B）</p>',
        '<p class="hero-sub">8卓 × 7〜8名 / 新メンバー36名を仮配置 — 空席へビジターを置いて作成</p>',
    )

    html = re.sub(
        r'<div class="tables-wrap">.*?</div>\n\n<section class="vendor-section"',
        wrap + "\n\n" + palette_html() + '\n\n<section class="vendor-section"',
        html,
        count=1,
        flags=re.S,
    )
    html = re.sub(
        r'<section class="vendor-section".*?</section>',
        vendor_html(),
        html,
        count=1,
        flags=re.S,
    )
    html = re.sub(
        r'<section class="pair-section">.*?</section>',
        '<section class="pair-section">\n  <h2 class="pair-title">招待者対応表</h2>\n  <p class="pair-sub">ビジターを配置すると、招待メンバーと同卓かどうかが自動で反映されます。</p>\n  <div class="pair-tablewrap"><table class="pair-table"><thead><tr><th>ビジター</th><th>招待メンバー</th><th>パターンA</th><th>席替え後（B）</th></tr></thead><tbody></tbody></table></div>\n</section>',
        html,
        count=1,
        flags=re.S,
    )
    html = re.sub(
        r'<script id="hostMap" type="application/json">.*?</script>',
        '<script id="hostMap" type="application/json">'
        + json.dumps(HOST_MAP, ensure_ascii=False)
        + "</script>",
        html,
        count=1,
        flags=re.S,
    )
    html = re.sub(
        r'<footer class="footer">.*?</footer>',
        """<footer class="footer">
  <p>※ メンバー36名（2026.8.5名簿）を各卓へ仮配置しています。編集モード（?edit=1）でドラッグ＆ドロップ、空席ダブルクリック、未配置ビジターのクリック配置ができます。</p>
  <p>出店ブースはフォーム回答（ビジター6 / メンバー2）。配置・氏名は当日変更となる場合があります。</p>
  <p>BNI Grano Chapter — Business Open Day 2026 第2回 / 第2部 円卓席次</p>
</footer>""",
        html,
        count=1,
        flags=re.S,
    )
    html = html.replace("const STORAGE_KEY = 'seating2-edits-v5';", "const STORAGE_KEY = 'bod2-seating2-edits-v1';")
    html = html.replace(
        "['seating2-edits-v1','seating2-edits-v2','seating2-edits-v3','seating2-edits-v4']",
        "['seating2-edits-v1','seating2-edits-v2','seating2-edits-v3','seating2-edits-v4','seating2-edits-v5']",
    )
    html = html.replace(".pattern-page-label{ display:none }\n</style>", EXTRA_CSS + "\n.pattern-page-label{ display:none }\n</style>")
    html = html.replace(
        "    document.getElementById('btnCopyJson').addEventListener('click', copyJson);\n  }\n})();",
        "    document.getElementById('btnCopyJson').addEventListener('click', copyJson);\n  }\n"
        + EXTRA_JS
        + "\n})();",
    )

    DST.write_text(html, encoding="utf-8")
    print(f"Wrote {DST} ({DST.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
