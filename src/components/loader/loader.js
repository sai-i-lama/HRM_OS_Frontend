import { Spin } from "antd";
import React from "react";

function Loader(props) {
	return (
		<div className='text-center'>
			<div className='loading'>
				<h5 className='text-xl mb-3'>Chargement, veuillez patienter ...</h5>
				<Spin size={"large"} />
			</div>
		</div>
	);
}

export default Loader;
