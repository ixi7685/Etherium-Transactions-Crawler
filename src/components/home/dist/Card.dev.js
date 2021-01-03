"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _API = require("../../API.js");

var _store = require("../../store.js");

var _default = {
  name: 'developer',
  template:
  /*html*/
  "\n      \n\n    <div >\n\n    <template v-if=\"loaded\" >\n    <div style=\"display:flex;-webkit-box-shadow: -10px -8px 10px 0px rgba(0,0,0,0.34);\n    -moz-box-shadow: -10px -8px 10px 0px rgba(0,0,0,0.34);\n    box-shadow: -10px -8px 10px 0px rgba(0,0,0,0.34);border-radius:4px\">   \n\n    <ul style=\"background:whitesmoke;margin:10px\"> <p style=\"margin:25px\" ><i class=\"fab fa-ethereum\"></i> ETH</p> \n    \n    <li v-for=\"transaction in transactions\" style=\"padding:25px\">  {{ transaction}} Ether </li> </ul> \n\n    <ul style=\"background:white;margin:10px\"> <p style=\"margin:25px\" ><i class=\"fas fa-arrow-up\"></i> Address From</p> \n    \n    <li v-for=\"f in from \" style=\"padding:25px\">  {{ f }}  </li> </ul> \n\n    <ul style=\"background:whitesmoke;margin:10px\"> <p style=\"margin:25px\" ><i class=\"fas fa-arrow-down\"></i> Address To</p> \n    \n    <li v-for=\"to in to\" style=\"padding:25px\">  {{ to }} </li> </ul> \n\n\n\n\n    <!--\n\n    <div style=\"background:white;width:auto;padding:20px;\"> <div style=\"\"> Address From</div> \n    \n    <div v-for=\"f in from \" style=\"margin: 10px;padding:20px\">  {{ f}} </div></div>\n\n    <div style=\"background:whitesmoke;width:auto;padding:20px;\"> <div style=\"\" >Address To</div> \n    \n    \n    <div v-for=\"to in to \" style=\"margin: 10px;padding:20px\">      {{ to}}</div></div>\n\n    <div style=\"background:whitesmoke;width:auto;padding:20px;\"> <div style=\"\" ><i class=\"fab fa-ethereum\"></i>&nbsp ETH</div> \n    \n    \n    <div v-for=\"transaction in transactions\" style=\"margin: 10px;padding:20px\">  {{ transaction}} Ether</div> </div> \n    </div> \n   -->\n    </template> \n    <template v-else>\n    <div style=\"display:flex;-webkit-box-shadow: -10px -8px 10px 0px rgba(0,0,0,0.34);\n    -moz-box-shadow: -10px -8px 10px 0px rgba(0,0,0,0.34);\n    box-shadow: -10px -8px 10px 0px rgba(0,0,0,0.34);border-radius:4px;height:auto\">  \n        <div style=\"background:whitesmoke;margin:10px;padding:20px\">   Please enter an address and block to get details of transactions  </div>\n     </div>\n    </template>\n  \n\n\n  </div>\n\n\n ",
  data: function data() {
    return {};
  },
  props: ['from', 'to', 'transactions', 'loaded'],
  methods: {},
  computed: {},
  mounted: function mounted() {}
};
exports["default"] = _default;