export interface GroupElementProps { name: string }

export const GroupElement = ({ name }: GroupElementProps) => {
	return (
		<article>
			<p>{name}</p>
		</article>
	)
}
