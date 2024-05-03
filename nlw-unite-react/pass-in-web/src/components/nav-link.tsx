// podemos resgatar valores do componente através do props enviados no corpo da tag
// e também podemos pagar valores com props.children que é o valor enviado
// entre a tag de abertura e a de fechamento
// {...props} passa todos as propriedades da tag para o elemento

import { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<"a"> {
  children: string;
  href: string;
}

export function NavLink(props: NavLinkProps) {
  return (
    <a {...props} className="font-medium text-sm">
      {props.children}
    </a>
  );
}
