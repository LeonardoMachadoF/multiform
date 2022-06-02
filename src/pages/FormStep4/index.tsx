import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Theme } from "../../components/Theme";
import { FormActions, useForm } from "../../contexts/FormContext";
import * as C from "./styles";

export const FormStep4 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === "") {
            navigate("/");
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4,
            });
        }
    }, []);

    const handleClick = () => {
        console.log(state);
    };

    return (
        <Theme>
            <C.Container>
                <h1>Olá {state.name}, muito obrigado pela colaboração.</h1>
                <h2>Para finalizarmos, por favor, confirme os dados abaixo.</h2>
                <hr />
                <p>Nome: {state.name}</p>
                <p>Level: {state.level === 0 ? "Iniciante" : "Profissional"}</p>
                <p>Email: {state.email}</p>
                <p>GitHub: {state.github}</p>
                <Link className="backButton" to="/step3">
                    Voltar
                </Link>
                <button onClick={handleClick}>Concluir</button>
            </C.Container>
        </Theme>
    );
};
