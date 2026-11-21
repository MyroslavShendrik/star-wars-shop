const PX_KEYS = new Set(["spacing", "iconSize"]);

export function themeToCssVars(theme) {
  const vars = {};
  const walk = (obj, path) => {
    for (const [key, value] of Object.entries(obj)) {
      const nextPath = [...path, key];
      if (value && typeof value === "object") walk(value, nextPath);
      else if (typeof value === "function") continue;
      else {
        const isPx = PX_KEYS.has(nextPath[0]) && typeof value === "number";
        vars[`--${nextPath.join("-")}`] = isPx ? `${value}px` : String(value);
      }
    }
  };
  walk(theme, []);
  return vars;
}