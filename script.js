
// Função para normalizar textos (remove acentos, espaços extras e padroniza para minúsculo)
function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
}
// Dados das empresas e regiões
let empresasData = [];
let regionMapping = {};
let geoJsonData = null;
let map = null;
let currentLayer = null;

// Mapeamento das regiões
const regioes = {
    '11': [
        'Araruna',
        'Barbosa Ferraz',
        'Campo Mourão',
        'Corumbataí do Sul',
        'Engenheiro Beltrão',
        'Farol',
        'Fênix',
        'Moreira Sales',
        'Terra boa',
        'Peabiru',
        'Quinta do Sol'
    ],
    '12': [
        'Vila Alta',
        'Esperança Nova',
        'Nova Olimpia',
        'Maria Helena',
        'Cruzeiro do Oeste',
        'Douradina',
        'Icaraíma',
        'Ivaté',
        'Perobal',
        'São Jorge do Patrocínio',
        'Tapira',
        'Umuarama',
        'Xambrê'
    ],
    '13': [
        'Cianorte',
        'Tuneiras do Oeste',
        'Jussara',
        'Japurá',
        'Guaporema',
        'Tapejara',
        'cidade gaúcha',
        'Indianópolis',
        'são tome',
        'São Manoel do Paraná',
        'Rondon'
    ],
    '14': [
        'Alto Paraná',
        'Amaporã',
        'Cruzeiro do Sul',
        'Diamante do Norte',
        'Guairaçá',
        'Itaúna do Sul',
        'Inajá',
        'Jardim Olinda',
        'Loanda',
        'Marilena',
        'Mirador',
        'Nova Aliança do Ivaí',
        'Nova Londrina',
        'Paraíso do Norte',
        'Paranapoema',
        'Paranavaí',
        'Planaltina do Paraná',
        'Porto Rico',
        'Querência do Norte',
        'Santa Cruz do Monte Castelo',
        'Santa Isabel do Ivaí',
        'Santa Mônica',
        'São Carlos do Ivaí',
        'São Pedro do Paraná',
        'São João do Caiuá',
        'Santo Antônio do Caiuá',
        'Terra Rica',
        'Tamboara'
    ],
    '15': [
        'Astorga',
        'Atalaia',
        'Colorado',
        'Doutor Camargo',
        'Floresta',
        'Florai',
        'Flórida',
        'Iguaraçu',
        'Itaguajé',
        'Itambé',
        'Ivatuba',
        'Lobato',
        'Maringá',
        'Mandaguaçu',
        'Mandaguari',
        'Marialva',
        'Munhoz de Melo',
        'Nossa Senhora das Graças',
        'Nova Esperança',
        'Ourizona',
        'Paiçandu',
        'Paranacity',
        'Presidente Castelo Branco',
        'Santo Inácio',
        'Sarandi',
        'Santa Fé',
        'Santa Inês',
        'São Jorge do Ivaí',
        'Uniflor'
    ],
    '16': [
        'Apucarana',
        'Arapongas',
        'Bom Sucesso',
        'Borrazópolis',
        'Califórnia',
        'Cambira',
        'Jandaia do Sul',
        'Karolé',
        'Marilândia do Sul',
        'Marumbi',
        'Mauá da Serra',
        'Novo Itacolomi',
        'Rio Bom',
        'Sabaudia',
        'São Pedro do Ivaí'
    ],
    '22': [
        'Arapuã',
        'Ariranha do Ivaí',
        'Cruzmaltina',
        'Cândido de Abreu',
        'Faxinal',
        'Godoy Moreira',
        'Grandes Rios',
        'Ivaiporã',
        'Jardim Alegre',
        'Lidianópolis',
        'Lunardelli',
        'Manoel Ribas',
        'Rio Branco do Ivaí',
        'Rosário do Ivaí',
        'São João do Ivaí'
    ],
    '17': [
        'Alvorada do Sul',
        'Bela Vista do Paraíso',
        'Cambé',
        'Cafeara',
        'Centenário do Sul',
        'Florestópolis',
        'Guaraci',
        'Ibiporã',
        'Jaguapitã',
        'Jataizinho',
        'Lupionópolis',
        'Miraselva',
        'Porecatu',
        'Prado Ferreira',
        'Pitangueiras',
        'Primeiro de Maio',
        'Rolândia',
        'Sertanópolis',
        'Tamarana',
        'Londrina'
    ],
    '18': [
        'Abatiá',
        'Andirá',
        'Assaí',
        'Bandeirantes',
        'Congonhinhas',
        'Cornélio Procópio',
        'Itambaracá',
        'Leópolis',
        'Nova América da Colina',
        'Nova Fátima',
        'Nova Santa Bárbara',
        'Rancho Alegre',
        'Ribeirão do Pinhal',
        'Santo Antônio do Paraíso',
        'Santa Cecília do Pavão',
        'Santa Mariana',
        'Santa Amélia',
        'São Sebastião do Amoreira',
        'São Jerônimo da Serra',
        'Sertaneja',
        'Sapopema',
        'Uraí'
    ],
    '19': [
        'Barra do Jacaré',
        'Cambará',
        'Carlópolis',
        'Conselheiro Mairinck',
        'Figueira',
        'Guapirama',
        'Ibaiti',
        'Jacarezinho',
        'Jaboti',
        'Japira',
        'Joaquim Távora',
        'Jundiaí do Sul',
        'Pinhalão',
        'Quatiguá',
        'Ribeirão Claro',
        'Salto do Itararé',
        'Santo Antônio da Platina',
        'Siqueira Campos',
        'Tomazina'
    ],
    '21': [
        'Ortigueira'
    ]
};

