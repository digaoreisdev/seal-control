export const Menu: React.FC = () => {
  return (
    <aside className="column is-3 is-narrow-mobile is-fullheigth section is-hidden-mobile">
      <p className="menu-label is-hidden-touch">
        Controle de Lotes
      </p>
      <ul className="menu-list">
        <li>
          <a href="#">
            <span className="icon"></span> Home
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon"></span> Checklist
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon"></span> Lojas
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon"></span> Usuários
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon"></span> Lacres
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon"></span> Veículos
          </a>
        </li>
      </ul>
    </aside>
  )
}