import { AuthContext } from "@/context/auth";
import { useContext } from "react";

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }

    return context;
};
/*

O que é Context API de verdade?

Context API é uma forma de compartilhar estado global entre vários componentes sem precisar fazer prop drilling.

Prop drilling = ficar passando props de pai → filho → neto → bisneto.


Quando você tem algo que:

Precisa ser acessado por vários componentes

Não deve ficar sendo passado manualmente por props

É um estado global da aplicação

Exemplos reais:

✅ Usuário autenticado

✅ Tema (dark/light)

✅ Carrinho de compras

✅ Idioma da aplicação

✅ Permissões

resposta melhorada 

Não colocamos toda lógica no componente porque isso viola o princípio de separação de responsabilidades.
Componentes devem focar na UI, enquanto a lógica reutilizável e regras de negócio devem ficar em hooks ou context.
Context é usado quando precisamos compartilhar estado global entre vários componentes sem prop drilling.
*/