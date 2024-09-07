const dados = [
    {
        titulo : "Acre",
        descrição : "A capital do Acre é Rio Branco",
        link : "https://pt.wikipedia.org/wiki/Rio_Branco",
        população : "364.756",
        ano : "(2022)",
    }, 

    {
        titulo: "Alagoas",
        descrição: "A capital de Alagoas é Maceió",
        link: "https://pt.wikipedia.org/wiki/Macei%C3%B3",
        população: "3.536.367",
        ano: "(2022)",
    },
    {
        titulo: "Amapa",
        descrição: "A capital do Amapá é Macapá",
        link: "https://pt.wikipedia.org/wiki/Macap%C3%A1",
        população: "861.773",
        ano: "(2022)",
    },
    {
        titulo: "Amazonas",
        descrição: "A capital do Amazonas é Manaus",
        link: "https://pt.wikipedia.org/wiki/Manaus",
        população: "4.269.827",
        ano: "(2022)",
    },
    {
        titulo: "Bahia",
        descrição: "A capital da Bahia é Salvador",
        link: "https://pt.wikipedia.org/wiki/Salvador_(Bahia)",
        população: "14.812.617",
        ano: "(2022)",
    },
    {
        titulo: "Ceara",
        descrição: "A capital do Ceará é Fortaleza",
        link: "https://pt.wikipedia.org/wiki/Fortaleza",
        população: "9.089.622",
        ano: "(2022)",
    },
    {
        titulo: "Distrito Federal",
        descrição: "A capital do Distrito Federal é Brasília",
        link: "https://pt.wikipedia.org/wiki/Bras%C3%ADlia",
        população: "3.202.760",
        ano: "(2022)",
    },
    {
        titulo: "Espirito Santo",
        descrição: "A capital do Espírito Santo é Vitória",
        link: "https://pt.wikipedia.org/wiki/Vit%C3%B3ria_(Esp%C3%ADrito_Santo)",
        população: "4.060.711",
        ano: "(2022)",
    },
    {
        titulo: "Goias",
        descrição: "A capital de Goiás é Goiânia",
        link: "https://pt.wikipedia.org/wiki/Goi%C3%A2nia",
        população: "7.529.741",
        ano: "(2022)",
    },
    {
        titulo: "Maranhao",
        descrição: "A capital do Maranhão é São Luís",
        link: "https://pt.wikipedia.org/wiki/S%C3%A3o_Lu%C3%ADs",
        população: "7.135.432",
        ano: "(2022)",
    },
    {
        titulo: "Mato Grosso",
        descrição: "A capital do Mato Grosso é Cuiabá",
        link: "https://pt.wikipedia.org/wiki/Cuiab%C3%A1",
        população: "3.391.300",
        ano: "(2022)",
    },
    {
        titulo: "Mato Grosso do Sul",
        descrição: "A capital do Mato Grosso do Sul é Campo Grande",
        link: "https://pt.wikipedia.org/wiki/Campo_Grande",
        população: "1.616.710",
        ano: "(2022)",
    },
    {
        titulo: "Minas Gerais",
        descrição: "A capital de Minas Gerais é Belo Horizonte",
        link: "https://pt.wikipedia.org/wiki/Belo_Horizonte",
        população: "21.168.791",
        ano: "(2022)",
    },
    {
        titulo: "Para",
        descrição: "A capital do Pará é Belém",
        link: "https://pt.wikipedia.org/wiki/Bel%C3%A9m",
        população: "8.781.432",
        ano: "(2022)",
    },
    {
        titulo: "Paraiba",
        descrição: "A capital da Paraíba é João Pessoa",
        link: "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Pessoa",
        população: "4.097.000",
        ano: "(2022)",
    },
    {
        titulo: "Parana",
        descrição: "A capital do Paraná é Curitiba",
        link: "https://pt.wikipedia.org/wiki/Curitiba",
        população: "11.344.947",
        ano: "(2022)",
    },
    {
        titulo: "Pernambuco",
        descrição: "A capital de Pernambuco é Recife",
        link: "https://pt.wikipedia.org/wiki/Recife",
        população: "9.556.591",
        ano: "(2022)",
    },
    {
        titulo: "Piaui",
        descrição: "A capital do Piauí é Teresina",
        link: "https://pt.wikipedia.org/wiki/Teresina",
        população: "3.398.850",
        ano: "(2022)",
    },
    {
        titulo: "Rio de Janeiro",
        descrição: "A capital do Rio de Janeiro é a cidade do Rio de Janeiro",
        link: "https://pt.wikipedia.org/wiki/Rio_de_Janeiro",
        população: "17.363.000",
        ano: "(2022)",
    },
    {
        titulo: "Rio Grande do Norte",
        descrição: "A capital do Rio Grande do Norte é Natal",
        link: "https://pt.wikipedia.org/wiki/Natal_(Rio_Grande_do_Norte)",
        população: "3.564.000",
        ano: "(2022)",
    },
    {
        titulo: "Rio Grande do Sul",
        descrição: "A capital do Rio Grande do Sul é Porto Alegre",
        link: "https://pt.wikipedia.org/wiki/Porto_Alegre",
        população: "11.411.000",
        ano: "(2022)",
    },
    {
        titulo: "Rondonia",
        descrição: "A capital de Rondônia é Porto Velho",
        link: "https://pt.wikipedia.org/wiki/Porto_Velho",
        população: "2.139.080",
        ano: "(2022)",
    },
    {
        titulo: "Roraima",
        descrição: "A capital de Roraima é Boa Vista",
        link: "https://pt.wikipedia.org/wiki/Boa_Vista_(Roraima)",
        população: "436.572",
        ano: "(2022)",
    },
    {
        titulo: "Santa Catarina",
        descrição: "A capital de Santa Catarina é Florianópolis",
        link: "https://pt.wikipedia.org/wiki/Florian%C3%B3polis",
        população: "3.596.000",
        ano: "(2022)",
    },
    {
        titulo: "Sao Paulo",
        descrição: "A capital de São Paulo é a cidade de São Paulo",
        link: "https://pt.wikipedia.org/wiki/S%C3%A3o_Paulo_(cidade)",
        população: "22.530.000",
        ano: "(2022)",
    },
    {
        titulo: "Sergipe",
        descrição: "A capital de Sergipe é Aracaju",
        link: "https://pt.wikipedia.org/wiki/Aracaju",
        população: "2.333.000",
        ano: "(2022)",
    },
    {
        titulo: "Tocantins",
        descrição: "A capital do Tocantins é Palmas",
        link: "https://pt.wikipedia.org/wiki/Palmas_(Tocantins)",
        população: "335.577",
        ano: "(2022)",
    }
];