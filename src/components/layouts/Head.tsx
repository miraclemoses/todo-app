import NextHead from "next/head";

type HeadProps = {
    title: string,
}

const HeadPage: React.FC<HeadProps> = (props) => {
    return (
        <NextHead>
            <title>{props.title}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </NextHead>
    )
}

export default HeadPage;
