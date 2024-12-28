'use client'
import { useState } from "react"
import Link from "next/link";

export default function Formulario() {
    //Valores dos Dados Pessoais
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setBirth] = useState('');
    const [gender, setGender] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [nacionality, setNacionality] = useState('');
    const [maritalStatus, setMarital] = useState('');

    //Valores dos Dados Residênciais 
    const [adress, setAdress] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNum] = useState('');
    const [complem, setComplem] = useState('');
    const [neighborhood, setNeighbor] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');

    //Valores dos Dados de Matrícula
    const [registrationNumber, setRegistr] = useState('');
    const [course, setCourse] = useState('');
    const [yearOfEntry, setEntry] = useState('');
    const [currentSemester, setSemester] = useState('');
    const [academicStatus, setStatus] = useState('');
    const [gpa, setGpa] = useState('');
    const [educationMode, setMode] = useState('');

    //Valores dos Dados de Emergência
    const [emName, setEmName] = useState('');
    const [relationship, setRelation] = useState('');
    const [emPhone, setEmPhone] = useState('');
    const [emEmail, setEmEmail] = useState('');

    const handleSubmit = async (event: any) => {
        
        event.preventDefault(); // Evita da página carregar ao enviar
        
        try {

            const response = await fetch('/api/recebendo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            })

            const data = await response.json()
            console.log(data)

        } catch (err) {

            console.error(err)

        }
    }

    return (
        <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit} method="POST">
            <p className="text-2xl font-medium pt-3 pb-3 justify-center items-center">Dados Pessoais</p>                
                <div className="input">
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" 
                             name="name" 
                             id="name" 
                             value={name}
                             onChange={(e) => setName(e.target.value)}
                             placeholder="Digite aqui seu nome"
                             className="placeholder-text"
                             />
                </div>

                <div className="input">
                    <label htmlFor="email">E-mail: </label>
                    <input type="email" 
                            name="email" 
                            id="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite aqui seu email"
                            className="placeholder-text"
                            />
                </div>

                <div className="input">
                    <label htmlFor="dataNasc">Data de Nascimento: </label>
                    <input type="date" 
                            name="dateOfBirth"
                            id="dateOfBirth"
                            value={dateOfBirth}
                            onChange={(e) => setBirth(e.target.value)}
                            placeholder="00/00/0000"
                            className="placeholder-text"/>
                </div>
                
                <div className="input">
                    <label htmlFor="genero">Gênero: </label>
                    <select name="gender"
                            id="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="placeholder-text">
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Outro">Outro</option>
                        <option value="PND">Prefiro não dizer</option>
                    </select>
                </div>

                <div className="input">
                    <label htmlFor="cpf">CPF: </label>
                    <input type="text"
                            name="cpf"
                            id="cpf"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            placeholder="000.000.000-00"
                            className="placeholder-text"/>
                </div>

                <div className="input">
                    <label htmlFor="telefone">Telefone: </label>
                    <input type="tel"
                            name="telefone"
                            id="telefone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Digite seu telefone"
                            className="placeholder-text"/>
                </div>

                <div className="input">
                    <label htmlFor="nacionalidade">Nacionalidade: </label>
                    <input type="text"
                            name="nacionalidade"
                            id="nacionalidade"
                            value={nacionality}
                            onChange={(e) => setNacionality(e.target.value)}
                            placeholder="Digite sua nacionalidade"
                            className="placeholder-text"/>
                </div>

                <div className="input">
                    <label htmlFor="statecivil">state Cívil: </label>
                    <select name="statecivil"
                            id="statecivil"
                            value={maritalStatus}
                            onChange={(e) => setMarital(e.target.value)}
                            className="placeholder-text">
                                <option value="Solteiro">Solteiro</option>
                                <option value="Casado">Casado</option>
                                <option value="Separado">Separado</option>
                                <option value="Divorciado">Divorciado</option>
                                <option value="Viúvo">Viúvo</option>
                                <option value="Outro">Outro</option>
                    </select>
                </div>

                {/*Dados residenciais*/}
                <p className="text-2xl font-medium pt-3 pb-3">Dados Residenciais</p>
                <div className="input">
                    <label htmlFor="address">Endereço</label>
                    <input type="text" 
                            name="addres"
                            id="address"
                            placeholder="Digite seu endereço"
                            value={adress}
                            onChange={(e) => setAdress(e.target.value)}
                            className="placeholder-text"/>
                </div>

                <div className="input">
                    <label htmlFor="logradouro">Logadouro</label>
                    <input type="text"
                            name="logradouro"
                            id="logradouro"
                            placeholder="Digite seu Logradouro"
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                            className="placeholder-text"/>
                </div>

                <div className="input">
                    <label htmlFor="number">Número</label>
                    <input type="text"
                            name="number"
                            id="number"
                            placeholder="(99) 99999-9999" 
                            value={number}
                            onChange={(e) => setNum(e.target.value)}
                            className="placeholder-text"/>
                </div>

                <div className="input">
                    <label htmlFor="complemento">Complemento: </label>
                    <input type="text"
                            name="complemento"
                            id="scomplemento"
                            placeholder="Digite seu Complemento"
                            value={complem}
                            onChange={(e) => setComplem(e.target.value)} 
                            className="placeholder-text"/>
                </div>

                <div className="input">
                    <label htmlFor="bairro">Bairro: </label>
                    <input type="text"
                            name="bairro"
                            id="bairro"
                            placeholder="Digite seu Bairro"
                            value={neighborhood}
                            onChange={(e) => setNeighbor(e.target.value)}
                            className="placeholder-text"/>
                </div>

                <div className="input">
                    <label htmlFor="city">city: </label>
                    <input type="text"
                            name="city"
                            id="city"
                            placeholder="Digite sua city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="placeholder-text"/>
                </div>
                
                <div className="input">
                    <label htmlFor="state">state</label>
                    <input type="text"
                            name="state"
                            id="state"
                            placeholder="Digite seu state"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            className="placeholder-text"/>
                </div>

                <div className="input">
                    <label htmlFor="postalCode">postalCode:</label>
                    <input type="text"
                            name="postalCode"
                            id="postalCode"
                            placeholder="00000-000"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            className="placeholder-text"/>
                </div>

                <div className="input">
                    <label htmlFor="país">País:</label>
                    <input type="text"
                            name="country"
                            id="country"
                            placeholder="Digite seu País"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="placeholder-text"/>
                </div>

                {/*Dados Academicos*/}
                <p className="text-2xl font-medium pt-3 pb-3">Dados Academicos</p>
                <div className="input">
                    <label htmlFor="registrationNumber">Número da matrícula: </label>
                    <input type="text"
                            name="registNum" 
                            id="registNum"
                            placeholder="Digite seu País"
                            value={registrationNumber}
                            onChange={(e) => setRegistr(e.target.value)} 
                            className="placeholder-text"/>
                </div>

                <div className="input">
                    <label htmlFor="curso">Curso:</label>
                    <input type="text"
                            name="curso"
                            id="curso"
                            placeholder="Seu Curso"
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                            className="placeholder-text"/>
                </div>

                <div className="input">
                    <label htmlFor="ingresso">Ano de Ingresso: </label>
                    <input type="text"
                            name="ingresso"
                            id="ingresso"
                            placeholder="Ano de Ingresso"
                            value={yearOfEntry}
                            onChange={(e) => setEntry(e.target.value)}
                            className="placeholder-text"/>
                </div>

                <div className="input">
                    <label htmlFor="atualSem">Semestre Atual: </label>
                    <input type="atualSem"
                            name="atualSem"
                            id="atualSem"
                            placeholder="Semestre Atual"
                            value={currentSemester}
                            onChange={(e) => setSemester(e.target.value)}
                            className="placeholder-text"/>
                </div>

                <div className="input">
                    <label htmlFor="academicStatus">Status Acadêmico:</label>
                    <select name="academicStatus"
                    id="academicStatus"
                    value={academicStatus}
                    onChange={(e) => setStatus(e.target.value)}
                    className="placeholder-text">
                        <option value="Aluno">Ativo</option>
                        <option value="Aluno">Inativo</option>
                        <option value="Graduado">Graduado</option>
                        <option value="Desistente">Desistente</option>
                        <option value="Suspenso">Suspenso</option>
                        </select>
                </div>

                <div className="input">
                    <label htmlFor="gpa">Média Geral GPA:</label>
                    <input type="number"
                            name="gpa" 
                            id="gpa"
                            placeholder="Média"
                            value={gpa}
                            onChange={(e) => setGpa(e.target.value)}
                            step={0.50} 
                            min={0}
                            max={100}
                            className="placeholder-text"/>
                </div>

                <div className="input">
                    <label htmlFor="ensinoMol">Modalidade de Ensino: </label>
                    <input type="text" 
                             name="ensinoMol" 
                             id="ensinoMol" 
                             value={educationMode}
                             onChange={(e) => setMode(e.target.value)}
                             placeholder="Modaliade de Ensino"
                             className="placeholder-text" />
                </div>

                {/*Inputs Emergência*/}                    
                <p className="text-2xl font-medium pt-3 pb-3">Informações Emergenciais</p>                
                <div className="input">
                    <label htmlFor="Emnome">Nome: </label>
                    <input type="text" 
                             name="Emnome" 
                             id="Emnome" 
                             value={emName}
                             onChange={(e) => setEmName(e.target.value)}
                             placeholder="Nome de contato"
                             className="placeholder-text"/>
                </div>
                
                <div className="input">
                    <label htmlFor="Emparent">Parentesco: </label>
                    <input type="text" 
                             name="emparent" 
                             id="emparent" 
                             value={relationship}
                             onChange={(e) => setRelation(e.target.value)}
                             placeholder="Parentesco"                                 
                             className="placeholder-text" />
                </div>

                <div className="input">
                    <label htmlFor="Emtel">Telefone de Contato: </label>
                    <input type="Emtel"
                            name="Emtel"
                            id="EMtel"
                            value={emPhone}
                            onChange={(e) => setEmPhone(e.target.value)}
                            placeholder="Digite seu telefone"
                            className="placeholder-text"/>
                </div>

                <div className="input">
                    <label htmlFor="ememail">E-mail de Contato: </label>
                    <input type="ememail" 
                            name="ememail" 
                            id="ememail" 
                            value={emEmail}
                            onChange={(e) => setEmEmail(e.target.value)}
                            placeholder="Digite aqui seu email"
                            className="placeholder-text"/>
                </div>

                {/*Botões*/}
                <div className="flex gap-2 pb-2">
                    <input type="reset" className="reset" value="Limpar"/>
                    <input type="submit" className="submit" value="Enviar"/>
                </div>
                <p>Já possui uma conta? Faça Login <Link className="text-green-500 pb-4" href="/">aqui</Link></p>
            </form>
        </div>
    )
}