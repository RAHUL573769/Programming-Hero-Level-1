import React from "react";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunt/Aunty";
import { AssetContext } from "../createContextApi";

const Grandpa = () => {
	// const grandPaStule = {};
	return (
		<div className='grandpa '>
			<h2>Grandpa</h2>
			<AssetContext.Provider value='Gold Value'>
				<div className='flex'>
					<Dad></Dad>
					<Uncle></Uncle>
					<Aunty></Aunty>
				</div>
			</AssetContext.Provider>
		</div>
	);
};

export default Grandpa;
