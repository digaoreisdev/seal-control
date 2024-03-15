import { Menu } from './menu' //Importando o index.tsx do menu

export const Layout: React.FC = () => {
  return (
    <div className="app">
      <section className="main-content columns is-fullheight">
        <Menu />
        
        <div className="container column is-9">
          <div className="section">
            <div className="card">
              
              <div className="card-header">
                <p className="card-header-title">
                  Cadastro
                </p>
              </div>
              
              <div className="card-content">
                <p className="content">
                  Conteúdo
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}