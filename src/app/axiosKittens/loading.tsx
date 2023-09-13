import React from "react";

const loading = () => {
  return (
    <div>
      {/* <p>Cargando gatitos...</p> */}
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
      Processing...
    </div>
  );
};

export default loading;
