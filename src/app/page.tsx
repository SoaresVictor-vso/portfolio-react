'use client'

import Logo from "../components/logo";
import ProjectCard from "../components/projectCard/index";
import { MouseEventHandler, useState } from 'react'
import ProjectModal from "../components/projectModal/index";
import { BiData, BiLogoGit, BiLogoGithub, BiLogoNodejs, BiMailSend } from "react-icons/bi";
import { SiFirebase, SiNestjs, SiReact, SiTypescript, SiUnity, SiWhatsapp } from "react-icons/si";
import Technology from "@/components/Technology";
import { SlSocialInstagram } from "react-icons/sl";
import IconTextLink from "@/components/IconTextLink";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState([] as string[]);
  const [title, setTitle] = useState("");

  const projects = {
    games: [
      {
        name: 'Gravnetism',
        description: 'Gravinetism é um jogo criado em dois dias para uma game jam, em 2020, e posteriormente atualizado, com foco na melhoria dos controles. É um jogo que consiste em ativar/desativar a força gravitacional e a eletromagnética com o objetivo de fazer o elétron chegar ao próton evitando o anti-elétron.',
        imagesUri: ["/images/games/gravnetism/capa.png", "/images/games/gravnetism/level01.png"],
        githibUrl: "",
        webUrl: "https://spdz.itch.io/gravnetism"
      },
      {
        name: 'Underclock',
        description: 'Você está na torre de um relógio e precisa escapar! Este é um jogo de scape room, 2D, desenvolvido em 15 dias para uma Game Jam. Com o tema torre e duas semanas, um jogo que a princípio seria composto por vários andares, cada um com um desafio para escapar, se converteu em um único nível, composto por vários andares, e os objetos e pistas contidos em cada um deles é fundamental para resolver o jogo!',
        imagesUri: ["/images/games/underclock/biblioteca.png", "/images/games/underclock/lareira2.png", "/images/games/underclock/pergaminho.png", "/images/games/underclock/relogio.png", "/images/games/underclock/ovinho.png",],
        githibUrl: "",
        webUrl: "https://gamejolt.com/games/underclock/570890"
      },
      {
        name: 'Remember',
        description: 'Um jogo de plataforma, cujo objetivo é coletar todos os fragmentos de memória antes que o anterior se apague de sua mente. Com o tema "Preservar", foi um jogo feito com poucos detalhes e grande simplicidade, com foco em participar, sem grandes inovações. Ele consiste em uma bolinha que coleta fragmentos de cristal e deve chegar ao fim no menor tempo possível.',
        imagesUri: ["/images/games/remember/shard2.png", "/images/games/remember/capa.png"],
        githibUrl: "",
        webUrl: "https://spdz.itch.io/remember"
      },
      {
        name: 'Lighto',
        description: 'Um jogo de plataforma, 2D, multiplayer, ainda em desenvolvimento. Seu objetivo é reduzir a zero a vida do oponente, usando um ataque básico, e outras 4 habilidades à escolha do jogador.',
        imagesUri: ["/images/games/lighto/capa.png"],
        githibUrl: "",
        webUrl: ""
      },
    ],
    web: [
      {
        name: 'Ratio Auream',
        description: 'Um site que fatora um número em seus fatores primos.',
        imagesUri: ["/images/ratioauream_ico.png", "/images/ratioauream_home.png", "/images/ratioauream.png"],
        githibUrl: "https://github.com/SoaresVictor-vso/RatioAuream",
        webUrl: "https://ratioauream.vercel.app/Fatorar.html"
      },
      {
        name: 'Gerador de Gráficos',
        description: 'Um projeto web para a geração de gŕaficos simples com base nas entradas do usuário, construído de forma rápida.',
        imagesUri: ["/images/chartDoubleColumn.png", "/images/chartHome.png"],
        githibUrl: 'https://github.com/SoaresVictor-vso/charts/tree/master',
        webUrl: "https://charts-delta-lake.vercel.app/"
      },
      {
        name: 'Rastreamento de Métricas Corporais',
        description: 'Uma aplicação com foco no registro das métricas corporais e geração de gráficos, ainda em progresso. Obs: o link do github é para a primeira versão do backend, com um banco de dados postgres, a versão atual utiliza Firebase como banco de dados..',
        imagesUri: ["/images/BodyMeasureGraph.png", "/images/BodyMeasureRegister.png", "/images/BodyMeasureLogin.png"],
        githibUrl: "https://github.com/SoaresVictor-vso/body-measure",
        webUrl: "https://body-measure-front.vercel.app/"
      }
    ]
  }

  const openModal = (imgs: string[], title: string) => {
    setImages(imgs);
    setIsModalOpen(true);
    setTitle(title)
  }

  const closeModal = () => setIsModalOpen(false)
  const classIconLink = "text-amber-700 text-4xl m-auto"

  return (
    <div id="home" className="m-0 p-0 max-w-screen">
      <div className="flex items-center justify-center h-screen">

        <div className="my-0 mx-auto lg:pb-24">
          <Logo width={200} height={200} className="mx-auto " />
          <div className="">
            <h1 className="my-10 lg:mt-14 text-4xl text-center font-light">Olá,</h1>
            <a href="#about" className="text-xl lg:text-2xl text-center font-thin hover:text-amber-500 hover:font-normal">
              <h1 className="my-2 lg:my-5">Sou Victor Soares</h1>
            </a>
            <a href="#fullstack" className="text-xl lg:text-2xl text-center font-thin hover:text-fuchsia-500 hover:font-normal">
              <h1 className="my-2 lg:my-5">Desenvolvedor web fullstack</h1>
            </a>
            <a href="#games" className="text-xl lg:text-2xl text-center font-thin hover:text-teal-500 hover:font-normal">
              <h1 className="my-2 lg:my-5">Desenvolvedor de jogos</h1>
            </a>
          </div>
        </div>
      </div>
      <div id="fullstack" className="min-h-screen max-w-screen m-0">
        <h1 className="text-center text-xl lg:text-4xl py-10 font-thin text-fuchsia-500">
          Fullstack
        </h1>
        <div className="m-0 flex flex-wrap justify-between min-h-screen" >
          {
            projects.web.map(p => {
              return (
                <div key={p.name} className="mx-auto w-80vw sm:mx-0 sm:w-1/2 lg:w-1/3 xl:w-1/4">
                  <ProjectCard className="mt-5 mx-5" color="fuchsia"
                    title={p.name} imageUri={p.imagesUri[0]} githubUrl={p.githibUrl}
                    webUrl={p.webUrl} onClick={() => openModal(p.imagesUri, p.name)}>{p.description}</ProjectCard>
                </div>
              )
            })
          }
        </div>
      </div>
      <div id="games" className="min-h-screen max-w-screen m-0">
        <h1 className="text-center text-xl lg:text-4xl py-10 font-thin text-teal-500">
          Games
        </h1>
        <div className="m-0 flex flex-wrap justify-between min-h-screen" >
          {
            projects.games.map(p => {
              return (
                <div key={p.name} className="mx-auto w-80vw sm:mx-0 sm:w-1/2 lg:w-1/3 xl:w-1/4">
                  <ProjectCard className="mt-5 mx-5" color="teal"
                    title={p.name} imageUri={p.imagesUri[0]} githubUrl={p.githibUrl}
                    webUrl={p.webUrl} onClick={() => openModal(p.imagesUri, p.name)}>{p.description}</ProjectCard>
                </div>
              )
            })
          }
        </div>
      </div>
      <div id="about" className="min-h-screen max-w-screen m-0 mt-5">
        <h1 className="text-center text-xl lg:text-4xl py-10 font-thin text-amber-700">
          Sobre o Desenvolvedor
        </h1>
        <div className="m-auto w:11/12 lg:w-3/4  text-lg text-center lg:text-xl font-thin px-10 lg:px-48 ">

          <p className="text-wrap ">
            Minha trajetória na área de desenvolvimento de software teve início com o objetivo
            de criar jogos digitais. Desde os primeiros passos na programação, fui motivado pelo
            interesse em transformar ideias em algo com o que as pessoas poderiam ver, ouvir e interagir.
          </p>

          <p className="text-wrap pt-5">
            No entanto, minha curiosidade me levou a explorar outras áreas da tecnologia, o que despertou
            um grande interesse pelo desenvolvimento web, o que expandiu minha perspectiva
            e me proporcionou a oportunidade de ingressar profissionalmente no setor, onde venho atuando
            desde então.
          </p>


        </div>

        <h2 className="mt-24 mb-12 text-center text-lg lg:text-3xl font-thin text-amber-700">
          Tecnologias
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-10/12 m-auto py-5 font-thin mb-10">
          <Technology icon={BiLogoGit} name="Conhecimentos em Git" />
          <Technology icon={BiLogoNodejs} name="Desenvolvedor Fullstack Node Vanila" />
          <Technology icon={SiFirebase} name="Conhecimentos em Firebase" />
          <Technology icon={BiData} name="Conhecimentos em SQL" />
          <Technology icon={SiNestjs} name="Noções em Nest" />
          <Technology icon={SiReact} name="Noções em React" />
          <Technology icon={SiTypescript} name="Noções em Typescript" />
          <Technology icon={SiUnity} name="Desenvolvedor Unity" />
        </div>


      </div>
      <footer className="bg-zinc-800 h-full">
        <h2 className="text-2xl lg:text-3xl font-thin py-5 text-center">Contatos</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2  ">
          {/* <div className="w-full p-auto text-center"> */}
          <IconTextLink
            icon={BiLogoGithub} className={classIconLink}
            url="https://github.com/SoaresVictor-vso" name="SoaresVictor-vso" />

          <IconTextLink
            icon={SlSocialInstagram} className={classIconLink}
            url="https://instagram.com/svict.or_" name="svict.or_" />


          <IconTextLink
            icon={BiMailSend} className={classIconLink}
            url="mailto:soaresvictor479@gmail.com" name="soaresvictor479@gmail.com" />

          <IconTextLink
            icon={SiWhatsapp} className={classIconLink}
            url="mailto:soaresvictor479@gmail.com" name="WhatsApp" />

          {/* </div> */}
        </div>

      </footer>

      <ProjectModal
        isOpen={isModalOpen}
        onRequestClose={closeModal as MouseEventHandler}
        images={images}
        title={title}
      />
    </div>
  )
}
