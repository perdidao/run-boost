import { HomeContent } from '@components/HomeContent'
import { DefaultLayout } from '@layouts/Default'
import type { GetStaticProps, NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <DefaultLayout title="Início">
      <HomeContent />
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
