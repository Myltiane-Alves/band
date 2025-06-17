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

type SidebarFormProps = {
    onClose: () => void;
    eventos: { value: string; label: string }[];
    cifras: { value: string; label: string }[];
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
                    <h2 >Adicionar Evento</h2>
                    <button type="button" style={{ fontSize: 18, cursor: "pointer" }}>×</button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input placeholder="Nome" {...register("nome", { required: true })} />
                    <div style={{ display: "flex", gap: 8 }}>
                        <input type="date" {...register("data", { required: true })} style={{ flex: 1 }} />
                        <input type="time" {...register("hora", { required: true })} style={{ flex: 1 }} />
                    </div>
                    <input placeholder="Endereço" {...register("endereco", { required: true })} />
                    <select {...register("evento", { required: true })}>
                        <option value="">Selecione o evento</option>

                    </select>
                    <select {...register("cifra", { required: true })}>
                        <option value="">Selecione a cifra</option>

                    </select>
                    <textarea placeholder="Descrição" {...register("descricao")} rows={3} />
                    <button type="submit" style={{ marginTop: 8 }}>Enviar</button>
                </form>
            </div>
        </div>
    );
};

