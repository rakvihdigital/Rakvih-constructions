const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'app');
const imageOptions = [
  '/images/hero.jpg',
  '/images/residential.jpg',
  '/images/commercial.jpg',
  '/images/industrial.jpg',
  '/images/interior.jpg',
  '/images/team.jpg',
  '/images/details.jpg',
  '/images/process.jpg',
  '/images/sustainable.jpg'
];

let imageCounter = 0;

function walkAndReplace(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkAndReplace(fullPath);
    } else if (file.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Match all unsplash URLs
      const regex = /"https:\/\/images\.unsplash\.com\/[^"]+"/g;
      
      content = content.replace(regex, (match, offset) => {
        // Look at the 200 characters before the match to get context
        const contextStart = Math.max(0, offset - 200);
        const context = content.substring(contextStart, offset).toLowerCase();
        
        let replacement = '';
        
        if (context.includes('residential')) replacement = '"/images/residential.jpg"';
        else if (context.includes('commercial') || context.includes('vertex') || context.includes('business')) replacement = '"/images/commercial.jpg"';
        else if (context.includes('industrial') || context.includes('supply') || context.includes('facility')) replacement = '"/images/industrial.jpg"';
        else if (context.includes('interior') || context.includes('design')) replacement = '"/images/interior.jpg"';
        else if (context.includes('team') || context.includes('founder') || context.includes('ceo') || context.includes('client') || context.includes('sarah') || context.includes('vikram') || context.includes('arjun')) replacement = '"/images/team.jpg"';
        else if (context.includes('process') || context.includes('build') || context.includes('inspect') || context.includes('handover') || context.includes('phase')) replacement = '"/images/process.jpg"';
        else if (context.includes('sustain') || context.includes('carbon') || context.includes('eco')) replacement = '"/images/sustainable.jpg"';
        else if (context.includes('infrastructure') || context.includes('corridor')) replacement = '"/images/hero.jpg"';
        else if (context.includes('vision') || context.includes('discover') || context.includes('plan')) replacement = '"/images/details.jpg"';
        else replacement = `"${imageOptions[imageCounter % imageOptions.length]}"`;
        
        imageCounter++;
        return replacement;
      });
      
      fs.writeFileSync(fullPath, content);
      console.log(`Updated ${fullPath}`);
    }
  }
}

walkAndReplace(srcDir);
