export default function Jumbotron({ title, text, cta, img_url }) {
	return (
		<>
			<div class="p-5 bg-color-Jumbotron rounded-3 ">
				<div class="container-fluid py-5 ">
					<h1 class="display-5 fw-bold">{title}</h1>
					<p class="col-md-8 fs-4">
						{text}
					</p>
					<button class="btn btn-primary btn-lg" type="button">
						{cta}
					</button>
					<img src={img_url} alt="" />
				</div>
			</div>

		</>
	)
}