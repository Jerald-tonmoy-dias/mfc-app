import Wrapper from './component/Wrapper';
import { ThemeProvider } from 'styled-components';
function App() {

  const theme = {
    primaryColor: '#FF6600',
    secondaryColor: '#F3516B',
    grayColor: '#8D8E8F',
    liteBlackColor: '#242526',
    litewhiteColor: '#F7F8F9'
  }


  return (
    <ThemeProvider theme={theme}>

      <Wrapper />

    </ThemeProvider>
  );
}

export default App;
