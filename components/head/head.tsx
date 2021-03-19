import NextHead from 'next/head';

interface IHeadPorps {
  title: string
}

export const Head: React.FC<IHeadPorps> = ({ title }) => {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/** Here you could add all the meta related tags that helps for SEO and */}
    </NextHead>
  )
};

