const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    intialSlide: 0,
    responsive: [
        {
        breakpoints: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
        },
    },
    {
        breakpoints: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
        },
    },
    {
        breakpoints: 360,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,

        },
    },
],

};
export default settings;