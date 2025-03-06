import fs from 'fs';
import path from 'path';
import globby from 'globby';

/**
 * Vite plugin to extract tap: classes and add them to a safelist file
 */
export default function tapSafelistPlugin() {
  const pluginName = 'vite-plugin-tap-safelist';
  let isBuild = false;
  
  return {
    name: pluginName,
    
    configResolved(config) {
      isBuild = config.command === 'build';
    },
    
    buildStart() {
      generateSafelist();
    },
    
    handleHotUpdate({ file, server }) {
      // Only process relevant file types
      if (/\.(astro|html|jsx|tsx|vue|svelte)$/.test(file)) {
        console.log('🔄 File changed, regenerating tap: safelist...');
        generateSafelist();
      }
      return [];
    }
  };
  
  function generateSafelist() {
    console.log('🔍 Scanning for tap: classes...');
    
    // Find all potential files
    const files = globby.sync(['src/**/*.{astro,html,jsx,tsx,vue,svelte}'], { 
      absolute: true 
    });
    
    const tapClasses = new Set();
    const tapClassRegex = /tap:([a-zA-Z0-9_-]+)/g;
    
    // Scan each file for tap: classes
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        let match;
        
        while ((match = tapClassRegex.exec(content)) !== null) {
          tapClasses.add(match[1]);
        }
      } catch (err) {
        console.error(`Error reading ${file}:`, err);
      }
    }
    
    // Generate CSS file with class comments for Tailwind to detect
    const safelistDir = path.resolve('src/generated');
    const safelistPath = path.join(safelistDir, 'tap-safelist.txt');
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(safelistDir)) {
      fs.mkdirSync(safelistDir, { recursive: true });
    }
    
    // Generate content
    let safelistContent = '';
    
    const classArray = Array.from(tapClasses);
    classArray.sort(); // Alphabetical order for readability
    
    classArray.forEach(className => {
      safelistContent += `.${className}\n`;
    });
    
    // Write the file
    fs.writeFileSync(safelistPath, safelistContent);
    
    console.log(`✅ Generated safelist with ${tapClasses.size} classes in src/generated/tap-safelist.txt`);
  }
}
