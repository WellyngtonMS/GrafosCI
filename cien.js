
function changecien() {
    if(typeof mycall !== 'undefined'){
        if(mycall==false){
            resetcookies();
        }
    }
    window.nodesSet = new vis.DataSet([

	    {level: 1, id: '1101171', label: 'Física I', title: '1101171 FISICA APLICADA A COMPUTACAO I', y: -1200},
	    {level: 1, id: '1103118', label: 'Cálculo Vetorial e Geometria Analítica', title: '1103118	CALCULO VETORIAL E GEOMETRIA ANALITICA', y: -1100},
	    {level: 1, id: '1103177', label: 'Cálculo I', title: '1103177 CALCULO DIFERENCIAL E INTEGRAL I', y: -1000},
	    {level: 1, id: '1107136', label: 'Int. a Programação', title: '1107136 INTRODUCAO A PROGRAMACAO', y: -900},
	    {level: 1, id: '1107137', label: 'Int. ao Computador', title: '1107137 INTRODUCAO AO COMPUTADOR', y: -800},

	    {level: 2, id: '1101172', label: 'Física II', title: '1101172 FISICA APLICADA A COMPUTACAO II', y: -1200},
	    {level: 2, id: '1103178', label: 'Cálculo II', title: '1103178 CALCULO DIFERENCIAL E INTEGRAL II', y: -1100},
	    {level: 2, id: '1103179', label: 'Introdução a Algebra', title: '1103179 INTRODUCAO A ALGEBRA LINEAR', y: -1000},
	    {level: 2, id: '1107147', label: 'Ling. de Prog. I', title: '1107147 LINGUAGEM DE PROGRAMACAO I', y: -900},
	    {level: 2, id: '1107201', label: 'Metodologia do Trabalho', title: '1107201	METODOLOGIA DO TRABALHO CIENTIFICO', y: -800},
	    {level: 2, id: 'GDCOC0079', label: 'Lógica Aplicada', title: 'GDCOC0079	LOGICA APLICADA A COMPUTACAO', y: -700},

	    {level: 3, id: '1103232', label: 'Cálculo III', title: '1103232	CALCULO DIFERENCIAL E INTEGRAL III', y: -1200},
	    {level: 3, id: '1107148', label: 'Ling. de Prog. II', title: '1107148 LINGUAGEM DE PROGRAMACAO II', y: -1100},
	    {level: 3, id: '1107186', label: 'Estrutura de Dados', title: '1107186 ESTRUTURA DE DADOS', y: -1000},
	    {level: 3, id: '1107206', label: 'Pesquisa Aplicada', title: '1107206 PESQUISA APLICADA A COMPUTACAO', y: -900},
	    {level: 3, id: 'GDCOC0081', label: 'Teoria da Computação', title: 'GDCOC0081 TEORIA DA COMPUTACAO', y: -800},
	    {level: 3, id: 'GDSCO0039', label: 'Circuitos Lógicos', title: 'GDSCO0039 CIRCUITOS LOGICOS', y: -700},
	    {level: 3, id: 'GDSCO0051', label: 'Int. à Comp. Gráfica', title: 'GDSCO0051 INTRODUCAO A COMPUTACAO GRAFICA', y: -600},

	    {level: 4, id: '1103180', label: 'SEDO', title: '1103180 SERIES E EQUACOES DIFERENCIAIS ORDINARIAS', y: -1200},
	    {level: 4, id: '1107204', label: 'Ord. Rec. de Dados', title: '1107204 ORDENACAO E RECUPERACAO DE DADOS', y: -1100},
	    {level: 4, id: '1108183', label: 'Modelos Probabilísticos', title: '1108183	MODELOS PROBABILISTICOS PARA COMPUTACAO', y: -1000},
	    {level: 4, id: '1404138', label: 'Língua Inglesa I', title: '1404138 LINGUA INGLESA I', y: -900},
	    {level: 4, id: 'GDCOC0072', label: 'Cálculo Numérico', title: 'GDCOC0072 CALCULO NUMERICO', y: -800},
	    {level: 4, id: 'GDCOC0078', label: 'Lin. Formais e Autômatos', title: 'GDCOC0078 LINGUAGENS FORMAIS E AUTOMATOS ', y: -700},
	    {level: 4, id: 'GDSCO0036', label: 'Arquitetura de Computadores I', title: 'GDSCO0036 ARQUITETURA DE COMPUTADORES I', y: -600},
	    {level: 4, id: 'GDSCO0055', label: 'PDI', title: 'GDSCO0055	INTRODUCAO AO PROCESSAMENTO DIGITAL DE IMAGENS', y: -500},

	    {level: 5, id: '1107180', label: 'Banco de Dados I', title: '1107180 BANCO DE DADOS I', y: -1200},
	    {level: 5, id: '1107184', label: 'Requisitos de Software', title: '1107184 ESPECIFICACAO DE REQUISITOS DE SOFTWARE', y: -1100},
	    {level: 5, id: '1107205', label: 'Paradgimas de Ling. de Prog.', title: '1107205 PARADIGMAS DE LINGUAGEM DE PROGRAMACAO', y: -1000},
	    {level: 5, id: '1204115', label: 'Adm de Empresas', title: '1204115	ADMINISTRACAO DE EMPRESAS', y: -900},
	    {level: 5, id: 'GDCOC0076', label: 'APA', title: 'GDCOC0076	ANALISE E PROJETO DE ALGORITMOS', y: -800},
	    {level: 5, id: 'GDSCO0037', label: 'Arquitetura de Computadores II', title: 'GDSCO0037	ARQUITETURA DE COMPUTADORES II', y: -700},
	    {level: 5, id: 'GDSCO0068', label: 'SO I', title: 'GDSCO0068 SISTEMAS OPERACIONAIS I', y: -600},

	    {level: 6, id: '1107191', label: 'IA', title: '1107191 INTRODUCAO A INTELIGENCIA ARTIFICIAL', y: -1200},
	    {level: 6, id: '1107202', label: 'Mét. de Proj. de Software', title: '1107202 METODOS DE PROJETO DE SOFTWARE', y: -1100},
	    {level: 6, id: '1204112', label: 'Adm Sist. de Informações', title: '1204112 ADMISTRACAO DE SISTEMAS DE INFORMACOES', y: -1000},
	    {level: 6, id: 'GDSCO0043', label: 'Construção de Compiladores I', title: 'GDSCO0043 CONSTRUÇÃO DE COMPILADORES I', y: -900},
	    {level: 6, id: 'GDSCO0047', label: 'IHM', title: 'GDSCO0047	INTERACAO HOMEM MAQUINA', y: -800},
	    {level: 6, id: 'GDSCO0062', label: 'Redes I', title: 'GDSCO0062	REDES DE COMPUTADORES I', y: -700},

	    {level: 7, id: '1107120', label: 'Computadores e Sociedade', title: '1107120 COMPUTADORES E SOCIEDADE', y: -1200},
	    {level: 7, id: '1107128', label: 'Eng. de Software', title: '1107128 ENGENHARIA DE SOFTWARE', y: -1100},
	    {level: 7, id: '1204156', label: 'Sist. de Inf. e Decisão', title: '1204156	SISTEMA DE INFORMACAO E DECISAO', y: -1000},

	    {level: 8, id: 'GDINF0131', label: 'TCC', title: 'GDINF0131	TRABALHO DE CONCLUSAO DE CURSO - CIENCIA DA COMPUTACAO', y: -1200},
	    {level: 8, id: 'GDINF0132', label: 'Estágio', title: 'GDINF0132	ESTAGIO SUPERVISIONADO - CIENCIA DA COMPUTACAO', y: -1100},

    ]);

    window.edgesSet = new vis.DataSet([


	    {to: '1101172', from: '1101171'},
	    {to: '1103178', from: '1103177'},
	    {to: '1103179', from: '1103118'},
	    {to: '1107147', from: '1107136'},

	    {to: '1103232', from: '1103118'},
	    {to: '1103232', from: '1103178'},
	    {to: '1107148', from: '1107147'},
	    {to: '1107148', from: 'GDCOC0079'},
	    {to: '1107186', from: '1107147'},
	    {to: 'GDCOC0081', from: 'GDCOC0079'},
	    {to: 'GDSCO0039', from: '1107137'},
	    {to: 'GDSCO0039', from: 'GDCOC0079'},
	    {to: 'GDSCO0051', from: '1103178'},
	    {to: 'GDSCO0051', from: '1107147'},
	    {to: 'GDSCO0051', from: '1103118'},

	    {to: '1103180', from: '1103179'},
	    {to: '1103180', from: '1103232'},
	    {to: '1107204', from: '1107186'},
	    {to: '1108183', from: '1103232'},
	    {to: 'GDCOC0072', from: '1103232'},
	    {to: 'GDCOC0072', from: '1107147'},
	    {to: 'GDCOC0078', from: 'GDCOC0081'},
	    {to: 'GDSCO0036', from: '1107136'},
	    {to: 'GDSCO0036', from: 'GDSCO0039'},
	    {to: 'GDSCO0055', from: 'GDSCO0051'},

	    {to: '1107191', from: '1107147'},
	    {to: '1107202', from: '1107184'},
	    {to: '1204112', from: '1204115'},
	    {to: 'GDSCO0043', from: '1107205'},
	    {to: 'GDSCO0043', from: 'GDCOC0078'},
	    {to: 'GDSCO0047', from: '1107184'},
	    {to: 'GDSCO0062', from: 'GDSCO0068'},
	   
	    {to: '1107128', from: '1107202'},
	    {to: '1204156', from: '1204112'},
	
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
                node.color = gray;
                nodesSet.update(node);
                return;
            }
        }

        available[node.id] = true;
        if(taken[node.id]==true)
            node.color = blue;
        else
            node.color = green;

        nodesSet.update(node);
    });
    document.getElementById("curso").innerHTML = "Ciência da Computação";
}