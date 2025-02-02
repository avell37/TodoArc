import { createRoot } from 'react-dom/client'
import './styles/global.css';
import { BrowserRouter } from 'react-router';
import { AppRoutes } from './routes/AppRoutes';

createRoot(document.getElementById('root')!).render(
  // <div className="flex flex-col justify-between min-h-screen h-full">
  //   <UserTodos />
  //   <Footer />
  // </div>
  // <Account />
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
  // <Login />
  // <Registration />
  // <WelcomePage />
)