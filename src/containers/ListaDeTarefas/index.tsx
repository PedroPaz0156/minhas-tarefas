import Tarefa from '../../components/TarefaCard'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver a aula 3 da EBAC',
    status: 'pendente',
    prioridade: 'importante'
  },
  {
    titulo: 'Pagar a conta da internet',
    descricao: 'Baixar a fatura no Gmail',
    status: 'concluída',
    prioridade: 'urgente'
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Treinar pernas',
    status: 'pendente',
    prioridade: 'importante'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
