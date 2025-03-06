import { useState } from "react";

export default function SidebarItem({ user, active }) {
    const [activ,setActiv] = useState(active);
    return (
      <div onClick={e=>{setActiv(!activ)}} className={`p-3 rounded-lg cursor-pointer ${
        activ ? "bg-orange-100 text-orange-500 font-bold" : "hover:bg-gray-200"
      }`}>
        <div className="w-24 flex justify-between">
              <img src={user._doc.profilePic} className="w-8"/>
              {user._doc.username}
            </div>
      </div>
    );
  }