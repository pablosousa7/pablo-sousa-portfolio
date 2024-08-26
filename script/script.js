// Troca de idiomas
const ptBrButton = document.getElementById('pt-br');
const enUsButton = document.getElementById('en-us');

ptBrButton.addEventListener('click', () => {
  traduzirParaPortugues();
});

enUsButton.addEventListener('click', () => {
  traduzirParaIngles();
});

function traduzirParaPortugues() {
  // Header
  document.querySelector('title').textContent = 'Pablo Sousa | Portfólio';
  document.querySelector('meta[name="description"]').setAttribute('content', 'Portfólio de Pablo Sousa, Engenheiro de Software com mais de 7 anos de experiência em tecnologias Front-end, Back-end e segurança cibernética. Confira meus projetos e habilidades.');
  document.querySelector('meta[property="og:description"]').setAttribute('content', 'Portfólio de Pablo Sousa, um experiente Engenheiro de Software especializado em tecnologias Front-end e Back-end, segurança cibernética e muito mais. Veja meus projetos e habilidades.');
  document.querySelector('meta[property="og:title"]').setAttribute('content', 'Pablo Sousa | Portfólio');
  document.querySelector('header .nav-link[href="#banner"]').textContent = 'Início';
  document.querySelector('header .nav-link[href="#skills"]').textContent = 'Skills';
  document.querySelector('header .nav-link[href="#my-projects"]').textContent = 'Projetos';
  document.querySelector('header .nav-link[href="#contact"]').textContent = 'Contato';

  // Banner
  document.querySelector('#banner p').innerHTML = 'Olá visitante,<br><br> Sou <b class="fs-4">Pablo</b>, um Engenheiro de Software com mais de 7 anos de experiência em tecnologias Front-end, Back-end e integração contínua, apaixonado por unir desenvolvimento de software e práticas de segurança cibernética. Sempre buscando <b class="fs-4">aprendizado</b> e <b class="fs-4">crescimento</b>, meu sonho é prosperar na Europa ou nos EUA.<br/><br/><i>E, entre nós, nunca tirem o home office, por favor <span class="fs-4">—</span> ele é a nossa inspiração diária!</i>';
  document.querySelector('#banner .btn-hire').textContent = 'Contratar';

  // Skills
  document.querySelector('#skills h2').textContent = 'Minhas Habilidades';
  document.querySelector('#skills .subtitle').innerHTML = 'Minhas habilidades incluem um mix poderoso de tecnologias, desde <span>HTML5</span> e <span>CSS3</span> até <span>JavaScript</span><b>,</b> <span>TypeScript</span> e <span>PHP</span>. Sou fluente em frameworks como <span>Angular</span> e <span>Flutter</span><b>,</b> e manjo de <span>Java</span> <span>Spring Boot</span> e <span>Quarkus</span>. Também sou versado em <span>Docker</span><b>,</b> <span>Linux</span><b>,</b> <span>MySQL</span><b>,</b> <span>MariaDB</span><b>,</b> <span>CI/CD</span> e <span>OpenShift</span><b>,</b> com um toque de <span>segurança cibernética</span>. Em resumo, sou um desenvolvedor apaixonado que adora explorar novas tecnologias e encontrar soluções criativas.';
  document.querySelectorAll('.skill-title')[0].textContent = 'Front-end';
  document.querySelectorAll('.skill-title')[1].textContent = 'Back-end';
  document.querySelectorAll('.skill-title')[2].textContent = 'DevOps & Segurança';
  document.querySelectorAll('.skill-title')[3].textContent = 'Banco de Dados';

  // Projects
  document.querySelector('#my-projects h2').textContent = 'Meus Projetos';
  document.querySelector('#my-projects .subtitle').innerHTML = 'Explore minhas aventuras tecnológicas! 🚀 Desde criar aplicações que tornam o mundo mais digital até resolver problemas com soluções elegantes e criativas, meus projetos são verdadeiros campos de batalha para inovações.';

  // Phase
  document.querySelector('#phase h2').innerHTML = '<i class="fa-solid fa-quote-left opacity-25"></i> A única maneira de fazer um ótimo trabalho é amar o que você faz.<i class="fa-solid fa-quote-right opacity-25"></i>';
  document.querySelector('#phase p').textContent = '- Steve Jobs';

  // Contact
  document.querySelector('#contact h2').textContent = 'Contato';
  document.querySelector('#contact p').innerHTML = '<img src="./assets/email.png" alt="Email" width="30"> <a href="mailto:prsousa730@gmail.com" class="text-dark fs-5">prsousa730@gmail.com</a>';
  document.querySelector('#contact span').textContent = 'Faça já seu Orçamento de Graça';

  // Footer
  document.querySelector('footer p').innerHTML = 'Todos os direitos reservados - Copyright © 2024';

  // Opportunity
  document.querySelector('#opportunity').textContent = 'OPORTUNIDADE';

  
}

