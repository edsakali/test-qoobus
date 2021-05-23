import { ToastContainer } from "react-toastify";
import { AppRouter } from "./routers/AppRouter";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer  />
      <AppRouter />
    </>
  );
}

export default App;
