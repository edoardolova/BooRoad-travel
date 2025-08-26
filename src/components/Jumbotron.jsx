export default function Jumbotron({ title, text, cta, img_url }) {

	const jumbotronStyle = {
		backgroundImage: `url(${img_url})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat"
	}

	return (
		<>
			<div className="p-5 bg-color-Jumbotron rounded-3 " style={jumbotronStyle}>
				<div className="container-fluid py-5 ">
					<h1 className="display-5 fw-bold">{title}</h1>
					<p className="col-md-8 fs-4">
						{text}
					</p>
					{/* <button className="btn btn-primary btn-lg" type="button">
						{cta}
					</button> */}
					{/* <img src={img_url} alt="" /> */}
				</div>
			</div>
		</>
	)
}