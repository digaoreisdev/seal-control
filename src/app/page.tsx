import Head from "next/head";
import { Layout } from 'components' //baseURL no compilador "SRC"

import 'bulma/css/bulma.css'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Contole de Lacres</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      Bem vindo!
      
      <Layout />
      
      </div>
  );
}

export default Home;
