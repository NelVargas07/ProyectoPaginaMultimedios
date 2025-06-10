 // Contenido JSON embebido en el JavaScript
        const educacionContent = {
            "intro": {
                "title": "Refuerza y Educa: Un Futuro Mejor a Través de la Educación",
                "description": "En la Fundación Santa Teresa, creemos firmemente que la educación es la base para construir una sociedad más justa, equitativa y próspera, por eso, hemos creado Refuerza y Educa, un proyecto que busca brindar oportunidades educativas a niños y jóvenes en zonas rurales (y no solo) de nuestro país que carecen de acceso a recursos académicos de calidad."
            },
            "about": {
                "title": "¿De qué se trata Refuerza y Educa?",
                "descriptions": [
                    "Refuerza y Educa es un programa integral de apoyo educativo, cuyo objetivo principal es proporcionar refuerzos académicos en materias clave como matemáticas, ciencias y lectura a estudiantes de primaria y secundaria. Actualmente, trabajamos en estrecha colaboración con el TCU (Trabajo Comunal Universitario) de la Universidad de Costa Rica (UCR), quienes, a través de voluntarios especializados, imparten clases de refuerzo de manera gratuita a niños y jóvenes en varias comunidades de nuestro cantón.",
                    "El proyecto busca mejorar el rendimiento académico de los estudiantes, evitar el rezago escolar y proporcionarles herramientas que les permitan desarrollar su potencial al máximo, asegurando así que todos tengan la oportunidad de acceder a una educación de calidad."
                ]
            },
            "digital": {
                "title": "La evolución hacia lo digital",
                "description": "Para amplificar nuestro impacto, Refuerza y Educa está en proceso de evolucionar hacia una plataforma digital que será accesible para estudiantes de todo el país, la cual no solo permitirá que más alumnos reciban apoyo gratuito en diversas materias, sino que también ofrecerá una versión premium donde profesionales y expertos educativos podrán impartir clases y mentorías personalizadas, de esta manera, Refuerza y Educa no solo será una herramienta de refuerzo, sino también un espacio de aprendizaje continuo y especializado."
            },
            "impact": {
                "title": "Nuestro impacto",
                "description": "Hasta la fecha, Refuerza y Educa ha transformado la vida de numerosos estudiantes en nuestra comunidad rural, ayudando a mejorar sus calificaciones, su confianza y su amor por el aprendizaje. Ahora, con la implementación de nuestra plataforma digital, planeamos escalar este impacto a nivel nacional y, en el futuro, expandirlo a toda Costa Rica."
            },
            "support": {
                "title": "Tu apoyo es clave",
                "description": "Este proyecto solo es posible gracias al apoyo de personas y organizaciones que comparten nuestra visión, con tu ayuda, podremos continuar brindando oportunidades a quienes más lo necesitan y contribuir al desarrollo de una sociedad más preparada y equitativa."
            }
        };

        // Función para cargar el contenido de educación
        function loadEducacionContent() {
            // Cargar introducción
            document.getElementById('intro-title').textContent = educacionContent.intro.title;
            document.getElementById('intro-description').textContent = educacionContent.intro.description;

            // Cargar sección "¿De qué se trata?"
            document.getElementById('about-title').textContent = educacionContent.about.title;
            document.getElementById('about-description-1').textContent = educacionContent.about.descriptions[0];
            document.getElementById('about-description-2').textContent = educacionContent.about.descriptions[1];

            // Cargar evolución digital
            document.getElementById('digital-title').textContent = educacionContent.digital.title;
            document.getElementById('digital-description').textContent = educacionContent.digital.description;

            // Cargar impacto
            document.getElementById('impact-title').textContent = educacionContent.impact.title;
            document.getElementById('impact-description').textContent = educacionContent.impact.description;

            // Cargar apoyo
            document.getElementById('support-title').textContent = educacionContent.support.title;
            document.getElementById('support-description').textContent = educacionContent.support.description;
        }

        // Cargar contenido cuando la página esté lista
        document.addEventListener('DOMContentLoaded', loadEducacionContent);
