define("studyapp-web/templates/learn-more", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
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
            "line": 63,
            "column": 0
          }
        },
        "moduleName": "studyapp-web/templates/learn-more.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "aboutus-page");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "aboutus-block");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "aboutus-title");
        var el4 = dom.createTextNode("Mission");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n	");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("hr");
        dom.setAttribute(el3, "class", "aboutus-lineDividers");
        dom.setAttribute(el3, "size", "1px");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		We understand the many challenges faced by so many students now-a-days.The stress of school can be overwhelming.\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n		Thats why we invented INSERT_NAME with the goal of helping students that are stuggling in classes or just looking\n		to meet new people.\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		Whether you are in your first year or your last year, INSERT_NAME can provide you with the\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		opportunity to discover your potential and meet new people in the process.\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("  KEEPING THIS BECAUSE WE COULD ACTUALLY USE IT FOR THE RESET PASSWORD PAGE<div class=\"text-left\">\n			{{input type=\"text\" value=CurrentPassword class=\"inputbox\" maxlength=\"85\" placeholder=\"\"}}\n		</div>\n		<br>\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("<div class=\"text-left\">\n		{{input type=\"text\" placeholder=\"\" value=NewPassword type=\"password\" class=\"inputbox\" maxlength=\"16\"}}\n\n		</div>\n\n		<br>\n		Verify password:\n		<div class=\"text-left\">\n			{{input type=\"text\" placeholder=\"\" value=NewPassword2 type=\"password\" class=\"inputbox\" maxlength=\"16\"}}\n\n		</div>\n		<br><br>\n		<a class=\"login-buttons resetpassword\" {{action 'ChangePassword'}}>\n			Reset Password\n		</a>\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "aboutusBlock");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "aboutus-title");
        var el4 = dom.createTextNode("About Us");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("hr");
        dom.setAttribute(el3, "class", "aboutus-lineDividers");
        dom.setAttribute(el3, "size", "1px");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		We are a small team of 5 developers. ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		Gareth Huang ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" Javin Ambridge ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" Aaron Lau ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" Teo Mastronardi ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" Jason Goodison (obvs the best) ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		We are computer science majors at the University of Waterloo. We can be contacted at OUR_EMAIL_FOR_THIS for any issues, questions or if you are looking to get involved in development.\n	\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" right now this is just a place holder, obviously we dont want the height to be dependent on line breaks");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});