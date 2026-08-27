<script lang="ts">
	const experience = [
		{ role: 'Lead Full Stack Developer', company: 'TV Direct', period: 'JAN 2025 — PRESENT', current: true, points: ['Lead a full-stack engineering team, provide technical mentorship, and guide architecture decisions.', 'Drive legacy modernization from Java Spring Boot to an architecture based on NestJS and Svelte.', 'Architect enterprise systems across order management, invoicing, logistics, inventory, and WMS.'], stack: ['NestJS', 'Svelte', 'Vue.js', 'Next.js', 'Docker'] },
		{ role: 'Senior Full Stack Web Applications Developer', company: 'Livinginsider', period: 'NOV 2022 — AUG 2025', points: ['Developed full-stack systems for a residential property listing and rental marketplace.', 'Designed MongoDB-backed services, integrated APIs, activity logging, and real-time chat.'], stack: ['Node.js', 'MongoDB', 'WebSocket'] },
		{ role: 'Senior Web Developer', company: 'Movefast Co., Ltd.', period: 'MAR 2020 — NOV 2022', points: ['Built scalable order processing and inventory systems with real-time SAP synchronization.', 'Automated delivery with Docker, GitLab CI/CD, and Cloud Functions; monitored services with Grafana.'], stack: ['Docker', 'SAP', 'GitLab CI/CD', 'Grafana'] },
		{ role: 'Web Developer', company: 'Movefast Co., Ltd.', period: 'SEP 2018 — MAR 2020', points: ['Delivered HR, URL-shortening, chatbot, and custom API solutions using PHP, Laravel, and Firebase.'], stack: ['PHP', 'Laravel', 'Firebase'] },
		{ role: 'Web Developer', company: 'Nilecon (Thailand) Co., Ltd.', period: 'MAR 2018 — SEP 2018', points: ['Built custom web applications and e-commerce platforms tailored to client requirements.'], stack: ['PHP', 'Node.js', 'React', 'Angular'] },
		{ role: 'Programmer', company: 'JOBBKK.COM', period: 'JAN 2016 — JAN 2018', points: ['Designed backend architecture, HR systems, and responsive interfaces using PHP and CodeIgniter.'], stack: ['PHP', 'CodeIgniter', 'JavaScript'] },
		{ role: 'Programmer', company: 'IMT-ASE Co., Ltd.', period: 'MAY 2016 — AUG 2016', points: ['Developed full-stack applications and modeled complex data relationships with Neo4j.'], stack: ['AngularJS', 'Node.js', 'Neo4j'] },
		{ role: 'Java Programmer', company: 'CDGS Ltd.', period: 'AUG 2015 — DEC 2015', points: ['Developed and maintained enterprise web applications using Java, JSF, and J2EE.'], stack: ['Java', 'JSF', 'J2EE'] }
	];

	const skills = [
		{ label: 'LANGUAGES', values: ['Go', 'TypeScript', 'JavaScript', 'PHP', 'Java', 'Python', 'Lua', 'Rust'] },
		{ label: 'BACKEND', values: ['Node.js', 'NestJS', 'Spring Boot', 'Laravel', 'CodeIgniter'] },
		{ label: 'FRONTEND', values: ['Vue.js', 'Next.js', 'Nuxt', 'Svelte', 'React', 'Angular'] },
		{ label: 'DATABASE', values: ['PostgreSQL', 'MongoDB', 'MySQL', 'Neo4j', 'Oracle'] },
		{ label: 'OPS & CLOUD', values: ['Docker', 'Kubernetes', 'GitLab CI/CD', 'GCP', 'Linux', 'Grafana', 'Airflow'] }
	];

	let menuOpen = $state(false);
</script>

<svelte:head>
	<title>Paramas Waewsuwan — Senior Full Stack Developer</title>
	<meta name="description" content="Senior Full Stack Developer and Technical Lead specializing in scalable web applications and enterprise systems." />
</svelte:head>

<div class="noise"></div>
<header class="topbar">
	<a class="brand" href="#top" aria-label="Back to top"><span>~/</span>paramas.dev</a>
	<button class="menu-button" aria-label="Toggle navigation" onclick={() => (menuOpen = !menuOpen)}><span></span><span></span></button>
	<nav class:open={menuOpen} aria-label="Main navigation">
		<a href="#about" onclick={() => (menuOpen = false)}><span>01.</span> about</a>
		<a href="#experience" onclick={() => (menuOpen = false)}><span>02.</span> experience</a>
		<a href="#skills" onclick={() => (menuOpen = false)}><span>03.</span> stack</a>
		<a href="#contact" onclick={() => (menuOpen = false)}><span>04.</span> contact</a>
	</nav>
	<div class="status"><i></i> available</div>
</header>

