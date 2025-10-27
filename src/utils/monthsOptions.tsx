import { Text } from 'react-native'

import styles from '../styles/Designate.style'

const options = [
  { label: (<Text style={styles.optionText}>Janeiro - Fevereiro</Text>), value: 'Janeiro - Fevereiro' },
  { label: (<Text style={styles.optionText}>Março - Abril</Text>), value: 'Março - Abril' },
  { label: (<Text style={styles.optionText}>Maio - Junho</Text>), value: 'Maio - Junho' },
  { label: (<Text style={styles.optionText}>Julho - Agosto</Text>), value: 'Julho - Agosto' },
  { label: (<Text style={styles.optionText}>Setembro - Outubro</Text>), value: 'Setembro - Outubro' },
  { label: (<Text style={styles.optionText}>Novembro - Dezembro</Text>), value: 'Novembro - Dezembro' },
]

export default options;