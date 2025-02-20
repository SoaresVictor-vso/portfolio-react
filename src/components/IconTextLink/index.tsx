export default function IconTextLink(props: { icon: React.ComponentType<{ className?: string }>, name: string, url: string, className?: string, }) {
    const { className, icon: Icon, name, url } = props;
    return (
        <a className="flex w-max mx-auto my-5" href={url || "#"} target="_blank">
            <Icon className={className || "text-amber-700 text-4xl"} />
            <p className="text-xl ms-3 py-auto mx-auto">{name}</p>
        </a>
    )
}
