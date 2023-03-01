const constant = {}
const SportTypeList = [
    {
        sportTypeId: 1,
        name: 'Football',
        icon: 'football.png',
        m_icon: '@/assets/images/micons/football.svg',
    },
    {
        sportTypeId: 2,
        name: 'Basketball',
        icon: 'basketball.png',
        m_icon: '@/assets/images/micons/basketball.svg',
    },
    {
        sportTypeId: 3,
        name: 'Baseball',
        icon: 'baseball.png',
        m_icon: '@/assets/images/micons/baseball.svg',
    },
    {
        sportTypeId: 4,
        name: 'IceHockey',
        icon: 'icehockey.png',
        m_icon: '@/assets/images/micons/icehockey.svg',
    },
    {
        sportTypeId: 5,
        name: 'Tennis',
        icon: 'tennis.png',
        m_icon: '@/assets/images/micons/tennis.svg',
    },
    {
        sportTypeId: 6,
        name: 'Handball',
        icon: 'handball.png',
        m_icon: '@/assets/images/micons/handball.svg',
    },
    {
        sportTypeId: 7,
        name: 'xxx'
    },
    {
        sportTypeId: 8,
        name: 'xxx'
    },
    {
        sportTypeId: 9,
        name: 'xxx'
    },
    {
        sportTypeId: 10,
        name: 'Boxing',
        icon: 'boxing.png',
        m_icon: '@/assets/images/micons/boxing.svg',
    },
    {
        sportTypeId: 11,
        name: 'xxx'
    },
    {
        sportTypeId: 12,
        name: 'Rugby',
        icon: 'rugby.png',
        m_icon: '@/assets/images/micons/rugby.svg',
    },
    {
        sportTypeId: 13,
        name: 'xxx'
    },
    {
        sportTypeId: 14,
        name: 'xxx'
    },
    {
        sportTypeId: 15,
        name: 'xxx'
    },
    {
        sportTypeId: 16,
        name: 'American Football',
        icon: 'american_football.png',
        m_icon: '@/assets/images/micons/american_football.svg',
    },
    {
        sportTypeId: 17,
        name: 'xxx'
    },
    {
        sportTypeId: 18,
        name: 'xxx'
    },
    {
        sportTypeId: 19,
        name: 'Snooker',
        icon: 'snooker.png',
        m_icon: '@/assets/images/micons/snooker.svg',
    },
    {
        sportTypeId: 20,
        name: 'xxx'
    },
    {
        sportTypeId: 21,
        name: 'xxx'
    },
    {
        sportTypeId: 22,
        name: 'Darts',
        icon: 'darts.png',
        m_icon: '@/assets/images/micons/darts.svg',
    },
    {
        sportTypeId: 23,
        name: 'Volleyball',
        icon: 'volleyball.png',
        m_icon: '@/assets/images/micons/volleyball.svg',
    },
    {
        sportTypeId: 24,
        name: 'xxx',
    },
    {
        sportTypeId: 25,
        name: 'xxx'
    },
    {
        sportTypeId: 26,
        name: 'xxx'
    },
    {
        sportTypeId: 27,
        name: 'xxx'
    },
    {
        sportTypeId: 28,
        name: 'xxx'
    },
    {
        sportTypeId: 29,
        name: 'Futsal',
        icon: 'futsal.png',
        m_icon: '@/assets/images/micons/futsal.svg',
    },
]
const demoMatches = [
    {
        "id": "1",
        "leagueList": [
            {
                "betradarCategoryId": 4,
                "betradarSportId": 1,
                "tournamentId": 9997,
                "name": "International",
                "leagueList": [
                    {
                        "betradarCategoryId": 4,
                        "betradarSportId": 1,
                        "tournamentId": 9996,
                        "name": "Gulf Cup",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 4,
                        "betradarSportId": 1,
                        "tournamentId": 9891,
                        "name": "Southeast Asian Games",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 4,
                        "betradarSportId": 1,
                        "tournamentId": 9997,
                        "name": "UAFA Golfpokal Gruppe B",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 1000,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 393,
                "betradarSportId": 1,
                "tournamentId": 23,
                "name": "Internationale Klubturniere",
                "leagueList": [
                    {
                        "betradarCategoryId": 393,
                        "betradarSportId": 1,
                        "tournamentId": 23,
                        "name": "UEFA Champions League",
                        "leagueList": null,
                        "leagueOrder": 2001,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 393,
                        "betradarSportId": 1,
                        "tournamentId": 10909,
                        "name": "UEFA Europa League",
                        "leagueList": null,
                        "leagueOrder": 2011,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 2000,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 1,
                "betradarSportId": 1,
                "tournamentId": 16,
                "name": "England",
                "leagueList": [
                    {
                        "betradarCategoryId": 1,
                        "betradarSportId": 1,
                        "tournamentId": 1,
                        "name": "Premier League",
                        "leagueList": null,
                        "leagueOrder": 3001,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 1,
                        "betradarSportId": 1,
                        "tournamentId": 3,
                        "name": "League One",
                        "leagueList": null,
                        "leagueOrder": 3004,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 1,
                        "betradarSportId": 1,
                        "tournamentId": 84,
                        "name": "League Two",
                        "leagueList": null,
                        "leagueOrder": 3007,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 1,
                        "betradarSportId": 1,
                        "tournamentId": 16,
                        "name": "FA Cup",
                        "leagueList": null,
                        "leagueOrder": 3009,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 1,
                        "betradarSportId": 1,
                        "tournamentId": 17,
                        "name": "EFL Cup",
                        "leagueList": null,
                        "leagueOrder": 3012,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 3000,
                "allVisible": true,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 32,
                "betradarSportId": 1,
                "tournamentId": 37,
                "name": "Spanien",
                "leagueList": [
                    {
                        "betradarCategoryId": 32,
                        "betradarSportId": 1,
                        "tournamentId": 2305,
                        "name": "Supercup",
                        "leagueList": null,
                        "leagueOrder": 4029,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 32,
                        "betradarSportId": 1,
                        "tournamentId": 36,
                        "name": "LaLiga",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 32,
                        "betradarSportId": 1,
                        "tournamentId": 37,
                        "name": "LaLiga 2",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 4000,
                "allVisible": true,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 30,
                "betradarSportId": 1,
                "tournamentId": 41,
                "name": "Deutschland",
                "leagueList": [
                    {
                        "betradarCategoryId": 30,
                        "betradarSportId": 1,
                        "tournamentId": 42,
                        "name": "Bundesliga",
                        "leagueList": null,
                        "leagueOrder": 5001,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 30,
                        "betradarSportId": 1,
                        "tournamentId": 41,
                        "name": "2. Bundesliga",
                        "leagueList": null,
                        "leagueOrder": 5003,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 30,
                        "betradarSportId": 1,
                        "tournamentId": -1,
                        "name": "DFB-Pokal",
                        "leagueList": null,
                        "leagueOrder": 5005,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 30,
                        "betradarSportId": 1,
                        "tournamentId": 8343,
                        "name": "3. Liga",
                        "leagueList": null,
                        "leagueOrder": 5006,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 5000,
                "allVisible": true,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 31,
                "betradarSportId": 1,
                "tournamentId": 35,
                "name": "Italien",
                "leagueList": [
                    {
                        "betradarCategoryId": 31,
                        "betradarSportId": 1,
                        "tournamentId": 33,
                        "name": "Serie A",
                        "leagueList": null,
                        "leagueOrder": 6001,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 31,
                        "betradarSportId": 1,
                        "tournamentId": 35,
                        "name": "Coppa Italia",
                        "leagueList": null,
                        "leagueOrder": 6024,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 31,
                        "betradarSportId": 1,
                        "tournamentId": 37884,
                        "name": "Serie C Girone A",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 31,
                        "betradarSportId": 1,
                        "tournamentId": 37885,
                        "name": "Serie C Girone B",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 31,
                        "betradarSportId": 1,
                        "tournamentId": 37886,
                        "name": "Serie C Girone C",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 6000,
                "allVisible": true,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 7,
                "betradarSportId": 1,
                "tournamentId": 77,
                "name": "Frankreich",
                "leagueList": [
                    {
                        "betradarCategoryId": 7,
                        "betradarSportId": 1,
                        "tournamentId": 4,
                        "name": "Ligue 1",
                        "leagueList": null,
                        "leagueOrder": 7001,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 7,
                        "betradarSportId": 1,
                        "tournamentId": 19,
                        "name": "Ligue 2",
                        "leagueList": null,
                        "leagueOrder": 7003,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 7,
                        "betradarSportId": 1,
                        "tournamentId": 950,
                        "name": "National",
                        "leagueList": null,
                        "leagueOrder": 7005,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 7,
                        "betradarSportId": 1,
                        "tournamentId": 77,
                        "name": "Coupe de France",
                        "leagueList": null,
                        "leagueOrder": 7008,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 7000,
                "allVisible": true,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 46,
                "betradarSportId": 1,
                "tournamentId": 62,
                "name": "Türkei",
                "leagueList": [
                    {
                        "betradarCategoryId": 46,
                        "betradarSportId": 1,
                        "tournamentId": 62,
                        "name": "Süper Lig",
                        "leagueList": null,
                        "leagueOrder": 8001,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 8000,
                "allVisible": true,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 35,
                "betradarSportId": 1,
                "tournamentId": 39,
                "name": "Niederlande",
                "leagueList": [
                    {
                        "betradarCategoryId": 35,
                        "betradarSportId": 1,
                        "tournamentId": 39,
                        "name": "Eredivisie",
                        "leagueList": null,
                        "leagueOrder": 9001,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 35,
                        "betradarSportId": 1,
                        "tournamentId": 40,
                        "name": "Eerste Divisie",
                        "leagueList": null,
                        "leagueOrder": 9004,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 35,
                        "betradarSportId": 1,
                        "tournamentId": 121,
                        "name": "KNVB Beker",
                        "leagueList": null,
                        "leagueOrder": 9006,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 9000,
                "allVisible": true,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 44,
                "betradarSportId": 1,
                "tournamentId": 52,
                "name": "Portugal",
                "leagueList": [
                    {
                        "betradarCategoryId": 44,
                        "betradarSportId": 1,
                        "tournamentId": 52,
                        "name": "Primeira Liga",
                        "leagueList": null,
                        "leagueOrder": 11001,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 44,
                        "betradarSportId": 1,
                        "tournamentId": 280,
                        "name": "Segunda Liga",
                        "leagueList": null,
                        "leagueOrder": 11002,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 44,
                        "betradarSportId": 1,
                        "tournamentId": 207,
                        "name": "Taca de Portugal",
                        "leagueList": null,
                        "leagueOrder": 11021,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 44,
                        "betradarSportId": 1,
                        "tournamentId": 105328,
                        "name": "Liga 3",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 11000,
                "allVisible": true,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 33,
                "betradarSportId": 1,
                "tournamentId": 38,
                "name": "Belgien",
                "leagueList": [
                    {
                        "betradarCategoryId": 33,
                        "betradarSportId": 1,
                        "tournamentId": 206,
                        "name": "Beker van Belgie",
                        "leagueList": null,
                        "leagueOrder": 12010,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 33,
                        "betradarSportId": 1,
                        "tournamentId": 38,
                        "name": "Pro League",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 12000,
                "allVisible": true,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 305,
                "betradarSportId": 1,
                "tournamentId": 38612,
                "name": "Ägypten",
                "leagueList": [
                    {
                        "betradarCategoryId": 305,
                        "betradarSportId": 1,
                        "tournamentId": 38612,
                        "name": "Premier League",
                        "leagueList": null,
                        "leagueOrder": 999001,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999000,
                "allVisible": true,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 34,
                "betradarSportId": 1,
                "tournamentId": 144,
                "name": "Australien",
                "leagueList": [
                    {
                        "betradarCategoryId": 34,
                        "betradarSportId": 1,
                        "tournamentId": 144,
                        "name": "A-League",
                        "leagueList": null,
                        "leagueOrder": 999001,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 34,
                        "betradarSportId": 1,
                        "tournamentId": 14193,
                        "name": "W-League (F)",
                        "leagueList": null,
                        "leagueOrder": 999040,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999000,
                "allVisible": true,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 67,
                "betradarSportId": 1,
                "tournamentId": 127,
                "name": "Griechenland",
                "leagueList": [
                    {
                        "betradarCategoryId": 67,
                        "betradarSportId": 1,
                        "tournamentId": 127,
                        "name": "Super League",
                        "leagueList": null,
                        "leagueOrder": 999001,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 67,
                        "betradarSportId": 1,
                        "tournamentId": 108076,
                        "name": "Super League 2",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999000,
                "allVisible": true,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 352,
                "betradarSportId": 1,
                "tournamentId": 38566,
                "name": "Indien",
                "leagueList": [
                    {
                        "betradarCategoryId": 352,
                        "betradarSportId": 1,
                        "tournamentId": 4052,
                        "name": "I-Liga",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 352,
                        "betradarSportId": 1,
                        "tournamentId": 38566,
                        "name": "Super League",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999000,
                "allVisible": true,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 66,
                "betradarSportId": 1,
                "tournamentId": 877,
                "name": "Israel",
                "leagueList": [
                    {
                        "betradarCategoryId": 66,
                        "betradarSportId": 1,
                        "tournamentId": 877,
                        "name": "Premier League",
                        "leagueList": null,
                        "leagueOrder": 999001,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 66,
                        "betradarSportId": 1,
                        "tournamentId": 1822,
                        "name": "National League",
                        "leagueList": null,
                        "leagueOrder": 999006,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999000,
                "allVisible": true,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 134,
                "betradarSportId": 1,
                "tournamentId": 932,
                "name": "Malta",
                "leagueList": [
                    {
                        "betradarCategoryId": 134,
                        "betradarSportId": 1,
                        "tournamentId": 932,
                        "name": "Premier League",
                        "leagueList": null,
                        "leagueOrder": 999001,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999000,
                "allVisible": true,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 303,
                "betradarSportId": 1,
                "tournamentId": 12006,
                "name": "Marokko",
                "leagueList": [
                    {
                        "betradarCategoryId": 303,
                        "betradarSportId": 1,
                        "tournamentId": 3640,
                        "name": "Botola",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 303,
                        "betradarSportId": 1,
                        "tournamentId": 12006,
                        "name": "Botola 2",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999000,
                "allVisible": true,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 12,
                "betradarSportId": 1,
                "tournamentId": 16753,
                "name": "Mexiko",
                "leagueList": [
                    {
                        "betradarCategoryId": 12,
                        "betradarSportId": 1,
                        "tournamentId": 16753,
                        "name": "Primera Division Clausura",
                        "leagueList": null,
                        "leagueOrder": 999021,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 12,
                        "betradarSportId": 1,
                        "tournamentId": 98228,
                        "name": "Liga Expansion MX Clausura",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999000,
                "allVisible": true,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 130,
                "betradarSportId": 1,
                "tournamentId": 883,
                "name": "Nordirland",
                "leagueList": [
                    {
                        "betradarCategoryId": 130,
                        "betradarSportId": 1,
                        "tournamentId": 883,
                        "name": "Premiership",
                        "leagueList": null,
                        "leagueOrder": 999001,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 130,
                        "betradarSportId": 1,
                        "tournamentId": 1885,
                        "name": "Irish Cup",
                        "leagueList": null,
                        "leagueOrder": 999006,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999000,
                "allVisible": true,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 22,
                "betradarSportId": 1,
                "tournamentId": 54,
                "name": "Schottland",
                "leagueList": [
                    {
                        "betradarCategoryId": 22,
                        "betradarSportId": 1,
                        "tournamentId": 54,
                        "name": "Premiership",
                        "leagueList": null,
                        "leagueOrder": 999001,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 22,
                        "betradarSportId": 1,
                        "tournamentId": 55,
                        "name": "Championship",
                        "leagueList": null,
                        "leagueOrder": 999003,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 22,
                        "betradarSportId": 1,
                        "tournamentId": 56,
                        "name": "League One",
                        "leagueList": null,
                        "leagueOrder": 999005,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999000,
                "allVisible": true,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 25,
                "betradarSportId": 1,
                "tournamentId": 1060,
                "name": "Schweiz",
                "leagueList": [
                    {
                        "betradarCategoryId": 25,
                        "betradarSportId": 1,
                        "tournamentId": 1060,
                        "name": "Super League",
                        "leagueList": null,
                        "leagueOrder": 999001,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999000,
                "allVisible": true,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 322,
                "betradarSportId": 1,
                "tournamentId": 3830,
                "name": "Südafrika",
                "leagueList": [
                    {
                        "betradarCategoryId": 322,
                        "betradarSportId": 1,
                        "tournamentId": 3830,
                        "name": "Premier League",
                        "leagueList": null,
                        "leagueOrder": 999001,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999000,
                "allVisible": true,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 131,
                "betradarSportId": 1,
                "tournamentId": 904,
                "name": "Wales",
                "leagueList": [
                    {
                        "betradarCategoryId": 131,
                        "betradarSportId": 1,
                        "tournamentId": 904,
                        "name": "Cymru Premier",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999000,
                "allVisible": true,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 102,
                "betradarSportId": 1,
                "tournamentId": 681,
                "name": "Zypern",
                "leagueList": [
                    {
                        "betradarCategoryId": 102,
                        "betradarSportId": 1,
                        "tournamentId": 681,
                        "name": "1. Division",
                        "leagueList": null,
                        "leagueOrder": 999001,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999000,
                "allVisible": true,
                "leagueMatchCount": 0
            }
        ]
    },
    {
        "id": "2",
        "leagueList": [
            {
                "betradarCategoryId": 113,
                "betradarSportId": 2,
                "tournamentId": 727,
                "name": "Australien",
                "leagueList": [
                    {
                        "betradarCategoryId": 113,
                        "betradarSportId": 2,
                        "tournamentId": 727,
                        "name": "NBL",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 113,
                        "betradarSportId": 2,
                        "tournamentId": 859,
                        "name": "WNBL (F)",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 189,
                "betradarSportId": 2,
                "tournamentId": 1815,
                "name": "Belgien",
                "leagueList": [
                    {
                        "betradarCategoryId": 189,
                        "betradarSportId": 2,
                        "tournamentId": 1815,
                        "name": "BLB",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 263,
                "betradarSportId": 2,
                "tournamentId": 2896,
                "name": "Brasilien",
                "leagueList": [
                    {
                        "betradarCategoryId": 263,
                        "betradarSportId": 2,
                        "tournamentId": 2896,
                        "name": "NBB",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 548,
                "betradarSportId": 2,
                "tournamentId": 10233,
                "name": "China",
                "leagueList": [
                    {
                        "betradarCategoryId": 548,
                        "betradarSportId": 2,
                        "tournamentId": 10233,
                        "name": "CBA",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 244,
                "betradarSportId": 2,
                "tournamentId": 2587,
                "name": "Dänemark",
                "leagueList": [
                    {
                        "betradarCategoryId": 244,
                        "betradarSportId": 2,
                        "tournamentId": 2587,
                        "name": "Basketligaen",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 111,
                "betradarSportId": 2,
                "tournamentId": 154,
                "name": "Deutschland",
                "leagueList": [
                    {
                        "betradarCategoryId": 111,
                        "betradarSportId": 2,
                        "tournamentId": 3467,
                        "name": "1. DBBL",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 111,
                        "betradarSportId": 2,
                        "tournamentId": 154,
                        "name": "BBL",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 111,
                        "betradarSportId": 2,
                        "tournamentId": 3701,
                        "name": "Pro A - 2. Bundesliga",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 117,
                "betradarSportId": 2,
                "tournamentId": 747,
                "name": "England",
                "leagueList": [
                    {
                        "betradarCategoryId": 117,
                        "betradarSportId": 2,
                        "tournamentId": 747,
                        "name": "BBL",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 149,
                "betradarSportId": 2,
                "tournamentId": 1069,
                "name": "Finnland",
                "leagueList": [
                    {
                        "betradarCategoryId": 149,
                        "betradarSportId": 2,
                        "tournamentId": 1069,
                        "name": "Korisliiga",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 110,
                "betradarSportId": 2,
                "tournamentId": 272,
                "name": "Frankreich",
                "leagueList": [
                    {
                        "betradarCategoryId": 110,
                        "betradarSportId": 2,
                        "tournamentId": 272,
                        "name": "Pro A",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 103,
                "betradarSportId": 2,
                "tournamentId": 153,
                "name": "International",
                "leagueList": [
                    {
                        "betradarCategoryId": 103,
                        "betradarSportId": 2,
                        "tournamentId": 11873,
                        "name": "ASEAN Basketball League",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 103,
                        "betradarSportId": 2,
                        "tournamentId": 74674,
                        "name": "Estonian-Latvian League",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 103,
                        "betradarSportId": 2,
                        "tournamentId": 153,
                        "name": "Euroleague",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 103,
                        "betradarSportId": 2,
                        "tournamentId": 38610,
                        "name": "VTB United League, Hauptrunde",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 546,
                "betradarSportId": 2,
                "tournamentId": 10140,
                "name": "Island",
                "leagueList": [
                    {
                        "betradarCategoryId": 546,
                        "betradarSportId": 2,
                        "tournamentId": 10140,
                        "name": "Urvalsdeild",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 483,
                "betradarSportId": 2,
                "tournamentId": 10074,
                "name": "Japan",
                "leagueList": [
                    {
                        "betradarCategoryId": 483,
                        "betradarSportId": 2,
                        "tournamentId": 10146,
                        "name": "B.League",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 483,
                        "betradarSportId": 2,
                        "tournamentId": 10074,
                        "name": "WJBL",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 170,
                "betradarSportId": 2,
                "tournamentId": 1550,
                "name": "Österreich",
                "leagueList": [
                    {
                        "betradarCategoryId": 170,
                        "betradarSportId": 2,
                        "tournamentId": 1550,
                        "name": "ABL",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 284,
                "betradarSportId": 2,
                "tournamentId": 3191,
                "name": "Polen",
                "leagueList": [
                    {
                        "betradarCategoryId": 284,
                        "betradarSportId": 2,
                        "tournamentId": 3191,
                        "name": "PLK",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 114,
                "betradarSportId": 2,
                "tournamentId": 20345,
                "name": "Schweden",
                "leagueList": [
                    {
                        "betradarCategoryId": 114,
                        "betradarSportId": 2,
                        "tournamentId": 737,
                        "name": "Ligan",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 114,
                        "betradarSportId": 2,
                        "tournamentId": 20345,
                        "name": "SBL (F)",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 109,
                "betradarSportId": 2,
                "tournamentId": 271,
                "name": "Spanien",
                "leagueList": [
                    {
                        "betradarCategoryId": 109,
                        "betradarSportId": 2,
                        "tournamentId": 271,
                        "name": "Liga ACB",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 375,
                "betradarSportId": 2,
                "tournamentId": 4234,
                "name": "Südkorea",
                "leagueList": [
                    {
                        "betradarCategoryId": 375,
                        "betradarSportId": 2,
                        "tournamentId": 4234,
                        "name": "KBL",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 112,
                "betradarSportId": 2,
                "tournamentId": 4124,
                "name": "Türkei",
                "leagueList": [
                    {
                        "betradarCategoryId": 112,
                        "betradarSportId": 2,
                        "tournamentId": 4124,
                        "name": "Super Lig, (F)",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 112,
                        "betradarSportId": 2,
                        "tournamentId": 10687,
                        "name": "TBL",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 112,
                        "betradarSportId": 2,
                        "tournamentId": 595,
                        "name": "TBSL",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 285,
                "betradarSportId": 2,
                "tournamentId": 3193,
                "name": "Ungarn",
                "leagueList": [
                    {
                        "betradarCategoryId": 285,
                        "betradarSportId": 2,
                        "tournamentId": 3193,
                        "name": "NB I",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 15,
                "betradarSportId": 2,
                "tournamentId": 177,
                "name": "USA",
                "leagueList": [
                    {
                        "betradarCategoryId": 15,
                        "betradarSportId": 2,
                        "tournamentId": 177,
                        "name": "NBA",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            }
        ]
    },
    {
        "id": "4",
        "leagueList": [
            {
                "betradarCategoryId": 64,
                "betradarSportId": 4,
                "tournamentId": 112,
                "name": "Dänemark",
                "leagueList": [
                    {
                        "betradarCategoryId": 64,
                        "betradarSportId": 4,
                        "tournamentId": 112,
                        "name": "Metal Ligaen",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 41,
                "betradarSportId": 4,
                "tournamentId": 93,
                "name": "Deutschland",
                "leagueList": [
                    {
                        "betradarCategoryId": 41,
                        "betradarSportId": 4,
                        "tournamentId": 93,
                        "name": "DEL",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 56,
                "betradarSportId": 4,
                "tournamentId": 13768,
                "name": "International",
                "leagueList": [
                    {
                        "betradarCategoryId": 56,
                        "betradarSportId": 4,
                        "tournamentId": 54069,
                        "name": "Alps Hockey League",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 56,
                        "betradarSportId": 4,
                        "tournamentId": 13768,
                        "name": "Erste Liga",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 176,
                "betradarSportId": 4,
                "tournamentId": 10435,
                "name": "Kanada",
                "leagueList": [
                    {
                        "betradarCategoryId": 176,
                        "betradarSportId": 4,
                        "tournamentId": 1649,
                        "name": "OHL",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 176,
                        "betradarSportId": 4,
                        "tournamentId": 10435,
                        "name": "WHL",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 306,
                "betradarSportId": 4,
                "tournamentId": 3659,
                "name": "Lettland",
                "leagueList": [
                    {
                        "betradarCategoryId": 306,
                        "betradarSportId": 4,
                        "tournamentId": 3659,
                        "name": "Latvian Hockey League",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 65,
                "betradarSportId": 4,
                "tournamentId": 125,
                "name": "Österreich",
                "leagueList": [
                    {
                        "betradarCategoryId": 65,
                        "betradarSportId": 4,
                        "tournamentId": 125,
                        "name": "EHL",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 98,
                "betradarSportId": 4,
                "tournamentId": 651,
                "name": "Slowakei",
                "leagueList": [
                    {
                        "betradarCategoryId": 98,
                        "betradarSportId": 4,
                        "tournamentId": 651,
                        "name": "Extraliga",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 42,
                "betradarSportId": 4,
                "tournamentId": 109,
                "name": "Tschechische Republik",
                "leagueList": [
                    {
                        "betradarCategoryId": 42,
                        "betradarSportId": 4,
                        "tournamentId": 109,
                        "name": "Extraliga",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 37,
                "betradarSportId": 4,
                "tournamentId": 2768,
                "name": "USA",
                "leagueList": [
                    {
                        "betradarCategoryId": 37,
                        "betradarSportId": 4,
                        "tournamentId": 2768,
                        "name": "AHL",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 37,
                        "betradarSportId": 4,
                        "tournamentId": 142,
                        "name": "NHL",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            }
        ]
    },
    {
        "id": "5",
        "leagueList": [
            {
                "betradarCategoryId": 3,
                "betradarSportId": 5,
                "tournamentId": 122185,
                "name": "ATP",
                "leagueList": [
                    {
                        "betradarCategoryId": 3,
                        "betradarSportId": 5,
                        "tournamentId": 122189,
                        "name": "ATP Adelaide, Einzel",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 3,
                        "betradarSportId": 5,
                        "tournamentId": 122183,
                        "name": "ATP Pune Einzel Männer, Indien",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 3,
                        "betradarSportId": 5,
                        "tournamentId": 122185,
                        "name": "ATP Pune Männer Doppel, Indien",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999000,
                "allVisible": true,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 6,
                "betradarSportId": 5,
                "tournamentId": 122213,
                "name": "WTA",
                "leagueList": [
                    {
                        "betradarCategoryId": 6,
                        "betradarSportId": 5,
                        "tournamentId": 122219,
                        "name": "WTA Adelaide 1, Doubles",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 6,
                        "betradarSportId": 5,
                        "tournamentId": 122217,
                        "name": "WTA Adelaide, (F)",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 6,
                        "betradarSportId": 5,
                        "tournamentId": 122213,
                        "name": "WTA Auckland Frauen Doppel",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999000,
                "allVisible": true,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 72,
                "betradarSportId": 5,
                "tournamentId": 124517,
                "name": "Challenger",
                "leagueList": [
                    {
                        "betradarCategoryId": 72,
                        "betradarSportId": 5,
                        "tournamentId": 124513,
                        "name": "ATP Challenger Canberra Doppel",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 72,
                        "betradarSportId": 5,
                        "tournamentId": 124517,
                        "name": "ATP Challenger Noumea Einzel ",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            },
            {
                "betradarCategoryId": 2414,
                "betradarSportId": 5,
                "tournamentId": 124207,
                "name": "United Cup",
                "leagueList": [
                    {
                        "betradarCategoryId": 2414,
                        "betradarSportId": 5,
                        "tournamentId": 124209,
                        "name": "United Cup, Doubles",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 2414,
                        "betradarSportId": 5,
                        "tournamentId": 124207,
                        "name": "United Cup, Singles",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            }
        ]
    },
    {
        "id": "10",
        "leagueList": [
            {
                "betradarCategoryId": 27,
                "betradarSportId": 10,
                "tournamentId": 46,
                "name": "International",
                "leagueList": [
                    {
                        "betradarCategoryId": 27,
                        "betradarSportId": 10,
                        "tournamentId": 46,
                        "name": "Matchups ",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            }
        ]
    },
    {
        "id": "12",
        "leagueList": [
            {
                "betradarCategoryId": 82,
                "betradarSportId": 12,
                "tournamentId": 46935,
                "name": "Rugby Union",
                "leagueList": [
                    {
                        "betradarCategoryId": 82,
                        "betradarSportId": 12,
                        "tournamentId": 53265,
                        "name": "English Premiership",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 82,
                        "betradarSportId": 12,
                        "tournamentId": 1600,
                        "name": "Frankreich - Top 14",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 82,
                        "betradarSportId": 12,
                        "tournamentId": 876,
                        "name": "Pro 14",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    },
                    {
                        "betradarCategoryId": 82,
                        "betradarSportId": 12,
                        "tournamentId": 46935,
                        "name": "Six Nations",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            }
        ]
    },
    {
        "id": "16",
        "leagueList": [
            {
                "betradarCategoryId": 43,
                "betradarSportId": 16,
                "tournamentId": 47,
                "name": "USA",
                "leagueList": [
                    {
                        "betradarCategoryId": 43,
                        "betradarSportId": 16,
                        "tournamentId": 47,
                        "name": "NFL",
                        "leagueList": null,
                        "leagueOrder": 999999999,
                        "allVisible": false,
                        "leagueMatchCount": 0
                    }
                ],
                "leagueOrder": 999999999,
                "allVisible": false,
                "leagueMatchCount": 0
            }
        ]
    }
]

constant.SportTypeList = SportTypeList
constant.demoMatches = demoMatches
export default constant;