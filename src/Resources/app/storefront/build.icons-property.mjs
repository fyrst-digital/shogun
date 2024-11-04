import { readFile, writeFile } from 'node:fs/promises';
import { getIconsCSS, svgToURL, getIconData, iconToSVG, iconToHTML, replaceIDs } from '@iconify/utils';
import { locate } from '@iconify/json';

/**
* List of icons. Key is icon set prefix, value is array of icons
*
* @type {Record<string, string[]>}
*/
const icons = {
   'ri': [
      'facebook-fill',
      'instagram-line',
      'linkedin-fill',
      'youtube-line',
      'youtube-fill',
   ]
};

function buildCSSClass(iconUrl, iconName) {
	return `.icon-${iconName} {\n \t--svg: ${iconUrl}; \n}`;
}

async function buildCSS(icons) {
	const code = [];
	for (const [setId, iconsArray] of Object.entries(icons)) {
		const iconSet = JSON.parse(await readFile(locate(setId), 'utf8'));
		for (const icon of iconsArray) {
			const iconData = getIconData(iconSet, icon);

			if (!iconData) {
				throw new Error(`Icon "${icon}" is missing`);
			}

			const iconRendered = iconToSVG(iconData, {
				height: 'auto',
			});

			const iconSvg = iconToHTML(replaceIDs(iconRendered.body), iconRendered.attributes);

			const iconUrl = svgToURL(iconSvg, {
				optimize: true,
				width: 24,
				height: 24,
			});

			code.push(buildCSSClass(iconUrl, icon));
		}
	}
	return code.join('\n');
}

buildCSS(icons).then(async (result) => {
	await writeFile('src/scss/core/_icons.scss', result, 'utf8')
	console.log(`Saved CSS`)
})