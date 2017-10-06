//-- BEGIN CORE FOUNDATION JS
import { Foundation } from 'foundation-sites/js/foundation.core';
import { rtl, GetYoDigits, transitionend } from 'foundation-sites/js/foundation.util.core';
import { MediaQuery } from 'foundation-sites/js/foundation.util.mediaQuery'; // if this is not included, all below plugins break

Foundation.addToJquery($);

// Add Foundation Utils to Foundation global namespace for backwards
// compatibility.

Foundation.rtl = rtl;
Foundation.GetYoDigits = GetYoDigits;
Foundation.transitionend = transitionend;

module.exports = Foundation;
