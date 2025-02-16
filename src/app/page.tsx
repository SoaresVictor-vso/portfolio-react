'use client'

import { Metadata } from "next";
import Logo from "../components/logo";
import ProjectCard from "../components/projectCard/index";
import { MouseEventHandler, SetStateAction, useEffect, useState } from 'react'
import ProjectModal from "../components/projectModal/index";

// export const metadata: Metadata = {
//   title: "home",
//   openGraph: {
//     title: 'Portfólio de Victor Soares',
//     description: 'Portfólio :)',
//     images: [
//       "../assets/images/Duck.jpeg"
//     ],
//   },
//   robots: {}
// }


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState([] as string[]);
  const [title, setTitle] = useState("");

  const projects = [
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

  const openModal = (imgs: string[], title: string) => {
    setImages(imgs);
    console.log(images)
    setIsModalOpen(true);
    setTitle(title)
  }

  return (
    <div id="home" className="m-0 p-0 max-w-screen">
      <div className="flex items-center justify-center h-screen">

        <div className="my-0 mx-auto lg:pb-24">
          <Logo width={200} height={200} className="mx-auto " />
          <div className="">
            <h1 className="my-10 lg:mt-14 text-4xl text-center font-light">Olá,</h1>
            <a href="#victor" className="text-xl lg:text-2xl text-center font-thin hover:text-amber-500 hover:font-normal">
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
      <div id="fullstack" className="h-min-screen max-w-screen m-0">
        <h1 className="text-center text-xl lg:text-4xl py-10 font-thin text-fuchsia-500">
          Fullstack
        </h1>
        <div className="m-0 flex flex-wrap justify-between min-h-screen" >
          {
            projects.map(p => {
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
      <div id="games" className="h-screen bg-teal-500">foo</div>
      <div id="victor" className="h-screen bg-amber-500">foo</div>

      <ProjectModal
        isOpen={isModalOpen}
        onRequestClose={(event: any) => { setIsModalOpen(false) }}
        images={images}
        title={title}
      />
    </div>
  )
}
