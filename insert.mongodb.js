const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv6';

use(database);

//adicionando um aluno
db['bd3-nosql-atv6'].insertOne(

        {
            "cod_aluno": "1",
            "nome": "João da Silva",
            "cpf": "123.456.789-00",
            "rg": "1234567",
            "telefone_aluno": "(99) 99999-9999",
            "telefone_responsavel": "(88) 88888-8888",
            "email": "joao.silva@example.com",
            "data_nascimento": "1995-05-02"
        },

);



//adicionando varios alunos
db['bd3-nosql-atv6'].insertMany(

    [
        {
            "cod_aluno": "2",
            "nome": "Maria Oliveira",
            "cpf": "987.654.321-00",
            "rg": "7654321",
            "telefone_aluno": "(77) 77777-7777",
            "telefone_responsavel": "(66) 66666-6666",
            "email": "maria.oliveira@example.com",
            "data_nascimento": "1998-10-15"
        },

        {
            "cod_aluno": "3",
            "nome": "José Pereira",
            "cpf": "456.789.123-00",
            "rg": "9876543",
            "telefone_aluno": "(55) 55555-5555",
            "telefone_responsavel": "(44) 44444-4444",
            "email": "jose.pereira@example.com",
            "data_nascimento": "2002-03-20"
        },

        {
            "cod_aluno": "4",
            "nome": "Ana Souza",
            "cpf": "654.321.987-00",
            "rg": "8765432",
            "telefone_aluno": "(33) 33333-3333",
            "telefone_responsavel": "(22) 22222-2222",
            "email": "ana.souza@example.com",
            "data_nascimento": "2001-08-12"
        },

        {
            "cod_aluno": "5",
            "nome": "Carlos Santos",
            "cpf": "789.456.123-00",
            "rg": "5432167",
            "telefone_aluno": "(11) 11111-1111",
            "telefone_responsavel": "(00) 00000-0000",
            "email": "carlos.santos@example.com",
            "data_nascimento": "1997-12-30"
        },

        {
            "cod_aluno": "6",
            "nome": "Juliana Lima",
            "cpf": "987.654.321-11",
            "rg": "6543211",
            "telefone_aluno": "(99) 99999-9998",
            "telefone_responsavel": "(88) 88888-8887",
            "email": "juliana.lima"
        },
        {
            "cod_aluno": "7",
            "nome": "Pedro Oliveira",
            "cpf": "321.654.987-00",
            "rg": "7654321",
            "telefone_aluno": "(77) 77777-7776",
            "telefone_responsavel": "(66) 66666-6665",
            "email": "pedro.oliveira@example.com",
            "data_nascimento": "2003-07-18"
        },
        {
            "cod_aluno": "8",
            "nome": "Mariana Silva",
            "cpf": "654.987.321-00",
            "rg": "9876543",
            "telefone_aluno": "(55) 55555-5554",
            "telefone_responsavel": "(44) 44444-4443",
            "email": "mariana.silva@example.com",
            "data_nascimento": "2000-05-09"
        },
        {
            "cod_aluno": "9",
            "nome": "Lucas Pereira",
            "cpf": "456.789.123-01",
            "rg": "8765432",
            "telefone_aluno": "(33) 33333-3332",
            "telefone_responsavel": "(22) 22222-2221",
            "email": "lucas.pereira@example.com",
            "data_nascimento": "1998-10-03"
        }
    ]

);




//listando todos os alunos
db['bd3-nosql-atv6'].find();


//listando alunos pelo cpf mas sem o codigo
db['bd3-nosql-atv6'].find(
    {
        "cpf":  "456.789.123-01"
    },
    {
        "cod_aluno": 0
    }

)