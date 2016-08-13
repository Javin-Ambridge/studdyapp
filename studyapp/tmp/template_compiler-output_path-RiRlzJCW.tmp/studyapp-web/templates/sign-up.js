export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
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
            "line": 5,
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
        var el1 = dom.createTextNode("	");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","already-signedup");
        var el2 = dom.createTextNode("\n		Sorry, looks like an account with this email has already been created.\n	");
        dom.appendChild(el1, el2);
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
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 2
            },
            "end": {
              "line": 19,
              "column": 2
            }
          },
          "moduleName": "studyapp-web/templates/sign-up.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
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
          ["content","uni.name",["loc",[null,[18,3],[18,15]]]]
        ],
        locals: ["uni"],
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
              "line": 20,
              "column": 2
            },
            "end": {
              "line": 24,
              "column": 2
            }
          },
          "moduleName": "studyapp-web/templates/sign-up.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","error");
          var el2 = dom.createTextNode("\n				Please choose a university to continue.\n			");
          dom.appendChild(el1, el2);
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
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 29,
              "column": 2
            },
            "end": {
              "line": 31,
              "column": 2
            }
          },
          "moduleName": "studyapp-web/templates/sign-up.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" - (");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(")\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          morphs[1] = dom.createMorphAt(fragment,3,3,contextualElement);
          return morphs;
        },
        statements: [
          ["content","course.name",["loc",[null,[30,3],[30,18]]]],
          ["content","course.id",["loc",[null,[30,22],[30,35]]]]
        ],
        locals: ["course"],
        templates: []
      };
    }());
    var child3 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 32,
              "column": 2
            },
            "end": {
              "line": 36,
              "column": 2
            }
          },
          "moduleName": "studyapp-web/templates/sign-up.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","error");
          var el2 = dom.createTextNode("\n				Please select atleast one service to continue.\n			");
          dom.appendChild(el1, el2);
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
    var child4 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 43,
                "column": 5
              },
              "end": {
                "line": 45,
                "column": 5
              }
            },
            "moduleName": "studyapp-web/templates/sign-up.hbs"
          },
          arity: 2,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" - (");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(") ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1,"class","span-float-right");
            var el2 = dom.createElement("a");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element5 = dom.childAt(fragment, [7, 0]);
            var morphs = new Array(5);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            morphs[1] = dom.createMorphAt(fragment,3,3,contextualElement);
            morphs[2] = dom.createMorphAt(fragment,5,5,contextualElement);
            morphs[3] = dom.createElementMorph(element5);
            morphs[4] = dom.createMorphAt(element5,0,0);
            return morphs;
          },
          statements: [
            ["inline","fa-icon",["graduation-cap"],[],["loc",[null,[44,6],[44,34]]]],
            ["content","course.name",["loc",[null,[44,35],[44,50]]]],
            ["content","course.id",["loc",[null,[44,54],[44,67]]]],
            ["element","action",["removeCourse",["get","index",["loc",[null,[44,127],[44,132]]]]],[],["loc",[null,[44,103],[44,134]]]],
            ["inline","fa-icon",["minus-circle"],[],["loc",[null,[44,135],[44,161]]]]
          ],
          locals: ["course","index"],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 37,
              "column": 2
            },
            "end": {
              "line": 48,
              "column": 2
            }
          },
          "moduleName": "studyapp-web/templates/sign-up.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","courses-container");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","text-center padding-top");
          var el3 = dom.createTextNode("\n					");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3,"class","bold");
          var el4 = dom.createTextNode("Courses Selected:");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","course-list");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("				");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3]),1,1);
          return morphs;
        },
        statements: [
          ["block","each",[["get","selectedCourses",["loc",[null,[43,13],[43,28]]]]],[],0,null,["loc",[null,[43,5],[45,14]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 7,
            "column": 1
          },
          "end": {
            "line": 55,
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
        var el1 = dom.createTextNode("		");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n		");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","signup-titles");
        var el2 = dom.createTextNode("\n			");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2,"class","bold large");
        var el3 = dom.createTextNode("Join Now!");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n			Connect With Other Students in Your Classes!\n		");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n		");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n		");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","signup-question");
        var el2 = dom.createTextNode("\n			What University do ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2,"class","underline");
        var el3 = dom.createTextNode("you");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" go to?\n		");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("		");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n		");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","signup-question");
        var el2 = dom.createTextNode("\n			What Courses are ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2,"class","underline");
        var el3 = dom.createTextNode("you");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" currently taking?\n		");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n		");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","signup-buttons");
        var el2 = dom.createTextNode("\n			");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"href","/");
        dom.setAttribute(el2,"class","button black");
        var el3 = dom.createTextNode("Go Back");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n			");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"class","button gold");
        var el3 = dom.createTextNode("Continue");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n		");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n		");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element6 = dom.childAt(fragment, [22, 3]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(fragment,10,10,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,11,11,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,18,18,contextualElement);
        morphs[3] = dom.createMorphAt(fragment,19,19,contextualElement);
        morphs[4] = dom.createMorphAt(fragment,20,20,contextualElement);
        morphs[5] = dom.createElementMorph(element6);
        return morphs;
      },
      statements: [
        ["block","power-select",[],["options",["subexpr","@mut",[["get","universities",["loc",[null,[17,26],[17,38]]]]],[],[]],"onchange",["subexpr","action",["chooseUniversity"],[],["loc",[null,[17,48],[17,75]]]],"placeholder","Please choose your university.","allowClear",true,"selected",["subexpr","@mut",[["get","uni",["loc",[null,[17,146],[17,149]]]]],[],[]],"class","powerselect","searchField","name"],0,null,["loc",[null,[17,2],[19,19]]]],
        ["block","if",[["get","uniError",["loc",[null,[20,8],[20,16]]]]],[],1,null,["loc",[null,[20,2],[24,9]]]],
        ["block","power-select",[],["options",["subexpr","@mut",[["get","courses",["loc",[null,[29,26],[29,33]]]]],[],[]],"onchange",["subexpr","action",["addCourse"],[],["loc",[null,[29,43],[29,63]]]],"placeholder","Please select a course.","allowClear",true,"class","powerselect"],2,null,["loc",[null,[29,2],[31,19]]]],
        ["block","if",[["get","courseError",["loc",[null,[32,8],[32,19]]]]],[],3,null,["loc",[null,[32,2],[36,9]]]],
        ["block","if",[["get","anyCourses",["loc",[null,[37,8],[37,18]]]]],[],4,null,["loc",[null,[37,2],[48,9]]]],
        ["element","action",["nextStep"],[],["loc",[null,[52,26],[52,47]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3, child4]
    };
  }());
  var child2 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 79,
              "column": 3
            },
            "end": {
              "line": 81,
              "column": 3
            }
          },
          "moduleName": "studyapp-web/templates/sign-up.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("				");
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
          ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","password",["loc",[null,[80,30],[80,38]]]]],[],[]],"class","inputbox","maxlength","85"],["loc",[null,[80,4],[80,72]]]]
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
              "line": 81,
              "column": 3
            },
            "end": {
              "line": 83,
              "column": 3
            }
          },
          "moduleName": "studyapp-web/templates/sign-up.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("				");
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
          ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","password",["loc",[null,[82,30],[82,38]]]]],[],[]],"class","inputbox","maxlength","85","type","password"],["loc",[null,[82,4],[82,88]]]]
        ],
        locals: [],
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
              "line": 86,
              "column": 3
            },
            "end": {
              "line": 88,
              "column": 3
            }
          },
          "moduleName": "studyapp-web/templates/sign-up.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("				");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"class","text");
          var el2 = dom.createTextNode("- Hide your password");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element1);
          morphs[1] = dom.createMorphAt(element1,0,0);
          return morphs;
        },
        statements: [
          ["element","action",["togglePassword"],[],["loc",[null,[87,7],[87,34]]]],
          ["inline","fa-icon",["check-square-o"],["size",2],["loc",[null,[87,35],[87,70]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child3 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 88,
              "column": 3
            },
            "end": {
              "line": 90,
              "column": 3
            }
          },
          "moduleName": "studyapp-web/templates/sign-up.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("				");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"class","text");
          var el2 = dom.createTextNode("- Display your password");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element0);
          morphs[1] = dom.createMorphAt(element0,0,0);
          return morphs;
        },
        statements: [
          ["element","action",["togglePassword"],[],["loc",[null,[89,7],[89,34]]]],
          ["inline","fa-icon",["square-o"],["size",2],["loc",[null,[89,35],[89,64]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 55,
            "column": 1
          },
          "end": {
            "line": 96,
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
        var el1 = dom.createTextNode("		");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","signup-titles");
        var el2 = dom.createTextNode("\n			");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2,"class","bold large");
        var el3 = dom.createTextNode("Account Information");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n			Input a few pieces of information, and get started right away!\n		");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n		");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n		");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","signup-question");
        var el2 = dom.createTextNode("\n			What is your name?\n		");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n		");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","text-center");
        var el2 = dom.createTextNode("\n			");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n		");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n		");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n		");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","signup-question");
        var el2 = dom.createTextNode("\n			Enter your email address\n		");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n		");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","text-center");
        var el2 = dom.createTextNode("\n			");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n		");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n		");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n		");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","signup-question");
        var el2 = dom.createTextNode("\n			Create your password\n		");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n		");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","text-center");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("		");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n		");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","display-password-container");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("		");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n		");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","signup-buttons");
        var el2 = dom.createTextNode("\n			");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"class","button black");
        var el3 = dom.createTextNode("Go Back");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n			");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"class","button gold");
        var el3 = dom.createTextNode("Continue");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n		");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [25]);
        var element3 = dom.childAt(element2, [1]);
        var element4 = dom.childAt(element2, [3]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [7]),1,1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [14]),1,1);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [21]),1,1);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [23]),1,1);
        morphs[4] = dom.createElementMorph(element3);
        morphs[5] = dom.createElementMorph(element4);
        return morphs;
      },
      statements: [
        ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","name",["loc",[null,[65,29],[65,33]]]]],[],[]],"class","inputbox","maxlength","85"],["loc",[null,[65,3],[65,67]]]],
        ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","email",["loc",[null,[72,29],[72,34]]]]],[],[]],"class","inputbox","maxlength","85"],["loc",[null,[72,3],[72,68]]]],
        ["block","if",[["get","displayPassword",["loc",[null,[79,9],[79,24]]]]],[],0,1,["loc",[null,[79,3],[83,10]]]],
        ["block","if",[["get","displayPassword",["loc",[null,[86,9],[86,24]]]]],[],2,3,["loc",[null,[86,3],[90,10]]]],
        ["element","action",["prevStep"],[],["loc",[null,[93,27],[93,48]]]],
        ["element","action",["nextStep"],[],["loc",[null,[94,26],[94,47]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3]
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
          "line": 100,
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
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","signup-container");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("a");
      dom.setAttribute(el1,"class","test");
      var el2 = dom.createTextNode("Save");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element7 = dom.childAt(fragment, [3]);
      var morphs = new Array(3);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
      morphs[2] = dom.createElementMorph(element7);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["block","if",[["get","alreadySignedUp",["loc",[null,[1,6],[1,21]]]]],[],0,null,["loc",[null,[1,0],[5,7]]]],
      ["block","if",[["subexpr","int-equal",[["get","currentStep",["loc",[null,[7,18],[7,29]]]],1],[],["loc",[null,[7,7],[7,32]]]]],[],1,2,["loc",[null,[7,1],[96,8]]]],
      ["element","action",["saveUser"],[],["loc",[null,[99,3],[99,24]]]]
    ],
    locals: [],
    templates: [child0, child1, child2]
  };
}()));