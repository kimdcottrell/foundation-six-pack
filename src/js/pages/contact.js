import '../app';
import '../components/foundation-core';

// bring in only the plugin we need
import { Abide } from 'foundation-sites/js/foundation.abide';
Foundation.plugin(Abide, 'Abide');
module.exports = Foundation;

$(document).foundation();
