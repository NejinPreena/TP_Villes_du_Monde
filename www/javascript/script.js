class WorldCities extends AbstractApp {
    constructor(containerDiv) {
        super(containerDiv);

    }


    init(dataSource) {
        // Codez cette méthode pour traiter le fichier chargé et initialiser la classe.
        super.init(dataSource);

        {
    "towns":[
        {
            "name": "Pointe-Ã -Pitre",
            "link": "https://fr.wikipedia.org/wiki/Pointe-Ã -Pitre",
            "country": "France",
            "region": "Guadeloupe",
            "state": "",
            "major": "Harry Durimel",
            "inhabitants": 15181,
            "images": [
                {
                    "url": "1920px-Pointe-aÌ€-Pitre.jpeg",
                    "caption": "Vu de Pointe-Ã -Pitre depuis le large."
                },
                {
                    "url": "1440px-Place_de_la_Victoire_de_Pointe-Ã -Pitre_2.jpeg",
                    "caption": "La place de la victoire."
                }
            ],
            "description": "<p><b>Pointe-Ã -Pitre</b> est une commune franÃ§aise situÃ©e dans le dÃ©partement de la Guadeloupe. HabitÃ©e en 2014 par 16 261 personnes, la commune est, avec celle voisine des Abymes, au centre d'une vaste aire urbaine de 314 647 habitants, soit la <abbr class=\"abbr\">32<sup>e</sup></abbr> de France.</p>"
        },
        {
            "name": "Berlin",
            "link": "https://fr.wikipedia.org/wiki/Berlin",
            "country": "Allemagne",
            "region": "Land Berlin",
            "state": "",
            "major": "Franziska Giffey",
            "inhabitants": 3748148,
            "images": [
                {
                    "url": "1920px-Nr_2_Berlin_Panorama_von_der_SiegessaÌˆule_2021.jpg",
                    "caption": "Vue aÃ©rienne de Berlin."
                },
                {
                    "url": "1620px-Berlin_-_Aerial_view_-_2016.jpg",
                    "caption": "Vue aÃ©rienne."
                },
                {
                    "url": "1669px-Schlachtensee_in_Berlin2019.jpg",
                    "caption": "Schlachtensee."
                }
            ],
            "description": "<p><b>Berlin</b> est la capitale et la plus grande ville d'Allemagne. Institutionnellement, câ€™est une ville-Ã‰tat nommÃ©e <i>Land de Berlin</i>.</p>"
        },
        {
            "name": "Mexico",
            "link": "https://fr.wikipedia.org/wiki/Mexico",
            "country": "Mexique",
            "region": "Mexico",
            "state": "",
            "major": "Claudia Sheinbaum",
            "inhabitants": 9209944,
            "images": [
                {
                    "url": "1080px-Montaje.Ciudad_de_MeÌ�xico.jpg",
                    "caption": "De haut en bas: Ã�ngel de la Independencia, CathÃ©drale mÃ©tropolitaine de Mexico, Paseo de la Reforma, Torre Latinoamericana, Palais national, Parque La Mexicana Ã  Santa Fe, Monument Ã  la RÃ©volution, ChÃ¢teau de Chapultepec, Palais des beaux-arts de Mexico et Paseo de la Reforma."
                }
            ],
            "description": "<p><b>Mexico</b> est une entitÃ© fÃ©dÃ©rative et la capitale du Mexique.</p>"
        },
        {
            "name": "New York City",
            "link": "https://fr.wikipedia.org/wiki/New_York",
            "country": "USA",
            "region": "",
            "state": "New York",
            "major": "Eric Adams",
            "inhabitants": 8804190,
            "images": [
                {
                    "url": "1920px-Lower_Manhattan_skyline_-_June_2017.jpg",
                    "caption": "Lower Manhattan skyline as seen from Governors Island in June 2017"
                },
                {
                    "url": "821px-NYC_Montage_2014_4_-_Jleon.jpg",
                    "caption": "Montage de New York City"
                }
            ],
            "description": "<p><b>New York</b> most commonly refers to:</p><ul><li>New York City, the most populous city in the United States, located in the state of New York</li>\n<li>New York (state), a state in the northeastern United States</li></ul>"
        },
        {
            "name": "Paris",
            "link": "https://fr.wikipedia.org/wiki/Paris",
            "country": "France",
            "region": "Ile-de-France",
            "state": "",
            "major": "Anne Hidalgo",
            "inhabitants": 2165423,
            "images": [
                {
                    "url": "La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques,_Paris_aouÌ‚t_2014_(2).jpeg",
                    "caption": "Vue de la Tour Eiffel."
                },
                {
                    "url": "1920px-Pont_des_Arts,_Paris.jpg",
                    "caption": "Le pont des Arts de Paris."
                },
                {
                    "url": "1620px-Arcdetriomphe_2.jpg",
                    "caption": "L'Arc de Triomphe."
                }
            ],
            "description": "<p><b>Paris</b> est la capitale de la France. DivisÃ©e en vingt arrondissements, elle est le chef-lieu de la rÃ©gion ÃŽle-de-France et le siÃ¨ge de la mÃ©tropole du Grand Paris.</p>"
        } 
    ]
}
    }
}

