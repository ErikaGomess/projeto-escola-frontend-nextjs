import { useEffect, useState } from "react"
import styles from "./Curso.module.css"
import { IconeEdicao, IconeLixo } from "../../Icones"
import AuthService from "../../Services/AuthService"
import axios from "axios"

export default function ListaCursos(props) {
    const urlAPI = AuthService.API_URL + "/api/Curso/"
    const [lista, setLista] = useState([])
    const user = AuthService.getCurrentUser();
    //console.log("USER: " + user)

    if (user) {
        useEffect(() => {
            /*fetch('http://localhost:5176/api/aluno')
            .then(resp => resp.json())
            .then(alunos => setLista(alunos))
            .catch(error => console.log("ERRO FETCH"));*/
            axios(urlAPI).then(resp => {
                setLista(resp.data)
            })
        }, [])
        const renderTable = () => {
            return (
                <table className={styles.tabCursos}>
                    <thead>
                        <tr className={styles.cabecTabela}>
                            <th className={styles.tabTituloNome}>Nome</th>                            
                            <th>Curso</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className={styles.listaCursos}>
                        {lista.map((curso, i) => {
                            return <tr key={curso.id}>
                                <td> {curso.nomeCurso} </td>
                                <td> {curso.codCurso} </td>
                                <td>
                                    <button
                                        className={styles.linhaButton}

                                        style={{ color: 'blue' }}

                                        onClick={() => props.carregar(curso)}
                                    >
                                        {IconeEdicao}
                                    </button>
                                    <button
                                        className={styles.linhaButton}

                                        style={{ color: 'red' }}

                                        onClick={() => props.remover(curso)}
                                    >
                                        {IconeLixo}
                                    </button>
                                </td>
                            </ tr>
                        })}
                    </tbody>
                </table>
            )
        }
        return (
            <div>
                {renderTable()}
            </div >
        )
    }
    else {
        return (
            <div>
                Não autorizado
            </div>
        )
    }
}