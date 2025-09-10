// Dados iniciais (exemplo)
const dadosIniciais = [
    // Porto Seguro
    { id: 1, seguradora: "Porto Seguro", segurado_cliente: "MARIA SILVA SANTOS", apolice_contrato: "531.000.123456", data_pagamento: "2025-08-25", premio_valor: 1250.00, comissao_valor: 125.00, comissao_liquida: 110.25, ramo: "Auto", vendedor_id: null },
    { id: 2, seguradora: "Porto Seguro", segurado_cliente: "JOÃO PEREIRA LIMA", apolice_contrato: "531.000.789012", data_pagamento: "2025-08-25", premio_valor: 2100.00, comissao_valor: 210.00, comissao_liquida: 185.40, ramo: "Residencial", vendedor_id: null },
    { id: 3, seguradora: "Porto Seguro", segurado_cliente: "ANA COSTA FERREIRA", apolice_contrato: "531.000.345678", data_pagamento: "2025-08-25", premio_valor: 850.00, comissao_valor: 85.00, comissao_liquida: 75.05, ramo: "Auto", vendedor_id: null },
    { id: 4, seguradora: "Porto Seguro", segurado_cliente: "CARLOS OLIVEIRA", apolice_contrato: "531.000.901234", data_pagamento: "2025-08-25", premio_valor: 3200.00, comissao_valor: 320.00, comissao_liquida: 282.40, ramo: "Empresarial", vendedor_id: null },
    { id: 5, seguradora: "Porto Seguro", segurado_cliente: "LUCIA MENDES", apolice_contrato: "531.000.567890", data_pagamento: "2025-08-25", premio_valor: 1800.00, comissao_valor: 180.00, comissao_liquida: 158.40, ramo: "Vida", vendedor_id: null },
    { id: 6, seguradora: "Porto Seguro", segurado_cliente: "ROBERTO ALVES", apolice_contrato: "531.000.234567", data_pagamento: "2025-08-25", premio_valor: 950.00, comissao_valor: 95.00, comissao_liquida: 83.60, ramo: "Auto", vendedor_id: null },
    { id: 7, seguradora: "Porto Seguro", segurado_cliente: "FERNANDA ROCHA", apolice_contrato: "531.000.678901", data_pagamento: "2025-08-25", premio_valor: 2750.00, comissao_valor: 275.00, comissao_liquida: 242.55, ramo: "Residencial", vendedor_id: null },
    
    // Tokio Marine
    { id: 8, seguradora: "Tokio Marine", segurado_cliente: "EMPRESA ABC LTDA", apolice_contrato: "TM-2025-001234", data_pagamento: "2025-08-25", premio_valor: 5500.00, comissao_valor: 550.00, comissao_liquida: 484.50, ramo: "Empresarial", vendedor_id: null },
    { id: 9, seguradora: "Tokio Marine", segurado_cliente: "PEDRO SANTOS", apolice_contrato: "TM-2025-005678", data_pagamento: "2025-08-25", premio_valor: 1400.00, comissao_valor: 140.00, comissao_liquida: 123.20, ramo: "Auto", vendedor_id: null },
    { id: 10, seguradora: "Tokio Marine", segurado_cliente: "MARIANA SILVA", apolice_contrato: "TM-2025-009012", data_pagamento: "2025-08-25", premio_valor: 2200.00, comissao_valor: 220.00, comissao_liquida: 193.60, ramo: "Residencial", vendedor_id: null },
    { id: 11, seguradora: "Tokio Marine", segurado_cliente: "INDUSTRIA XYZ SA", apolice_contrato: "TM-2025-003456", data_pagamento: "2025-08-25", premio_valor: 8900.00, comissao_valor: 890.00, comissao_liquida: 783.20, ramo: "Empresarial", vendedor_id: null },
    { id: 12, seguradora: "Tokio Marine", segurado_cliente: "RAFAEL COSTA", apolice_contrato: "TM-2025-007890", data_pagamento: "2025-08-25", premio_valor: 1650.00, comissao_valor: 165.00, comissao_liquida: 145.20, ramo: "Vida", vendedor_id: null },
    { id: 13, seguradora: "Tokio Marine", segurado_cliente: "PATRICIA LIMA", apolice_contrato: "TM-2025-001122", data_pagamento: "2025-08-25", premio_valor: 1100.00, comissao_valor: 110.00, comissao_liquida: 96.80, ramo: "Auto", vendedor_id: null },
    { id: 14, seguradora: "Tokio Marine", segurado_cliente: "COMERCIO DEF LTDA", apolice_contrato: "TM-2025-004455", data_pagamento: "2025-08-25", premio_valor: 3300.00, comissao_valor: 330.00, comissao_liquida: 290.40, ramo: "Empresarial", vendedor_id: null },
    
    // Zurich
    { id: 15, seguradora: "Zurich", segurado_cliente: "CONSTRUTORA GHI SA", apolice_contrato: "ZUR-2025-789123", data_pagamento: "2025-08-25", premio_valor: 12500.00, comissao_valor: 1250.00, comissao_liquida: 1100.00, ramo: "Empresarial", vendedor_id: null },
    
    // Porto Consórcio
    { id: 16, seguradora: "Porto Consórcio", segurado_cliente: "GRUPO JKL LTDA", apolice_contrato: "PC-2025-456789", data_pagamento: "2025-08-25", premio_valor: 4500.00, comissao_valor: 450.00, comissao_liquida: 396.00, ramo: "Consórcio", vendedor_id: null }
];

