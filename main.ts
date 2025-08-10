import { parse } from "https://deno.land/std@0.203.0/flags/mod.ts";
import * as colormath from "https://deno.land/x/colormath@1.2.4/mod.ts";

const calculateOpacity = (
  color: string,
  base: string,
  opacity: number,
  context: any,
): string => {
  return colormath
    .mixColor(color, base, opacity)
    .hex.toLowerCase();
};

const args = parse(Deno.args);

const color = args.color ?? args.c;
const base = args.base ?? args.b;
const opacity = Number(args.opacity ?? args.o);

if (!color || !base || isNaN(opacity)) {
  console.error("Usage: deno run main.ts --color=<color> --base=<base> --opacity=<opacity>");
  Deno.exit(1);
}

const result = calculateOpacity(color, base, opacity, null);
console.log(result);

