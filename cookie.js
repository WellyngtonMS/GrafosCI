function resetcookies(){
    localStorage.clear();
    window.taken={};
    window.available={};
}
function createCookie() {
      // Check browser support
  nod=window.nodesSet
  edg=window.edgesSet
  tak=window.taken;
  availa=window.available;
  curso=document.getElementById("curso").innerHTML;
  if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("nodes",JSON.stringify(nod));
    localStorage.setItem("edges",JSON.stringify(edg));
    localStorage.setItem("curso",curso);
    localStorage.setItem("taken",JSON.stringify(tak));
    localStorage.setItem("availa",JSON.stringify(availa));
    
  }
}
function readcookies(){
    
    if(JSON.parse(localStorage.getItem("taken"))==null){
        document.getElementById("curso").innerHTML="Escolha seu curso abaixo";
        return null;
    }
    window.taken = JSON.parse(localStorage.getItem("taken"));
   // window.nodesSet = new vis.DataSet(JSON.parse(localStorage.getItem("nodes"))._data);
    //window.edgesSet = new vis.DataSet(JSON.parse(localStorage.getItem("edges"))._data);
    window.available = JSON.parse(localStorage.getItem("availa"));
    var container = document.getElementById('mynetwork');
    
    var data = {
        nodes: nodesSet,
        edges: edgesSet,
    }
    var options = {
        nodes: {
            color : gray,
            shape: 'box',
        },
        edges: {
            arrows: 'to',
            smooth: {
                type: 'horizontal',
                forceDirection: 'horizontal',
                roundness: 0.4,
            }
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
        },
    };
    network.destroy();
    network = new vis.Network(container, data, options);
    curso = localStorage.getItem("curso");
    document.getElementById("curso").innerHTML=curso;
    if(curso=="Engenharia da Computação"){
        mycall=true
        document.getElementById("compt").onclick();
        mycall=false
    }
    else if(curso=="Ciência da Computação"){
        mycall=true
        document.getElementById("cien").onclick();
        mycall=false
    }
    else if(curso=="Matemática Computacional"){
        mycall=true
        document.getElementById("mat").onclick();
        mycall=false
    }
    else if(curso=="Ciência de Dados e Inteligência Artificial"){
        mycall=true
        document.getElementById("dados").onclick();
        mycall=false
    }
    network.stabilize();
}

