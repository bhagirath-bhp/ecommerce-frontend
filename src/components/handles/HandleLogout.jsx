import { useRecoilState } from 'recoil';
import { userState } from '../state/RecoilState';
    
export const HandleLogout = () => {
    const [currentUser, setCurrentUser] = useRecoilState(userState);
    setCurrentUser(null);
}