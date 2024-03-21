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
      
      <div className='field'>
        <label className='label' htmlFor='inputMotorista'>Motorista: *</label>
        <div className='control'>
          <input  className='input'
                  id='inputMotorista'
                  placeholder='Motorista' />
        </div>
      </div>
      
      <div className='field'>
        <label className='label' htmlFor='inputConferente'>Conferido Por: *</label>
        <div className='control'>
          <input  className='input'
                  id='inputConferente'
                  placeholder='Conferido Por' />
        </div>
      </div>
      
      <div className='field'>
        <label className='label' htmlFor='selectOrigem'>Origem: *</label>
        <div className='control'>
          <div className='select'>
            <select className="is-hover" id='selectOrigem'>
              <option>F01 - Centro de Distribuição</option>
              <option>F02 - Loja Alvorada Matriz</option>
              <option>F03 - Loja Alvorada PD60</option>
              <option>F04 - Loja Alvorada PD49</option>
              <option>F05 - Insdustria Distrito</option>
              <option>F09 - Loja Alvorada Olegário</option>
              <option>F10 - Loja POA Rubem Berta 1083</option>
              <option>F11 - Loja Alvorada 18 de Julho</option>
              <option>F12 - Loja Alvorada Vista Alegre</option>
              <option>F13 - Loja POA Rubem Berta 597</option>
            </select>            
          </div>
        </div>
      </div>
      
      <div className='field'>
        <label className='label' htmlFor='selectDestino'>Destino: *</label>
        <div className='control'>
          <div className='select'>
            <select className="is-hover" id='selectDestino'>
              <option>F01 - Centro de Distribuição</option>
              <option>F02 - Loja Alvorada Matriz</option>
              <option>F03 - Loja Alvorada PD60</option>
              <option>F04 - Loja Alvorada PD49</option>
              <option>F05 - Insdustria Distrito</option>
              <option>F09 - Loja Alvorada Olegário</option>
              <option>F10 - Loja POA Rubem Berta 1083</option>
              <option>F11 - Loja Alvorada 18 de Julho</option>
              <option>F12 - Loja Alvorada Vista Alegre</option>
              <option>F13 - Loja POA Rubem Berta 597</option>
            </select>            
          </div>
        </div>
      </div>
      
      <div className='field'>
        <label className='label' htmlFor='selectEmissor'>Usuário Emissor: *</label>
        <div className='control'>
          <div className='select'>
            <select className="is-hover" id='selectEmissor'>
              <option>Logistica - Pedro Reis</option>
              <option>Logistica - Fernanda</option>
              <option>Adm Lojas - Lucas Pain</option>
              <option>Supervisão - Rodrigo Reis</option>
              <option>Supervisão - Nerildo</option>
            </select>            
          </div>
        </div>
      </div>
      
      <div className='field'>
        <label className='label' htmlFor='inputLacre1'>Número Lacre 1: *</label>
        <div className='control'>
          <input  className='input'
                  id='inputLacre1'
                  placeholder='Número lacre 1' />
        </div>
      </div>
      <div className='field'>
        <label className='label' htmlFor='inputLacre2'>Número Lacre 2: *</label>
        <div className='control'>
          <input  className='input'
                  id='inputLacre2'
                  placeholder='Número lacre 2' />
        </div>
      </div>
      <div className='field'>
        <label className='label' htmlFor='inputLacre3'>Número Lacre 3: *</label>
        <div className='control'>
          <input  className='input'
                  id='inputLacre3'
                  placeholder='Número lacre 3' />
        </div>
      </div>
      <div className='field'>
        <label className='label' htmlFor='inputLacre4'>Número Lacre 4: *</label>
        <div className='control'>
          <input  className='input'
                  id='inputLacre4'
                  placeholder='Número lacre 4' />
        </div>
      </div>
      <div className='field'>
        <label className='label' htmlFor='inputLacre5'>Número Lacre 5: *</label>
        <div className='control'>
          <input  className='input'
                  id='inputLacre5'
                  placeholder='Número lacre 5' />
        </div>
      </div>
      
      <button className="button is-success is-outlined is-hovred">Gerar Checklist</button>
    </Layout>
  )
}