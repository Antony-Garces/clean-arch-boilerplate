import { Layout } from '../../sryled-components/layout.styled';
import { Hometitle } from './styled-components/home-title.styled';
import { CreateHomeButton, ModifyHomeButton, ResetHomeButton } from './components';


const HomePage = () => {

  return (
    <Layout>
      <Hometitle>SOY LA PAGINA PRINCIPAL</Hometitle>
      <ResetHomeButton/>
      <ModifyHomeButton/>
      <CreateHomeButton/>
    </Layout>
    
  )
}

export default HomePage
