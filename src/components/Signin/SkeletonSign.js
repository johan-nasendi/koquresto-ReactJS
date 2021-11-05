import React from 'react';
import '../../assests/css/skeletonsig.css'
const SkeletonSign = () => {
  return (
    <div class="skeleton-posts skeleton-shine">
  
     
      <div class="skeleton-posts-header">
        <div class="skeleton-posts-avatar skeleton-posts-avatar_display"></div>
        <div class="skeleton-posts-information">
          <div class="skeleton-posts-userid skeleton-posts-userid_display"></div>
          <div class="skeleton-posts-create-time skeleton-posts-create-time_display"></div>
        </div>
      </div>
  
  
      <div class="skeleton-posts-content">
        <div></div>
      </div>
   
    </div>
      );
};

export default SkeletonSign;