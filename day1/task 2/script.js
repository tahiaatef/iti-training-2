let currentImg;
        function dragging(img){
            currentImg=img;
        }
        function alloWDrop(event){
            event.preventDefault();
        }
        function drop(event){
            event.target.appendChild(currentImg);
        }