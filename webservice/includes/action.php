<?php
/**
 * @return array
 */
function data()
{
    return [
        [
            "id" => 0,
            "name" => "Daenerys Targaryen",
            "title" => "Mother of Dragons",
            "img" => "webservice/img/daenerys.jpg"
        ],
        [
            "id" => 1,
            "name" => "Jon Snow",
            "title" => "King in the North",
            "img" => "webservice/img/jon-snow.jpg"
        ],
        [
            "id" => 2,
            "name" => "Arya Stark",
            "title" => "No One",
            "img" => "webservice/img/arya-stark.jpg"
        ],
        [
            "id" => 3,
            "name" => "Tyrion Lannister",
            "title" => "Hand of the Queen",
            "img" => "webservice/img/tyrion-lannister.jpg"
        ],
        [
            "id" => 4,
            "name" => "Cersei Lannister",
            "title" => "Queen of the Seven Kingdoms",
            "img" => "webservice/img/cersei.jpg"
        ],
        [
            "id" => 5,
            "name" => "Sansa Stark",
            "title" => "Lady of Winterfell",
            "img" => "webservice/img/sansa-stark.jpeg"
        ],
        [
            "id" => 6,
            "name" => "Jaime Lannister",
            "title" => "Kingslayer",
            "img" => "webservice/img/jaime-lannister.jpg"
        ],
        [
            "id" => 7,
            "name" => "Bran Stark",
            "title" => "Three-Eyed Raven",
            "img" => "webservice/img/bran-stark.jpg"
        ],
        [
            "id" => 8,
            "name" => "Sandor Clegane",
            "title" => "The Hound",
            "img" => "webservice/img/the-hound.jpg" // toevoegen van afbeelding via naam
        ],
        [
            "id" => 9,
            "name" => "Brienne of Tarth",
            "title" => "Knight of the Seven Kingdoms",
            "img" => "webservice/img/brienne-tarth.jpeg"
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function details($id)
{
    $tags = [
        1 => [
            "family" => "Stark",
        ],
        2 => [
            "family" => "Lannister",
        ],
        3 => [
            "family" => "Targaryen",
        ],
        4 => [
            "family" => "Baratheon",
        ],
        5 => [
            "family" => "Greyjoy",
        ],
        6 => [
            "family" => "Tully",
        ],
        7 => [
            "family" => "Arryn",
        ],
        8 => [
            "family" => "Martell",
        ],
        9 => [
            "family" => "Tyrell",
        ],
        10 => [
            "family" => "Bolton",
        ],
    ];

    return $tags[$id];
}


