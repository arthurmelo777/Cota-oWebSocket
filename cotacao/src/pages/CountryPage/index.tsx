import Cotacao from '../../components/Cotacao'
import Header from '../../components/Header'

interface Props {
    bandeira: string,
    nome: string,
    moeda: string,
    code: string
    moedasParse: string[]
    nomeMoedasParse: string[]
}

const CountryPage = ({ bandeira, nome, moeda, code, moedasParse, nomeMoedasParse }: Props) => {

    return (
        <div>
            <Header></Header>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 d-flex flex-column align-items-end'>
                        <div className="image-container pt-3">
                            <img
                                src={bandeira}
                                className="card-img-top img-fluid rounded"
                                alt="..."
                                style={{ height: "100px" }}
                            />
                        </div>
                        <h3>{nome}</h3>
                        <p>{moeda}</p>
                    </div>
                    <div className="col-6">
                        <h4 className='pt-3 lh-1'>Preço do {moeda} hoje:</h4>
                        <table>
                            <Cotacao moeda={nomeMoedasParse[0]} sigla={`${code}-${moedasParse[0]}`} />
                            <Cotacao moeda={nomeMoedasParse[1]} sigla={`${code}-${moedasParse[1]}`} />
                            <Cotacao moeda={nomeMoedasParse[2]} sigla={`${code}-${moedasParse[2]}`} />
                            <Cotacao moeda={nomeMoedasParse[3]} sigla={`${code}-${moedasParse[3]}`} />
                            <Cotacao moeda={nomeMoedasParse[4]} sigla={`${code}-${moedasParse[4]}`} />
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountryPage;