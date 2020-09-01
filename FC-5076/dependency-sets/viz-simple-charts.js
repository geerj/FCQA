(function(){"use strict";(function(a){try{a=angular.module("super-templates")}catch(b){a=angular.module("super-templates",[])}a.run(["$templateCache",function(a){a.put("components/super-viz-pie-chart/viz-pie-chart.html","<div class=\"super-viz-pie-chart\"><highchart config=\"vm.highchartInput\"></highchart><a ng-href=\"{{vm.nextRoute}}\">{{vm.nextRouteTitle}}</a></div>"),a.put("components/super-viz-sparkline/viz-sparkline.html","<div class=\"super-viz-sparkline\"><super-viz-highcharts-wrap config=\"vm.highchartConfig\"></super-viz-highcharts-wrap></div>")}])})();var a=function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")},b=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),c=function(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)},d=function(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a},e=function b(c,d){var e=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{};a(this,b),this.restrict="E",this.replace=!0,this.scope=c,this.templateUrl="components/super-"+d+"/"+d+".html",Object.assign(this,e)},f={widgetTitle:"@",api:"@",nextRoute:"@",nextRouteTitle:"@",attrForSectionTitle:"=",attrForSectionValue:"=",mutationFunction:"@"},g={},h={chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},title:{text:""},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,format:"<b>{point.name}</b>: {point.percentage:.1f} %",style:{color:"black"}},showInLegend:!0}},series:[{name:"Brands",colorByPoint:!0}]},i=[{type:"productId:timesheetReviewStatus",id:"077b2871-37c0-4dca-9e16-fe0c7d97ce87",attributes:{timeStatus:"Pending",current:4,persentOfGoal:105}},{type:"productId:timesheetReviewStatus",id:"177b2871-4dca-37c0-9e16-fe0c7d97ce88",attributes:{timeStatus:"Submitted",current:7,persentOfGoal:25}},{type:"productId:timesheetReviewStatus",id:"877b2871-37c0-9e16-4dca-fe0c7d97ce89",attributes:{timeStatus:"Approved",current:12,persentOfGoal:76}},{type:"productId:timesheetReviewStatus",id:"377b2871-9e16-4dca-37c0-fe0c7d97ce90",attributes:{timeStatus:"Waiting",current:8,persentOfGoal:23}},{type:"productId:timesheetReviewStatus",id:"877b2871-9e16-37c0-4dca-fe0c7d97ce91",attributes:{timeStatus:"Rejected",current:16,persentOfGoal:89}}];angular.module("super-suit-components").directive("superVizPieChart",function(){var j=function(e){function f(){return a(this,f),d(this,(f.__proto__||Object.getPrototypeOf(f)).apply(this,arguments))}return c(f,e),b(f,[{key:"controller",value:["$scope","$http","$log",function(a,b,c){var d=Object.assign({},h);a.widgetTitle?d.title.text=a.widgetTitle:c.warn("$scope.widgetTitle is expected for a Pie Chart."),a.nextRoute||c.warn("$scope.nextRoute is an expected field"),a.nextRouteTitle||c.warn("$scope.nextRouteTitle is an expected field");var e=i.map(function(b){var d={};return b&&b.attributes&&b.attributes[a.attrForSectionTitle]?d.name=b.attributes[a.attrForSectionTitle]:c.warn("A dataPoint did not have the expected attribute called "+a.attrForSectionTitle),b&&b.attributes&&b.attributes[a.attrForSectionValue]?d.y=b.attributes[a.attrForSectionValue]:c.warn("A dataPoint did not have the expected attribute called "+a.attrForSectionValue),d});d.series[0].data=e;var f=a.vm={highchartInput:d,widgetTitle:a.widgetTitle,nextRoute:a.nextRoute,nextRouteTitle:a.nextRouteTitle},g=a.go={}}]}]),f}(e);return new j(f,"viz-pie-chart",g)});var j={inputData:"=",widthOverride:"=",heightOverride:"="},k={};angular.module("super-suit-components").directive("superVizSparkline",function(){function f(a,b,c){return{chart:{renderTo:"container",margin:[0,0,0,0],backgroundColor:"transparent",width:b||80,height:c||50},title:{text:""},credits:{enabled:!1},xAxis:{labels:{enabled:!1},categories:[""]},yAxis:{maxPadding:0,minPadding:0,gridLineWidth:0,endOnTick:!1,labels:{enabled:!1}},legend:{enabled:!1},tooltip:{enabled:!1},plotOptions:{series:{animation:!1,enableMouseTracking:!1,lineWidth:1,shadow:!1,states:{hover:{lineWidth:1}},marker:{radius:0,states:{hover:{radius:2}}}}},series:[{data:a}]}}var g=function(e){function g(){return a(this,g),d(this,(g.__proto__||Object.getPrototypeOf(g)).apply(this,arguments))}return c(g,e),b(g,[{key:"controller",value:["$scope","$log",function(a,b){var c=a.vm={},d=a.go={click:function(){c.test=a.text}};a.inputData&&Array.isArray(a.inputData)?0>a.inputData.length?b.warn("sparkline expects an array of non-zero values"):c.highchartConfig=f(a.inputData):b.error("sparkline expects an array")}]}]),g}(e);return new g(j,"viz-sparkline",k)})})();
