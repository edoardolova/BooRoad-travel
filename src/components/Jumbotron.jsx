export default function Jumbotron({ title, text, cta, img_url }) {

	const jumbotronStyle = {
		backgroundImage: `url(${img_url})`,
		objectFit: "cover",
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		minHeight: "200px"
	}

	return (
		<>
			<div className="container-fluid ps-4 pt-4" style={jumbotronStyle}>
				<h1 className="display-5 fw-bold">{title}</h1>
				<p className="col-md-8 fs-4">
					{text}
				</p>
				{/* <button className="btn btn-primary btn-lg" type="button">
						{cta}
					</button> */}
				{/* <img src={img_url} alt="" /> */}
			</div>
		</>
	)
}