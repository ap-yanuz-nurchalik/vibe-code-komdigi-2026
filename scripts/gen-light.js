#!/usr/bin/env node
/**
 * gen-light.js — generates slides-light.md from slides.md
 * Swaps colorSchema to light and sets base path to /light/
 */
const fs = require('fs')
const path = require('path')

const src = path.join(__dirname, '..', 'slides.md')
const out = path.join(__dirname, '..', 'slides-light.md')

let content = fs.readFileSync(src, 'utf8')

// Swap colorSchema in frontmatter
content = content.replace(/^colorSchema: dark$/m, 'colorSchema: light')

fs.writeFileSync(out, content, 'utf8')
console.log(`✓ Generated slides-light.md (colorSchema: light)`)