function traduzirParaIngles() {
  // Header
  document.querySelector('title').textContent = 'Pablo Sousa | Portfolio';
  document.querySelector('meta[name="description"]').setAttribute('content', 'Portfolio of Pablo Sousa, Software Engineer with over 7 years of experience in Front-end, Back-end, and cybersecurity technologies. Check out my projects and skills.');
  document.querySelector('meta[property="og:description"]').setAttribute('content', 'Portfolio of Pablo Sousa, an experienced Software Engineer specializing in Front-end and Back-end technologies, cybersecurity, and more. See my projects and skills.');
  document.querySelector('meta[property="og:title"]').setAttribute('content', 'Pablo Sousa | Portfolio');
  document.querySelector('header .nav-link[href="#banner"]').textContent = 'Home';
  document.querySelector('header .nav-link[href="#skills"]').textContent = 'Skills';
  document.querySelector('header .nav-link[href="#my-projects"]').textContent = 'Projects';
  document.querySelector('header .nav-link[href="#contact"]').textContent = 'Contact';

  // Banner
  document.querySelector('#banner p').innerHTML = 'Hello visitor,<br><br> I am <b class="fs-4">Pablo</b>, a Software Engineer with over 7 years of experience in Front-end, Back-end, and continuous integration technologies, passionate about combining software development and cybersecurity practices. Always seeking <b class="fs-4">learning</b> and <b class="fs-4">growth</b>, my dream is to thrive in Europe or the US.<br/><br/><i>And, between us, please never take away remote work <span class="fs-4">—</span> it’s our daily inspiration!</i>';
  document.querySelector('#banner .btn-hire').textContent = 'Hire Me';

  // Skills
  document.querySelector('#skills h2').textContent = 'My Skills';
  document.querySelector('#skills .subtitle').innerHTML = 'My skills include a powerful mix of technologies, from <span>HTML5</span> and <span>CSS3</span> to <span>JavaScript</span><b>,</b> <span>TypeScript</span> and <span>PHP</span>. I’m fluent in frameworks like <span>Angular</span> and <span>Flutter</span><b>,</b> and proficient in <span>Java</span> <span>Spring Boot</span> and <span>Quarkus</span>. I’m also well-versed in <span>Docker</span><b>,</b> <span>Linux</span><b>,</b> <span>MySQL</span><b>,</b> <span>MariaDB</span><b>,</b> <span>CI/CD</span> and <span>OpenShift</span><b>,</b> with a touch of <span>cybersecurity</span>. In short, I’m a passionate developer who loves exploring new technologies and finding creative solutions.';
  document.querySelectorAll('.skill-title')[0].textContent = 'Front-end';
  document.querySelectorAll('.skill-title')[1].textContent = 'Back-end';
  document.querySelectorAll('.skill-title')[2].textContent = 'DevOps & Security';
  document.querySelectorAll('.skill-title')[3].textContent = 'Database';

  // Projects
  document.querySelector('#my-projects h2').textContent = 'My Projects';
  document.querySelector('#my-projects .subtitle').innerHTML = 'Explore my technological adventures! 🚀 From creating applications that make the world more digital to solving problems with elegant and creative solutions, my projects are true battlegrounds for innovations.';

  // Phase
  document.querySelector('#phase h2').innerHTML = '<i class="fa-solid fa-quote-left opacity-25"></i> The only way to do great work is to love what you do.<i class="fa-solid fa-quote-right opacity-25"></i>';
  document.querySelector('#phase p').textContent = '- Steve Jobs';

  // Contact
  document.querySelector('#contact h2').textContent = 'Contact';
  document.querySelector('#contact p').innerHTML = '<img src="./assets/email.png" alt="Email" width="30"> <a href="mailto:prsousa730@gmail.com" class="text-dark fs-5">prsousa730@gmail.com</a>';
  document.querySelector('#contact span').textContent = 'Get your free quote now';

  // Footer
  document.querySelector('footer p').innerHTML = 'All rights reserved - Copyright © 2024';

  // Opportunity
  document.querySelector('#opportunity').textContent = 'OPPORTUNITY';
}


