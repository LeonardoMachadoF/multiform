import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { SelectOption } from "../../components/SelectOption";
import { Theme } from "../../components/Theme";
import { FormActions, useForm } from "../../contexts/FormContext";
import * as C from "./styles";

export const FormStep2 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === "") {
            navigate("/");
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2,
            });
        }
    }, []);

    useEffect(() => {
        window.addEventListener("keyup", (e) => {
            if (e.code === "Enter") {
                navigate("/step3");
            }
            if (e.code === "NumpadEnter") {
                navigate("/step3");
            }
        });
    }, []);

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level,
        });
    };

    const handleNextStep = () => {
        if (state.name !== "") {
            navigate("/step3");
        } else {
            navigate("/");
        }
    };

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, o que melhor lhe descreve?</h1>
                <p>
                    Escolha a opção que melhor descreve seu estado profissional
                    atualmente
                </p>

                <hr />

                <SelectOption
                    title="Sou Iniciante"
                    description="Comecei a programar há menos de 2 anos"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />
                <SelectOption
                    title="Sou Programador"
                    description="Já programo há 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link className="backButton" to="/">
                    Voltar
                </Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
};
