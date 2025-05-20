import { createFileRoute } from '@tanstack/react-router'
import { PageContent, PageHeader } from 'src/components'
import { colorsPageClassName } from './colors.css'

function ColorsPage() {
  return (
    <div className={colorsPageClassName}>
      <PageHeader title={'Colors'} description={'Colors'} />
      <PageContent></PageContent>
    </div>
  )
}

export const Route = createFileRoute('/_layout/colors')({
  component: ColorsPage
})
