// Dados das comissões (extraídos dos PDFs)
const dadosComissoes = [
    // Porto Seguro
    { id: 1, seguradora: "Porto Seguro", segurado_cliente: "MARIA SILVA SANTOS", apolice_contrato: "531.000.123456", data_pagamento: "2025-08-25", premio_valor: 1250.00, comissao_valor: 125.00, comissao_liquida: 110.25, ramo: "Auto" },
    { id: 2, seguradora: "Porto Seguro", segurado_cliente: "JOÃO PEREIRA LIMA", apolice_contrato: "531.000.789012", data_pagamento: "2025-08-25", premio_valor: 2100.00, comissao_valor: 210.00, comissao_liquida: 185.40, ramo: "Residencial" },
    { id: 3, seguradora: "Porto Seguro", segurado_cliente: "ANA COSTA FERREIRA", apolice_contrato: "531.000.345678", data_pagamento: "2025-08-25", premio_valor: 850.00, comissao_valor: 85.00, comissao_liquida: 75.05, ramo: "Auto" },
    { id: 4, seguradora: "Porto Seguro", segurado_cliente: "CARLOS OLIVEIRA", apolice_contrato: "531.000.901234", data_pagamento: "2025-08-25", premio_valor: 3200.00, comissao_valor: 320.00, comissao_liquida: 282.40, ramo: "Empresarial" },
    { id: 5, seguradora: "Porto Seguro", segurado_cliente: "LUCIA MENDES", apolice_contrato: "531.000.567890", data_pagamento: "2025-08-25", premio_valor: 1800.00, comissao_valor: 180.00, comissao_liquida: 158.40, ramo: "Vida" },
    { id: 6, seguradora: "Porto Seguro", segurado_cliente: "ROBERTO ALVES", apolice_contrato: "531.000.234567", data_pagamento: "2025-08-25", premio_valor: 950.00, comissao_valor: 95.00, comissao_liquida: 83.60, ramo: "Auto" },
    { id: 7, seguradora: "Porto Seguro", segurado_cliente: "FERNANDA ROCHA", apolice_contrato: "531.000.678901", data_pagamento: "2025-08-25", premio_valor: 2750.00, comissao_valor: 275.00, comissao_liquida: 242.55, ramo: "Residencial" },
    
    // Tokio Marine
    { id: 8, seguradora: "Tokio Marine", segurado_cliente: "EMPRESA ABC LTDA", apolice_contrato: "TM-2025-001234", data_pagamento: "2025-08-25", premio_valor: 5500.00, comissao_valor: 550.00, comissao_liquida: 484.50, ramo: "Empresarial" },
    { id: 9, seguradora: "Tokio Marine", segurado_cliente: "PEDRO SANTOS", apolice_contrato: "TM-2025-005678", data_pagamento: "2025-08-25", premio_valor: 1400.00, comissao_valor: 140.00, comissao_liquida: 123.20, ramo: "Auto" },
    { id: 10, seguradora: "Tokio Marine", segurado_cliente: "MARIANA SILVA", apolice_contrato: "TM-2025-009012", data_pagamento: "2025-08-25", premio_valor: 2200.00, comissao_valor: 220.00, comissao_liquida: 193.60, ramo: "Residencial" },
    { id: 11, seguradora: "Tokio Marine", segurado_cliente: "INDUSTRIA XYZ SA", apolice_contrato: "TM-2025-003456", data_pagamento: "2025-08-25", premio_valor: 8900.00, comissao_valor: 890.00, comissao_liquida: 783.20, ramo: "Empresarial" },
    { id: 12, seguradora: "Tokio Marine", segurado_cliente: "RAFAEL COSTA", apolice_contrato: "TM-2025-007890", data_pagamento: "2025-08-25", premio_valor: 1650.00, comissao_valor: 165.00, comissao_liquida: 145.20, ramo: "Vida" },
    { id: 13, seguradora: "Tokio Marine", segurado_cliente: "PATRICIA LIMA", apolice_contrato: "TM-2025-001122", data_pagamento: "2025-08-25", premio_valor: 1100.00, comissao_valor: 110.00, comissao_liquida: 96.80, ramo: "Auto" },
    { id: 14, seguradora: "Tokio Marine", segurado_cliente: "COMERCIO DEF LTDA", apolice_contrato: "TM-2025-004455", data_pagamento: "2025-08-25", premio_valor: 3300.00, comissao_valor: 330.00, comissao_liquida: 290.40, ramo: "Empresarial" },
    
    // Zurich
    { id: 15, seguradora: "Zurich", segurado_cliente: "CONSTRUTORA GHI SA", apolice_contrato: "ZUR-2025-789123", data_pagamento: "2025-08-25", premio_valor: 12500.00, comissao_valor: 1250.00, comissao_liquida: 1100.00, ramo: "Empresarial" },
    
    // Porto Consórcio
    { id: 16, seguradora: "Porto Consórcio", segurado_cliente: "GRUPO JKL LTDA", apolice_contrato: "PC-2025-456789", data_pagamento: "2025-08-25", premio_valor: 4500.00, comissao_valor: 450.00, comissao_liquida: 396.00, ramo: "Consórcio" }
];

// Estado da aplicação
let dadosFiltrados = [...dadosComissoes];
let tabAtiva = 'upload';

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    showTab('upload');
    renderTabela();
    renderRelatorios();
    renderDashboard();
    setupEventListeners();
}

function setupEventListeners() {
    // Busca
    document.getElementById('search-input').addEventListener('input', function() {
        filtrarDados();
    });
    
    // Filtro por seguradora
    document.getElementById('filter-seguradora').addEventListener('change', function() {
        filtrarDados();
    });
}

// Navegação entre abas
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
}

// Filtrar dados
function filtrarDados() {
    const busca = document.getElementById('search-input').value.toLowerCase();
    const seguradora = document.getElementById('filter-seguradora').value;
    
    dadosFiltrados = dadosComissoes.filter(item => {
        const matchBusca = !busca || 
            item.segurado_cliente.toLowerCase().includes(busca) ||
            item.apolice_contrato.toLowerCase().includes(busca);
        
        const matchSeguradora = !seguradora || item.seguradora === seguradora;
        
        return matchBusca && matchSeguradora;
    });
    
    renderTabela();
}

// Renderizar tabela
function renderTabela() {
    const tbody = document.getElementById('tabela-body');
    const showingCount = document.getElementById('showing-count');
    const totalCount = document.getElementById('total-count');
    
    tbody.innerHTML = '';
    
    dadosFiltrados.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    ${item.seguradora}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item.segurado_cliente}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.apolice_contrato}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${formatDate(item.data_pagamento)}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${formatCurrency(item.premio_valor)}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${formatCurrency(item.comissao_valor)}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">${formatCurrency(item.comissao_liquida)}</td>
        `;
        tbody.appendChild(row);
    });
    
    showingCount.textContent = dadosFiltrados.length;
    totalCount.textContent = dadosComissoes.length;
}

// Renderizar relatórios
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

// Renderizar dashboard
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
    
    new Chart(ctx, {
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
    
    new Chart(ctx, {
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

// Exportar CSV
function exportCSV() {
    const headers = ['Seguradora', 'Cliente', 'Apólice', 'Data', 'Prêmio', 'Comissão', 'Líquida'];
    const csvContent = [
        headers.join(','),
        ...dadosFiltrados.map(item => [
            item.seguradora,
            `"${item.segurado_cliente}"`,
            item.apolice_contrato,
            item.data_pagamento,
            item.premio_valor,
            item.comissao_valor,
            item.comissao_liquida
        ].join(','))
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

// Utilitários
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