const SearchInputEventNames = {
    SEARCH_INPUT: "search_input",
    CLEAR_SEARCH_INPUT: "clear_search_input"
}

class SearchInputEvent extends CustomEvent {
    constructor(type, options) {
        super(type, options);
    }
}

class SearchInput extends AbstractUIComponent {
    constructor(UIView) {
        super(UIView);

        // Codez ici les propriétés définies dans le diagramme de classes.
        this.init();
    }

    get value() {
        return super.value;
    }

    searchInputHandler() {
        // Codez cette méthode. Adaptation en classe du TP Citation.
    }

    clearSearchHandler() {
        // Codez cette méthode. Adaptation en classe du TP Citation.
    }

    checkClearButton() {
        // Codez cette méthode. Adaptation en classe du TP Citation.
    }

    init() {
        // Appelez ici les méthodes d'initialisation du composant décrites dans le diagrammes de classe.
        super.init();
    }
}

const indexerMode = {
    NONE: 1,
    LOOP: 2
}

const indexerDirection = {
    NEXT: "next",
    PREVIOUS: "previous"
}

const IndexerEventNames = {
    INDEX_CHANGED: "index_changed"
}

class IndexerEvent extends CustomEvent {
    constructor(type, options) {
        super(type, options);
    }
}

class Indexer extends AbstractUIComponent {
    constructor(UIView, total, mode = indexerMode.NONE) {
        super(UIView);
        this.total = total;
        this.mode = mode;

        // Codez ici les propriétés définies dans le diagramme de classes.
        this.init();
    }

    set mode(value) {
        this.indexerMode = value;
    }

    set totalItems(value) {
        this.total = value;
        this.setNumbers();
    }

    get value() {
        return super.value;
    }

    set value(value) {
        this.index = value;
        this.checkIndex();
        super.value = value;
    }

    init() {
        // Appelez ici les méthodes d'initialisation du composant décrites dans le diagrammes de classe.
        initButtons()
        super.init();
    }

    // Adaptation en méthode de la fonction du TP Citations. Déjà codée pour vous. :)
    changeIndex(direction) {
        direction == indexerDirection.NEXT ? this.index++ : this.index--;
        this.checkIndex();
    }

    checkIndex() {
        // Codez cette méthode. Adaptation en classe du TP Citation.
        if(index == 0){
            disableButton(NEXT, false);
            disableButton(PREVIOUS);
        }else if(index == ){

        }
    }

    setNumbers() {
        // Codez cette méthode. Adaptation en classe du TP Citation.
    }

    // Adaptation en méthode de la fonction du TP Citations. Déjà codée pour vous. :)
    getZeroFormat(num, limit) {
        const sNum = num.toString();
        const sLimit = limit.toString();
        const numZero = sLimit.length - sNum.length;
        let start = 0;
        let zero = "";
        while (start < numZero) {
            zero += "0";
            start++;
        }
        const format = zero + sNum;
        return format
    }

    initButtons() {
        // Codez cette méthode. Adaptation en classe du TP Citation.
    }

}

class IndexerButton extends AbstractButton {
    constructor(buttonDiv) {
        super(buttonDiv);
    }

    disable(bool = true) {
        // Codez cette méthode pour changer la couleur des boutons via la classe CSS. Adaptation en classe du TP Citation.
        super.disable(bool);
    }
}

const IndexerDirection = {
    NEXT: 1,
    PREVIOUS: 2
}

// Classe à utiliser pour stocker chaque ville des données chargées du fichier externe datas.json.
class City {
    constructor(dataSource) {
        this.country = dataSource.country;
        this.description = dataSource.description;
        this.images = dataSource.images;
        this.inhabitants = dataSource.inhabitants;
        this.major = dataSource.major;
        this.name = dataSource.name;
        this.region = dataSource.region;
        this.state = dataSource.state;
        this.link = dataSource.link;
    }

    
}

// Fonction de chargement du fichier externe datas.json. A NE PAS TOUCHER.
async function loadDatas() {
    const response = await fetch("data/datas.json")
        .then(response => response.json())
        .then(json => worldCities.init(json)
        );
}

function appInitHandler(evt) {
    console.log("worldCities.dataSource", worldCities.dataSource);
    checkIndex();
}

/**
 * Fonction de vérification de l'URL pour voir si un index est passé en param afin d'afficher directement une ville.
 * A coder par vos soins sur le modèle du mode debug déjà vu ensemble plusieurs fois.
 * Vérifier si le param index est bien un entier et si oui il doit être supérieur à 0.
 * Si l'index n'est pas un entier, mettre une alerte avec "Paramètre incorrect !\nVeuillez vérifier l'index saisi."
 * Si l'index est un entier mais plus petit que 0, mettre une alerte avec "Paramètre incorrect !\nL'index saisi ne peut être plus petit que 0."
 */
function checkIndex() {
    // Codez cette fonction.
}

// App déjà instanciée pour vous. Ne rien toucher.
const worldCities = new WorldCities(document);
worldCities.addEventListener(AbstractAppEventNames.INIT, appInitHandler);

// Tout est instancié, on charge les données. NE RIEN TOUCHER.
loadDatas();