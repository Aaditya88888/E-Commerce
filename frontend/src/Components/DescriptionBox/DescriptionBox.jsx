import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          corporis commodi quibusdam ipsa, ducimus quae similique placeat
          deleniti ullam cupiditate perspiciatis architecto. Rerum consectetur
          aperiam neque illum necessitatibus ipsa quo?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
          exercitationem voluptate repudiandae tempora cupiditate, porro
          mollitia asperiores id, nemo placeat sunt soluta vitae enim nesciunt!
        </p>
      </div>
    </div>
  );
};
