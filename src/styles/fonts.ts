import css from "styled-jsx/css";

import { PoppinsRegularWoff2, PoppinsRegularWoff, PoppinsRegularTtf, PoppinsRegularEot, PoppinsMediumWoff2, PoppinsMediumWoff, PoppinsMediumTtf, PoppinsMediumEot } from "@/assets/fonts";

export const fonts = css`
	@font-face {
		font-family: "Poppins Regular";
		src: url(${PoppinsRegularWoff2}) format("woff2"),
			url(${PoppinsRegularWoff}) format("woff"),
			url(${PoppinsRegularTtf}) format("truetype"),
			url(${PoppinsRegularEot}) format("embedded-opentype");
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: "Poppins Medium";
		src: url(${PoppinsMediumWoff2}) format("woff2"),
			url(${PoppinsMediumWoff}) format("woff"),
			url(${PoppinsMediumTtf}) format("truetype"),
			url(${PoppinsMediumEot}) format("embedded-opentype");
		font-weight: normal;
		font-style: normal;
	}
`;

export const PoppinsRegular = `"Poppins Regular", sans-serif`;

export const PoppinsMedium = `"Poppins Medium", sans-serif`;
