// Sprout market data — Finnhub quotes with demo fallback. Key stored in localStorage only.
const KEY_NAME = 'sprout.finnhubKey';
export function getKey() { return localStorage.getItem(KEY_NAME) || ''; }
export function setKey(k) { k ? localStorage.setItem(KEY_NAME, k.trim()) : localStorage.removeItem(KEY_NAME); }

// Fetch live quotes for US symbols from Finnhub. Returns {SYM: {price, chgPct}} for successes.
export async function fetchQuotes(symbols, key) {
  if (!key) return {};
  const out = {};
  await Promise.all(symbols.map(async (sym) => {
    try {
      const r = await fetch(`https://finnhub.io/api/v1/quote?symbol=${encodeURIComponent(sym)}&token=${encodeURIComponent(key)}`);
      if (!r.ok) return;
      const d = await r.json();
      if (d && d.c > 0) out[sym] = { price: d.c, chgPct: d.dp };
    } catch (e) { /* offline or rate-limited — fall back to demo */ }
  }));
  return out;
}

export function fmtUsd(n) { return '$' + n.toLocaleString('en-US', { maximumFractionDigits: 2, minimumFractionDigits: 2 }); }
export function fmtPct(n) { return (n >= 0 ? '+' : '\u2212') + Math.abs(n).toFixed(1) + '%'; }
