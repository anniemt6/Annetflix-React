import ReactDOM from 'react-dom';
import { store } from "./redux/store/store";
import { Provider } from "react-redux";
import { SignIn } from './pages/SignIn';

ReactDOM.render(
    <Provider store={store}>
        <SignIn />
    </Provider>,
    document.getElementById('root')
);