import { createRoot } from 'react-dom/client'
import './styles/global.css';
import { BrowserRouter } from 'react-router';
import { AppRoutes } from './routes/AppRoutes';
import { Provider } from 'react-redux';
import { store } from './store/store'

createRoot(document.getElementById('root')!).render(
  // <div className="flex flex-col justify-between min-h-screen h-full">
  //   <UserTodos />
  //   <Footer />
  // </div>
  // <Account />
  <Provider store={store}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Provider>
  // <Login />
  // <Registration />
  // <WelcomePage />
)