<main id="top">
	<section class="hero" id="about">
		<div class="hero-copy">
			<p class="eyebrow"><span>&gt;</span> hello_world.ts</p>
			<h1>Paramas<br /><span>Waewsuwan.</span></h1>
			<p class="role"><span>const</span> role = <strong>"Senior Full Stack Developer"</strong>;</p>
			<p class="intro">I build scalable web ecosystems, real-time platforms, and enterprise systems — and lead the teams that bring them to life.</p>
			<div class="hero-actions">
				<a class="primary-button" href="#experience">Explore my work <span>↘</span></a>
				<a class="text-link" href="mailto:paramas.wae.th@gmail.com">paramas.wae.th@gmail.com</a>
			</div>
		</div>
		<div class="code-card" aria-label="Developer profile code snippet">
			<div class="window-bar"><div><i></i><i></i><i></i></div><span>profile.ts</span><b>×</b></div>
			<pre><span class="line-number">01</span> <span class="pink">interface</span> <span class="blue">Developer</span> &#123;
<span class="line-number">02</span>   name: <span class="green">"Paramas"</span>;
<span class="line-number">03</span>   experience: <span class="orange">10</span> + <span class="green">" years"</span>;
<span class="line-number">04</span>   focus: [
<span class="line-number">05</span>     <span class="green">"architecture"</span>,
<span class="line-number">06</span>     <span class="green">"leadership"</span>,
<span class="line-number">07</span>     <span class="green">"scalability"</span>
<span class="line-number">08</span>   ];
<span class="line-number">09</span>   coffee: <span class="pink">true</span>;
<span class="line-number">10</span> &#125;
<span class="line-number">11</span> <span class="cursor">▋</span></pre>
			<div class="terminal-status"><span>Ln 11, Col 1</span><span>UTF-8&nbsp;&nbsp; TypeScript</span></div>
		</div>
		<div class="scroll-hint"><span>SCROLL_TO_EXPLORE</span><i></i></div>
	</section>

	<section class="section expertise" aria-labelledby="expertise-title">
		<div class="section-heading"><p>// WHAT_I_DO</p><h2 id="expertise-title">Engineering beyond<br />the <em>interface.</em></h2></div>
		<div class="expertise-grid">
			<article><span>01</span><div class="icon">⌘</div><h3>Architecture</h3><p>Designing resilient full-stack systems, APIs, and data models built to evolve.</p></article>
			<article><span>02</span><div class="icon">⎇</div><h3>Technical Leadership</h3><p>Guiding engineering teams through clear decisions, mentorship, and pragmatic delivery.</p></article>
			<article><span>03</span><div class="icon">↯</div><h3>Real-time Systems</h3><p>Building WebSocket platforms, observability pipelines, and integrated enterprise services.</p></article>
		</div>
	</section>

	<section class="section experience" id="experience" aria-labelledby="experience-title">
		<div class="section-heading sticky-heading"><p>// WORK_LOG</p><h2 id="experience-title">A decade of<br /><em>shipping.</em></h2><div class="years"><strong>10+</strong><span>YEARS OF<br />EXPERIENCE</span></div></div>
		<div class="timeline">
			{#each experience as item, index}
				<article class:current={item.current}>
					<div class="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
					<div class="job-top"><div><h3>{item.role}</h3><p>@ {item.company}</p></div><time>{item.period}</time></div>
					<ul>{#each item.points as point}<li>{point}</li>{/each}</ul>
					<div class="tags">{#each item.stack as tech}<span>{tech}</span>{/each}</div>
				</article>
			{/each}
		</div>
	</section>

	<section class="section skills" id="skills" aria-labelledby="skills-title">
		<div class="section-heading"><p>// TECH_STACK</p><h2 id="skills-title">Tools of the <em>trade.</em></h2></div>
		<div class="skill-terminal">
			<div class="terminal-title"><span><i></i><i></i><i></i></span><b>paramas@dev: ~/skills</b></div>
			{#each skills as group}<div class="skill-row"><code><span>$</span> list --{group.label.toLowerCase().replace(' & ', '-')}</code><div>{#each group.values as skill}<span>{skill}</span>{/each}</div></div>{/each}
			<p class="terminal-prompt"><span>$</span> <i></i></p>
		</div>
	</section>

	<section class="section education" aria-labelledby="education-title">
		<p class="section-label">// EDUCATION</p>
		<div><span class="edu-year">2016</span><h2 id="education-title">Bachelor of<br /><em>Information Technology</em></h2><p>Prince of Songkla University<br /><span>Phuket Campus · GPA 2.97</span></p></div>
	</section>

	<section class="contact" id="contact">
		<p>// INITIALIZE_CONNECTION</p><h2>Let’s build something<br /><em>that works.</em></h2>
		<a href="mailto:paramas.wae.th@gmail.com">Start a conversation <span>→</span></a>
		<div class="contact-links"><a href="mailto:paramas.wae.th@gmail.com">EMAIL ↗</a><a href="https://www.linkedin.com/in/paramas-waewsuwan-398328223" target="_blank" rel="noreferrer">LINKEDIN ↗</a></div>
	</section>
</main>

<footer><span>© {new Date().getFullYear()} PARAMAS WAEWSUWAN</span><span>BUILT WITH SVELTE <i>●</i></span></footer>
