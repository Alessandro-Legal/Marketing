# Mapa Dinâmico das Empresas do Paraná

## Descrição
Este projeto consiste em um mapa dinâmico e inteligente do estado do Paraná, focando nas sub-regiões 11, 12, 13, 14, 15, 16, 17, 18, 19, 21 e 22. O mapa exibe informações das maiores empresas de cada município ao passar o mouse sobre as regiões.

## Funcionalidades
- **Mapa Interativo**: Visualização geográfica dos municípios do Paraná com cores diferenciadas por região
- **Popup Dinâmico**: Ao clicar em um município, aparece um popup com informações detalhadas das empresas locais
- **Sidebar Informativa**: Painel lateral que exibe estatísticas em tempo real ao passar o mouse sobre os municípios
- **Dados Empresariais**: Informações de receita líquida, lucro líquido, rentabilidade e capital de giro
- **Design Responsivo**: Interface adaptável para desktop e dispositivos móveis

## Dados Utilizados
- **Fonte dos Dados Empresariais**: 500 maiores empresas do Paraná e Santa Catarina
- **Dados Geográficos**: GeoJSON dos municípios do Paraná (fonte: IBGE via GitHub)
- **Regiões Contempladas**: Sub-regiões 11-19, 21-22 conforme especificação

## Tecnologias
- **Frontend**: HTML5, CSS3, JavaScript
- **Biblioteca de Mapas**: Leaflet.js
- **Dados**: CSV (empresas) + GeoJSON (geografia)
- **Servidor**: Python HTTP Server (para desenvolvimento)

## Como Utilizar

### 1. Abrir o Mapa
- Abra o arquivo `index.html` em qualquer navegador web moderno
- O mapa carregará automaticamente os dados das empresas e a geografia do Paraná

### 2. Interagir com o Mapa
- **Visualizar Informações**: Passe o mouse sobre qualquer município para ver as informações na sidebar
- **Ver Detalhes**: Clique em um município para abrir um popup com dados detalhados das empresas
- **Navegar**: Use os controles de zoom (+/-) para aproximar ou afastar a visualização

### 3. Interpretar as Cores
- **Verde**: Alta concentração de empresas (5+ empresas)
- **Laranja**: Média concentração (2-4 empresas)
- **Vermelho**: Baixa concentração (1 empresa)
- **Cinza**: Sem dados de empresas

## Estrutura dos Arquivos
```
mapa_parana/
├── index.html                      # Página principal
├── script.js                       # Lógica do mapa e interações
├── parana_empresas_com_regiao_atualizado.csv   # Dados das empresas
└── parana_municipios.geojson        # Dados geográficos
```

## Informações Técnicas

### Dados das Empresas
O arquivo CSV contém as seguintes colunas:
- **Cidade**: Nome do município
- **Receita Líq.**: Receita líquida da empresa
- **Lucro Líquido**: Lucro líquido da empresa
- **Rentabilidade Receita**: Percentual de rentabilidade
- **Capital de Giro**: Capital de giro da empresa
- **Sub-região**: Região à qual o município pertence

