import Funcionario from "../model/FuncionarioModel.js";

async function listar(req, res) {
    const respostaBanco = await Funcionario.findAll();
    res.json(respostaBanco);
}

async function selecionar(req, res) {
    const id = req.params.id;
    const respostaBanco = await Funcionario.findByPk(id);
    res.json(respostaBanco);
}

async function inserir(req, res) {
    const respostaBanco = await Funcionario.create(req.body);
    res.json(respostaBanco);
}

async function alterar(req, res) {
    const idfuncionario = req.params.id;
    const respostaBanco = await Funcionario.update(
        { demissao, ativo, senha, token, telefone, contratacao, salario, email, nomefuncionario },
        { where: { idfuncionario } });
    res.json(respostaBanco);
}

//Questão 3
async function demitir(req, res) {
    if (!idfuncionario) {
        res.status(422).send('O parâmetro idfuncionario é obrigatório.');
    }

    if (ativo = false) {
        res.status(422).send('Funcionário já foi demitido.');
    }

    const idfuncionario = req.params.id;
    const demissao = moment().format('YYYY-MM-DD');

    const respostaBanco = await Funcionario.update({ demissao });

    const ativo = false;    
    await Funcionario.update(
        { ativo },
        { where: { idfuncionario } });
    
        res.json(respostaBanco);

}

//Questão 4
async function senhaFun(req, res) {
    if (!idfuncionario) {
        res.status(422).send('O parâmetro idfuncionario é obrigatório.');
    }

    if (!idfuncionario) {
        res.status(422).send('O parâmetro idfuncionario é obrigatório.');
    }

    if (!senha || senha.length < 6 || senha.length > 20) {
        res.status(422).send('Senha inválida. Deve conter entre 6 e 20 caracteres.');
    }

    const respostaBanco = await Funcionario.update(
        { senha, token },
        { where: { idfuncionario } }
    );

}



export default { listar, selecionar, inserir, alterar, demitir, senhaFun };