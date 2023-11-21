import { useState } from "react";
import CrudCursos from "./CrudCursos";
import ListaCursos from "./ListaCursos";
import AuthService from "../../Services/AuthService";
import axios from "axios";

export default function Cursos() {

    const urlAPI = AuthService.API_URL + "/api/Curso/"
    const cursoIni = {
        'id': 0,
        'nomeCurso': '',
        'codCurso': 0,
        'periodo': ''
    }
    const [curso, setCurso] = useState(cursoIni);
    function carregar(cursoForm) {
        setCurso(cursoForm);
    }
    const remover = (cursoForm) => {
        const url = urlAPI + cursoForm.id;
        console.log(url)
        if (window.confirm("Confirma remoção do curso: " + cursoForm.codCurso)) {
            console.log("entrou no confirm");
            axios['delete'](url, cursoForm)
                .then(resp => {
                    console.log(resp.data);
                })
        }
    }
    return (
        <>
            <CrudCursos cursoForm={curso} cursoSet={setCurso} />
            <ListaCursos carregar={setCurso} remover={remover} />
        </>
    )
}