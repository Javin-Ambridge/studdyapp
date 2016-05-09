export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 8,
            "column": 1
          },
          "end": {
            "line": 10,
            "column": 1
          }
        },
        "moduleName": "studyapp-web/templates/sign-up.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("		An account has already been created for this. ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  var child1 = (function() {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 15,
            "column": 1
          },
          "end": {
            "line": 17,
            "column": 1
          }
        },
        "moduleName": "studyapp-web/templates/sign-up.hbs"
      },
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("		");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        return morphs;
      },
      statements: [
        ["content","uni.name",["loc",[null,[16,2],[16,14]]]]
      ],
      locals: ["uni"],
      templates: []
    };
  }());
  var child2 = (function() {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 19,
            "column": 1
          },
          "end": {
            "line": 21,
            "column": 1
          }
        },
        "moduleName": "studyapp-web/templates/sign-up.hbs"
      },
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("		");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        return morphs;
      },
      statements: [
        ["content","course",["loc",[null,[20,2],[20,12]]]]
      ],
      locals: ["course"],
      templates: []
    };
  }());
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
          "line": 26,
          "column": 0
        }
      },
      "moduleName": "studyapp-web/templates/sign-up.hbs"
    },
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","signup-container");
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","signup-titles");
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("span");
      dom.setAttribute(el3,"class","bold large");
      var el4 = dom.createTextNode("Join Now!");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("br");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		Connect With Other Students in Your Classes Right Now!\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","signup-question");
      var el3 = dom.createTextNode("\n		What University do ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("span");
      dom.setAttribute(el3,"class","underline");
      var el4 = dom.createTextNode("you");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" go to?\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("a");
      dom.setAttribute(el2,"class","test");
      var el3 = dom.createTextNode("Save");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var element1 = dom.childAt(element0, [17]);
      var morphs = new Array(4);
      morphs[0] = dom.createMorphAt(element0,6,6);
      morphs[1] = dom.createMorphAt(element0,10,10);
      morphs[2] = dom.createMorphAt(element0,15,15);
      morphs[3] = dom.createElementMorph(element1);
      return morphs;
    },
    statements: [
      ["block","if",[["get","accountAlreadyCreated",["loc",[null,[8,7],[8,28]]]]],[],0,null,["loc",[null,[8,1],[10,8]]]],
      ["block","power-select",[],["options",["subexpr","@mut",[["get","universities",["loc",[null,[15,25],[15,37]]]]],[],[]],"onchange",["subexpr","action",["chooseUniversity"],[],["loc",[null,[15,47],[15,74]]]],"placeholder","Please choose your university.","allowClear",true,"selected",["subexpr","@mut",[["get","uni",["loc",[null,[15,145],[15,148]]]]],[],[]],"class","powerselect"],1,null,["loc",[null,[15,1],[17,18]]]],
      ["block","power-select",[],["options",["subexpr","@mut",[["get","courses",["loc",[null,[19,25],[19,32]]]]],[],[]],"onchange",["subexpr","action",["foo"],[],["loc",[null,[19,42],[19,56]]]],"placeholder","Please select a course.","allowClear",true,"class","powerselect"],2,null,["loc",[null,[19,1],[21,18]]]],
      ["element","action",["saveUser"],[],["loc",[null,[23,4],[23,25]]]]
    ],
    locals: [],
    templates: [child0, child1, child2]
  };
}()));