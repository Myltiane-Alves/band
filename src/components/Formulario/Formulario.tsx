"use client"
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
            <div>

                <header>
                    <img src="/logo.png" alt="logo" />
                    <h1>Bem-vindo !</h1>
                </header>
            </div>

            <div>
                <form>
                    <Input
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(value) => setEmail(value)}
                        required
                        error={emailError}
                    />

                    <Input
                        label="Senha"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(value) => setPassword(value)}
                    />

                    <div>

                        <div>

                            <Button
                                variant="primary"
                                size="medium"
                                onClick={() => console.log('Clicked!')}
                            >
                                Entrar
                            </Button>
                        </div>

                        <div>

                            <Button
                                variant="primary"
                                size="medium"
                                onClick={() => console.log('Clicked!')}
                            >
                                Entrar com Google
                            </Button>
                        </div>

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
