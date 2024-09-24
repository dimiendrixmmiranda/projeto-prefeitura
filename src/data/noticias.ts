import { Noticia } from "@/interfaces/Noticia"
const listaNoticias: Noticia[] = []
const adicionarNoticia = (objeto: Noticia) => listaNoticias.unshift(objeto)

adicionarNoticia({
    titulo: "Falcão de AÇO II no NORTE PIONEIRO é SUCESSO!",
    descricao: "A notícia ressalta o sucesso do evento \"Falcão de AÇO II\" no Norte Pioneiro, com grande participação do público e elogios à organização.",
    autor: "Dimi Martins",
    data: "01/09/24, 16:34",
    enderecoImagem: "./wireframe.png",
    conteudoMateria: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.'
    ],
    id: 1,
}),
adicionarNoticia({
    titulo: "Nova Escola Municipal é Inaugurada em Joaquim Távora",
    descricao: "A cidade de Joaquim Távora inaugurou uma nova escola municipal, beneficiando centenas de alunos da região.",
    autor: "Dimi Martins",
    data: "02/09/24, 10:20",
    enderecoImagem: "./wireframe.png",
    conteudoMateria: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.'
    ],
    id: 2,
}),
adicionarNoticia({
    titulo: "Feira Cultural de Joaquim Távora Atraí Artistas Locais",
    descricao: "A Feira Cultural anual da cidade foi um sucesso, reunindo artistas locais e artesãos que mostraram seus trabalhos para a comunidade.",
    autor: "Dimi Martins",
    data: "03/09/24, 14:15",
    enderecoImagem: "./wireframe.png",
    conteudoMateria: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.'
    ],
    id: 3,
}),
adicionarNoticia({
    titulo: "Joaquim Távora Realiza Campeonato de Futebol Amador",
    descricao: "O campeonato de futebol amador movimentou a cidade, com times de diversas regiões participando da competição.",
    autor: "Dimi Martins",
    data: "04/09/24, 18:00",
    enderecoImagem: "./wireframe.png",
    conteudoMateria: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.'
    ],
    id: 4,
}),
adicionarNoticia({
    titulo: "Campanha de Vacinação em Joaquim Távora Supera Expectativas",
    descricao: "A campanha de vacinação contra a gripe atingiu um número recorde de vacinados em Joaquim Távora.",
    autor: "Dimi Martins",
    data: "05/09/24, 09:45",
    enderecoImagem: "./wireframe.png",
    conteudoMateria: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.'
    ],
    id: 5,
}),
adicionarNoticia({
    titulo: "Joaquim Távora Inicia Projeto de Saneamento Básico",
    descricao: "Um novo projeto de saneamento básico foi lançado em Joaquim Távora, visando melhorar a infraestrutura da cidade.",
    autor: "Dimi Martins",
    data: "06/09/24, 11:20",
    enderecoImagem: "./wireframe.png",
    conteudoMateria: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.'
    ],
    id: 6,
}),
adicionarNoticia({
    titulo: "Festival Gastronômico de Joaquim Távora Atrai Turistas",
    descricao: "O festival gastronômico da cidade trouxe turistas de várias regiões, movimentando o comércio local.",
    autor: "Dimi Martins",
    data: "07/09/24, 15:40",
    enderecoImagem: "./wireframe.png",
    conteudoMateria: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.'
    ],
    id: 7,
}),
adicionarNoticia({
    titulo: "Joaquim Távora Recebe Novos Equipamentos para Hospital Municipal",
    descricao: "O Hospital Municipal de Joaquim Távora foi equipado com novos aparelhos para melhorar o atendimento à população.",
    autor: "Dimi Martins",
    data: "08/09/24, 08:00",
    enderecoImagem: "./wireframe.png",
    conteudoMateria: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.'
    ],
    id: 8,
}),
adicionarNoticia({
    titulo: "Escola de Joaquim Távora Promove Feira de Ciências",
    descricao: "Alunos da rede municipal de ensino participaram de uma feira de ciências, exibindo projetos inovadores.",
    autor: "Dimi Martins",
    data: "09/09/24, 10:30",
    enderecoImagem: "./wireframe.png",
    conteudoMateria: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.'
    ],
    id: 9,
}),
adicionarNoticia({
    titulo: "Biblioteca de Joaquim Távora Lança Projeto de Leitura Comunitária",
    descricao: "A Biblioteca Municipal lançou um novo projeto para incentivar a leitura entre crianças e adolescentes.",
    autor: "Dimi Martins",
    data: "10/09/24, 13:00",
    enderecoImagem: "./wireframe.png",
    conteudoMateria: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec egestas urna, in fermentum magna. Maecenas sed vulputate felis, non faucibus neque. Mauris mattis orci quis libero accumsan, quis posuere leo faucibus. Integer faucibus auctor consectetur. Cras iaculis tristique metus, sed sagittis erat tincidunt a. Maecenas imperdiet leo dui, eget porta arcu sodales nec. Donec imperdiet vestibulum mattis. Vestibulum non dolor lacus.'
    ],
    id: 10,
})


export default listaNoticias