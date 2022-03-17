
const Pessoas = '_Pessoas';

export function ErroValidacao(errors){
    this.errors = errors;
}
export default class PessoasServiço{
    validar = (pessoa) =>{
        const errors = []
        if(!pessoa.nome){
            errors.push("o campo nome e obrigatorio")
        }
        if(!pessoa.endereco){
            errors.push("O campo Endereco e obrigatorio")
        }
        if(!pessoa.destino){
            errors.push("O campo destino e obrigatorio")
        }
        if(errors.length >0){
            throw new ErroValidacao(errors)
        }

    }
    obterPessoas = () => {
        const pessoas = localStorage.getItem(Pessoas)
        if(!pessoas){
            return[];
        }
        return(
            JSON.parse(pessoas)
        )
    }
    obterIndex = (endereco) =>{
        let index = null;
        this.obterPessoas().forEach((pessoa, i) => {
            if(pessoa.endereco === endereco){
                index = i;
            }
        })
        return index;
    }
    deletar = (endereco) => {
        const index = this.obterIndex(endereco)
        if(index !== null){
            const Pessoas = this.obterPessoas()
            Pessoas.splice(index, 1)
            localStorage.setItem(Pessoas, JSON.stringify
            (Pessoas))
            return Pessoas
        }
    }
    salvar = (pessoa) =>{
        this.validar(pessoa)
        let pessoas = localStorage.getItem(Pessoas)
        if(!pessoas){
            pessoas = []
        }else{
            pessoas = JSON.parse(pessoas)
        }
        const index = this.obterIndex(pessoa.endereco)
        if(index === null){
            Pessoas.push(pessoa);
        }
        localStorage.setItem(pessoas, JSON.stringify(pessoa))
        }
    }
