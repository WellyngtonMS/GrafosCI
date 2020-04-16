
function changecien() {
    if(typeof mycall !== 'undefined'){
        if(mycall==false){
            resetcookies();
        }
    }
    window.nodesSet = new vis.DataSet([

	    {level: 1, id: '1101171', label: 'Física I', title: '1101171 FÍSICA APLICADA À COMPUTAÇÃO I', y: -1200},
	    {level: 1, id: '1103118', label: 'Cálculo Vetorial e Geometria Analítica', title: '1103118	CÁLCULO VETORIAL E GEOMETRIA ANALÍTICA', y: -1100},
	    {level: 1, id: '1103177', label: 'Cálculo I', title: '1103177 CÁLCULO DIFERENCIAL E INTEGRAL I', y: -1000},
	    {level: 1, id: '1107136', label: 'Int. a Programação', title: '1107136 INTRODUÇÃO A PROGRAMAÇÃO', y: -900},
	    {level: 1, id: '1107137', label: 'Int. ao Computador', title: '1107137 INTRODUÇÃO AO COMPUTADOR', y: -800},

	    {level: 2, id: '1101172', label: 'Física II', title: '1101172 FÍSICA APLICADA A COMPUTAÇÃO II', y: -1200},
	    {level: 2, id: '1103178', label: 'Cálculo II', title: '1103178 CÁLCULO DIFERENCIAL E INTEGRAL II', y: -1100},
	    {level: 2, id: '1103179', label: 'Introdução a Álgebra', title: '1103179 INTRODUÇÃO A ÁLGEBRA LINEAR', y: -1000},
	    {level: 2, id: '1107147', label: 'Ling. de Prog. I', title: '1107147 LINGUAGEM DE PROGRAMAÇÃO I', y: -900},
	    {level: 2, id: '1107201', label: 'Metodologia do Trabalho', title: '1107201	METODOLOGIA DO TRABALHO CIENTÍFICO', y: -800},
	    {level: 2, id: 'GDCOC0079', label: 'Lógica Aplicada', title: 'GDCOC0079	LÓGICA APLICADA A COMPUTAÇÃO', y: -700},

	    {level: 3, id: '1103232', label: 'Cálculo III', title: '1103232	CÁLCULO DIFERENCIAL E INTEGRAL III', y: -1200},
	    {level: 3, id: '1107148', label: 'Ling. de Prog. II', title: '1107148 LINGUAGEM DE PROGRAMAÇÃO II', y: -1100},
	    {level: 3, id: '1107186', label: 'Estrutura de Dados', title: '1107186 ESTRUTURA DE DADOS', y: -1000},
	    {level: 3, id: '1107206', label: 'Pesquisa Aplicada', title: '1107206 PESQUISA APLICADA A COMPUTAÇÃO', y: -900},
	    {level: 3, id: 'GDCOC0081', label: 'Teoria da Computação', title: 'GDCOC0081 TEORIA DA COMPUTAÇÃO', y: -800},
	    {level: 3, id: 'GDSCO0039', label: 'Circuitos Lógicos', title: 'GDSCO0039 CIRCUITOS LÓGICOS', y: -700},
	    {level: 3, id: 'GDSCO0051', label: 'Int. à Comp. Gráfica', title: 'GDSCO0051 INTRODUÇÃO A COMPUTAÇÃO GRÁFICA', y: -600},

	    {level: 4, id: '1103180', label: 'SEDO', title: '1103180 SÉRIES E EQUAÇÕES DIFERENCIAIS ORDINÁRIAS', y: -1200},
	    {level: 4, id: '1107204', label: 'Ord. Rec. de Dados', title: '1107204 ORDENAÇÃO E RECUPERAÇÃO DE DADOS', y: -1100},
	    {level: 4, id: '1108183', label: 'Modelos Probabilísticos', title: '1108183	MODELOS PROBABILÍSTICOS PARA COMPUTAÇÃO', y: -1000},
	    {level: 4, id: '1404138', label: 'Língua Inglesa I', title: '1404138 LÍNGUA INGLESA I', y: -900},
	    {level: 4, id: 'GDCOC0072', label: 'Cálculo Numérico', title: 'GDCOC0072 CÁLCULO NUMÉRICO', y: -800},
	    {level: 4, id: 'GDCOC0078', label: 'Lin. Formais e Autômatos', title: 'GDCOC0078 LINGUAGENS FORMAIS E AUTÔMATOS', y: -700},
	    {level: 4, id: 'GDSCO0036', label: 'Arquitetura de Computadores I', title: 'GDSCO0036 ARQUITETURA DE COMPUTADORES I', y: -600},
	    {level: 4, id: 'GDSCO0055', label: 'PDI', title: 'GDSCO0055	INTRODUÇÃO AO PROCESSAMENTO DIGITAL DE IMAGENS', y: -500},

	    {level: 5, id: '1107180', label: 'Banco de Dados I', title: '1107180 BANCO DE DADOS I', y: -1200},
	    {level: 5, id: '1107184', label: 'Requisitos de Software', title: '1107184 ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE', y: -1100},
	    {level: 5, id: '1107205', label: 'Paradigmas de Ling. de Prog.', title: '1107205 PARADIGMAS DE LINGUAGEM DE PROGRAMAÇÃO', y: -1000},
	    {level: 5, id: '1204115', label: 'Adm de Empresas', title: '1204115	ADMINISTRAÇÃO DE EMPRESAS', y: -900},
	    {level: 5, id: 'GDCOC0076', label: 'APA', title: 'GDCOC0076	ANÁLISE E PROJETO DE ALGORITMOS', y: -800},
	    {level: 5, id: 'GDSCO0037', label: 'Arquitetura de Computadores II', title: 'GDSCO0037	ARQUITETURA DE COMPUTADORES II', y: -700},
	    {level: 5, id: 'GDSCO0068', label: 'SO I', title: 'GDSCO0068 SISTEMAS OPERACIONAIS I', y: -600},

	    {level: 6, id: '1107191', label: 'IA', title: '1107191 INTRODUÇÃO A INTELIGÊNCIA ARTIFICIAL', y: -1200},
	    {level: 6, id: '1107202', label: 'Mét. de Proj. de Software', title: '1107202 MÉTODOS DE PROJETO DE SOFTWARE', y: -1100},
	    {level: 6, id: '1204112', label: 'Adm Sist. de Informações', title: '1204112 ADMISTRAÇÃO DE SISTEMAS DE INFORMAÇÕES', y: -1000},
	    {level: 6, id: 'GDSCO0043', label: 'Construção de Compiladores I', title: 'GDSCO0043 CONSTRUÇÃO DE COMPILADORES I', y: -900},
	    {level: 6, id: 'GDSCO0047', label: 'IHM', title: 'GDSCO0047	INTERAÇÃO HOMEM MÁQUINA', y: -800},
	    {level: 6, id: 'GDSCO0062', label: 'Redes I', title: 'GDSCO0062	REDES DE COMPUTADORES I', y: -700},

	    {level: 7, id: '1107120', label: 'Computadores e Sociedade', title: '1107120 COMPUTADORES E SOCIEDADE', y: -1200},
	    {level: 7, id: '1107128', label: 'Eng. de Software', title: '1107128 ENGENHARIA DE SOFTWARE', y: -1100},
	    {level: 7, id: '1204156', label: 'Sist. de Inf. e Decisão', title: '1204156	SISTEMA DE INFORMAÇÃO E DECISÃO', y: -1000},

	    {level: 8, id: 'GDINF0131', label: 'TCC', title: 'GDINF0131	TRABALHO DE CONCLUSÃO DE CURSO', y: -1200},
	    {level: 8, id: 'GDINF0132', label: 'Estágio', title: 'GDINF0132	ESTÁGIO SUPERVISIONADO', y: -1100},

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