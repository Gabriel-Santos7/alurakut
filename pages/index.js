import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {
  console.log(propriedades);
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr/>    
      <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}> 
        @{propriedades.githubUser}
      </a>

      <AlurakutProfileSidebarMenuDefault/>
    </Box>
  )
}
export default function Home() {
  const usuarioAleatorio = 'Gabriel-Santos7';
  const [comunidades, setComunidades] = React.useState([{
    id: '1',
    title: 'Borges dev lindo',
    image: 'https://scontent.fssz2-1.fna.fbcdn.net/v/t1.6435-9/36281685_1701994109908813_1532345929217081344_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=8V3co2Qnf_IAX9I6bUW&_nc_ht=scontent.fssz2-1.fna&oh=2f3b9958727dc54e61f97ac28eea2b96&oe=60F23A90'
  }]);
 
  const pessoasFavoritas = [
    'HMDarkFir3',
    'devMagno',
    'FernandoBrino',
    'Gotroenks'
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a) 
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer</h2>
            <form onSubmit={ function handleCreateCommunity(e){
              e.preventDefault(); 

              const dadosDoForm = new FormData(e.target);

              const comunidade = {
                id: new Date().toISOString(),
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image')
              }

              const comunidadesAtualizadas = [...comunidades, comunidade];
              setComunidades(comunidadesAtualizadas)
            }}>
              <div>
                <input 
                  type="text" 
                  placeholder="Qual vai ser o nome da sua comunidade?" 
                  name="title" 
                  aria-label="Qual vai ser o nome da sua comunidade?" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Coloque uma URL para usarmos de capa" 
                  name="image" 
                  aria-label="Coloque uma URL para usarmos de capa" 
                />
              </div>
              <button>
               Criar Comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper> 
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>               
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}