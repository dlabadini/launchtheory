/**
 * Script to generate favicon and OG image from rocket icon
 * Run with: bun run scripts/generate-assets.ts
 * 
 * Note: This requires sharp to be installed: bun add -d sharp
 * For now, use the SVG directly or convert manually
 */

import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

// SVG favicon (simplified version)
const faviconSvg = `<svg width="32" height="32" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#0A0A0A"/>
  <path d="M256 80L280 200L256 320L232 200L256 80Z" fill="#06B6D4"/>
  <path d="M240 200L272 200L280 320L232 320L240 200Z" fill="#22D3EE"/>
  <path d="M256 80L280 200L232 200L256 80Z" fill="#67E8F9"/>
  <circle cx="256" cy="240" r="20" fill="#0A0A0A" opacity="0.6"/>
  <circle cx="256" cy="240" r="12" fill="#06B6D4" opacity="0.4"/>
  <path d="M232 320L200 400L232 400L232 320Z" fill="#06B6D4" opacity="0.8"/>
  <path d="M280 320L312 400L280 400L280 320Z" fill="#06B6D4" opacity="0.8"/>
  <path d="M240 400L256 480L272 400L240 400Z" fill="#06B6D4" opacity="0.6"/>
</svg>`;

console.log("✅ Rocket icon SVG created at /public/rocket-icon.svg");
console.log("📝 To generate PNG files, install sharp and run the conversion script");
console.log("💡 For now, you can use online tools to convert SVG to PNG");

