create database mbp;

use mbp;

show tables;

create user "usuario"@'localhost' identified by '54157592808';

grant select, insert, delete, update on mbp.* to "usuario"@"localhost";

CREATE TABLE projeto (
    idProjeto INT AUTO_INCREMENT PRIMARY KEY,
    nomeProjeto VARCHAR(45) NOT NULL,
    descricao VARCHAR(2000),
    privacidade CHAR(7),
    dtCriacaoProjeto DATETIME,
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuarios(idUsuario) on delete cascade
);
CREATE TABLE areaProj (
    idArea INT AUTO_INCREMENT PRIMARY KEY,
    nomeArea VARCHAR(45),
    formato VARCHAR(25),
    altura INT,
    largura INT,
    comprimento INT,
    raio INT,
    fkProjeto INT,
    fkBloco INT,
    FOREIGN KEY (fkProjeto) REFERENCES projeto(idProjeto) on delete cascade,
    FOREIGN KEY (fkBloco) REFERENCES blocos(idBloco) 
);

CREATE TABLE blocos (
    idBloco INT PRIMARY KEY,
    nomeBloco VARCHAR(250) NOT NULL,
    dureza FLOAT,
    disponibilidade VARCHAR(45),
    materiaPrima1Quantidade INT,
    materiaPrima2Quantidade INT,
    dropItens INT,
    fkMateriaPrima1 INT,
    fkMateriaPrima2 INT,
    FOREIGN KEY (fkMateriaPrima1) REFERENCES blocos(idBloco),
    FOREIGN KEY (fkMateriaPrima2) REFERENCES blocos(idBloco)
);
CREATE TABLE usuarios (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45),
    email VARCHAR(60) UNIQUE,
    senha VARCHAR(25),
    nick VARCHAR(30),
    dtNasc DATE,
    dtCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
select * from usuarios;
select * from blocos;
select * from projeto;
select * from areaProj;

describe usuarios;
describe blocos;
describe projeto;
describe areaProj;

alter table projeto modify column dtCriacaoProjeto datetime;

truncate table areaProj;
truncate table projeto;

drop table projeto;
drop table areaProj;
drop table usuarios;

alter table blocos rename column nome to nomeBloco;

select * from usuarios 
	join projeto on fkUsuario = idUsuario
    join areaProj on fkProjeto = idProjeto
    join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
    left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
    left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
    where idUsuario = 1;

select * from usuarios 
	join projeto on fkUsuario = idUsuario
	join areaProj on fkProjeto = idProjeto
	join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
	left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
	left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco;
    
select projeto.*, areaProj.*, materiaPrincipal.*,
	materiaPrima1.nomeBloco as nomeBloco1, materiaPrima1.dureza as durezaBloco1, materiaPrima1.dropItens as materiaPrima1,
	materiaPrima2.nomeBloco as nomeBloco2, materiaPrima2.dureza as durezaBloco2, materiaPrima2.dropItens as materiaPrima2  
    from projeto 
	join areaProj on idProjeto = fkProjeto 
    join blocos as materiaPrincipal on fkBloco = idBloco
    left join blocos as materiaPrima1 on materiaPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
    left join blocos as materiaPrima2 on materiaPrima1.fkMateriaPrima2 = materiaPrima2.idBloco
    where fkUsuario = 1;

insert into blocos values
    (1, 'Andesito', 1.5, 'coletável', null, null, 1, null, null),
    (2, 'Andesito polido', 1.5, 'criável', 4, null, 1, 1, null),
    (3, 'Areia', 0.5, 'coletável', null, null, 1, null, null),
    (4, 'Basalto', 1.25, 'coletável', null, null, 1, null, null),
    (5, 'Basalto liso', 1.25, 'criável', 1, null, 1, 4, null),
    (6, 'Cascalho', 0.6, 'coletável', null, null, 1, null, null),
    (7, 'Ardósia profunda', 3, 'coletável', null, null, 1, null, null),
    (8, 'Bloco de grama', 0.6, 'coletável', null, null, 1, null, null),
    (9, 'Bloco de minério de cobre', 3, 'coletável', null, null, 2, null, null),
    (10, 'Bloco de minério de cobre profundo', 4.5, 'coletável', null, null, 2, null, null),
    (11, 'Bloco de cobre', 3, 'criável', 9, 9, 1, 9, 10),
    (12, 'Bloco de minério de diamante', 3, 'coletável', null, null, 1, null, null),
    (13, 'Musgo', 0.1, 'coletável', null, null, 1, null, null),
    (14, 'Bloco de minério ancestral', 30, 'coletável', null, null, 1, null, null),
    (15, 'Bloco de minério de ouro', 3, 'coletável', null, null, 1, null, null),
    (16, 'Bloco de minério de ouro profundo', 4.5, 'coletável', null, null, 1, null, null),
    (17, 'Bloco de netherite', 50, 'criável', 36, 36, 1, 14, 15),
    (18, 'Prismarinho', 1.5, 'coletável', null, null, 1, null, null),
    (19, 'Bloco de minério de quartzo', 3, 'coletável', null, null, 1, null, null),
    (20, 'Bloco de quartzo', 0.8, 'criável', 4, null, 1, 19, null),
    (21, 'Pó de concreto', 0.5, 'criável', 4, 4, 1, 3, 6),
    (22, 'Bloco de minério de ferro', 3, 'coletável', null, null, 1, null, null),
    (23, 'Bloco de minério de ferro profundo', 4.5, 'coletável', null, null, 1, null, null),
    (24, 'Bloco de ferro', 3, 'criável', 9, 9, 1, 22, 23),
    (25, 'Bloco de ouro puro', 5, 'criável', 9, 9, 1, 15, 16),
    (26, 'Cogumelo brilhante', 1, 'coletável', null, null, 1, null, null),
    (27, 'Diorito', 1.5, 'coletável', null, null, 1, null, null),
    (28, 'Diorito polido', 1.5, 'criável', 4, null, 1, 27, null),
    (29, 'Bloco de estalactite', 1.5, 'coletável', null, null, 1, null, null),
    (30, 'Gelo', 0.5, 'coletável', null, null, 1, null, null),
    (31, 'Gelo compactado', 0.5, 'coletável', null, null, 1, null, null),
    (32, 'Gelo azul', 2.8, 'criável', 9, null, 1, 31, null),
    (33, 'Granito', 1.5, 'coletável', null, null, 1, null, null),
    (34, 'Granito polido', 1.5, 'criável', 4, null, 1, 33, null),
    (35, 'Lama', 0.5, 'coletável', null, null, 1, null, null),
    (36, 'Lama compactada', 1.5, 'criável', 1, null, 1, 35, null),
    (37, 'Netherrack', 0.4, 'coletável', null, null, 1, null, null),
    (38, 'Obsidiana chorona', 50, 'coletável', null, null, 1, null, null),
    (39, 'Obsidian', 50, 'coletável', null, null, 1, null, null),
    (40, 'Pedra', 1.5, 'coletável', null, null, 1, null, null),
    (41, 'Pedra lisa', 2, 'criável', 1, null, 1, 40, null),
    (42, 'Bloco de concreto', 0.5, 'criável', 1, 0, 1, 21, null),
    (43, 'Pedra negra', 1.5, 'coletável', 1, 0, 1, 21, null),
    (44, 'Arenito', 0.8, 'criável', 4, null, 1, 3, null),
    (45, 'Arenito liso', 0.8, 'criável', 4, null, 1, 44, null),
    (46, 'Tronco de madeira', 2, 'coletável', null, null, 1, null, null),
    (47, 'Tábua de madeira', 2, 'criável', 1, null, 1, 46, null),
    (48, 'Terracota', 1.25, 'coletável', null, null, 1, null, null),
    (49, 'Tijolos de lama', 1.5, 'criável', 4, null, 1, 35, null),
    (50, 'Tijolos de pedra', 1.5, 'criável', 4, null, 1, 40, null),
    (51, 'Tijolos do nether', 2, 'coletável', null, null, 1, null, null),
    (52, 'Argila', 0.6, 'coletável', null, null, 4, null, null),
    (53, 'Tijolos', 2, 'criável', 4, null, 1, 52, null),
    (54, 'Vidro', 2, 'criável', 1, null, 1, 3, null),
    (55, 'Areia vermelha', 0.5, 'coletável', null, null, 1, null, null),
    (56, 'Bloco de ametista', 1.5, 'coletável', null, null, 1, null, null),
    (57, 'Tijolos de prismarinho', 1.5, 'coletável', null, null, 1, null, null),
    (58, 'Minério de carvão da deepslate', 4.5, 'coletável', null, null, 1, null, null),
    (59, 'Minério de carvão', 3, 'coletável', null, null, 1, null, null),
    (60, 'Bloco de carvão', 5, 'criável', 9, null, 1, 59, null),
    (61, 'Bloco de cobre puro', 5, 'criável', 9, null, 1, 9, null),
    (62, 'Bloco de diamante', 5, 'criável', 9, null, 1, 12, null),
    (63, 'Minério de esmeralda da deepslate', 4.5, 'coletável', null, null, 1, null, null),
    (64, 'Minério de esmeralda', 3, 'coletável', null, null, 1, null, null),
    (65, 'Bloco de esmeralda', 5, 'criável', 9, null, 1, 64, null),
    (66, 'Minério de lapis lazuli', 3, 'coletável', null, null, 4, null, null),
    (67, 'Minério de lapis lazuli da deepslate', 4.5, 'coletável', null, null, 4, null, null),
    (68, 'Bloco de lapis lazuli', 3, 'criável', 9, null, 1, 66, null),
    (69, 'Bloco de ouro', 3, 'criável', 9, null, 1, 15, null),
    (70, 'Minério de redstone', 3, 'coletável', null, null, 4, null, null),
    (71, 'Minério de redstone da deepslate', 4.5, 'coletável', null, null, 4, null, null),
    (72, 'Bloco de redstone', 4.5, 'criável', 9, null, 1, 70, null),
    (73, 'Cut cooper', 3, 'criável', 4, null, 4, 9, null),
    (74, 'Gilded blackstone', 1.5, 'coletável', null, null, 1, null, null),
    (75, 'Minério de ouro do nether', 3, 'coletável', null, null, 2, null, null),
    (76, 'Pedra do end', 3, 'coletável', null, null, 1, null, null),
    (77, 'Pedra negra polida', 2, 'criável', 4, null, 1, 43, null),
    (78, 'Prismarinho escuro', 1.5, 'coletável', null, null, 1, null, null),
    (79, 'Red sandstone', 0.8, 'criável', 4, null, 1, 55, null);

insert into blocos(idBloco, nomeBloco, dureza, disponibilidade, dropItens) values
	(80, 'Minério de diamante da deepslate', 4.5, 'coletável', 1);

select * from blocos where nomeBloco like'%lana%';

update blocos set nomeBloco = 'Lama compactada' where idBloco = 36;

select * from usuarios 
	left join projeto on fkUsuario = idUsuario
    left join areaProj on fkProjeto = idProjeto
    left join blocos as materialPrincipal on fkBloco = materialPrincipal.idBloco
    left join blocos as materiaPrima1 on materialPrincipal.fkMateriaPrima1 = materiaPrima1.idBloco
    left join blocos as materiaPrima2 on materialPrincipal.fkMateriaPrima2 = materiaPrima2.idBloco
    where idUsuario = 1 and nomeProjeto like '%t%';