import React, {useState} from "react";
import Light from "./light";

//create your first component
	const Home = () => {

		const [currentColor, setCurrentColor] = useState("red");

		function changeBright(color) {
			setCurrentColor(color);
			console.log(color);
		}
		
		return (
			<div className="container">
				<div className="row justify-content-center mt-5">

					<div className="card bg-dark" style={{ width: "7rem" }}>
						<ul className="list-group list-group-flush">
							<Light color="red" onclick={() => changeBright("red")} currentColor={currentColor}/>
							<Light color="yellow" onclick={() => changeBright("yellow")} currentColor={currentColor}/>
							<Light color="green" onclick={() => changeBright("green")} currentColor={currentColor}/>
						</ul>
					</div>

				</div>
			</div>


		);
	}

export default Home;
