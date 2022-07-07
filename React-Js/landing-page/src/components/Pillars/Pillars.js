import React from "react";
import "./Pillars.css";
import "font-awesome/css/font-awesome.min.css";

const Pillars = () => {
	return (
		<div>
			<div className="Greeting">
				<h1>Welcome!</h1>
				<p class="text-secondary">
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout. The point of
					using Lorem Ipsum is that it has a more-or-less normal distribution of
					letters, as opposed to using.
				</p>
			</div>
			<div className="Pillars">
				<div className="Pillar">
					<div className="Pillar-content">
						<a href="/# ">
							<i class="fa fa-users fa-3x icon-columns"></i>
						</a>
						<h1>MANAGEMENT</h1>
						<p class="text-desc">
							It was popularised in the 1960s with the release of Letraset
							sheets containing Lorem Ipsum passages, and more.
						</p>
					</div>
				</div>
				<div className="Pillar">
					<div className="Pillar-content">
						<a href="/#">
							<i class="fas fa-chart-bar fa-3x icon-columns"></i>
						</a>
						<h1>PLANNING</h1>
						<p class="text-desc">
							The standard chunk of Lorem Ipsum used since the 1500s is
							reproduced below for those interested. Sections 1.10.32 and
							1.10.33
						</p>
					</div>
				</div>
				<div className="Pillar">
					<div className="Pillar-content">
						<a href="/#">
							<i class="fab fa-stumbleupon-circle fa-3x icon-columns"></i>
						</a>
						<h1>MARKETING</h1>
						<p class="text-desc">
							The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
							comes from a line in section 1.10.32
						</p>
					</div>
				</div>
				<div className="Pillar">
					<div className="Pillar-content">
						<a href="/#">
							<i class="far fa-file-word fa-3x icon-columns"></i>
						</a>
						<h1>REPORTS</h1>
						<p class="text-desc">
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered alteration in some form, by
							injected humour, or randomised words which don't look even
							slightly believable.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pillars;
