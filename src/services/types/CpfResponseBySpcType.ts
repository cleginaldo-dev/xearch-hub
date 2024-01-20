interface Data {
  success: boolean
  created_at: string
  tem_restricao_spc: string
  nome: string
  idade: string
  dataNascimento: string
  tituloEleitoral: string
  extrangeiro: string
  cpf: string
  cpfRegiao: string
  situacaoCpf: string
  dataSituacaoCpf: string
  telefoneCelular: TelefoneCelular
  rg: string
  uf_rg: string
  nomeMae: string
  nomePai: string
  sexo: string
  signo: string
  endereco: Endereco
  dividasSpc: DividasSpc
  ultimoTelefone: string
  ultimoEndereco: string
  alertaDocumento: string
  dataConsulta: string
}
interface TelefoneCelular {
  'numero-ddd': string
  numero: string
}
interface Endereco {
  logradouro: string
  numero: string
  bairro: string
  cep: string
  cidade: Cidade
}
interface Cidade {
  nome: string
  estado: Estado
}
interface Estado {
  'sigla-uf': string
}
interface DividasSpc {
  'quantidade-total': string
  'data-ultima-ocorrencia': string
  'valor-total': string
  detalhes?: Detalhes[] | null
}
interface Detalhes {
  'nome-associado': string
  'data-inclusao': string
  'data-vencimento': string
  'nome-entidade': string
  contrato: string
  'registro-instituicao-financeira': string
  'comprador-fiador-avalista': string
  valor: string
  'cidade-associado'?: CidadeAssociado
  'telefone-associado'?: TelefoneAssociado
}
interface CidadeAssociado {
  nome: string
  estado: Estado
}
interface TelefoneAssociado {
  'numero-ddd': string
  numero: string
}
export interface CpfResponseBySpcType {
  data: {
    data: Data
  }
  ip: string
}
