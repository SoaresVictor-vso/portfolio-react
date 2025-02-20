"use client"

import React, { MouseEventHandler } from 'react';
import Image from 'next/image'
import { BiGlobe, BiLogoGithub, BiHourglass } from 'react-icons/bi';
import IconLink from '../IconLink';


export default function ProjectCard(props: {
    className: string,
    title: string,
    imageUri: string,
    children: string,
    color: string,
    githubUrl?: string,
    onClick: () => void,
    webUrl?: string
}) {
    const { children, imageUri, title, color } = props;

    const className = `mx-10 rounded-lg border-2 overflow-hidden text-zinc-300 border-${color}-700 ${props.className || ""}`
    const iconClassname = `text-${color}-700 text-lg`;
    return (
        <div className={className}>
            <div onClick={props.onClick as MouseEventHandler}>

                <div className="px-6 py-4">
                    <h1 className="font-bold text-xl mb-">{title}</h1>
                </div>

                <div className="flex justify-center mx-10 h-80">
                    <Image
                        src={imageUri}
                        alt="Uma representação visual do projeto"
                        className="object-contain max-w-full max-h-full"
                        width={300} // Optional: Set a max width
                        height={300} // Optional: Set a max height
                    />
                </div>

                <div className="px-6 py-4 h-60 overflow-y-scroll">
                    <p className="text-justify text-ellipsis">
                        {children}
                    </p>
                </div>
            </div>

            <footer className="px-6 py-4 flex justify-around ">
                <IconLink url={props.webUrl} icon={BiGlobe} className={iconClassname} />
                <IconLink url={props.githubUrl} icon={BiLogoGithub} className={iconClassname} />
                {!(props.webUrl || props.githubUrl) ? <BiHourglass className={iconClassname} /> : ""}
            </footer>
        </div>
    );
};