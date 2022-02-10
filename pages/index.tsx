import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
  const { t } = useTranslation()

  return (
    <div>
      <Head>
        <title>{t('app-name')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{t('app-name')}</h1>
    </div>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
