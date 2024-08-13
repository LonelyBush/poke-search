import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom';
import MainPage from '../view/main/main-page';
import UncontrolledForm from '../view/uncontrolled-form/uncontrolled-form';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/main" replace />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/uncontrolled" element={<UncontrolledForm />} />
    </>,
  ),
);

export default router;
