"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'homeHeaderOptions',
  template:
  /*html*/
  "\n\n        <div  class=\"home-header\" style='display:flex;justify-content:center;align-items:center;width:100%;height:200px;'>\n                 \n\n\n               \n        \n        <div style=\"width:auto;height:50px;background:whitesmoke;-webkit-box-shadow: -10px -8px 10px 0px rgba(0,0,0,0.34);\n        -moz-box-shadow: -10px -8px 10px 0px rgba(0,0,0,0.34);\n        box-shadow: -10px -8px 10px 0px rgba(0,0,0,0.34);border-radius:4px;display:flex;align-items:center;justify-content:center;padding:20px;margin:20px\"> <i class=\"fab fa-ethereum\"></i> &nbsp&nbsp  <i class=\"fas fa-dollar-sign\">{{eth}}</i>  &nbsp&nbsp&nbsp<div style=\" border-left: 2px solid black;\n        height: 40px;margin-left:5px;margin-right:5px\">&nbsp&nbsp&nbsp</div>  <i class=\"fab fa-ethereum\"></i>&nbsp <i class=\"fas fa-exchange-alt\"></i> &nbsp<i class=\"fab fa-bitcoin\"></i> &nbsp {{btc}}      </div>\n            \n        <div style=\"width:auto;height:50px;background:whitesmoke;-webkit-box-shadow: -10px -8px 10px 0px rgba(0,0,0,0.34);\n        -moz-box-shadow: -10px -8px 10px 0px rgba(0,0,0,0.34);\n        box-shadow: -10px -8px 10px 0px rgba(0,0,0,0.34);border-radius:4px;display:flex;align-items:center;justify-content:center;padding:20px;margin:20px\">\n        <i class=\"fas fa-globe\"></i>&nbspMARKET CAP &nbsp{{ marketCap }} &nbsp<i class=\"fas fa-dollar-sign\"></i> </div>\n        \n        </div>\n    \n    ",
  data: function data() {
    return {
      apiKey: 'X136HDYEAZTCN63163TCJCYE27DMAMUFAS',
      endpoint: "https://api.etherscan.io/api",
      eth: '',
      btc: '',
      marketCap: ''
    };
  },
  methods: {
    fetch: function fetch() {
      var vm;
      return regeneratorRuntime.async(function fetch$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              vm = this;
              _context.next = 3;
              return regeneratorRuntime.awrap(axios.get(vm.endpoint + "?module=stats&action=ethprice&apikey=".concat(this.apiKey)).then(function (response) {
                vm.$store.dispatch('setLoading', true);
                vm.eth = response.data.result.ethusd;
                vm.btc = response.data.result.ethbtc;
              })["catch"](function (error) {
                console.log(error);
              }));

            case 3:
              vm.$store.dispatch('setLoading', false);
              _context.next = 6;
              return regeneratorRuntime.awrap(axios.get(vm.endpoint + "?module=stats&action=ethsupply&apikey=".concat(this.apiKey)).then(function (response) {
                vm.$store.dispatch('setLoading', false); // vm.marketCap = response.data.result

                var res = response.data.result;
                var price = res.toString();
                price = price.slice(0, price.length - 18);
                vm.marketCap = parseInt(price) * vm.eth;
              })["catch"](function (error) {
                console.log(error);
              }));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  },
  mounted: function mounted() {
    this.fetch();
  }
};
exports["default"] = _default;