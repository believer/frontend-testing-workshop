import { useQuery, QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const fetchLuke = async () => {
  const response = await fetch('https://swapi.dev/api/people/1/')
  return response.json()
}

const Luke = () => {
  const { isLoading, data } = useQuery('luke', fetchLuke)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return <div>{data.name}</div>
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Luke />
    </QueryClientProvider>
  )
}
