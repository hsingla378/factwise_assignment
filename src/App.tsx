import { Provider } from "react-redux";
import Landing from "./pages/Landing";
import store from "./util/store";

function App() {
  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  );
}

export default App;
