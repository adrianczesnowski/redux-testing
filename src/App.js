import { Provider } from "react-redux";
import {AddPerson} from "./AddPerson";
import storeConfig from "./store";

const store = storeConfig();

function App() {
  return (
      <>
        <Provider store={store}>
          <AddPerson />
        </Provider>
      </>
  );
}

export default App;
