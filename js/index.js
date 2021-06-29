var blue = {
    border: 'rgba(43,124,233,1)',
    background: 'rgba(151,194,252,1)',
}
var green = {
    border: 'rgba(43,233,124,1)',
    background: 'rgba(151,252,194,1)',
}
var red = {
    border: 'rgba(204, 0, 0, 1)',
    background:'rgba(204, 0, 0, 1)',
}
var taken = {};
var available = {};

var container = document.getElementById('mynetwork');

var data = {
    nodes: nodesSet,
    edges: edgesSet,
}
var options = {
    nodes: {
        color : red,
        shape: 'dot',
        font: {
          color: "#ffffff",
        },
    },
    edges: {
        arrows: 'to',
        smooth: {
            type: 'horizontal',
            forceDirection: 'horizontal',
            roundness: 0.4,
        },
        width: 0.4,
    },
    layout: {
        hierarchical:{
            direction: 'LR',
            levelSeparation: 220,
            edgeMinimization:true,
            blockShifting:true,
            sortMethod:'hubsize',
        }
    },
    physics: {
        enabled: false,
    },
    interaction: {
        selectable: false,
        hover: true,
        hoverConnectedEdges: true,
    },
};

resetcookies();
var radios = document.querySelectorAll('.radio');
function toggleButton(el) {
      for (var i = 0, l = radios.length; i < l; i++) {
        var fn = radios[i] == el ? 'add' : 'remove';
        radios[i].classList[fn]('focus');
      }
}

var network = new vis.Network(container, data, options);
readcookies();

network.stabilize();

nodesSet.forEach(function (node) {
    var edges = edgesSet.get({returnType: 'Object'});
    var connEdges = network.getConnectedEdges(node.id);

    for (j = 0; j < connEdges.length; j++) {
        if (edges[connEdges[j]].to == node.id && taken[edges[connEdges[j]].from] != true) {
            available[node.id] = false;
            node.color = red;
            nodesSet.update(node);
            return;
        }
    }
    available[node.id] = true;
    if(taken[node.id]==true)
        node.color = green;
    else
        node.color = blue;
    nodesSet.update(node);
});

network.on("click", function (params) {
    var nodes = nodesSet.get({returnType: 'Object'});
    var edges = edgesSet.get({returnType: 'Object'});

    var selectedNode = network.getNodeAt(params.pointer.DOM);
    if (selectedNode == undefined)
        return;

    var i,j;

    if (taken[selectedNode] == true) {
        taken[selectedNode] = false;
        if (available[selectedNode] == true)
            nodes[selectedNode].color = blue;
        else
            nodes[selectedNode].color = red;
    } else {
        taken[selectedNode] = true;
        nodes[selectedNode].color = green;
    }

    var connectedNodes = network.getConnectedNodes(selectedNode);

    loop1: for (i = 0; i < connectedNodes.length; i++) {
        var node = connectedNodes[i];
        if (taken[node] == true) continue;
        var connEdges = network.getConnectedEdges(node);

        for (j = 0; j < connEdges.length; j++) {
            if (edges[connEdges[j]].to == node
            && taken[edges[connEdges[j]].from] != true) {
                available[node] = false;
                nodes[node].color = red;
                continue loop1;
            }
        }

        available[node] = true;
        nodes[node].color = blue;
    }

    var updateArray = [];
    for (nodeId in nodes) {
        if (nodes.hasOwnProperty(nodeId)) {
            updateArray.push(nodes[nodeId]);
        }
    }
    nodesSet.update(updateArray);
    if(window.fakeclick!=true){
        createCookie();
    }
});
network.on("doubleClick", function (params) {
    params.event = "[original event]";
    document.getElementById('eventSpan').innerHTML = '<h2>doubleClick event:</h2>' + JSON.stringify(params, null, 4);
});
network.on("oncontext", function (params) {
    params.event = "[original event]";
    document.getElementById('eventSpan').innerHTML = '<h2>oncontext (right click) event:</h2>' + JSON.stringify(params, null, 4);
});
network.on("dragStart", function (params) {
    params.event = "[original event]";
    document.getElementById('eventSpan').innerHTML = '<h2>dragStart event:</h2>' + JSON.stringify(params, null, 4);
});
network.on("dragging", function (params) {
    params.event = "[original event]";
    document.getElementById('eventSpan').innerHTML = '<h2>dragging event:</h2>' + JSON.stringify(params, null, 4);
});
network.on("dragEnd", function (params) {
    network.unselectAll();
});
network.on("zoom", function (params) {
    document.getElementById('eventSpan').innerHTML = '<h2>zoom event:</h2>' + JSON.stringify(params, null, 4);
});
network.on("select", function (params) {
    console.log('select Event:', params);
});
network.on("selectNode", function (params) {
    
});
network.on("selectEdge", function (params) {
    console.log('selectEdge Event:', params);
});
network.on("deselectNode", function (params) {
    console.log('deselectNode Event:', params);
});
network.on("deselectEdge", function (params) {
    console.log('deselectEdge Event:', params);
});
network.on("hoverNode", function (params) {
    network.canvas.body.container.style.cursor = 'pointer';
    console.log('hoverNode Event:', params);
});
network.on("hoverEdge", function (params) {
    console.log('hoverEdge Event:', params);
});
network.on("blurNode", function (params) {
    network.canvas.body.container.style.cursor = 'default';
    console.log('blurNode Event:', params);
});
network.on("blurEdge", function (params) {
    console.log('blurEdge Event:', params);
});