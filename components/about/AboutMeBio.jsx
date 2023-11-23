import Image from 'next/image';

function AboutMeBio() {
	return (
		<div className="block mx-px px-0.5 sm:flex sm:gap-10 mt-10 sm:mt-20 mr-0.5">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<Image
					src="/images/profile.jpeg"
					width={400}
					height={400}
					className="rounded-lg"
					alt="Profile Image"
				/>
			</div>

			<div id="bio" className="font-general-regular w-full sm:w-3/4 text-left">
			
				<p
					className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
	
				>
					Hello, I am Joel Tavarez. I graduated with a degree in Computer Science in 2021 from the University of Virginia. I am currently working as a front end software engineer at Target. I work on the Same Day Delivery (Shipt) service on Target.com. I previously worked on 
					a backend engineering squad, the digital payments team, and helped implement SNAP as a payment on Target.com. I am broadly interested in technical performance, design, and process of creating efficient,
					competent systems with remarkable UX.  
				</p>
				<p
					className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
	
				>
					In my free time, I like to keep myself up to date with the latest tech and economics news, primarly on AI and macroeconomics. I also  Besides my technical passions, I enjoy 
					a fitness lifestyle and hold deep interests in endocrinology, nutrition, and biohacking. I also enjoy reading and new experiences that could lead me to new, diverese
					outlooks on life. Although I hold a degree in Computer Science, throughout my time at UVA, I took many courses in commerce, entrepreneurship, history and miscenallous courses 
					in biology, nutrition, and child development which I consider critical to my overall outlook. One of my most memerable experiences came from my time with iXperience in Cape Town, South Africa.
					Here, I spent 6 weeks learning full-stack development but also spent 4 weeks learning about the history of South Africa, spanning from anthropology to its present day culture and its responses 
					to inequality and modernity.  
				</p>
			

					

				
		
			</div>
		</div>
	);
}

export default AboutMeBio;
