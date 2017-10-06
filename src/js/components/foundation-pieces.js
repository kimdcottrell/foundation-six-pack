import $ from 'jquery';

//-- BEGIN CORE FOUNDATION JS
import { Foundation } from 'foundation-sites/js/foundation.core';
import { rtl, GetYoDigits, transitionend } from 'foundation-sites/js/foundation.util.core';
import { MediaQuery } from 'foundation-sites/js/foundation.util.mediaQuery'; // if this is not included, all below plugins break
//-- END CORE FOUNDATION JS

/**
* -- BEGIN HIGHLY RECOMMENDED FOUNDATION JS
* NOTE: Some plugins also require specific utility libraries that ship with
* Foundation — refer to a plugin's documentation to find out which plugins require what
**/
// import { Box } from 'foundation-sites/js/foundation.util.box'
// import { onImagesLoaded } from 'foundation-sites/js/foundation.util.imageLoader';
// import { Keyboard } from 'foundation-sites/js/foundation.util.keyboard';
// import { Motion, Move } from 'foundation-sites/js/foundation.util.motion';
// import { Nest } from 'foundation-sites/js/foundation.util.nest';
// import { Timer } from 'foundation-sites/js/foundation.util.timer';
// import { Poke } from 'foundation-sites/js/foundation.util.touch';
// import { Triggers } from 'foundation-sites/js/foundation.util.triggers';
//-- END HIGHLY RECOMMENDED FOUNDATION JS

/**
* -- BEGIN OPTIONAL FOUNDATION PLUGINS
* NOTE: You only need to uncomment the ones you want to enable, and maybe their
* required util(s) above
**/
import { Abide } from 'foundation-sites/js/foundation.abide';
// import { Accordion } from 'foundation-sites/js/foundation.accordion';
// import { AccordionMenu } from 'foundation-sites/js/foundation.accordionMenu';
// import { Drilldown } from 'foundation-sites/js/foundation.drilldown';
// import { Dropdown } from 'foundation-sites/js/foundation.dropdown';
// import { DropdownMenu } from 'foundation-sites/js/foundation.dropdownMenu';
// import { Equalizer } from 'foundation-sites/js/foundation.equalizer';
// import { Interchange } from 'foundation-sites/js/foundation.interchange';
// import { Magellan } from 'foundation-sites/js/foundation.magellan';
// import { OffCanvas } from 'foundation-sites/js/foundation.offcanvas';
// import { Orbit } from 'foundation-sites/js/foundation.orbit';
// import { ResponsiveMenu } from 'foundation-sites/js/foundation.responsiveMenu';
// import { ResponsiveToggle } from 'foundation-sites/js/foundation.responsiveToggle';
// import { Reveal } from 'foundation-sites/js/foundation.reveal';
// import { Slider } from 'foundation-sites/js/foundation.slider';
// import { SmoothScroll } from 'foundation-sites/js/foundation.smoothScroll';
// import { Sticky } from 'foundation-sites/js/foundation.sticky';
// import { Tabs } from 'foundation-sites/js/foundation.tabs';
// import { Toggler } from 'foundation-sites/js/foundation.toggler';
// import { Tooltip } from 'foundation-sites/js/foundation.tooltip';
// import { ResponsiveAccordionTabs } from 'foundation-sites/js/foundation.responsiveAccordionTabs';

Foundation.addToJquery($);

// Add Foundation Utils to Foundation global namespace for backwards
// compatibility.

Foundation.rtl = rtl;
Foundation.GetYoDigits = GetYoDigits;
Foundation.transitionend = transitionend;

if( typeof MediaQuery != "undefined" ){ Foundation.MediaQuery = MediaQuery; }
if( typeof Box != "undefined" ){ Foundation.Box = Box; }
if( typeof onImagesLoaded != "undefined" ){ Foundation.onImagesLoaded = onImagesLoaded; }
if( typeof Keyboard != "undefined" ){ Foundation.Keyboard = Keyboard; }
if( typeof Motion != "undefined" ){ Foundation.Motion = Motion; }
if( typeof Move != "undefined" ){ Foundation.Move = Move; }
if( typeof Nest != "undefined" ){ Foundation.Nest = Nest; }
if( typeof Timer != "undefined" ){ Foundation.Timer = Timer; }

// Poke and Triggers previously were almost purely sede effect driven,
// so no // need to add it to Foundation, just init them.

if( typeof Poke != "undefined" ){ Poke.init($); }
if( typeof Triggers != "undefined" ){ Triggers.init($, Foundation); }

if( typeof Abide != "undefined" ){ Foundation.plugin(Abide, 'Abide'); }
if( typeof Accordion != "undefined" ){ Foundation.plugin(Accordion, 'Accordion'); }
if( typeof AccordionMenu != "undefined" ){ Foundation.plugin(AccordionMenu, 'AccordionMenu'); }
if( typeof Drilldown != "undefined" ){ Foundation.plugin(Drilldown, 'Drilldown'); }
if( typeof Dropdown != "undefined" ){ Foundation.plugin(Dropdown, 'Dropdown'); }
if( typeof DropdownMenu != "undefined" ){ Foundation.plugin(DropdownMenu, 'DropdownMenu'); }
if( typeof Equalizer != "undefined" ){ Foundation.plugin(Equalizer, 'Equalizer'); }
if( typeof Interchange != "undefined" ){ Foundation.plugin(Interchange, 'Interchange'); }
if( typeof Magellan != "undefined" ){ Foundation.plugin(Magellan, 'Magellan'); }
if( typeof OffCanvas != "undefined" ){ Foundation.plugin(OffCanvas, 'OffCanvas'); }
if( typeof Orbit != "undefined" ){ Foundation.plugin(Orbit, 'Orbit'); }
if( typeof ResponsiveMenu != "undefined" ){ Foundation.plugin(ResponsiveMenu, 'ResponsiveMenu'); }
if( typeof ResponsiveToggle != "undefined" ){ Foundation.plugin(ResponsiveToggle, 'ResponsiveToggle'); }
if( typeof Reveal != "undefined" ){ Foundation.plugin(Reveal, 'Reveal'); }
if( typeof Slider != "undefined" ){ Foundation.plugin(Slider, 'Slider'); }
if( typeof SmoothScroll != "undefined" ){ Foundation.plugin(SmoothScroll, 'SmoothScroll'); }
if( typeof Sticky != "undefined" ){ Foundation.plugin(Sticky, 'Sticky'); }
if( typeof Tabs != "undefined" ){ Foundation.plugin(Tabs, 'Tabs'); }
if( typeof Toggler != "undefined" ){ Foundation.plugin(Toggler, 'Toggler'); }
if( typeof Tooltip != "undefined" ){ Foundation.plugin(Tooltip, 'Tooltip'); }
if( typeof ResponsiveAccordionTabs != "undefined" ){ Foundation.plugin(ResponsiveAccordionTabs, 'ResponsiveAccordionTabs'); }

module.exports = Foundation;
