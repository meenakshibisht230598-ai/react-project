import React, { useState } from "react";
import img from "../assets/download (2).jpeg";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Meenakshi Bisht",
    email: "mahitaragi@129game.com",
    location: "India",
    memberSince: "2024",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);

  };

  return (
    <div className="min-h-[85vh] bg-blue-50 flex justify-center items-center p-4 ">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-6">
        <div className="flex flex-col items-center">
          <img
            src={img}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-blue-400 shadow"
          />

          {isEditing ? (
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="mt-3 border p-1 rounded text-center"
            />
          ) : (
            <h2 className="text-xl font-bold mt-3 text-gray-800">
              {user.name}
            </h2>
          )}

          <p className="text-gray-500 text-xs">
            SnapShop User | Online Shopper
          </p>
        </div>

        <div className="my-4 border-t"></div>

        <div className="space-y-3 text-sm text-gray-700 mt-10">
         
          <div className="flex justify-between">
            <span className="font-semibold">Email</span>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="border p-1 rounded"
              />
            ) : (
              <span className="text-gray-600">{user.email}</span>
            )}
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Location</span>
            {isEditing ? (
              <input
                type="text"
                name="location"
                value={user.location}
                onChange={handleChange}
                className="border p-1 rounded"
              />
            ) : (
              <span className="text-gray-600">{user.location}</span>
            )}
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Member Since</span>
            <span className="text-gray-600">{user.memberSince}</span>
          </div>
        </div>

        {isEditing ? (
          <button
            onClick={handleSave}
            className="mt-6 w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="mt-6 w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
