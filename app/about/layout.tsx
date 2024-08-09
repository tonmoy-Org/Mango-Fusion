import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About - MangoFusion',
    description: 'Welcome to MangoFusion, your ultimate destination for the finest and most delicious mangoes. Discover the exquisite flavors of Khirsapati and Langra mangoes from the heart of Rajshahi. Explore our premium collection and enjoy the sweet and juicy essence of tropical mangoes delivered right to your doorstep.',
}

const layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div> {children}</div>
    )
}


export default layout;