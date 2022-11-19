function enablePhotoUpload(){
    const imageInput = document.querySelector("#image-input")
    
    imageInput.addEventListener("change", function(){
        const reader = new FileReader()
       
        reader.addEventListener("load", ()=>{
            const uploadImage = reader.result

            changeMemePictures(uploadImage)
            //document.querySelector("#display-image").style
            //.backgroundImage = `url(${uploadImage})`
        })
        reader.readAsDataURL(this.files[0])
    })
}

async function mapImageList(){
    const memesObject = [
        {
            "name": "futurama",
            "path": "pictures/futurama.jpg"
        },
        {
            "name": "chloe",
            "path": "pictures/chloe.jpg"
        },
        {
            "name": "gavin2",
            "path": "pictures/gavin2.jpg"
        },
    ]
    return memesObject
}

async function createGallery(imageList){
    const memeSelector = document.querySelector("#memes-list")

    imageList.forEach(picture => {
        let newOption = document.createElement("option")
        newOption.text = picture.name.toUpperCase()
        newOption.value = picture.path
        memeSelector.appendChild(newOption)
    });
}

async function changeMemePictures(photo) {
    let displayImage = document.querySelector("#display-image")
    displayImage.style.backgroundImage = `url('${photo}')`
}

async function main(){
    const memesImageList = await mapImageList()

    enablePhotoUpload()
    await createGallery(memesImageList)
    await changeMemePictures(memesImageList[0].path)
}

main()