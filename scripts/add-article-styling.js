const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, '../lib/posts.ts');
let content = fs.readFileSync(postsPath, 'utf-8');

// Function to add styling to a single article's content
function addStyledBoxes(contentStr) {
  // Skip if already styled
  if (contentStr.includes('style="background:') || contentStr.includes('style="padding:')) {
    return contentStr;
  }

  let modified = contentStr;

  // Extract first paragraph to find a stat
  const firstParaMatch = contentStr.match(/<p>([^<]*?)([\d,]+\s*(?:years?|%|billion|million|B|M|°F)?)/);
  if (firstParaMatch && firstParaMatch[2]) {
    const stat = firstParaMatch[2];
    const statBox = `<div style="background: #FEF3E2; padding: 32px; border-radius: 4px; margin: 32px 0; text-align: center;"><div style="font-size: 48px; font-weight: bold; color: #8A7660; line-height: 1.2;">${stat}</div><p style="margin-top: 12px; font-size: 14px; color: #666;">Key metric</p></div>`;
    modified = modified.replace(/<h2>/, statBox + '<h2>');
  }

  return modified;
}

// Replace each article's content
let count = 0;
const newContent = content.replace(/content: `([^`]*)`/g, (match, contentStr) => {
  const styled = addStyledBoxes(contentStr);
  if (styled !== contentStr) {
    count++;
  }
  return `content: \`${styled}\``;
});

fs.writeFileSync(postsPath, newContent, 'utf-8');
console.log(`✓ Added styling to ${count} articles`);
