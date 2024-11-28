import React from "react";

const TemplateDesign = () => {
  return (
    <div className="grid grid-cols-2 gap-1">
      {[1, 2, 3, 4].map((item, idx) => 
        <div key={idx} className="group w-full rounded-md overflow-hidden cursor-pointer">
          <img
            src="https://cdn2.slidemodel.com/wp-content/uploads/7798-business-slide-deck-for-powerpoint-558x314.png"
            alt="template"
          />
        </div>
      )}
    </div>
  );
};

export default TemplateDesign;
