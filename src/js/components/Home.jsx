import React from "react";
import Card from "./Card";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Modal from "./Modal";
import Navbar from "./Navbar";

const Home = () => {
	return (
		<div className="text-center">
			<Navbar title={"ATLA"} />
			<Carousel />
			<Modal btnTitle={"Click Me"} />
			<div className="d-flex">
				<Card quoted={"Aang"} />
				<Card quoted={"Soka"} />
				<Card quoted={"Toph"} />
			</div>
			<Footer />
		</div>
	);
};

export default Home;