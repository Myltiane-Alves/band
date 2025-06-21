import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./styles.module.scss";
import { useSidebar } from "@/contexts/SidebarContext";
type FormValues = {
    nome: string;
    data: string;
    hora: string;
    endereco: string;
    evento: string;
    cifra: string;
    descricao: string;
};


export default function FormEvent() {
    const { register, handleSubmit, reset } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
        reset();
    };
        const { isOpen, toggleSidebar } = useSidebar();
        const [isMobile, setIsMobile] = useState(true);
    
        useEffect(() => {
            const checkIfMobile = () => {
                const mobileBreakpoint = 767;
                setIsMobile(window.innerWidth <= mobileBreakpoint);
            };
    
            checkIfMobile();
            window.addEventListener('resize', checkIfMobile);
    
            return () => window.removeEventListener('resize', checkIfMobile);
        }, []);
    


    return (
        <div className={styles.container}>

            <div className={styles.content}>
                <div className={styles.containerHeader}>
                    <h2 >Adicionar Novo Evento</h2>

                </div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className={styles.inputGroup}>
                        <label htmlFor="">Nome</label>
                        <input placeholder="Nome" {...register("nome", { required: true })} />
                    </div>
                    <div className={styles.inputGroupDate}> 
                        <input 
                            type="date" 
                            {...register("data", { required: true })}  
                            className={styles.dateInput}    
                        />
                        
                    </div>
                    <div className={styles.inputGroup}>

                        <input placeholder="Endereço" {...register("endereco", { required: true })} />
                    </div>

                    <div className={styles.selectGroup}>

                        <select {...register("evento", { required: true })}>
                            <option value="">Selecione o evento</option>

                        </select>
                    </div>
                    <div className={styles.selectGroup}>

                        <select {...register("cifra", { required: true })}>
                            <option value="">Selecione a cifra</option>

                        </select>
                    </div>

                    <div className={styles.textAreaGroup}>

                        <textarea placeholder="Descrição" {...register("descricao")} rows={3} />
                    </div>
                    <button type="submit" style={{ marginTop: 8 }}>Enviar</button>
                </form>
            </div>
        </div>
    );
};

