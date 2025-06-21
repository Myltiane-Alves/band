import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./styles.module.scss";
import { useSidebar } from "@/contexts/SidebarContext";
import InputEvent from "./InputEvent";
interface FormProps {
    labelName: string;
    labelDate: string;
    labelAdress: string;
    labelEvent: string;
    labelCipher: string;
    labelDescription: string;
    date: string;
    hora: string;
    endereco: string;
    evento: string;
    cifra: string;
    descricao: string;
};


export default function FormEvent({
    labelName,
    labelDate,
    labelAdress,
    labelEvent,
    labelCipher,
    labelDescription
}: FormProps ) {
  

    const [name, setName] = useState("");

    return (
        <div className={styles.container}>

            <div className={styles.content}>
                <div className={styles.containerHeader}>
                    <h2 >Adicionar Novo Evento</h2>

                </div>
                <form  >
                  
                    <InputEvent
                    
                        type="text"
                        placeholder="Digite seu Nome"
                        value={name}
                        onChange={(value) => setName(value)}
                        required
                        // error={emailError}
                    />

                    <InputEvent
                    
                        type="date"
                       
                        value={name}
                        onChange={(value) => setName(value)}
                        required
                        // error={emailError}
                    />
                
                   

                    <div className={styles.selectGroup}>

                        <select >
                            <option value="">Selecione o evento</option>

                        </select>
                    </div>
                    <div className={styles.selectGroup}>

                        <select >
                            <option value="">Selecione a cifra</option>

                        </select>
                    </div>

                    <div className={styles.textAreaGroup}>

                        <textarea placeholder="Descrição"  rows={3} />
                    </div>
                    <button type="submit" style={{ marginTop: 8 }}>Enviar</button>
                </form>
            </div>
        </div>
    );
};

