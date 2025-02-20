export default function IconLink(props: { url?: string, className?: string, icon?: React.ComponentType<{ className?: string }> }) {
    const { url, className, icon: Icon } = props;
    if (url && Icon)
        return (
            <a href={url} target="_blank" rel="noopener noreferrer">
                <Icon className={className} />
            </a>
        )
}