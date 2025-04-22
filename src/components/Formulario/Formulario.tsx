"use client"

import styles from "./styles.module.scss";
import React, { Fragment, useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Formulario() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    return (
        <Fragment>



            <div className={styles.formulario}>
                <form>
                    <Input

                        type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(value) => setEmail(value)}
                        required
                        error={emailError}
                    />

                    <Input

                        type="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(value) => setPassword(value)}
                    />

                    <div className={styles.containerButtons}>



                        <Button
                            variant="primary"
                            size="large"
                            onClick={() => console.log('Clicked!')}
                        >
                            Entrar
                        </Button>


                        <Button
                            variant="primary"
                            size="large"
                            onClick={() => console.log('Clicked!')}
                        >
                            Entrar com Google
                        </Button>


                    </div>

                    {/* <Button
                            variant="outline"
                            size="large"
                            fullWidth
                            loading
                        >
                        Loading...
                        </Button> */}
                </form>
            </div>

        </Fragment>
    )
}
