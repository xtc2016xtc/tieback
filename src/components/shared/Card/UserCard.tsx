import { Models } from "appwrite";
import { Link } from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";




type UserCardProps = {
    user: Models.Document;
};

const UserCard = ({ user }: UserCardProps) => {

    return (
        <Link to={`/profile/${user.$id}`} className="user-card">
            {/** 显示用户头像 */}
            <img
                src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
                alt="creator"
                className="rounded-full w-14 h-14"
            />

            {/** 显示用户名和用户名 */}
            <div className="flex-center flex-col gap-1">
                <p className="base-medium text-light-1 text-center line-clamp-1">
                    {user.name}
                </p>
                <p className="small-regular text-light-3 text-center line-clamp-1">
                    @{user.username}
                </p>
            </div>

            {/** 显示Follow按钮 */}
            <Button type="button" size="sm" className="shad-button_primary px-5">
                详细信息
            </Button>
        </Link>
    );
};


export default UserCard;