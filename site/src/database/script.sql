create database mbp;

use mbp;

show tables;

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