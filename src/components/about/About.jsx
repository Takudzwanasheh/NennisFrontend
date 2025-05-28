import React from "react";
import "./about.scss";
import VennisLogo from "../../assets/Vennis.png";
export default function About() {
	return (
		<div className='about-container'>
			<div className='about-header'>
				<img src={VennisLogo} alt='Vennis Logo' />
			</div>
			<div className='about-content'>
				<p>
					&ldquo;The greater the loyalty of a group toward the group, the
					greater is the motivation among the members to achieve the goals of
					the group, and the greater the probability that the group will achieve
					its goals.&rdquo; - Rensis Likert
				</p>
				<p>
					Our employees are key to the successes we have enjoyed in the past 30
					years of existence. We take precedence in affording our employees with
					favourable working conditions and we reward them competitively,
					thereby ensuring that we gain and develop a competitive advantage. We
					believe strongly in self-development and invest a great deal towards
					this cause.
				</p>
			</div>
		</div>
	);
}
