
function changecompt() {
    if(typeof mycall !== 'undefined'){
        if(mycall==false){
            resetcookies();
        }
    }
    window.nodesSet = new vis.DataSet([

    	{level: 1, id: 'GDSCO0025', label: 'Materiais micro e nano', title: 'GDSCO0025 MATERIAIS PARA MICRO E NANO TECNOLOGIA', y: -1200},
	    {level: 1, id: 'GDINF0101', label: 'Lab. de Int. a programação', title: 'GDINF0101 LABORATORIO DE INTRODUCAO A PROGRAMACAO', y: -1100},
	    {level: 1, id: '1103118', label: 'Cálculo Vetorial e Geometria Analítica', title: '1103118 CALCULO VETORIAL E GEOMETRIA ANALITICA', y: -1000},
	    {level: 1, id: '1107201', label: 'Metodologia do trabalho', title: '1107201 METODOLOGIA DO TRABALHO CIENTÍFICO', y: -900},
	    {level: 1, id: '1107248', label: 'Introdução à EC', title: '1107248 INTRODUCAO A ENGENHARIA DE COMPUTACAO', y: -800},
	    {level: 1, id: '1103177', label: 'Cálculo I', title: '1103177 CALCULO DIFERENCIAL E INTEGRAL I', y: -700},
	    {level: 1, id: 'GDINF0107', label: 'Int. a programação p/ EC', title: 'GDINF0107 INTRODUCAO A PROGRAMCAO PARA ENGENHARIA DE COMPUTACAO', y: -600},

	    {level: 2, id: 'GDSCO0021', label: 'CL1', title: 'GDSCO0021 CIRCUITOS LOGICOS I', y: -1200},
	    {level: 2, id: 'GDSCO0023', label: 'Eletricidade I', title: 'GDSCO0023 ELETRICIDADE E CIRCUITOS PARA COMPUTACAO I', y: -1100},
	    {level: 2, id: '1101171', label: 'Física I', title: '1101171 FISICA APLICADA A COMPUTACAO I', y: -1000},
	    {level: 2, id: 'GDINF0102', label: 'Lab. de Ling. de Prog. I', title: 'GDINF0102 LABORATORIO DE LINGUAGEM DE PROGRAMACAO I', y: -900},
	    {level: 2, id: '1103178', label: 'Cálculo II', title: '1103178 CALCULO DIFERENCIAL E INTEGRAL II', y: -800},
	    {level: 2, id: '1103179', label: 'Introdução a Algebra', title: '1103179 INTRODUCAO A ALGEBRA LINEAR', y: -700},
	    {level: 2, id: 'GDINF0108', label: 'Linguagem de Programação I', title: 'GDINF0108 LINGUAGEM DE PROGRAMACAO I', y: -600},
	    {level: 2, id: 'GDSCO0046', label: 'Física Experimental', title: 'GDSCO0046 FISICA EXPERIMENTAL PARA COMPUTACAO', y: -500},

	    {level: 3, id: 'GDSCO0059', label: 'Mecânica EC', title: 'GDSCO0059	MECANICA PARA ENGENHARIA DA COMPUTACAO', y: -1200},
	    {level: 3, id: 'GDSCO0024', label: 'Eletricidade II', title: 'GDSCO0024 ELETRICIDADE E CIRCUITOS PARA COMPUTACAO II', y: -1100},
	    {level: 3, id: '1107206', label: 'Pesquisa aplicada', title: '1107206 PESQUISA APLICADA A COMPUTACAO', y: -1000},
	    {level: 3, id: '1103232', label: 'Cálculo III', title: '1103232 CALCULO DIFERENCIAL E INTEGRAL III', y: -900},
	    {level: 3, id: 'GDSCO0022', label: 'CL2', title: 'GDSCO0022 CIRCUITOS LOGICOS II', y: -800},
	    {level: 3, id: '1108136', label: 'Probabilidades I', title: '1108136 CALCULO DAS PROBABILIDADES I', y: -700},


	    {level: 4, id: '1103180', label: 'SEDO', title: '1103180 SERIES E EQUACOES DIFERENCIAIS ORDINARIAS', y: -1200},
	    {level: 4, id: '1107148', label: 'Linguagem de Programação II', title: '1107148 LINGUAGEM DE PROGRAMACAO II', y: -1100},
	    {level: 4, id: '1107186', label: 'Estrutura de Dados', title: '1107186	ESTRUTURA DE DADOS', y: -1000},
	    {level: 4, id: 'GDSCO0026', label: 'Eletrônica Aplicada I', title: 'GDSCO0026 ELETRONICA APLICADA I', y: -900},
	    {level: 4, id: 'GDSCO0035', label: 'Arquitetura de Computadores I', title: 'GDSCO0035 ARQUITETURA DE COMPUTADORES', y: -800},
	    

	    {level: 5, id: '1107180', label: 'Banco de Dados I', title: '1107180 BANCO DE DADOS I', y: -1200},
	    {level: 5, id: 'GDCOC0072', label: 'Cálculo Numérico', title: 'GDCOC0072 CALCULO NUMERICO', y: -1100},
	    {level: 5, id: 'GDCOC0076', label: 'APA', title: 'GDCOC0076	ANALISE E PROJETO DE ALGORITMOS', y: -1000},
	    {level: 5, id: 'GDSCO0027', label: 'Eletrônica Aplicada II', title: 'GDSCO0027 ELETRONICA APLICADA II', y: -900},
	    {level: 5, id: 'GDSCO0052', label: 'Int. à Mecânica dos fluídos', title: 'GDSCO0052 INTRODUCAO A MECANICA DOS FLUIDOS', y: -800},
	    {level: 5, id: 'GDSCO0053', label: 'Int. à Microeletrônica', title: 'GDSCO0053 INTRODUCAO A MICROELETRONICA', y: -700},

	    {level: 6, id: '5101003', label: 'Microcontroladores', title: '5101003 MICROCONTROLADORES', y: -1200},
	    {level: 6, id: '1107128', label: 'Eng. de Software', title: '1107128 ENGENHARIA DE SOFTWARE', y: -1100},
	    {level: 6, id: 'GDSCO0062', label: 'Redes I', title: 'GDSCO0062	REDES DE COMPUTADORES I', y: -1000},
	    {level: 6, id: 'GDSCO0064', label: 'Sinas e Sistemas', title: 'GDSCO0064 SINAIS E SISTEMAS DINAMICOS', y: -900},
	    {level: 6, id: 'GDSCO0068', label: 'SO I', title: 'GDSCO0068 SISTEMAS OPERACIONAIS I', y: -800},
	    {level: 6, id: '5102007', label: 'Pesquisa Operacional', title: '5102007 PESQUISA OPERACIONAL', y: -700},

	    {level: 7, id: '5101001', label: 'ADSO', title: '5101001 AVALIACAO E DESEMPENHO DE SISTEMAS OPERACIONAIS', y: -1200},
	    {level: 7, id: 'GDSCO0032', label: 'Redes sem Fio', title: 'GDSCO0032 REDES SEM FIO', y: -1100},
	    {level: 7, id: 'GDSCO0051', label: 'Int. à Comp. Gráfica', title: 'GDSCO0051 INTRODUCAO A COMPUTACAO GRAFICA', y: -1000},
	    {level: 7, id: 'GDSCO0055', label: 'PDI', title: 'GDSCO0055 INTRODUCAO AO PROCESSAMENTO DIGITAL DE IMAGENS', y: -900},
	    {level: 7, id: 'GDSCO0065', label: 'Sistemas e Controle', title: 'GDSCO0065 SISTEMAS E CONTROLE DE AUTOMACAO', y: -800},
	    {level: 7, id: 'GDSCO0081', label: 'Sistemas Embarcados I', title: 'GDSCO0081 SISTEMAS EMBARCADOS I', y: -700},

	    {level: 8, id: '1107191', label: 'IA', title: '1107191 INTRODUCAO A INTELIGENCIA ARTIFICIAL', y: -1200},
	    {level: 8, id: 'GDSCO0028', label: 'Robótica', title: 'GDSCO0028 ROBOTICA', y: -1100},
	    {level: 8, id: 'GDSCO0054', label: 'Teoria da Informação', title: 'GDSCO0054 INTRODUCAO A TEORIA DA INFORMACAO', y: -1000},
	    {level: 8, id: 'GDSCO0040', label: 'CECI', title: 'GDSCO0040 CONCEPCAO ESTRUTURADA DE CIRCUITOS INTEGRADOS', y: -900},
	    {level: 8, id: 'HORAS1', label: '2802 horas', title: '2802 HORAS CONCLUÍDAS/75% DO CURSO', y: -800},
	    {level: 8, id: 'HORAS2', label: '1868 horas', title: '1868 HORAS CONCLUÍDAS/50% DO CURSO', y: -700},
	    

	    {level: 9, id: '1201126', label: 'Economia I', title: '1201126 ECONOMIA I', y: -1200},
	    {level: 9, id: '1204172', label: 'Adm EC', title: '1204172	ADMINISTRACAO PARA ENGENHARIA', y: -1100},
	    {level: 9, id: 'GDINF0106', label: 'Computadores e Sociedade', title: 'GDINF0106 COMPUTADORES E SOCIEDADE', y: -1000},
	    {level: 9, id: 'GDSCO0029', label: 'TCC I', title: 'GDSCO0029 TRABALHO DE CONCLUSAO DE CURSO I - ENGENHARIA DE COMPUTACAO', y: -900},

	    {level: 10, id: 'GDSCO0030', label: 'TCC II', title: 'GDSCO0030 TRABALHO DE CONCLUSAO DE CURSO II - ENGENHARIA DE COMPUTACAO', y: -1200},
	    {level: 10, id: 'GDSCO0031', label: 'Estágio', title: 'GDSCO0031 ESTAGIO SUPERVISIONADO - ENGENHARIA DA COMPUTACAO', y: -1100},
    ]);

    window.edgesSet = new vis.DataSet([


	    {to: 'GDSCO0021', from: '1107248'},
	    {to: 'GDSCO0021', from: 'GDINF0107'},
	    {to: 'GDSCO0023', from: '1107248'},
	    {to: 'GDSCO0023', from: '1103177'},
	    {to: '1101171', from: '1103177'},
	    {to: 'GDINF0102', from: 'GDINF0101'},
	    {to: 'GDINF0102', from: 'GDINF0107'},
	    {to: '1103178', from: '1103118'},
	    {to: '1103178', from: '1103177'},
	    {to: '1103179', from: '1103118'},
	    {to: 'GDINF0108', from: 'GDINF0101'},
	    {to: 'GDINF0108', from: 'GDINF0107'},

	    {to: 'GDSCO0059', from: '1101171'},
	    {to: 'GDSCO0024', from: '1101171'},
	    {to: 'GDSCO0024', from: 'GDSCO0023'},
	    {to: '1103232', from: '1103178'},
	    {to: 'GDSCO0022', from: 'GDSCO0021'},
	    {to: '1108136', from: '1103177'},

		{to: '1107148', from: 'GDINF0108'},
		{to: '1107148', from: 'GDINF0102'},
		{to: '1107186', from: 'GDINF0108'},
		{to: 'GDSCO0035', from: 'GDINF0107'},
		{to: 'GDSCO0035', from: 'GDSCO0022'},
		{to: '1103180', from: '1103178'},
		{to: '1103180', from: '1103179'},
		{to: 'GDSCO0026', from: 'GDSCO0024'},	    

		{to: '1107180', from: '1107186'},
		{to: 'GDCOC0072', from: '1103180'},
		{to: 'GDCOC0072', from: 'GDINF0107'},
		{to: 'GDCOC0072', from: 'GDINF0101'},
		{to: 'GDCOC0076', from: '1107186'},
		{to: 'GDSCO0027', from: 'GDSCO0026'},
		{to: 'GDSCO0052', from: 'GDSCO0059'},
		{to: 'GDSCO0053', from: 'GDSCO0026'},
		{to: 'GDSCO0053', from: 'GDSCO0022'},	

		{to: 'GDSCO0068', from: '1107148'},
		{to: '5101003', from: 'GDSCO0035'},
		{to: '5101003', from: 'GDSCO0027'},
		{to: '5102007', from: '1103179'},
		{to: 'GDSCO0064', from: '1103180'},

		{to: 'GDSCO0055', from: '1108136'},
		{to: '5101001', from: 'GDSCO0062'},
		{to: 'GDSCO0032', from: 'GDSCO0062'},
		{to: 'GDSCO0051', from: '1103179'},
		{to: 'GDSCO0051', from: '1107186'},
		{to: 'GDSCO0065', from: 'GDSCO0059'},
		{to: 'GDSCO0065', from: 'GDSCO0024'},
		{to: 'GDSCO0065', from: 'GDSCO0064'},
		{to: 'GDSCO0081', from: '5101003'},

		{to: 'GDSCO0054', from: '1103179'},
		{to: '1107191', from: '1107186'},
		{to: 'GDSCO0028', from: 'GDSCO0065'},
		{to: 'GDSCO0040', from: '5101003'},

		{to: 'GDSCO0030', from: 'GDSCO0029'},	   
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
    document.getElementById("curso").innerHTML = "Engenharia de Computação";
}