
function changemat() {
    if(typeof mycall !== 'undefined'){
        if(mycall==false){
            resetcookies();
        }
    }
    window.nodesSet = new vis.DataSet([

	    {level: 1, id: '1103118', label: 'Cál. Vetorial e G. Analítica', title: '1103118 CÁLCULO VETORIAL E GEOMETRIA ANALÍTICA', y: -1200},
	    {level: 1, id: '1107201', label: 'Metodologia', title: '1107201 METODOLOGIA DO TRABALHO CIENTÍFICO', y: -1100},
	    {level: 1, id: '1107250', label: 'Introdução à C.C', title: '1107248 INTRODUÇÃO À COMPUTAÇÃO CIENTÍFICA', y: -1000},
	    {level: 1, id: '1103177', label: 'Cálculo I', title: '1103177 CÁLCULO DIFERENCIAL E INTEGRAL I', y: -900},
	    {level: 1, id: '1107136', label: 'Int. a programação', title: '1107136 INTRODUÇÃO A PROGRAMAÇÃO PARA ENGENHARIA DE COMPUTAÇÃO', y: -800},

	    {level: 2, id: '1101171', label: 'Física I', title: '1101171 FÍSICA APLICADA À COMPUTAÇÃO I', y: -1200},
	    {level: 2, id: '1103178', label: 'Cálculo II', title: '1103178 CÁLCULO DIFERENCIAL E INTEGRAL II', y: -1100},
	    {level: 2, id: '1103179', label: 'Álgebra', title: '1103179 INTRODUÇÃO A ÁLGEBRA LINEAR', y: -1000},
	    {level: 2, id: '1107147', label: 'LP I', title: '1107147 LINGUAGEM DE PROGRAMAÇÃO I', y: -900},
	    {level: 2, id: '5102001', label: 'Matemática Discreta', title: '5102001 MATEMÁTICA DISCRETA', y: -800},
	    {level: 2, id: '5102002', label: 'Pesquisa aplicada', title: '5102002 PESQUISA APLICADA À MATEMÁTICA COMPUTACIONAL', y: -700},
	    {level: 2, id: 'GDCOC0073', label: 'Relações Étnicas', title: 'GDCOC0073 EDUCAÇÃO DAS RELAÇÕES ÉTNICO RACIAIS', y: -600},

	    {level: 3, id: '1103180', label: 'Séries Eq. Ordinárias', title: '1103180 SÉRIES E EQUAÇÕES DIFERENCIAIS ORDINÁRIAS', y: -1200},
	    {level: 3, id: '1103232', label: 'Cálculo III', title: '1103232 CÁLCULO DIFERENCIAL E INTEGRAL III', y: -1100},
	    {level: 3, id: '5102006', label: 'Probabilidades I', title: '5102006 CÁLCULO DAS PROBABILIDADES I', y: -1000},
	    {level: 3, id: '1107186', label: 'Estrutura de Dados', title: '1107186	ESTRUTURA DE DADOS', y: -900},
	    {level: 3, id: '5102007', label: 'Pesquisa Operacional', title: '5102007 PESQUISA OPERACIONAL', y: -800},
	    {level: 3, id: 'GDCOC0074', label: 'Política Ambiental', title: 'GDCOC0074 POLÍTICAS DE EDUCAÇÃO AMBIENTAL', y: -700},
	    {level: 3, id: 'GDSCO0051', label: 'Computação Gráfica', title: 'GDSCO0051 INTRODUÇÃO À COMPUTAÇÃO GRÁFICA', y: -600},
	    
	    {level: 4, id: '1101172', label: 'Física II', title: '1101172 FÍSICA APLICADA À COMPUTAÇÃO II', y: -1200},
	    {level: 4, id: '1107148', label: 'LP II', title: '1107148 LINGUAGEM DE PROGRAMAÇÃO II', y: -1100},
	    {level: 4, id: '1107204', label: 'Recuperação de Dados', title: '1107204 ORDENAÇÃO E RECUPERAÇÃO DE DADOS', y: -1000},  
	    {level: 4, id: '5102005', label: 'Processos Estocásticos', title: '5102005 INTRODUÇÃO AOS PROCESSOS ESTOCÁTICOS', y: -900},
	    {level: 4, id: 'GDCOC0068', label: 'Análise Real', title: 'GDCOC0068 INTRODUÇÃO À ANÁLISE REAL', y: -800},  
	    {level: 4, id: 'GDCOC0072', label: 'Cál. Numérico', title: 'GDCOC0072 CÁLCULO NUMÉRICO', y: -700},  

	    {level: 5, id: '5102009', label: 'Álgebra Linear', title: '5102009 ÁLGEBRA LINEAR COMPUTACIONAL', y: -1200},
	    {level: 5, id: '5102044', label: 'Eq. Diferencias Ordinárias', title: '5102044 EQUAÇÕES DIFERENCIAIS ORDINÁRIAS APLICADAS', y: -1100},
	    {level: 5, id: '5102045', label: 'Simulação Computacional', title: '5102045	SIMULAÇÃO COMPUTACIONAL', y: -1000},
	    {level: 5, id: '5102046', label: 'Programação', title: '5102046 PROGRAMAÇÃO NÃO LINEAR', y: -900},
	    {level: 5, id: '5102047', label: 'Banco de Dados I', title: '5102047 BANDO DE DADOS', y: -800},

	    {level: 6, id: '5102049', label: 'Eq. Diferencias Parciais', title: '5102049 EQUAÇÕES DIFERENCIAIS PARCIAIS APLICADAS', y: -1200},
	    {level: 6, id: '5102050', label: 'Programação Linear', title: '5102050 PROGRAMAÇÃO LINEAR INTEIRA', y: -1100},
	    {level: 6, id: '5102052', label: 'Análise Numérica', title: '5102052 ANÁLISE NUMÉRICA', y: -1000},
	    {level: 6, id: '5102053', label: 'Estágio I', title: '5102053 ESTÁGIO SUPERVISIONADO I', y: -900},	    

	    {level: 7, id: '5102054', label: 'Estágio II', title: '5102054 ESTÁGIO SUPERVISIONADO II', y: -1200},
	    {level: 7, id: '5102055', label: 'Soluções Numéricas I', title: '5102055 SOLUÇÕES NUMÉRICAS EM EQUAÇÕES DIFERENCIAIS I', y: -1100},
	    {level: 7, id: '5102058', label: 'Teoria do Controle', title: '5102058 TEORIA DO CONTROLE ÓTIMO', y: -1000},

	    {level: 8, id: 'GDCOC0061', label: 'Soluções Numéricas II', title: 'GDCOC0061 SOLUÇÕES NUMÉRICAS EM EQUAÇÕES DIFERENCIAIS II', y: -1200},
	    {level: 8, id: 'GDCOC0062', label: 'TCC', title: 'GDCOC0062 TRABALHO DE CONCLUSÃO DE CURSO', y: -1100},
    ]);

    window.edgesSet = new vis.DataSet([

    	{to: '1103178', from: '1103177'},
    	{to: '1103179', from: '1103118'},
    	{to: '1107147', from: '1107136'},
    	{to: '1101171', from: '1103177'},
    	{to: '1101171', from: '1103118'},

    	{to: '1103232', from: '1103178'},
    	{to: '1103232', from: '1103118'},
    	{to: '1103180', from: '1103178'},
    	{to: '1103180', from: '1103179'},
    	{to: '1107186', from: '1107147'},

    	{to: '5102005', from: '5102006'},
    	{to: 'GDCOC0068', from: '5102001'},
    	{to: 'GDCOC0068', from: '1103180'},
    	{to: 'GDCOC0072', from: '1103180'},
    	{to: 'GDCOC0072', from: '1107147'},
    	{to: '1101172', from: '1101171'},
    	{to: '1107148', from: '1107147'},
    	{to: '1107204', from: '1107186'},

    	{to: '5102009', from: '1103179'},
    	{to: '5102044', from: 'GDCOC0068'},
    	{to: '5102045', from: '5102006'},
    	{to: '5102046', from: '1103232'},
    	{to: '5102046', from: '5102007'},
    	{to: '5102047', from: '1107204'},

    	{to: '5102049', from: 'GDCOC0068'},
    	{to: '5102050', from: '5102007'},
    	{to: '5102052', from: 'GDCOC0072'},
    	{to: '5102053', from: '1107201'},
	    
	    {to: '5102054', from: '5102053'},
    	{to: '5102055', from: 'GDCOC0072'},
    	{to: '5102058', from: '5102049'},

    	{to: 'GDCOC0061', from: '5102055'},
    	{to: 'GDCOC0062', from: '5102054'},
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
    document.getElementById("curso").innerHTML = "Matemática Computacional";
}