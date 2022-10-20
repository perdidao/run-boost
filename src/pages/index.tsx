import { DefaultLayout } from '@layouts/Default'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <DefaultLayout title="Início">
      <section>
        Your index page component
      </section>
    </DefaultLayout>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      messages: (await import(`@public/locales/${locale.toString()}.json`)).default
    }
  };
}

export default Home
