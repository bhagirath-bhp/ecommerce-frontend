import { useRecoilValue } from "recoil";
import { userState } from "../components/state/RecoilState";
import Navbar from "../components/Navbar";
import { Button } from "@material-tailwind/react";
const ProfilePage = () => {
    const user = useRecoilValue(userState);
    console.log(user);
    return (
        <div className="h-screen">
            <Navbar/>
            <div className="profile flex flex-col justify-evenly items-center h-[80%]">
                <h3 className="text-5xl font-bold">John Doe</h3>
                <div className="profile-actions flex justify-center items-center gap-5 flex-wrap max-w-[30%]">
                    <Button className="btn-gold w-[10rem]">View Cart</Button>
                    <Button className="btn-gold w-[10rem]">View Orders</Button>
                    <Button className="btn-gold w-[10rem]">Update Address</Button>
                    <Button className="btn-gold w-[10rem]">Sign Out</Button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage