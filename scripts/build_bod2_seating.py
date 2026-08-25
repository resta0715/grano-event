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

# 欠席(X)の青木は置かない。彌富は招待者未記入。
VISITORS: list[tuple[str, str | None]] = [
    ("秋山 雅代", "宇部 光太"),
    ("大場 祐介", "小野 利隆"),
    ("磯田 忠良", "岡崎 厚子"),
    ("小林 良", "山野井 信夫"),
    ("新田 義矩", "川戸 恒吾"),
    ("早川 尚吾", "栗原 優"),
    ("古澤 萌愛", "山田 研二"),
    ("南 晴美", "永吉 佐千子"),
    ("長谷川 悦子", "岡崎 厚子"),
    ("阿部 綾香", "上村 マリ"),
    ("イブ", "小野 利隆"),
    ("柴 慎平", "山野井 信夫"),
    ("猪股 みお", "小野 利隆"),
    ("石川 清司", "大工原 葉子"),
    ("伊東 伸浩", "山田 研二"),
    ("千葉 麻衣", "新美 裕之"),
    ("香田 英匡", "あらい ひとみ"),
    ("大久保 仁", "川端 綾華"),
    ("星 寿美", "飛山 佳枝"),
    ("野口 久美子", "鈴木 優"),
    ("佐生 道代", "成瀬 優"),
    ("迫田 由美子", "永吉 佐千子"),
    ("加藤 一郎", "宇部 光太"),
    ("玉置 智之", "龍造寺 亮"),
    ("彌富 久美子", None),
    ("奥村 佳奈子", "上村 マリ"),
]

# 2部欠席（佐藤修也＝佐藤 秀哉）
ABSENT_MEMBERS = {"川戸 恒吾", "かわもと えつこ", "佐藤 秀哉", "中山 朋子"}
ABSENT_VISITORS = {
    "イブ",
    "大場 祐介",
    "星 寿美",
    "青木 健",
    "長谷川 悦子",  # 休み
    "香田 英匡",  # 1部のみ
}

