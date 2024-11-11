import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import gallaryImages from './gallaryImages'


const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry
    columnsCountBreakPoints={{350: 1, 768: 3, 992: 4}}>
          <Masonry gutter="1rem">
        {
          gallaryImages.map((item, index) => (
                  <img src={item} key={index} alt="" style={{width:"100%", display:"block", borderRadius:"10px" }} />
        ))}
        </Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonryImagesGallery