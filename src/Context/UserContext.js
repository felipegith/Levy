import React from 'react'
import { createContext, useState } from 'react'

export const UserContext = createContext({})

export function UserContextProvider({ children }){
    const [name, setName] = useState('')
    const [nome, setNome] = useState('')
    const [valor, setValor] = useState('')
    const [descricao, setDescricao] = useState('')
    const [dataHora, setDataHora] = useState('')
    return(
        <UserContext.Provider value={{
            name,
            setName,
            valor,
            setValor,
            nome,
            setNome,
            descricao,
            setDescricao,
            dataHora,
            setDataHora
            }}>
            {children}
        </UserContext.Provider>
    )
}

