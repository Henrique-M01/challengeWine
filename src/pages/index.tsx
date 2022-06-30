import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Wine</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header>
          <span>WINE</span>
          <nav>
            <span>Clube</span>
            <span>Loja</span>
            <span>Produtores</span>
            <span>Ofertas</span>
            <span>Eventos</span>
          </nav>
          <span>Icons de pesquisa e perfil</span>
        </Header>
      </main>
    </div>
  )
}

export default Home