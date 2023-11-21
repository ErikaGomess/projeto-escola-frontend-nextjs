import styles from "../../styles/escola.module.css";

export default function Titulo(props){
  
    return(
        <h1 className={styles.titulo}>
            {props.titulo}
            
        </h1>
)
}