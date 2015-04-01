var VNode = require("virtual-dom/vnode/vnode");
var VText = require("virtual-dom/vnode/vtext");
var diff = require("virtual-dom/diff");
var patch = require("virtual-dom/patch");
var create = require("virtual-dom/create-element");

return VDOM = {
  diff: diff,
  patch: patch,
  create: create,
  VNode: VNode,
  VText: VText
}
