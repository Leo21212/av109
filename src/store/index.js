import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        knights: [
            {
                nome: 'Mu de Áries',
                armadura: 'Armadura de Áries',
                imgsrc: 'https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2020/10/legiao_u7jh9VfFL4Kp.jpg.jpeg',
            },
            {
                nome: 'Aldebaran de Touro',
                armadura: 'Armadura de Touro',
                imgsrc: 'https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2020/10/legiao_tF1L0g7VEzKQ.jpg.jpeg',
            },
            {
                nome: 'Saga de Gêmeos',
                armadura: 'Armadura de Gêmeos',
                imgsrc: 'https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2020/10/legiao_GgJ_9H8CQnMp.jpg.jpeg',
            },
            {
                nome: 'Máscara da Morte de Câncer',
                armadura: 'Armadura de Câncer',
                imgsrc: 'https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2020/10/legiao_RzduTbLWUZ0M.jpg.jpeg',
            },
            {
                nome: 'Aiolia de Leão',
                armadura: 'Armadura de Leão',
                imgsrc: 'https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2020/10/legiao_cKAwlhitJdFn.jpg.jpeg',
            },
            {
                nome: 'Shaka de Virgem',
                armadura: 'Armadura de Virgem',
                imgsrc: 'https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2020/10/legiao_EBouJHt5f_7h.jpg.jpeg',
            },
            {
                nome: 'Dohko de Libra',
                armadura: 'Armadura de Libra',
                imgsrc: 'https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2020/10/legiao_xCMTwcLGhWZ1.jpg.jpeg',
            },
            {
                nome: 'Milo de Escorpião',
                armadura: 'Armadura de Escorpião',
                imgsrc: 'https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2020/10/legiao_exh0zYtfUruT.jpg.jpeg',
            },
            {
                nome: 'Aiolos de Sagitário',
                armadura: 'Armadura de Sagitário',
                imgsrc: 'https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2020/10/legiao_9rb0G3WmBTC6.jpg.jpeg',
            },
            {
                nome: 'Shura de Capricórnio',
                armadura: 'Armadura de Capricórnio',
                imgsrc: 'https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2020/10/legiao_9S4fRsEOP21o.jpg.jpeg',
            },
            {
                nome: 'Camus de Aquário',
                armadura: 'Armadura de Aquário',
                imgsrc: 'https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2020/10/legiao_dcubnmOqiW3F.jpg.jpeg',
            },
            {
                nome: 'Afrodite de Peixes',
                armadura: 'Armadura de Peixes',
                imgsrc: 'https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2020/10/legiao_uNroeZxEsFwB.jpg.jpeg',
            },
        ],
        series: [
            {
                nome: 'Lost Canvas',
                timebox: 'Século 15, em 1496, a 18, em 1743',
                logo: 'https://www.cavzodiaco.com.br/images/logo-lc.png',
            },
            {
                nome: 'Next Dimension',
                timebox: 'Século 18, em 1743',
                logo: 'https://www.cavzodiaco.com.br/images/logo-nd.png',
            },
            {
                nome: 'Episódio G',
                timebox: 'Século 20, em 1973 aproxidamente',
                logo: 'https://www.cavzodiaco.com.br/images/logo-g.png',
            },
            {
                nome: 'Série Clássica',
                timebox: 'Século 20, 1986 a 1990',
                logo: 'https://www.cavzodiaco.com.br/images14/logobr.png',
            }
        ],
        world: [
            {
                nome: 'Parede de Gelo Eterno',
                local: 'Rússia',
                img: 'http://pm1.narvii.com/7068/9a1dbbd264d82a01ecb88fb87e7739eb579dd142r1-640-480v2_uhq.jpg',
            },
            {
                nome: 'Os Cinco Picos Antigos de Rozan',
                local: 'China',
                img: 'https://2img.net/h/snk-seiya.net/guiasaintseiya/CincoPicos%20(105).jpg',
            },
            {
                nome: 'Orfanato Os Filhos das Estrelas',
                local: 'Japão',
                img: 'https://i.pinimg.com/originals/fd/ab/35/fdab352701fb78d15edc1bc4d240ea51.jpg',
            },
            {
                nome: 'Santuário de Atena',
                local: 'Grécia',
                img: 'https://i.pinimg.com/474x/22/9f/ec/229fec27c79042ce652c7ba695610145.jpg',
            },
        ],
        cavaleiro: [
            {
                "id": "",
                "name": "",
                "age": "",
                "birthDay": "",
                "birthMonth": "",
                "actualDate": "",
                "gender": "Male",
                "nationality": "",
                "training": "",
                "height": "",
                "weight": "",
                "blood": "",
                "birth": "",
                "master": [

                ],
                "apprentice": [

                ],
                "attacks": [
                   
                ],
                "cloths": [
                    {
                        "id": "",
                        "name": "",
                        "cloth": "",
                        "group": "",
                        "rank": "",
                        "affiliation": {
                            "id": "",
                            "name": "",
                            "age": "",
                            "birthDay": "",
                            "birthMonth": "",
                            "actualDate": "",
                            "gender": "",
                            "nationality": "",
                            "training": "",
                            "place": "",
                            "height": "",
                            "weight": "",
                            "blood": ""
                        },
                        "image": "",
                        "artistSaint": "",
                        "artistCloth": "",
                        "debut": "",
                        "characterId": "",
                        "class": {
                            "id": "",
                            "group": "",
                            "class": "",
                            "classSingular": "",
                            "name": "",
                            "meaning": "",
                            "image": ""
                        },
                        "artists": [
                            {
                                "details": {
                                    "id": "",
                                    "name": "",
                                    "site": ""
                                },
                                "type": ""
                            }
                        ],
                        "attacks": [

                        ],
                        "midia": "Manga"
                    }
                ],
                "image": "",
                "family": [
                    {
                        "id": "",
                        "member": ""
                    }
                ]
            },
        ]
    },
    mutations: {
        SET_CAVALEIROS: (state, payload) => (state.cavaleiro = payload),
    },
    actions: {
        fetchCavaleiros({ commit }) {
            axios.get(`https://saint-seiya-api.herokuapp.com/api/characters`)
                .then(res => {
                    const payload = (res.data);
                    console.log('bora');
                    console.log(payload);
                    commit('SET_CAVALEIROS', payload)
                })
                .catch((e) => console.log(e))
        },
    },
    modules: {},
    getters: {
        searchResult: (state) => state.cavaleiro,
    }
}
)