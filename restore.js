import fs from 'fs';
import glob from 'glob';

const files = glob.sync('src/app/**/page.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Revert all FadeIn tags back to div
  content = content.replace(/<FadeIn/g, '<div');
  content = content.replace(/<\/FadeIn>/g, '</div>');
  
  fs.writeFileSync(file, content);
});

console.log('Restored all FadeIn tags to div!');