# 各卓1人。鈴木は全体司会のため外し、2卓は小野。
FACILITATORS = {
    "伊藤 梢",
    "小野 利隆",
    "小宮 雅哲",
    "山野井 信夫",
    "新美 裕之",
    "あらい ひとみ",
    "永吉 佐千子",
    "幸田 勝",
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


def host_table_index(tables: list[list[tuple[str, str]]]) -> dict[str, int]:
    out: dict[str, int] = {}
    for ti, seats in enumerate(tables):
        for kind, name in seats:
            if kind in {"m", "a"} and name:
                out[name] = ti
    return out


def put_visitor(seats: list[tuple[str, str]], name: str) -> bool:
    for i, (kind, _) in enumerate(seats):
        if kind == "e":
            seats[i] = ("v", name)
            return True
    return False


def interleave(seats: list[tuple[str, str]]) -> list[tuple[str, str]]:
    axis = [s for s in seats if s[0] == "a"]
    members = [s for s in seats if s[0] == "m"]
    visitors = [s for s in seats if s[0] == "v"]
    empty = [s for s in seats if s[0] == "e"]
    mixed: list[tuple[str, str]] = []
    if axis:
        mixed.append(axis[0])
        members = [("m", n) for _k, n in axis[1:]] + members
    while members or visitors:
        if visitors:
            mixed.append(visitors.pop(0))
        if members:
            mixed.append(members.pop(0))
    mixed.extend(empty)
    return mixed


def place_visitors(
    tables: list[list[tuple[str, str]]],
    *,
    leftover_reversed: bool = False,
) -> list[list[tuple[str, str]]]:
    tables = [list(seats) for seats in tables]
    hosts = host_table_index(tables)
    leftover: list[tuple[str, str | None]] = []
    for name, host in VISITORS:
        if name in ABSENT_VISITORS:
            continue
        ti = hosts.get(host) if host else None
        if ti is None or not put_visitor(tables[ti], name):
            leftover.append((name, host))
    order = range(len(tables) - 1, -1, -1) if leftover_reversed else range(len(tables))
    for name, _host in leftover:
        placed = False
        for ti in order:
            if put_visitor(tables[ti], name):
                placed = True
                break
        if not placed:
            raise RuntimeError(f"no seat for {name}")
    return [interleave(seats) for seats in tables]


def swap_visitors(tables: list[list[tuple[str, str]]], name_a: str, name_b: str) -> None:
    loc: dict[str, tuple[int, int]] = {}
    for ti, seats in enumerate(tables):
        for i, (kind, name) in enumerate(seats):
            if name in {name_a, name_b}:
                loc[name] = (ti, i)
    if name_a not in loc or name_b not in loc:
        raise RuntimeError(f"swap failed: {name_a} / {name_b}")
    (ta, ia), (tb, ib) = loc[name_a], loc[name_b]
    tables[ta][ia], tables[tb][ib] = tables[tb][ib], tables[ta][ia]


def take_named(tables: list[list[tuple[str, str]]], name: str) -> str | None:
    for seats in tables:
        for i, (kind, nm) in enumerate(seats):
            if nm == name:
                seats[i] = ("e", "")
                return kind
    return None


def put_named(seats: list[tuple[str, str]], kind: str, name: str) -> bool:
    for i, (k, _) in enumerate(seats):
        if k == "e":
            seats[i] = (kind, name)
            return True
    return False


def filled_count(seats: list[tuple[str, str]]) -> int:
    return sum(1 for _k, name in seats if name)


def has_empty(seats: list[tuple[str, str]]) -> bool:
    return any(kind == "e" for kind, _ in seats)


PINNED_NAMES = {
    "小野 利隆",
    "猪股 みお",
    "新田 義矩",
    "野口 久美子",
    "大久保 仁",
    "川端 綾華",
    "加藤 一郎",
    "宇部 光太",
    "新美 裕之",
    "小宮 雅哲",
    "幸田 勝",
    "千葉 麻衣",
    "永吉 佐千子",
    "迫田 由美子",
    "あらい ひとみ",
    "伊藤 梢",
}


def is_movable(seats: list[tuple[str, str]], kind: str, name: str) -> bool:
    if not name or kind in {"e", "a"} or name in PINNED_NAMES:
        return False
    here = {n for _k, n in seats if n}
    if kind == "v":
        host = HOST_MAP.get(name)
        return not host or host not in here
    for k, n in seats:
        if k == "v" and HOST_MAP.get(n) == name:
            return False
    return True


def even_out_tables(tables: list[list[tuple[str, str]]]) -> list[list[tuple[str, str]]]:
    """招待者同卓は崩さず、各卓を6〜7名に寄せる。"""
    tables = [list(seats) for seats in tables]

    def move_one(donors: list[int], receivers: list[int]) -> bool:
        for di in donors:
            people: list[tuple[int, int, str, str]] = []
            for i, (kind, name) in enumerate(tables[di]):
                if is_movable(tables[di], kind, name):
                    people.append((0 if kind == "v" else 1, i, kind, name))
            people.sort()
            for _rank, _i, kind, name in people:
                host = HOST_MAP.get(name) if kind == "v" else None
                host_ti = find_table(tables, host) if host else None
                ordered = sorted(
                    receivers,
                    key=lambda ri: (0 if ri == host_ti else 1, filled_count(tables[ri])),
                )
                if kind != "v":
                    visitor_tables = {
                        find_table(tables, v)
                        for v, h in HOST_MAP.items()
                        if h == name and v not in ABSENT_VISITORS
                    }
                    ordered = sorted(
                        receivers,
                        key=lambda ri: (0 if ri in visitor_tables else 1, filled_count(tables[ri])),
                    )
                for ri in ordered:
                    if ri == di or not has_empty(tables[ri]):
                        continue
                    take_named(tables, name)
                    if not put_named(tables[ri], kind, name):
                        put_named(tables[di], kind, name)
                        continue
                    return True
        return False

    for _ in range(24):
        counts = [filled_count(s) for s in tables]
        donors = sorted((i for i, c in enumerate(counts) if c >= 8), key=lambda i: -counts[i])
        receivers = sorted((i for i, c in enumerate(counts) if c <= 5), key=lambda i: counts[i])
        if not donors or not receivers:
            donors = sorted((i for i, c in enumerate(counts) if c >= 8), key=lambda i: -counts[i])
            receivers = sorted((i for i, c in enumerate(counts) if c < 7), key=lambda i: counts[i])
        if not donors or not receivers:
            break
        if not move_one(donors, receivers):
            break
    return tables


def ensure_named_at(
    tables: list[list[tuple[str, str]]],
    name: str,
    table_i: int,
    fallback_kind: str = "m",
) -> None:
    if find_table(tables, name) == table_i + 1:
        return
    if has_empty(tables[table_i]):
        kind = take_named(tables, name) or fallback_kind
        if kind == "a":
            kind = "m"
        if not put_named(tables[table_i], kind, name):
            raise RuntimeError(f"{table_i + 1}卓に {name} を置けません")
        return
    for kind, other in tables[table_i]:
        if other and other not in PINNED_NAMES and other not in FACILITATORS:
            swap_visitors(tables, name, other)
            return
    raise RuntimeError(f"{table_i + 1}卓に {name} の交換相手がありません")


def apply_facilitators(tables: list[list[tuple[str, str]]]) -> None:
    for seats in tables:
        for i, (kind, name) in enumerate(seats):
            if not name or kind == "v":
                continue
            seats[i] = ("a" if name in FACILITATORS else "m", name)


KEEP_VISITOR_WITH_HOST = {
    "猪股 みお",
    "大久保 仁",
    "加藤 一郎",
    "千葉 麻衣",
    "迫田 由美子",
}


def visitor_count(seats: list[tuple[str, str]]) -> int:
    return sum(1 for kind, name in seats if kind == "v" and name)


def visitor_spread_rank(seats: list[tuple[str, str]], name: str) -> int:
    """小さいほど動かしてよい。99は固定。"""
    if name in PINNED_NAMES or name in KEEP_VISITOR_WITH_HOST:
        return 99
    host = HOST_MAP.get(name)
    here = {n for _k, n in seats if n}
    if not host or host not in here or host in ABSENT_MEMBERS:
        return 0
    extras = sum(1 for k, n in seats if k == "v" and HOST_MAP.get(n) == host)
    return 1 if extras >= 2 else 2


def even_out_visitors(tables: list[list[tuple[str, str]]]) -> list[list[tuple[str, str]]]:
    """各卓のビジターを2〜3名に寄せる。指定の招待者同卓は崩さない。"""
    tables = [list(seats) for seats in tables]
    for _ in range(24):
        vcounts = [visitor_count(s) for s in tables]
        hi, lo = max(vcounts), min(vcounts)
        if hi - lo <= 1 and hi <= 3:
            break
        donors = sorted((i for i, c in enumerate(vcounts) if c == hi), reverse=False)
        receivers = sorted((i for i, c in enumerate(vcounts) if c == lo))
        moved = False
        for di in donors:
            cands = sorted(
                (
                    (visitor_spread_rank(tables[di], name), name)
                    for kind, name in tables[di]
                    if kind == "v" and name
                ),
            )
            cands = [(r, n) for r, n in cands if r < 99]
            for _rank, name in cands:
                for ri in receivers:
                    if ri == di:
                        continue
                    if has_empty(tables[ri]):
                        kind = take_named(tables, name) or "v"
                        if put_named(tables[ri], kind, name):
                            moved = True
                            break
                    for kind, other in tables[ri]:
                        if (
                            kind in {"m", "a"}
                            and other
                            and other not in PINNED_NAMES
                            and other not in FACILITATORS
                        ):
                            swap_visitors(tables, name, other)
                            moved = True
                            break
                    if moved:
                        break
                if moved:
                    break
            if moved:
                break
        if not moved:
            break
    return tables


def rebalance_members_only(tables: list[list[tuple[str, str]]]) -> list[list[tuple[str, str]]]:
    """ビジター配置は維持したまま、8名卓からメンバーを6名卓へ移す。"""
    tables = [list(seats) for seats in tables]
    for _ in range(12):
        counts = [filled_count(s) for s in tables]
        if max(counts) <= 7:
            break
        donors = [i for i, c in enumerate(counts) if c >= 8]
        receivers = [i for i, c in enumerate(counts) if c <= 6 and has_empty(tables[i])]
        if not donors or not receivers:
            break
        moved = False
        for di in donors:
            for kind, name in tables[di]:
                if kind not in {"m", "a"} or not name:
                    continue
                if name in PINNED_NAMES or name in FACILITATORS:
                    continue
                for ri in receivers:
                    take_named(tables, name)
                    if put_named(tables[ri], "m", name):
                        moved = True
                        break
                    put_named(tables[di], kind, name)
                if moved:
                    break
            if moved:
                break
        if not moved:
            break
    return tables


def apply_day_adjustments(tables: list[list[tuple[str, str]]]) -> list[list[tuple[str, str]]]:
    absent = ABSENT_MEMBERS | ABSENT_VISITORS
    for seats in tables:
        for i, (_kind, name) in enumerate(seats):
            if name in absent:
                seats[i] = ("e", "")
    # 小野は野口・新田のいる2卓へ。猪股（招待：小野）も同卓へ追随
    for name, fallback_kind in (("小野 利隆", "m"), ("猪股 みお", "v")):
        kind = take_named(tables, name) or fallback_kind
        if kind == "a":
            kind = "m"
        if not put_named(tables[1], kind, name):
            raise RuntimeError(f"2卓に {name} の空席がありません")
    # 川端の招待ビジター（大久保）は4卓へ。空いた3卓（宇部）に加藤を戻す
    for name, table_i, fallback_kind, label in (
        ("大久保 仁", 3, "v", "4卓"),
        ("加藤 一郎", 2, "v", "3卓"),
    ):
        kind = take_named(tables, name) or fallback_kind
        if kind == "a":
            kind = "m"
        if not put_named(tables[table_i], kind, name):
            raise RuntimeError(f"{label}に {name} の空席がありません")
    tables = even_out_tables(tables)
    # 小宮 ↔ 永吉＋迫田（セット）。3卓ファシリ=小宮、7卓ファシリ=永吉
    for name, table_i, fallback in (
        ("小宮 雅哲", 2, "m"),
        ("永吉 佐千子", 6, "m"),
        ("迫田 由美子", 6, "v"),
    ):
        ensure_named_at(tables, name, table_i, fallback)
    # ファシリを各卓に1人（2卓=小野 / 5卓=新美 / 8卓=幸田）
    ensure_named_at(tables, "伊藤 梢", 0)
    ensure_named_at(tables, "新美 裕之", 4)
    ensure_named_at(tables, "千葉 麻衣", 4, "v")
    ensure_named_at(tables, "あらい ひとみ", 5)
    ensure_named_at(tables, "幸田 勝", 7)
    tables = even_out_visitors(tables)
    tables = rebalance_members_only(tables)
    apply_facilitators(tables)
    return [interleave(seats) for seats in tables]


def seat_html(kind: str, name: str, members_here: set[str] | None = None) -> str:
    if kind == "e":
        return (
            '<div class="seat-c e" data-kind="e">'
            '<span class="nm"></span><span class="sm empty-lbl">空席</span></div>'
        )
    if kind != "v":
        return (
            f'<div class="seat-c {kind}" data-kind="{kind}">'
            f'<span class="nm">{name}</span><span class="sm">様</span></div>'
        )
    host = HOST_MAP.get(name)
    cls = "seat-c v"
    extra = ""
    if host:
        extra = f' data-host="{host}" title="招待者：{host} 様"'
        if members_here and host in members_here:
            cls += " hostmatch"
    return (
        f'<div class="{cls}" data-kind="v"{extra}>'
        f'<span class="nm">{name}</span><span class="sm">様</span></div>'
    )


def table_html(table_no: int, seats: list[tuple[str, str]]) -> str:
    filled = sum(1 for k, _ in seats if k != "e")
    count = f"{filled}名" if filled == CAPACITY else f"{filled}名 / {CAPACITY}席"
    members_here = {n for k, n in seats if k in {"m", "a"} and n}
    inner = "\n      ".join(seat_html(k, n, members_here) for k, n in seats)
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


def find_table(tables: list[list[tuple[str, str]]], name: str) -> int | None:
    for ti, seats in enumerate(tables, start=1):
        if any(n == name for _k, n in seats):
            return ti
    return None


def pair_cell(tables: list[list[tuple[str, str]]], visitor: str, host: str | None) -> str:
    if visitor in ABSENT_VISITORS:
        return "<span class='dim'>2部欠席</span>"
    vt = find_table(tables, visitor)
    if vt is None:
        return "<span class='dim'>—</span>"
    if not host:
        return f"<span class='dim'>{vt}卓（招待者未記入）</span>"
    ht = find_table(tables, host)
    if ht == vt:
        return f"<span class='ok'>◎ {vt}卓 同卓</span>"
    if ht is None:
        return f"<span class='ng'>{vt}卓（招待者は不在）</span>"
    return f"<span class='ng'>{vt}卓（{host}は{ht}卓）</span>"


def pair_section_html(
    tables_a: list[list[tuple[str, str]]],
    tables_b: list[list[tuple[str, str]]],
) -> str:
    both = same_a = same_b = other = nohost = 0
    rows: list[str] = []
    for visitor, host in VISITORS:
        a = pair_cell(tables_a, visitor, host)
        b = pair_cell(tables_b, visitor, host)
        ok_a = "同卓" in a
        ok_b = "同卓" in b
        if visitor in ABSENT_VISITORS:
            host_lbl = host or "—"
            if host in ABSENT_MEMBERS:
                host_lbl = f"{host}<span class='abs'>（2部欠席）</span>"
            rows.append(
                f"<tr><td>{visitor} <span class='hon'>様</span></td>"
                f"<td>{host_lbl}</td><td>{a}</td><td>{b}</td></tr>"
            )
            continue
        if not host:
            nohost += 1
        elif ok_a and ok_b:
            both += 1
        elif ok_a:
            same_a += 1
        elif ok_b:
            same_b += 1
        else:
            other += 1
        host_lbl = host or "—"
        if host in ABSENT_MEMBERS:
            host_lbl = f"{host}<span class='abs'>（2部欠席）</span>"
        rows.append(
            f"<tr><td>{visitor} <span class='hon'>様</span></td>"
            f"<td>{host_lbl}</td><td>{a}</td><td>{b}</td></tr>"
        )
    summary = (
        f"両パターン同卓 <b>{both}</b>名 ／ Aのみ同卓 <b>{same_a}</b>名 ／ "
        f"Bのみ同卓 <b>{same_b}</b>名 ／ 両パターン他卓 <b>{other}</b>名 ／ "
        f"招待者未記入 <b>{nohost}</b>名"
    )
    return (
        '<section class="pair-section">\n'
        '  <h2 class="pair-title">招待者対応表</h2>\n'
        '  <p class="pair-sub">仮配置です。招待メンバーと同卓なら「◎ 同卓」。入りきらない場合は他卓へ回しています。</p>\n'
        f'  <p class="pair-summary">{summary}</p>\n'
        '  <div class="pair-tablewrap"><table class="pair-table"><thead>'
        "<tr><th>ビジター</th><th>招待メンバー</th><th>パターンA</th><th>席替え後（B）</th></tr>"
        "</thead><tbody>"
        + "".join(rows)
        + "</tbody></table></div>\n</section>"
    )


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
        if n not in ABSENT_VISITORS
    )
    return f"""<section class="pool-section" id="visitorPool" hidden>
  <h2 class="pool-title">未配置ビジター（クリック → 空席をクリックで配置）</h2>
  <p class="pool-sub">ビジターは招待者と同じ卓を優先して仮配置済みです。打ち消し線は配置済み。空席のダブルクリックでも名前を直せます。</p>
  <div class="pool-chips">{chips}</div>
</section>"""


