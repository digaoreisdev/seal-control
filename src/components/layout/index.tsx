export const Layout: React.FC = () => {
  return (
    <div className="app">
      <section className="main-content columns is-fullheight">
        { /** menu ficará aqui */ }
        
        <div className="container colunm is-10">
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