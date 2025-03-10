import React from "react";

const Carousel = () => {
    return (
        <div id="carouselExample" className="carousel slide w-75 mx-auto">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://reactormag.com/wp-content/uploads/2024/01/avatar-the-last-airbender-flying.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://matthasanopinion.com/wp-content/uploads/2023/09/last-airbender-episodes.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/mv5bmge0ytixnmqtytmyms00zdjjltkwndctzjnhmte4yzjimjk4xkeyxkfqcgdeqxvymjgyoti4mgatat-v1-1589918053.jpg?crop=0.75xw:1xh;center,top&resize=980:*" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;