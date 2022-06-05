import { Provider } from 'react-redux';
import { AppRouter } from "./router/AppRouter";
import { store } from "./store/store";


function App() {
    return (
        <div data-test="app">
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </div>
    );
}

export default App;
