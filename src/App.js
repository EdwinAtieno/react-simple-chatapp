import {ChatEngine} from "react-chat-engine";
import './App.css';
import ChatFeed from "./components/ChatFeed";
import LoginForm from './components/LoginForm';
const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;


    return(
        <ChatEngine
            height={"100vh"}
            projectID="ff3fab05-0920-4f18-82f8-ffb9fc44ec9b"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}


        />
    )

};

export default App;