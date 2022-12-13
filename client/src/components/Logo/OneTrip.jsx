import React from 'react'

const OneTrip = () => {
	const style = {
		LogosH1:{
			cursor: "pointer",
		},
		LogoSpan: {
			color: "#166678",
		},
	}

	return (
		<h1 style={style.LogosH1}>One<span style={style.LogoSpan}>Trip</span></h1>
	)
}

export default OneTrip