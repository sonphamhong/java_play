jQuery(function($){
	$(document).ready(function(){
	
	// console.log(testdata);
 //    console.log(series);
    var dataNodes = [];
    var dataEdges = [];
    $.each(series, function(index, val) {
       // console.log(index + " : "+ val[0]);
       dataNodes.push({id: index, label: index.substr(0,4)});
    });

    $.each(series, function(index, val) {
      $.each(val, function(i, el) {
       dataEdges.push({from: index, to: el}); 
      });
       
    });

    console.log(dataEdges);
		var nodes = new vis.DataSet(dataNodes
	        // {id: 1, label: 'Node 1'},
	        // {id: 2, label: 'Node 2'},
	        // {id: 3, label: 'Node 3'},
	        // {id: 4, label: 'Node 4'},
	        // {id: 5, label: 'Node 5'},
	        // {id: 6, label: 'Node 6'},
	        // {id: 7, label: 'Node 7'},
	        // {id: 8, label: 'Node 8'},
	        // {id: 9, label: 'Node 9'},
	        // {id: 10, label: 'Node 10'},
	        // {id: 11, label: 'Node 11'},
	        // {id: 12, label: 'Node 12'},
	        // {id: 13, label: 'Node 13'},
	        // {id: 14, label: 'Node 14'},
	        // {id: 15, label: 'Node 15'},
	        // {id: 16, label: 'Node 16'},
	        // {id: 17, label: 'Node 17'},
	        // {id: 18, label: 'Node 18'},
	        // {id: 19, label: 'Node 19'},
	        // {id: 20, label: 'Node 20'},
	        // {id: 21, label: 'Node 21'},
	        // {id: 22, label: 'Node 22'},
	        // {id: 23, label: 'Node 23'},
	        // {id: 24, label: 'Node 24'},
	        // {id: 25, label: 'Node 25'},
	        // {id: 26, label: 'Node 26'},
	        // {id: 27, label: 'Node 27'},
	        // {id: 28, label: 'Node 28'},
	        // {id: 29, label: 'Node 29'},
	        // {id: 30, label: 'Node 30'},
	        // {id: 31, label: 'Node 31'},
	        // {id: 32, label: 'Node 32'},
	        // {id: 33, label: 'Node 33'},
	        // {id: 34, label: 'Node 34'},
	        // {id: 35, label: 'Node 35'},
	        // {id: 36, label: 'Node 36'},
	        // {id: 37, label: 'Node 37'},
	        // {id: 38, label: 'Node 38'},
	        // {id: 39, label: 'Node 39'},
	        // {id: 40, label: 'Node 40'},
          );
	
	    // create an array with edges
	    var edges = new vis.DataSet(dataEdges
	        // {from: 1, to: 3},
	        // {from: 1, to: 2},
	        // {from: 1, to: 4},
	        // {from: 6, to: 10},
	        // {from: 6, to: 12},
	        // {from: 6, to: 14},
	        // {from: 6, to: 16},
	        // {from: 10, to: 11},
	        // {from: 10, to: 12},
	        // {from: 10, to: 20},
	        // {from: 10, to: 19},
	        // {from: 5, to: 1},
	        // {from: 5, to: 2},
	        // {from: 5, to: 3},
	        // {from: 5, to: 4},
	        // {from: 8, to: 15},
	        // {from: 8, to: 16},
	        // {from: 8, to: 17},
	        // {from: 8, to: 18},
	        // {from: 12, to: 4},
	        // {from: 12, to: 5},
	        // {from: 12, to: 6},
	        // {from: 12, to: 7},
	        );
	
	    // create a network
	    var container = document.getElementById('mynetwork');
	
	    // provide the data in the vis format
	    var data = {
	        nodes: nodes,
	        edges: edges
	    };
	    var options = {
	    	edges:{
			    arrows: {
			      to:     {enabled: true, scaleFactor:1},
			      from:   {enabled: true, scaleFactor:1}
			    },
			    color: {
			      color:'#848484',
			      highlight:'#848484',
			      hover: '#848484',
			      inherit: 'from',
			      opacity:1.0
			    },
			    length: 50,
			    dashes: false,
			    font: {
			      color: '#343434',
			      size: 14, // px
			      face: 'arial',
			      background: 'none',
			      strokeWidth: 2, // px
			      strokeColor: '#ffffff',
			      align:'horizontal'
			    },
			    hidden: false,
			    hoverWidth: 1.5,
			    label: undefined,
			    length: undefined,
			    physics: true,
			    selectionWidth: 1,
			    selfReferenceSize:20,
			    shadow:{
			      enabled: false,
			      size:10,
			      x:5,
			      y:5
			    },
			    smooth: {
			      enabled: true,
			      type: "dynamic",
			      roundness: 0
			    },
			    title:undefined,
			    width: 1,
			    value: undefined
			  },
			  nodes:{
			    borderWidth: 1,
			    borderWidthSelected: undefined,
			    brokenImage:undefined,
			    color: {
			      border: '#2B7CE9',
			      background: '#97C2FC',
			      highlight: {
			        border: '#2B7CE9',
			        background: '#D2E5FF'
			      },
			      hover: {
			        border: '#2B7CE9',
			        background: '#D2E5FF'
			      }
			    },
			    font: {
			      color: '#343434',
			      size: 20, // px
			      face: 'arial',
			      background: 'none',
			      strokeWidth: 0, // px
			      strokeColor: '#ffffff'
			    },
			    group: undefined,
			    hidden: false,
			    image: undefined,
			    label: undefined,
			    level: undefined,
			    mass: 1,
			    physics: true,
			    shadow:{
			      enabled: false,
			      size:10,
			      x:5,
			      y:5
			    },
			    shape: 'circle',
			    size: 25,
			  }
			  
	    	
	    };
	
	    // initialize your network!
	    var network = new vis.Network(container, data, options);
	
		})
});