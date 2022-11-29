import React, {createContext} from 'react';

export const AutenticaContext = createContext({});

export default function ContextoLoja({children}){

  const pedidos=[   
    {cod: 1001, desc: 'Mouse', prec: 50, qtd: 200, },
    {cod: 1002  , desc: 'Teclado', prec: 80, qtd: 100, },
    {cod: 1003, desc: 'Fone', prec: 20, qtd: 300, },
  ];

  function pegaPedido(codigo, descricao, preco, quantidade){
    //console.log(pedidos[0]);
    pedidos.push({cod:codigo, desc: descricao, prec: preco, qtd:quantidade})
  }

  return(
    <AutenticaContext.Provider value={{nome: 'root', email: 'root', senha: '1234', meusPedidos: pedidos, pegaPedido}}>
      {children}
    </AutenticaContext.Provider>
  )
}