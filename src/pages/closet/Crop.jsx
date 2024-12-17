import React, { useState, useRef, useEffect } from 'react'
import Cropper from 'cropperjs'
import "cropperjs/dist/cropper.js"
import ClosetLayoutO from '../../layouts/ClosetLayoutO'


function Crop() {
  const [croppedImgURL, setCroppedImgURL] = useState('')
  const imgPreviewRef = useRef('')
  const imgCropRef = useRef('')
  const fileInputRef = useRef('')
  const cropperInstance = useRef('')

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const imgPreview = imgPreviewRef.current;

      // 顯示選取的圖片
      imgPreview.src = e.target.result;
      imgPreview.classList.remove("d-none");

      // 初始化或重新初始化 Cropper
      if (cropperInstance.current) {
        cropperInstance.current.destroy();
      }

      cropperInstance.current = new Cropper(imgPreview, {
        aspectRatio: 0.75,
        viewMode: 1,
        dragMode: "move",
        cropBoxResizable: false,
      });
    };
    reader.readAsDataURL(file);
  }

  const handleCrop = () => {
    const cropper = cropperInstance.current;
    if (cropper) {
      const croppedCanvas = cropper.getCroppedCanvas();
      if (!croppedCanvas) {
        console.error("Canvas is empty or not properly initialized!");
        return;
      }

      const croppedImageURL = croppedCanvas.toDataURL("image/png");
      setCroppedImgURL(croppedImageURL);

      // 隱藏 Cropper
      imgPreviewRef.current.classList.add("d-none");
      cropper.getContainer().classList.add("d-none");
    } else {
      console.error("Cropping is not initialized!");
    }
  };

  const handleCropAgain = () => {
    setCroppedImgURL(null);
    imgPreviewRef.current.classList.remove("d-none");
    cropperInstance.current.getContainer().classList.remove("d-none");
  };

  return (
    <>
      <ClosetLayoutO>
        <div style={{ paddingTop: '62px' }}></div>
        <div className="m-3">
          <input type="file" id="fileInput"
            ref={fileInputRef} onChange={handleFileChange}/>
             {/* className="form-control mb-3" */}
        </div>

        <div className="m-3 d-flex flex-row-reverse">
          <button id="cropButton" className="btn rounded-pill mx-1"
            onClick={handleCrop}>完成裁切</button>
          <button id="cropAgain" className="btn rounded-pill"
            onClick={handleCropAgain}>重新裁切</button>
        </div>

        <div className="text-center py-3">
          {/* 圖片預覽 */}
          <img id="previewImg" ref={imgPreviewRef} className="border d-none" width="300px" height="400px" src="#" alt="Preview" />

          {/* 裁切後的圖片 */}
          { croppedImgURL && (
            <img id="cropImg" ref={imgCropRef} className="border rounded" width="300px" height="400px" src={croppedImgURL} alt="Cropped" />
          )}

        </div>


        <div id="progress" className="fixed-bottom border-top d-flex justify-content-between" style={{ height: '55px' }}>
          <a href="#" className="btn m-2 rounded-pill">上一步</a>
          <a href="#" className="btn m-2 rounded-pill">下一步</a>
        </div>

      </ClosetLayoutO>
    </>
  )
}

export default Crop