// Estado da aplicação
let dadosComissoes = [];
let vendedores = [];
let dadosFiltrados = [];
let tabAtiva = 'upload';
let editandoVendedor = null;
let modalComissaoId = null;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    carregarDados();
    showTab('upload');
    renderTabela();
    renderVendedores();
    renderRelatorios();
    renderDashboard();
    setupEventListeners();
}

function carregarDados() {
    // Carregar dados do localStorage ou usar dados iniciais
    const dadosSalvos = localStorage.getItem('dadosComissoes');
    const vendedoresSalvos = localStorage.getItem('vendedores');
    
    if (dadosSalvos) {
        dadosComissoes = JSON.parse(dadosSalvos);
    } else {
        dadosComissoes = [...dadosIniciais];
        salvarDados();
    }
    
    if (vendedoresSalvos) {
        vendedores = JSON.parse(vendedoresSalvos);
    } else {
        // Vendedores iniciais
        vendedores = [
            { id: 1, nome: "João Silva", email: "joao@exemplo.com", telefone: "(11) 99999-1111", ativo: true },
            { id: 2, nome: "Maria Santos", email: "maria@exemplo.com", telefone: "(11) 99999-2222", ativo: true }
        ];
        salvarVendedores();
    }
    
    dadosFiltrados = [...dadosComissoes];
}

function salvarDados() {
    localStorage.setItem('dadosComissoes', JSON.stringify(dadosComissoes));
}

function salvarVendedores() {
    localStorage.setItem('vendedores', JSON.stringify(vendedores));
}

function setupEventListeners() {
    // Busca
    document.getElementById('search-input').addEventListener('input', function() {
        filtrarDados();
    });
    
    // Filtros
    document.getElementById('filter-seguradora').addEventListener('change', function() {
        filtrarDados();
    });
    
    document.getElementById('filter-vendedor').addEventListener('change', function() {
        filtrarDados();
    });
}

// === UPLOAD DE ARQUIVOS ===

function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('border-blue-500', 'bg-blue-50');
}

function handleDragLeave(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('border-blue-500', 'bg-blue-50');
}

function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('border-blue-500', 'bg-blue-50');
    
    const files = Array.from(e.dataTransfer.files);
    processarArquivos(files);
}

function handleFileSelect(e) {
    const files = Array.from(e.target.files);
    processarArquivos(files);
}

async function processarArquivos(files) {
    const resultados = document.getElementById('upload-results');
    const status = document.getElementById('upload-status');
    
    resultados.classList.remove('hidden');
    status.innerHTML = '<div class="text-blue-600"><i class="fas fa-spinner fa-spin mr-2"></i>Processando arquivos...</div>';
    
    const processados = [];
    
    for (const file of files) {
        try {
            if (file.type === 'application/pdf') {
                const resultado = await processarPDF(file);
                processados.push(resultado);
            } else if (file.type === 'text/csv' || file.name.endsWith('.csv')) {
                const resultado = await processarCSV(file);
                processados.push(resultado);
            } else {
                processados.push({
                    arquivo: file.name,
                    status: 'erro',
                    erro: 'Formato não suportado'
                });
            }
        } catch (error) {
            processados.push({
                arquivo: file.name,
                status: 'erro',
                erro: error.message
            });
        }
    }
    
    // Mostrar resultados
    status.innerHTML = '';
    processados.forEach(resultado => {
        const div = document.createElement('div');
        div.className = `p-3 rounded-lg border ${resultado.status === 'sucesso' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`;
        
        if (resultado.status === 'sucesso') {
            div.innerHTML = `
                <div class="flex items-center">
                    <i class="fas fa-check-circle text-green-600 mr-2"></i>
                    <div>
                        <p class="font-medium text-green-800">${resultado.arquivo}</p>
                        <p class="text-sm text-green-600">
                            ${resultado.registros_extraidos} registros extraídos • 
                            ${resultado.registros_salvos} salvos • 
                            Tipo: ${resultado.tipo}
                        </p>
                    </div>
                </div>
            `;
        } else {
            div.innerHTML = `
                <div class="flex items-center">
                    <i class="fas fa-exclamation-circle text-red-600 mr-2"></i>
                    <div>
                        <p class="font-medium text-red-800">${resultado.arquivo}</p>
                        <p class="text-sm text-red-600">${resultado.erro}</p>
                    </div>
                </div>
            `;
        }
        
        status.appendChild(div);
    });
    
    // Atualizar interface
    renderTabela();
    renderRelatorios();
    renderDashboard();
}

async function processarPDF(file) {
    // Simulação de processamento de PDF
    // Em uma implementação real, você usaria uma biblioteca como PDF.js
    const texto = await lerArquivoComoTexto(file);
    
    // Detectar tipo de seguradora
    let tipo = 'desconhecido';
    if (texto.includes('Porto Seguro') || texto.includes('PORTO SEGURO')) {
        tipo = 'porto';
    } else if (texto.includes('Tokio Marine') || texto.includes('TOKIO MARINE')) {
        tipo = 'tokio';
    } else if (texto.includes('Zurich') || texto.includes('ZURICH')) {
        tipo = 'zurich';
    } else if (texto.includes('Porto Consórcio') || texto.includes('PORTO CONSÓRCIO')) {
        tipo = 'consorcio';
    }
    
    // Simular extração de dados (implementação simplificada)
    const registrosExtraidos = simularExtracaoPDF(tipo, file.name);
    
    // Salvar registros
    let registrosSalvos = 0;
    registrosExtraidos.forEach(registro => {
        const novoId = Math.max(...dadosComissoes.map(d => d.id), 0) + 1;
        registro.id = novoId + registrosSalvos;
        dadosComissoes.push(registro);
        registrosSalvos++;
    });
    
    salvarDados();
    dadosFiltrados = [...dadosComissoes];
    
    return {
        arquivo: file.name,
        status: 'sucesso',
        tipo: tipo,
        registros_extraidos: registrosExtraidos.length,
        registros_salvos: registrosSalvos
    };
}

