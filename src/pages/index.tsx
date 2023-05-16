import { DefaultLayout } from '@layouts/Default'
import type { GetStaticProps, NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <DefaultLayout title="Início">
      <section>Your index page component</section>
    </DefaultLayout>
  )
}

interface PageProps extends GetStaticProps {
  locale: string
}

export async function getStaticProps({ locale }: PageProps) {
  return {
    props: {
      messages: (await import(`@public/locales/${locale.toString()}.json`))
        .default,
    },
  }
}

export default Home
