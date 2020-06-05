import React, { Component } from 'react'

export default class Videos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            itens: [],
        }
    }

    componentDidMount() {

        let { id } = this.props.match.params

        const url = `https:/hamiltondeveloper-com-br.umbler.net/videos/${id}`

        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    itens: json,
                })
            });
    }


    render() {

        var { itens } = this.state;

        return (
            <div>
                {itens.map(item => (
                    <div className="container" key={item.pk_id}>
                        <div className="row my-4">
                            <div className="col-sm-12 branco">
                                <h1>{item.tx_titulo}</h1>
                            </div>
                        </div>
                        <div className="row mt-1 ">
                            <div className="col-sm-12 col-md-10 col-lg-6 text-center mx-auto">
                                <iframe width="100%" height="315" src={item.tx_link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div>
                            <div className="col-sm-12 col-md-10 col-lg-6 text-justify mx-auto">
                                <p>{item.tx_texto}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}