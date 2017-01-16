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
          "line": 30,
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
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
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
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment(" {{input type=\"text\" value=NewPassword class=\"inputbox\" maxlength=\"85\" placeholder=\"\"}}  ");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
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
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment(" {{input type=\"text\" value=NewPassword2 class=\"inputbox\" maxlength=\"85\" placeholder=\"\"}} ");
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
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("a");
      dom.setAttribute(el3,"class","login-buttons resetpassword");
      var el4 = dom.createTextNode("\n			Reset Password\n		");
      dom.appendChild(el3, el4);
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
      var element0 = dom.childAt(fragment, [1, 1]);
      var element1 = dom.childAt(element0, [18]);
      var morphs = new Array(4);
      morphs[0] = dom.createMorphAt(dom.childAt(element0, [5]),1,1);
      morphs[1] = dom.createMorphAt(dom.childAt(element0, [9]),1,1);
      morphs[2] = dom.createMorphAt(dom.childAt(element0, [13]),1,1);
      morphs[3] = dom.createElementMorph(element1);
      return morphs;
    },
    statements: [
      ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","CurrentPassword",["loc",[null,[9,29],[9,44]]]]],[],[]],"class","inputbox","maxlength","85","placeholder",""],["loc",[null,[9,3],[9,93]]]],
      ["inline","input",[],["type","text","placeholder","","value",["subexpr","@mut",[["get","NewPassword",["loc",[null,[14,43],[14,54]]]]],[],[]],"type","password","class","inputbox","maxlength","16"],["loc",[null,[14,2],[14,104]]]],
      ["inline","input",[],["type","text","placeholder","","value",["subexpr","@mut",[["get","NewPassword2",["loc",[null,[20,44],[20,56]]]]],[],[]],"type","password","class","inputbox","maxlength","16"],["loc",[null,[20,3],[20,106]]]],
      ["element","action",["ChangePassword"],[],["loc",[null,[24,41],[24,68]]]]
    ],
    locals: [],
    templates: []
  };
}()));