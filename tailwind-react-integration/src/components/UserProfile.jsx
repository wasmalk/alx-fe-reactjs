function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 sm:p-4 md:p-8 max-w-xs sm:max-w-sm mx-auto my-10 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full mx-auto"
      />
      <h1 className="text-lg sm:text-xl text-blue-800 text-center font-semibold my-4">
        John Doe
      </h1>
      <p className="text-sm sm:text-base text-gray-600 text-center">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
