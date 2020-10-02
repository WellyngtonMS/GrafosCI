
function changedados() {
    if(typeof mycall !== 'undefined'){
        if(mycall==false){
            resetcookies();
        }
    }
    window.nodesSet = new vis.DataSet([

	    {level: 1, id: '1103118', label: 'Cál. Vetorial e G. Analítica', title: '1103118 CÁLCULO VETORIAL E GEOMETRIA ANALÍTICA', y: -1100},
	    {level: 1, id: '1103177', label: 'Cálculo I', title: '1103177 CÁLCULO DIFERENCIAL E INTEGRAL I', y: -1000},
	    {level: 1, id: '1107136', label: 'Int. a programação', title: '1107136 INTRODUÇÃO A PROGRAMAÇÃO', y: -900},
	    {level: 1, id: '1107248', label: 'Int. ao Computador', title: '1107248 INTRODUÇÃO AO COMPUTADOR', y: -800},
	    {level: 1, id: '1107201', label: 'Metodologia', title: '1107201 METODOLOGIA DO TRABALHO CIENTÍFICO', y: -700},

	    {level: 2, id: '1103178', label: 'Cálculo II', title: '1103178 CÁLCULO DIFERENCIAL E INTEGRAL II', y: -1100},
	    {level: 2, id: '1103179', label: 'Álgebra', title: '1103179 INTRODUÇÃO A ÁLGEBRA LINEAR', y: -1000},
	    {level: 2, id: '1107259', label: 'Matemática Discreta', title: '1107259 MATEMÁTICA DISCRETA', y: -900},
	    {level: 2, id: 'GDCOC0088', label: 'Prog. Estruturada', title: 'GDCOC0088 PROGRAMAÇÃO ESTRUTURADA', y: -800},
	    {level: 2, id: 'GDCOC0089', label: 'Int. à C.D', title: 'GDCOC0089 INTRODUÇÃO À CIÊNCIA DE DADOS', y: -700},

	    {level: 3, id: '1103232', label: 'Cálculo III', title: '1103232 CÁLCULO DIFERENCIAL E INTEGRAL III', y: -1100},
	    {level: 3, id: '1107186', label: 'Estrutura de Dados', title: '1107186	ESTRUTURA DE DADOS', y: -1000},
	    {level: 3, id: '5102009', label: 'Álgebra Computacional', title: '5102009 ÁLGEBRA LINEAR COMPUTACIONAL', y: -900},
	    {level: 3, id: 'GDCOC0101', label: 'Prog. Orientada a Obj.', title: 'GDCOC0101 PROGRAMAÇÃO ORIENTADA À OBJETOS', y: -800},
	    {level: 3, id: 'GDCOC0102', label: 'Teoria das Prob.', title: 'GDCOC0102 TEORIA DAS PROBABILIDADES', y: -700},

	    {level: 4, id: '1107180', label: 'Banco de Dados I', title: '1107180 BANCO DE DADOS I', y: -1100},
	    {level: 4, id: '5102007', label: 'Pesquisa Operacional', title: '5102007 PESQUISA OPERACIONAL', y: -1000},
	    {level: 4, id: 'GDCOC0100', label: 'Pesquisa Aplicada', title: 'GDCOC0100 PESQUISA APLICADA À CIÊNCIA DE DADOS', y: -900},
	    {level: 4, id: 'GDCOC0103', label: 'Mét. Numéricos I', title: 'GDCOC0103 MÉTODOS NUMÉRICOS I', y: -800},
	    {level: 4, id: 'GDCOC0104', label: 'IA', title: 'GDCOC0104 INTRODUÇÃO A INTELIGÊNCIA ARTIFICIAL', y: -700},
	    {level: 4, id: 'GDCOC0107', label: 'Estatística', title: 'GDCOC0107 INFERÊNCIA ESTATÍSTICA', y: -600},
	    
	    {level: 5, id: 'GDCOC0076', label: 'APA', title: 'GDCOC0076	ANÁLISE E PROJETO DE ALGORITMOS', y: -1100},
	    {level: 5, id: 'GDCOC0090', label: 'Otimização', title: 'GDCOC0090 OTIMIZAÇÃO NÃO-LINEAR', y: -1000},
	    {level: 5, id: 'GDCOC0091', label: 'Grafos', title: 'GDCOC0091 TEORIA DOS GRADOS APLICADA', y: -900},
	    {level: 5, id: 'GDCOC0092', label: 'Aprendizagem de Máquina', title: 'GDCOC0092 APRENDIZAGEM DE MÁQUINA', y: -800},
	    {level: 5, id: 'GDCOC0105', label: 'Eq. Diferenciais Ordinárias', title: 'GDCOC0105 EQUAÇÕES DIFERENCIAIS ORDINÁRIAS', y: -700},

	    {level: 6, id: '1107128', label: 'Eng. de Software', title: '1107128 ENGENHARIA DE SOFTWARE', y: -1100},
	    {level: 6, id: 'GDCOC0093', label: 'Métodos Matemáticos I', title: 'GDCOC0093 MÉTODOS MATEMÁTICOS I', y: -1000},
	    {level: 6, id: 'GDCOC0094', label: 'Aprendizado Profundo', title: 'GDCOC0094 APRENDIZADO PROFUNDO', y: -900},
	    {level: 6, id: 'GDCOC0095', label: 'Análise Mult.', title: 'GDCOC0095 ANÁLISE MULTIVARIADA E APRENDIZAGEM NÃO SUPERVISIONADA', y: -800},
	    {level: 6, id: 'GDINF0106', label: 'Computadores e Sociedade', title: 'GDINF0106 COMPUTADORES E SOCIEDADE', y: -700},

	    {level: 7, id: 'GDCOC0075', label: 'Inteligência Comp.', title: 'GDCOC0075 INTELIGÊNCIA COMPUTACIONAL', y: -1100},
	    {level: 7, id: 'GDCOC0096', label: 'Vis. de Dados', title: 'GDCOC0096 VISUALIZAÇÃO DE DADOS', y: -1000},
	    {level: 7, id: 'GDCOC0097', label: 'Mineração Est. de Dados', title: 'GDCOC0097 MINERAÇÃO ESTATÍSTICA DE DADOS', y: -900},
	    {level: 7, id: 'GDCOC0106', label: 'Empreendedorismo', title: 'GDCOC0106 EMPREENDEDORISMO', y: -800},

	    {level: 8, id: 'GDCOC0098', label: 'Big Data', title: 'GDCOC0098 BIG DATA', y: -1100},
	    {level: 8, id: 'GDCOC0099', label: 'Estágio', title: 'GDCOC0099 ESTÁGIO SUPERVISIONADO', y: -1000},
	    {level: 8, id: 'GDCOC0108', label: 'TCC', title: 'GDCOC0108 TRABALHO DE CONCLUSÃO DE CURSO', y: -900},
    ]);

    window.edgesSet = new vis.DataSet([


	    {to: '1103178', from: '1103177'},
	    {to: '1103179', from: '1103118'},
	    {to: 'GDCOC0088', from: '1107136'},
	    {to: 'GDCOC0088', from: '1107137'},
	    {to: 'GDCOC0089', from: '1107136'},

	    {to: '1103232', from: '1103178'},
	    {to: '1103232', from: '1103118'},
	    {to: '1107186', from: 'GDCOC0088'},
	    {to: '5102009', from: '1103179'},
	    {to: '5102009', from: 'GDCOC0088'},
	    {to: 'GDCOC0101', from: 'GDCOC0088'},
	    {to: 'GDCOC0102', from: '1103178'},

	    {to: '1107180', from: '1107186'},
	    {to: '5102007', from: '1103179'},
	    {to: '5102007', from: 'GDCOC0088'},
	    {to: 'GDCOC0103', from: '1103232'},
	    {to: 'GDCOC0104', from: 'GDCOC0088'},
	    {to: 'GDCOC0107', from: 'GDCOC0102'},

	    {to: 'GDCOC0076', from: '1107186'},
	    {to: 'GDCOC0090', from: '1103232'},
	    {to: 'GDCOC0090', from: '1103179'},
	    {to: 'GDCOC0091', from: '1107186'},
	    {to: 'GDCOC0092', from: 'GDCOC0107'},
	    {to: 'GDCOC0092', from: 'GDCOC0104'},
	    {to: 'GDCOC0105', from: '1103178'},

	    {to: '1107128', from: 'GDCOC0101'},
	    {to: 'GDCOC0093', from: '1103178'},
	    {to: 'GDCOC0093', from: '1103179'},
	    {to: 'GDCOC0094', from: 'GDCOC0104'},
	    {to: 'GDCOC0094', from: 'GDCOC0090'},
	    {to: 'GDCOC0095', from: 'GDCOC0107'},

	    {to: 'GDCOC0075', from: '1107186'},
	    {to: 'GDCOC0096', from: 'GDCOC0101'},
	    {to: 'GDCOC0097', from: 'GDCOC0095'},
	    {to: 'GDCOC0097', from: 'GDCOC0092'},

	    {to: 'GDCOC0098', from: 'GDCOC0097'},
	    {to: 'GDCOC0098', from: '1107180'},
    ]);
    data2 = {
        nodes: nodesSet,
        edges: edgesSet,
    }
    network.setData(data2);
    nodesSet.forEach(function (node) {
        var edges = edgesSet.get({ returnType: 'Object' });
        var connEdges = network.getConnectedEdges(node.id);

        for (j = 0; j < connEdges.length; j++) {
            if (edges[connEdges[j]].to == node.id
                && taken[edges[connEdges[j]].from] != true) {
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
    document.getElementById("curso").innerHTML = "Ciência de Dados e Inteligência Artificial";
}