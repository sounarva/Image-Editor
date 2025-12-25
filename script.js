const filters = {
    Brightness : {
        value : 100,
        min : 0,
        max : 200,
    },
    Contrast : {
        value : 100,
        min : 0,
        max : 200,
    },
    Saturation : {
        value : 100,
        min : 0,
        max : 200,
    },
    Grayscale : {
        value : 0,
        min : 0,
        max : 100,
    },
    Invert : {
        value : 0,
        min : 0,
        max : 100,
    },
    Sepia : {
        value : 0,
        min : 0,
        max : 100,
    },
    HueRotate : {
        value : 0,
        min : 0,
        max : 360,
    },
    Blur : {
        value : 0,
        min : 0,
        max : 20,
    },
}

const filtersContainer = document.querySelector('.filters');

function createFilter(id , min , max , value){
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

    return filter
}

Object.keys(filters).forEach((filter)=>{
    const filterElement = createFilter(filter , filters[filter].min , filters[filter].max , filters[filter].value)
    filtersContainer.appendChild(filterElement)
})