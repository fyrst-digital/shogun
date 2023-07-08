import './component/shogun-benefits-selection';
import './component/shogun-benefits-settings';
import './module/benefits/index.js';
import enGB from './snippet/en-GB.json';
import deDE from './snippet/de-DE.json';


// register shogun snippets in app scope
Shopware.Locale.extend('en-GB', enGB);
Shopware.Locale.extend('de-DE', deDE);
