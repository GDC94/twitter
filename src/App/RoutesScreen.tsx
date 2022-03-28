import { Navigate, Route, Routes } from 'react-router-dom';
import FeedScreen from '../screens/Feed';
import MessagesScreen from '../screens/Messages';


const RoutesScreen: React.FC = () => {
    return (
        <Routes>
            <Route path='/home' element={FeedScreen}/>
            <Route path='/messages' element={MessagesScreen}/>
            <Route path="/home" element={<Navigate replace to="/home" />} />
        </Routes>
    );
};

export default RoutesScreen;