// Cores para as regiões
const coresRegioes = {
    '11': '#bdc3c7',
    '12': '#e74c3c',
    '13': '#3498db',
    '14': '#2ecc71',
    '15': '#f39c12',
    '16': '#9b59b6',
    '17': '#1abc9c',
    '18': '#e67e22',
    '19': '#34495e',
    '21': '#f1c40f',
    '22': '#e91e63'
};

// Função para formatar valores monetários
function formatarMoeda(valor) {
    if (!valor || valor === 'nan' || isNaN(parseFloat(valor))) return 'N/A';
    
    const numero = parseFloat(valor);
    if (numero >= 1000000000) {
        return 'R$ ' + (numero / 1000000000).toFixed(1) + 'B';
    } else if (numero >= 1000000) {
        return 'R$ ' + (numero / 1000000).toFixed(1) + 'M';
    } else if (numero >= 1000) {
        return 'R$ ' + (numero / 1000).toFixed(1) + 'K';
    } else {
        return 'R$ ' + numero.toFixed(2);
    }
}

// Função para formatar percentual
function formatarPercentual(valor) {
    if (!valor || valor === 'nan' || isNaN(parseFloat(valor))) return 'N/A';
    return parseFloat(valor).toFixed(2) + '%';
}

// Função para obter região de um município
function obterRegiao(municipio) {
    for (const [regiao, cidades] of Object.entries(regioes)) {
        if (cidades.includes(municipio)) {
            return regiao;
        }
    }
    return null;
}

// Função para obter cor baseada no número de empresas
function obterCor(numEmpresas) {
    if (numEmpresas === 0) return '#95a5a6';
    if (numEmpresas >= 5) return '#27ae60';
    if (numEmpresas >= 2) return '#f39c12';
    return '#e74c3c';
}

// Função para carregar dados das empresas
async function carregarDadosEmpresas() {
    try {
        const response = await fetch('parana_empresas_com_regiao_atualizado.csv');
        const csvText = await response.text();
        
        const linhas = csvText.split('\n');
        const cabecalho = linhas[0].split(',');
        
        empresasData = [];
        for (let i = 1; i < linhas.length; i++) {
            if (linhas[i].trim()) {
                const valores = linhas[i].split(',');
                const empresa = {};
                cabecalho.forEach((col, index) => {
                    empresa[col.trim()] = valores[index] ? valores[index].trim() : '';
                });
                empresasData.push(empresa);
            }
        }
        
        console.log('Dados das empresas carregados:', empresasData.length);
    } catch (error) {
        console.error('Erro ao carregar dados das empresas:', error);
    }
}

// Função para carregar dados GeoJSON
async function carregarGeoJSON() {
    try {
        const response = await fetch('parana_municipios.geojson');
        geoJsonData = await response.json();
        console.log('GeoJSON carregado:', geoJsonData.features.length, 'municípios');
    } catch (error) {
        console.error('Erro ao carregar GeoJSON:', error);
    }
}

// Função para criar popup de município
function criarPopupMunicipio(feature) {
    const nomeMunicipio = feature.properties.name;
    const regiao = obterRegiao(nomeMunicipio);
    
    // Filtrar empresas do município
    const empresasMunicipio = empresasData.filter(empresa => 
        empresa.Cidade && normalizarTexto(empresa.Cidade) === normalizarTexto(nomeMunicipio)
    );
    
    let popupContent = `
        <div class="popup-content">
            <h3>${nomeMunicipio}</h3>
            <p><strong>Região:</strong> ${regiao ? regiao : 'Não identificada'}</p>
            <p><strong>Empresas cadastradas:</strong> ${empresasMunicipio.length}</p>
    `;
    
    if (empresasMunicipio.length > 0) {
        popupContent += '<hr>';
        empresasMunicipio.forEach((empresa, index) => {
            if (index < 3) { // Mostrar apenas as 3 primeiras empresas
                popupContent += `
                    <div class="company-info">
                        <strong>Empresa ${index + 1}</strong>
                        <div class="metric">
                            <span class="metric-label">Receita Líquida:</span>
                            <span class="metric-value">${formatarMoeda(empresa['Receita Líq.'])}</span>
                        </div>
                        <div class="metric">
                            <span class="metric-label">Lucro Líquido:</span>
                            <span class="metric-value">${formatarMoeda(empresa['Lucro Líquido'])}</span>
                        </div>
                        <div class="metric">
                            <span class="metric-label">Rentabilidade:</span>
                            <span class="metric-value">${formatarPercentual(empresa['Rentabilidade Receita'])}</span>
                        </div>
                        <div class="metric">
                            <span class="metric-label">Capital de Giro:</span>
                            <span class="metric-value">${formatarMoeda(empresa['Capital de Giro'])}</span>
                        </div>
                    </div>
                `;
            }
        });
        
        if (empresasMunicipio.length > 3) {
            popupContent += `<p><em>... e mais ${empresasMunicipio.length - 3} empresa(s)</em></p>`;
        }
    } else {
        popupContent += '<p><em>Nenhuma empresa cadastrada neste município.</em></p>';
    }
    
    popupContent += '</div>';
    return popupContent;
}

