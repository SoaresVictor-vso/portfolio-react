export default function Technology(props: { icon: React.ComponentType<{ className?: string }>, name: string }) {
  const { icon: Icon, name } = props;
  return (
    <div className="flex w-max mx-auto">
      <Icon className="text-amber-700 text-4xl"/>
      <p className="text-xl ms-3 py-auto mx-auto">{name}</p>
    </div>
  )
}
