document.addEventListener('DOMContentLoaded', function(){
    const images = [
        'https://i.pinimg.com/564x/6a/fc/5c/6afc5c43a5050054d7482202e3b75239.jpg',
        'https://i.pinimg.com/736x/db/3a/62/db3a623acc8396fb285ec899ad01cd10.jpg',
        'https://i.pinimg.com/736x/40/c3/0d/40c30dca70da6777f2f3de8b2407c9b9.jpg',
        'https://i.pinimg.com/564x/ae/f1/d5/aef1d5376cfe2157bacc0cb779d65482.jpg',
        'https://i.pinimg.com/736x/6a/e8/27/6ae827fcca32bf53c2a286efeb0b145d.jpg',
        'https://i.pinimg.com/736x/3b/a8/9b/3ba89b3065a1afec8f126aa32ef5a1c0.jpg',
        'https://i.pinimg.com/564x/e1/44/ba/e144bac738f55ad249e68d3159f733c5.jpg',
        'https://i.pinimg.com/564x/73/f3/5a/73f35ab18a1e7cc588bc8d793a0d6860.jpg'
    ];
    
    const workerPics = Array.from(document.querySelectorAll('.worker-card-pic'));
    
    images.forEach((image, index) => {
        if(workerPics[index]){
            workerPics[index].style.backgroundImage = `url(${image})`;
        }
    })
})