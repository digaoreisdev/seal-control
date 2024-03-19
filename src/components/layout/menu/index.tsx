import Link from 'next/link'

export const Menu: React.FC = () => {
  return (
    <aside className="column is-3 is-narrow-mobile is-fullheigth section is-hidden-mobile">
      <p className="menu-label is-hidden-touch">
        Controle de Lacres
      </p>
      
      <ul className="menu-list">
        <MenuItem href="/" label="Home" />
        <MenuItem href="/" label="Checklist" />
        <MenuItem href="/" label="Lojas" />
        <MenuItem href="/" label="Usuários" />
        <MenuItem href="/" label="Lacres" />
        <MenuItem href="/" label="Veículos" />
        </ul>
    </aside>
  )
}

interface MenuItemProps {
  href: string;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
  return (
    <li>
      <Link href={ props.href }>
          <span className="icon"></span> { props.label }
      </Link>
    </li>
  )
}