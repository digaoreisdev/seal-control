import { Layout } from 'components';
import 'bulma/css/bulma.css';

export const CadastroChecklist: React.FC = () => {
  return (
    <Layout titulo='Cadastro de Checklist' >
      <div className='field'>
        <label className='label' htmlFor='inputData'>Data: *</label>
        <div className='control'>
          <input  className='input' 
                  id='inputData'
                  placeholder='20/03/2024' />
        </div>
      </div>
      
      <div className='field'>
        <label className='label' htmlFor='selectVeiculo'>Veículo: *</label>
        <div className='control'>
          <div className='select'>
            <select className="is-hover" id='selectVeiculo'>
              <option>IHY3301</option>
              <option>ILO9010</option>
            </select>            
          </div>
        </div>
      </div>
    </Layout>
  )
}