async function processarCSV(file) {
    const texto = await lerArquivoComoTexto(file);
    const linhas = texto.split('\n').filter(linha => linha.trim());
    
    if (linhas.length < 2) {
        throw new Error('Arquivo CSV vazio ou inválido');
    }
    
    const cabecalho = linhas[0].split(',').map(col => col.trim().replace(/"/g, ''));
    const registrosExtraidos = [];
    
    for (let i = 1; i < linhas.length; i++) {
        const valores = linhas[i].split(',').map(val => val.trim().replace(/"/g, ''));
        
        if (valores.length >= cabecalho.length) {
            const registro = {
                seguradora: valores[0] || 'Não informado',
                segurado_cliente: valores[1] || 'Não informado',
                apolice_contrato: valores[2] || '',
                data_pagamento: valores[3] || new Date().toISOString().split('T')[0],
                premio_valor: parseFloat(valores[4]) || 0,
                comissao_valor: parseFloat(valores[5]) || 0,
                comissao_liquida: parseFloat(valores[6]) || 0,
                ramo: valores[7] || 'Não informado',
                vendedor_id: null
            };
            
            registrosExtraidos.push(registro);
        }
    }
    
    // Salvar registros
    let registrosSalvos = 0;
    registrosExtraidos.forEach(registro => {
        const novoId = Math.max(...dadosComissoes.map(d => d.id), 0) + 1;
        registro.id = novoId + registrosSalvos;
        dadosComissoes.push(registro);
        registrosSalvos++;
    });
    
    salvarDados();
    dadosFiltrados = [...dadosComissoes];
    
    return {
        arquivo: file.name,
        status: 'sucesso',
        tipo: 'csv',
        registros_extraidos: registrosExtraidos.length,
        registros_salvos: registrosSalvos
    };
}

function lerArquivoComoTexto(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => resolve(e.target.result);
        reader.onerror = e => reject(new Error('Erro ao ler arquivo'));
        reader.readAsText(file);
    });
}

function simularExtracaoPDF(tipo, nomeArquivo) {
    // Simulação de extração baseada no tipo
    const registros = [];
    const numRegistros = Math.floor(Math.random() * 5) + 1; // 1-5 registros
    
    for (let i = 0; i < numRegistros; i++) {
        const registro = {
            seguradora: tipo === 'porto' ? 'Porto Seguro' : 
                       tipo === 'tokio' ? 'Tokio Marine' :
                       tipo === 'zurich' ? 'Zurich' : 'Porto Consórcio',
            segurado_cliente: `CLIENTE ${Math.floor(Math.random() * 1000)}`,
            apolice_contrato: `${tipo.toUpperCase()}-${Date.now()}-${i}`,
            data_pagamento: new Date().toISOString().split('T')[0],
            premio_valor: Math.floor(Math.random() * 5000) + 500,
            comissao_valor: 0,
            comissao_liquida: 0,
            ramo: ['Auto', 'Residencial', 'Empresarial', 'Vida'][Math.floor(Math.random() * 4)],
            vendedor_id: null
        };
        
        registro.comissao_valor = registro.premio_valor * 0.1;
        registro.comissao_liquida = registro.comissao_valor * 0.88;
        
        registros.push(registro);
    }
    
    return registros;
}

// === NAVEGAÇÃO ===

function showTab(tabName) {
    // Esconder todas as abas
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });
    
    // Remover classe ativa de todos os botões
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Mostrar aba selecionada
    document.getElementById(`content-${tabName}`).classList.remove('hidden');
    document.getElementById(`tab-${tabName}`).classList.add('active');
    
    tabAtiva = tabName;
    
    // Atualizar conteúdo específico da aba
    if (tabName === 'vendedores') {
        renderVendedores();
    }
}

// === FILTROS ===

function filtrarDados() {
    const busca = document.getElementById('search-input').value.toLowerCase();
    const seguradora = document.getElementById('filter-seguradora').value;
    const vendedorId = document.getElementById('filter-vendedor').value;
    
    dadosFiltrados = dadosComissoes.filter(item => {
        const matchBusca = !busca || 
            item.segurado_cliente.toLowerCase().includes(busca) ||
            item.apolice_contrato.toLowerCase().includes(busca);
        
        const matchSeguradora = !seguradora || item.seguradora === seguradora;
        
        const matchVendedor = !vendedorId || item.vendedor_id == vendedorId;
        
        return matchBusca && matchSeguradora && matchVendedor;
    });
    
    renderTabela();
}

// === TABELA ===

function renderTabela() {
    const tbody = document.getElementById('tabela-body');
    const showingCount = document.getElementById('showing-count');
    const totalCount = document.getElementById('total-count');
    const filterVendedor = document.getElementById('filter-vendedor');
    
    // Atualizar filtro de vendedores
    filterVendedor.innerHTML = '<option value="">Todos os Vendedores</option>';
    vendedores.filter(v => v.ativo).forEach(vendedor => {
        const option = document.createElement('option');
        option.value = vendedor.id;
        option.textContent = vendedor.nome;
        filterVendedor.appendChild(option);
    });
    
    tbody.innerHTML = '';
    
    dadosFiltrados.forEach(item => {
        const vendedor = vendedores.find(v => v.id == item.vendedor_id);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    ${item.seguradora}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item.segurado_cliente}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${vendedor ? 
                    `<span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">${vendedor.nome}</span>` : 
                    '<span class="text-gray-400">Não atribuído</span>'
                }
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.apolice_contrato}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${formatDate(item.data_pagamento)}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${formatCurrency(item.premio_valor)}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${formatCurrency(item.comissao_valor)}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">${formatCurrency(item.comissao_liquida)}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button onclick="abrirModalVendedor(${item.id})" class="text-blue-600 hover:text-blue-900">
                    <i class="fas fa-user-plus mr-1"></i>Vendedor
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
    
    showingCount.textContent = dadosFiltrados.length;
    totalCount.textContent = dadosComissoes.length;
}

