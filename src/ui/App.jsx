import AppRouters from "./routers/AppRouters";
import { I18nextProvider } from "react-i18next";
import i18n from "../common/utils/translations/i18next.config"

const App = () => {
  return (
  <I18nextProvider i18n={i18n}>
    <AppRouters />
  </I18nextProvider>)
}

export default App;
