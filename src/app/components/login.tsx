import Link from "next/link"

export default function Login() {
    return (
        <div className="flex justify-center items-center mt-40">
            <form method="post" name="login">
                <p className="text-center text-2xl font-medium pt-3 pb-3">Login</p>
                <div className="input">
                    <label htmlFor="email">E-mail: </label>
                    <input type="email"
                            name="email"
                            placeholder="Digite seu E-mail"
                            className="placeholder-text"/>
                </div>

                <div className="input">
                    <label htmlFor="password">Senha: </label>
                    <input type="password"
                            name="password"
                            className="placeholder-text"/>
                </div>

                <input type="submit" value="Enviar" className="submit"/>
                <p className="pt-3">Não tem conta? Cadastre seus dados <Link className="text-green-500" href="/pages">aqui</Link></p>
            </form>
        </div>
    )
}