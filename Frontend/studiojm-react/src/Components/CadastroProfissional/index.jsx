import HeaderCadLog from "../HeaderLogCad";
import { useNavigate, Link } from 'react-router-dom'
import './style.css'
import api from "../../services/api";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const validatFormProfissional = yup.object().shape({
    nome: yup.string().required("Campo nome Obrigatório").max(50),
    userName: yup.string().required("Campo userName Obrigatório").max(20),
    email: yup.string().email("Digite um email válido").required("Campo email Obrigatório").max(50),
    endereco: yup.string().required("Campo enedereço Obrigatório").max(40),
    complement: yup.string().required("Campo complemento Obrigatório").max(20),
    cidade: yup.string().required("Campo cidade Obrigatório").max(15),
    bairro: yup.string().required("Campo bairro Obrigatório").max(15),
    cep: yup.string().required("Campo cep Obrigatório").min(8).max(8),
    senha: yup.string().required("Campo senha Obrigatório").min(8),
    local:yup.string().required("Campo local de atendimento não pode ser vazio").max(15),
    servicos: yup.string().required("Campo serviço não pode ser vazio").max(20),
    dataNascimento: yup.string().required("Campo data de nascimento Obrigatório").max(10).min(8),
    genero: yup.string().required("Campo gênero Obrigatório").max(9),
});

function CadastroProfissional() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validatFormProfissional)
    });
    const addProfissional = (data) => api.post("/profissional/cadastro", data)
        .then(() => {
            navigate("/")
            alert("Profissional cadastrado com sucesso")
        })
        .catch(() => {
            console.log("Ocorreu algum erro no cadastro do Profissional")
        });
    return (
        <>
            <HeaderCadLog />
            <div className="container">
                <div className="card-fomulario">
                    <h1>Cadastre-se</h1>
                    <form onSubmit={handleSubmit(addProfissional)} className="container-formulario-profissional">
                        <div className="content-name-profissional">
                            <div className="content-label-input-profissional">
                                <label htmlFor="nome">Nome</label>
                                <input type="text" name="nome" {...register("nome")} id="nome" placeholder="Nome completo" />
                                <p>{errors.nome?.message}</p>
                            </div>
                            <div className="cards-label-input-profissional">
                                <label htmlFor="userName">Usuário</label>
                                <input type="text" name="userName" {...register("userName")} id="userName" placeholder="Nome de usuário" />
                                <p>{errors.userName?.message}</p>
                            </div>
                        </div>
                        <div className="cards-label-input-profissional">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" {...register("email")} id="email" placeholder="email@gmail.com" />
                            <p>{errors.email?.message}</p>
                        </div>
                        <div className="cards-label-input-profissional">
                            <label htmlFor="endereço">Endereço</label>
                            <input type="text" name="endereco" {...register("endereco")} id="endereço" placeholder="rua ***, n° ***" />
                            <p>{errors.endereco?.message}</p>
                        </div>
                        <div className="cards-label-input-profissional">
                            <label htmlFor="complemento">Complemento</label>
                            <input type="text" name="complement" {...register("complement")} id="complemento" placeholder="complemento" />
                            <p>{errors.complement?.message}</p>
                        </div>
                        <div className="cards-label-input-profissional">
                            <label htmlFor="cidade">Cidade</label>
                            <input type="text" name="cidade" {...register("cidade")} id="cidade" placeholder="cidade" />
                            <p>{errors.cidade?.message}</p>
                        </div>
                        <div className="content-cep-bairro-profissional">
                            <div className="content-label-input-profissional">
                                <label htmlFor="bairro">Bairro</label>
                                <input type="text" name="bairro" {...register("bairro")} id="bairro" placeholder="Digite o bairro" />
                                <p>{errors.bairro?.message}</p>
                            </div>
                            <div className="content-label-input-profissional">
                                <label htmlFor="cep">Cep</label>
                                <input type="number" name="cep" {...register("cep")} id="cep" placeholder="00000-000" maxLength="9" />
                                <p>{errors.cep?.message}</p>
                            </div>
                        </div>
                        <div className="cards-label-input-profissional">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" {...register("senha")} id="senha" placeholder="Crie uma senha" />
                            <p>{errors.senha?.message}</p>
                        </div>
                        <div className="content-data-genero-profissional">
                            <div className="cards-label-input-profissional">
                                <label htmlFor="date">Data de Nascimento</label>
                                <input type="text" name="dataNascimento" {...register("dataNascimento")} id="date" placeholder="Ex..Ano/Mês/Dia" />
                                <p>{errors.dataNascimento?.message}</p>
                            </div>
                            <div className="cards-label-input-profissional">
                                <label htmlFor="genero">Gênero</label>
                                <input type="text" name='genero' {...register("genero")} id='genero' placeholder='Ex..Masculino' />
                                <p>{errors.genero?.message}</p>
                            </div>
                        </div>
                        <div className="content-services-profissional">
                            <label htmlFor="atendimento">Local de Atendimento</label>
                            <input type="text" id="atendimento" name="local" {...register("local")} placeholder="Domiciliar, Salão" />
                            {errors.local?.message}
                        </div>
                        <div className="content-services-profissional">
                            <label htmlFor="servico">Serviço</label>
                            <input type="text" id="servico" name="servicos"  {...register("servicos")} placeholder="Manicure e Pedicure" />
                            {errors.servicos?.message}
                        </div>
                        <div className="btn-cadastro-profissional">
                            <button type='submit'>Cadastrar-se</button>
                        </div>

                        <h3 className="exist-link-h3">Tem uma conta? <Link className="link-exit" to="/login">Entre</Link></h3>
                    </form>
                </div>
            </div>
        </>
    )
};

export default CadastroProfissional;