// === VENDEDORES ===

function renderVendedores() {
    renderListaVendedores();
    renderEstatisticasVendedores();
}

function renderListaVendedores() {
    const container = document.getElementById('vendedores-list');
    container.innerHTML = '';
    
    vendedores.filter(v => v.ativo).forEach(vendedor => {
        const comissoes = dadosComissoes.filter(c => c.vendedor_id == vendedor.id);
        const totalComissao = comissoes.reduce((sum, c) => sum + c.comissao_liquida, 0);
        
        const div = document.createElement('div');
        div.className = 'border rounded-lg p-4 hover:bg-gray-50';
        div.innerHTML = `
            <div class="flex justify-between items-start">
                <div class="flex-1">
                    <h3 class="font-medium text-gray-900">${vendedor.nome}</h3>
                    <p class="text-sm text-gray-500">${vendedor.email}</p>
                    <p class="text-sm text-gray-500">${vendedor.telefone}</p>
                    <div class="mt-2 flex items-center space-x-4 text-sm">
                        <span class="text-blue-600">${comissoes.length} vendas</span>
                        <span class="text-green-600">${formatCurrency(totalComissao)}</span>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <button onclick="editarVendedor(${vendedor.id})" class="text-blue-600 hover:text-blue-900">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button onclick="excluirVendedor(${vendedor.id})" class="text-red-600 hover:text-red-900">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        container.appendChild(div);
    });
}

function renderEstatisticasVendedores() {
    const container = document.getElementById('vendedores-stats');
    container.innerHTML = '';
    
    const stats = vendedores.filter(v => v.ativo).map(vendedor => {
        const comissoes = dadosComissoes.filter(c => c.vendedor_id == vendedor.id);
        return {
            vendedor: vendedor.nome,
            vendas: comissoes.length,
            total: comissoes.reduce((sum, c) => sum + c.comissao_liquida, 0)
        };
    }).sort((a, b) => b.total - a.total);
    
    stats.forEach((stat, index) => {
        const div = document.createElement('div');
        div.className = 'flex justify-between items-center py-2 border-b';
        div.innerHTML = `
            <div>
                <span class="text-sm font-medium text-gray-900">${index + 1}. ${stat.vendedor}</span>
                <span class="text-xs text-gray-500 ml-2">(${stat.vendas} vendas)</span>
            </div>
            <span class="text-sm font-medium text-green-600">${formatCurrency(stat.total)}</span>
        `;
        container.appendChild(div);
    });
}

function showVendedorForm() {
    document.getElementById('vendedor-form').classList.remove('hidden');
    editandoVendedor = null;
    limparFormVendedor();
}

function limparFormVendedor() {
    document.getElementById('vendedor-nome').value = '';
    document.getElementById('vendedor-email').value = '';
    document.getElementById('vendedor-telefone').value = '';
}

function editarVendedor(id) {
    const vendedor = vendedores.find(v => v.id == id);
    if (vendedor) {
        editandoVendedor = id;
        document.getElementById('vendedor-form').classList.remove('hidden');
        document.getElementById('vendedor-nome').value = vendedor.nome;
        document.getElementById('vendedor-email').value = vendedor.email;
        document.getElementById('vendedor-telefone').value = vendedor.telefone;
    }
}

function salvarVendedor() {
    const nome = document.getElementById('vendedor-nome').value.trim();
    const email = document.getElementById('vendedor-email').value.trim();
    const telefone = document.getElementById('vendedor-telefone').value.trim();
    
    if (!nome) {
        alert('Nome é obrigatório');
        return;
    }
    
    if (editandoVendedor) {
        // Editar vendedor existente
        const vendedor = vendedores.find(v => v.id == editandoVendedor);
        if (vendedor) {
            vendedor.nome = nome;
            vendedor.email = email;
            vendedor.telefone = telefone;
        }
    } else {
        // Novo vendedor
        const novoId = Math.max(...vendedores.map(v => v.id), 0) + 1;
        vendedores.push({
            id: novoId,
            nome: nome,
            email: email,
            telefone: telefone,
            ativo: true
        });
    }
    
    salvarVendedores();
    cancelarVendedor();
    renderVendedores();
    renderTabela(); // Atualizar filtros
}

function cancelarVendedor() {
    document.getElementById('vendedor-form').classList.add('hidden');
    editandoVendedor = null;
    limparFormVendedor();
}

function excluirVendedor(id) {
    if (confirm('Tem certeza que deseja excluir este vendedor?')) {
        const vendedor = vendedores.find(v => v.id == id);
        if (vendedor) {
            vendedor.ativo = false;
            
            // Remover associações
            dadosComissoes.forEach(comissao => {
                if (comissao.vendedor_id == id) {
                    comissao.vendedor_id = null;
                }
            });
            
            salvarVendedores();
            salvarDados();
            renderVendedores();
            renderTabela();
        }
    }
}

// === MODAL VENDEDOR ===

function abrirModalVendedor(comissaoId) {
    modalComissaoId = comissaoId;
    const comissao = dadosComissoes.find(c => c.id == comissaoId);
    
    if (comissao) {
        document.getElementById('modal-cliente').textContent = comissao.segurado_cliente;
        
        const select = document.getElementById('modal-vendedor-select');
        select.innerHTML = '<option value="">Selecione um vendedor</option>';
        
        vendedores.filter(v => v.ativo).forEach(vendedor => {
            const option = document.createElement('option');
            option.value = vendedor.id;
            option.textContent = vendedor.nome;
            option.selected = vendedor.id == comissao.vendedor_id;
            select.appendChild(option);
        });
        
        document.getElementById('vendedor-modal').classList.remove('hidden');
    }
}

function confirmarAssociacao() {
    const vendedorId = document.getElementById('modal-vendedor-select').value;
    const comissao = dadosComissoes.find(c => c.id == modalComissaoId);
    
    if (comissao) {
        comissao.vendedor_id = vendedorId || null;
        salvarDados();
        renderTabela();
        renderVendedores();
    }
    
    fecharModal();
}

function fecharModal() {
    document.getElementById('vendedor-modal').classList.add('hidden');
    modalComissaoId = null;
}

// === RELATÓRIOS ===

function renderRelatorios() {
    renderRelatorioSeguradoras();
    renderRelatorioClientes();
}

function renderRelatorioSeguradoras() {
    const container = document.getElementById('relatorio-seguradoras');
    const resumo = {};
    
    dadosComissoes.forEach(item => {
        if (!resumo[item.seguradora]) {
            resumo[item.seguradora] = {
                registros: 0,
                premio_total: 0,
                comissao_total: 0,
                comissao_liquida: 0
            };
        }
        
        resumo[item.seguradora].registros++;
        resumo[item.seguradora].premio_total += item.premio_valor;
        resumo[item.seguradora].comissao_total += item.comissao_valor;
        resumo[item.seguradora].comissao_liquida += item.comissao_liquida;
    });
    
    container.innerHTML = '';
    
    Object.entries(resumo).forEach(([seguradora, dados]) => {
        const div = document.createElement('div');
        div.className = 'border rounded-lg p-4';
        div.innerHTML = `
            <h3 class="font-medium text-gray-900 mb-2">${seguradora}</h3>
            <div class="grid grid-cols-2 gap-4 text-sm">
                <div>
                    <span class="text-gray-500">Registros:</span>
                    <span class="font-medium">${dados.registros}</span>
                </div>
                <div>
                    <span class="text-gray-500">Prêmio:</span>
                    <span class="font-medium">${formatCurrency(dados.premio_total)}</span>
                </div>
                <div>
                    <span class="text-gray-500">Comissão:</span>
                    <span class="font-medium">${formatCurrency(dados.comissao_total)}</span>
                </div>
                <div>
                    <span class="text-gray-500">Líquida:</span>
                    <span class="font-medium text-green-600">${formatCurrency(dados.comissao_liquida)}</span>
                </div>
            </div>
        `;
        container.appendChild(div);
    });
}

function renderRelatorioClientes() {
    const container = document.getElementById('relatorio-clientes');
    const resumo = {};
    
    dadosComissoes.forEach(item => {
        if (!resumo[item.segurado_cliente]) {
            resumo[item.segurado_cliente] = {
                registros: 0,
                comissao_total: 0
            };
        }
        
        resumo[item.segurado_cliente].registros++;
        resumo[item.segurado_cliente].comissao_total += item.comissao_liquida;
    });
    
    const topClientes = Object.entries(resumo)
        .sort((a, b) => b[1].comissao_total - a[1].comissao_total)
        .slice(0, 10);
    
    container.innerHTML = '';
    
    topClientes.forEach(([cliente, dados], index) => {
        const div = document.createElement('div');
        div.className = 'flex justify-between items-center py-2 border-b';
        div.innerHTML = `
            <div>
                <span class="text-sm font-medium text-gray-900">${index + 1}. ${cliente}</span>
                <span class="text-xs text-gray-500 ml-2">(${dados.registros} registros)</span>
            </div>
            <span class="text-sm font-medium text-green-600">${formatCurrency(dados.comissao_total)}</span>
        `;
        container.appendChild(div);
    });
}

// === DASHBOARD ===

function renderDashboard() {
    renderKPIs();
    renderCharts();
}

function renderKPIs() {
    const totalRegistros = dadosComissoes.length;
    const premioTotal = dadosComissoes.reduce((sum, item) => sum + item.premio_valor, 0);
    const comissaoTotal = dadosComissoes.reduce((sum, item) => sum + item.comissao_valor, 0);
    const liquidaTotal = dadosComissoes.reduce((sum, item) => sum + item.comissao_liquida, 0);
    
    document.getElementById('kpi-registros').textContent = totalRegistros;
    document.getElementById('kpi-premio').textContent = formatCurrency(premioTotal);
    document.getElementById('kpi-comissao').textContent = formatCurrency(comissaoTotal);
    document.getElementById('kpi-liquida').textContent = formatCurrency(liquidaTotal);
}

function renderCharts() {
    renderChartSeguradoras();
    renderChartEvolucao();
}

function renderChartSeguradoras() {
    const ctx = document.getElementById('chart-seguradoras').getContext('2d');
    const resumo = {};
    
    dadosComissoes.forEach(item => {
        if (!resumo[item.seguradora]) {
            resumo[item.seguradora] = 0;
        }
        resumo[item.seguradora] += item.comissao_liquida;
    });
    
    // Destruir gráfico anterior se existir
    if (window.chartSeguradoras) {
        window.chartSeguradoras.destroy();
    }
    
    window.chartSeguradoras = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(resumo),
            datasets: [{
                data: Object.values(resumo),
                backgroundColor: [
                    '#3B82F6',
                    '#10B981',
                    '#F59E0B',
                    '#EF4444',
                    '#8B5CF6'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function renderChartEvolucao() {
    const ctx = document.getElementById('chart-evolucao').getContext('2d');
    
    // Dados simulados de evolução mensal
    const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'];
    const valores = [2500, 3200, 2800, 3500, 4100, 3800, 4200, 4500];
    
    // Destruir gráfico anterior se existir
    if (window.chartEvolucao) {
        window.chartEvolucao.destroy();
    }
    
    window.chartEvolucao = new Chart(ctx, {
        type: 'line',
        data: {
            labels: meses,
            datasets: [{
                label: 'Comissão Líquida',
                data: valores,
                borderColor: '#3B82F6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return 'R$ ' + value.toLocaleString('pt-BR');
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// === EXPORTAÇÃO ===

function exportCSV() {
    const headers = ['Seguradora', 'Cliente', 'Vendedor', 'Apólice', 'Data', 'Prêmio', 'Comissão', 'Líquida'];
    const csvContent = [
        headers.join(','),
        ...dadosFiltrados.map(item => {
            const vendedor = vendedores.find(v => v.id == item.vendedor_id);
            return [
                item.seguradora,
                `"${item.segurado_cliente}"`,
                vendedor ? `"${vendedor.nome}"` : '',
                item.apolice_contrato,
                item.data_pagamento,
                item.premio_valor,
                item.comissao_valor,
                item.comissao_liquida
            ].join(',');
        })
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'comissoes.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// === UTILITÁRIOS ===

function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('pt-BR');
}

// CSS para as abas
const style = document.createElement('style');
style.textContent = `
    .tab-button {
        padding: 1rem 1.5rem;
        border-bottom: 2px solid transparent;
        color: #6B7280;
        font-medium: 500;
        transition: all 0.2s;
    }
    
    .tab-button:hover {
        color: #374151;
        border-bottom-color: #D1D5DB;
    }
    
    .tab-button.active {
        color: #3B82F6;
        border-bottom-color: #3B82F6;
    }
`;
document.head.appendChild(style);
