if(typeof goog == "undefined") document.write('<script src="mario/goog/base.js"></script>');
document.write('<script src="mario/cljs_deps.js"></script>');
document.write('<script>if (typeof goog != "undefined") { goog.require("dominator.mario"); } else { console.warn("ClojureScript could not load :main, did you forget to specify :asset-path?"); };</script>');
