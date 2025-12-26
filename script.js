let filters = {
    Brightness: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    Contrast: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    Saturation: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    Grayscale: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    Invert: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    Sepia: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    HueRotate: {
        value: 0,
        min: 0,
        max: 360,
        unit: "deg"
    },
    Blur: {
        value: 0,
        min: 0,
        max: 20,
        unit: "px"
    },
    Opacity: {
        value: 100,
        min: 0,
        max: 100,
        unit: "%"
    }
}

const presets = {
    Vintage: {
        Brightness: 110,
        Contrast: 90,
        Saturation: 80,
        Sepia: 40,
        HueRotate: 0,
        Blur: 0,
        Opacity: 100,
        Grayscale: 0,
        Invert: 0
    },

    Warm: {
        Brightness: 105,
        Contrast: 110,
        Saturation: 120,
        HueRotate: -10,
        Sepia: 15,
        Blur: 0,
        Opacity: 100,
        Grayscale: 0,
        Invert: 0
    },

    SoftGlow: {
        Brightness: 115,
        Contrast: 95,
        Saturation: 105,
        Blur: 2,
        Opacity: 100,
        Grayscale: 0,
        Invert: 0
    },

    LasVegas: {
        Brightness: 120,
        Contrast: 140,
        Saturation: 160,
        HueRotate: 15,
        Blur: 0,
        Opacity: 100,
        Grayscale: 0,
        Invert: 0
    },

    Laos: {
        Brightness: 108,
        Contrast: 102,
        Saturation: 90,
        HueRotate: -5,
        Sepia: 10,
        Blur: 1,
        Opacity: 100,
        Grayscale: 0,
        Invert: 0
    },

    Moody: {
        Brightness: 90,
        Contrast: 130,
        Saturation: 85,
        HueRotate: 0,
        Blur: 0,
        Opacity: 100,
        Grayscale: 0,
        Invert: 0
    },

    Cinematic: {
        Brightness: 95,
        Contrast: 140,
        Saturation: 110,
        HueRotate: -20,
        Blur: 0,
        Opacity: 100,
        Grayscale: 0,
        Invert: 0
    },

    BlackWhite: {
        Grayscale: 100,
        Contrast: 120,
        Brightness: 105,
        Sepia: 0,
        HueRotate: 0,
        Blur: 0,
        Opacity: 100,
        Invert: 0
    },

    Fade: {
        Brightness: 110,
        Contrast: 85,
        Saturation: 90,
        Opacity: 95,
        Sepia: 0,
        HueRotate: 0,
        Blur: 0,
        Invert: 0,
        Grayscale: 0
    },

    CoolBlue: {
        Brightness: 100,
        Contrast: 110,
        Saturation: 105,
        HueRotate: 20,
        Sepia: 0,
        Blur: 0,
        Opacity: 100,
        Grayscale: 0,
        Invert: 0
    }
};


const filtersContainer = document.querySelector('.filters');
const imageCanvas = document.querySelector('#image-canvas');
const imageFile = document.querySelector('#imageFile');
const ctx = imageCanvas.getContext('2d');
const resetBtn = document.querySelector('#resetBtn');
const downloadBtn = document.querySelector('#downloadBtn');
const presetContainer = document.querySelector('.presets')
const notification = document.querySelector('.notification')
let file = null
let img = null

function createFilters(id, min, max, value) {
    const filter = document.createElement('div');
    const input = document.createElement('input');
    const h4 = document.createElement('h4');

    filter.classList.add('filter');
    input.type = 'range';
    input.id = id;
    input.min = min;
    input.max = max;
    input.value = value;
    h4.textContent = id;

    filter.appendChild(h4);
    filter.appendChild(input);

    input.addEventListener('input', (e) => {
        filters[id].value = e.target.value
        applyFilters()
    })

    return filter
}

function warningNotification() {
    if (file === null) {
        notification.classList.add('showSlider')
        notification.classList.remove('hideSlider')
        setTimeout(() => {
            notification.classList.remove('showSlider')
            notification.classList.add('hideSlider')
        }, 2000);
        return true
    }
    return false
}

function filterAttr() {
    Object.keys(filters).forEach((filter) => {
        const filterElement = createFilters(filter, filters[filter].min, filters[filter].max, filters[filter].value)
        filtersContainer.appendChild(filterElement)
    })
}
filterAttr()

imageFile.addEventListener('change', (e) => {
    const imagePlaceholder = document.querySelector('.imgPlaceholder')
    file = e.target.files[0]
    imagePlaceholder.style.display = 'none'
    imageCanvas.style.display = 'block'

    image = new Image()
    image.src = URL.createObjectURL(file)

    image.onload = () => {
        img = image
        imageCanvas.width = image.width
        imageCanvas.height = image.height
        ctx.drawImage(image, 0, 0)
    }
})

function applyFilters() {
    ctx.clearRect(0, 0, imageCanvas.width, imageCanvas.height)
    ctx.filter = `brightness(${filters.Brightness.value}${filters.Brightness.unit}) 
                  contrast(${filters.Contrast.value}${filters.Contrast.unit}) 
                  saturate(${filters.Saturation.value}${filters.Saturation.unit}) 
                  grayscale(${filters.Grayscale.value}${filters.Grayscale.unit}) 
                  invert(${filters.Invert.value}${filters.Invert.unit}) 
                  sepia(${filters.Sepia.value}${filters.Sepia.unit}) 
                  hue-rotate(${filters.HueRotate.value}${filters.HueRotate.unit})
                  blur(${filters.Blur.value}${filters.Blur.unit})
                  opacity(${filters.Opacity.value}${filters.Opacity.unit})`.trim()

    ctx.drawImage(img, 0, 0)
}

resetBtn.addEventListener('click', () => {
    filters = {
        Brightness: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%"
        },
        Contrast: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%"
        },
        Saturation: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%"
        },
        Grayscale: {
            value: 0,
            min: 0,
            max: 100,
            unit: "%"
        },
        Invert: {
            value: 0,
            min: 0,
            max: 100,
            unit: "%"
        },
        Sepia: {
            value: 0,
            min: 0,
            max: 100,
            unit: "%"
        },
        HueRotate: {
            value: 0,
            min: 0,
            max: 360,
            unit: "deg"
        },
        Blur: {
            value: 0,
            min: 0,
            max: 20,
            unit: "px"
        },
        Opacity: {
            value: 100,
            min: 0,
            max: 100,
            unit: "%"
        }
    }
    filtersContainer.innerHTML = ""
    filterAttr()
    applyFilters()
})

downloadBtn.addEventListener('click', () => {
    if (warningNotification()) return
    const link = document.createElement('a')
    link.download = 'edited-image.jpg'
    link.href = imageCanvas.toDataURL()
    link.click()
})


Object.keys(presets).forEach((preset) => {
    const presetBtn = document.createElement('button')
    presetBtn.classList.add('preset-btn')
    presetBtn.textContent = preset
    presetContainer.appendChild(presetBtn)

    presetBtn.addEventListener('click', (e) => {
        if (warningNotification()) return

        const preset = e.target.textContent
        Object.keys(presets[preset]).forEach((filter) => {
            filters[filter].value = presets[preset][filter]
        })
        applyFilters()
        filtersContainer.innerHTML = ""
        filterAttr()
    })
})