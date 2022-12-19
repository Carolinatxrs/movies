CREATE DATABASE IF NOT EXISTS filmesdb;

USE filmesdb;

CREATE TABLE
    filmes(
        id int PRIMARY KEY AUTO_INCREMENT,
        titulo VARCHAR(50) NOT NULL,
        descricao VARCHAR(225) NOT NULL,
        autor VARCHAR(50) NOT NULL,
        imagem VARCHAR(225) NOT NULL
    );

INSERT INTO
    filmes(
        id,
        titulo,
        descricao,
        autor,
        imagem
    )
VALUES (
        '38',
        'Meu Amigo Totoro',
        'Duas meninas se mudam para o interior do Japão para cuidar de sua mãe doente e fazem amizade com criaturas mágicas que habitam os arredores de seu novo lar.',
        'Hayao Miyazaki',
        'images.jpg1671343304760.jpg'
    ), (
        '39',
        'Túmulo dos Vagalumes',
        'Dois irmãos japoneses tentam sobreviver, numa cabana abandonada, às agruras da Segunda Guerra Mundial. Fome, solidão e desesperança marcam a espera pelo retorno incerto do pai que está no front da batalha.',
        'Isao Takahata',
        'images (2).jpg1671343479163.jpg'
    ), (
        '40',
        'O Serviço de Entregas da Kiki',
        'Nesta animação, uma jovem bruxa se afasta de sua família para praticar sua feitiçaria. Mas logo ela percebe que fazer novos amigos pode ser difícil.',
        'Hayao Miyazaki',
        'images (3).jpg1671343586380.jpg'
    ), (
        '41',
        'Memórias de Ontem',
        'Abacaxis. As primeiras paixões. Uma jovem de 27 anos viaja de Tóquio para o interior e relembra momentos de sua infância.',
        'Isao Takahata',
        'images (4).jpg1671344008329.jpg'
    ), (
        '42',
        'Eu Posso Ouvir o Oceano',
        'O estudante universitário Taku recorda a chegada da aluna Rikako, dois anos atrás, e o fatídico verão que colocou à prova sua amizade com Yutaka.',
        'Tomomi Mochizuki',
        'images (5).jpg1671344086108.jpg'
    ), (
        '43',
        'Princesa Mononoke',
        'Um príncipe sofre com uma maldição mortal e parte em busca da cura. Ele acaba indo parar no meio da batalha entre uma cidade mineradora e os animais da floresta.',
        'Hayao Miyazaki',
        'images (6).jpg1671344165724.jpg'
    ), (
        '44',
        'A Viagem de Chihiro',
        'Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.',
        'Hayao Miyazaki',
        'images (1).jpg1671344211961.jpg'
    ), (
        '45',
        'O Castelo Animado',
        'A jovem Sophie trabalha na chapelaria de seu falecido pai em uma cidade monótona. Mas as coisas mudam de figura depois que um feitiço a transforma em uma mulher idosa.',
        'Hayao Miyazaki',
        'images (7).jpg1671344300041.jpg'
    );