### Mapeamento de Regiões
- **Sub-região 11**: Araruna, Barbosa Ferraz, Campo Mourão, Corumbataí do Sul, Engenheiro Beltrão, Farol, Fênix, Moreira Sales, Terra boa, Peabiru, Quinta do Sol
- **Região 12**: Vila Alta, Esperança Nova, Nova Olimpia, Maria Helena, Cruzeiro do Oeste, Douradina, Icaraíma, Ivaté, Perobal, São Jorge do Patrocínio, Tapira, Umuarama, Xambrê
- **Sub-região 13**: Cianorte, Tuneiras do Oeste, Jussara, Japurá, Guaporema, Tapejara, cidade gaúcha, Indianópolis, são tome, São Manoel do Paraná, Rondon
- **Sub-região 14**: Alto Paraná, Amaporã, Cruzeiro do Sul, Diamante do Norte, Guairaçá, Itaúna do Sul, Inajá, Jardim Olinda, Loanda, Marilena, Mirador, Nova Aliança do Ivaí, Nova Londrina, Paraíso do Norte, Paranapoema, Paranavaí, Planaltina do Paraná, Porto Rico, Querência do Norte, Santa Cruz do Monte Castelo, Santa Isabel do Ivaí, Santa Mônica, São Carlos do Ivaí, São Pedro do Paraná, São João do Caiuá, Santo Antônio do Caiuá, Terra Rica, Tamboara
- **Sub-região 15**: Astorga, Atalaia, Colorado, Doutor Camargo, Floresta, Florai, Flórida, Iguaraçu, Itaguajé, Itambé, Ivatuba, Lobato, Maringá, Mandaguaçu, Mandaguari, Marialva, Munhoz de Melo, Nossa Senhora das Graças, Nova Esperança, Ourizona, Paiçandu, Paranacity, Presidente Castelo Branco, Santo Inácio, Sarandi, Santa Fé, Santa Inês, São Jorge do Ivaí, Uniflor
- **Sub-região 16**: Apucarana, Arapongas, Bom Sucesso, Borrazópolis, Califórnia, Cambira, Jandaia do Sul, Karol, Marilândia do Sul, Marumbi, Mauá da Serra, Novo Itacolomi, Rio Bom, Sabaudia, São Pedro do Ivaí
- **Sub-região 22**: Arapuã, Ariranha do Ivaí, Cruzmaltina, Cândido de Abreu, Faxinal, Godoy Moreira, Grandes Rios, Ivaiporã, Jardim Alegre, Lidianópolis, Lunardelli, Manoel Ribas, Rio Branco do Ivaí, Rosário do Ivaí, São João do Ivaí
- **Sub-região 17**: Alvorada do Sul, Bela Vista do Paraíso, Cambé, Cafeara, Centenário do Sul, Florestópolis, Guaraci, Ibiporã, Jaguapitã, Jataizinho, Lupionópolis, Miraselva, Porecatu, Prado Ferreira, Pitangueiras, Primeiro de Maio, Rolândia, Sertanópolis, Tamarana, Londrina
- **Sub-região 18**: Abatiá, Andirá, Assaí, Bandeirantes, Congonhinhas, Cornélio Procópio, Itambaracá, Leópolis, Nova América da Colina, Nova Fátima, Nova Santa Bárbara, Rancho Alegre, Ribeirão do Pinhal, Santo Antônio do Paraíso, Santa Cecília do Pavão, Santa Mariana, Santa Amélia, São Sebastião do Amoreira, São Jerônimo da Serra, Sertaneja, Sapopema, Uraí
- **Sub-Região 19**: Barra do Jacaré, Cambará, Carlópolis, Conselheiro Mairinck, Figueira, Guapirama, Ibaiti, Jacarezinho, Jaboti, Japira, Joaquim Távora, Jundiaí do Sul, Pinhalão, Quatiguá, Ribeirão Claro, Salto do Itararé, Santo Antônio da Platina, Siqueira Campos, Tomazina
- **Sub-região 21**: Ortigueira

## Características do Design
- **Interface Moderna**: Design com gradientes e efeitos visuais
- **Cores Regionais**: Cada região possui uma cor específica para fácil identificação
- **Animações Suaves**: Transições e hover effects para melhor experiência do usuário
- **Tipografia Legível**: Fontes modernas e hierarquia visual clara

## Requisitos do Sistema
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexão com internet (para carregar as bibliotecas Leaflet.js)
- JavaScript habilitado

## Observações
- O mapa foca apenas nas regiões especificadas (11-19, 21-22)
- Municípios fora dessas regiões aparecem transparentes
- Os dados são baseados no arquivo fornecido das 500 maiores empresas
- A ferramenta é ideal para análise de mercado e planejamento comercial

