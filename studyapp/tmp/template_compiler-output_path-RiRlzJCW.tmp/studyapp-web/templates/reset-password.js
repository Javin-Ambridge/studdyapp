export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "revision": "Ember@1.13.12",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 24,
          "column": 6
        }
      },
      "moduleName": "studyapp-web/templates/reset-password.hbs"
    },
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","reset-page");
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","reset-block");
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","reset-title");
      var el4 = dom.createTextNode("Reset Your Password ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("hr");
      dom.setAttribute(el3,"class","login-lineDividers");
      dom.setAttribute(el3,"size","1px");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n		Please enter your current password:\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","text-left");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("br");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		Enter your new password:\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","text-left");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode(" \n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("br");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		Verify password:\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","text-left");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("br");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("br");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0, 1]);
      var morphs = new Array(3);
      morphs[0] = dom.createMorphAt(dom.childAt(element0, [5]),1,1);
      morphs[1] = dom.createMorphAt(dom.childAt(element0, [9]),1,1);
      morphs[2] = dom.createMorphAt(dom.childAt(element0, [13]),1,1);
      return morphs;
    },
    statements: [
      ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","CurrentPassword",["loc",[null,[8,29],[8,44]]]]],[],[]],"class","inputbox","maxlength","85","placeholder",""],["loc",[null,[8,3],[8,93]]]],
      ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","NewPassword",["loc",[null,[13,29],[13,40]]]]],[],[]],"class","inputbox","maxlength","85","placeholder",""],["loc",[null,[13,3],[13,89]]]],
      ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","VerifyPassword",["loc",[null,[18,29],[18,43]]]]],[],[]],"class","inputbox","maxlength","85","placeholder",""],["loc",[null,[18,3],[18,92]]]]
    ],
    locals: [],
    templates: []
  };
}()));