EXTRA_CSS = """
.vendor-row{ grid-template-columns:repeat(8, minmax(0, 1fr)) !important; }
.seat-c{ width:34% !important; height:16% !important; font-size:15px !important; }
.seat-c .nm{ font-size:16px !important; font-weight:800 !important; line-height:1.2 !important; }
.seat-c .sm{ font-size:12px !important; }
.table-name{ font-size:28px !important; }
.table-count{ font-size:13px !important; }
.legend{ font-size:14px !important; gap:18px !important; }
.hero h1{ font-size:clamp(26px,4vw,34px) !important; }
.hero-sub{ font-size:15px !important; }
.paper-note{
  display:flex; justify-content:center; margin:10px auto 0;
}
.paper-note span{
  display:inline-block; font-size:14px; font-weight:800; letter-spacing:.04em;
  color:var(--navy); background:#fff8e6; border:1px solid #e3d19a;
  border-radius:999px; padding:6px 14px;
}
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
@media print{
  .pool-section{ display:none !important }
  .bar, .edit-toolbar, .pattern-switch, .pattern-label, .print-pop, .footer{ display:none !important }
  .legend{ display:flex !important; font-size:10pt !important; margin:1mm 0 2mm !important; }
  .hero{ padding:0 0 1mm !important; margin:0 !important; }
  .hero-pre{ font-size:9pt !important; }
  .hero h1{ font-size:16pt !important; }
  .hero-sub{ font-size:10pt !important; }
  .paper-note span{ font-size:10pt !important; padding:1mm 5mm !important; }
  .tables-wrap{ padding:0 5mm !important; max-width:100% !important; }
  .tables-row{ gap:3mm !important; margin-bottom:2.5mm !important; }
  .tables-row-3{ grid-template-columns:repeat(3, minmax(0,1fr)) !important; }
  .tables-row-2{
    grid-template-columns:repeat(2, minmax(0,1fr)) !important;
    max-width:58% !important;
    margin:0 auto 2mm !important;
  }
  .table-wrap{ max-width:72mm !important; }
  .table-name{ font-size:13pt !important; }
  .table-count{ font-size:8.5pt !important; }
  .seat-c{
    font-size:9.5pt !important; width:36% !important; height:15% !important;
    padding:1px 3px !important; border-width:.7pt !important;
  }
  .seat-c .nm{ font-size:9.5pt !important; }
  .seat-c .sm{ font-size:7.5pt !important; }
  .pattern-page-label{ font-size:12pt !important; margin-bottom:1mm !important; }
  .vendor-section{ margin:1mm auto 0 !important; }
  .vendor-mark{ font-size:9pt !important; margin:1mm 0 !important; }
  .vendor-booth{ min-height:12mm !important; font-size:8pt !important; padding-top:12px !important; }
  .vendor-booth .nm{ font-size:8pt !important; }
  .vendor-booth .prod{ font-size:7pt !important; }
}
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
    base = tables_from_members()
    tables_a = place_visitors(base, leftover_reversed=False)
    tables_b = place_visitors(base, leftover_reversed=True)
    tables_a = apply_day_adjustments(tables_a)
    tables_b = apply_day_adjustments(tables_b)
    wrap = (
        '<div class="tables-wrap">\n'
        + pattern_html("A", "パターン A — 第2部 開始時", tables_a)
        + "\n"
        + pattern_html("B", "席替え後（パターン B）", tables_b)
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
        '<a class="bar-btn" href="index.html">ハブ</a>\n    <a class="bar-btn" href="exhibitors.html">出店者</a>\n    <a class="bar-btn" href="seating_part2.pdf">席次PDF</a>\n    <a class="bar-btn" href="memberlist.html">Members</a>',
    )
    html = html.replace(
        '<p class="hero-pre">Round Tables — 2026.5.27 (水) 第2部</p>',
        '<p class="hero-pre">Round Tables — 2026.8.26 (水) 第2回 · 大人の夏祭り</p>',
    )
    html = html.replace(
        '<p class="hero-sub">8卓 × 7〜8名 / 3-3-2 配置 — 席替えあり（パターンA/B）</p>',
        '<p class="hero-sub">8卓 × 7〜8名 / メンバー36名＋ビジター仮配置（招待者同卓優先）</p>\n  <p class="paper-note"><span>印刷・PDF用紙：A3ヨコ（大きい紙 / 297×420mm）</span></p>',
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
        pair_section_html(tables_a, tables_b),
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
  <p>※ 仮配置。鈴木 優 様は全体司会。1卓ファシリ=伊藤 梢 様 / 6卓=あらい ひとみ 様 / 3卓=小宮 / 7卓=永吉（迫田と同卓）。編集モード（?edit=1）で入れ替えできます。</p>
  <p>2部欠席：川戸 恒吾 様 / かわもと えつこ 様 / 佐藤 秀哉 様 / 中山 朋子 様 ／ ビジター：大場 祐介 様 / イブ 様 / 星 寿美 様 / 青木 健 様 / 長谷川 悦子 様 / 香田 英匡 様（1部のみ）</p>
  <p>出店ブースはフォーム回答（ビジター6 / メンバー2）。配置・氏名は当日変更となる場合があります。</p>
  <p>BNI Grano Chapter — Business Open Day 2026 第2回 / 第2部 円卓席次</p>
</footer>""",
        html,
        count=1,
        flags=re.S,
    )
    html = html.replace('<style id="pageSize">@page { size: A4 landscape; margin: 8mm }</style>',
                        '<style id="pageSize">@page { size: A3 landscape; margin: 8mm }</style>')
    html = html.replace("const STORAGE_KEY = 'seating2-edits-v5';", "const STORAGE_KEY = 'bod2-seating2-edits-v11';")
    html = html.replace(
        "['seating2-edits-v1','seating2-edits-v2','seating2-edits-v3','seating2-edits-v4']",
        "['seating2-edits-v1','seating2-edits-v2','seating2-edits-v3','seating2-edits-v4','seating2-edits-v5','bod2-seating2-edits-v1','bod2-seating2-edits-v2','bod2-seating2-edits-v3','bod2-seating2-edits-v4','bod2-seating2-edits-v5','bod2-seating2-edits-v6','bod2-seating2-edits-v7','bod2-seating2-edits-v8','bod2-seating2-edits-v9','bod2-seating2-edits-v10']",
    )
    html = html.replace("軸メンバー（各卓に1人）", "ファシリテーター（各卓に1人）")
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
