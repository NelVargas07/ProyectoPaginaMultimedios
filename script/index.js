 // Contenido JSON embebido en el JavaScript
        const contentData = {
            "carousel": {
                "slides": [
                    {
                        "title": "Título 1",
                        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis fugit et minima officia libero laborum."
                    },
                    {
                        "title": "Título 2", 
                        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis fugit et minima officia libero laborum."
                    },
                    {
                        "title": "Título 3",
                        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis fugit et minima officia libero laborum."
                    },
                    {
                        "title": "Título 4",
                        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis fugit et minima officia libero laborum."
                    },
                    {
                        "title": "Título 5",
                        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis fugit et minima officia libero laborum."
                    },
                    {
                        "title": "Título 6",
                        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis fugit et minima officia libero laborum."
                    }
                ],
                "navigation": {
                    "previous": "Anterior",
                    "next": "Siguiente"
                }
            },
            "welcome": {
                "title": "Bienvenidos a la Fundación Santa Teresa Aldife",
                "description": "En la Fundación Santa Teresa Aldife, nuestra misión es transformar vidas y fortalecer comunidades a través de la educación, el deporte y el apoyo al comercio local. Somos una organización sin fines de lucro comprometida con el bienestar y el desarrollo integral de las personas en zonas rurales. Con una visión de crear un futuro más justo y equitativo, trabajamos incansablemente para ofrecer oportunidades que impacten positivamente en nuestra sociedad."
            },
            "mission": {
                "title": "Nuestra Misión",
                "description": "Nuestra misión es empoderar a individuos y comunidades mediante programas innovadores y de alto impacto en educación, deporte y comercio. A través de proyectos sostenibles, buscamos mejorar la calidad de vida y fomentar el desarrollo integral de las personas, creando un entorno propicio para el crecimiento personal y comunitario."
            },
            "vision": {
                "title": "Nuestra Visión",
                "description": "Nuestra visión es ser una organización líder en la promoción de la educación, el deporte y el desarrollo económico local, estableciendo modelos de intervención social que puedan ser replicados en otras comunidades. Aspiramos a un futuro donde todos los individuos, independientemente de su origen, tengan acceso a oportunidades que les permitan alcanzar su máximo potencial."
            },
            "pillars": {
                "title": "Nuestros Pilares",
                "items": [
                    {
                        "title": "Apoyo a la Educación: Proyecto \"Refuerza y Educa\"",
                        "description": "El proyecto \"Refuerza y Educa\" es una iniciativa educativa que ofrece clases de refuerzo gratuitas y virtuales a estudiantes de escuela primaria y secundaria, ahora en nuestra Comunidad y nuestra ambición es llegar a ofrecer este servicio a toda Costa Rica, con un enfoque especial en zonas rurales. En colaboración con la UCR y su TCU, brindamos apoyo académico a jóvenes que enfrentan barreras en su educación, ayudándolos a mejorar su rendimiento escolar y abrir nuevas oportunidades para su futuro."
                    },
                    {
                        "title": "Deportes: Proyecto \"Educando con el Deporte\"",
                        "description": "El deporte es una herramienta poderosa para el desarrollo personal y social. A través del proyecto \"Educando con el Deporte\", promovemos la actividad física y los valores del deporte entre niños y jóvenes. Organizamos torneos, talleres y actividades deportivas que no solo mejoran la salud física, sino que también enseñan disciplina, trabajo en equipo y perseverancia."
                    },
                    {
                        "title": "Apoyo a los Comercios: Proyecto \"Comercio Amigo\"",
                        "description": "El proyecto \"Comercio Amigo\" está diseñado para fortalecer el comercio local mediante la creación de alianzas estratégicas con empresas comprometidas con el bienestar comunitario. A través de esta iniciativa, incentivamos a los consumidores a apoyar a los comercios asociados, ofreciendo descuentos y promociones especiales. Parte de las ganancias se destinan a financiar nuestros proyectos educativos y deportivos, creando un ciclo de apoyo y desarrollo comunitario."
                    }
                ]
            }
        };

        // Función para cargar el contenido
        function loadContent() {
            // Cargar carousel
            contentData.carousel.slides.forEach((slide, index) => {
                const slideNumber = index + 1;
                document.getElementById(`carousel-title-${slideNumber}`).textContent = slide.title;
                document.getElementById(`carousel-description-${slideNumber}`).textContent = slide.description;
            });

            // Cargar navegación del carousel
            document.getElementById('carousel-prev-text').textContent = contentData.carousel.navigation.previous;
            document.getElementById('carousel-next-text').textContent = contentData.carousel.navigation.next;

            // Cargar bienvenida
            document.getElementById('welcome-title').textContent = contentData.welcome.title;
            document.getElementById('welcome-description').textContent = contentData.welcome.description;

            // Cargar misión
            document.getElementById('mission-title').textContent = contentData.mission.title;
            document.getElementById('mission-description').textContent = contentData.mission.description;

            // Cargar visión
            document.getElementById('vision-title').textContent = contentData.vision.title;
            document.getElementById('vision-description').textContent = contentData.vision.description;

            // Cargar pilares
            document.getElementById('pillars-title').textContent = contentData.pillars.title;
            document.getElementById('pillar-education-title').textContent = contentData.pillars.items[0].title;
            document.getElementById('pillar-education-description').textContent = contentData.pillars.items[0].description;
            document.getElementById('pillar-sports-title').textContent = contentData.pillars.items[1].title;
            document.getElementById('pillar-sports-description').textContent = contentData.pillars.items[1].description;
            document.getElementById('pillar-commerce-title').textContent = contentData.pillars.items[2].title;
            document.getElementById('pillar-commerce-description').textContent = contentData.pillars.items[2].description;
        }

        // Cargar contenido cuando la página esté lista
        document.addEventListener('DOMContentLoaded', loadContent);