// Função para estilizar features do mapa
function estilizarFeature(feature) {
    const nomeMunicipio = feature.properties.name;
    const regiao = obterRegiao(nomeMunicipio);
    
    // Filtrar empresas do município
    const empresasMunicipio = empresasData.filter(empresa => 
        empresa.Cidade && normalizarTexto(empresa.Cidade) === normalizarTexto(nomeMunicipio)
    );
    
    const numEmpresas = empresasMunicipio.length;
    const cor = regiao && regioes[regiao] ? coresRegioes[regiao] : '#95a5a6';
    
    return {
        fillColor: cor,
        weight: 1,
        opacity: 0.8,
        color: '#2c3e50',
        fillOpacity: numEmpresas > 0 ? 0.7 : 0.3
    };
}

// Função para adicionar eventos aos features
function adicionarEventos(feature, layer) {
    layer.on({
        mouseover: function(e) {
            const layer = e.target;
            layer.setStyle({
                weight: 3,
                color: '#2c3e50',
                fillOpacity: 0.9
            });
            
            // Atualizar sidebar
            atualizarSidebar(feature.properties.name);
        },
        mouseout: function(e) {
            currentLayer.resetStyle(e.target);
        },
        click: function(e) {
            map.fitBounds(e.target.getBounds());
        }
    });
}

// Função para atualizar sidebar
function atualizarSidebar(nomeMunicipio) {
    const regiao = obterRegiao(nomeMunicipio);
    const empresasMunicipio = empresasData.filter(empresa => 
        empresa.Cidade && normalizarTexto(empresa.Cidade) === normalizarTexto(nomeMunicipio)
    );
    
    document.getElementById('selected-region').textContent = 
        `${nomeMunicipio} - Região ${regiao || 'N/A'}`;
    
    document.getElementById('total-companies').textContent = empresasMunicipio.length;
    
    if (empresasMunicipio.length > 0) {
        // Calcular receita total
        const receitaTotal = empresasMunicipio.reduce((total, empresa) => {
            const receita = parseFloat(empresa['Receita Líq.']) || 0;
            return total + receita;
        }, 0);
        
        // Calcular lucro médio
        const lucroMedio = empresasMunicipio.reduce((total, empresa) => {
            const lucro = parseFloat(empresa['Lucro Líquido']) || 0;
            return total + lucro;
        }, 0) / empresasMunicipio.length;
        
        // Calcular rentabilidade média
        const rentabilidadeMedia = empresasMunicipio.reduce((total, empresa) => {
            const rent = parseFloat(empresa['Rentabilidade Receita']) || 0;
            return total + rent;
        }, 0) / empresasMunicipio.length;
        
        document.getElementById('total-revenue').textContent = formatarMoeda(receitaTotal);
        document.getElementById('avg-profit').textContent = formatarMoeda(lucroMedio);
        document.getElementById('avg-profitability').textContent = formatarPercentual(rentabilidadeMedia);
    } else {
        document.getElementById('total-revenue').textContent = 'R$ 0';
        document.getElementById('avg-profit').textContent = 'R$ 0';
        document.getElementById('avg-profitability').textContent = '0%';
    }
}

// Função para inicializar o mapa
async function inicializarMapa() {
    // Carregar dados
    await carregarDadosEmpresas();
    await carregarGeoJSON();
    
    // Criar mapa
    map = L.map('map').setView([-24.5, -51.5], 7);
    
    // Adicionar tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // Adicionar GeoJSON ao mapa
    if (geoJsonData) {
        currentLayer = L.geoJSON(geoJsonData, {
            style: estilizarFeature,
            onEachFeature: function(feature, layer) {
                // Verificar se o município está nas regiões de interesse
                const regiao = obterRegiao(feature.properties.name);
                if (regiao && ['11', '12', '13', '14', '15', '16', '17', '18', '19', '21', '22'].includes(regiao)) {
                    layer.bindPopup(criarPopupMunicipio(feature));
                    adicionarEventos(feature, layer);
                } else {
                    // Remover municípios que não estão nas regiões de interesse
                    layer.setStyle({
                        fillOpacity: 0,
                        opacity: 0
                    });
                }
            }
        }).addTo(map);
        
        // Ajustar zoom para mostrar apenas as regiões de interesse
        const bounds = currentLayer.getBounds();
        map.fitBounds(bounds);
    }
    
    // Remover loading
    document.getElementById('loading').style.display = 'none';
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', inicializarMapa);



