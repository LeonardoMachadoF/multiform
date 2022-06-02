import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Theme } from "../../components/Theme";
import { FormActions, useForm } from "../../contexts/FormContext";
import * as C from "./styles";

export const FormStep3 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === "") {
            navigate("/");
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3,
            });
        }
    }, []);

    useEffect(() => {
        window.addEventListener("keyup", (e) => {
            if (e.code === "Enter") {
                navigate("/step4");
            }
            if (e.code === "NumpadEnter") {
                navigate("/step4");
            }
        });
    }, []);

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value,
        });
    };

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value,
        });
    };

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal, {state.name}, onde te achamos?</h1>
                <p>Preencha seus dados para podermos entrar em contato.</p>

                <hr />

                <label>
                    Qual seu Email?
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual seu GitHub?
                    <input
                        type="url"
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>

                <Link className="backButton" to="/step2">
                    Voltar
                </Link>
                <button
                    onClick={() => {
                        if (state.email !== "" && state.github !== "") {
                            navigate("/step4");
                        } else {
                            alert("Preencha os Dados");
                        }
                    }}
                >
                    Finalizar Cadastro
                </button>
            </C.Container>
        </Theme>
    );
};
