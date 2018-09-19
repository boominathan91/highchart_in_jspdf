
  var result = {
    "Result": {
      "x": [
        "Feb-2017",
        "Mar-2017",
        "Apr-2017",
        "May-2017",
        "Jun-2017",
        "Jul-2017",
        "Aug-2017",
        "Sep-2017",
        "Oct-2017",
        "Nov-2017",
        "Dec-2017",
        "Jan-2018"
      ],
      "y": [
        9,
        8.0,
        7.0,
        6.0,
        5.0,
        4.0,
        3.0,
        3.0,
        3.0,
        3.0,
        3.0,
        3.0
      ]
    }
  };
  var xaxisval = result.Result.x,
    yaxisval = result.Result.y;
  var myChart = Highcharts.chart('testchart', {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Test chart'
    },
    xAxis: {
      categories: xaxisval
    },
    yAxis: {
      title: {
        text: 'Test data'
      }
    },
    
    series: [{
      name: 'Month',
      data: result.Result.y
    }]
  });





   function chartWithContentDownload() {
    var doc = new jsPDF('portrait', 'pt', 'a4', true);
    var elementHandler = {
      '#ignorePDF': function(element, renderer) {
        return true;
      }
    };

    var source = document.getElementById("top-content");
    doc.fromHTML(source, 15, 15, {
      'width': 560,
      'elementHandlers': elementHandler
    });

    var svg = document.querySelector('svg');
    var canvas = document.createElement('canvas');
    var canvasIE = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var DOMURL = window.URL || window.webkitURL || window;
    var data = (new XMLSerializer()).serializeToString(svg);
    canvg(canvas, data);
    var svgBlob = new Blob([data], {
      type: 'image/svg+xml;charset=utf-8'
    });

    var url = DOMURL.createObjectURL(svgBlob);

    var img = new Image();
    img.onload = function() {
      context.canvas.width = $('#testchart').find('svg').width();;
      context.canvas.height = $('#testchart').find('svg').height();;
      context.drawImage(img, 0, 0);
      // freeing up the memory as image is drawn to canvas
      DOMURL.revokeObjectURL(url);
      
      var dataUrl;
						if (isIEBrowser()) { // Check of IE browser 
							var svg = $('#testchart').highcharts().container.innerHTML;
							canvg(canvasIE, svg);
							dataUrl = canvasIE.toDataURL('image/JPEG');
						}
						else{
							dataUrl = canvas.toDataURL('image/jpeg');
						}
      doc.addImage(dataUrl, 'JPEG', 20, 300, 560, 350);

      var bottomContent = document.getElementById("bottom-content");
      doc.fromHTML(bottomContent, 15, 650, {
        'width': 560,
        'elementHandlers': elementHandler
      });

      setTimeout(function() {
        doc.save('TestChart.pdf');
      }, 2000);
    };
    img.src = url;
    
  };


  function isIEBrowser(){
					var ieBrowser;
					var ua = window.navigator.userAgent;
					var msie = ua.indexOf("MSIE ");
  
					if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // Internet Explorer
					{
					  ieBrowser = true;
					}
					else  //Other browser
					{
					  console.log('Other Browser');
						ieBrowser = false;
					}

				    return ieBrowser;
				};
