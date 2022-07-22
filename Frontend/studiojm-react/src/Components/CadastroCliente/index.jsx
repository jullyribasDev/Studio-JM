import './style.css'
import { Link } from "react-router-dom";
import api from "../../services/api";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import HeaderCadLog from '../HeaderLogCad';

const validatFormClient = yup.object().shape({
    nome: yup.string().required("Campo nome Obrigatório").max(50),
    userName: yup.string().required("Campo userName Obrigatório").max(20),
    email: yup.string().email("Digite um email válido").required("Campo email Obrigatório").max(50),
    endereco: yup.string().required("Campo enedereço Obrigatório").max(20),
    complement: yup.string().required("Campo complemento Obrigatório").max(20),
    cidade: yup.string().required("Campo cidade Obrigatório").max(15),
    bairro: yup.string().required("Campo bairro Obrigatório").max(15),
    cep: yup.string().required("Campo cep Obrigatório").min(8).max(8),
    senha: yup.string().required("Campo senha Obrigatório").min(8),
    dataNascimento: yup.string().required("Campo data de nascimento Obrigatório").max(10).min(8),
    genero: yup.string().required("Campo gênero Obrigatório").max(9),
});

function CadastroCliente() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validatFormClient)
    });
    const addCliente = (data) => api.post("/cliente/cadastro", data)
        .then(() => {
            navigate("/")
            alert("CLiente cadastrado com sucesso")
        })
        .catch(() => {
            alert("Ocorreu algum erro no cadastro do usuário")
        });

    return (
        <>
            <HeaderCadLog />
            <div className="main-container">
                <div className='container-form-cadastro-cliente'>
                    <h1>Cadastre-se</h1>
                    <form onSubmit={handleSubmit(addCliente)} className="card-form-cliente">
                        <div className="half-box spacing">
                            <div className='label-input-cliente'>
                                <label htmlFor="nome">Nome Completo</label>
                                <input type="text" name="nome" {...register("nome")} id="nome" placeholder="Digite seu Nome completo" />
                            </div>
                            <p>{errors.nome?.message}</p>
                        </div>
                        <div className="half-box">
                            <div className='label-input-cliente'>
                                <label htmlFor="userName">UserName</label>
                                <input type="text" name="userName" {...register("userName")} id="userName" placeholder="Digite seu Username" />
                            </div>
                            <p>{errors.userName?.message}</p>
                        </div>
                        <div className="half-box spacing">
                            <div className='label-input-cliente'>
                                <label htmlFor="email">E-mail</label>
                                <input type="email" name="email" {...register("email")} id="email" placeholder="email@gmail.com" />
                            </div>
                            <p>{errors.email?.message}</p>
                        </div>
                        <div className="half-box spacing">
                            <div className='label-input-cliente'>
                                <label htmlFor="endereço">Endereço</label>
                                <input type="text" name="endereco" {...register("endereco")} id="endereço" placeholder="rua ***, n° ***" />
                            </div>
                            <p>{errors.endereco?.message}</p>
                        </div>
                        <div className="half-box spacing">
                            <div className='label-input-cliente'>
                                <label htmlFor="complemento">Complemento</label>
                                <input type="text" name="complement" {...register("complement")} id="complemento" placeholder="complemento" />
                            </div>
                            <p>{errors.nome?.message}</p>
                        </div>
                        <div className="half-box spacing">
                            <div className='label-input-cliente'>
                                <label htmlFor="cidade">Cidade</label>
                                <input type="text" name="cidade" {...register("cidade")} id="cidade" placeholder="cidade" />
                            </div>
                            <p>{errors.complement?.message}</p>
                        </div>
                        <div className="half-box spacing">
                            <div className='label-input-cliente'>
                                <label htmlFor="bairro">Bairro</label>
                                <input type="text" name="bairro" {...register("bairro")} id="bairro" placeholder="Digite o bairro" />
                            </div>
                            <p>{errors.bairro?.message}</p>
                        </div>
                        <div className="half-box spacing">
                            <div className='label-input-cliente'>
                                <label htmlFor="cep">Cep</label>
                                <input type="number" name="cep" {...register("cep")} id="cep" placeholder="00000-000" maxLength="9" />
                            </div>
                            <p>{errors.cep?.message}</p>
                        </div>
                        <div className="half-box spacing">
                            <div className='label-input-cliente'>
                                <label htmlFor="senha">Senha</label>
                                <input type="password" name="senha" {...register("senha")} id="senha" placeholder="Crie uma senha" />
                            </div>
                            <p>{errors.nome?.message}</p>
                        </div>
                        <div className="half-box spacing">
                            <div className='label-input-cliente'>
                                <label htmlFor="date">Data de Nascimento</label>
                                <input type="text" name="dataNascimento" {...register("dataNascimento")} id="date" placeholder="YYY/MM/DD" />
                            </div>
                            <p>{errors.senha?.message}</p>
                        </div>
                        <div className="half-box spacing">
                            <div className='label-input-cliente'>
                                <label htmlFor="genero">Gênero</label>
                                <input type="text" {...register("genero")} name='genero' id='genero' placeholder='Masculino, Feminino, Outro' />
                            </div>
                            <p>{errors.genero?.message}</p>
                        </div>
                        <div className="full-box-cadastro">
                            <button type='submit'>Cadastrar-se</button>
                        </div>

                        <h3>Tem uma conta? <Link className='cadastro-log-cliente' to="/login">Entre</Link></h3>
                    </form>
                </div>
            </div>
        </>
    )
};

export default CadastroCliente;