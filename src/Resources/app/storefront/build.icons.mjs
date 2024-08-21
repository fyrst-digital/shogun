import { readFile, writeFile } from 'node:fs/promises';
import { getIconsCSS } from '@iconify/utils';
import { locate } from '@iconify/json';

/**
* List of icons. Key is icon set prefix, value is array of icons
*
* @type {Record<string, string[]>}
*/
const icons = {
   'ph': [
      'address-book',
      'arrow-up',
      'arrow-down',
      'arrow-right',
      'arrow-left',
      'arrow-square-out',
      'arrow-square-out-bold',
      'arrows-clockwise',
      'caret-up',
      'caret-down',
      'caret-right',
      'caret-left',
      'check',
      'clock',
      'credit-card',
      'envelope-simple',
      'handbag-simple',
      'handbag',
      'heart',
      'heart-fill',
      'house-line',
      'house-line-bold',
      'info',
      'list',
      'magnifying-glass',
      'minus',
      'mountains',
      'mountains-bold',
      'number-one',
      'number-two',
      'number-three',
      'number-one-bold',
      'number-two-bold',
      'number-three-bold',
      'package',
      'paper-plane-tilt',
      'pencil-simple-line',
      'person-simple-ski',
      'person-simple-ski-bold',
      'phone',
      'piggy-bank',
      'piggy-bank-bold',
      'plus',
      'shooting-star',
      'shooting-star-bold',
      'shopping-bag',
      'shopping-cart-simple',
      'sliders',
      'sliders-horizontal',
      'sparkle',
      'sparkle-bold',
      'squares-four',
      'star-fill',
      'star-half-fill',
      'star',
      'tag',
      'truck',
      'user',
      'warning',
      'x',
      'x-circle'
   ]
};

// Parse each icon set
let code = '';
for (const prefix in icons) {
   // Find location of .json file
   const filename = locate(prefix);

   // Load file and parse it
   /** @type {import("@iconify/types").IconifyJSON} */
   const iconSet = JSON.parse(await readFile(filename, 'utf8'));

   // Get CSS
   const css = getIconsCSS(iconSet, icons[prefix], {
      iconSelector: ".icon-{name}",
      commonSelector: ".sh-icon"
   });

   // Add it to code
   code += css;
}

// Save CSS file
await writeFile('src/scss/icons.scss', code, 'utf8');
console.log(`Saved CSS (${code.length} bytes)`);