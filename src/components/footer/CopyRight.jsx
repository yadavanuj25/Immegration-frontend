import React from "react";

const CopyRight = () => {
  return (
    <div className="bg-primary text-white py-4 ">
      <div className="container mx-auto  text-center">
        <p>© {new Date().getFullYear()} Immeg. All rights reserved.</p>
      </div>
    </div>
  );
};

export default CopyRight;
